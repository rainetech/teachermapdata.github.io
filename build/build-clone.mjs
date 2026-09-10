#!/usr/bin/env node
// Builds the ENS Dashboards instance from the same index.html the GitHub Pages
// site serves.
//
// This is a build rather than a copy on purpose. A duplicated 18,000-line file
// diverges the first time either side is touched, and every fix after that has
// to be made twice and remembered twice. Here there is one source of truth and
// a list of differences, so a change to the dashboard reaches both sites by
// re-running this.
//
// Every substitution below asserts that it matched. If a token is renamed or a
// block is edited upstream, this fails loudly at build time instead of quietly
// shipping a half-themed page.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "index.html");
const OUT_DIR = path.join(root, "ensdashboards");
const OUT = path.join(OUT_DIR, "index.html");

let html = fs.readFileSync(SRC, "utf8");
const applied = [];

function swap(label, find, replace, expected = 1) {
  const count = html.split(find).length - 1;
  if (count !== expected) {
    throw new Error(`build-clone: "${label}" matched ${count} time(s), expected ${expected}.\n` +
      `The upstream markup or token has changed. Fix this rule rather than shipping a partial theme.\n` +
      `Looked for: ${find.slice(0, 120)}`);
  }
  html = html.split(find).join(replace);
  applied.push(`${label} (${count})`);
}

function cut(label, find, expected = 1) {
  swap(label, find, "", expected);
}

// ---------------------------------------------------------------------------
// 1. Palette
// ---------------------------------------------------------------------------
// The ENS brand teal #007272 and plum #8e2344. The intermediate steps are not
// invented here: they come from the ENS Dashboards portal's own Tailwind
// config (rainetech/ens-portal, tailwind.config.ts), so this dashboard and the
// portal that links to it read as one product rather than two things that
// happen to share two hex values. The portal calls the second colour plum, so
// so does this.
//
// Both were measured before use: on white they run 5.75:1 and 8.49:1, which
// matches the portal's own note, and both clear a CIE76 Delta E of 15 against
// all five NWEA achievement bands (closest are teal to the green band at 32.6
// and plum to the red band at 31.8).
//
// The five band colours are NOT touched. They are not decoration - NWEA names
// those bands Red, Orange, Yellow, Green and Blue, and a poster that prints a
// teal square under the word "Red" is wrong in a way no brand guideline
// outranks.
swap("light: page accent wash", "--bg-accent: rgba(36, 84, 166, 0.06);", "--bg-accent: rgba(0, 114, 114, 0.07);");
swap("light: accent rule", "--line-accent: #87a4dc;", "--line-accent: #0a8a8a;");
swap("light: brand", "--brand: #2454a6;", "--brand: #007272;");
swap("light: brand dark", "--brand-dark: #173d7d;", "--brand-dark: #005c5c;");
swap("light: brand soft", "--brand-soft: #e9f0ff;", "--brand-soft: #e6f2f2;");
swap("light: brand ink", "--brand-ink: #173d7d;", "--brand-ink: #005c5c;");

// Dark theme is declared twice: once for the explicit toggle, once for the
// system preference. Both carry the same values upstream, so both are swapped.
swap("dark: page accent wash", "--bg-accent: rgba(122, 162, 247, 0.09);", "--bg-accent: rgba(77, 190, 186, 0.10);", 2);
swap("dark: accent rule", "--line-accent: #4c6da8;", "--line-accent: #2f7f7d;", 2);
swap("dark: brand", "--brand: #6c9cf0;", "--brand: #4fbdb8;", 2);
swap("dark: brand dark", "--brand-dark: #8fb6f8;", "--brand-dark: #7fd6d1;", 2);
swap("dark: brand soft", "--brand-soft: rgba(108, 156, 240, 0.16);", "--brand-soft: rgba(79, 189, 184, 0.18);", 2);
swap("dark: brand ink", "--brand-ink: #b6d0ff;", "--brand-ink: #a5e6e2;", 2);

// The print stylesheet is its own world: a poster carries no CSS variables from
// the page, so it declares fixed values.
swap("poster: brand", "--brand: #1d4ed8;", "--brand: #007272;");
swap("poster: brand deep", "--brand-deep: #14307f;", "--brand-deep: #00393a;");
swap("poster: brand wash", "--brand-wash: #e3ecfd;", "--brand-wash: #e6f2f2;");

// The wine is the second voice: section rules, the poster's secondary mark and
// anywhere the page needs emphasis that is not the primary action. It is added
// rather than swapped, because upstream has no equivalent token.
swap("accent tokens (light)", "      --brand: #007272;", `      --brand: #007272;
      --accent: #8e2344;
      --accent-soft: #f9ebef;
      --accent-ink: #741c38;`);
