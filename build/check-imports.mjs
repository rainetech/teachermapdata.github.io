// Import checks for exports that are loaded together. Run with Playwright's
// Chromium:
//
//   node build/check-imports.mjs
//   TARGET=ensdashboards/index.html node build/check-imports.mjs
//
// Needs `playwright` resolvable (npm i -D playwright, or set
// PLAYWRIGHT_MODULE to its index.mjs). The files are made up here, with
// invented students, in the exact shape NWEA exports them.
//
// What it holds the page to:
//   - a fall Projection ASG export loaded with that term's Class Profiles is
//     still a projection: one window, every projection kept, no growth pair,
//     and the Class Profile's instructional areas added to each record;
//   - Class Profile term names read as the page's own window names
//     ("Fall 2026", not "Fall 2026-2027 (Most Recent)");
//   - an invalid, unscored attempt is not counted as a second window;
//   - screening tests (TestName "Screening: ...") are never read: only Growth
//     tests count, and a screener cannot replace or merge into a growth test;
//   - a real fall-to-spring growth export loaded with a spring Class Profile
//     still merges into growth records;
//   - the Grouping table reads grade level strictly, like the goal sheet, while
//     flags and groups ignore a shortfall inside measurement error (3 RIT);
//   - the goal sheet says what grade level a score has reached on the US norms
//     (the highest grade whose typical score it has reached: strict, never
//     "about"), and every student's sheets print as exactly two pages, however many
//     subjects or areas they have and however long the name (a hard limit);
//   - a gap to grade level inside measurement error is not counted as short;
//   - wall posters never draw a figure for a handful of children: a subject
//     fewer than five students sat has no row, no ladder and no median, the
//     explainer quotes no RIT across subjects, a poster says "close together"
//     rather than naming a weakest subject on a few points, one test left open
//     does not flatten the test-length chart, and the poster copy makes no
//     claim the figures cannot carry;
//   - the page still carries its copyright and licence notice, and the open
//     site (not the ENS instance) shows the credit line in a footer.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const playwrightModule = process.env.PLAYWRIGHT_MODULE || "playwright";
const { chromium } = await import(playwrightModule);
const TARGET = path.resolve(process.env.TARGET || "index.html");

let failures = 0;
function check(condition, message) {
  if (condition) console.log("  ok   " + message);
  else { failures += 1; console.log("  FAIL " + message); }
}

