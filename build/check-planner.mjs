// Seating planner checks. Run with Playwright's Chromium:
//
//   node build/check-planner.mjs                 (checks index.html)
//   TARGET=path/to/another/build.html node build/check-planner.mjs
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
//   - a group can be given more tables: the group, its students and its desks
//     stay the same, its seats carry on across the tables, each table has its
//     own desks, turn, arrangement and place, and the tables undo, save, load,
//     print and export like the rest;
//   - an assistant desk is one desk and a chair with no student seat, turns
//     and goes like other furniture, and is on both prints;
//   - nothing in localStorage names a student, whatever the teacher did;
//   - the wall print carries no score, no growth and no band mark, and the
//     teacher print carries them all;
//   - the teacher copy's roster never splits a table across pages, and says
//     only that students are grouped by data and behaviour patterns;
//   - a saved plan file brings back the room, the table names and who sits
//     where;
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
const hostileMore = await page.evaluate(() => {
  const extras = [{ x: "a", y: null, shape: "toString", rot: 45, seats: -3 }, 5, null, { x: 1e9, y: -1e9, shape: "round", rot: 270, seats: 9e9 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }];
  const migrated = migrateClassroomLayout({ version: 3, room: { width: 900, depth: 800 }, tables: [{ x: 10, y: 10, shape: "pod", rot: 0, seats: "many", more: extras }, { x: 20, y: 20, more: "no" }] });
  const first = migrated.tables[0];
  return { count: first.more.length, seats: first.seats, ok: first.more.every((e) => ["pod", "round", "pod-ends", "row", "horseshoe"].includes(e.shape) && [0, 90, 180, 270].includes(e.rot) && e.seats >= 1 && e.seats <= 16), second: migrated.tables[1].more === undefined };
});
check(hostileMore.count <= 3 && hostileMore.ok && hostileMore.seats >= 1 && hostileMore.seats <= 16 && hostileMore.second, "a hostile room file's extra tables are tamed: at most three, shapes and turns defaulted, desks bounded (" + JSON.stringify(hostileMore) + ")");
check(hostile.kinds === "board" && !hostile.ids.includes("Jane") && hostile.shape === "pod" && [0, 90, 180, 270].includes(hostile.rot) && hostile.ratio <= 2.5 && Number.isFinite(hostile.x), "a hostile room file is tamed: unknown kinds dropped, ids regenerated, shape and turn defaulted, ratio bounded (" + JSON.stringify(hostile) + ")");
await page.evaluate(() => { state.classroomLayout.fixtures = defaultRoomFixtures(); initializeClassroomLayout(state.tableGroups.length, false); rerenderRoom(); });

