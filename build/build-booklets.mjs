#!/usr/bin/env node
// Builds the practice booklets: one PDF a booklet and language, from the data in
// family/booklets/*.js, into booklets/ (next to family.html, so the family page
// links to them with a relative address). Also writes family/booklet-index.js,
// the short list the page uses to know which booklets exist, and
// booklets/manifest.json.
//
//   node build/build-booklets.mjs           write the PDFs, the index and the manifest
//   node build/build-booklets.mjs --check   change nothing; fail if any is stale
//
// A PDF is not byte for byte the same twice (Chromium stamps the time into it),
// so --check compares the SHA-256 of the booklet's HTML, which is kept in the
// manifest, and that the PDF exists, rather than the PDF bytes.
//
// PDFs, not a print button: iOS Safari does not reliably open a print dialog
// from a page, and a PDF can be saved, shared and printed from any phone.
// The PDF is made with a headless Chromium (PLAYWRIGHT_MODULE, as for the tests).
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const Core = require(path.join(root, "family/core.js"));
const check = process.argv.includes("--check");
const OUT = path.join(root, "booklets");

// ------------------------------------------------------------------ the data
const dir = path.join(root, "family/booklets");
const booklets = fs.readdirSync(dir).filter((f) => /^[a-z]{2}-\d{1,2}\.js$/.test(f)).sort().map((f) => {
  const data = require(path.join(dir, f));
  data.key = data.subject + "-" + data.grade;
  return data;
});
const { validateBooklet } = await import("./booklet-rules.mjs");
const problems = [];
booklets.forEach((b) => problems.push(...validateBooklet(b, Core)));
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }

// ---------------------------------------------------------------- the wording
const WORDS = {
  en: {
    dir: "ltr", lang: "en",
    title: (subject, grade) => subject + " practice booklet: Grade " + grade + " expectations",
    kg: "KG2",
    grade: (n) => "Grade " + n,
    forName: "Name",
    about: "What this booklet is",
    aboutText: (subject, grade, framework) => "This is general practice written for " + subject + " at Grade " + grade + " level, following the " + framework + " standards for that grade. It is not made from your child's MAP questions, and it does not replace the classroom. Use it as a guide to what a child is expected to know and do at this level.",
    howTitle: "How to use it",
    how: [
      "Do one section at a time, about 10 minutes, 3 days a week. Stop while it is still enjoyable.",
      "Read each question all the way through, twice, before answering. Underline the key words and say what is being asked.",
      "Take your time. A careful, correct answer is worth more than a fast one.",
      "Use scrap paper and show the working. Then check the answer before moving on.",
      "Ask your child to explain how they got an answer, even when it is right.",
      "If a section feels too hard, do the section before it again, or ask the teacher. That is part of learning, not a problem."
    ],
    section: "Section",
    standards: "Standards practised",
    example: "A worked example",
    questions: "Questions",
    answers: "Answer guide for parents",
    draft: "Draft: to be checked by a teacher before use.",
    footer: "Practice booklet"
  },
  ar: {
    dir: "rtl", lang: "ar",
    title: (subject, grade) => "كراسة تدريب في " + subject + ": توقعات الصف " + grade,
    kg: "رياض الأطفال",
    grade: (n) => "الصف " + n,
    forName: "الاسم",
    about: "ما هذه الكراسة",
    aboutText: (subject, grade, framework) => "هذه تدريبات عامة في " + subject + " بمستوى الصف " + grade + "، وفق معايير " + framework + " لذلك الصف. وهي ليست مأخوذة من أسئلة MAP الخاصة بطفلك ولا تغني عن الصف الدراسي. استعملها دليلًا لما يُتوقع أن يعرفه الطفل ويفعله في هذا المستوى.",
    howTitle: "كيف نستعملها",
    how: [
      "أنجز قسمًا واحدًا في كل مرة، نحو 10 دقائق، 3 أيام في الأسبوع. وتوقف وهو ما زال ممتعًا.",
      "اقرأ كل سؤال حتى آخره مرتين قبل أن تجيب. ضع خطًّا تحت الكلمات المهمة وقل ما المطلوب.",
      "خذ وقتك. فالإجابة المتأنية الصحيحة أهم من الإجابة السريعة.",
      "استعمل ورقة مسودة واكتب خطوات الحل. ثم راجع الإجابة قبل أن تنتقل.",
      "اطلب من طفلك أن يشرح كيف وصل إلى الإجابة، حتى حين تكون صحيحة.",
      "إذا بدا قسم صعبًا فأعد القسم الذي قبله أو اسأل المعلم. فهذا جزء من التعلّم وليس مشكلة."
    ],
    section: "القسم",
    standards: "المعايير التي يتدرّب عليها",
    example: "مثال محلول",
    questions: "الأسئلة",
    answers: "دليل الإجابات لأولياء الأمور",
    draft: "مسودة: يراجعها معلم قبل الاستعمال.",
    footer: "كراسة تدريب"
  }
};
const FRAMEWORK_NAME = { "CCSS.MATH": "Common Core State Standards for Mathematics", "CCSS.ELA": "Common Core State Standards for English Language Arts", "NGSS": "Next Generation Science Standards" };
const FRAMEWORK_NAME_AR = { "CCSS.MATH": "المعايير الأساسية المشتركة الأمريكية للرياضيات", "CCSS.ELA": "المعايير الأساسية المشتركة الأمريكية للغة الإنجليزية", "NGSS": "معايير العلوم للجيل القادم الأمريكية" };

