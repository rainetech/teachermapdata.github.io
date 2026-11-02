# The Family Plan

Each student's goal sheet can carry one QR code. A parent who scans it sees their
child's MAP results explained in plain English or Arabic, set against NWEA's
projected target, with one practical thing to try at home.

## How it works

- The dashboard (`index.html`) makes the link when it prints the goal sheets. It
  needs to be opened from a web address, not a file, because the link points to
  the family page next to it (`family.html`, path set in `config.json`).
- Everything the page shows is in the link's **fragment** (after the `#`), so it
  is never sent to a server or written to a log. The page is static: no
  database, login, analytics or third-party script, and it makes no request.
- A link carries: format version, term, grade, and for each subject the RIT,
  achievement percentile, growth percentile, RIT at the start of the window, the
  target RIT (NWEA's projection) and a goal-area code. **No name, no ID, no
  school.** Blank means not available, never zero. The format is described at the
  top of `core.js`.
- The weakest goal area is the one furthest below the overall RIT, named only
  if it is more than `AREA_GAP_RIT` (3) below; otherwise the profile is
  balanced. The result is read against the target: above, met, close (within
  3 RIT), or below; a fall result shows its target for the next test.

## The files

| File | What it is |
| --- | --- |
| `core.js` | The rules: link format, parsing, areas, grade bands, term, progress. |
| `qr.js` | A small QR encoder (no library, no request). |
| `strings.js` | Every sentence, English and Arabic. |
| `activities.js` | The home activities, one set per band, subject and goal area. |
| `render.js`, `page.html` | The page. |
| `config.json` | `latestTerm` (older links get a gentle note) and `pagePath`. |
| `SLOTS.md` | Generated: every slot and whether it has content. |

`node build/build-family.mjs` writes `family.html`, refreshes the copy of the
rules and the QR encoder inside `index.html`, and rewrites `SLOTS.md`.
`node build/check-family.mjs` runs the tests.

## Each term

Set `latestTerm` in `config.json` (T1 fall, T2 winter, T3 spring, then the school
year: `T1-2627`) and rebuild. Links made for an earlier term then show "These are
earlier results. Ask the teacher for the latest goal sheet."

## Filling a slot

Open `SLOTS.md`, pick a slot marked "needs content", and add an entry with that
key to `activities.js` (the file explains the shape). Original wording only,
nothing from NWEA's Learning Continuum or test items, nothing a family in the UAE
should not meet, no em dashes. Set `reviewed.ar` to true only after a native
reader has checked the Arabic. The tests check the rest.

## Hosting

Publish `family.html` beside `index.html`. If the page is served at a different
path, change `pagePath` in `config.json`. Send no referrer and allow no network
(the page's own policy already says so).
