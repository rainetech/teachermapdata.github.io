#!/usr/bin/env node
// Builds teacher-dashboard-guide.pdf from the dashboard itself.
//
// The section titles and the "what it shows / how to read it / what to do
// with it" text come straight out of index.html (SECTION_PLAN and
// SECTION_HELP), and every picture is the page rendered with its own sample
// data, so the guide cannot drift from the app it describes.
//
//   node guide/build-guide.js
//
// Needs Node and Playwright with a Chromium build (npm i -D playwright, then
// npx playwright install chromium). Set PLAYWRIGHT_CHROMIUM to point at a
// specific Chromium binary if you have one already.

const fs = require("fs");
const os = require("os");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
// A second instance of the dashboard - a branded clone in another directory -
// builds its own guide from its own page, so the pictures carry its colours
// and its name. Point GUIDE_INDEX at the page and GUIDE_OUTPUT at the PDF.
const INDEX = "file://" + path.resolve(ROOT, process.env.GUIDE_INDEX || "index.html");
const OUTPUT = path.resolve(ROOT, process.env.GUIDE_OUTPUT || "teacher-dashboard-guide.pdf");
const TITLE = process.env.GUIDE_TITLE || "NWEA MAP ASG Teacher Dashboard";
// For checking the text without opening the PDF.
const HTML_OUT = process.env.GUIDE_HTML ? path.resolve(ROOT, process.env.GUIDE_HTML) : null;
const HIDE_STICKY = ".filter-bar,.section-nav,.toast-stack,.support-dock,.back-to-top,.celebrate-layer{display:none!important}";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

// A section taller than about two screens is photographed from the top down
// to a fixed depth: a picture of a whole 200-row table teaches nothing at
// page width, and the caption says the picture is the top of the section.
const MAX_SHOT_HEIGHT = 1500;

async function shot(page, selector, options) {
  const node = await page.$(selector);
  if (!node) return null;
  await node.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  const box = await node.boundingBox();
  let buffer;
  let clipped = false;
  if (box && box.height > MAX_SHOT_HEIGHT) {
    await page.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: "start" }), selector);
    await page.waitForTimeout(150);
    const fresh = await node.boundingBox();
    buffer = await page.screenshot(Object.assign({ type: "jpeg", quality: 80, clip: { x: fresh.x, y: fresh.y, width: fresh.width, height: MAX_SHOT_HEIGHT } }, options || {}));
    clipped = true;
  } else {
    buffer = await node.screenshot(Object.assign({ type: "jpeg", quality: 80 }, options || {}));
  }
  return { src: "data:image/jpeg;base64," + buffer.toString("base64"), clipped };
}

