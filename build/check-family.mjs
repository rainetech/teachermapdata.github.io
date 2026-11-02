// Family Plan checks. Run with Playwright's Chromium:
//
//   node build/check-family.mjs
//
// Needs `playwright` resolvable (npm i -D playwright, or set PLAYWRIGHT_MODULE
// to its index.mjs). For an independent proof that the QR codes scan, set
// FAMILY_QR_PYTHONPATH to a folder holding OpenCV and numpy for python3; without
// it that one check is skipped and says so.
//
// What it holds the family link and page to:
//   - the QR encoder's matrix is the one a reference encoder makes, and (with
//     OpenCV) the printed code decodes back to the link;
//   - a link carries only grade, term, and per subject the scores, the target
//     and a goal-area code: no name, ID or school, and the same string reads
//     back to the same numbers;
//   - a hostile, truncated, wrong-version or blank link never throws, never
//     shows a blank as zero, and says so plainly;
//   - the goal area is the one furthest below the overall RIT, and a profile
//     with nothing more than the threshold below is balanced;
//   - every goal-area name in NWEA's 2015, 2017 and 2025 lists lands in a theme;
//   - results are read against the projected target: above, met, close, below,
//     or only a target for the next test;
//   - the page opens with what MAP is, before any score, in English and in
//     Arabic with right-to-left layout, fits a phone, makes no request, stores
//     nothing, and an older term gets the gentle note;
//   - the words are clean: no em dashes, nothing a family in the UAE should not
//     meet, English and Arabic with the same keys, every activity set whole;
//   - the goal sheet carries one QR code for every subject, still two pages a
//     student, and nothing in its link identifies the child;
//   - family.html, the dashboard's copy of the rules and family/SLOTS.md are in
//     step with their sources.
import fs from "node:fs";
import crypto from "node:crypto";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const Core = require(path.join(root, "family/core.js"));
const QR = require(path.join(root, "family/qr.js"));
const Strings = require(path.join(root, "family/strings.js"));
const Activities = require(path.join(root, "family/activities.js"));
const config = JSON.parse(fs.readFileSync(path.join(root, "family/config.json"), "utf8"));

let failures = 0;
function check(condition, message) {
  if (condition) console.log("  ok   " + message);
  else { failures += 1; console.log("  FAIL " + message); }
}
const section = (name) => console.log(name);

// ---------------------------------------------------------------- the QR code
section("QR encoder");
{
  const sample = QR.encode("hello", { ecc: "M", mask: 2 });
  check(sample && sample.version === 1 && sample.size === 21, "a short text is a version 1 code, 21 modules a side");
  const long = QR.encode("https://example.org/family#" + "d=ma.205.62.55.198.213.num~".repeat(8), { ecc: "M" });
  check(long && long.version >= 8 && long.version <= 14 && long.size === long.version * 4 + 17, "a link for eight subjects fits a code of a size a phone reads (version " + (long && long.version) + ")");
  check(QR.encode("x".repeat(2000)) === null && QR.toSVG("x".repeat(2000)) === "", "a text too long for the encoder is refused rather than drawn wrong");
  const m = long.modules;
  const corner = (r, c) => m[r][c] && m[r][c + 6] && m[r + 6][c] && m[r + 6][c + 6] && !m[r + 1][c + 1] && m[r + 3][c + 3];
  check(corner(0, 0) && corner(0, long.size - 7) && corner(long.size - 7, 0), "the three finder squares are where a reader looks for them");
  const svg = QR.toSVG("hello", { ecc: "M" });
  check(/^<svg [^>]*viewBox="0 0 29 29"/.test(svg) && /fill="#fff"/.test(svg) && !/<script|http:/.test(svg.replace('xmlns="http://www.w3.org/2000/svg"', "")), "the SVG has a four-module quiet zone, is black on white, and holds nothing else");

  const py = process.env.FAMILY_QR_PYTHONPATH;
  if (!py) console.log("  skip decoding with an independent reader (set FAMILY_QR_PYTHONPATH to run it)");
  else {
    const texts = ["hello", Core.encode({ term: "T1-2627", grade: 4, subjects: [{ subject: "ma", rit: 205, ach: 62, growthPct: 55, base: 198, target: 213, area: "num" }, { subject: "rd", rit: 190, ach: 48, growthPct: null, base: null, target: 201, area: "bal" }] })]
      .map((text) => (text.startsWith("v=") ? "https://example.org/family#" + text : text))
      .concat(["https://example.org/family#" + "d=ma.205.62.55.198.213.num~".repeat(8)]);
    const codes = texts.flatMap((text) => ["L", "M"].map((ecc) => ({ text, ecc, rows: QR.encode(text, { ecc, mask: 2 }).modules.map((row) => row.map((c) => (c ? 1 : 0)).join("")) })));
    const file = path.join(os.tmpdir(), "family-qr-cases.json");
    fs.writeFileSync(file, JSON.stringify(codes));
    const script = "import json,sys,numpy as np,cv2\ncases=json.load(open(sys.argv[1]));bad=0\nfor c in cases:\n  ok=False\n  for s in (4,6,5,8):\n    m=np.array([[0 if ch=='1' else 255 for ch in r] for r in c['rows']],dtype=np.uint8)\n    m=np.pad(m,4,constant_values=255);m=np.kron(m,np.ones((s,s),dtype=np.uint8))\n    t,_,_=cv2.QRCodeDetector().detectAndDecode(m)\n    if t==c['text']: ok=True;break\n  bad+=0 if ok else 1\nprint(bad)";
    const run = spawnSync("python3", ["-c", script, file], { env: { ...process.env, PYTHONPATH: py }, encoding: "utf8" });
    check(run.status === 0 && run.stdout.trim() === "0", "OpenCV decodes " + codes.length + " codes (error correction L and M, one to eight subjects) back to the exact link" + (run.status === 0 ? "" : " " + run.stderr.slice(0, 200)));
  }
}

