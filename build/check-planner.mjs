// Seating planner checks. Run with Playwright's Chromium:
//
//   node build/check-planner.mjs                 (checks index.html)
//   TARGET=ensdashboards/index.html node build/check-planner.mjs
//
// Needs `playwright` resolvable (npm i -D playwright, or set
// PLAYWRIGHT_MODULE to its index.mjs) and a CSV under FIXTURES (a comma
// separated list of NWEA export files; defaults to the bundled sample data
// when none is given).
//
// What it holds the planner to:
//   - the room builds without a page error for every arrangement of desks
//     and every turn;
//   - tables never overlap on the default grid and never leave the room;
//   - the room and its desks are real sizes, and furniture can be resized
//     by typing, by its grip and by keyboard;
//   - every name fits its desk whole, on screen and on the wall plan, with
//     no ellipsis;
//   - a student can be moved by keyboard, by drag-and-drop onto a seat (a
//     taken seat swaps), and undone;
//   - nothing in localStorage names a student, whatever the teacher did;
//   - the wall print carries no score, no growth and no band mark, and the
//     teacher print carries them all;
//   - the CSV has one row per seat.
import path from "node:path";
import { pathToFileURL } from "node:url";

const playwrightModule = process.env.PLAYWRIGHT_MODULE || "playwright";
const { chromium } = await import(playwrightModule);
const TARGET = path.resolve(process.env.TARGET || "index.html");
const FIXTURES = (process.env.FIXTURES || "").split(",").map((item) => item.trim()).filter(Boolean);

let failures = 0;
function check(condition, message) {
  if (condition) console.log("  ok   " + message);
  else { failures += 1; console.log("  FAIL " + message); }
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await page.goto(pathToFileURL(TARGET).href);
await page.evaluate(() => {
  try {
    localStorage.clear();
    localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ reducedMotion: true, supportPromptOff: true, supportPromptLastShown: Date.now(), view: "full" }));
  } catch (error) { /* storage may be unavailable */ }
});
await page.reload();
if (FIXTURES.length) await page.setInputFiles("#csvInput", FIXTURES);
else await page.click("#sampleBtn");
await page.waitForTimeout(2500);

console.log("Room");
await page.click("#plannerLaunch");
await page.waitForTimeout(500);
const geometry = async () => page.evaluate(() => {
  const board = document.querySelector("[data-classroom-board]");
  const rects = [...board.querySelectorAll(".room-table")].map((el) => el.getBoundingClientRect());
  const room = board.getBoundingClientRect();
  let overlaps = 0;
  rects.forEach((a, i) => rects.forEach((b, j) => {
    if (j > i && a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1) overlaps += 1;
  }));
  const outside = rects.filter((r) => r.left < room.left - 1 || r.right > room.right + 1 || r.top < room.top - 1 || r.bottom > room.bottom + 1).length;
  return { tables: rects.length, overlaps, outside, seats: board.querySelectorAll(".seat").length, filled: board.querySelectorAll(".seat.is-filled").length };
});
const first = await geometry();
check(first.tables > 0, "tables drawn: " + first.tables);
check(first.overlaps === 0, "no tables overlap on the default grid");
check(first.outside === 0, "no table leaves the room");
check(first.filled === await page.evaluate(() => state.tableGroups.reduce((n, g) => n + g.length, 0)), "one filled seat per seated student");
for (const shape of ["round", "horseshoe", "row", "pod-ends", "pod"]) {
  for (const rot of [0, 90, 180, 270]) {
    await page.evaluate(([s, r]) => {
      state.classroomLayout.tables.forEach((table) => { table.shape = s; table.rot = r; });
      initializeClassroomLayout(state.tableGroups.length, true);
      rerenderRoom();
    }, [shape, rot]);
    const g = await geometry();
    check(g.overlaps === 0 && g.outside === 0, `${shape} turned ${rot}: no overlap, nothing outside`);
  }
}