console.log("Tables for a group");
const groupState = () => page.evaluate(() => ({
  groups: state.tableGroups.length,
  order: JSON.stringify(state.tableGroups.map((g) => g.map((p) => p.key))),
  desks: state.tableGroups.map((g, i) => tableSeatCount(i)),
  caps: state.tableCapacities.slice(),
  tables: document.querySelectorAll("[data-classroom-board] .room-table").length,
  parts: roomTableParts(0).map((part) => ({ seats: part.seats, offset: part.offset, shape: part.table.shape, rot: part.table.rot })),
  selection: state.roomSelection,
  history: (state.roomHistory || []).length
}));
const one = await groupState();
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="0"]');
await page.keyboard.press("Enter");
await page.waitForTimeout(100);
check(await page.evaluate(() => !!document.querySelector('#roomInspector [data-room-action="add-table"]') && !!document.querySelector('#roomInspector [data-room-change="tableDesks"]')), "a table's settings offer Add a table to this group and its number of desks");
check(await page.evaluate(() => !document.querySelector('#roomInspector [data-room-action="remove-table"]')), "the group's first table cannot be removed");
await page.click('#roomInspector [data-room-action="add-table"]');
await page.waitForTimeout(250);
const two = await groupState();
check(two.tables === one.tables + 1, "a table can be added to a group: one more table in the room (" + one.tables + " to " + two.tables + ")");
check(two.groups === one.groups && two.order === one.order, "adding a table makes no new group and moves no student");
check(two.parts.length === 2 && two.parts[0].seats + two.parts[1].seats === one.desks[0] && two.desks[0] === one.desks[0] && two.caps[0] === one.caps[0], "the group keeps its desks, shared between its two tables (" + two.parts.map((part) => part.seats).join(" + ") + ")");
check(two.selection && two.selection.kind === "table" && two.selection.index === 0 && two.selection.part === 1, "the new table is selected, ready to drag");
const afterAdd = await geometry();
check(afterAdd.overlaps === 0 && afterAdd.outside === 0, "the new table stands clear of every other table and inside the room");
const seatNumbers = await page.evaluate(() => [...document.querySelectorAll('[data-classroom-board] [data-drop-zone="seat"][data-table-index="0"]')].map((el) => Number(el.dataset.seatIndex)).sort((a, b) => a - b).join(","));
check(seatNumbers === Array.from({ length: one.desks[0] }, (_, i) => i).join(","), "the group's seats carry on across its tables, none repeated (" + seatNumbers + ")");
const plates = await page.evaluate(() => [...document.querySelectorAll('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"] .room-table-label')].map((el) => el.textContent));
check(plates.length === 2 && plates[0] === "Table 1" && plates[1] === "Table 1 \u00b7 B", "the added table carries the group's name and its letter (" + plates.join(" / ") + ")");
check(await page.evaluate(() => !!document.querySelector('#roomInspector [data-room-action="remove-table"]')), "an added table can be removed from its settings");
check(await page.evaluate(() => { const said = document.getElementById("liveRegion").textContent; return /Drag it where you want it/.test(said) && !/no clear floor/.test(said); }), "adding a table where there is room says to drag it where you want it");

// Dragged by its name plate with the mouse, an added table moves and no other table does.
const platePath = '[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="1"] .room-table-label';
await page.locator(platePath).scrollIntoViewIfNeeded();
const plateBox = await page.locator(platePath).boundingBox();
const dragBefore = await page.evaluate(() => ({ main: { x: roomTablePart(0, 0).x, y: roomTablePart(0, 0).y }, extra: { x: roomTablePart(0, 1).x, y: roomTablePart(0, 1).y }, other: { x: roomTable(1).x, y: roomTable(1).y } }));
const grabX = plateBox.x + plateBox.width / 2;
const grabY = plateBox.y + plateBox.height / 2;
await page.mouse.move(grabX, grabY);
await page.mouse.down();
await page.mouse.move(grabX + 30, grabY + 40, { steps: 6 });
await page.mouse.up();
await page.waitForTimeout(200);
const dragged = await page.evaluate(() => ({ main: { x: roomTablePart(0, 0).x, y: roomTablePart(0, 0).y }, extra: { x: roomTablePart(0, 1).x, y: roomTablePart(0, 1).y }, other: { x: roomTable(1).x, y: roomTable(1).y }, parts: roomTableParts(0).length, selected: state.roomSelection }));
const same = (a, b) => a.x === b.x && a.y === b.y;
check(dragged.parts === 2 && (dragged.extra.x !== dragBefore.extra.x || dragged.extra.y !== dragBefore.extra.y) && same(dragged.main, dragBefore.main) && same(dragged.other, dragBefore.other), "dragging an added table with the mouse moves that table alone (" + dragBefore.extra.x + "," + dragBefore.extra.y + " to " + dragged.extra.x + "," + dragged.extra.y + ")");
check(dragged.selected && dragged.selected.kind === "table" && dragged.selected.part === 1, "and leaves that table selected");