const csv = (rows) => rows.map((row) => row.map((cell) => /[",]/.test(String(cell)) ? '"' + String(cell).replace(/"/g, '""') + '"' : String(cell)).join(",")).join("\n") + "\n";
const students = [
  ["90001", "ALPHA", "AMAL"], ["90002", "BRAVO", "BASMA"], ["90003", "CHARLIE", "CYRUS"],
  ["90004", "DELTA", "DANA"], ["90005", "ECHO", "EMAN"], ["90006", "FOXTROT", "FARAH"]
];
const math = [187, 194, 170, 207, 149, 221];
const read = [181, 186, 187, 205, 156, 211];
const pct = (rit) => Math.max(1, Math.min(99, Math.round((rit - 150) * 1.2)));

const asgHeader = ["TermTested", "TermRostered", "DistrictName", "SchoolName", "Teacher", "ClassName", "Subject", "Course", "ASGType", "NormsReferenceData", "GrowthComparisonPeriod", "WIStartTerm", "WIEndTerm", "StudentID", "StudentLastName", "StudentFirstName", "StudentGrade", "TestDate", "StartRIT", "StartRITSEM", "StartPercentile", "StartTestDuration", "EndTestDate", "EndRIT", "EndRITSEM", "EndPercentile", "EndTestDuration", "ProjectedRIT", "ProjectedGrowth", "ObservedGrowth", "ConditionalGrowthPercentile"];
function projectionASG() {
  const rows = [asgHeader];
  [["Mathematics", "Math K-12", math, "9/21/26"], ["Language Arts", "Reading", read, "9/22/26"]].forEach(([subject, course, rits, date]) => {
    students.forEach(([id, last, first], i) => {
      rows.push(["Fall 2026-2027", "Fall 2026-2027", "Test District", "Test School", "Teacher, Test", "5.4", subject, course, "Projection", "2025", "Fall 2026 - Spring 2027", "4", "32", id, last, first, "5", date, rits[i], "3.3", pct(rits[i]), "50", "", "", "", "", "", (rits[i] + 9).toFixed(2), "9", "", ""]);
    });
  });
  return csv(rows);
}
const cpHeader = ["StudentID", "StudentLastName", "StudentFirstName", "StudentMiddleInitial", "Grade", "TermTested", "TermRostered", "SchoolName", "InstructorName", "ClassName", "Subject", "Course", "TestName", "Status", "Reason", "PercentRapidGuessed", "Duration", "DateTested", "RitScore", "StandardError", "AchievementPercentile", "InstructionalArea1Name", "InstructionalArea1RIT", "InstructionalArea2Name", "InstructionalArea2RIT"];
function classProfile(subject, course, rits, date, term, withInvalid) {
  const rows = [cpHeader];
  students.forEach(([id, last, first], i) => {
    rows.push([id, last, first, "", "5", term, term, "Test School", "Teacher, Test", "5.4", subject, course, "Growth: " + course, "Growth Event", "N/A", "0", "50", date, rits[i], "3.3", pct(rits[i]), "Area one", rits[i] - 3, "Area two", rits[i] + 2]);
  });
  if (withInvalid) {
    const [id, last, first] = students[4];
    rows.push([id, last, first, "", "5", term, term, "Test School", "Teacher, Test", "5.4", subject, course, "Screening: " + course, "Invalid test", "SEM too high", "", "", "09/08/26", "", "", "", "", "", "", ""]);
  }
  return csv(rows);
}
// A Class Profile that also lists screening tests: one with a score and a later
// date for a student who also has a growth test, and one with no score. Only
// Growth tests are used, so neither may reach a record.
function classProfileWithScreeners(subject, course, rits, date, term) {
  const rows = [cpHeader];
  students.forEach(([id, last, first], i) => {
    rows.push([id, last, first, "", "5", term, term, "Test School", "Teacher, Test", "5.4", subject, course, "Growth: " + course + " (with Screen Reader Compatibility)", "Growth Event", "N/A", "0", "50", date, rits[i], "3.3", pct(rits[i]), "Area one", rits[i] - 3, "Area two", rits[i] + 2]);
  });
  const [id, last, first] = students[1];
  rows.push([id, last, first, "", "5", term, term, "Test School", "Teacher, Test", "5.4", subject, course, "Screening: " + course + " 1.1 (with Screen Reader Compatibility)", "Growth Event", "N/A", "0", "20", "09/29/26", 150, "3.5", pct(150), "Area one", 147, "Area two", 152]);
  const [id2, last2, first2] = students[4];
  rows.push([id2, last2, first2, "", "5", term, term, "Test School", "Teacher, Test", "5.4", subject, course, "Screening: " + course + " 1.1", "Invalid test", "SEM too high", "", "", "09/08/26", "", "", "", "", "", "", ""]);
  return csv(rows);
}
function growthASG() {
  const rows = [asgHeader];
  students.forEach(([id, last, first], i) => {
    rows.push(["Spring 2026-2027", "Spring 2026-2027", "Test District", "Test School", "Teacher, Test", "5.4", "Mathematics", "Math K-12", "Class", "2025", "Fall 2026 - Spring 2027", "4", "32", id, last, first, "5", "9/21/26", math[i], "3.3", pct(math[i]), "50", "5/20/27", math[i] + 8, "3.3", pct(math[i] + 8), "50", (math[i] + 9).toFixed(2), "9", "8", "48"]);
  });
  return csv(rows);
}

const browser = await chromium.launch();
async function load(files) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    try {
      localStorage.clear();
      localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ reducedMotion: true, supportPromptOff: true, supportPromptLastShown: Date.now(), view: "full" }));
    } catch (error) { /* storage may be unavailable */ }
  });
  await page.goto(pathToFileURL(TARGET).href);
  await page.setInputFiles("#csvInput", files.map(([name, text]) => ({ name, mimeType: "text/csv", buffer: Buffer.from(text) })));
  await page.waitForTimeout(2500);
  const info = await page.evaluate(() => ({
    mode: state.dataWindow.mode,
    window: state.dataWindow.currentWindowLabel,
    rows: state.allRows.filter((row) => row.hasCurrentScore).length,
    projections: state.allRows.filter((row) => row.forwardProjection).length,
    pairs: state.allRows.filter((row) => row.hasGrowthPair).length,
    areas: state.allRows.filter((row) => row.hasInstructionalAreas).length,
    projectionView: isProjectionView(),
    status: document.getElementById("statusText") ? document.getElementById("statusText").textContent : "",
    quality: document.getElementById("qualityDetail") ? document.getElementById("qualityDetail").innerText : "",
    names: Array.from(new Set(state.allRows.map((row) => row.studentName))).sort(),
    records: state.allRows.length,
    screeners: state.allRows.filter((row) => /^\s*screening/i.test(row.testName || "")).length,
    screeningCount: state.diagnostics ? state.diagnostics.screeningCount : 0,
    readingRIT: Object.fromEntries(state.allRows.filter((row) => row.subject === "Reading").map((row) => [row.studentID, row.currentRIT])),
    statusLine: document.getElementById("statusLine") ? document.getElementById("statusLine").textContent : ""
  }));
  await page.close();
  return { info, errors };
}

console.log("Fall projection with its Class Profiles");
const combined = await load([
  ["projection.csv", projectionASG()],
  ["CP_Math_Fall2026.csv", classProfile("Mathematics", "Math K-12", math, "09/21/26", "Fall 2026-2027 (Most Recent)", false)],
  ["CP_Reading_Fall2026.csv", classProfile("Language Arts", "Reading", read, "09/22/26", "Fall 2026-2027 (Most Recent)", true)]
]);
const c = combined.info;
check(c.mode === "baseline" && c.projectionView, "read as one window with NWEA's projection, not as growth (" + c.mode + ")");
check(c.projections === 12 && c.pairs === 0 && c.rows === 12, "every projection kept, no growth pair, one record per student and subject (" + JSON.stringify({ projections: c.projections, pairs: c.pairs, rows: c.rows }) + ")");
check(c.areas === 12, "the Class Profile's instructional areas sit on the projection records (" + c.areas + ")");
check(c.window === "Fall 2026", "the window is named Fall 2026 (" + c.window + ")");
check(!/Two test windows/.test(c.quality), "an invalid, unscored attempt is not counted as a second window");
check(c.names.includes("Amal Alpha") && !c.names.some((name) => name === name.toUpperCase()), "names are in proper case (" + c.names.slice(0, 3).join(", ") + ")");
check(combined.errors.length === 0, "no page errors" + (combined.errors.length ? ": " + combined.errors.join(" | ") : ""));

