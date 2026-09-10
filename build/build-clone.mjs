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
// Teal #007272 and wine #8e2344. Measured before use: on white they run
// 5.75:1 and 8.49:1, so both carry normal-size text, and both clear a CIE76
// Delta E of 15 against all five NWEA achievement bands (closest are teal to
// the green band at 32.6 and wine to the red band at 31.8).
//
// The five band colours are NOT touched. They are not decoration - NWEA names
// those bands Red, Orange, Yellow, Green and Blue, and a poster that prints a
// teal square under the word "Red" is wrong in a way no brand guideline
// outranks.
swap("light: page accent wash", "--bg-accent: rgba(36, 84, 166, 0.06);", "--bg-accent: rgba(0, 114, 114, 0.07);");
swap("light: accent rule", "--line-accent: #87a4dc;", "--line-accent: #5ea6a6;");
swap("light: brand", "--brand: #2454a6;", "--brand: #007272;");
swap("light: brand dark", "--brand-dark: #173d7d;", "--brand-dark: #00504f;");
swap("light: brand soft", "--brand-soft: #e9f0ff;", "--brand-soft: #e2f1f0;");
swap("light: brand ink", "--brand-ink: #173d7d;", "--brand-ink: #00504f;");

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
swap("poster: brand deep", "--brand-deep: #14307f;", "--brand-deep: #04403f;");
swap("poster: brand wash", "--brand-wash: #e3ecfd;", "--brand-wash: #e2f1f0;");

// The wine is the second voice: section rules, the poster's secondary mark and
// anywhere the page needs emphasis that is not the primary action. It is added
// rather than swapped, because upstream has no equivalent token.
swap("accent tokens (light)", "      --brand: #007272;", `      --brand: #007272;
      --accent: #8e2344;
      --accent-soft: #fbe7ec;
      --accent-ink: #74172f;`);
swap("accent tokens (dark)", "      --brand: #4fbdb8;", `      --brand: #4fbdb8;
      --accent: #e88ba1;
      --accent-soft: rgba(232, 139, 161, 0.18);
      --accent-ink: #f6c3ce;`, 2);

// ---------------------------------------------------------------------------
// 2. Identity
// ---------------------------------------------------------------------------
swap("title", "<title>NWEA MAP ASG Teacher Dashboard</title>",
  "<title>Teacher MAP Dashboard | ENS Dashboards</title>");
swap("favicon tile", "fill='%232454a6'", "fill='%23007272'");
swap("favicon accent bar", "fill='%235fd6a0'", "fill='%238e2344'");
swap("theme colour (light)", '<meta name="theme-color" content="#f5f7fb" media="(prefers-color-scheme: light)">',
  '<meta name="theme-color" content="#e2f1f0" media="(prefers-color-scheme: light)">');

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
swap("poster accent rule", "  .poster-masthead {\n    background: var(--brand-deep);", `  .poster-masthead {
    border-bottom: calc(1.6 * var(--s)) solid #8e2344;
    background: var(--brand-deep);`);
swap("poster subject chip accent",
  "    background: rgba(255, 255, 255, 0.16);\n    color: #ffffff;",
  "    background: #8e2344;\n    color: #ffffff;");

// ---------------------------------------------------------------------------
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`built ${path.relative(root, OUT)}  (${kb} KB)`);
applied.forEach((line) => console.log("  - " + line));
