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
//   - a real fall-to-spring growth export loaded with a spring Class Profile
//     still merges into growth records.
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
    names: Array.from(new Set(state.allRows.map((row) => row.studentName))).sort()
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

console.log("Growth export with a spring Class Profile");
const growth = await load([
  ["growth.csv", growthASG()],
  ["CP_Math_Spring2027.csv", classProfile("Mathematics", "Math K-12", math.map((rit) => rit + 8), "05/20/27", "Spring 2026-2027 (Most Recent)", false)]
]);
const g = growth.info;
check(g.mode === "growth" && g.pairs === 6 && g.rows === 6 && g.areas === 6, "still merges into growth records with the areas added (" + JSON.stringify({ mode: g.mode, pairs: g.pairs, rows: g.rows, areas: g.areas }) + ")");
check(growth.errors.length === 0, "no page errors");

await browser.close();
console.log(failures ? `\n${failures} check(s) failed` : "\nAll import checks passed");
process.exit(failures ? 1 : 0);
