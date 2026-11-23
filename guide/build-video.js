#!/usr/bin/env node
// Records teacher-dashboard-walkthrough.mp4: a short, captioned walk through
// the dashboard for a teacher who has never opened it.
//
// Like the guide, it is filmed from the page itself with its own sample data,
// so it cannot show a screen the app does not have. There is no voice: every
// step is a caption, so it plays in a staffroom with the sound off. Rebuild it
// when a section it visits changes:
//
//   node guide/build-video.js
//
// Needs Node, Playwright with a Chromium build, and ffmpeg on the PATH.
// GUIDE_INDEX, GUIDE_FAMILY_PAGE and GUIDE_TITLE mean what they mean in
// build-guide.js; VIDEO_OUTPUT says where the film goes.

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const INDEX_FILE = path.resolve(ROOT, process.env.GUIDE_INDEX || "index.html");
const FAMILY_FILE = process.env.GUIDE_FAMILY_PAGE ? path.resolve(ROOT, process.env.GUIDE_FAMILY_PAGE) : path.join(path.dirname(INDEX_FILE), "family.html");
const OUTPUT = path.resolve(ROOT, process.env.VIDEO_OUTPUT || "teacher-dashboard-walkthrough.mp4");
const TITLE = process.env.GUIDE_TITLE || "NWEA MAP ASG Teacher Dashboard";
const HOST = "https://your-dashboard.example";
const SIZE = { width: 1280, height: 720 };

// What the film adds to the page: a caption bar, a pointer (a recording has no
// mouse), a ring round the thing being talked about, and full-screen cards.
const TOUR_CSS = `
  #tourCaption { position: fixed; left: 50%; bottom: 26px; transform: translateX(-50%); z-index: 2147483000; max-width: 1040px; width: max-content;
    background: rgba(13, 22, 41, 0.94); color: #fff; font: 600 25px/1.35 "Segoe UI", Arial, sans-serif; padding: 16px 26px; border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0,0,0,.35); text-align: center; opacity: 0; transition: opacity .35s ease; }
  #tourCaption.on { opacity: 1; }
  #tourCaption b { display: inline-block; background: #f5c518; color: #111827; border-radius: 999px; padding: 1px 14px; margin-right: 12px; font-weight: 800; font-size: 20px; vertical-align: 2px; }
  #tourPointer { position: fixed; left: 0; top: 0; z-index: 2147483001; width: 30px; height: 30px; pointer-events: none; transition: transform .7s cubic-bezier(.3,.7,.2,1); transform: translate(640px, 420px); }
  #tourPointer.tap::after { content: ""; position: absolute; left: -14px; top: -14px; width: 44px; height: 44px; border-radius: 50%; border: 4px solid #f5c518; animation: tourTap .5s ease-out; }
  @keyframes tourTap { from { transform: scale(.3); opacity: 1; } to { transform: scale(1.4); opacity: 0; } }
  #tourRing { position: fixed; z-index: 2147482999; border: 4px solid #f5c518; border-radius: 14px; box-shadow: 0 0 0 6px rgba(245,197,24,.25); pointer-events: none; opacity: 0; transition: all .45s ease; }
  #tourRing.on { opacity: 1; }
  #tourCard { position: fixed; inset: 0; z-index: 2147483002; background: linear-gradient(140deg, #10214a, #1d3f8a); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 60px 110px; font-family: "Segoe UI", Arial, sans-serif; opacity: 0; pointer-events: none; transition: opacity .45s ease; }
  #tourCard.on { opacity: 1; }
  #tourCard small { font-size: 22px; letter-spacing: .14em; text-transform: uppercase; color: #f5c518; font-weight: 800; margin-bottom: 22px; }
  #tourCard h1 { font-size: 54px; line-height: 1.15; margin: 0 0 22px; color: #fff; }
  #tourCard p { font-size: 28px; line-height: 1.45; margin: 0 0 10px; color: #dbe6ff; max-width: 980px; }
  #tourCard ol { font-size: 28px; line-height: 1.6; text-align: left; color: #fff; margin: 6px 0 0; padding-left: 40px; }
  #tourShow { position: fixed; inset: 0; z-index: 2147482998; background: rgba(13, 22, 41, 0.86); display: flex; gap: 34px; align-items: center; justify-content: center; padding: 26px 40px 120px; opacity: 0; pointer-events: none; transition: opacity .45s ease; }
  #tourShow.on { opacity: 1; }
  #tourShow img { max-height: 100%; max-width: 46%; border-radius: 10px; box-shadow: 0 16px 40px rgba(0,0,0,.5); background: #fff; }
  #tourShow img.phone { border: 8px solid #111827; border-radius: 30px; max-width: 30%; }
  .support-dock, .toast-stack, .back-to-top, .celebrate-layer { display: none !important; }
`;