// The sample file is a growth export. Blanking its end window turns it into
// the fall file a teacher uploads in September, which is the other mode the
// guide has to show.
function baselineFrom(sampleCSV) {
  const lines = sampleCSV.trim().split("\n");
  const header = lines[0].split(",");
  const blank = new Set(["EndTestDate", "EndRIT", "EndPercentile", "EndTestDuration", "ObservedGrowth", "GrowthIndex",
    "MetGrowthProjection?", "ConditionalGrowthIndex", "ConditionalGrowthPercentile", "PercentageofStudentswhoMetorExceededtheirProjectedRIT",
    "PercentageofProjectedGrowthMet", "MedianConditionalGrowthPercentile", "StartGrowthandAchievement", "EndGrowthandAchievement",
    "ConditionalGrowthPercentileAxis", "AchievementPercentileAxis"]);
  const term = header.indexOf("TermTested");
  const rows = lines.slice(1).map((line) => {
    const cells = line.split(",");
    header.forEach((name, index) => { if (blank.has(name)) cells[index] = ""; });
    if (term >= 0) cells[term] = "Fall 2025";
    return cells.join(",");
  });
  return header.join(",") + "\n" + rows.join("\n") + "\n";
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined
  });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce", colorScheme: "light" });
  await context.addInitScript(() => {
    try {
      // The page opens on the essentials; the guide photographs every section.
      localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ theme: "light", reducedMotion: true, supportPromptOff: true, supportPromptLastShown: 0, view: "full" }));
    } catch (error) { /* private mode */ }
  });
  const page = await context.newPage();
  await page.goto(INDEX);
  await page.click("#sampleBtn");
  await page.waitForFunction(() => document.body.classList.contains("has-data"));
  await page.waitForTimeout(400);

  // ---- text straight from the page ---------------------------------------
  const data = await page.evaluate(() => ({
    sections: SECTION_PLAN.map((section) => ({
      id: section.id,
      label: section.label,
      modes: section.modes,
      growthTitle: (document.querySelector("#" + section.id + " .section-header h2") || {}).textContent || section.label,
      help: SECTION_HELP[section.id] || null
    })),
    bands: BANDS.map((band) => ({ name: band.name, min: band.min, max: band.max })),
    tiers: ACHIEVEMENT_TIERS.map((tier) => ({ name: tier.name, label: tier.tierLabel, blurb: tier.blurb })),
    groups: GROUP_ACTIONS,
    notes: METHOD_NOTES,
    minShare: MIN_SHARE_N,
    secure: SECURE_BENCHMARK,
    posterMin: POSTER_MIN_STUDENTS,
    posters: POSTERS.map((poster) => ({ id: poster.id, title: poster.title, blurb: poster.blurb })),
    sample: SAMPLE_CSV
  }));

  // ---- pictures: growth mode --------------------------------------------
  const pictures = {};
  pictures.topbar = await shot(page, ".topbar");
  pictures.filters = await shot(page, ".filter-bar");
  pictures.banner = await shot(page, "#modeBanner");
  await page.addStyleTag({ content: HIDE_STICKY });
  for (const section of data.sections) {
    const visible = await page.evaluate((id) => { const node = document.getElementById(id); return Boolean(node && !node.hidden); }, section.id);
    if (!visible) continue;
    if (section.id === "sec-quiz") {
      await page.click("[data-quiz-action='start']");
      await page.waitForTimeout(150);
      const wrong = await page.evaluate(() => (state.quiz.questions[0].answer + 1) % state.quiz.questions[0].options.length);
      await page.click("[data-quiz-answer='" + wrong + "']");
      await page.waitForTimeout(150);
    }
    if (section.id === "sec-snapshot") {
      await page.click(".section-help-btn[data-help='sec-snapshot']");
      await page.waitForTimeout(100);
    }
    pictures[section.id] = await shot(page, "#" + section.id);
    if (section.id === "sec-snapshot") await page.click(".section-help-btn[data-help='sec-snapshot']");
  }

  // ---- pictures: a fall file ----------------------------------------------
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "map-guide-"));
  const fallFile = path.join(tempDir, "sample-fall.csv");
  fs.writeFileSync(fallFile, baselineFrom(data.sample));
  await page.setInputFiles("#csvInput", fallFile);
  await page.waitForFunction(() => document.body.dataset.dataMode === "baseline");
  await page.waitForTimeout(400);
  await page.addStyleTag({ content: HIDE_STICKY });
  pictures.baselineBanner = await shot(page, "#modeBanner");
  pictures.baselineSection = await shot(page, "#sec-baseline");
  pictures.baselinePriority = await shot(page, "#sec-priority");
  const baselineTitles = await page.evaluate(() => Object.fromEntries(
    [...document.querySelectorAll("main .section")].map((node) => [node.id, (node.querySelector(".section-header h2") || {}).textContent || ""])
  ));
  // ---- pictures: the goal sheet with its family code, and the family page ----
  // A family code is only printed when the page is hosted over https, so the
  // page is served to itself at an example address. A branded clone points its
  // code at its own family page; GUIDE_FAMILY_PAGE says which file that is.
  const indexFile = path.resolve(ROOT, process.env.GUIDE_INDEX || "index.html");
  const familyFile = process.env.GUIDE_FAMILY_PAGE ? path.resolve(ROOT, process.env.GUIDE_FAMILY_PAGE) : path.join(path.dirname(indexFile), "family.html");
  if (fs.existsSync(familyFile)) {
    const HOST = "https://your-dashboard.example";
    const siteHTML = fs.readFileSync(indexFile, "utf8");
    const familyHTML = fs.readFileSync(familyFile, "utf8");
    const hosted = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce", colorScheme: "light" });
    await hosted.route(HOST + "/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: siteHTML }));
    const hostedPage = await hosted.newPage();
    await hostedPage.goto(HOST + "/index.html");
    await hostedPage.click("#sampleBtn");
    await hostedPage.waitForFunction(() => document.body.classList.contains("has-data"));
    await hostedPage.waitForTimeout(400);
    const sheet = await hostedPage.evaluate(() => {
      const open = window.open;
      let html = "";
      window.open = () => ({ document: { open() {}, write(text) { html += text; }, close() {} }, focus() {}, print() {} });
      printGoalSheets();
      window.open = open;
      const first = studentKey(state.filteredRows[0]);
      const rows = latestSubjectRecords(state.filteredRows.filter((row) => studentKey(row) === first)).map((entry) => entry.current);
      return { html, link: familyLinkFor(rows) };
    });
    if (sheet.html) {
      const paper = await hosted.newPage();
      await paper.setViewportSize({ width: 820, height: 1160 });
      await paper.setContent(sheet.html);
      await paper.waitForTimeout(250);
      const pages = await paper.$$(".sheet");
      const snap = async (node) => (node ? { src: "data:image/jpeg;base64," + (await node.screenshot({ type: "jpeg", quality: 82 })).toString("base64") } : null);
      pictures.goalData = await snap(pages[0]);
      pictures.goalPlan = await snap(pages[1]);
    }
    if (sheet.link) {
      const phone = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, reducedMotion: "reduce", colorScheme: "light" });
      const address = sheet.link.split("#")[0];
      await phone.route(address + "**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: familyHTML }));
      const familyPage = await phone.newPage();
      await familyPage.goto(sheet.link);
      await familyPage.waitForTimeout(500);
      // The sample class sat its tests in a past term, which the family page says in a note. A sheet printed this term has no such note.
      await familyPage.evaluate(() => document.querySelectorAll(".note[role=note]").forEach((node) => node.remove()));
      const total = await familyPage.evaluate(() => document.documentElement.scrollHeight);
      const clip = async (y, height) => ({ src: "data:image/jpeg;base64," + (await familyPage.screenshot({ type: "jpeg", quality: 80, fullPage: true, clip: { x: 0, y, width: 390, height } })).toString("base64") });
      pictures.familyTop = await clip(0, Math.min(total, 1150));
      const planAt = await familyPage.evaluate(() => {
        const heading = [...document.querySelectorAll("h2")].find((node) => /plan/i.test(node.textContent));
        return heading ? Math.max(0, Math.round(heading.getBoundingClientRect().top + window.scrollY) - 12) : -1;
      });
      if (planAt >= 0) pictures.familyPlan = await clip(planAt, Math.min(total - planAt, 1150));
    }
  }
  await browser.close();

  // ---- the document --------------------------------------------------------
  const html = buildHTML(data, pictures, baselineTitles);
  if (HTML_OUT) fs.writeFileSync(HTML_OUT, html);
  const printer = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined });
  const printPage = await printer.newPage();
  await printPage.setContent(html, { waitUntil: "load" });
  await printPage.pdf({
    path: OUTPUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: "18mm", bottom: "18mm", left: "16mm", right: "16mm" },
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:8px;color:#5d6a7e;width:100%;padding:0 16mm;font-family:Segoe UI,Arial,sans-serif;">' + escapeHTML(TITLE) + ' - User guide</div>',
    footerTemplate: '<div style="font-size:8px;color:#5d6a7e;width:100%;padding:0 16mm;font-family:Segoe UI,Arial,sans-serif;display:flex;justify-content:space-between;"><span>Your file never leaves your computer.</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>'
  });
  await printer.close();
  fs.rmSync(tempDir, { recursive: true, force: true });
  const size = fs.statSync(OUTPUT).size;
  console.log("wrote " + path.relative(ROOT, OUTPUT) + " (" + Math.round(size / 1024) + " KB)");
}

function figure(picture, caption) {
  if (!picture) return "";
  const text = (caption || "") + (picture.clipped ? " (The top of the section; it continues below on screen.)" : "");
  return '<figure><img src="' + picture.src + '" alt="">' + (text ? "<figcaption>" + escapeHTML(text) + "</figcaption>" : "") + "</figure>";
}

function paragraphs(text) {
  return String(text).split(/\n\n+/).map((part) => "<p>" + escapeHTML(part) + "</p>").join("");
}