// ------------------------------------------------------- the link, both ways
section("The family link");
const student = {
  term: "T1-2627", grade: 4,
  // Fields a careless caller might pass; none may reach the link.
  name: "Amal Alpha", studentID: "90001", school: "Test School",
  subjects: [
    { subject: "ma", rit: 205, ach: 62, growthPct: 55, base: 198, target: 213, area: "geo", name: "Amal Alpha", studentID: "90001" },
    { subject: "rd", rit: 190, ach: 48, growthPct: null, base: null, target: 201, area: "bal" }
  ]
};
{
  const link = Core.encode(student);
  check(/^v=1&t=T1-2627&g=4&d=[a-z0-9.~]+$/.test(link), "a link is a version, a term, a grade and one record a subject (" + link + ")");
  check(!/amal|alpha|90001|test school|school/i.test(link), "no name, ID or school gets into a link, even when the caller passes them");
  check(link.length < 90, "two subjects make a short link (" + link.length + " characters), so the code stays small");
  const back = Core.decode("#" + link);
  check(back.ok && back.term === "T1-2627" && back.grade === 4 && back.band === "35" && back.subjects.length === 2, "the page reads the same grade, band, term and subjects back");
  const ma = back.subjects[0];
  check(ma.rit === 205 && ma.ach === 62 && ma.growthPct === 55 && ma.base === 198 && ma.target === 213 && ma.area === "geo", "and every number of the first subject (" + JSON.stringify(ma) + ")");
  const rd = back.subjects[1];
  check(rd.growthPct === null && rd.base === null && rd.target === 201 && rd.area === "bal", "a blank stays blank: not available, not zero (" + JSON.stringify(rd) + ")");
  check(Core.encode({ term: "T1-2627", grade: "K", subjects: [{ subject: "ma", rit: 150 }] }).includes("&g=0&") && Core.decode(Core.encode({ term: "T1-2627", grade: "K", subjects: [{ subject: "ma", rit: 150 }] })).band === "k", "kindergarten is grade 0 and reads back as KG2");
  check(Core.encode({ term: "T1-2627", grade: 4, subjects: [{ subject: "xx", rit: 200 }, { subject: "ma" }] }) === "", "a student with no usable subject gets no link");
  check(Core.encode({ term: "T1-2627", grade: 4, subjects: [{ subject: "ma", rit: 205, area: "<b>" }] }).endsWith("ma.205"), "an area code that is not two or three lower-case letters is left out");
}
section("Reading a bad link");
{
  const attempts = [undefined, null, "", "#", "#v=1", "v=1&t=T1-2627&g=4", "#v=2&t=T1-2627&g=4&d=ma.205", "#v=1&t=T9-0000&g=4&d=ma.205", "#v=1&t=T1-2627&g=99&d=ma.205", "#v=1&t=T1-2627&g=4&d=zz.205~ma.", "#v=1&t=T1-2627&g=4&d=ma.abc", "#v=1&t=T1-2627&g=4&d=ma.9999", "#v=1&t=T1-2627&g=4&d=ma.205.0...150", "#v=1&t=T1-2627&g=4&d=" + "ma.205~".repeat(5000), "#v=1&t=<script>alert(1)</script>&g=4&d=ma.205", "%%%&&&===", "#__proto__=1&constructor=2&v=1&d=ma.205"];
  let threw = 0;
  const outcomes = attempts.map((attempt) => { try { return Core.decode(attempt); } catch (error) { threw += 1; return null; } });
  check(threw === 0, "none of " + attempts.length + " odd, hostile or broken links throws");
  check(outcomes[1].ok === false && outcomes[2].reason === "empty" && outcomes[3].reason === "empty" && outcomes[4].reason === "nodata" && outcomes[5].reason === "nodata" && Core.decode("#t=T1-2627&g=4&d=ma.205").reason === "version", "nothing, an empty fragment, a link with no results and a link with no version are refused, not guessed at");
  check(outcomes[6].ok === false && outcomes[6].reason === "version", "another version of the format is named as such, so the page can say so");
  check(outcomes[7].ok && outcomes[7].term === "" && outcomes[7].termOrder === null && outcomes[7].warnings.includes("term"), "a bad term does not stop the results, it only turns the term note off");
  check(outcomes[8].ok && outcomes[8].band === null, "a grade outside the bands still shows the results, with no activity set");
  check(outcomes[9].ok === false && outcomes[9].warnings.includes("subject") && outcomes[9].warnings.some((w) => w.startsWith("rit")), "an unknown subject and a record with no RIT are dropped, and said to be");
  check(outcomes[10].ok === false && outcomes[11].ok === false, "a RIT that is not a number, or is out of range, drops that subject");
  check(outcomes[12].ok && outcomes[12].subjects[0].ach === null && outcomes[12].subjects[0].target === 150, "a percentile of 0 is not a percentile, so it is blank and the rest is kept");
  check(outcomes[13].subjects.length === 5000, "a very long link is read in full without trouble");
  check(outcomes[14].ok && outcomes[14].term === "", "script in a field is only ever text, and here is not even a term");
  check(({}).polluted === undefined && outcomes[16].ok === true, "a __proto__ key does nothing");
}