swap("accent tokens (dark)", "      --brand: #4fbdb8;", `      --brand: #4fbdb8;
      --accent: #d4809a;
      --accent-soft: rgba(212, 128, 154, 0.18);
      --accent-ink: #f0d3dc;`, 2);

// ---------------------------------------------------------------------------
// 2. Identity
// ---------------------------------------------------------------------------
swap("title", "<title>NWEA MAP ASG Teacher Dashboard</title>",
  "<title>Teacher MAP Dashboard | ENS Dashboards</title>");
// The bar-chart tile is replaced outright: a tab belonging to this instance
// should be identifiably ENS at 16px, so it carries their mark. Single quotes
// are percent-encoded so the URI sits inside a JS string without escaping.
{
  const icon = html.match(/  <link rel="icon" href="[^"]*">/);
  if (!icon) throw new Error("build-clone: favicon link not found.");
  swap("favicon", icon[0], '  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2732%27 height=%2732%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%277%27 fill=%27%23007272%27/%3E%3Cg fill=%27%23ffffff%27%3E%3Crect x=%277%27 y=%277%27 width=%278.4%27 height=%278.4%27 rx=%272.2%27 opacity=%27.55%27/%3E%3Crect x=%2716.6%27 y=%277%27 width=%278.4%27 height=%278.4%27 rx=%272.2%27/%3E%3Crect x=%277%27 y=%2716.6%27 width=%278.4%27 height=%278.4%27 rx=%272.2%27/%3E%3Crect x=%2716.6%27 y=%2716.6%27 width=%278.4%27 height=%278.4%27 rx=%272.2%27 opacity=%27.55%27/%3E%3C/g%3E%3C/svg%3E">');
}
swap("theme colour (light)", '<meta name="theme-color" content="#f5f7fb" media="(prefers-color-scheme: light)">',
  '<meta name="theme-color" content="#e6f2f2" media="(prefers-color-scheme: light)">');

// ---------------------------------------------------------------------------
// The ENS mark
// ---------------------------------------------------------------------------
// Four rounded squares, two solid and two at 55%, exactly as the ENS
// Dashboards portal draws it (rainetech/ens-portal, src/app/page.tsx). Their
// mark, copied rather than approximated.
//
// Inlined everywhere it appears, like every other asset in this file. A logo
// fetched from a CDN would be the one request that breaks the promise the
// upload panel makes, and the first thing to vanish on a school network that
// blocks image hosts.
const ENS_MARK = (size) =>
  '<svg viewBox="0 0 24 24" fill="currentColor" width="' + size + '" height="' + size +
  '" aria-hidden="true" focusable="false">' +
  '<rect x="3" y="3" width="8" height="8" rx="2" opacity="0.55"></rect>' +
  '<rect x="13" y="3" width="8" height="8" rx="2"></rect>' +
  '<rect x="3" y="13" width="8" height="8" rx="2"></rect>' +
  '<rect x="13" y="13" width="8" height="8" rx="2" opacity="0.55"></rect></svg>';

swap("masthead mark",
  '      <section class="brand-panel">\n        <div>\n          <p class="eyebrow">NWEA MAP ASG</p>',
  '      <section class="brand-panel">\n        <div>\n          <span class="ens-mark">' + ENS_MARK(24) +
  '</span>\n          <p class="eyebrow">ENS Dashboards \u00b7 NWEA MAP ASG</p>');

// The poster carries it small, in the footer beside the class line, so a sheet
// on a wall is identifiably theirs without a logo competing with the data.
swap("poster mark",
  '\'<span class="poster-meta">\' + escapeHTML(posterContextLine(scope)) + "</span></footer>" +',
  '\'<span class="poster-meta">\' + escapeHTML(posterContextLine(scope)) + "</span>" +\n' +
  '        \'<span class="poster-mark">' + ENS_MARK(15) + '</span>\' + "</footer>" +');

// ---------------------------------------------------------------------------
// 3. No support asks on this instance
// ---------------------------------------------------------------------------
// Emptying the link is the switch the dashboard already has: hasSupportLink()
// gates the dock chip, and supportPromptDue() returns false, so nothing is
// scheduled and nothing can appear. The markup is then removed as well, so the
// words never ship even in hidden DOM.
swap("support links", `    const SUPPORT_LINKS = {
      coffee: "https://www.buymeacoffee.com/Rainetech",
      feedback: ""
    };`, `    // This instance carries no support asks. Both links are empty, which is
    // the dashboard's own off switch: hasSupportLink() hides the dock chip and
    // supportPromptDue() returns false, so no prompt is ever scheduled.
    const SUPPORT_LINKS = {
      coffee: "",
      feedback: ""
    };`);