console.log("Class Profiles alone");
const cps = await load([
  ["CP_Math_Fall2026.csv", classProfile("Mathematics", "Math K-12", math, "09/21/26", "Fall 2026-2027 (Most Recent)", false)],
  ["CP_Reading_Fall2026.csv", classProfile("Language Arts", "Reading", read, "09/22/26", "Fall 2026-2027 (Most Recent)", false)]
]);
check(cps.info.mode === "baseline" && cps.info.window === "Fall 2026" && cps.info.rows === 12, "one fall window named Fall 2026 (" + cps.info.window + ")");

console.log("Screening tests");
const screened = await load([
  ["projection.csv", projectionASG()],
  ["CP_Math_Fall2026.csv", classProfile("Mathematics", "Math K-12", math, "09/21/26", "Fall 2026-2027 (Most Recent)", false)],
  ["CP_Reading_Fall2026.csv", classProfileWithScreeners("Language Arts", "Reading", read, "09/22/26", "Fall 2026-2027 (Most Recent)")]
]);
const sc = screened.info;
check(sc.screeners === 0 && sc.screeningCount === 2, "screening tests are left out, not read (" + sc.screeners + " kept, " + sc.screeningCount + " left out)");
check(sc.records === 12 && sc.projections === 12 && sc.pairs === 0 && sc.mode === "baseline", "the records are the growth tests only, still a projection (" + JSON.stringify({ records: sc.records, projections: sc.projections, pairs: sc.pairs, mode: sc.mode }) + ")");
check(sc.readingRIT["90002"] === read[1], "a later screening score does not replace the student's growth score (" + sc.readingRIT["90002"] + ", expected " + read[1] + ")");
check(/Screening tests left out/.test(sc.quality) && /2 screening tests were left out/.test(sc.statusLine), "the Data Check and the status line say what was left out");
check(screened.errors.length === 0, "no page errors");
// A growth test whose name only mentions the screen reader version is kept.
const screenReader = await load([
  ["CP_Reading_Fall2026.csv", classProfileWithScreeners("Language Arts", "Reading", read, "09/22/26", "Fall 2026-2027 (Most Recent)")]
]);
check(screenReader.info.records === 6 && screenReader.info.screeningCount === 2, "a Growth test with \u201cScreen Reader Compatibility\u201d in its name is kept (" + screenReader.info.records + " records)");
const onlyScreeners = await load([["CP_Screening.csv", (() => {
  const lines = classProfileWithScreeners("Language Arts", "Reading", read, "09/22/26", "Fall 2026-2027 (Most Recent)").trim().split("\n");
  return lines.filter((line, index) => index === 0 || /Screening/.test(line)).join("\n") + "\n";
})()]]);
check(onlyScreeners.info.records === 0 && /only Growth tests are used/.test(onlyScreeners.info.statusLine), "a file of nothing but screening tests says so (" + onlyScreeners.info.statusLine + ")");

console.log("Growth export with a spring Class Profile");
const growth = await load([
  ["growth.csv", growthASG()],
  ["CP_Math_Spring2027.csv", classProfile("Mathematics", "Math K-12", math.map((rit) => rit + 8), "05/20/27", "Spring 2026-2027 (Most Recent)", false)]
]);
const g = growth.info;
check(g.mode === "growth" && g.pairs === 6 && g.rows === 6 && g.areas === 6, "still merges into growth records with the areas added (" + JSON.stringify({ mode: g.mode, pairs: g.pairs, rows: g.rows, areas: g.areas }) + ")");
check(growth.errors.length === 0, "no page errors");