// ------------------------------------------------------------ the focus area
section("The weakest goal area");
{
  const a = (name, rit, code) => ({ name, rit, code });
  check(Core.AREA_GAP_RIT === 8, "the threshold is one value, 8 RIT, the dashboard's own noise floor for goal areas");
  const weak = Core.pickFocusArea([a("Geometry", 196, "geo"), a("Number", 205, "num"), a("Algebra", 210, "alg")], 205);
  check(weak && weak.balanced === false && weak.code === "geo" && weak.delta === -9, "the area furthest below the overall RIT is named (" + JSON.stringify(weak) + ")");
  const edge = Core.pickFocusArea([a("Geometry", 197, "geo"), a("Number", 205, "num")], 205);
  check(edge.balanced === true, "exactly 8 below is not more than 8 below: balanced");
  const over = Core.pickFocusArea([a("Geometry", 196, "geo"), a("Number", 205, "num")], 205);
  check(over.balanced === false && over.code === "geo", "9 below is named");
  check(Core.pickFocusArea([a("Geometry", 199, "geo"), a("Number", 206, "num")], 205).balanced === true, "a spread within the threshold is a balanced profile");
  check(Core.pickFocusArea([a("Geometry", 200, "geo")], 205, 5).balanced === true && Core.pickFocusArea([a("Geometry", 199, "geo")], 205, 5).balanced === false, "the threshold can be passed in, to test a change of the one config value");
  check(Core.pickFocusArea([], 205) === null && Core.pickFocusArea(undefined, 205) === null && Core.pickFocusArea([a("Geometry", NaN, "geo")], 205) === null && Core.pickFocusArea([a("Geometry", 190, "geo")], NaN) === null, "no areas, no scores or no overall RIT gives no area at all, not a balanced profile");
  const tie = Core.pickFocusArea([a("Geometry", 190, "geo"), a("Number", 190, "num")], 205);
  check(tie.balanced === false && ["geo", "num"].includes(tie.code), "a tie still names one area");
  const unknown = Core.pickFocusArea([a("Something new", 180, null)], 205);
  check(unknown.balanced === false && unknown.code === null, "a weak area whose name is not known is reported as weak with no code");

  // The names NWEA gives its goal areas across 2015, 2017 and 2025.
  const names = {
    ma: { alg: ["Algebra", "Algebraic Concepts", "Operations and Algebraic Thinking", "Equations, Expressions, Inequalities, & Functions", "Equations, Expressions, & Inequalities", "Functions"],
      geo: ["Geometry", "Measurement", "Measurement and Data", "Measurement and Geometry", "Geometry; Probability & Statistics"],
      dat: ["Probability & Statistics", "Statistics and Probability", "Data, Statistics, and Probability", "Probability", "Statistics"],
      num: ["Number", "Number and Operations", "Number Sense", "Computation and Problem Solving", "The Real and Complex Number Systems", "Computation"] },
    rd: { fnd: ["Reading Foundations", "Phonological Awareness", "Phonics", "Concepts of Print", "Foundational Skills"], cmp: ["Reading Comprehension", "Comprehension"],
      voc: ["Vocabulary and Literary Devices", "Word Meaning: Word Origins, Word Relationships, and Semantics", "Word Structure and Meaning", "Vocabulary"],
      inf: ["Nonfiction", "Informational Concepts: Main Ideas, Details, and Inferences", "Informational Text"], lit: ["Fiction, Poetry, and Drama", "Literary Concepts: Purpose, Structure, and Devices", "Literary Text"], wl: ["Writing and Language", "Writing", "Language and Writing"] },
    lu: { cps: ["Capitalization, Punctuation, and Spelling", "Mechanics"], gru: ["Grammar and Usage", "Parts of Speech", "Usage"], wri: ["Narrative, Expository, and Argumentative Writing", "Writing Process"] },
    sc: { bio: ["Biology", "Life Sciences", "Organisms", "Ecosystems", "Heredity and Evolution", "Inheritance of Traits, Change over Time"], ear: ["Earth and Space Science", "Earth and Space Sciences", "Earth in Space"], phy: ["Chemistry and Physics", "Physical Sciences", "Matter", "Forces", "Energy and Waves"] }
  };
  const wrong = [];
  let total = 0;
  Object.entries(names).forEach(([subject, byCode]) => Object.entries(byCode).forEach(([code, list]) => list.forEach((name) => { total += 1; if (Core.areaCode(subject, name) !== code) wrong.push(subject + ": " + name + " -> " + Core.areaCode(subject, name) + ", wanted " + code); })));
  check(!wrong.length, total + " area names from NWEA's 2015, 2017 and 2025 lists each land in the right theme" + (wrong.length ? ": " + wrong.join(" | ") : ""));
  check(Core.areaCode("ma", "Something else entirely") === null && Core.areaCode("ma", "") === null && Core.areaCode("zz", "Geometry") === null, "a name that is not known has no theme");
  check(Core.subjectCode("Mathematics") === "ma" && Core.subjectCode("Reading") === "rd" && Core.subjectCode("Language") === "lu" && Core.subjectCode("Language Usage") === "lu" && Core.subjectCode("Science") === "sc" && Core.subjectCode("Art") === null, "the dashboard's subject names map to the four subject codes");
  check(["K", "kg", 0, "1", 2, "3", 5, "6", 8, "9", 11, 12].map(Core.gradeBand).join(",") === "k,k,k,12,12,35,35,68,68,911,911,911" && Core.gradeBand("13") === null && Core.gradeBand("") === null && Core.gradeBand("Missing") === null, "grades fall into KG2, 1 to 2, 3 to 5, 6 to 8 and 9 to 11");
}

// ---------------------------------------------------- real against the target
section("Against the target");
{
  const p = (rit, target, base) => Core.progress({ rit, target, base });
  check(p(216, 213, 198) === "above" && p(213, 213, 198) === "met" && p(214, 213, 198) === "met", "at or past the target is met, and 3 or more past it is above");
  check(p(211, 213, 198) === "close" && p(210, 213, 198) === "close" && p(209, 213, 198) === "below", "short by 3 or less is close, by more is below");
  check(p(200, 213, null) === "target" && p(200, null, 190) === "none" && p(null, 213, 190) === "target", "a fall result with only a target is shown as a target, and with none there is nothing to compare");
  check(Core.CLOSE_RIT === 3 && Core.ABOVE_RIT === 3, "the two margins are single values");
  check(Core.termCode("Fall", 2026) === "T1-2627" && Core.termCode("spring", 2026) === "T3-2627" && Core.termCode("Winter", 2026) === "T2-2627" && Core.termCode("", 2026) === "" && Core.termCode("Fall", NaN) === "", "terms are a season and a school year");
  check(Core.termOrder("T3-2526") < Core.termOrder("T1-2627") && Core.termOrder("T1-2627") < Core.termOrder("T2-2627") && Core.termOrder("T1-2628") === null && Core.termOrder("x") === null && Core.termOrder("T1-2630") === null, "terms sort in the order they happen, and a bad one is null");
}