const dockChip = html.match(/    <a class="support-chip coffee" id="supportDockCoffee"[\s\S]*?<\/a>\n/);
if (!dockChip) throw new Error("build-clone: support dock coffee chip not found.");
cut("support dock chip", dockChip[0]);

const prompt = html.match(/  <div class="support-backdrop" id="supportBackdrop" hidden>[\s\S]*?\n  <\/div>\n/);
if (!prompt) throw new Error("build-clone: support prompt dialog not found.");
cut("support prompt dialog", prompt[0]);

// The Buy Me a Coffee brand styling is dead once the button is gone, and it
// carries their colours and their name, neither of which belongs on a
// white-labelled instance.
const bmcCss = html.match(/    \/\* Buy Me a Coffee brand treatment[\s\S]*?\n    \.coffee-btn \{[\s\S]*?\n    \}\n/);
if (!bmcCss) throw new Error("build-clone: Buy Me a Coffee stylesheet block not found.");
cut("Buy Me a Coffee styling", bmcCss[0]);

if (/buy me a coffee|bmc-blue/i.test(html)) {
  throw new Error("build-clone: Buy Me a Coffee traces remain after stripping.");
}

// ---------------------------------------------------------------------------
// 4. Where the second colour actually does something
// ---------------------------------------------------------------------------
// Injected as one marked block rather than edited into rules all over the
// upstream stylesheet, so the difference between the two instances stays
// readable and this file stays the only place it is described.
//
// The wine is given jobs, not sprinkled. It marks the briefing - the section
// the page now opens on - it rules the poster masthead so a printed sheet
// carries both colours, and it carries the export actions, which are the
// moments the teacher is producing something rather than reading.
swap("instance stylesheet", "\n  </style>\n</head>\n<body>\n  <script>", `
    /* ---- ENS Dashboards instance ------------------------------------- */
    .ens-mark {
      display: inline-flex; align-items: center; justify-content: center;
      width: 42px; height: 42px;
      border-radius: 13px;
      background: var(--brand);
      color: #ffffff;
      margin-bottom: 10px;
    }

    #sec-briefing .section-header h2::before { background: var(--accent); }
    .briefing { border-color: var(--accent-soft); }
    .briefing.is-playing {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent) inset;
    }
    .briefing.is-playing .briefing-say span.is-speaking {
      box-shadow: inset 0 -0.55em 0 var(--accent-soft);
    }
    .briefing-progress i { background: linear-gradient(90deg, var(--brand), var(--accent)); }
    .briefing-step[aria-selected="true"] {
      border-color: var(--accent);
      color: var(--accent-ink);
      background: var(--accent-soft);
    }
    .briefing-step[aria-selected="true"] i { background: var(--accent); }
  </style>
</head>
<body>
  <script>`);

// The poster stylesheet is separate and printed, so it gets its own rule.
swap("poster footer mark styling", "  .poster-foot {", `  .poster-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(9 * var(--s));
    height: calc(9 * var(--s));
    border-radius: calc(2.6 * var(--s));
    background: #007272;
    color: #ffffff;
    flex: none;
    align-self: center;
  }
  .poster-foot {`);

// The footer was a two-column grid and the mark is a third child, which
// otherwise wraps to a new row and pushes the callouts off the sheet.
swap("poster footer columns",
  "  .poster-foot {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;",
  "  .poster-foot {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto auto;");

swap("poster accent rule", "  .poster-masthead {\n    background: var(--brand-deep);", `  .poster-masthead {
    border-bottom: calc(1.6 * var(--s)) solid #8e2344;
    background: var(--brand-deep);`);
swap("poster subject chip accent",
  "    background: rgba(255, 255, 255, 0.16);\n    color: #ffffff;",
  "    background: #8e2344;\n    color: #ffffff;");

// ---------------------------------------------------------------------------
// A substitution that lands inside a JS string literal can produce a file that
// looks right and does not parse, which takes the whole page down rather than
// one feature. Check before writing.
for (const block of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
  try {
    new Function(block[1]);
  } catch (error) {
    throw new Error("build-clone: the generated page has a script error and was not written.\n" + error.message);
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`built ${path.relative(root, OUT)}  (${kb} KB)`);
applied.forEach((line) => console.log("  - " + line));