// A student can be dropped on a desk at the added table; the seat they leave is taken by its occupant.
const dropCheck = await page.evaluate(() => {
  const group = state.tableGroups[0];
  const parts = roomTableParts(0);
  const there = group[parts[1].offset];
  return { first: group[0] && group[0].key, there: there && there.key, offset: parts[1].offset };
});
if (dropCheck.there) {
  await page.locator(`[data-classroom-board] .drag-card[data-profile-key="${dropCheck.first}"]`).dragTo(page.locator(`[data-classroom-board] [data-drop-zone="seat"][data-table-index="0"][data-seat-index="${dropCheck.offset}"]`));
  await page.waitForTimeout(300);
  const swapped = await page.evaluate((info) => {
    const card = document.querySelector(`[data-classroom-board] .drag-card[data-profile-key="${info.first}"]`);
    const article = card && card.closest(".room-table");
    return { partOfCard: article && article.dataset.tablePart, at: state.tableGroups[0].findIndex((p) => p.key === info.first), back: state.tableGroups[0][0].key === info.there };
  }, dropCheck);
  check(swapped.partOfCard === "1" && swapped.at === dropCheck.offset && swapped.back, "dropping a student on a desk at the added table seats them there and swaps the occupant back");
  await page.keyboard.press("Control+z");
  await page.waitForTimeout(200);
}

// Its own arrangement and turn, from the keys, with the table (not a field) in focus.
const partSelector = '[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="1"]';
const readParts = () => page.evaluate(() => roomTableParts(0).map((part) => ({ shape: part.table.shape, rot: part.table.rot })));
await page.focus(partSelector);
const shapesBefore = await readParts();
await page.keyboard.press("s");
await page.waitForTimeout(150);
const shapesAfter = await readParts();
check(shapesAfter[0].shape === shapesBefore[0].shape && shapesAfter[1].shape !== shapesBefore[1].shape, "S changes the arrangement of the table in focus only (" + shapesBefore.map((part) => part.shape).join(" and ") + " to " + shapesAfter.map((part) => part.shape).join(" and ") + ")");
await page.focus(partSelector);
const turnsBefore = await readParts();
await page.keyboard.press("r");
await page.waitForTimeout(150);
const turnsAfter = await readParts();
check(turnsAfter[0].rot === turnsBefore[0].rot && turnsAfter[1].rot === (turnsBefore[1].rot + 90) % 360, "R turns the table in focus only (" + turnsBefore.map((part) => part.rot).join(" and ") + " to " + turnsAfter.map((part) => part.rot).join(" and ") + ")");
check(await page.evaluate(() => !(state.tableLabels && state.tableLabels[0])), "the keys act on the table and do not type into its name");
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="1"]');
await page.keyboard.press("Enter");
await page.waitForTimeout(100);
const desksBefore = await page.evaluate(() => ({ total: tableSeatCount(0), here: roomTableParts(0)[1].seats, seatsDrawn: document.querySelectorAll('[data-classroom-board] [data-drop-zone="seat"][data-table-index="0"]').length }));
await page.fill('#roomInspector [data-room-change="tableDesks"]', String(desksBefore.here + 2));
await page.press('#roomInspector [data-room-change="tableDesks"]', "Enter");
await page.waitForTimeout(250);
const desksAfter = await page.evaluate(() => ({ total: tableSeatCount(0), here: roomTableParts(0)[1].seats, cap: state.tableCapacities[0], seatsDrawn: document.querySelectorAll('[data-classroom-board] [data-drop-zone="seat"][data-table-index="0"]').length, focus: document.activeElement && document.activeElement.matches('#roomInspector [data-room-change="tableDesks"]') }));
check(desksAfter.here === desksBefore.here + 2 && desksAfter.total === desksBefore.total + 2 && desksAfter.cap === desksAfter.total && desksAfter.seatsDrawn === desksBefore.seatsDrawn + 2, "typing a number of desks gives that table them, and the group's desks are the total (" + desksBefore.total + " to " + desksAfter.total + ")");
check(desksAfter.focus, "focus stays in the desks field after it changes");
await page.fill('#roomInspector [data-room-change="tableDesks"]', String(desksBefore.here));
await page.press('#roomInspector [data-room-change="tableDesks"]', "Enter");
await page.waitForTimeout(250);
check(await page.evaluate((n) => tableSeatCount(0) === n, desksBefore.total), "and back again");