console.log("Moving students");
const firstKey = await page.evaluate(() => document.querySelector("[data-classroom-board] .drag-card[data-profile-key]").dataset.profileKey);
await page.focus(`[data-classroom-board] .drag-card[data-profile-key="${firstKey}"]`);
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(200);
check(await page.evaluate((k) => state.tableGroups.findIndex((g) => g.some((p) => p.key === k)) === 1, firstKey), "ArrowRight moves the student to the next table");
check(await page.evaluate((k) => state.movedKeys.has(k), firstKey), "a hand-moved student is marked");
const target = page.locator('[data-classroom-board] [data-drop-zone="seat"][data-table-index="0"][data-seat-index="0"]');
const occupant = await page.evaluate(() => state.tableGroups[0][0] && state.tableGroups[0][0].key);
await page.locator(`[data-classroom-board] .drag-card[data-profile-key="${firstKey}"]`).dragTo(target);
await page.waitForTimeout(300);
check(await page.evaluate((k) => state.tableGroups[0][0] && state.tableGroups[0][0].key === k, firstKey), "dropping on a taken seat puts the student in that seat");
check(await page.evaluate((k) => state.tableGroups[1].some((p) => p.key === k), occupant), "the seat's previous occupant takes the vacated place");
await page.keyboard.press("Control+z");
await page.waitForTimeout(200);
check(await page.evaluate((k) => !(state.tableGroups[0][0] && state.tableGroups[0][0].key === k), firstKey), "Ctrl+Z undoes the swap");
const before = await page.evaluate(() => ({ history: state.roomHistory.length, moved: state.movedKeys.size, order: state.tableGroups.map((g) => g.map((p) => p.key).join(",")).join("|") }));
const ownSeat = await page.evaluate(() => {
  const chip = document.querySelector("[data-classroom-board] .seat.is-filled .drag-card[data-profile-key]");
  const seat = chip.closest(".seat");
  state.draggedProfileKey = chip.dataset.profileKey;
  seat.dispatchEvent(new Event("drop", { bubbles: true, cancelable: true }));
  return { history: state.roomHistory.length, moved: state.movedKeys.size, order: state.tableGroups.map((g) => g.map((p) => p.key).join(",")).join("|") };
});
check(ownSeat.history === before.history && ownSeat.moved === before.moved && ownSeat.order === before.order, "dropping a student on their own seat changes nothing");

console.log("Furniture");
await page.click("#plannerAddMenu summary");
await page.click('[data-add-fixture="window"]');
await page.waitForTimeout(200);
const onWall = await page.evaluate(() => {
  const added = state.classroomLayout.fixtures.at(-1);
  if (!added || added.kind !== "window") return false;
  const footprint = fixtureFootprint(added);
  const room = roomSize();
  return added.x <= 0.01 || added.y <= 0.01 || Math.abs(added.x + footprint.width - room.width) < 0.5 || Math.abs(added.y + footprint.height - room.depth) < 0.5;
});
check(onWall, "a new window sits on a wall");
await page.keyboard.press("r");
await page.waitForTimeout(200);
await page.keyboard.press("Delete");
await page.waitForTimeout(200);
check(await page.evaluate(() => !state.classroomLayout.fixtures.some((f) => f.kind === "window")), "Delete removes the selected fixture");
check(await page.evaluate(() => document.activeElement && document.activeElement.closest && !!document.activeElement.closest("#plannerBackdrop")), "focus stays inside the planner after Delete");