function buildHTML(data, pictures, baselineTitles) {
  const bySection = Object.fromEntries(data.sections.map((section) => [section.id, section]));
  const chapterOrder = data.sections.filter((section) => section.help);
  const sectionChapters = chapterOrder.map((section, index) => {
    const help = section.help;
    const baselineTitle = baselineTitles[section.id];
    const baselineOnly = !section.modes.includes("growth");
    const growthOnly = !section.modes.includes("baseline");
    const titleLine = baselineTitle && baselineTitle !== section.growthTitle
      ? section.growthTitle + " (called " + baselineTitle + " on a single-window file)"
      : section.growthTitle;
    return '<section class="section-chapter">' +
      '<div class="keep">' +
      "<h3>5." + (index + 1) + " " + escapeHTML(titleLine) + "</h3>" +
      (growthOnly ? '<p class="note">Growth files only: this section is hidden when the export carries a single test window.</p>' : "") +
      (baselineOnly ? '<p class="note">Single-window files only.</p>' : "") +
      (section.id === "sec-strands" ? '<p class="note">Class Profile exports only: an ASG export does not carry instructional areas, so this section appears only when a Class Profile file is loaded.</p>' : "") +
      figure(pictures[section.id], section.growthTitle + ", shown with the sample data.") +
      "</div>" +
      '<div class="triple">' +
      "<div><h4>What it shows</h4>" + paragraphs(help.what) + "</div>" +
      "<div><h4>How to read it</h4>" + paragraphs(help.read) + "</div>" +
      "<div><h4>What to do with it</h4>" + paragraphs(help.act) + "</div>" +
      "</div>" +
      (help.baseline ? '<div class="baseline-box"><h4>On a single-window file</h4>' +
        (help.baseline.what ? paragraphs(help.baseline.what) : "") +
        (help.baseline.read ? paragraphs(help.baseline.read) : "") +
        (help.baseline.act ? paragraphs(help.baseline.act) : "") + "</div>" : "") +
      (section.id === "sec-baseline" ? figure(pictures.baselineSection, "The same section on a fall file, where it is called Starting Point.") : "") +
      (section.id === "sec-priority" ? figure(pictures.baselinePriority, "On a fall file the list becomes the Start-of-Year Support List, with start-of-year reasons.") : "") +
      "</section>";
  }).join("");

  const bandRows = data.bands.map((band) => "<tr><td>" + escapeHTML(band.name) + "</td><td>" + band.min + " to " + band.max + "</td></tr>").join("");
  const tierRows = data.tiers.map((tier) => "<tr><td>" + escapeHTML(tier.name) + "</td><td>" + escapeHTML(tier.label) + "</td><td>" + escapeHTML(tier.blurb) + "</td></tr>").join("");
  const groupRows = Object.entries(data.groups).map(([group, action]) => "<tr><td>" + escapeHTML(group) + "</td><td>" + escapeHTML(action) + "</td></tr>").join("");
  const posterRows = data.posters.map((poster) => "<tr><td>" + escapeHTML(poster.title) + "</td><td>" + escapeHTML(poster.blurb) + "</td></tr>").join("");
  const contents = [
    ["", "Start here: your first ten minutes", "Do this once and you can use the dashboard"],
    ["", "Find it fast: I want to...", "The section that answers each question"],
    ["", "The routine after each test window", "A checklist, about half an hour"],
    ["", "Seven things worth knowing before you read a number", ""],
    ["1", "What this tool is, and what it never does", ""],
    ["2", "Getting your files out of NWEA MAP", ""],
    ["3", "Loading a file and choosing what you look at", ""],
    ["4", "Reading the numbers", ""],
    ["5", "The sections, one by one", ""],
    ["6", "Printing, exporting and the classroom wall", ""],
    ["7", "Sharing results with families", ""],
    ["8", "Before a data meeting", ""],
    ["9", "When something looks wrong", ""],
    ["A", "Glossary and reference tables", ""]
  ].map(([number, title, note]) => "<li><span>" + number + "</span><div>" + escapeHTML(title) + (note ? "<small>" + escapeHTML(note) + "</small>" : "") + "</div></li>").join("");

  // "5.7" for a section, and the name on its header, so the front pages can
  // point at the right entry whatever the page's sections are called.
  const chapterNumber = (id) => { const at = chapterOrder.findIndex((section) => section.id === id); return at === -1 ? "" : "5." + (at + 1); };
  const sectionName = (id) => (bySection[id] ? bySection[id].growthTitle : "");
  const where = (id) => "<strong>" + escapeHTML(sectionName(id)) + "</strong>";
  const finderRow = (want, ids, how, chapter) => {
    const live = ids.filter((id) => bySection[id]);
    const refs = chapter || live.map(chapterNumber).filter(Boolean).join(", ");
    return "<tr><td>" + escapeHTML(want) + "</td><td>" + (live.length ? live.map(where).join(", then ") + ". " : "") + how + "</td><td>" + escapeHTML(refs) + "</td></tr>";
  };
  const finder = [
    finderRow("See how my class did, in plain words", ["sec-briefing", "sec-snapshot"], "Read the headlines first, then the cards."),
    finderRow("Know who needs support first, and why", ["sec-priority"], "Each student is listed with the reason."),
    finderRow("Know what to do about it this week", ["sec-actions"], "Moves to make, with the students named."),
    finderRow("See who grew and who did not", ["sec-growth"], "Needs a file with two test windows."),
    finderRow("Set a target with each student", ["sec-goals"], "Press <em>Print Goal Sheets</em>: two pages a student."),
    finderRow("Give a family their child's results", ["sec-goals"], "The code on page two of each goal sheet opens a page for the family.", "7"),
    finderRow("Group the class, or seat the room", ["sec-grouping", "sec-tables"], "Groups by need, then a room plan drawn to scale."),
    finderRow("See which part of a subject to teach next", ["sec-strands"], "Needs a Class Profile export as well."),
    finderRow("Celebrate what went well", ["sec-celebration", "sec-posters"], "Names for you; class figures only for the wall."),
    finderRow("Get ready for a data meeting", ["sec-summary", "sec-quiz"], "The narrative written for you, then the questions a leader will ask.", "8"),
    finderRow("Look at one student", [], "Click any student's name, anywhere on the page, for their full picture. Print it for a conference.", "6"),
    finderRow("Look at one class or one subject", [], "Use the filters at the top. Every card, list, poster and export follows them.", "3"),
    finderRow("Check that the file is sound", ["sec-quality"], "Missing scores, short tests, anything left out.")
  ].join("");

  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escapeHTML(TITLE)} - User guide</title>
