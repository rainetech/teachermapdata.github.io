#!/usr/bin/env node
// The rules a practice booklet (family/booklets/<subject>-<grade>.js) must meet,
// in one place: build/build-booklets.mjs refuses a booklet that breaks them,
// build/check-family.mjs runs them over every booklet, and a writer can check a
// file as they go:
//
//   node build/booklet-rules.mjs family/booklets/rd-4.js [more files]
//
// Exits 1 and lists the problems, or prints "ok". See family/booklets/AUTHORING.md.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

export const FRAMEWORK_OF = { ma: "CCSS.MATH", rd: "CCSS.ELA", lu: "CCSS.ELA", sc: "NGSS" };
// Grades a subject has a booklet for (Language Usage starts at Grade 2, Science at Grade 3; 0 is KG2).
export const GRADES_OF = { ma: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], rd: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], lu: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], sc: [3, 4, 5, 6, 7, 8, 9, 10, 11] };

export function standardPattern(framework, grade) {
  const g = grade === 0 ? "K" : String(grade);
  if (framework === "CCSS.MATH") {
    if (grade <= 8) return new RegExp("^" + g + "\\.[A-Z]{1,3}\\.[A-Z]\\.\\d{1,2}$");
    return /^[NAFGS]-[A-Z]{1,4}\.[A-Z]\.\d{1,2}$/;
  }
  if (framework === "CCSS.ELA") {
    const band = grade <= 8 ? g : grade <= 10 ? "9-10" : "11-12";
    const strands = grade <= 5 ? "RF|RL|RI|W|L|SL" : "RL|RI|W|L|SL";
    return new RegExp("^(" + strands + ")\\." + band + "\\.\\d{1,2}[a-z]?$");
  }
  if (framework === "NGSS") {
    const prefix = grade <= 5 ? g : grade <= 8 ? "MS" : "HS";
    const extra = grade <= 5 ? "|" + (grade <= 2 ? "K-2" : "3-5") + "-ETS1-\\d" : "";
    return new RegExp("^(" + prefix + "-(PS|LS|ESS|ETS)\\d-\\d" + extra + ")$");
  }
  return /^$/;
}

const SENSITIVE = /\b(pig|pigs|pork|bacon|ham|sausage|lard|alcohol|wine|beer|vodka|whisky|whiskey|liquor|cocktail|gambl\w*|casino|bet|betting|dating|boyfriend|girlfriend)\b|(?<![؀-ۿ])(ال)?(خنزير|كحول|خمر|نبيذ|بيرة|ويسكي|قمار|رهان)/i;
const BLAME = /(?<!pass or )\b(fail(ed|ing|ure)?|behind|lazy|weak|poor|stupid|slow learner)\b/i;

function strings(value, out = []) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === "object") Object.values(value).forEach((v) => strings(v, out));
  return out;
}

export function validateBooklet(b, Core, fileName) {
  const problems = [];
  const bad = (text) => problems.push((b && b.subject ? b.subject + "-" + b.grade : fileName || "booklet") + ": " + text);
  if (!b || typeof b !== "object") { problems.push((fileName || "booklet") + ": does not export an object"); return problems; }
  if (!Core.SUBJECTS[b.subject]) { bad("unknown subject " + b.subject); return problems; }
  if (!(GRADES_OF[b.subject] || []).includes(b.grade)) { bad("no booklet is planned for " + b.subject + " at grade " + b.grade); return problems; }
  if (fileName && path.basename(fileName) !== b.subject + "-" + b.grade + ".js") bad("the file is named " + path.basename(fileName) + " but holds " + b.subject + "-" + b.grade);
  if (b.framework !== FRAMEWORK_OF[b.subject]) bad("framework should be " + FRAMEWORK_OF[b.subject]);
  if (b.englishOnly && !["rd", "lu"].includes(b.subject)) bad("only Reading and Language Usage may be englishOnly");
  const reviewed = b.reviewed || {};
  if (reviewed.en !== false || reviewed.ar !== false) bad("reviewed must be { en: false, ar: false } until a person has checked it");
  const band = Core.gradeBand(b.grade);
  const wanted = Core.AREAS[b.subject].filter((a) => a.bands.includes(band)).map((a) => a.code);
  const have = (b.sections || []).map((s) => s.area);
  if (wanted.join() !== have.join()) bad("sections must be, in order: " + wanted.join(", ") + " (found " + have.join(", ") + ")");
  const pattern = standardPattern(b.framework, b.grade);
  const seen = new Set();
  (b.sections || []).forEach((s) => {
    const at = b.subject + "-" + b.grade + "/" + s.area + ": ";
    const need = (ok, text) => { if (!ok) problems.push(at + text); };
    need(Array.isArray(s.standards) && s.standards.length >= 1, "name at least one standard");
    (s.standards || []).forEach((code) => need(pattern.test(code), "standard " + code + " is not a " + b.framework + " code for grade " + b.grade + " (expected like " + pattern.source + ")"));
    need(Array.isArray(s.items) && s.items.length >= 10 && s.items.length <= 20, "10 to 20 questions (found " + (s.items || []).length + ")");
    const e = s.example;
    need(e && e.en && e.en.question && Array.isArray(e.en.steps) && e.en.steps.length >= 2 && e.en.answer, "a worked example with a question, two steps or more and an answer");
    if (!b.englishOnly) need(e && e.ar && e.ar.question && Array.isArray(e.ar.steps) && e.ar.steps.length >= 2 && e.ar.answer, "the worked example in Arabic too");
    if (s.passage !== undefined) (Array.isArray(s.passage) ? s.passage : [s.passage]).forEach((p) => need(p && typeof p.title === "string" && typeof p.text === "string" && p.text.length >= 200, "a passage is { title, text } with a text of at least 200 characters (a section may have an array of two or three passages)"));
    (s.items || []).forEach((item, i) => {
      need(item && item.q && item.q.en && item.a && item.a.en, "question " + (i + 1) + " needs a question and an answer in English");
      if (!b.englishOnly) need(item && item.q && item.q.ar && item.a && item.a.ar, "question " + (i + 1) + " needs a question and an answer in Arabic");
      const key = item && item.q && item.q.en;
      if (key) { need(!seen.has(key), "question " + (i + 1) + " repeats another question in this booklet"); seen.add(key); }
    });
  });
  strings(b.sections).forEach((t) => {
    if (/[–—]|--/.test(t)) bad("a dash used as punctuation: " + t.slice(0, 60));
    if (SENSITIVE.test(t)) bad("sensitive content: " + t.slice(0, 60));
    if (BLAME.test(t)) bad("a word that labels or blames: " + t.slice(0, 60));
    if (/TODO|placeholder|lorem/i.test(t)) bad("unfinished text: " + t.slice(0, 60));
  });
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const Core = require(path.join(root, "family/core.js"));
  const files = process.argv.slice(2);
  if (!files.length) { console.error("usage: node build/booklet-rules.mjs family/booklets/<subject>-<grade>.js ..."); process.exit(2); }
  let failed = 0;
  files.forEach((file) => {
    let data;
    try { data = require(path.resolve(file)); } catch (error) { console.log(file + ": cannot be loaded: " + error.message); failed += 1; return; }
    const problems = validateBooklet(data, Core, file);
    if (problems.length) { failed += 1; console.log(problems.join("\n")); } else console.log(file + ": ok (" + data.sections.map((s) => s.area + " " + s.items.length).join(", ") + ")");
  });
  process.exit(failed ? 1 : 0);
}