// Moving the added table, by hand, and the warning when it lands on another.
const clashProbe = await page.evaluate(() => {
  const other = roomTable(state.tableGroups.length - 1);
  const mover = roomTablePart(0, 1);
  const was = { x: mover.x, y: mover.y };
  mover.x = other.x;
  mover.y = other.y;
  rerenderRoom();
  const warning = document.querySelector(".room-warning");
  const text = warning ? warning.textContent : "";
  Object.assign(mover, was);
  rerenderRoom();
  return text;
});
check(/Table 1 \u00b7 B/.test(clashProbe) && /overlap/.test(clashProbe), "an added table standing on another is named in the warning (" + clashProbe.slice(0, 60) + ")");
await page.evaluate(() => { state.classroomLayout.tables.forEach((t) => { delete t.more; delete t.seats; }); initializeClassroomLayout(state.tableGroups.length, false); rerenderRoom(); });

// A room with no clear floor says so, rather than quietly stacking one thing on another.
const crowdedNotes = await page.evaluate(async () => {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 150));
  const said = () => document.getElementById("liveRegion").textContent;
  const room = roomSize();
  // Two cupboards the length of the room, between them covering its whole floor.
  const blockers = [0, 1].map((half) => ({ id: "zz-blocker-" + half, kind: "cupboard", x: 0, y: (room.depth / 2) * half, rot: 0, w: room.width, d: room.depth / 2 }));
  state.classroomLayout.fixtures.push(...blockers);
  addTableToGroup(1);
  await wait();
  const table = said();
  const before = state.classroomLayout.fixtures.length;
  addFixture("assistantDesk");
  await wait();
  const desk = said();
  state.classroomLayout.fixtures = state.classroomLayout.fixtures.filter((f) => !blockers.some((blocker) => blocker.id === f.id) && f.kind !== "assistantDesk");
  state.classroomLayout.tables.forEach((t) => { delete t.more; delete t.seats; });
  initializeClassroomLayout(state.tableGroups.length, false);
  rerenderRoom();
  return { table, desk, added: state.classroomLayout.fixtures.length - before };
});
check(/no clear floor/.test(crowdedNotes.table) && /no clear floor/.test(crowdedNotes.desk), "a table or an assistant desk added where the room has no clear floor says so (" + crowdedNotes.table.slice(-48) + ")");

// Undo, Delete, the limit, and the other tables of a group laid out again.
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="0"]');
await page.keyboard.press("Enter");
await page.click('#roomInspector [data-room-action="add-table"]');
await page.waitForTimeout(200);
await page.keyboard.press("Control+z");
await page.waitForTimeout(200);
check(await page.evaluate(() => roomTableParts(0).length === 1), "Ctrl+Z takes the added table away again");
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="0"]');
await page.keyboard.press("Enter");
for (let i = 0; i < 5; i += 1) {
  await page.click('#roomInspector [data-room-action="add-table"]:not([disabled])', { timeout: 500 }).catch(() => {});
  await page.waitForTimeout(120);
}
const capped = await page.evaluate(() => ({ parts: roomTableParts(0).length, disabled: !!document.querySelector('#roomInspector [data-room-action="add-table"][disabled]'), desks: tableSeatCount(0) }));
check(capped.parts === 4 && capped.disabled, "a group sits at up to four tables, and the button says so (" + capped.parts + ")");
const crowd = await geometry();
check(crowd.overlaps === 0 && crowd.outside === 0, "four tables for a group still stand clear of each other and inside the room");
await page.evaluate(() => { initializeClassroomLayout(state.tableGroups.length, true); rerenderRoom(); });
const relaid = await geometry();
check(relaid.overlaps === 0 && relaid.outside === 0 && await page.evaluate(() => roomTableParts(0).length === 4), "laying the tables out again keeps a group's tables and clears every clash");
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="3"]');
await page.keyboard.press("Delete");
await page.waitForTimeout(200);
const afterDelete = await page.evaluate(() => ({ parts: roomTableParts(0).length, desks: tableSeatCount(0), order: JSON.stringify(state.tableGroups.map((g) => g.map((p) => p.key))) }));
check(afterDelete.parts === 3 && afterDelete.desks === capped.desks && afterDelete.order === two.order, "Delete takes an added table away: its desks go back to the table before it and nobody moves");
await page.evaluate(() => { state.classroomLayout.tables.forEach((t) => { delete t.more; delete t.seats; }); initializeClassroomLayout(state.tableGroups.length, false); rerenderRoom(); });
// One extra table is left in the room for the plan file, the prints and the export below.
await page.focus('[data-classroom-board] [data-layout-kind="table"][data-table-index="0"][data-table-part="0"]');
await page.keyboard.press("Enter");
await page.click('#roomInspector [data-room-action="add-table"]');
await page.waitForTimeout(250);
const storedLayout = await page.evaluate(() => JSON.parse(JSON.stringify(storableRoomLayout())));
check(storedLayout.tables[0].more && storedLayout.tables[0].more.length === 1 && storedLayout.tables[0].more[0].seats >= 1 && Object.keys(storedLayout.tables[0].more[0]).sort().join(",") === "rot,seats,shape,x,y", "the added table is remembered with its place, turn, arrangement and desks, and nothing else");