console.log("Grade level in the Grouping table");
{
  // Grade 5 fall maths: the typical Grade 4 score is 197, Grade 5 206, Grade 6 210.
  const fives = [205, 202, 206, 210, 160, 209];
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => { try { localStorage.clear(); } catch (error) { /* storage may be unavailable */ } });
  await page.goto(pathToFileURL(TARGET).href);
  await page.setInputFiles("#csvInput", [{ name: "CP_Math_Fall2026.csv", mimeType: "text/csv", buffer: Buffer.from(classProfile("Mathematics", "Math K-12", fives, "09/21/26", "Fall 2026-2027 (Most Recent)", false)) }]);
  await page.waitForTimeout(2200);
  const seen = await page.evaluate(() => {
    const byRit = {};
    state.allRows.forEach((row) => {
      byRit[row.currentRIT] = {
        label: row.usNormEquivalentLabel, gap: row.usNormGradeGap, planning: row.usNormPlanningGap, delta: row.usNormDeltaRIT,
        cell: usNormGradeCell(row).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
        risk: /status-risk/.test(usNormGradeCell(row)), watch: /status-watch/.test(usNormGradeCell(row)),
        reason: getBaselineFocusReasons(row).filter((text) => /Has reached/.test(text)).join(" | "),
        level: usNormLevelText(row)
      };
    });
    return {
      byRit,
      watchWithPlanningZero: suggestBaselineGroup({ currentPercentile: 50, usNormPlanningGap: 0 }),
      watchWithPlanningBehind: suggestBaselineGroup({ currentPercentile: 50, usNormPlanningGap: -1 })
    };
  });
  const r = seen.byRit;
  check(r[205].label === "4" && r[205].gap === -1 && r[205].level === "Grade 4" && /Norm level 4/.test(r[205].cell) && /vs grade 5 \(-1 grade\)/.test(r[205].cell),
    "the Grouping table is strict: a Grade 5 student one point under the Grade 5 fall score is Norm level 4, -1 grade (" + r[205].cell + ")");
  check(r[206].label === "5" && r[206].gap === 0 && r[209].label === "5" && r[209].gap === 0 && r[210].label === "6" && r[210].gap === 1,
    "on the Grade 5 score, or above it short of Grade 6, is level 5; on the Grade 6 score is level 6 (+1)");
  check(r[205].planning === 0 && r[205].risk === false && r[205].watch === true && r[205].reason === "",
    "a shortfall inside measurement error is described but not flagged: not red, no behind reason (planning gap " + r[205].planning + ")");
  check(r[202].planning === -1 && r[202].risk === true && /Has reached Grade 4, not yet the typical score for grade 5/.test(r[202].reason),
    "beyond 3 RIT it is flagged, and the reason says what was reached (" + r[202].reason + ")");
  check(r[160].level === "Grade 1", "a score far below still gets the grade it has reached (" + r[160].level + ")");
  check(seen.watchWithPlanningZero === "Core Instruction" && seen.watchWithPlanningBehind === "Watch Group",
    "mid-band students are grouped as Watch only when behind beyond measurement error");
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join(" | ") : ""));
  await page.close();
}

