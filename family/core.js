// The Family Plan's shared rules: what goes into a family link, how the page
// reads it back, which goal area a child is pointed to, and which areas and
// grade bands there are. No page, no storage, no network: build/check-family.mjs
// runs it in Node, and build/build-family.mjs copies it into the dashboard
// (where the link is made) and into the family page (where it is read).
//
// A link is  <page>#v=1&t=T1-2627&g=4&d=ma.205.62.55.198.213.num~rd.190.48...188.voc
//   v  format version        t  term: T1 fall, T2 winter, T3 spring, then the school year
//   g  grade, 0 for kindergarten
//   d  one record per subject, joined by ~, fields joined by . and left empty when
//      there is nothing to say:  subject . RIT . achievement percentile .
//      growth percentile . RIT at the start of the window . target RIT . goal area
// No name, no ID, no school: nothing that says who the child is.
const FamilyCore = (function () {
  const FORMAT_VERSION = 1;

  // How far below the overall RIT a goal area must sit before it is named. An
  // area RIT comes from far fewer questions than the overall score, so inside
  // this the profile is called balanced. 8 is the dashboard's own noise floor
  // for goal areas (AREA_MIN_FLOOR). One value, here.
  const AREA_GAP_RIT = 8;
  // Within this many RIT of the target, below it, is "close": a different day
  // could have gone either way. At or above it by this many is "above".
  const CLOSE_RIT = 3;
  const ABOVE_RIT = 3;

  const SUBJECTS = {
    ma: { en: "Mathematics", ar: "الرياضيات" },
    rd: { en: "Reading", ar: "القراءة" },
    lu: { en: "Language Usage", ar: "استخدام اللغة" },
    sc: { en: "Science", ar: "العلوم" }
  };

  // Grade bands, and the subjects each is offered in. Language Usage starts at
  // Grade 2 and Science at Grade 3 (NWEA's own tests start at Grade 2; a school's
  // data decides, and a record outside this still gets a page, just without
  // an activity set).
  const BAND_ORDER = ["k", "12", "35", "68", "911"];
  const BANDS = {
    k: { en: "KG2", ar: "رياض الأطفال", subjects: ["ma", "rd"] },
    "12": { en: "Grades 1 to 2", ar: "الصفان الأول والثاني", subjects: ["ma", "rd", "lu"] },
    "35": { en: "Grades 3 to 5", ar: "الصفوف من الثالث إلى الخامس", subjects: ["ma", "rd", "lu", "sc"] },
    "68": { en: "Grades 6 to 8", ar: "الصفوف من السادس إلى الثامن", subjects: ["ma", "rd", "lu", "sc"] },
    "911": { en: "Grades 9 to 11", ar: "الصفوف من التاسع إلى الحادي عشر", subjects: ["ma", "rd", "lu", "sc"] }
  };

  // The goal areas, grouped into the themes NWEA's own areas fall under across
  // its test versions (2015, 2017 and 2025 names all appear in exports). "match"
  // is tried in order against the name in the file. "bands" lists where an
  // activity set is wanted. "nwea" is NWEA's own 2025 wording, for the slot list.
  const AREAS = {
    ma: [
      { code: "alg", en: "Patterns, equations and algebra thinking", ar: "الأنماط والمعادلات والتفكير الجبري", match: /algebra|equations|functions|patterns/i, bands: ["k", "12", "35", "68", "911"], nwea: "Algebra" },
      { code: "geo", en: "Shapes, measuring and space", ar: "الأشكال والقياس والفراغ", match: /geometry|measurement/i, bands: ["k", "12", "35", "68", "911"], nwea: "Geometry; Measurement" },
      { code: "dat", en: "Data, graphs and chance", ar: "البيانات والرسوم البيانية والاحتمالات", match: /statistic|probability|data/i, bands: ["k", "12", "35", "68", "911"], nwea: "Probability & Statistics" },
      { code: "num", en: "Numbers and calculating", ar: "الأعداد والحساب", match: /number|computation|operations|numeric/i, bands: ["k", "12", "35", "68", "911"], nwea: "Number (Computation, Number Sense)" }
    ],
    rd: [
      { code: "fnd", en: "Sounds, letters and decoding", ar: "الأصوات والحروف وفك الرموز", match: /foundation|phonolog|phonic|concepts of print/i, bands: ["k", "12"], nwea: "Reading Foundations (K-2)" },
      { code: "cmp", en: "Understanding what you read", ar: "فهم المقروء", match: /comprehension/i, bands: ["k", "12"], nwea: "Reading Comprehension (K-2)" },
      { code: "voc", en: "Word meanings and how writers use words", ar: "معاني الكلمات وكيف يستخدمها الكتّاب", match: /vocab|word/i, bands: ["k", "12", "35", "68", "911"], nwea: "Vocabulary and Literary Devices" },
      { code: "inf", en: "Reading nonfiction", ar: "قراءة النصوص المعلوماتية", match: /nonfiction|non-fiction|informational/i, bands: ["35", "68", "911"], nwea: "Nonfiction" },
      { code: "lit", en: "Stories, poems and plays", ar: "القصص والقصائد والمسرحيات", match: /fiction|literar|poetry|literature/i, bands: ["35", "68", "911"], nwea: "Fiction, Poetry, and Drama" },
      { code: "wl", en: "Writing and language", ar: "الكتابة واللغة", match: /writing|language/i, bands: ["k", "12"], nwea: "Writing and Language (K-2)" }
    ],
    lu: [
      { code: "cps", en: "Capital letters, punctuation and spelling", ar: "الأحرف الكبيرة وعلامات الترقيم والهجاء", match: /capital|punctuation|spelling|mechanics/i, bands: ["12", "35", "68", "911"], nwea: "Capitalization, Punctuation, and Spelling" },
      { code: "gru", en: "Grammar and word usage", ar: "القواعد واستخدام الكلمات", match: /grammar|parts of speech|usage/i, bands: ["12", "35", "68", "911"], nwea: "Grammar and Usage" },
      { code: "wri", en: "Writing", ar: "الكتابة", match: /writing|composition|research|narrative|process/i, bands: ["12", "35", "68", "911"], nwea: "Narrative, Expository, and Argumentative Writing" }
    ],
    sc: [
      { code: "bio", en: "Living things", ar: "الكائنات الحية", match: /biolog|life|organism|ecosystem|heredity|inheritance/i, bands: ["35", "68", "911"], nwea: "Biology" },
      { code: "ear", en: "Earth and space", ar: "الأرض والفضاء", match: /earth|space/i, bands: ["35", "68", "911"], nwea: "Earth and Space Science" },
      { code: "phy", en: "Matter, forces and energy", ar: "المادة والقوى والطاقة", match: /physic|chemistry|matter|forces|energy/i, bands: ["35", "68", "911"], nwea: "Chemistry and Physics" }
    ]
  };

  function gradeBand(grade) {
    const text = String(grade === undefined || grade === null ? "" : grade).trim().toUpperCase();
    if (["K", "KG", "KG2", "KINDERGARTEN"].includes(text)) return "k";
    if (!/^\d{1,2}$/.test(text)) return null;
    const number = Number(text);
    if (number === 0) return "k";
    if (number <= 2) return "12";
    if (number <= 5) return "35";
    if (number <= 8) return "68";
    if (number <= 12) return "911";
    return null;
  }

  // The dashboard's subject names (Mathematics, Reading, Language, Science).
  function subjectCode(name) {
    const lower = String(name || "").toLowerCase();
    if (lower.includes("math")) return "ma";
    if (lower.includes("reading")) return "rd";
    if (lower.includes("language")) return "lu";
    if (lower.includes("science")) return "sc";
    return null;
  }

  // The theme a goal-area name from a file belongs to, or null.
  function areaCode(subject, name) {
    const list = AREAS[subject];
    const text = String(name || "").trim();
    if (!list || !text) return null;
    const found = list.find((area) => area.match.test(text));
    return found ? found.code : null;
  }

  function slotExists(subject, band, code) {
    if (code === "bal") return Boolean(BANDS[band] && BANDS[band].subjects.includes(subject));
    const found = (AREAS[subject] || []).find((area) => area.code === code);
    return Boolean(found && found.bands.includes(band));
  }

  // Which goal area to point to. areas: [{ name, rit }]. Returns
  //   null                        no area scores at all
  //   { balanced: true }          nothing sits more than gap below the overall RIT
  //   { balanced: false, code, name, delta }   the weakest; code is null when its
  //                               name is not one this knows
  function pickFocusArea(areas, overall, gap) {
    const limit = typeof gap === "number" ? gap : AREA_GAP_RIT;
    if (!Number.isFinite(overall)) return null;
    const scored = (areas || []).filter((area) => area && Number.isFinite(area.rit));
    if (!scored.length) return null;
    const weakest = scored.map((area) => ({ area, delta: area.rit - overall })).sort((a, b) => a.delta - b.delta)[0];
    if (!(weakest.delta < -limit)) return { balanced: true };
    return { balanced: false, name: weakest.area.name, delta: weakest.delta, code: weakest.area.code || null };
  }

  const SEASON_NUMBER = { fall: 1, winter: 2, spring: 3 };

  // "Fall" and the year the school year began (2026) -> "T1-2627".
  function termCode(season, startYear) {
    const number = SEASON_NUMBER[String(season || "").toLowerCase()];
    if (!number || !Number.isFinite(startYear)) return "";
    const first = String(Math.round(startYear) % 100).padStart(2, "0");
    const second = String((Math.round(startYear) + 1) % 100).padStart(2, "0");
    return "T" + number + "-" + first + second;
  }

  // A number that sorts terms in the order they happen, or null.
  function termOrder(code) {
    const match = /^T([123])-(\d{2})(\d{2})$/.exec(String(code || ""));
    if (!match) return null;
    if ((Number(match[2]) + 1) % 100 !== Number(match[3])) return null;
    return Number(match[2]) * 10 + Number(match[1]);
  }

  // How a result stands against its target.
  //   "above"   at or past the target by ABOVE_RIT or more
  //   "met"     at or past the target
  //   "close"   short of it by CLOSE_RIT or less
  //   "below"   short of it by more
  //   "target"  only a target for the next test exists (no result to judge yet)
  //   "none"    nothing to compare
  function progress(subject) {
    const rit = subject && subject.rit;
    const target = subject && subject.target;
    if (!Number.isFinite(target)) return "none";
    if (!Number.isFinite(subject.base) || !Number.isFinite(rit)) return "target";
    if (rit >= target + ABOVE_RIT) return "above";
    if (rit >= target) return "met";
    if (target - rit <= CLOSE_RIT) return "close";
    return "below";
  }

  const clean = (value) => (Number.isFinite(value) ? String(Math.round(value)) : "");

  // student: { term, grade, subjects: [{ subject, rit, ach, growthPct, base, target, area }] }
  function encode(student) {
    const records = (student.subjects || [])
      .filter((entry) => entry && SUBJECTS[entry.subject] && Number.isFinite(entry.rit))
      .map((entry) => {
        const fields = [entry.subject, clean(entry.rit), clean(entry.ach), clean(entry.growthPct), clean(entry.base), clean(entry.target), /^[a-z]{2,3}$/.test(entry.area || "") ? entry.area : ""];
        while (fields.length > 2 && fields[fields.length - 1] === "") fields.pop();
        return fields.join(".");
      });
    if (!records.length) return "";
    const grade = gradeBand(student.grade) === "k" ? "0" : String(student.grade).replace(/\D/g, "");
    return "v=" + FORMAT_VERSION + "&t=" + (student.term || "") + "&g=" + grade + "&d=" + records.join("~");
  }

  function whole(text, low, high) {
    if (text === "" || text === undefined) return null;
    if (!/^\d{1,3}$/.test(text)) return undefined;
    const value = Number(text);
    return value >= low && value <= high ? value : undefined;
  }

  // The fragment (with or without the #) -> what the page shows. Never throws.
  // { ok, reason, term, termOrder, grade, band, subjects: [...], warnings: [...] }
  function decode(fragment) {
    const result = { ok: false, reason: "", term: "", termOrder: null, grade: null, band: null, subjects: [], warnings: [] };
    const text = String(fragment || "").replace(/^#/, "");
    if (!text) { result.reason = "empty"; return result; }
    const pairs = {};
    text.split("&").forEach((part) => {
      const at = part.indexOf("=");
      if (at > 0) pairs[part.slice(0, at)] = part.slice(at + 1);
    });
    if (pairs.v !== String(FORMAT_VERSION)) { result.reason = "version"; return result; }
    result.term = /^T[123]-\d{4}$/.test(pairs.t || "") && termOrder(pairs.t) !== null ? pairs.t : "";
    result.termOrder = termOrder(result.term);
    if (!result.term) result.warnings.push("term");
    const grade = /^\d{1,2}$/.test(pairs.g || "") ? Number(pairs.g) : null;
    result.grade = grade;
    result.band = grade === null ? null : gradeBand(grade);
    if (result.band === null) result.warnings.push("grade");
    String(pairs.d || "").split("~").forEach((record) => {
      if (!record) return;
      const f = record.split(".");
      const subject = f[0];
      if (!SUBJECTS[subject]) { result.warnings.push("subject"); return; }
      const rit = whole(f[1], 100, 350);
      if (rit === null || rit === undefined) { result.warnings.push("rit:" + subject); return; }
      const read = (index, low, high) => { const value = whole(f[index], low, high); return value === undefined ? null : value; };
      let area = f[6] || "";
      if (area && area !== "bal" && !(AREAS[subject] || []).some((entry) => entry.code === area)) area = "";
      const entry = { subject, rit, ach: read(2, 1, 99), growthPct: read(3, 1, 99), base: read(4, 100, 350), target: read(5, 100, 350), area };
      entry.progress = progress(entry);
      result.subjects.push(entry);
    });
    result.ok = result.subjects.length > 0;
    if (!result.ok) result.reason = "nodata";
    return result;
  }

  // The slots an activity set is wanted for: every area in every band it is
  // offered in, and one balanced set for each subject in each band.
  function allSlots() {
    const slots = [];
    BAND_ORDER.forEach((band) => {
      BANDS[band].subjects.forEach((subject) => {
        (AREAS[subject] || []).filter((area) => area.bands.includes(band)).forEach((area) => {
          slots.push({ key: subject + "." + band + "." + area.code, subject, band, code: area.code, kind: "area" });
        });
        slots.push({ key: subject + "." + band + ".bal", subject, band, code: "bal", kind: "balanced" });
      });
    });
    return slots;
  }

  return { FORMAT_VERSION, AREA_GAP_RIT, CLOSE_RIT, ABOVE_RIT, SUBJECTS, BAND_ORDER, BANDS, AREAS, gradeBand, subjectCode, areaCode, slotExists, pickFocusArea, termCode, termOrder, progress, encode, decode, allSlots };
})();

if (typeof module !== "undefined" && module.exports) module.exports = FamilyCore;