console.log("Assistant desks");
const beforeDesk = await page.evaluate(() => ({ seats: document.querySelectorAll("[data-classroom-board] .seat").length, fixtures: state.classroomLayout.fixtures.length }));
await page.click("#plannerAddMenu summary");
await page.click('[data-add-fixture="assistantDesk"]');
await page.waitForTimeout(250);
const assistant = await page.evaluate(() => {
  const f = state.classroomLayout.fixtures.at(-1);
  const el = document.querySelector(`[data-classroom-board] [data-fixture-id="${f.id}"]`);
  const desk = deskSize();
  return {
    kind: f.kind, w: f.w, d: f.d, deskW: desk.width, deskD: desk.depth,
    drawn: !!(el && el.querySelector(".seat-desk.is-assistant") && el.querySelector(".seat-chair")),
    name: el && el.querySelector(".assistant-name") && el.querySelector(".assistant-name").textContent,
    standingOn: roomClashes().furniture.filter((item) => item.fixture.id === f.id).length,
    seats: document.querySelectorAll("[data-classroom-board] .seat").length,
    inspector: document.querySelector("#roomInspector") && document.querySelector("#roomInspector").textContent
  };
});
check(assistant.kind === "assistantDesk" && assistant.w === assistant.deskW && assistant.d === assistant.deskD + 35, "an assistant desk is the size of a student's desk, with its chair (" + assistant.w + " x " + assistant.d + " cm)");
check(assistant.drawn && assistant.name === "Assistant", "it is drawn as a desk and a chair, named Assistant");
check(assistant.standingOn === 0, "it is put on clear floor, not on a table");
check(assistant.seats === beforeDesk.seats, "it has no student seat");
check(/Desk width/.test(assistant.inspector) && /Depth with chair/.test(assistant.inspector), "its settings measure a desk and its chair");
await page.keyboard.press("r");
await page.waitForTimeout(150);
const turned = await page.evaluate(() => {
  const f = state.classroomLayout.fixtures.at(-1);
  const el = document.querySelector(`[data-classroom-board] [data-fixture-id="${f.id}"]`);
  const foot = fixtureFootprint(f);
  const desk = el.querySelector(".seat-desk").getBoundingClientRect();
  const chair = el.querySelector(".seat-chair").getBoundingClientRect();
  return { rot: f.rot, wide: foot.width, tall: foot.height, face: el.classList.contains("face-right"), chairLeft: chair.right <= desk.left + 1, clash: roomClashes().furniture.length };
});
check(turned.rot === 90 && turned.wide > turned.tall && turned.face && turned.chairLeft, "R turns it, and its chair goes round with it");
await page.click("#plannerAddMenu summary");
await page.click('[data-add-fixture="assistantDesk"]');
await page.waitForTimeout(250);
const second = await page.evaluate(() => {
  const desks = state.classroomLayout.fixtures.filter((f) => f.kind === "assistantDesk");
  const a = desks[0]; const b = desks[1];
  const fa = fixtureFootprint(a); const fb = fixtureFootprint(b);
  const apart = a.x + fa.width <= b.x || b.x + fb.width <= a.x || a.y + fa.height <= b.y || b.y + fb.height <= a.y;
  return { count: desks.length, apart };
});
check(second.count === 2 && second.apart, "a second assistant desk goes beside the first, not on it");
await page.keyboard.press("Delete");
await page.waitForTimeout(150);
check(await page.evaluate(() => state.classroomLayout.fixtures.filter((f) => f.kind === "assistantDesk").length === 1), "Delete removes the selected assistant desk");
const names = await page.evaluate(() => Array.from(new Set(state.filteredRows.map((row) => row.studentName.split(/\s+/)[0]).filter((n) => n.length > 2))));
const storedDesk = await page.evaluate(() => JSON.stringify(storableRoomLayout()));
check(/assistantDesk/.test(storedDesk) && !names.some((name) => storedDesk.includes(name)), "assistant desks are remembered as furniture, with no name in them");