function installTour() {
  const add = (tag, id, html) => { const node = document.createElement(tag); node.id = id; if (html) node.innerHTML = html; document.body.appendChild(node); return node; };
  add("div", "tourCaption");
  add("div", "tourRing");
  add("div", "tourShow");
  add("div", "tourCard");
  add("div", "tourPointer", '<svg viewBox="0 0 30 30" width="30" height="30"><path d="M4 2 L4 24 L10 18.5 L14 27.5 L18 25.7 L14 17 L22 17 Z" fill="#fff" stroke="#111827" stroke-width="2" stroke-linejoin="round"/></svg>');
  const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  window.tour = {
    caption(html) { const node = document.getElementById("tourCaption"); if (!html) { node.classList.remove("on"); return; } node.innerHTML = html; node.classList.add("on"); },
    card(html) { const node = document.getElementById("tourCard"); if (!html) { node.classList.remove("on"); return; } node.innerHTML = html; node.classList.add("on"); },
    show(images) { const node = document.getElementById("tourShow"); if (!images) { node.classList.remove("on"); return; } node.innerHTML = images.map((image) => '<img class="' + (image.phone ? "phone" : "") + '" src="' + image.src + '" alt="">').join(""); node.classList.add("on"); },
    ring(selector, pad) {
      const ring = document.getElementById("tourRing");
      const node = selector && document.querySelector(selector);
      if (!node) { ring.classList.remove("on"); return; }
      const box = node.getBoundingClientRect();
      const space = pad === undefined ? 8 : pad;
      const top = Math.max(4, box.top - space);
      const bottom = Math.min(window.innerHeight - 4, box.bottom + space);
      ring.style.left = Math.max(4, box.left - space) + "px";
      ring.style.top = top + "px";
      ring.style.width = Math.min(window.innerWidth - 8, box.width + space * 2) + "px";
      ring.style.height = Math.max(20, bottom - top) + "px";
      ring.classList.add("on");
    },
    point(selector) {
      const node = document.querySelector(selector);
      if (!node) return null;
      const box = node.getBoundingClientRect();
      const x = Math.round(box.left + Math.min(box.width / 2, 120));
      const y = Math.round(box.top + box.height / 2);
      document.getElementById("tourPointer").style.transform = "translate(" + x + "px," + y + "px)";
      return { x, y };
    },
    tap() { const node = document.getElementById("tourPointer"); node.classList.remove("tap"); void node.offsetWidth; node.classList.add("tap"); },
    // A glide down the page the eye can follow; the page's own smooth scroll is off for some viewers.
    scrollTo(selector, offset) {
      const node = document.querySelector(selector);
      if (!node) return Promise.resolve(false);
      const from = window.scrollY;
      const to = Math.max(0, Math.min(document.documentElement.scrollHeight - window.innerHeight, from + node.getBoundingClientRect().top - (offset === undefined ? 96 : offset)));
      const time = Math.max(500, Math.min(1400, Math.abs(to - from) / 2.2));
      const start = performance.now();
      return new Promise((resolve) => {
        const step = (now) => {
          const t = Math.min(1, (now - start) / time);
          window.scrollTo(0, from + (to - from) * ease(t));
          if (t < 1) requestAnimationFrame(step); else resolve(true);
        };
        requestAnimationFrame(step);
      });
    }
  };
}