// Real sizes: the teacher desk is resized by typing, the board by its grip,
// a whiteboard by the keyboard.
const idOf = (kind) => page.evaluate((k) => state.classroomLayout.fixtures.find((f) => f.kind === k).id, kind);
const deskId = await idOf("teacherDesk");
const boardId = await idOf("board");
await page.focus(`[data-classroom-board] [data-layout-kind="fixture"][data-fixture-id="${deskId}"]`);
await page.keyboard.press("Enter");
await page.waitForTimeout(100);
await page.fill('#roomInspector [data-room-change="fixtureLength"]', "180");
await page.press('#roomInspector [data-room-change="fixtureLength"]', "Enter");
await page.waitForTimeout(200);
check(await page.evaluate((id) => state.classroomLayout.fixtures.find((f) => f.id === id).w === 180, deskId), "typing a width resizes the teacher desk to 180 cm");
await page.focus(`[data-classroom-board] [data-layout-kind="fixture"][data-fixture-id="${boardId}"]`);
await page.keyboard.press("Enter");
await page.waitForTimeout(100);
const boardBefore = await page.evaluate((id) => state.classroomLayout.fixtures.find((f) => f.id === id).w, boardId);
const gripLocator = page.locator(`[data-fixture-id="${boardId}"] [data-fixture-resize]`);
await gripLocator.scrollIntoViewIfNeeded();
const grip = await gripLocator.boundingBox();
await page.mouse.move(grip.x + grip.width / 2, grip.y + grip.height / 2);
await page.mouse.down();
await page.mouse.move(grip.x + 60, grip.y + grip.height / 2, { steps: 5 });
await page.mouse.up();
await page.waitForTimeout(200);
const boardAfter = await page.evaluate((id) => state.classroomLayout.fixtures.find((f) => f.id === id).w, boardId);
check(boardAfter > boardBefore, "dragging the grip lengthens the board (" + boardBefore + " to " + boardAfter + " cm)");
await page.click("#plannerAddMenu summary");
await page.click('[data-add-fixture="whiteboard"]');
await page.waitForTimeout(200);
const wbBefore = await page.evaluate(() => state.classroomLayout.fixtures.at(-1).w);
await page.keyboard.press("+");
await page.waitForTimeout(150);
check(await page.evaluate((w) => { const f = state.classroomLayout.fixtures.at(-1); return f.kind === "whiteboard" && f.w === w + 10; }, wbBefore), "a whiteboard can be added and + lengthens it by 10 cm");
await page.keyboard.press("Delete");
await page.waitForTimeout(150);

// The room is a size in metres; tables stay inside when it changes.
await page.click("#plannerRoomMenu summary");
await page.fill("#roomSizeInput", "12 x 9");
await page.press("#roomSizeInput", "Enter");
await page.waitForTimeout(300);
await page.click("#plannerRoomMenu summary");
const resized = await page.evaluate(() => roomSize());
check(resized.width === 1200 && resized.depth === 900, "the room takes a size in metres (" + JSON.stringify(resized) + ")");
const afterResize = await geometry();
check(afterResize.overlaps === 0 && afterResize.outside === 0, "after the room changes size no table overlaps or leaves it");
const desks = await page.evaluate(() => {
  const desk = document.querySelector("[data-classroom-board] .seat-desk").getBoundingClientRect();
  const board = document.querySelector("[data-classroom-board]").getBoundingClientRect();
  const room = roomSize();
  return { long: Math.max(desk.width, desk.height) / board.width * room.width, short: Math.min(desk.width, desk.height) / board.width * room.width };
});
check(Math.abs(desks.long - 70) < 1.5 && Math.abs(desks.short - 49) < 1.5, "a desk is drawn 70 x 49 cm to the room's scale (" + desks.long.toFixed(1) + " x " + desks.short.toFixed(1) + ")");
const fitOnScreen = await page.evaluate(() => [...document.querySelectorAll("[data-classroom-board] .drag-card")].filter((c) => {
  const n = c.querySelector(".seat-name"); const cr = c.getBoundingClientRect(); const nr = n.getBoundingClientRect();
  return nr.left < cr.left - 0.5 || nr.right > cr.right + 0.5 || nr.top < cr.top - 0.5 || nr.bottom > cr.bottom + 0.5;
}).length);
check(fitOnScreen === 0, "every name fits its desk on screen");