console.log("Privacy");
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
const wallExtras = await printPage.evaluate(() => ({
  tables: [...document.querySelectorAll(".sp-room .room-table-label")].map((el) => el.textContent),
  assistants: [...document.querySelectorAll(".sp-room .assistant-name")].map((el) => el.textContent)
}));
check(wallExtras.tables.some((text) => /Table 1 \u00b7 B/.test(text)) && wallExtras.assistants.length === 1 && wallExtras.assistants[0] === "Assistant", "the wall plan draws a group's added table and the assistant desk (" + wallExtras.tables.length + " tables, " + wallExtras.assistants.length + " assistant desk)");
const wallCaps = await printPage.evaluate(() => [...document.querySelectorAll("body *")].filter((el) => getComputedStyle(el).textTransform === "uppercase" && el.textContent.trim()).length);
check(wallCaps === 0, "nothing on the wall plan is set in capitals");
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
check(teacherInfo.scored > 0 && teacherInfo.roster > 0 && teacherInfo.sheets >= 2, "teacher copy carries scores and a roster page");
const teacherExtras = await printPage.evaluate(() => ({
  assistants: document.querySelectorAll(".sp-room .assistant-name").length,
  added: document.querySelectorAll(".sp-room .room-table.is-added").length,
  roster: [...document.querySelectorAll(".sp-roster-table header small")].map((el) => el.textContent).filter((text) => /at \d+ tables/.test(text)).length
}));
check(teacherExtras.assistants === 1 && teacherExtras.added === 1 && teacherExtras.roster === 1, "the teacher copy draws them too, and its roster says which group sits at more than one table");
check(/grouped according to data and behaviour patterns/.test(teacher) && !/How this plan was made/.test(teacher) && !/✎/.test(teacher), "the printed plan says students are grouped by data and behaviour patterns, and carries no method paragraph or hand-move marks");
await printPage.emulateMedia({ media: "print" });
const pdf = await printPage.pdf({ preferCSSPageSize: true, printBackground: true });
const pdfPages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
check(pdfPages === teacherInfo.sheets, "every sheet of the teacher copy prints as one page, so no table is split (" + pdfPages + " pages, " + teacherInfo.sheets + " sheets)");
await printPage.close();