console.log("Goal sheets");
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    try {
      localStorage.clear();
      localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ reducedMotion: true, supportPromptOff: true, supportPromptLastShown: Date.now(), view: "full" }));
    } catch (error) { /* storage may be unavailable */ }
  });
  await page.goto(pathToFileURL(TARGET).href);
  await page.setInputFiles("#csvInput", [
    ["projection.csv", projectionASG()],
    ["CP_Math_Fall2026.csv", classProfile("Mathematics", "Math K-12", math, "09/21/26", "Fall 2026-2027 (Most Recent)", false)],
    ["CP_Reading_Fall2026.csv", classProfile("Language Arts", "Reading", read, "09/22/26", "Fall 2026-2027 (Most Recent)", false)]
  ].map(([name, text]) => ({ name, mimeType: "text/csv", buffer: Buffer.from(text) })));
  await page.waitForTimeout(2500);
  const html = await page.evaluate(() => {
    window.__sheets = "";
    window.open = () => ({ document: { open() { }, write(text) { window.__sheets += text; }, close() { } }, focus() { }, print() { } });
    printGoalSheets();
    return window.__sheets;
  });
  const sheetPage = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await sheetPage.setContent(html);
  await sheetPage.emulateMedia({ media: "print" });
  const sheets = await sheetPage.evaluate(() => ({ sheets: document.querySelectorAll(".sheet").length, lines: document.querySelectorAll(".gs-gradelevel").length, text: document.body.innerText }));
  const pdf = await sheetPage.pdf({ preferCSSPageSize: true, printBackground: true });
  const pdfPages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  await sheetPage.close();
  check(sheets.sheets === 12 && pdfPages === 12, "each of the 6 students' goal sheets prints as exactly two pages (" + pdfPages + " pages, " + sheets.sheets + " sheets)");
  check(sheets.lines === 12 && /(At my grade level|Grade\s\d level|Kindergarten level)/.test(sheets.text) && /Typical score in the (fall|winter|spring): /.test(sheets.text) && !/About Grade/.test(sheets.text),
    "every subject on the goal sheet says what grade level the score has reached on the US norms (" + sheets.lines + " lines)");
  // Safari lays a printed page out 1.25 times as wide as the paper is in
  // points (744px for A4, not 794) and shrinks that to fit, which prints
  // everything about 7% larger than its size here and wraps it differently:
  // a page that measured as fitting ran onto a second sheet, four pages a
  // student. A document that is itself A4 wide is laid out at 794px and
  // printed at its true size, so the sheets must stay A4 wide in a narrower
  // window.
  {
    const narrow = await browser.newPage({ viewport: { width: 744, height: 1052 } });
    await narrow.setContent(html);
    await narrow.emulateMedia({ media: "print" });
    const widths = await narrow.evaluate(() => ({
      body: document.body.getBoundingClientRect().width,
      sheet: document.querySelector(".sheet").getBoundingClientRect().width,
      scroll: document.documentElement.scrollWidth
    }));
    await narrow.close();
    check(Math.abs(widths.body - 793.7) < 1 && Math.abs(widths.sheet - 793.7) < 1 && widths.scroll >= 793,
      "the goal sheets stay A4 wide in a narrower print window, so Safari prints them at true size (body " + widths.body.toFixed(0) + "px, sheet " + widths.sheet.toFixed(0) + "px, scroll " + widths.scroll + "px)");
  }
  // Two pages per student is a hard limit (front and back of one sheet of
  // paper): however many subjects or areas a student has, and however long
  // the name, the printed file must come out at exactly two pages each.
  const printedPages = async (shape) => {
    const printed = await page.evaluate((shape) => {
      const saved = state.filteredRows;
      const savedFit = window.fitGoalSheets;
      const base = saved.filter((row) => row.goals || row.forwardProjection);
      const rows = saved.slice();
      const extra = { five: 3, eight: 6, twelve: 10 }[shape.subjects] || 0;
      for (let k = 0; k < extra; k++) base.forEach((row) => rows.push(Object.assign({}, row, { subject: "Extra subject number " + (k + 1) })));
      if (shape.areas) rows.forEach((row) => {
        if (!Number.isFinite(row.currentRIT)) return;
        row.hasInstructionalAreas = true;
        row.instructionalAreas = Array.from({ length: 8 }, (_, i) => ({ name: "Operations and Algebraic Thinking strand " + (i + 1), rit: row.currentRIT + (i % 3) * 4 - 4, delta: (i % 3) * 4 - 4 - (i === 0 ? 6 : 0) }));
      });
      if (shape.name) rows.forEach((row) => { row.studentName = "Abdulrahman Mohammed Al Nahyan Al Mazrouei Bin Khalifa Al Qubaisi Al Hamed"; });
      if (shape.noFit) window.fitGoalSheets = (html) => html;
      if (shape.noMeasure) { const create = document.createElement.bind(document); document.createElement = (tag, ...rest) => { if (String(tag).toLowerCase() === "iframe") throw new Error("blocked"); return create(tag, ...rest); }; }
      state.filteredRows = rows;
      window.__sheets = "";
      const open = window.open;
      window.open = () => ({ document: { open() { }, write(text) { window.__sheets += text; }, close() { } }, focus() { }, print() { } });
      try { printGoalSheets(); } finally { window.open = open; state.filteredRows = saved; window.fitGoalSheets = savedFit; }
      return { html: window.__sheets, students: new Set(rows.filter((row) => row.goals || row.forwardProjection).map((row) => studentKey(row))).size };
    }, shape);
    if (shape.noMeasure) await page.reload();
    const view = await browser.newPage({ viewport: { width: 794, height: 1123 } });
    await view.setContent(printed.html);
    await view.emulateMedia({ media: "print" });
    const inked = await view.evaluate(() => Math.max(...[...document.querySelectorAll(".sheet")].map((sheet) => {
      const top = sheet.getBoundingClientRect().top;
      let lowest = 0;
      sheet.querySelectorAll("*").forEach((el) => { const box = el.getBoundingClientRect(); if (box.width > 0 && box.height > 0) lowest = Math.max(lowest, box.bottom - top); });
      return lowest / 96 * 25.4;
    })));
    const out = await view.pdf({ preferCSSPageSize: true, printBackground: true });
    await view.close();
    return { pages: (out.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length, students: printed.students, lowest: inked };
  };
  const stress = [
    ["5 subjects", { subjects: "five" }],
    ["8 subjects", { subjects: "eight" }],
    ["12 subjects (only the first 8 are printed)", { subjects: "twelve" }],
    ["8 areas in every subject", { areas: true }],
    ["a 70-character name", { name: true }],
    ["8 subjects, 8 areas each and the long name", { subjects: "eight", areas: true, name: true }]
  ];
  for (const [label, shape] of stress) {
    const result = await printedPages(shape);
    check(result.pages === result.students * 2, "goal sheets with " + label + " print as exactly two pages per student (" + result.pages + " pages for " + result.students + " students)");
    check(result.lowest <= 294.5, "  and nothing on any of them runs past the page (lowest content at " + result.lowest.toFixed(0) + " mm of 297)");
  }
  // The page-size box alone must hold the limit even if nothing was shrunk.
  const unfitted = await printedPages({ subjects: "twelve", areas: true, name: true, noFit: true });
  check(unfitted.pages === unfitted.students * 2, "even with no shrinking at all, the page box keeps it to two pages per student (" + unfitted.pages + " pages for " + unfitted.students + " students)");
  // Grade level on the goal sheet is strict: the highest grade whose typical
  // score in that season the score has reached, with no "about" and no
  // allowance. A Grade 5 child under the typical Grade 5 score is placed in
  // Grade 4, so that "Grade 5 level" never reads as "working at Grade 5" to a
  // family when the score has not got there.
  const cases = await page.evaluate(() => {
    const line = (subject, season, grade, rit) => {
      const level = goalSheetGradeLevel({ subject, currentSeason: season, usNormStudentGrade: grade, currentRIT: rit });
      return level ? level.headline + " | " + level.detail : null;
    };
    const stretch = (acceleration) => needsStretchGoal({ alreadyAtOrAbove: false, acceleration });
    return {
      k: line("Mathematics", "fall", "5", 145),
      below: line("Mathematics", "fall", "5", 140),
      oneUnder: line("Mathematics", "fall", "5", 205),
      onIt: line("Mathematics", "fall", "5", 206),
      aboveIt: line("Mathematics", "fall", "5", 209),
      nextGrade: line("Mathematics", "fall", "5", 210),
      top: line("Mathematics", "fall", "5", 230),
      shared: line("Reading", "fall", "7", 216),
      sharedNoGrade: line("Reading", "fall", null, 216),
      sharedBelow: line("Reading", "fall", "11", 216),
      topNoGrade: line("Mathematics", "fall", null, 230),
      none: goalSheetGradeLevel({ subject: "Mathematics", currentSeason: null, usNormStudentGrade: "5", currentRIT: 200 }),
      noGrade: line("Reading", "fall", null, 190),
      stretchInside: stretch(3), stretchOutside: stretch(4)
    };
  });
  check(/^Kindergarten level \|/.test(cases.k) && /Kindergarten = 141, Grade 5 = 206/.test(cases.k), "a Grade 5 student on 145 in fall maths has reached the Kindergarten score, not Grade 1 (" + cases.k + ")");
  check(/^Below Kindergarten level/.test(cases.below), "under the lowest typical score it says below, not a grade (" + cases.below + ")");
  check(/^Grade 4 level \|/.test(cases.oneUnder) && /Grade 4 = 197, Grade 5 = 206/.test(cases.oneUnder),
    "a Grade 5 student one point under the Grade 5 fall score is placed in Grade 4, with both scores (" + cases.oneUnder + ")");
  // At or above the child's own grade, the sheet says "at my grade level" and
  // nothing higher: a family reads "Grade 6 level" on a Grade 5 child as "no
  // need to do more". The table a teacher plans from still shows the level.
  check([cases.onIt, cases.aboveIt, cases.nextGrade, cases.top, cases.shared].every((text) => /^At my grade level \| Typical score in the (fall|winter|spring): Grade 5 = 206\.$/.test(text) || /^At my grade level \| Typical score in the fall: Grade 7 = 212\.$/.test(text)),
    "on, above or well above the child's own grade's typical score is \u201cat my grade level\u201d, never a higher grade (" + [cases.onIt, cases.nextGrade, cases.top].join(" / ") + ")");
  check(/^Grade 8 to 9 level \|/.test(cases.sharedNoGrade) && /^Above Grade 12 level/.test(cases.topNoGrade) && /^Grade 8 to 9 level \| Typical score in the fall: Grades 8 and 9 = 216, Grade 11 = 218\.$/.test(cases.sharedBelow),
    "with no grade recorded, or below the child's own grade, grades that share a score are named together and past the top of the table says above");
  check(![cases.k, cases.below, cases.oneUnder, cases.onIt, cases.nextGrade, cases.top, cases.shared, cases.sharedNoGrade].some((text) => /About /i.test(text)), "the wording never says \u201cabout\u201d");
  check(cases.none === null && /^Grade 3 level \| Typical score in the fall: Grade 3 = 185\.$/.test(cases.noGrade), "no season gives no line; no recorded grade gives the grade reached without a comparison");
  check(cases.stretchInside === false && cases.stretchOutside === true, "a stretch of 3 RIT or less to grade level is inside measurement error; 4 is not");
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join(" | ") : ""));
  await page.close();
}