const rtlLang = (lang) => lang === "ar";
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const CSS = `
@page { size: A4; margin: 16mm 15mm 18mm; }
* { box-sizing: border-box; }
html { font: 12.5pt/1.5 system-ui, "Segoe UI", "Noto Sans", "Noto Naskh Arabic", "Noto Sans Arabic", Arial, sans-serif; color: #14213d; }
body { margin: 0; }
h1 { font-size: 22pt; margin: 0 0 .3rem; color: #00504f; line-height: 1.2; }
h2 { font-size: 16pt; margin: 0 0 .4rem; color: #00504f; }
h3 { font-size: 12.5pt; margin: .9rem 0 .25rem; color: #00504f; }
.meta { color: #4a5670; margin: 0 0 1rem; }
.name { margin: 1rem 0; }
.name span { display: inline-block; border-bottom: 1px solid #14213d; min-width: 10rem; }
.box { border: 1px solid #c9d6d6; border-radius: 8px; padding: .5rem .9rem; margin: .8rem 0; background: #f4f9f9; break-inside: avoid; }
.box.passage { break-inside: auto; }
.draft { font-size: 10pt; color: #8a5a00; margin-top: 1.5rem; }
section { break-before: page; }
.std { font-size: 10pt; color: #4a5670; margin: 0 0 .6rem; }
ol.q { padding-inline-start: 2.4rem; }
ol.q li { margin: .55rem 0 1.2rem; break-inside: avoid; }
ol.q .line { display: block; border-bottom: 1px solid #aab8b8; height: 1.4rem; margin-top: .4rem; }
.answers { break-before: page; }
.answers h3 { margin-top: 1rem; }
.answers ol { padding-inline-start: 2.4rem; margin: .2rem 0; font-size: 11pt; }
.footer { font-size: 9pt; color: #4a5670; }
`;

function areaName(subject, code, lang) { return Core.AREAS[subject].find((a) => a.code === code)[lang]; }

function html(b, lang) {
  const w = WORDS[lang];
  const subjectName = Core.SUBJECTS[b.subject][lang];
  const gradeText = b.grade === 0 ? w.kg : w.grade(b.grade);
  const fw = (lang === "ar" ? FRAMEWORK_NAME_AR : FRAMEWORK_NAME)[b.framework];
  const english = Boolean(b.englishOnly);
  const pick = (value) => (english ? value.en : value[lang]);
  const wrap = english && lang === "ar" ? ' dir="ltr" lang="en"' : "";
  const t = (text) => Core.ltrRuns(text, lang === "ar" && !english);
  let body = "<h1>" + esc(w.title(subjectName, b.grade)) + "</h1>";
  body += '<p class="meta">' + esc(gradeText) + " · " + esc(w.footer) + "</p>";
  body += '<p class="name">' + esc(w.forName) + ': <span></span></p>';
  body += '<div class="box"><h3>' + esc(w.about) + "</h3><p>" + esc(w.aboutText(subjectName, b.grade, fw)) + "</p></div>";
  body += '<div class="box"><h3>' + esc(w.howTitle) + "</h3><ul>" + w.how.map((line) => "<li>" + esc(line) + "</li>").join("") + "</ul></div>";
  b.sections.forEach((s, i) => {
    const e = s.example[english ? "en" : lang];
    body += "<section><h2>" + esc(w.section) + " " + (i + 1) + ": " + esc(areaName(b.subject, s.area, lang)) + "</h2>";
    body += '<p class="std">' + esc(w.standards) + ': <bdi dir="ltr">' + esc(s.standards.join(", ")) + "</bdi></p>";
    body += '<div class="box"' + wrap + "><h3>" + esc(w.example) + '</h3><p><b>' + t(e.question) + "</b></p><ol>" + e.steps.map((st) => "<li>" + t(st) + "</li>").join("") + "</ol><p><b>" + t(e.answer) + "</b></p></div>";
    if (s.passage) (Array.isArray(s.passage) ? s.passage : [s.passage]).forEach((p) => { body += '<div class="box passage" dir="ltr" lang="en"><h3>' + esc(p.title) + "</h3>" + p.text.split(/\n\n+/).map((para) => "<p>" + esc(para) + "</p>").join("") + "</div>"; });
    body += "<h3>" + esc(w.questions) + '</h3><ol class="q"' + wrap + ">" + s.items.map((item) => "<li>" + t(pick(item.q)) + '<span class="line"></span></li>').join("") + "</ol></section>";
  });
  body += '<div class="answers"><h2>' + esc(w.answers) + "</h2>";
  b.sections.forEach((s, i) => {
    body += "<h3>" + esc(w.section) + " " + (i + 1) + ": " + esc(areaName(b.subject, s.area, lang)) + '</h3><ol' + wrap + ">" + s.items.map((item) => "<li>" + t(pick(item.a)) + "</li>").join("") + "</ol>";
  });
  body += "</div>";
  return '<!doctype html><html lang="' + w.lang + '" dir="' + w.dir + '"><head><meta charset="utf-8"><title>' + esc(w.title(subjectName, b.grade)) + "</title><style>" + CSS + "</style></head><body>" + body + "</body></html>";
}