console.log("Plan file");
const saved = await page.evaluate(() => {
  let out = "";
  const original = window.downloadText;
  window.downloadText = (name, text) => { out = text; };
  if (!state.tableLabels) state.tableLabels = {};
  state.tableLabels[0] = "Window table";
  exportRoomLayout();
  window.downloadText = original;
  return out;
});
const seatsBefore = await page.evaluate(() => JSON.stringify(state.tableGroups.map((g) => g.map((p) => p.key))));
await page.evaluate(() => {
  const a = state.tableGroups[0][0].key;
  moveProfileTo(a, state.tableGroups.length - 1, 0);
  state.tableLabels = {};
  roomTable(0).x = 20;
  rerenderRoom();
});
await page.evaluate((text) => importRoomLayoutFile(new File([text], "plan.json", { type: "application/json" })), saved);
await page.waitForTimeout(400);
const restored = await page.evaluate(() => ({ seats: JSON.stringify(state.tableGroups.map((g) => g.map((p) => p.key))), label: state.tableLabels[0], x: state.classroomLayout.tables[0].x }));
const savedX = JSON.parse(saved).tables[0].x;
check(restored.seats === seatsBefore && restored.label === "Window table" && restored.x === savedX, "loading a saved plan file brings back the room, the table names and who sits where");
const savedPlan = JSON.parse(saved);
const restoredTables = await page.evaluate(() => ({ parts: roomTableParts(0).map((part) => [part.seats, Math.round(part.table.x), Math.round(part.table.y), part.table.shape, part.table.rot]), assistants: state.classroomLayout.fixtures.filter((f) => f.kind === "assistantDesk").length, capacity: state.tableCapacities[0] }));
check(savedPlan.tables[0].more && savedPlan.tables[0].more.length === 1 && restoredTables.parts.length === 2 && restoredTables.assistants === 1 && restoredTables.capacity === savedPlan.plan.tables[0].capacity, "the plan file carries a group's added table, its desks and the assistant desk, and loading brings them back (" + JSON.stringify(restoredTables.parts) + ")");

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
// Names of arrangements hold commas, so a row is read with its quotes, not split on commas.
const csvFields = (line) => {
  const out = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const c = line[i];
    if (quoted) {
      if (c === '"' && line[i + 1] === '"') { field += '"'; i += 1; } else if (c === '"') quoted = false; else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { out.push(field); field = ""; } else field += c;
  }
  out.push(field);
  return out;
};
const header = csvFields(csvRows[0].replace(/^\uFEFF/, ""));
const partColumn = header.indexOf("Table of the group");
const leftColumn = header.indexOf("Table from left wall (cm)");
check(partColumn > 0 && leftColumn > 0, "CSV has a column for which table of its group a seat is at (" + partColumn + ")");
// Split the first group: two desks at its first table, the rest at its second.
const splitSeats = await page.evaluate(() => { setTableDesks(0, 0, 2); return state.tableGroups[0].length; });
const splitCsv = await page.evaluate(() => {
  let out = "";
  const original = window.downloadText;
  window.downloadText = (name, text) => { out = text; };
  exportTableGroups();
  window.downloadText = original;
  return out;
});
const splitRows = splitCsv.trim().split("\n").map(csvFields);
const ofFirstGroup = splitRows.slice(1).filter((row) => row[0] === "1");
const ofOthers = splitRows.slice(1).filter((row) => row[0] !== "1");
const expectedParts = Array.from({ length: splitSeats }, (_, i) => (i < 2 ? "A" : "B")).join("");
check(ofFirstGroup.map((row) => row[partColumn]).join("") === expectedParts && ofOthers.every((row) => row[partColumn] === ""), "CSV says which table of its group each seat is at: " + expectedParts + " for the split group, blank for groups with one table");
const lefts = new Set(ofFirstGroup.map((row, i) => (i < 2 ? "A" : "B") + row[leftColumn]));
check(splitSeats < 3 || (lefts.size === 2 && ofFirstGroup[0][leftColumn] !== ofFirstGroup[2][leftColumn]), "and each seat carries the place of the table it is at, not the group's first");

check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join(" | ") : ""));
await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : "\nAll planner checks passed");
process.exit(failures ? 1 : 0);