<style>
  :root { --ink: #172033; --muted: #5d6a7e; --brand: #2454a6; --brand-deep: #173d7d; --wash: #e9f0ff; --line: #dbe2ee; --green: #0f7a45; --amber: #b45309; }
  * { box-sizing: border-box; }
  body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, Arial, sans-serif; color: var(--ink); font-size: 10.5pt; line-height: 1.5; margin: 0; }
  h1, h2, h3, h4 { margin: 0; line-height: 1.2; letter-spacing: -0.01em; }
  h2 { font-size: 20pt; color: var(--brand-deep); margin: 0 0 10pt; padding-bottom: 6pt; border-bottom: 2px solid var(--brand); break-after: avoid; }
  h3 { font-size: 13.5pt; margin: 16pt 0 6pt; color: var(--ink); break-after: avoid; }
  h4 { font-size: 8.5pt; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: var(--brand-deep); margin: 0 0 3pt; }
  p { margin: 0 0 7pt; }
  ul, ol { margin: 0 0 8pt 18pt; padding: 0; }
  li { margin-bottom: 3pt; }
  .chapter { break-before: page; }
  .cover { height: 250mm; display: flex; flex-direction: column; justify-content: space-between; }
  .cover .eyebrow { color: var(--brand); font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; font-size: 9pt; }
  .cover h1 { font-size: 34pt; color: var(--brand-deep); margin: 8pt 0 12pt; }
  .cover .lede { font-size: 13pt; color: var(--muted); max-width: 130mm; }
  .cover .stripe { height: 6mm; background: linear-gradient(90deg, #2563eb, #0f7a45, #e5c11a, #f77f00, #a50f1a); border-radius: 3mm; }
  .cover .meta { color: var(--muted); font-size: 9.5pt; }
  .contents { break-before: page; }
  .contents ol { list-style: none; margin: 0; }
  .contents li { display: flex; gap: 10pt; padding: 6pt 0; border-bottom: 1px solid var(--line); font-size: 12pt; }
  .contents li span { color: var(--brand); font-weight: 800; min-width: 18pt; }
  .contents li small { display: block; font-size: 9pt; color: var(--muted); }
  .lead { font-size: 12pt; color: var(--ink); margin-bottom: 10pt; }
  .steps { list-style: none; margin: 0; padding: 0; counter-reset: step; }
  .steps > li { counter-increment: step; position: relative; padding: 0 0 2pt 34pt; margin: 0 0 12pt; break-inside: avoid; }
  .steps > li::before { content: counter(step); position: absolute; left: 0; top: 0; width: 24pt; height: 24pt; border-radius: 50%; background: var(--brand); color: #fff; font-weight: 800; font-size: 12pt; display: flex; align-items: center; justify-content: center; }
  .steps h3 { margin: 2pt 0 3pt; font-size: 12.5pt; }
  .steps .time { font-size: 8.5pt; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--green); margin-left: 6pt; }
  .steps figure img { max-height: 44mm; }
  .steps figure { margin: 4pt 0 2pt; }
  .chapter.flow { break-before: auto; margin-top: 16pt; }
  .steps p { margin-bottom: 4pt; }
  .finder td:first-child { font-weight: 700; width: 31%; }
  .finder td:last-child { width: 11%; color: var(--brand-deep); font-weight: 700; white-space: nowrap; }
  .checklist { list-style: none; margin: 0 0 8pt; padding: 0; }
  .checklist li { position: relative; padding-left: 20pt; margin-bottom: 5pt; break-inside: avoid; }
  .checklist li::before { content: ""; position: absolute; left: 0; top: 2pt; width: 10pt; height: 10pt; border: 1.5px solid var(--brand); border-radius: 2pt; }
  .know { list-style: none; margin: 0; padding: 0; counter-reset: know; }
  .know li { counter-increment: know; border: 1px solid var(--line); border-left: 4px solid var(--brand); border-radius: 4pt; padding: 7pt 10pt; margin-bottom: 7pt; background: #f9fbff; break-inside: avoid; }
  .know li strong:first-child { display: block; color: var(--brand-deep); font-size: 11pt; margin-bottom: 2pt; }
  .know li strong:first-child::before { content: counter(know) ". "; }
  .say { border: 1px dashed var(--brand); border-radius: 4pt; padding: 8pt 10pt; margin: 8pt 0 10pt; background: #fff; font-style: italic; break-inside: avoid; }
  .say h4 { font-style: normal; }
  .side { display: grid; grid-template-columns: 1fr 1fr; gap: 12pt; align-items: start; break-inside: avoid; }
  .side figure img { max-height: 120mm; }
  .phones figure img { max-height: 150mm; border-radius: 10pt; border: 2px solid #c3cbd9; }
  .sub { margin-top: 2pt; }
  .sub li { margin-bottom: 2pt; }
  figure { margin: 8pt 0 10pt; break-inside: avoid; }
  figure img { display: block; max-width: 100%; max-height: 190mm; width: auto; margin: 0 auto; border: 1px solid var(--line); border-radius: 4pt; }
  .keep { break-inside: avoid; }
  figcaption { font-size: 8.5pt; color: var(--muted); margin-top: 3pt; }
  .triple { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt; margin: 4pt 0 8pt; break-inside: avoid; }
  .triple div { background: var(--wash); border: 1px solid #c9d8f5; border-radius: 4pt; padding: 8pt 9pt; font-size: 9.5pt; }
  .triple p:last-child { margin-bottom: 0; }
  .baseline-box { border-left: 3px solid var(--amber); background: #fff7ed; padding: 7pt 10pt; margin: 0 0 10pt; font-size: 9.5pt; break-inside: avoid; }
  .baseline-box h4 { color: var(--amber); }
  .baseline-box p:last-child { margin-bottom: 0; }
  .note { font-size: 9.5pt; color: var(--muted); font-style: italic; }
  .callout { border: 1px solid var(--line); border-left: 4px solid var(--brand); border-radius: 4pt; padding: 8pt 10pt; margin: 8pt 0 10pt; background: #f9fbff; break-inside: avoid; }
  .callout p:last-child { margin-bottom: 0; }
  .callout.good { border-left-color: var(--green); }
  table { width: 100%; border-collapse: collapse; margin: 6pt 0 12pt; font-size: 9.5pt; break-inside: auto; }
  th, td { text-align: left; padding: 5pt 7pt; border-bottom: 1px solid var(--line); vertical-align: top; }
  th { background: var(--wash); color: var(--brand-deep); font-size: 8.5pt; text-transform: uppercase; letter-spacing: 0.05em; }
  tr { break-inside: avoid; }
  .section-chapter { break-inside: auto; margin-bottom: 8pt; }
  .section-chapter h3 { margin-top: 18pt; }
  dl { margin: 0 0 10pt; }
  dt { font-weight: 800; margin-top: 6pt; }
  dd { margin: 1pt 0 0 0; }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 12pt; }
</style></head><body>

<div class="cover">
  <div>
    <div class="stripe"></div>
    <p class="eyebrow" style="margin-top:28mm">${escapeHTML(TITLE)}</p>
    <h1>User guide</h1>
    <p class="lede">You do not need training to use this. Follow the five steps on the <em>Start here</em> page once, with your own class, and you can do everything most teachers ever need. The rest is here to look things up: what every number means, what each section tells you, and what to do about it.</p>
  </div>
  <div class="meta">
    <p>Built from the dashboard itself, using its own sample data, so the pictures and the section text are the same ones you see on screen. Every section on the page also carries a <strong>?</strong> in its corner that says the same in three short answers.</p>
    <p>Your file never leaves your computer. The dashboard reads it in your browser, loads nothing from the internet, and stores nothing about your students.</p>
  </div>
</div>

<div class="contents">
  <h2>Contents</h2>
  <ol>${contents}</ol>
</div>

<div class="chapter">
  <h2>Start here: your first ten minutes</h2>
  <p class="lead">Five steps. Do them once with your own class and you have used the dashboard. Nothing you click can break anything or change your MAP data, and your file never leaves your computer.</p>
  <ol class="steps">
    <li>
      <h3>Get your file from NWEA <span class="time">2 minutes</span></h3>
      <p>In MAP Growth, open <em>MAP Reports</em>, choose <em>Achievement Status and Growth</em> for your class, and download it as <em>CSV</em>. Save it; do not open or edit it. Chapter 2 has every click.</p>
      <p><strong>No file yet?</strong> Skip this step and press <em>Load Sample Data</em> in step 2 to try everything with a made-up class.</p>
    </li>
    <li>
      <h3>Drop it on the page <span class="time">1 minute</span></h3>
      <p>Open the dashboard and drag the file onto the dashed box, or click the box and choose it.</p>
      ${figure(pictures.topbar, "")}
    </li>
    <li>
      <h3>Read the ${escapeHTML(sectionName("sec-briefing") || "Briefing")} <span class="time">2 minutes</span></h3>
      <p>The first thing on the page says, in plain sentences, what your file shows: how the class did, what stands out, and where to look next. If you read nothing else, read this.</p>
      ${figure(pictures["sec-briefing"], "")}
    </li>
    <li>
      <h3>See who needs what <span class="time">3 minutes</span></h3>
      <p>Go to ${where("sec-priority")} for the students to look at first, each with the reason, then ${where("sec-actions")} for what to do this week. Click any student's name for their whole picture on one card.</p>
    </li>
    <li>
      <h3>Print what you need <span class="time">2 minutes</span></h3>
      <p>In ${where("sec-goals")}, press <em>Print Goal Sheets</em> for a two-page sheet for every student: their scores and targets, then a plan they fill in. ${pictures.goalPlan ? "Page two carries a code that opens a page of results for the family (chapter 7). " : ""}${where("sec-posters")} gives you class posters for the wall, with no names on them.</p>
    </li>
  </ol>
  <div class="callout good">
    <h4>Stuck on a section?</h4>
    <p>Press the <strong>?</strong> in its corner. It says what the section shows, how to read it and what to do with it, in three short answers. The same text is in chapter 5 with pictures.</p>
  </div>
  <div class="callout">
    <h4>Prefer to watch?</h4>
    <p>A three-minute walkthrough video shows these steps on screen. The link is on the dashboard's opening panel, next to the link to this guide.</p>
  </div>
</div>

<div class="chapter flow">
  <h2>Find it fast: I want to...</h2>
  <p>The page opens on the sections most teachers use. <em>More analysis</em> in the <em>Jump to</em> bar shows the rest. The last column is where this guide explains each one.</p>
  <table class="finder"><thead><tr><th>I want to...</th><th>Go to</th><th>Guide</th></tr></thead><tbody>${finder}</tbody></table>
</div>

<div class="chapter">
  <h2>The routine after each test window</h2>
  <p class="lead">About half an hour, once your class has finished testing. Tick the boxes as you go.</p>
  <h3>Start of year: one test window</h3>
  <ul class="checklist">
    <li><strong>Export and load</strong> the Achievement Status and Growth CSV for your class. Add the Class Profile CSVs if you want the areas inside each subject (chapter 2).</li>
    <li><strong>Read ${escapeHTML(sectionName("sec-quality"))}</strong> so nothing surprises you later: who has no score, whose test was very short.</li>
    <li><strong>Read the ${escapeHTML(sectionName("sec-briefing") || "Briefing")}</strong>, then the Starting Point section: where the class begins the year.</li>
    <li><strong>Open the support list</strong> (${escapeHTML(sectionName("sec-priority"))} becomes the Start-of-Year Support List) and decide who you will see first.</li>
    <li><strong>Print the goal sheets</strong> from ${escapeHTML(sectionName("sec-goals"))}. Each student writes their own goal on page two. Send the sheet home: the family code is on it.</li>
    <li><strong>Seat the room</strong> with ${escapeHTML(sectionName("sec-tables"))} if you group by data.</li>
  </ul>
  <h3>Mid-year and end of year: two test windows</h3>
  <ul class="checklist">
    <li><strong>Export and load</strong> the Achievement Status and Growth CSV comparing the two terms, with the Class Profile CSVs for the current term.</li>
    <li><strong>Read ${escapeHTML(sectionName("sec-quality"))}</strong> first.</li>
    <li><strong>Read the ${escapeHTML(sectionName("sec-briefing") || "Briefing")} and ${escapeHTML(sectionName("sec-snapshot"))}</strong>: how many met their growth projection, and where the class sits now.</li>
    <li><strong>Open ${escapeHTML(sectionName("sec-growth"))}</strong>: who grew more than a typical peer, who grew less. Look for high scorers who are coasting.</li>
    <li><strong>Work through ${escapeHTML(sectionName("sec-priority"))} and the ${escapeHTML(sectionName("sec-actions"))}</strong>. Write down the three moves you will make this month.</li>
    <li><strong>Reprint the goal sheets</strong> so each student sees whether they reached the target they set, and sets the next one.</li>
    <li><strong>Celebrate</strong>: read ${escapeHTML(sectionName("sec-celebration"))} for the names, and print a poster or two for the wall.</li>
    <li><strong>Before a data meeting</strong>, copy the ${escapeHTML(sectionName("sec-summary"))} into your notes and run ${escapeHTML(sectionName("sec-quiz"))} once (chapter 8).</li>
  </ul>
  <div class="callout">
    <h4>More than one class?</h4>
    <p>Load all your files together, then use the class filter to work through one class at a time. Everything on the page, including what you print, follows the filter.</p>
  </div>
</div>

<div class="chapter">
  <h2>Seven things worth knowing before you read a number</h2>
  <p class="lead">These are the points that trip people up. Read them once and the rest of the page reads itself.</p>
  <ol class="know">
    <li><strong>A percentile is a position, not a mark.</strong> The 50th percentile means the middle of students in the same grade across the US norms group. It does not mean half the questions were right. MAP adapts to each student, so nearly everyone gets about half their questions right.</li>
    <li><strong>Achievement and growth are two different questions.</strong> Achievement is where a score sits. Growth is how far it moved. A student on the 85th percentile who barely moved needs attention as much as a student on the 20th who grew fast needs protecting.</li>
    <li><strong>Growth is judged against students who started in the same place.</strong> NWEA projects a typical gain from each student's own starting score. <em>Met growth</em> means they grew at least that much. A growth percentile of 50 is typical growth from that start, so it is fair to low and high starters alike.</li>
    <li><strong>The RIT score is the number to quote for progress.</strong> It runs on one scale through every grade, so a gain of 6 points means the same in Grade 3 and Grade 8. Percentiles do not work that way.</li>
    <li><strong>Small groups get counts, not percentages.</strong> Under ${data.minShare} records the page writes "3 of 4" and not "75%", because one child is a quarter of four. Read the count as a count.</li>
    <li><strong>A grade level is where one test sits on the US norms, not a reading age.</strong> It is the highest grade whose typical score the student's score has reached. A gap of 3 points or fewer is inside the test's margin of error, and the page will not call a student behind for it.</li>
    <li><strong>One test is one day.</strong> A very short test, or a result marked "too close to call", is not a verdict. ${escapeHTML(sectionName("sec-quality"))} tells you which results to hold lightly. Use what you know about the student as well.</li>
  </ol>
</div>

<div class="chapter">
  <h2>1. What this tool is, and what it never does</h2>
  <p>The dashboard turns an NWEA MAP Growth export into a classroom planning view: who grew, who needs support, who closed a gap, how to group the class, what to say at a data meeting and what to put on the wall. It is one web page. Open it, drop your CSV on it, and everything you see is computed from that file in your own browser.</p>
  <div class="callout good">
    <h4>Privacy</h4>
    <p>Nothing is uploaded anywhere. The page loads no third-party scripts, fonts or trackers, so it also works offline and behind a school filter. The only things remembered between visits are your theme and motion preferences; no student data is ever written to disk or sent to a server. Closing the tab forgets the file.</p>
  </div>
  <p>It is built for teachers rather than analysts. Three habits run through every section:</p>
  <ul>
    <li><strong>It says when a number is too thin to trust.</strong> Any share resting on fewer than ${data.minShare} records is shown as a count ("3 of 4") rather than a percentage, because a percentage over a handful of students is one child rounded to a whole number.</li>
    <li><strong>It separates achievement from growth.</strong> Where a score sits is one question; how far it moved compared with students who started in the same place is another. High achievement can hide low growth, and a low start can hide strong growth.</li>
    <li><strong>It explains itself.</strong> Method notes sit under the figures they qualify, and the <strong>?</strong> in the corner of every section opens a short explanation in place.</li>
  </ul>
  <p>Two words it uses precisely: a <strong>record</strong> is one student in one subject, so a student tested in three subjects is three records; a <strong>student</strong> is a person. Most figures count records, and the page says which.</p>
</div>

<div class="chapter">
  <h2>2. Getting your files out of NWEA MAP</h2>
  <p>You need two kinds of export for the whole picture, and they have to match. The <strong>Achievement Status and Growth (ASG)</strong> report carries growth: where each student started, where they are now, and NWEA's projection. The <strong>Class Profile</strong> report carries the instructional areas inside each subject, one file per subject. Load both and the dashboard folds each student's two records into one.</p>
  <h3>The Achievement Status and Growth (ASG) export</h3>
  <ol>
    <li>Sign in to MAP Growth and open <em>MAP Reports</em>.</li>
    <li>Choose the <em>Achievement Status and Growth</em> report for your class and the two terms you want compared (for example Fall to Spring).</li>
    <li>Use the export or download option and choose <em>CSV</em>.</li>
    <li>Save the file somewhere you can find it. You do not need to open or edit it.</li>
  </ol>
  <h3>The Class Profile exports</h3>
  <ol>
    <li>In <em>MAP Reports</em>, choose the <em>Class Profile</em> report for the same class and the current term.</li>
    <li>Run it once per subject - mathematics, reading, language usage, science - and download each as <em>CSV</em>. Each file is one test.</li>
    <li>Keep them with the ASG file. You will upload all of them together.</li>
  </ol>
  <div class="callout">
    <h4>Get both right</h4>
    <p>Same class, same term, every student in both. The dashboard matches each student's ASG record to their Class Profile record by student ID and subject. If the two exports disagree about a student's score - the same test with two different results - the Data Check names the student, both figures and both files, and keeps the growth record. Check the exports rather than trust either number for that student.</p>
  </div>
  <p>Column names are matched automatically, so slightly different exports still work, and comma, semicolon and tab separated files are all read. Suppressed values (the asterisks NWEA prints for small groups) and missing scores are handled.</p>
  <h3>A fall upload with one test window</h3>
  <p>In September there is nothing to compare against yet. Upload the single-window export anyway: the dashboard detects it and switches to a start-of-year view with tiers, norm placement and growth targets instead of showing empty growth panels. It does not matter whether the export puts the fall test in the Start or the End columns.</p>
  <h3>Several files at once</h3>
  <p>Select all the files at once when you upload and they are read as one data set. Where an ASG file and a Class Profile file describe the same test, the two are folded into one record so growth and instructional areas sit on the same student. An ASG file on its own gives you everything except the instructional areas; Class Profile files on their own give you the areas and one window, but no growth.</p>
  <p>Only Growth tests are read. A Class Profile also lists any screening test a student sat (its TestName starts with &ldquo;Screening&rdquo; rather than &ldquo;Growth&rdquo;); those rows are left out entirely, so a screener can never replace or merge into a student's growth test. The Data Check names each one that was left out.</p>
  <div class="callout">
    <h4>Not ready to export?</h4>
    <p>Click <em>Load Sample Data</em> on the upload panel to explore every feature with a small made-up class first. Everything in this guide was pictured with that sample.</p>
  </div>
</div>

<div class="chapter">
  <h2>3. Loading a file and choosing what you look at</h2>
  ${figure(pictures.topbar, "The upload panel. Drag files onto the dashed box or click it to browse.")}
  <p>Drop your CSV on the upload box, or click it and choose the file. Once a file is loaded the panel shrinks to a status line with the record and student counts; <em>Change file</em> brings it back. The banner below the panel says what kind of file it is:</p>
  ${figure(pictures.banner, "A growth file: two windows, so growth, gap closure and quadrant movement are all measured.")}
  ${figure(pictures.baselineBanner, "A single-window file: the dashboard says why no growth figure appears and analyses the window it has.")}
  <ul>
    <li><strong>Growth file</strong> - most records carry both windows. Everything is available.</li>
    <li><strong>Mixed file</strong> - a growth file where a meaningful share of records only have the current window, usually students who joined after the earlier test. Growth panels describe the records with a prior score; the others are read from the achievement and norm columns.</li>
    <li><strong>Baseline file</strong> - one window only. Growth, gap closure and quadrant panels are hidden rather than shown empty; the Starting Point section, tiers, norm placement and targets take their place.</li>
  </ul>
  <h3>Filters</h3>
  ${figure(pictures.filters, "The filter bar. On a tall screen it stays at the top of the page as you scroll; on a laptop screen it scrolls away, and the Filters chip in the Jump to bar leads back to it.")}
  <p>Every section, card, poster and export follows the filters. Search by student name or ID; narrow to a class, or to one or more subjects: the <em>Subject</em> filter is a list of tick-boxes, so you can tick Reading and Language together and the page, the goal sheets and every export carry those two and nothing else; <em>More filters</em> adds teacher, grade, band, met growth, planning group, gap status and tier, and a switch between the subject lens and the class lens for the overview cards. When the export marks a test as not valid, a tick box lets you put those records back. <em>Reset</em> clears everything.</p>
  <p>The quick-question chips at the top jump straight to the section that answers them, and the <em>Jump to</em> bar lists every section the file makes available. It stays pinned at the top of the screen as you scroll, so any section is one click away, and it marks the section you are reading. On a laptop screen the filters scroll away and the bar keeps a <em>Filters</em> chip that shows how many are set and takes you back to them.</p>
</div>

<div class="chapter">
  <h2>4. Reading the numbers</h2>
  <dl>
    <dt>RIT score</dt>
    <dd>NWEA's equal-interval scale, roughly 140 to 260, running through every year of school without restarting. Growth is measured in RIT points. It is the number to quote when you talk about progress.</dd>
    <dt>Percentile</dt>
    <dd>Where a RIT sits against students in the same grade nationally, out of 100; 50 is the middle. It is not the share of questions answered correctly.</dd>
    <dt>Colour bands and tiers</dt>
    <dd>Percentiles are grouped into five bands twenty points wide, and the same cut points give the instructional tiers used for planning. A band is where a student is today, not a label.</dd>
    <dt>Projected and observed growth</dt>
    <dd>NWEA projects, from each student's own starting RIT and grade, how much a typical peer grows between the two windows. Observed growth is what happened. <em>Met growth</em> means observed was at least the projection; <em>exceeded</em> means more.</dd>
    <dt>Conditional growth percentile (CGP)</dt>
    <dd>A student's growth ranked against students nationally who started at the same RIT and grade. 50 is typical growth from that start, which makes it fair to low and high starters alike. Above 50 is faster than typical.</dd>
    <dt>US norms and grade-level equivalence</dt>
    <dd>The mean RIT for each grade and season in NWEA's norms study, built into the page as a reference table. "vs US norm" is the distance from that mean; the grade level is read strictly from those means - the highest grade whose typical score, in that season, the student's score has reached - so a Grade 5 student under the typical Grade 5 score is placed in Grade 4 and shown that way. It is not a reading or maths grade level. The page does not flag or group a student as behind for a shortfall of 3 RIT or less, which is inside measurement error. When a file says it was scored against a different norms study, the Data Check says so and the RIT-versus-norm figures should be read with care.</dd>
    <dt>The secure benchmark</dt>
    <dd>The ${data.secure}st percentile is a locally chosen line for "secure", not an NWEA definition. The 41st is the on-track line, the 21st the top of the intensive tier, the 81st the start of advanced. Gap closure measures movement towards or past the ${data.secure}st among students who started below it.</dd>
    <dt>Counts instead of percentages</dt>
    <dd>Under ${data.minShare} records a figure prints as a count. Widen the filters, or read the counts as counts; they carry the same fact without implying a precision the denominator cannot support.</dd>
    <dt>Too close to call</dt>
    <dd>Where the export carries a standard error, a met-growth result that sits within measurement error of the projection is marked "too close": the test pair cannot resolve it either way, and it is neither a miss to chase nor a win to celebrate.</dd>
  </dl>
  <div class="two">
    <div>
      <table><thead><tr><th>Band</th><th>Percentile</th></tr></thead><tbody>${bandRows}</tbody></table>
    </div>
    <div>
      <table><thead><tr><th>Tier</th><th>Level</th><th>Range</th></tr></thead><tbody>${tierRows}</tbody></table>
    </div>
  </div>
</div>

<div class="chapter">
  <h2>5. The sections, one by one</h2>
  <p>Each entry below is the text behind the section's <strong>?</strong> button: what it shows, how to read it, and what to do with it. Sections that mean something different on a single-window file say so.</p>
  ${sectionChapters}
</div>

<div class="chapter">
  <h2>6. Printing, exporting and the classroom wall</h2>
  <h3>Exports</h3>
  <ul>
    <li><strong>Summary TXT</strong> from Class Snapshot or the Class Summary Report - the narrative as plain text for notes or an email.</li>
    <li><strong>CSV exports</strong> from Grouping, Priority, Celebration, Gap Closure, Growth Goals, Instructional Areas, What Would It Take and Table Groups.
      <ul class="sub">
        <li>An export always holds every row, even when the table on screen shows one page of them.</li>
        <li>Hiding columns does not change an export. The Grouping, Priority, Celebration and Growth Goals tables (the support list and the strengths list, on a start-of-year file) each have a <em>Columns</em> button that lists their columns as tick-boxes, with <em>Key columns</em> and <em>All columns</em> to switch between a short table and the full one. Your choice for each table is remembered on this device.</li>
        <li>The table groups export has one row per seat: table, seat, how the table's desks are arranged, the order the strategy placed each student and whether you moved them by hand, then the student's scores and where the table stands, in centimetres from the left and front walls.</li>
      </ul>
    </li>
    <li><strong>Copy</strong> buttons on the Summary, the Action Board, a student's spotlight and the quiz results put the text on your clipboard.</li>
  </ul>
  <h3>Printing</h3>
  <ul>
    <li><strong>Goal sheets</strong> - two pages per student, from <em>Print Goal Sheets</em> in Growth Goals. They print back to back on one sheet of paper.
      <ul class="sub">
        <li><strong>Page one is the data.</strong> Where the student is now in each subject, their next step, and the instructional areas inside each subject.</li>
        <li><strong>The grade level on page one</strong> is the highest grade whose typical score, in that season on the US norms, the score has reached, with the typical scores it rests on printed beside it. A Grade 5 student one point under the typical Grade 5 fall score is placed in Grade 4. A student who has reached the typical score for their own grade or higher simply reads \u201cAt my grade level\u201d.</li>
        <li><strong>Page two is the student's to fill in.</strong> The same targets in one line each, the part of each subject to work on first, and ruled space for the goal they set, what they will do about it and how you will help, with a line for both signatures and the date. When the dashboard is opened from its web address, page two also carries the code for the family (chapter 7).</li>
        <li><strong>The explanations are kept short.</strong> A one-line note says what US norms are, and that every student has a next target whatever their level.</li>
        <li><strong>Two pages is a firm limit.</strong> A student with many subjects or areas gets a slightly smaller print, never a third page. A student with more than eight subjects has the first eight printed, and the page tells you when that happens.</li>
      </ul>
    </li>
    <li><strong>The action plan</strong> - the Action Board as a printable list of moves with the students named.</li>
    <li><strong>The seating plan</strong> - two prints from the planner, both drawn to scale: the room at the size you set, single desks pushed into groups with a chair behind each, and your furniture at its real size.
      <ul class="sub">
        <li><strong>The teacher copy</strong> shows every desk with the student's band colour and score, then adds roster pages with each table's students, band, percentile, growth (or NWEA's projected gain for a projection file) and planning group. A table is never split across two pages, and the pages say only that students are grouped according to data and behaviour patterns.</li>
        <li><strong>The wall plan</strong> draws the same room with names only: no score, no colour, nothing a visitor can read as data. Every name is printed in full, in proper case, sized to fit its desk, never cut short.</li>
        <li><strong>A group that needs more room</strong> can sit at more than one table: select its table and choose <em>Add a table to this group</em>. The group keeps its students and its seats carry on across the tables. The extra tables are named Table 1 &middot; B, Table 1 &middot; C, and so on, and each can be moved, turned and given its own number of desks.</li>
        <li><strong>An assistant</strong> gets a desk of their own from <em>Add to room</em>: one desk and a chair, with no student seat. It appears on both prints.</li>
        <li><strong>Keeping a plan.</strong> <em>Save plan file</em> in the planner's Room menu keeps the whole plan - the room, the table names and who sits where, by student ID - in a file on your computer. <em>Load plan file</em> brings it back.</li>
        <li><strong>Paper.</strong> Both prints fit A4 or A3, landscape or portrait to match the room's shape. Choose A3 for a wall plan so the names print larger.</li>
        <li><strong>On a laptop screen</strong> the planner draws the whole room at once with the settings of the selected table beside it. The grouping controls are one click away under <em>Show grouping controls</em>, and <em>+</em> zooms in to read a small desk.</li>
      </ul>
    </li>
    <li><strong>A student one-pager</strong> - open any student's name for their spotlight, then print it for a conference.</li>
    <li><strong>The page itself</strong> - the browser's print command prints the dashboard; the quiz and the seating tools are left out.</li>
  </ul>
  <h3>Wall posters</h3>
  <p>Posters are written for students, in student language, and carry class shares, medians and counts only: no name, no individual score, no rank. They follow your filters, so filter to one class before you print, and the footer of each records which group it describes. Which posters are available depends on the file: growth posters need two windows and at least ${data.minShare} growth results, the learning-areas poster needs a Class Profile export, and every poster needs at least ${data.posterMin} students in view. A subject that fewer than ${data.posterMin} students sat is not given a row, a ladder or a median of its own, because a figure for three children is three children.</p>
  <table><thead><tr><th>Poster</th><th>What it says</th></tr></thead><tbody>${posterRows}</tbody></table>
  <p>Choose A3 or A4, landscape or portrait; add the class name the students know; tick the posters you want and print. In the print dialog turn on background graphics and choose fit to page.</p>
</div>

<div class="chapter">
  <h2>7. Sharing results with families</h2>
  <p class="lead">Every goal sheet can carry one code for the student's family. They scan it with a phone camera and get their child's results explained in plain language, in English and Arabic, with practice to do at home. There is no app, no login and nothing for you to set up.</p>
  <h3>What you do</h3>
  <ol>
    <li>Open the dashboard <strong>from its web address</strong>, not from a copy saved on your computer. The code is only printed from the hosted page.</li>
    <li>Load your file and filter to the class.</li>
    <li>In ${where("sec-goals")}, press <em>Print Goal Sheets</em>.</li>
    <li>Page two of each student's sheet has the code, under the signatures. Send the sheet home, or hand it over at a conference.</li>
  </ol>
  <div class="side">
    ${figure(pictures.goalData, "Page one: the student's scores and next steps.")}
    ${figure(pictures.goalPlan, "Page two: the plan the student writes, and the code for the family.")}
  </div>
  <div class="say">
    <h4>What to say to a parent</h4>
    <p>"Point your phone camera at this square and tap the link. It shows how your child did against the target for this term, what the numbers mean, and a few short things you can do at home. It is in English and Arabic. You do not need an app or a password."</p>
  </div>
  <h3>What the family sees</h3>
  <div class="side phones">
    ${figure(pictures.familyTop, "The top of the family page on a phone.")}
    <div>
      <ul>
        <li><strong>What MAP is</strong>, in a few lines.</li>
        <li><strong>Results at a glance</strong>: each subject's score set against the target for the term.</li>
        <li><strong>The grade level</strong> that score has reached on the US norms, stated honestly beside the child's own grade.</li>
        <li><strong>The areas inside each subject</strong>, as bars with the scores, when the file carries them.</li>
        <li><strong>How to read the numbers</strong>: RIT, percentile and growth, one short paragraph each.</li>
        <li><strong>Helping your child show what they know</strong>: take the test seriously and read each question through.</li>
        <li><strong>A small-step plan</strong> and <strong>questions to ask the teacher</strong>.</li>
        <li><strong>Practice booklets</strong> to download as PDFs, in English and Arabic, with worked examples and an answer guide that explains each answer for the parent.</li>
      </ul>
    </div>
  </div>
  <h3>About the practice booklets</h3>
  <ul>
    <li>They are <strong>general practice for a grade's expectations</strong>, written to the standards for that grade. They are not made from the child's own MAP questions, and they do not replace the classroom.</li>
    <li>A child whose score sits below their grade is offered a path of booklets <strong>from the level the score has reached up to their own grade</strong>. A child at grade level gets their grade and one step beyond.</li>
    <li>The questions mix multiple choice, in the style of the test, with short word problems. About ten minutes, three days a week, is the pace the booklet suggests.</li>
    <li>The answer guide shows the working and says what a child who picked a wrong option probably did, so a parent can help without knowing the subject.</li>
  </ul>
  <h3>What is in the code, and what is not</h3>
  <div class="callout good">
    <h4>Privacy</h4>
    <p>The link holds scores only: no name, no student ID and no school. The scores sit after the <strong>#</strong> in the link, a part of a web address that a phone does not send to any server, so the family page works them out on the phone itself. Nothing is stored anywhere.</p>
  </div>
  <ul>
    <li><strong>Each code belongs to one child.</strong> The student's name is printed at the top of the sheet; check it goes home with the right student.</li>
    <li><strong>Treat the sheet like a report.</strong> Anyone holding the paper can scan it and see the scores, though not whose they are.</li>
    <li><strong>The code does not update.</strong> It shows the results in the file you loaded when you printed. Print again after the next test window.</li>
  </ul>
  <h3>If no code is printed</h3>
  <dl>
    <dt>"Open this page from where it is hosted, not from a file"</dt>
    <dd>You opened a saved copy of the dashboard. Open it from its web address and print again.</dd>
    <dt>"These records carry no results to link"</dt>
    <dd>The students in view have no score in the file. Check the filters and the Data Check.</dd>
  </dl>
</div>

<div class="chapter">
  <h2>8. Before a data meeting</h2>
  <p>Three sections are built for the conversation with a leader rather than for planning.</p>
  <ul>
    <li><strong>Class Summary Report</strong> writes the narrative for you, from the same figures as the cards. Edit it into your own voice and paste it into your notes.</li>
    <li><strong>Check My Understanding</strong> asks you the questions a principal, inspector, governor, data lead or head of department would ask about the records in view, marks your answers against the page, and shows where each figure lives. Filter to the class the meeting is about, run a set, read back what you missed, and copy the prep notes.</li>
    <li><strong>Data Check</strong> is the section to read first, so that nothing in the meeting surprises you: which students have no score, which tests were short, whether the file was scored against the norms study the page expects.</li>
  </ul>
  <div class="callout">
    <h4>A useful order</h4>
    <p>Data Check, then Class Snapshot, then the Priority list and the Action Board, then the Summary. That is the order a leader will ask about them.</p>
  </div>
</div>

<div class="chapter">
  <h2>9. When something looks wrong</h2>
  <dl>
    <dt>The file was skipped or nothing loaded</dt>
    <dd>The file needs a RIT or percentile column. Check that it is a MAP export rather than a roster or a summary sheet, and that it is the CSV rather than the PDF or Excel version. Data Check lists any file that was skipped and why.</dd>
    <dt>A section is missing</dt>
    <dd>Sections that a file cannot support are hidden rather than shown empty: growth sections need two windows, the Instructional Areas section needs a Class Profile export, and any column the export lacks hides the feature that depends on it.</dd>
    <dt>A figure shows "3 of 4" instead of a percentage, or "Too few"</dt>
    <dd>Fewer than ${data.minShare} records sit behind it. Widen the filters or read the count as a count.</dd>
    <dt>"No US norm available"</dt>
    <dd>NWEA publishes norms for Reading and Mathematics from kindergarten and for Language and Science from grade 2, and a record needs a grade to match. The Data Check counts the records that could not be matched and recovers grades suppressed on one row from the same student's other rows.</dd>
    <dt>The RIT-versus-norm figures do not match my MAP report</dt>
    <dd>The file was scored against a different norms study from the table built into the page; Data Check names both. Everything driven by the percentiles in your file is unaffected.</dd>
    <dt>Printing opened nothing</dt>
    <dd>A popup blocker stopped the print window. The dashboard downloads the same document as an HTML file instead; open it and print from there.</dd>
    <dt>The posters are not available</dt>
    <dd>Posters need at least ${data.posterMin} students in view, and any poster built on a percentage needs at least ${data.minShare} records behind it. Clear the search and filters.</dd>
  </dl>
</div>

<div class="chapter">
  <h2>A. Glossary and reference tables</h2>
  <h3>Planning groups and the teacher action that goes with them</h3>
  <table><thead><tr><th>Group</th><th>Suggested action</th></tr></thead><tbody>${groupRows}</tbody></table>
  <h3>Method notes, as they appear on the page</h3>
  <dl>
    ${Object.entries(data.notes).map(([key, note]) => "<dt>" + escapeHTML(key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase())) + "</dt><dd>" + escapeHTML(note) + "</dd>").join("")}
  </dl>
</div>

</body></html>`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