async function main() {
  if (spawnSync("ffmpeg", ["-version"]).status !== 0) throw new Error("ffmpeg is needed to write the film, and it is not on the PATH.");
  const siteHTML = fs.readFileSync(INDEX_FILE, "utf8");
  const familyHTML = fs.existsSync(FAMILY_FILE) ? fs.readFileSync(FAMILY_FILE, "utf8") : "";
  const work = fs.mkdtempSync(path.join(os.tmpdir(), "map-video-"));
  const browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined });
  const prefs = () => { try { localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ theme: "light", reducedMotion: true, supportPromptOff: true, supportPromptLastShown: Date.now() })); } catch (error) { /* private mode */ } };

  // ---- stills, taken before filming: the goal sheet and the family page ----
  const still = {};
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: "light" });
    await context.addInitScript(prefs);
    await context.route(HOST + "/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: siteHTML }));
    const page = await context.newPage();
    await page.goto(HOST + "/index.html");
    await page.click("#sampleBtn");
    await page.waitForFunction(() => document.body.classList.contains("has-data"));
    const sheet = await page.evaluate(() => {
      const open = window.open;
      let html = "";
      window.open = () => ({ document: { open() {}, write(text) { html += text; }, close() {} }, focus() {}, print() {} });
      printGoalSheets();
      window.open = open;
      const first = studentKey(state.filteredRows[0]);
      const rows = latestSubjectRecords(state.filteredRows.filter((row) => studentKey(row) === first)).map((entry) => entry.current);
      return { html, link: familyLinkFor(rows) };
    });
    const paper = await context.newPage();
    await paper.setViewportSize({ width: 820, height: 1160 });
    await paper.setContent(sheet.html);
    await paper.waitForTimeout(250);
    const pages = await paper.$$(".sheet");
    const data = async (buffer) => "data:image/jpeg;base64," + buffer.toString("base64");
    if (pages[0]) still.goalData = await data(await pages[0].screenshot({ type: "jpeg", quality: 84 }));
    if (pages[1]) still.goalPlan = await data(await pages[1].screenshot({ type: "jpeg", quality: 84 }));
    await context.close();
    if (sheet.link && familyHTML) {
      const phone = await browser.newContext({ viewport: { width: 390, height: 800 }, deviceScaleFactor: 2, colorScheme: "light" });
      await phone.route(sheet.link.split("#")[0] + "**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: familyHTML }));
      const family = await phone.newPage();
      await family.goto(sheet.link);
      await family.waitForTimeout(500);
      // The sample class sat its tests in a past term, which the family page says in a note. A sheet printed this term has no such note.
      await family.evaluate(() => document.querySelectorAll(".note[role=note]").forEach((node) => node.remove()));
      still.family = await data(await family.screenshot({ type: "jpeg", quality: 82 }));
      await phone.close();
    }
  }

  // ---- the film ---------------------------------------------------------------
  const context = await browser.newContext({ viewport: SIZE, colorScheme: "light", recordVideo: { dir: work, size: SIZE } });
  await context.addInitScript(prefs);
  await context.route(HOST + "/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: siteHTML }));
  const page = await context.newPage();
  const started = Date.now();
  await page.goto(HOST + "/index.html");
  await page.addStyleTag({ content: TOUR_CSS });
  await page.evaluate(installTour);

  const wait = (ms) => page.waitForTimeout(ms);
  // Long enough to read aloud, slowly, once.
  const readTime = (text) => Math.max(3600, text.replace(/<[^>]+>/g, "").split(/\s+/).length * 400 + 1400);
  const say = async (html, extra) => { await page.evaluate((text) => window.tour.caption(text), html); await wait(readTime(html) + (extra || 0)); };
  const hush = async () => { await page.evaluate(() => { window.tour.caption(""); window.tour.ring(""); }); await wait(350); };
  const card = async (html, ms) => { await page.evaluate((text) => window.tour.card(text), html); await wait(ms); };
  const uncard = async () => { await page.evaluate(() => window.tour.card("")); await wait(500); };
  const go = async (selector, offset) => { await page.evaluate(([sel, off]) => window.tour.scrollTo(sel, off), [selector, offset]); await wait(250); };
  const ring = (selector, pad) => page.evaluate(([sel, space]) => window.tour.ring(sel, space), [selector, pad]);
  const exists = (selector) => page.evaluate((sel) => { const node = document.querySelector(sel); return Boolean(node && !node.hidden && node.getBoundingClientRect().width > 0); }, selector);
  const tap = async (selector) => {
    if (!(await exists(selector))) return false;
    await page.evaluate((sel) => window.tour.point(sel), selector);
    await wait(800);
    await page.evaluate(() => window.tour.tap());
    await wait(250);
    await page.evaluate((sel) => document.querySelector(sel).click(), selector);
    await wait(500);
    return true;
  };
  const name = (id, fallback) => page.evaluate(([sectionId, other]) => { const node = document.querySelector("#" + sectionId + " .section-header h2"); return node ? node.textContent.trim() : other; }, [id, fallback]);
  const step = (number) => "<b>Step " + number + "</b>";

  // Title, and the one step that happens outside the page.
  await card("<small>" + TITLE.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</small><h1>From your MAP export to a plan for your class</h1><p>Five steps, about ten minutes. No training needed.</p>", 400);
  const trimStart = (Date.now() - started) / 1000;
  await wait(4600);
  await card("<small>Step 1</small><h1>Get your file from NWEA</h1><ol><li>Open <strong>MAP Reports</strong>.</li><li>Choose <strong>Achievement Status and Growth</strong> for your class.</li><li>Download it as <strong>CSV</strong>. Do not open or edit it.</li></ol>", 8500);
  await uncard();

  // Step 2: the file goes on the page.
  await ring("#dropZone");
  await page.evaluate(() => window.tour.point("#dropZone"));
  await say(step(2) + "Open the dashboard and drop the file on this box.");
  await say("Your file stays on your computer. Nothing is uploaded anywhere.");
  await ring("#sampleBtn", 6);
  await say("No file yet? <em>Load Sample Data</em> lets you try everything with a made-up class.");
  await ring("");
  await tap("#sampleBtn");
  await page.waitForFunction(() => document.body.classList.contains("has-data"));
  await wait(900);

  // Step 3: what the file says.
  if (await exists("#modeBanner")) {
    await go("#modeBanner", 150);
    await ring("#modeBanner");
    await say("The banner tells you what kind of file you loaded, and what it can show.");
  }
  await go("#sec-briefing");
  await ring("#sec-briefing");
  await say(step(3) + "Read the " + (await name("sec-briefing", "Briefing")) + " first: how your class did, in plain sentences.");
  await ring("");
  await go("#sec-snapshot");
  await ring("#sec-snapshot");
  await say((await name("sec-snapshot", "Class Snapshot")) + ": how many students met their growth projection, and where the class sits.");
  await ring("");
  const help = ".section-help-btn[data-help='sec-snapshot']";
  if (await exists(help)) {
    await say("Not sure what a section means? Press the <strong>?</strong> in its corner.", -1200);
    await tap(help);
    await wait(600);
    await ring("#sec-snapshot .section-help-panel, #sec-snapshot .section-help");
    await say("Three short answers: what it shows, how to read it, and what to do with it.");
    await ring("");
    await page.evaluate((sel) => document.querySelector(sel).click(), help);
  }

  // Step 4: who needs what.
  await hush();
  await go("#sec-priority");
  await ring("#sec-priority");
  await say(step(4) + (await name("sec-priority", "Priority Students")) + ": who to look at first, with the reason for each.");
  await ring("");
  if (await tap("#sec-priority .student-link")) {
    await wait(700);
    await say("Click any student's name for their whole picture on one card. You can print it for a conference.");
    await tap("#spotlightClose");
  }
  await go("#sec-actions");
  await ring("#sec-actions");
  await say((await name("sec-actions", "Action Board")) + ": what to do this week, with the students named.");
  await ring("");

  // Step 5: what to print.
  await hush();
  await go("#sec-goals");
  await ring("#sec-goals");
  await say(step(5) + (await name("sec-goals", "Growth Goals")) + ": a target for every student.");
  await ring("#printGoalsBtn", 6);
  await page.evaluate(() => window.tour.point("#printGoalsBtn"));
  await say("Press <em>Print Goal Sheets</em>.", -600);
  await ring("");
  if (still.goalData && still.goalPlan) {
    await page.evaluate((images) => window.tour.show(images), [{ src: still.goalData }, { src: still.goalPlan }]);
    await say("Two pages for each student: their scores and targets, then a plan they write themselves.");
    if (still.family) {
      await page.evaluate((images) => window.tour.show(images), [{ src: still.goalPlan }, { src: still.family, phone: true }]);
      await say("The code on page two is for the family. They scan it with a phone camera.");
      await say("It opens their child's results in plain language, in English and Arabic, with practice booklets. No app, no login.");
    }
    await page.evaluate(() => window.tour.show(null));
    await wait(400);
  }
  await go("#sec-posters");
  await ring("#sec-posters");
  await say((await name("sec-posters", "Wall Posters")) + ": class figures for the wall. No names and no individual scores.");
  await ring("");

  // The two things people ask about next.
  await hush();
  await go("#sec-quiz");
  await ring("#sec-quiz");
  await say("Before a data meeting, " + (await name("sec-quiz", "Check My Understanding")) + " asks you what a leader will ask.");
  await ring("");
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(500);
  if (await exists("#subjectFilterBtn")) {
    await go(".filter-bar", 120);
    await ring(".filter-bar");
    await page.evaluate(() => window.tour.point("#subjectFilterBtn"));
    await say("More than one class or subject? Use the filters.");
    await ring("");
    await tap("#subjectFilterBtn");
    const boxes = await page.evaluate(() => [...document.querySelectorAll("#subjectFilterMenu input[value]")].map((box) => box.value));
    for (const subject of boxes.slice(0, 2)) await tap("#subjectFilterMenu input[value='" + subject + "']");
    await say("Tick the subjects you want. You can choose more than one.");
    await say("Everything follows them: every card, every list, the goal sheets and every export.");
    await tap("#subjectFilterMenu input[data-subject-all]");
    await page.keyboard.press("Escape");
    await wait(300);
  }
  const more = ".section-nav-view[data-view='full']";
  if (await exists(more)) {
    await ring(more, 6);
    await page.evaluate((sel) => window.tour.point(sel), more);
    await say("<em>More analysis</em> opens the other sections: grouping, a seating plan, and a check of the file itself.");
    await ring("");
  }

  await hush();
  await card("<small>That is all you need</small><h1>Load your file and start with the briefing</h1><p>The <strong>?</strong> in each section and the user guide explain the rest.</p><p>Your file never leaves your computer.</p>", 7000);

  const video = page.video();
  await context.close();
  await browser.close();
  const raw = await video.path();

  // H.264 with the index at the front, so it plays in any browser as it downloads.
  const made = spawnSync("ffmpeg", ["-y", "-ss", trimStart.toFixed(2), "-i", raw, "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "27", "-pix_fmt", "yuv420p", "-r", "25", "-movflags", "+faststart", OUTPUT], { encoding: "utf8" });
  if (made.status !== 0) throw new Error("ffmpeg failed:\n" + String(made.stderr).split("\n").slice(-12).join("\n"));
  fs.rmSync(work, { recursive: true, force: true });
  const probe = spawnSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", OUTPUT], { encoding: "utf8" });
  console.log("wrote " + path.relative(ROOT, OUTPUT) + " (" + Math.round(fs.statSync(OUTPUT).size / 1024) + " KB, " + Math.round(Number(probe.stdout) || 0) + " seconds)");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