console.log("Wall posters");
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript(() => {
    try {
      localStorage.clear();
      localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ reducedMotion: true, supportPromptOff: true, supportPromptLastShown: Date.now(), view: "full" }));
    } catch (error) { /* storage may be unavailable */ }
  });
  await page.goto(pathToFileURL(TARGET).href);
  await page.setInputFiles("#csvInput", [{ name: "projection.csv", mimeType: "text/csv", buffer: Buffer.from(projectionASG()) }]);
  await page.waitForTimeout(2500);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const result = await page.evaluate(() => {
    const base = state.filteredRows.find((row) => row.goals && Number.isFinite(row.currentRIT));
    // A made-up class: [subject, how many students sat it, percentile].
    const make = (spec) => {
      const rows = [];
      spec.forEach(([subject, count, percentile]) => {
        for (let i = 0; i < count; i += 1) {
          const pct = Array.isArray(percentile) ? percentile[i % percentile.length] : percentile;
          rows.push(Object.assign({}, base, {
            subject, studentID: "T-" + subject + "-" + i, studentName: "Pupil " + subject + " " + i,
            currentPercentile: pct, currentBand: getBand(pct), currentRIT: 200 + i,
            currentDuration: 40 + (i % 5), shortTest: false, rapidGuessed: false
          }));
        }
      });
      return rows;
    };
    const withRows = (rows, fn) => {
      const saved = state.filteredRows;
      state.filteredRows = rows;
      state.posterStudentCountCache = null;
      try { return fn(rows); } finally { state.filteredRows = saved; state.posterStudentCountCache = null; }
    };
    const poster = (id, rows, scope) => POSTERS.find((entry) => entry.id === id).body(scope || { rows, subject: null, label: null });
    const text = (html) => { const d = document.createElement("div"); d.innerHTML = html; return d.textContent; };
    const labels = (html) => { const d = document.createElement("div"); d.innerHTML = html; return [...d.querySelectorAll(".poster-strip-label")].map((node) => node.firstChild.textContent); };
    const out = {};
    // Rows per subject on the whole-class bands poster.
    out.bandsSmallDropped = withRows(make([["Mathematics", 12, [20, 50, 70]], ["Reading", 12, [30, 60, 90]], ["Science", 3, 40]]), (rows) => {
      const html = poster("bands", rows);
      return { labels: labels(html), lead: text(html).match(/\d+of us[^.]*?(?=One mark|Each band)/)[0] };
    });
    out.bandsPooled = withRows(make([["Mathematics", 12, [20, 50, 70]], ["Science", 3, 40], ["Art", 3, 55]]), (rows) => labels(poster("bands", rows)));
    out.bandsAllSmall = withRows(make([["Mathematics", 4, 20], ["Reading", 4, 50], ["Science", 4, 70], ["Art", 4, 90]]), (rows) => {
      const html = poster("bands", rows);
      return { labels: labels(html), hasRow: /One row per subject/.test(text(html)), lead: text(html).match(/\d+of us[^.]*?(?=One mark|Each band)/)[0] };
    });
    out.bandsOneEach = withRows(make([["Mathematics", 12, [20, 50, 70]]]), (rows) => text(poster("bands", rows, { rows, subject: "Mathematics", label: "Mathematics" })).match(/\d+of us[^.]*?(?=One mark|Each band)/)[0]);
    // The ladder: a median on a wall must stand on at least five children.
    out.ladder = withRows(make([["Mathematics", 12, 50], ["Science", 3, 50]]), (rows) => {
      const ladder = posterLadder(rows);
      return ladder ? ladder.panels.map((panel) => panel.subject) : null;
    });
    out.ladderNone = withRows(make([["Mathematics", 4, 50], ["Science", 4, 50]]), (rows) => posterLadder(rows));
    // The explainer's RIT is quoted for one subject only.
    out.explainerOne = withRows(make([["Mathematics", 12, 50]]), (rows) => text(poster("explainer", rows)));
    out.explainerMany = withRows(make([["Mathematics", 12, 50], ["Reading", 12, 50]]), (rows) => text(poster("explainer", rows)));
    // Subjects: a few points apart is "close", a real gap names a focus.
    out.subjectsClose = withRows(make([["Mathematics", 12, 50], ["Reading", 12, 52]]), (rows) => text(poster("subjects", rows)));
    out.subjectsApart = withRows(make([["Mathematics", 12, 50], ["Reading", 12, 70]]), (rows) => text(poster("subjects", rows)));
    // Test length: one test left open must not flatten every other bar.
    out.effort = withRows(make([["Mathematics", 20, 50]]), (rows) => {
      rows[0].currentDuration = 200;
      const strip = posterDurationStrip(rows);
      const heights = [...strip.html.matchAll(/class="poster-sky-bar[^"]*" style="height:([0-9.]+)%/g)].map((match) => Number(match[1]));
      return { heights, label: (strip.html.match(/poster-sky-max"><b>([^<]*)</) || [])[1], median: strip.median };
    });
    // Learning areas: a lone strength is a card on an empty sheet.
    const analysis = (areas) => ({ subjects: [{ subject: "Mathematics", areas }] });
    const area = (name, verdict) => ({ name, verdict, meanDelta: verdict === "gap" ? -3 : 3 });
    const areasOffered = (areas) => { state.strandAnalysis = analysis(areas); return POSTERS.find((entry) => entry.id === "areas").available(); };
    out.areas = {
      none: areasOffered([area("A", "even")]),
      oneStrength: areasOffered([area("A", "strength")]),
      twoStrengths: areasOffered([area("A", "strength"), area("B", "strength")]),
      oneGap: areasOffered([area("A", "gap")])
    };
    state.strandAnalysis = analysis([area("A", "strength"), area("B", "strength")]);
    out.areasStrengthMessage = POSTERS.find((entry) => entry.id === "areas").message();
    state.strandAnalysis = analysis([area("A", "gap")]);
    out.areasGapMessage = POSTERS.find((entry) => entry.id === "areas").message();
    // The sheet a poster is printed on is a fraction of a millimetre shorter
    // than the paper. Exactly the paper's height overflowed by a rounding error
    // in Safari's engine, and every A3 landscape or A4 portrait poster came out
    // as two pages with a blank one after it.
    out.pageBoxes = withRows(make([["Mathematics", 12, [20, 50, 70]], ["Reading", 12, [30, 60, 90]]]), () => Object.keys(POSTER_PAGES).map((orientation) => {
      els.posterOrientation.value = orientation;
      window.__posterHtml = "";
      const open = window.open;
      window.open = () => ({ document: { open() { }, write(html) { window.__posterHtml += html; }, close() { } }, focus() { }, print() { } });
      printPosters();
      window.open = open;
      const box = /\.poster-page \{ width: ([0-9.]+)mm; height: ([0-9.]+)mm;/.exec(window.__posterHtml);
      return { orientation, paper: POSTER_PAGES[orientation].paper, width: box && Number(box[1]), height: box && Number(box[2]) };
    }));
    return out;
  });
  check(JSON.stringify(result.bandsSmallDropped.labels) === JSON.stringify(["Mathematics", "Reading"]) && /of us, with 24 results across 2 subjects/.test(result.bandsSmallDropped.lead),
    "a subject only three children sat gets no row on the whole-class poster, and its results are not counted in it (" + result.bandsSmallDropped.labels.join(", ") + "; " + result.bandsSmallDropped.lead + ")");
  check(JSON.stringify(result.bandsPooled) === JSON.stringify(["Mathematics", "Other subjects"]), "small subjects are pooled into one row when the pool is big enough (" + result.bandsPooled.join(", ") + ")");
  check(result.bandsAllSmall.labels.length === 0 && !result.bandsAllSmall.hasRow && /of us, with 16 results across 4 subjects/.test(result.bandsAllSmall.lead),
    "when every subject is small the class is one strip with no subject rows (" + result.bandsAllSmall.lead + ")");
  check(/of us took the mathematics test/.test(result.bandsOneEach),
    "one result per child is not said twice (" + result.bandsOneEach + ")");
  check(JSON.stringify(result.ladder) === JSON.stringify(["Mathematics"]) && result.ladderNone === null,
    "a ladder is drawn only for a subject at least five students sat (" + JSON.stringify(result.ladder) + ")");
  check(/Ours: 20\d/.test(result.explainerOne) && /One per subject/.test(result.explainerMany) && !/Ours:/.test(result.explainerMany),
    "the explainer quotes the class's RIT for one subject and never a median across subjects");
  check(/How close we are\s*2 points/.test(result.subjectsClose) && !/Next focus/.test(result.subjectsClose) && /Next focus\s*Mathematics/.test(result.subjectsApart) && !/How close we are/.test(result.subjectsApart),
    "two subjects a few points apart are \u201cclose\u201d, not a strongest and a weakest; a real gap names the next focus");
  const heights = result.effort.heights;
  check(heights.length === 20 && Math.max(...heights) === 100 && heights.filter((height) => height === 100).length === 1 && Math.min(...heights) > 40 && /\+ min$/.test(result.effort.label),
    "one test left open does not flatten the test-length chart: it stops at twice the middle and the scale says so (" + result.effort.label + ", shortest bar " + Math.min(...heights) + "%)");
  check(result.areas.none === false && result.areas.oneStrength === false && result.areas.twoStrengths === true && result.areas.oneGap === true,
    "the learning-areas poster needs a gap, or two strengths, to have anything to say");
  check(!/Being behind/.test(result.areasStrengthMessage) && /Being behind/.test(result.areasGapMessage), "the learning-areas message follows what the poster shows");
  check(result.pageBoxes.length === 4 && result.pageBoxes.every((box) => box.width === box.paper.width && box.height < box.paper.height && box.height > box.paper.height - 3),
    "a poster's page box is just under the paper's height, so it cannot spill onto a second page in Safari (" + result.pageBoxes.map((box) => box.orientation + " " + box.height + "/" + box.paper.height).join(", ") + ")");
  // Copy the figures cannot carry. These were all on a wall once.
  const source = fs.readFileSync(TARGET, "utf8");
  const posterSource = source.slice(source.indexOf("const POSTERS = ["), source.indexOf("// Records for the catching-up poster"));
  const banned = [
    [/your age|our age|people your age/i, "\u201cstudents your age\u201d (a percentile compares a grade, not an age)"],
    [/40 percentile points/, "\u201cat least 40 percentile points\u201d for two bands (it is 21)"],
    [/how hard you have been working|how hard you worked|how hard you work/i, "growth as a measure of effort"],
    [/overtaking a (lot|fifth)/i, "overtaking claims for a band move"],
    [/\bslipped\b/i, "\u201cslipped\u201d for a percentile that moved down"],
    [/own starting point/i, "the growth score as a comparison with your own start"]
  ];
  banned.forEach(([pattern, what]) => check(!pattern.test(posterSource), "poster copy has no " + what));
  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join(" | ") : ""));
  await page.close();
}

console.log("Notice");
{
  const source = fs.readFileSync(TARGET, "utf8");
  check(/Copyright \(c\) 2026 Christopher Raine/.test(source) && /Attribution Licence/.test(source) && /<meta name="author" content="Christopher Raine">/.test(source),
    "the page still carries its copyright and licence notice");
  // The open site shows the credit line; the ENS instance is a school's own
  // site and carries none (the notice above stays in its source).
  const ens = /ensdashboards/.test(TARGET);
  const footer = /<footer class="site-credit">[\s\S]*?Built on the NWEA MAP Growth Teacher Dashboard by Christopher Raine[\s\S]*?https:\/\/github\.com\/rainetech\/teachermapdata\.github\.io[\s\S]*?<\/footer>/.test(source);
  check(ens ? !/class="site-credit"/.test(source) : footer, ens ? "the ENS instance carries no credit footer" : "the open site shows the credit line in its footer");
}

await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : "\nAll import checks passed");
process.exit(failures ? 1 : 0);