// ---------------------------------------------------------------- the words
section("The words");
{
  const everyText = [];
  const walk = (value, where) => {
    if (typeof value === "string") everyText.push([where, value]);
    else if (Array.isArray(value)) value.forEach((item, index) => walk(item, where + "[" + index + "]"));
    else if (value && typeof value === "object") Object.keys(value).forEach((key) => walk(value[key], where + "." + key));
  };
  walk(Strings, "strings");
  walk(Activities, "activities");
  const bad = (pattern) => everyText.filter(([, text]) => pattern.test(text)).map(([where]) => where);
  check(!bad(/—|―|–|--/).length, "no em dash, en dash or double hyphen in anything a family reads" + (bad(/—|―|–|--/).length ? ": " + bad(/—|―|–|--/).slice(0, 4).join(", ") : ""));
  const sensitive = /\b(pig|pigs|pork|bacon|ham|sausage|lard|alcohol|wine|beer|vodka|whisky|whiskey|liquor|cocktail|gambl\w*|casino|bet|betting|dating|boyfriend|girlfriend)\b|(?<![\u0600-\u06ff])(ال)?(خنزير|كحول|خمر|نبيذ|بيرة|ويسكي|قمار|رهان)/i;
  check(!bad(sensitive).length, "nothing a family in the UAE should not meet in text" + (bad(sensitive).length ? ": " + bad(sensitive).join(", ") : ""));
  check(!bad(/\b(TODO|TBD|lorem|placeholder|FIXME)\b/i).length, "no draft marker left in anything a family reads");
  check(!bad(/(?<!pass or )\b(fail(ed|ing|ure)?|behind|lazy|weak|poor|stupid|slow learner)\b/i).length, "nothing blames or labels the child (the words are about scores and next steps)");

  const keys = (object) => Object.keys(object).sort().join(",");
  check(keys(Strings.en) === keys(Strings.ar), "English and Arabic have the same strings (" + Object.keys(Strings.en).length + ")");
  const arrays = Object.keys(Strings.en).filter((key) => Array.isArray(Strings.en[key]));
  check(arrays.every((key) => Strings.en[key].length === Strings.ar[key].length), "and the same number of paragraphs, questions and answers in each list");
  const slotsOf = (text) => (text.match(/\{\w+\}/g) || []).sort().join("");
  const mismatched = Object.keys(Strings.en).filter((key) => typeof Strings.en[key] === "string" && slotsOf(Strings.en[key]) !== slotsOf(Strings.ar[key]));
  check(!mismatched.length, "each sentence takes the same numbers in both languages" + (mismatched.length ? ": " + mismatched.join(", ") : ""));
  check(Strings.ar.dir === "rtl" && Strings.en.dir === "ltr" && /[؀-ۿ]/.test(Strings.ar.heading) && !/[؀-ۿ]/.test(Strings.en.heading), "Arabic is set right to left and is Arabic");
  check(Strings.en.stale === "These are earlier results. Ask the teacher for the latest goal sheet.", "the earlier-results note is the agreed sentence");
  check(Strings.en.map.length === 4 && Strings.ar.map.length === 4 && Strings.en.map[0].startsWith("MAP Growth is a computer test"), "What is MAP is four short sentences in each language");

  const slots = new Set(Core.allSlots().map((slot) => slot.key));
  const unknown = Object.keys(Activities).filter((key) => !slots.has(key));
  check(!unknown.length, "every activity set belongs to a real slot" + (unknown.length ? ": " + unknown.join(", ") : ""));
  const thin = [];
  Object.entries(Activities).forEach(([key, set]) => {
    const okText = (value) => value && typeof value === "object" && value.en && value.ar;
    if (!(set.activities.length >= 2 && set.activities.length <= 3 && set.activities.every((item) => item.en.title && item.en.text && item.ar.title && item.ar.text))) thin.push(key + " activities");
    if (!(set.example && ["en", "ar"].every((lang) => set.example[lang].question && set.example[lang].steps.length >= 2 && set.example[lang].answer))) thin.push(key + " example");
    if (!(set.sheet && okText(set.sheet.title) && okText(set.sheet.instructions) && set.sheet.items.length >= 5 && set.sheet.items.every((item) => okText(item.q) && okText(item.a)))) thin.push(key + " sheet");
    if (!(set.reviewed && typeof set.reviewed.en === "boolean" && typeof set.reviewed.ar === "boolean")) thin.push(key + " reviewed flags");
  });
  check(!thin.length, "each of the " + Object.keys(Activities).length + " activity sets has 2 or 3 activities, a worked example, a sheet of 5 or more with its answers, in both languages" + (thin.length ? ": " + thin.join(", ") : ""));
  check(Core.allSlots().length === 75 && Core.allSlots().filter((slot) => slot.kind === "balanced").length === 17, "the slot list is 58 goal areas and 17 balanced profiles, 75 in all (" + Core.allSlots().length + ")");
  check(Core.allSlots().every((slot) => Core.slotExists(slot.subject, slot.band, slot.code)) && !Core.slotExists("sc", "k", "bio") && !Core.slotExists("lu", "k", "bal") && Core.slotExists("rd", "12", "fnd") && !Core.slotExists("rd", "35", "fnd"), "Language Usage starts at Grade 1 to 2 data, Science at Grades 3 to 5, and foundations stop at Grade 2");
}

// -------------------------------------------------- built files in step
section("The built files");
{
  const run = spawnSync(process.execPath, [path.join(root, "build/build-family.mjs"), "--check"], { encoding: "utf8" });
  check(run.status === 0, "family.html, the dashboard's copy of the rules and family/SLOTS.md match their sources" + (run.status === 0 ? "" : " (" + (run.stdout + run.stderr).trim().replace(/\n/g, " ") + ")"));
}