// --------------------------------------------------------- hashes and the index
const sha = (text) => crypto.createHash("sha256").update(text, "utf8").digest("hex");
const jobs = [];
booklets.forEach((b) => ["en", "ar"].forEach((lang) => { const page = html(b, lang); jobs.push({ name: b.key + "-" + lang, page, hash: sha(page) }); }));
const manifest = {};
jobs.forEach((j) => { manifest[j.name] = j.hash; });
const index = {};
booklets.forEach((b) => { (index[b.subject] = index[b.subject] || []).push(b.grade); });
Object.keys(index).forEach((k) => index[k].sort((a, b) => a - b));
const indexText = "// Generated by build/build-booklets.mjs. Do not edit by hand.\n// Which practice booklets exist, by subject, as the grade each is written for.\nconst FamilyBookletIndex = " + JSON.stringify(index) + ";\n\nif (typeof module !== \"undefined\" && module.exports) module.exports = FamilyBookletIndex;\n";
const manifestText = JSON.stringify(manifest, null, 2) + "\n";

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "");
let stale = 0;
const note = (what) => { stale += 1; console.log((check ? "stale: " : "wrote: ") + what); };
if (read(path.join(root, "family/booklet-index.js")) !== indexText) { note("family/booklet-index.js"); if (!check) fs.writeFileSync(path.join(root, "family/booklet-index.js"), indexText); }
const oldManifest = read(path.join(OUT, "manifest.json"));
const old = oldManifest ? JSON.parse(oldManifest) : {};
const toMake = jobs.filter((j) => old[j.name] !== j.hash || !fs.existsSync(path.join(OUT, j.name + ".pdf")));
const obsolete = fs.existsSync(OUT) ? fs.readdirSync(OUT).filter((f) => f.endsWith(".pdf") && !(f.slice(0, -4) in manifest)) : [];
if (check) {
  toMake.forEach((j) => note("booklets/" + j.name + ".pdf"));
  obsolete.forEach((f) => note("booklets/" + f + " should not exist"));
  if (oldManifest !== manifestText && !toMake.length && !obsolete.length) note("booklets/manifest.json");
  if (stale) { console.error("Run: node build/build-booklets.mjs"); process.exit(1); }
  console.log("booklets are up to date (" + jobs.length + " PDFs)");
  process.exit(0);
}
fs.mkdirSync(OUT, { recursive: true });
obsolete.forEach((f) => { fs.rmSync(path.join(OUT, f)); console.log("removed booklets/" + f); });
if (toMake.length) {
  const mod = process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : "playwright";
  const { chromium } = await import(mod);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const j of toMake) {
    await page.setContent(j.page, { waitUntil: "load" });
    await page.pdf({ path: path.join(OUT, j.name + ".pdf"), format: "A4", printBackground: true, displayHeaderFooter: false });
    console.log("wrote booklets/" + j.name + ".pdf");
  }
  await browser.close();
}
if (oldManifest !== manifestText) fs.writeFileSync(path.join(OUT, "manifest.json"), manifestText);
console.log(jobs.length + " booklet PDFs, " + toMake.length + " made");