console.log("Keyboard");
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"]');
await page.keyboard.press("Enter");
await page.waitForTimeout(100);
check(await page.evaluate(() => document.activeElement && document.activeElement.matches('#roomInspector input')), "Enter on a table opens its settings with focus in the name field");
await page.keyboard.press("Escape");
await page.waitForTimeout(100);
check(await page.evaluate(() => document.activeElement && document.activeElement.matches('[data-layout-kind="table"][data-table-index="0"]')), "Escape from the settings returns focus to the table");
await page.keyboard.press("Enter");
await page.waitForTimeout(100);
await page.click('#roomInspector [data-room-action="deselect"]');
await page.waitForTimeout(100);
check(await page.evaluate(() => document.activeElement && document.activeElement.matches('[data-layout-kind="table"][data-table-index="0"]')), "Done returns focus to the table");
await page.focus("#plannerClose");
await page.keyboard.press("Tab");
await page.waitForTimeout(100);
check(await page.evaluate(() => document.activeElement && !!document.activeElement.closest("#plannerBackdrop")), "Tab from the last control stays inside the planner");
await page.focus("#plannerUndo");
await page.keyboard.press("Shift+Tab");
await page.waitForTimeout(100);
check(await page.evaluate(() => document.activeElement && !!document.activeElement.closest("#plannerBackdrop")), "Shift+Tab from the first control stays inside the planner");
const chipKey = await page.evaluate(() => document.querySelector("[data-classroom-board] .drag-card[data-profile-key]").dataset.profileKey);
await page.focus(`[data-classroom-board] .drag-card[data-profile-key="${chipKey}"]`);
await page.keyboard.press("Enter");
await page.waitForTimeout(150);
const menuNav = await page.evaluate(() => ({ open: !!document.querySelector(".seat-menu"), first: document.activeElement && document.activeElement.textContent.trim().slice(0, 12) }));
await page.keyboard.press("ArrowDown");
await page.waitForTimeout(80);
const menuNav2 = await page.evaluate(() => document.activeElement && document.activeElement.textContent.trim().slice(0, 12));
check(menuNav.open && menuNav2 !== menuNav.first, "arrow keys move through the move menu");
await page.keyboard.press("Tab");
await page.waitForTimeout(100);
const afterTab = await page.evaluate((k) => ({ menu: !!document.querySelector(".seat-menu"), active: document.activeElement ? document.activeElement.tagName + "." + document.activeElement.className + "#" + document.activeElement.id : "none", onSeat: !!(document.activeElement && document.activeElement.closest(".seat") && document.activeElement.closest(".seat").querySelector(`[data-profile-key="${k}"]`)) }), chipKey);
check(!afterTab.menu && afterTab.onSeat, "Tab closes the move menu and returns to the seat (" + JSON.stringify(afterTab) + ")");
await page.click("#plannerAddMenu summary");
await page.focus('[data-add-fixture="door"]');
await page.keyboard.press("Escape");
await page.waitForTimeout(100);
check(await page.evaluate(() => state.plannerOpen && !document.getElementById("plannerAddMenu").open), "Escape closes an open menu without closing the planner");
const emptyRoom = await page.evaluate(() => {
  state.classroomLayout.fixtures = [];
  initializeClassroomLayout(state.tableGroups.length, false);
  rerenderRoom();
  return state.classroomLayout.fixtures.length;
});
check(emptyRoom === 0, "a room with no furniture stays empty");
const hostile = await page.evaluate(() => {
  const migrated = migrateClassroomLayout({ version: 3, room: { width: 1, height: 30, depth: 9e9 }, desk: { width: "x" }, tables: [{ x: "a", y: 20, shape: "toString", rot: 45 }], fixtures: [{ id: "Jane_Smith_desk", kind: "constructor", x: 1, y: 1 }, { id: "x", kind: "board", x: 24, y: 0, w: -5, d: 1e9 }] });
  const ratio = migrated.room.depth / migrated.room.width;
  return { kinds: migrated.fixtures.map((f) => f.kind).join(","), ids: migrated.fixtures.map((f) => f.id).join(","), shape: migrated.tables[0].shape, rot: migrated.tables[0].rot, ratio, x: migrated.tables[0].x };
});
check(hostile.kinds === "board" && !hostile.ids.includes("Jane") && hostile.shape === "pod" && [0, 90, 180, 270].includes(hostile.rot) && hostile.ratio <= 2.5 && Number.isFinite(hostile.x), "a hostile room file is tamed: unknown kinds dropped, ids regenerated, shape and turn defaulted, ratio bounded (" + JSON.stringify(hostile) + ")");
await page.evaluate(() => { state.classroomLayout.fixtures = defaultRoomFixtures(); initializeClassroomLayout(state.tableGroups.length, false); rerenderRoom(); });