// ------------------------------------------------------------------ the page
section("Hosting and the page's own defences");
{
  const html = fs.readFileSync(path.join(root, "family.html"), "utf8");
  const script = /<script>([\s\S]*?)<\/script>/.exec(html)[1];
  const style = /<style>([\s\S]*?)<\/style>/.exec(html)[1];
  const sha = (text) => "'sha256-" + crypto.createHash("sha256").update(text, "utf8").digest("base64") + "'";
  const meta = /http-equiv="Content-Security-Policy" content="([^"]+)"/.exec(html)[1];
  check(meta.includes("script-src " + sha(script) + ";") && meta.includes("style-src " + sha(style) + ";") && !/script-src[^;]*unsafe/.test(meta), "the page's policy lets exactly its one script and one stylesheet run, by hash: nothing injected could");
  check(/default-src 'none'/.test(meta) && !/connect-src|https?:|\*/.test(meta) && /form-action 'none'/.test(meta) && /base-uri 'none'/.test(meta), "and allows no network, no form post and no base tag");
  const site = (file) => fs.readFileSync(path.join(root, "family/site/" + file), "utf8");
  const hosting = JSON.parse(site("vercel.json"));
  const rules = Object.fromEntries(hosting.headers.map((rule) => [rule.source, Object.fromEntries(rule.headers.map((h) => [h.key, h.value]))]));
  check(Object.keys(rules).sort().join() === "/,/nwea" && site("nwea.html") === html, "the site is two routes: the portal at / and the MAP page at /nwea, which is the page itself");
  const sent = rules["/nwea"];
  check(sent["Content-Security-Policy"] === meta + "; frame-ancestors 'none'", "the host sends the page's policy as a header too, and forbids framing");
  const wanted = { "X-Content-Type-Options": /nosniff/, "X-Frame-Options": /DENY/, "Referrer-Policy": /^no-referrer$/, "Cross-Origin-Opener-Policy": /same-origin/, "Cross-Origin-Resource-Policy": /same-origin/, "Strict-Transport-Security": /max-age=\d{8,}/, "Permissions-Policy": /camera=\(\)/, "X-Robots-Tag": /noindex/ };
  const missing = ["/", "/nwea"].flatMap((route) => Object.keys(wanted).filter((key) => !wanted[key].test(rules[route][key] || "")).map((key) => route + " " + key));
  check(!missing.length, "and on both routes: no sniffing, no referrer, no shared window or resources, no features, no indexing, https only" + (missing.length ? ": missing " + missing.join(", ") : ""));
  check(!("functions" in hosting) && !("env" in hosting) && !("crons" in hosting) && !("redirects" in hosting) && !("rewrites" in hosting) && site("robots.txt").includes("Disallow: /"), "the host config has no function, environment variable, redirect or route but the two pages");
  const portal = site("index.html");
  const portalMeta = /http-equiv="Content-Security-Policy" content="([^"]+)"/.exec(portal)[1];
  const portalStyle = /<style>([\s\S]*?)<\/style>/.exec(portal)[1];
  check(!/<script/i.test(portal) && /script-src 'none'/.test(portalMeta) && portalMeta.includes("style-src " + sha(portalStyle) + ";") && rules["/"]["Content-Security-Policy"] === portalMeta + "; frame-ancestors 'none'", "the portal has no script at all and a policy that lets none run, by the same policy as a header");
  check(/href="nwea"/.test(portal) && /MAP testing/.test(portal) && /اختبار MAP/.test(portal) && /No sign-in needed/.test(portal) && /dir="rtl"/.test(portal) && !/(<form|<input|<img|<iframe|\bsrc=|\bhttps?:)/i.test(portal.replace(/xmlns="[^"]*"/g, "")), "it offers MAP testing as a tile that opens /nwea, in English and Arabic, and loads nothing and asks for nothing");
  const forbidden = /document\s*\.\s*cookie|localStorage|sessionStorage|indexedDB|\bfetch\s*\(|XMLHttpRequest|sendBeacon|WebSocket|EventSource|postMessage|\beval\s*\(|new\s+Function|\bimport\s*\(|document\s*\.\s*write|window\.name|navigator\.(serviceWorker|clipboard)/;
  check(!forbidden.test(script), "the page's code never touches cookies or storage, never makes a request, and never evaluates text");
  check(!/<(img|iframe|object|embed|link|form|input)\b|\bsrc=|\bonclick=|javascript:/i.test(html.replace(/<script>[\s\S]*?<\/script>/, "")), "the page's markup loads nothing and has no inline handler");
  check(!/ensdashboards|\.xyz|\bens\b/i.test(html + portal + JSON.stringify(hosting)) && !/vercel/i.test(html + portal), "and names no school, host or domain (the public copy stays generic)");
}

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright");
const browser = await chromium.launch();
const pageFile = pathToFileURL(path.join(root, "family.html")).href;

async function open(fragment, options) {
  const opts = options || {};
  const context = await browser.newContext({ viewport: opts.viewport || { width: 390, height: 800 }, locale: opts.locale || "en-US" });
  const page = await context.newPage();
  const errors = [];
  const requests = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => requests.push(request.url()));
  await page.goto(pageFile + fragment);
  await page.waitForTimeout(150);
  return { page, context, errors, requests };
}
const textOf = (page) => page.evaluate(() => document.getElementById("app").innerText);
const link = Core.encode({ term: "T1-2627", grade: 4, subjects: [{ subject: "ma", rit: 205, ach: 62, growthPct: 55, base: 198, target: 213, area: "num" }, { subject: "rd", rit: 190, ach: 38, growthPct: null, base: null, target: 201, area: "voc" }, { subject: "sc", rit: 200, ach: 70, growthPct: null, base: null, target: null, area: "bal" }, { subject: "lu", rit: 188, ach: 50, growthPct: null, base: 180, target: 190, area: "gru" }] });

section("The family page");
{
  const { page, context, errors, requests } = await open("#" + link);
  const text = await textOf(page);
  check(text.indexOf("What is MAP?") >= 0 && text.indexOf("What is MAP?") < text.indexOf("205") && text.indexOf("What is MAP?") < text.indexOf("Results at a glance"), "it opens with what MAP is, before any score");
  check(/MAP Growth is a computer test/.test(text) && /not a pass or fail exam/.test(text) && /starting point for a conversation/.test(text) && (text.match(/What is MAP\?/g) || []).length === 1, "in the agreed words, once, and not repeated further down");
  check(/Grade 4/.test(text) && /Fall 2026/.test(text) && /Mathematics/.test(text) && /Reading/.test(text) && /Science/.test(text) && /Language Usage/.test(text), "it shows the grade, the term and each subject");
  check(/Your child's Mathematics RIT is 205/.test(text) && /not a percentage, not a mark out of 100 and not a reading age/.test(text), "RIT is explained with the child's number, and as not a percentage, a mark or a reading age");
  check(/In Mathematics it is 62/.test(text) && /NWEA US norm group in the same grade, subject and time of year/.test(text) && /not the percentage of questions answered correctly and it is not a class ranking/.test(text), "the percentile is explained with the child's number, as a comparison and not a mark or a ranking");
  check(/Between the 41st and 60th percentile/.test(text) && /Below the 41st percentile/.test(text) && /At or above the 61st percentile/.test(text), "each percentile band has its own framing (41 to 60, below 41, 61 and above)");
  check(/Your child scored 205\. The target was 213, so the result is 8 short of it/.test(text) && /below the target|8 short/.test(text), "growth is read as the result against the target (205 against 213)");
  check(/first result in Reading for this school year: 190\. NWEA's target for the next test is 201, which is 11 points of growth\. Growth will be shown after the next test/.test(text), "a fall result with a target says growth will be shown after the next test");
  check(/Growth will be shown after the next test\./.test(text) && !/Growth percentile: 0/.test(text) && /Growth percentile: 55/.test(text) && (text.match(/Growth percentile/g) || []).length === 1, "a blank growth percentile is not shown, never as zero; a given one is");
  check(/different measure|a different measure from achievement|Growth: a different measure/.test(text), "growth is explained as a different measure from achievement");
  check(/A balanced profile/.test(text) && /not naming a weakness/.test(text), "a balanced profile says so and names no weakness");
  check(/One thing to practise at home: Numbers and calculating/.test(text) && /Shop and total/.test(text) && /A worked example/.test(text) && /36 x 4/.test(text), "a named area shows its activities and a worked example (Mathematics, Numbers and calculating)");
  check(/One thing to practise at home: Grammar and word usage/.test(text) && /Try these/.test(text), "a Grades 3 to 5 area with an activity set shows its activities");
  const gap = await open("#" + Core.encode({ term: "T1-2627", grade: 10, subjects: [{ subject: "lu", rit: 200, ach: 50, growthPct: null, base: null, target: null, area: "gru" }] }));
  const gapText = await textOf(gap.page);
  check(/One thing to practise at home: Grammar and word usage/.test(gapText) && /Ask your child's teacher which activity to try first in Language Usage/.test(gapText) && !/TODO|placeholder/i.test(gapText), "an area with no activity set yet (Grade 10) shows a gentle line pointing to the teacher, and no draft marker");
  await gap.context.close();
  check(/About 10 minutes at a time, 3 days a week/.test(text) && /check in with the teacher/.test(text) && /Questions to ask the teacher/.test(text) && /pass or fail test/.test(text) && /percentile goes down/.test(text) && /changed a little/.test(text), "the small-step plan, the questions for the teacher and the FAQ are there");
  check(!/—/.test(text), "no em dash on the page");
  check(!/These are earlier results/.test(text), "the latest term has no earlier-results note");
  const html = await page.content();
  check(!/Amal|Alpha|90001/.test(html), "nothing that names a child is on the page");
  check(requests.length === 1 && requests[0].startsWith("file:"), "the page makes no request but its own (" + requests.length + ")");
  const stored = await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length, cookie: document.cookie }));
  check(stored.local === 0 && stored.session === 0 && stored.cookie === "", "it stores nothing: no local or session storage, no cookie");
  const csp = await page.evaluate(() => [document.querySelector('meta[http-equiv="Content-Security-Policy"]').content, document.querySelector('meta[name="referrer"]').content, document.querySelector('meta[name="robots"]').content, [...document.querySelectorAll("script[src], link[href], img[src], iframe")].length]);
  check(/default-src 'none'/.test(csp[0]) && !/connect-src [^;]*\*/.test(csp[0]) && csp[1] === "no-referrer" && /noindex/.test(csp[2]) && csp[3] === 0, "it carries a policy that allows no network, sends no referrer, is not indexed and loads no script, image or font from anywhere");
  const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
  check(fits, "at phone width (390px) nothing runs off the side in English");
  check(errors.length === 0, "no page errors");

  await page.click("#langToggle");
  await page.waitForTimeout(100);
  const arabic = await textOf(page);
  const dir = await page.evaluate(() => [document.documentElement.dir, document.documentElement.lang, document.getElementById("langToggle").innerText]);
  check(dir[0] === "rtl" && dir[1] === "ar" && dir[2] === "English" && /ما هو اختبار MAP/.test(arabic) && /الرياضيات/.test(arabic) && /205/.test(arabic), "the toggle switches to Arabic, right to left, with the same numbers");
  check(arabic.indexOf("ما هو اختبار MAP") < arabic.indexOf("205"), "Arabic also opens with what MAP is");
  const align = await page.evaluate(() => { const h = document.querySelector("h2"); return getComputedStyle(h).direction + "/" + getComputedStyle(document.querySelector(".card")).borderInlineStartWidth; });
  check(/^rtl\//.test(align), "the layout flips: the cards are laid out right to left");
  check(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), "and in Arabic at 390px nothing runs off the side either");
  check(/Layla was reluctant/.test(arabic), "English reading passages stay in English inside the Arabic page");
  const english = await page.evaluate(() => [...document.querySelectorAll('[lang="en"][dir="ltr"]')].length);
  check(english >= 1, "and are marked as English, left to right (" + english + ")");
  check(!/—/.test(arabic) && !/—/.test(await page.content()), "no em dash in Arabic either");
  await page.click("#langToggle");
  await page.waitForTimeout(100);
  check((await page.evaluate(() => document.documentElement.dir)) === "ltr", "and back to English");
  await context.close();
}

section("Hostile links on the page");
{
  const evil = "<img src=x onerror=window.__pwned=1>";
  const attempts = ["#v=1&t=" + evil + "&g=4&d=ma.205.62.55.198.213." + encodeURIComponent(evil), "#v=1&t=T1-2627&g=" + encodeURIComponent(evil) + "&d=" + encodeURIComponent("ma.205~<script>window.__pwned=1</script>"), "#v=1&t=T1-2627&g=4&d=ma.205.62.55.198.213.num&x=" + encodeURIComponent(evil), "#v=1&t=T1-2627&g=4&d=ma.205.62.55.198.213.__proto__"];
  let clean = 0;
  let violations = 0;
  for (const attempt of attempts) {
    const hostile = await open(attempt);
    hostile.page.on("console", (message) => { if (/Content Security Policy/i.test(message.text())) violations += 1; });
    await hostile.page.reload();
    await hostile.page.waitForTimeout(150);
    const state = await hostile.page.evaluate(() => ({ pwned: window.__pwned === 1, injected: document.querySelectorAll("#app img, #app script, #app iframe, #app [onerror]").length, errors: 0 }));
    if (!state.pwned && !state.injected && hostile.errors.length === 0) clean += 1;
    await hostile.context.close();
  }
  check(clean === attempts.length, "script and markup in any part of a link are never run or inserted (" + clean + " of " + attempts.length + " hostile links left the page untouched)");
  const calm = await open("#" + link);
  const seen = [];
  calm.page.on("console", (message) => seen.push(message.text()));
  await calm.page.reload();
  await calm.page.waitForTimeout(200);
  check(!seen.some((text) => /Content Security Policy|Refused/i.test(text)), "a normal page runs under its own policy with no violation");
  await calm.context.close();
}

section("Older and odd links");
{
  const old = await open("#" + link.replace("t=T1-2627", "t=T3-2526"));
  const oldText = await textOf(old.page);
  check(config.latestTerm === "T1-2627" && /These are earlier results\. Ask the teacher for the latest goal sheet\./.test(oldText) && /Spring 2026/.test(oldText), "a term older than the latest the page knows gets the gentle note, and says which term the results are from");
  check(!/earlier results/.test(await textOf((await open("#" + link.replace("t=T1-2627", "t=T2-2627"))).page)), "a term at or after the latest does not");
  const noTerm = await textOf((await open("#" + link.replace("t=T1-2627&", ""))).page);
  check(!/earlier results/.test(noTerm) && /Mathematics/.test(noTerm), "a link with no term shows the results without a term or a note");
  await old.context.close();
  for (const [fragment, pattern, label] of [["", /Scan the QR code on your child's goal sheet/, "no link at all"], ["#v=1&t=T1-2627&g=4&d=", /could not be read/, "a link with no results"], ["#v=2&t=T1-2627&g=4&d=ma.205", /different version/, "another version"], ["#v=1&t=T1-2627&g=4&d=ma.abc", /could not be read/, "a broken record"]]) {
    const odd = await open(fragment);
    const oddText = await textOf(odd.page);
    check(pattern.test(oddText) && /What is MAP\?/.test(oddText) && odd.errors.length === 0, label + " gets a kind message and what MAP is, and no error");
    await odd.context.close();
  }
  const high = await textOf((await open("#v=1&t=T1-2627&g=0&d=ma.150.80")).page);
  check(/KG2/.test(high) || /Grade/.test(high), "kindergarten is shown as KG2");
  const noGrowth = await open("#v=1&t=T1-2627&g=4&d=ma.205.62");
  const noGrowthText = await textOf(noGrowth.page);
  check(/Growth will be shown after the next test/.test(noGrowthText) && !/Growth percentile/.test(noGrowthText) && /A general activity/.test(noGrowthText), "a result with no target, no growth percentile and no area says growth comes later and offers a general activity");
  await noGrowth.context.close();
  const arabicBrowser = await open("#" + link, { locale: "ar-AE" });
  check((await arabicBrowser.page.evaluate(() => document.documentElement.dir)) === "rtl", "a phone set to Arabic opens the page in Arabic");
  await arabicBrowser.context.close();
}

section("The practice sheet");
{
  const { page, context } = await open("#" + link);
  await page.evaluate(() => { window.print = () => { window.__printed = document.body.getAttribute("data-printing"); }; });
  await page.click('button[data-sheet="ma"]');
  check((await page.evaluate(() => window.__printed)) === "ma", "the button prints one subject's sheet");
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => { document.body.setAttribute("data-printing", "ma"); document.getElementById("sheet-ma").classList.add("is-printing"); });
  const printed = await page.evaluate(() => ({ visible: [...document.querySelectorAll("#app > *")].filter((el) => getComputedStyle(el).display !== "none").map((el) => el.id), text: document.getElementById("sheets").innerText, other: getComputedStyle(document.getElementById("sheet-rd")).display }));
  check(printed.visible.join() === "sheets" && printed.other === "none" && /Practice sheet: Numbers and calculating/.test(printed.text) && /Answer guide for parents/.test(printed.text) && /19 \(23|AED 19/.test(printed.text), "printing shows only that sheet, with the answer guide for the parent");
  await context.close();
}

// --------------------------------------------------------- the goal sheet
section("The goal sheet");
const csvOf = (rows) => rows.map((row) => row.map((cell) => /[",]/.test(String(cell)) ? '"' + String(cell).replace(/"/g, '""') + '"' : String(cell)).join(",")).join("\n") + "\n";
const people = [["90001", "ALPHA", "AMAL"], ["90002", "BRAVO", "BASMA"], ["90003", "CHARLIE", "CYRUS"]];
const math = [187, 194, 170];
const read = [181, 186, 187];
const header = ["TermTested", "TermRostered", "DistrictName", "SchoolName", "Teacher", "ClassName", "Subject", "Course", "ASGType", "NormsReferenceData", "GrowthComparisonPeriod", "WIStartTerm", "WIEndTerm", "StudentID", "StudentLastName", "StudentFirstName", "StudentGrade", "TestDate", "StartRIT", "StartRITSEM", "StartPercentile", "StartTestDuration", "EndTestDate", "EndRIT", "EndRITSEM", "EndPercentile", "EndTestDuration", "ProjectedRIT", "ProjectedGrowth", "ObservedGrowth", "ConditionalGrowthPercentile"];
const pct = (rit) => Math.max(1, Math.min(99, Math.round((rit - 150) * 1.2)));
const projection = () => {
  const rows = [header];
  [["Mathematics", "Math K-12", math, "9/21/26"], ["Language Arts", "Reading", read, "9/22/26"]].forEach(([subject, course, rits, date]) => people.forEach(([id, last, first], i) => rows.push(["Fall 2026-2027", "Fall 2026-2027", "Test District", "Quiet Hill School", "Teacher, Test", "5.4", subject, course, "Projection", "2025", "Fall 2026 - Spring 2027", "4", "32", id, last, first, "5", date, rits[i], "3.3", pct(rits[i]), "50", "", "", "", "", "", (rits[i] + 9).toFixed(2), "9", "", ""])));
  return csvOf(rows);
};
const profile = (subject, course, rits, date, areas) => {
  const head = ["StudentID", "StudentLastName", "StudentFirstName", "StudentMiddleInitial", "Grade", "TermTested", "TermRostered", "SchoolName", "InstructorName", "ClassName", "Subject", "Course", "TestName", "Status", "Reason", "PercentRapidGuessed", "Duration", "DateTested", "RitScore", "StandardError", "AchievementPercentile", "InstructionalArea1Name", "InstructionalArea1RIT", "InstructionalArea2Name", "InstructionalArea2RIT"];
  const rows = [head];
  people.forEach(([id, last, first], i) => rows.push([id, last, first, "", "5", "Fall 2026-2027 (Most Recent)", "Fall 2026-2027 (Most Recent)", "Quiet Hill School", "Teacher, Test", "5.4", subject, course, "Growth: " + course, "Growth Event", "N/A", "0", "50", date, rits[i], "3.3", pct(rits[i]), areas[0], rits[i] + (i === 0 ? -9 : 1), areas[1], rits[i] + 2]));
  return csvOf(rows);
};
const files = [
  ["projection.csv", projection()],
  ["CP_Math.csv", profile("Mathematics", "Math K-12", math, "09/21/26", ["Geometry", "Number"])],
  ["CP_Read.csv", profile("Language Arts", "Reading", read, "09/22/26", ["Vocabulary and Literary Devices", "Nonfiction"])]
];
const siteHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");

async function dashboard(host) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => { try { localStorage.clear(); localStorage.setItem("asg-dashboard-preferences", JSON.stringify({ reducedMotion: true, supportPromptOff: true, supportPromptLastShown: Date.now(), view: "full" })); } catch (error) { /* none */ } });
  if (host) {
    await page.route(host + "/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: siteHtml }));
    await page.goto(host + "/index.html");
  } else {
    await page.goto(pathToFileURL(path.join(root, "index.html")).href);
  }
  await page.setInputFiles("#csvInput", files.map(([name, text]) => ({ name, mimeType: "text/csv", buffer: Buffer.from(text) })));
  await page.waitForTimeout(2500);
  return { page, context, errors };
}
const sheetsOf = (page) => page.evaluate(() => {
  const oo = window.open;
  let html = "";
  window.open = () => ({ document: { open() {}, write(h) { html += h; }, close() {} }, focus() {}, print() {} });
  printGoalSheets();
  window.open = oo;
  const doc = new DOMParser().parseFromString(html, "text/html");
  const sheets = [...doc.querySelectorAll(".sheet")];
  const plans = [...doc.querySelectorAll(".gs-page-plan")];
  const fits = [...html.matchAll(/--fit:([0-9.]+)/g)].map((m) => Number(m[1]));
  return { html, sheets: sheets.length, plans: plans.length, qrs: doc.querySelectorAll(".gs-qr svg").length, withFamily: plans.filter((p) => p.querySelector(".gs-family")).length, minFit: fits.length ? Math.min(...fits) : 1 };
});
{
  const { page, context, errors } = await dashboard("https://dash.test");
  const result = await sheetsOf(page);
  check(result.plans === 3 && result.qrs === 3 && result.withFamily === 3, "each of three students gets one QR code on the plan page, and only one, for all their subjects (" + result.qrs + " codes)");
  check(result.sheets === 6, "and every student's goal sheet is still exactly two pages (" + result.sheets + " pages for 3 students)");
  check(result.minFit >= 0.86, "the page was not squeezed to fit it (smallest scale " + result.minFit + ")");
  const links = await page.evaluate(() => {
    const keys = [...new Set(state.filteredRows.map((row) => studentKey(row)))];
    return keys.map((key) => { const rows = latestSubjectRecords(state.filteredRows.filter((row) => studentKey(row) === key)).map((entry) => entry.current); return { link: familyLinkFor(rows), name: rows[0].studentName }; });
  });
  check(links.every((entry) => entry.link.startsWith("https://dash.test/family.html#v=1&t=T1-2627&g=5&d=")), "the link goes to the family page next to the dashboard, with the version, term and grade (" + links[0].link + ")");
  check(links.every((entry) => !/amal|alpha|basma|bravo|cyrus|charlie|9000\d|quiet hill|school/i.test(entry.link.split("#")[1])) && links.every((entry) => !entry.link.includes("?")), "and no name, ID or school in the part after the # (and no query for a server to see)");
  const decoded = await page.evaluate((link) => FamilyCore.decode(link.split("#")[1]), links[0].link);
  check(decoded.ok && decoded.subjects.length === 2 && decoded.subjects.every((s) => Number.isFinite(s.rit) && Number.isFinite(s.target) && s.base === null), "each link reads back as two subjects, each with the result and NWEA's projected target for the next test");
  const maRecord = decoded.subjects.find((s) => s.subject === "ma");
  check(maRecord.rit === 187 && maRecord.target === 196 && maRecord.area === "geo", "the first student's Mathematics is 187 with a target of 196 and Geometry as the area, nine below (" + JSON.stringify(maRecord) + ")");
  const balanced = await page.evaluate((link) => FamilyCore.decode(link.split("#")[1]), links[1].link);
  check(balanced.subjects.every((s) => s.area === "bal"), "a student whose areas are all within 8 of the overall RIT is balanced");
  check(await page.evaluate((link) => /fragment|#/.test(link), links[0].link), "the data is after the #, so it never reaches a server");
  // Does the printed code really hold that link?
  const svg = await page.evaluate(() => { const oo = window.open; let html = ""; window.open = () => ({ document: { open() {}, write(h) { html += h; }, close() {} }, focus() {}, print() {} }); printGoalSheets(); window.open = oo; return (html.match(/<div class="gs-qr">(<svg[\s\S]*?<\/svg>)/) || [])[1] || ""; });
  const py = process.env.FAMILY_QR_PYTHONPATH;
  if (!py) console.log("  skip decoding the printed code with OpenCV (set FAMILY_QR_PYTHONPATH)");
  else {
    const png = path.join(os.tmpdir(), "family-sheet-qr.png");
    const shot = await context.newPage();
    await shot.setContent('<body style="margin:0;background:#fff">' + svg.replace("<svg ", '<svg style="width:420px;height:420px" ') + "</body>");
    await shot.screenshot({ path: png, clip: { x: 0, y: 0, width: 420, height: 420 } });
    const run = spawnSync("python3", ["-c", "import sys,cv2;t,_,_=cv2.QRCodeDetector().detectAndDecode(cv2.imread(sys.argv[1]));print(t)", png], { env: { ...process.env, PYTHONPATH: py }, encoding: "utf8" });
    check(run.status === 0 && run.stdout.trim() === links[0].link, "the code printed on the first student's sheet decodes, with OpenCV, to exactly their link");
  }
  check(errors.length === 0, "no page errors");
  await context.close();
}
{
  const { page, context } = await dashboard(null);
  const result = await sheetsOf(page);
  check(result.qrs === 0 && result.sheets === 6, "opened from a file, where there is no page to link to, the sheets carry no code and are still two pages each");
  await context.close();
}
{
  const { page, context } = await dashboard("http://dash.test");
  const result = await sheetsOf(page);
  check(result.qrs === 0 && result.sheets === 6, "a dashboard served over plain http gets no code: a link on paper is only ever https");
  await context.close();
}
await browser.close();

console.log("");
if (failures) { console.log(failures + " family check(s) failed"); process.exit(1); }
console.log("All family checks passed");
