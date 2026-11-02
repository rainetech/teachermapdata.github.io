// The family page: reads the link's fragment, fills the sentences in, shows
// them in English or Arabic. Nothing is stored, sent or tracked; the numbers
// are only ever in this page's own memory. FAMILY_LATEST_TERM is filled in by
// build/build-family.mjs from family/config.json.
(function () {
  "use strict";
  const Core = FamilyCore;
  const Strings = FamilyStrings;
  const Activities = FamilyActivities;
  const LATEST_TERM = "@FAMILY_LATEST_TERM@";
  const NWEA_FAMILY_URL = "https://www.nwea.org/resource-center/topic/family-toolkit/";

  const decoded = Core.decode(window.location.hash);
  let lang = /^ar/i.test(navigator.language || "") ? "ar" : "en";

  const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const say = (key, params) => String(Strings[lang][key]).replace(/\{(\w+)\}/g, (all, name) => (params && params[name] !== undefined ? params[name] : all));
  const subjectName = (code) => Core.SUBJECTS[code][lang];

  function termLabel(code) {
    const match = /^T([123])-(\d{2})(\d{2})$/.exec(code || "");
    if (!match) return "";
    const year = 2000 + Number(match[2]) + (match[1] === "1" ? 0 : 1);
    return Strings[lang].seasons[Number(match[1])] + " " + year;
  }

  function gradeLabel() {
    if (decoded.grade === null) return "";
    return decoded.grade === 0 ? Strings[lang].kindergarten : say("grade", { g: decoded.grade });
  }

  function areaOf(subject, code) {
    return (Core.AREAS[subject] || []).find((area) => area.code === code) || null;
  }

  // What to show for one subject's activity: the set, and which heading and why.
  function slotFor(entry) {
    const band = decoded.band;
    let code = entry.area;
    if (!band) return { kind: "none", set: null };
    if (code && code !== "bal" && !Core.slotExists(entry.subject, band, code)) code = "";
    if (code && code !== "bal") {
      return { kind: "area", code, set: Activities[entry.subject + "." + band + "." + code] || null };
    }
    const balancedSet = Activities[entry.subject + "." + band + ".bal"] || null;
    return { kind: code === "bal" ? "balanced" : "general", code: "bal", set: balancedSet };
  }

  function pctBand(entry) {
    if (entry.ach === null) return say("pctMissing", { subject: subjectName(entry.subject) });
    const key = entry.ach < 41 ? "pctBandLow" : entry.ach < 61 ? "pctBandMid" : "pctBandHigh";
    return say(key, { subject: subjectName(entry.subject) });
  }

  function progressText(entry) {
    const subject = subjectName(entry.subject);
    const gap = Number.isFinite(entry.target) && Number.isFinite(entry.rit) ? Math.abs(entry.target - entry.rit) : 0;
    const params = { subject, r: entry.rit, t: entry.target, d: gap };
    if (entry.progress === "above") return say("progressAbove", params);
    if (entry.progress === "met") return say("progressMet", params);
    if (entry.progress === "close") return say("progressClose", params);
    if (entry.progress === "below") return say("progressBelow", params);
    if (entry.progress === "target") return say("progressTarget", Object.assign(params, { d: entry.target - entry.rit }));
    return say("progressNone", params);
  }

  function meter(entry) {
    if (!Number.isFinite(entry.base) || !Number.isFinite(entry.target)) return "";
    const values = [entry.base, entry.rit, entry.target];
    const low = Math.min(...values) - 3;
    const high = Math.max(...values) + 3;
    const at = (value) => Math.round(((value - low) / (high - low)) * 100);
    const mark = (cls, value, label) => '<span class="mk ' + cls + '" style="left:' + at(value) + '%"><b>' + esc(value) + "</b><i>" + esc(label) + "</i></span>";
    return '<div class="track" dir="ltr" aria-hidden="true"><span class="fill" style="left:' + at(entry.base) + "%;width:" + Math.max(0, at(entry.rit) - at(entry.base)) + '%"></span>' +
      mark("m-start", entry.base, Strings[lang].start) + mark("m-now", entry.rit, Strings[lang].now) + mark("m-target", entry.target, Strings[lang].target) + "</div>";
  }

  function pick(value) {
    return value && typeof value === "object" && (value[lang] !== undefined) ? value[lang] : value;
  }

  function activityBlock(entry, slot) {
    const name = subjectName(entry.subject);
    const set = slot.set;
    const area = slot.kind === "area" ? areaOf(entry.subject, slot.code) : null;
    let heading;
    let why;
    if (slot.kind === "area") { heading = say("focusHeading", { area: area ? area[lang] : "" }); why = say("focusWhy", { subject: name }); }
    else if (slot.kind === "balanced") { heading = say("balancedHeading"); why = say("balancedWhy", { subject: name }); }
    else { heading = say("noAreaHeading"); why = say("noAreaWhy", { subject: name }); }
    let html = '<div class="focus"><h4>' + esc(heading) + "</h4><p>" + esc(why) + "</p>";
    if (!set) return html + "<p>" + esc(say("fallbackActivity", { subject: name })) + "</p></div>";
    html += "<h5>" + esc(say("activitiesHeading")) + "</h5><ul>" + set.activities.map((item) => {
      const text = item[lang];
      return "<li><b>" + esc(text.title) + ".</b> " + esc(text.text) + "</li>";
    }).join("") + "</ul>";
    const example = set.example[lang];
    const exampleEnglish = set.sheet && set.sheet.englishOnly;
    html += '<div class="example"><h5>' + esc(say("exampleHeading")) + "</h5>" +
      '<p class="q"' + (exampleEnglish ? ' dir="ltr" lang="en"' : "") + ">" + esc(example.question) + "</p><ol>" +
      example.steps.map((step) => "<li>" + esc(step) + "</li>").join("") + "</ol><p><b>" + esc(example.answer) + "</b></p></div>";
    html += '<button type="button" class="btn" data-sheet="' + esc(entry.subject) + '">' + esc(say("sheetButton")) + "</button></div>";
    return html;
  }

  function sheetBlock(entry, slot) {
    const set = slot.set;
    if (!set || !set.sheet) return "";
    const sheet = set.sheet;
    const english = Boolean(sheet.englishOnly);
    const text = (value) => (english ? value.en : value[lang]);
    const wrap = english ? ' dir="ltr" lang="en"' : "";
    const items = sheet.items.map((item) => "<li" + wrap + ">" + esc(text(item.q)) + '<span class="line"></span></li>').join("");
    const answers = sheet.items.map((item) => "<li" + wrap + ">" + esc(text(item.a)) + "</li>").join("");
    return '<section class="sheet" id="sheet-' + esc(entry.subject) + '"><h2>' + esc(say("sheetTitle")) + ": " + esc(sheet.title[lang]) + "</h2><p>" + esc(say("sheetFor", { subject: subjectName(entry.subject) })) + " &middot; " +
      esc(say("sheetName")) + ': <span class="line wide"></span></p><p>' + esc(sheet.instructions[lang]) + "</p>" +
      (english && lang === "ar" ? "<p>" + esc(say("sheetEnglishNote")) + "</p>" : "") + "<ol>" + items + '</ol><div class="answers"><h3>' + esc(say("sheetAnswers")) + "</h3><ol>" + answers + "</ol></div></section>";
  }

  function subjectSection(entry) {
    const name = subjectName(entry.subject);
    const slot = slotFor(entry);
    let html = '<section class="card subject" id="subject-' + esc(entry.subject) + '"><h3>' + esc(name) + "</h3>";
    html += "<p>" + esc(pctBand(entry)) + "</p>";
    html += meter(entry) + "<p>" + esc(progressText(entry)) + "</p>";
    if (entry.growthPct !== null) html += "<p>" + esc(say("growthPct", { n: entry.growthPct })) + "</p>";
    html += activityBlock(entry, slot) + "</section>";
    return { html, sheet: sheetBlock(entry, slot) };
  }

  function glance(entry) {
    const parts = ['<div class="g-subject">' + esc(subjectName(entry.subject)) + "</div>", '<div class="g-num"><b>' + esc(entry.rit) + "</b><i>" + esc(say("rit")) + " " + esc(say("now")) + "</i></div>"];
    if (Number.isFinite(entry.target)) parts.push('<div class="g-num"><b>' + esc(entry.target) + "</b><i>" + esc(say("target")) + "</i></div>");
    if (entry.ach !== null) parts.push('<div class="g-num"><b>' + esc(entry.ach) + "</b><i>" + esc(say("percentile")) + "</i></div>");
    return '<button type="button" class="g-card" data-go="subject-' + esc(entry.subject) + '">' + parts.join("") + "</button>";
  }

  function render() {
    const root = document.getElementById("app");
    const text = Strings[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = text.dir;
    document.title = text.pageTitle;
    const toggle = '<button type="button" class="btn lang" id="langToggle">' + esc(text.switchTo) + "</button>";
    let html = '<header class="top"><h1>' + esc(text.heading) + "</h1>" + toggle + "</header>";

    if (!decoded.ok) {
      html += '<div class="note warn" role="alert">' + esc(decoded.reason === "version" ? text.unreadableVersion : text.unreadable) + "</div>";
      html += mapSection() + '<footer>' + esc(text.footer) + "</footer>";
      root.innerHTML = html;
      return;
    }

    const bits = [gradeLabel(), termLabel(decoded.term)].filter(Boolean);
    html += '<p class="meta">' + esc(bits.join(" · ")) + "</p>";
    const stale = decoded.termOrder !== null && Core.termOrder(LATEST_TERM) !== null && decoded.termOrder < Core.termOrder(LATEST_TERM);
    if (stale) html += '<div class="note" role="note">' + esc(text.stale) + "</div>";
    html += mapSection();

    html += '<section class="card"><h2>' + esc(text.glanceHeading) + '</h2><div class="glance">' + decoded.subjects.map(glance).join("") + "</div></section>";

    const first = decoded.subjects[0];
    const firstName = subjectName(first.subject);
    html += '<section class="card"><h2>' + esc(text.howHeading) + "</h2>" +
      "<h3>" + esc(text.ritHeading) + "</h3><p>" + esc(say("ritText", { subject: firstName, n: first.rit })) + "</p>" +
      "<h3>" + esc(text.pctHeading) + "</h3><p>" + esc(first.ach !== null ? say("pctText", { subject: firstName, n: first.ach }) : say("pctMissing", { subject: firstName })) + "</p>" +
      "<h3>" + esc(text.growthHeading) + "</h3><p>" + esc(text.growthText) + "</p></section>";

    const sheets = [];
    decoded.subjects.forEach((entry) => {
      const built = subjectSection(entry);
      html += built.html;
      if (built.sheet) sheets.push(built.sheet);
    });

    html += '<section class="card"><h2>' + esc(text.planHeading) + "</h2><ul>" + text.plan.map((line) => "<li>" + esc(line) + "</li>").join("") + "</ul></section>";
    html += '<section class="card"><h2>' + esc(text.askHeading) + "</h2><ul>" + text.ask.map((line) => "<li>" + esc(line) + "</li>").join("") + "</ul></section>";
    html += '<section class="card"><h2>' + esc(text.faqHeading) + "</h2>" + text.faq.map((pair) => "<details><summary>" + esc(pair[0]) + "</summary><p>" + esc(pair[1]) + "</p></details>").join("") + "</section>";
    html += "<footer>" + esc(text.footer) + "</footer>";
    html += '<div id="sheets">' + sheets.join("") + "</div>";
    root.innerHTML = html;
  }

  function mapSection() {
    const text = Strings[lang];
    return '<section class="card map"><h2>' + esc(text.mapHeading) + "</h2>" + text.map.map((line) => "<p>" + esc(line) + "</p>").join("") +
      '<p><a href="' + NWEA_FAMILY_URL + '" rel="noopener noreferrer">' + esc(text.readMore) + "</a></p></section>";
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest ? event.target.closest("button, a") : null;
    if (!target) return;
    if (target.id === "langToggle") { lang = lang === "en" ? "ar" : "en"; render(); return; }
    if (target.dataset && target.dataset.sheet) {
      const sheet = document.getElementById("sheet-" + target.dataset.sheet);
      if (!sheet) return;
      document.body.setAttribute("data-printing", target.dataset.sheet);
      sheet.classList.add("is-printing");
      window.print();
      sheet.classList.remove("is-printing");
      document.body.removeAttribute("data-printing");
      return;
    }
    if (target.dataset && target.dataset.go) {
      event.preventDefault();
      const node = document.getElementById(target.dataset.go);
      if (node) node.scrollIntoView();
    }
  });

  window.addEventListener("hashchange", () => window.location.reload());
  render();
})();