console.log("Privacy");
const names = await page.evaluate(() => Array.from(new Set(state.filteredRows.map((row) => row.studentName.split(/\s+/)[0]).filter((n) => n.length > 2))));
const stored = await page.evaluate(() => JSON.stringify(localStorage));
check(!names.some((name) => stored.includes(name)), "no student name in localStorage after a session (" + stored.length + " bytes stored)");
check(stored.includes("asg-room-layout"), "the room itself is remembered");
const wall = await page.evaluate(() => buildSeatingPrintHTML({ audience: "wall", paper: "A4" }));
const teacher = await page.evaluate(() => buildSeatingPrintHTML({ audience: "teacher", paper: "A4" }));
const printPage = await browser.newPage();
await printPage.setContent(wall);
const wallInfo = await printPage.evaluate(() => ({
  chips: document.querySelectorAll(".sp-room .drag-card").length,
  scored: [...document.querySelectorAll(".sp-room .drag-card")].filter((c) => /CGP|%ile|norm|\bband\b/i.test(c.textContent) || c.querySelector(".seat-band, .seat-score, .seat-order, .seat-moved")).length,
  mix: document.querySelectorAll(".sp-room .room-mix").length,
  legend: document.querySelectorAll(".legend-band").length,
  crowded: document.querySelectorAll(".sp-room .is-over-capacity, .sp-room .is-extra").length
}));
check(wallInfo.chips > 0 && wallInfo.scored === 0 && wallInfo.mix === 0 && wallInfo.legend === 0, "wall plan shows names only: no score, band, mix strip or legend");
check(wallInfo.crowded === 0, "wall plan carries no over-capacity marks");
const wallNames = await printPage.evaluate(() => {
  const cards = [...document.querySelectorAll(".sp-room .drag-card")];
  return {
    cut: cards.filter((c) => /…|\.\.\./.test(c.textContent)).length,
    outside: cards.filter((c) => {
      const n = c.querySelector(".seat-name"); const cr = c.getBoundingClientRect(); const nr = n.getBoundingClientRect();
      return nr.left < cr.left - 0.5 || nr.right > cr.right + 0.5 || nr.top < cr.top - 0.5 || nr.bottom > cr.bottom + 0.5;
    }).length,
    names: cards.map((c) => c.querySelector(".seat-name").innerHTML.replace(/<br>/g, " "))
  };
});
const seatedNames = await page.evaluate(() => state.tableGroups.flat().map((p) => p.studentName));
const squash = (text) => text.replace(/[\s-]/g, "");
check(wallNames.cut === 0 && wallNames.outside === 0, "wall plan names are whole: no ellipsis, none outside its desk");
check(wallNames.names.length === seatedNames.length && wallNames.names.every((n, i) => squash(n) === squash(seatedNames[i]).replace(/&/g, "&amp;")), "every name on the wall plan is the student's full name");
await printPage.setContent(teacher);
const teacherInfo = await printPage.evaluate(() => ({
  scored: document.querySelectorAll(".sp-room .seat-score").length,
  roster: document.querySelectorAll(".sp-roster-table").length,
  sheets: document.querySelectorAll(".sp-sheet").length
}));
check(teacherInfo.scored > 0 && teacherInfo.roster > 0 && teacherInfo.sheets === 2, "teacher copy carries scores and a roster page");
await printPage.close();

console.log("Export");
const csv = await page.evaluate(() => {
  let out = "";
  const original = window.downloadText;
  window.downloadText = (name, text) => { out = text; };
  exportTableGroups();
  window.downloadText = original;
  return out;
});
const csvRows = csv.trim().split("\n");
const seated = await page.evaluate(() => state.tableGroups.reduce((n, g) => n + g.length, 0) + state.tableManualPool.length);
check(csvRows.length === seated + 1, "CSV has one row per seat (" + (csvRows.length - 1) + ")");
check(/^﻿?Table,Table name,Seat,Table shape/.test(csvRows[0]), "CSV starts with table, name, seat and shape columns");

check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join(" | ") : ""));
await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : "\nAll planner checks passed");
process.exit(failures ? 1 : 0);
