# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **single-file, client-side static web app**: everything lives in `index.html`
(HTML + CSS + vanilla JS + embedded sample CSV). It is the "NWEA MAP ASG Teacher Dashboard", which
parses NWEA MAP ASG CSV exports entirely in the browser (no backend, no data leaves the page).

### Services

- **Only one service**: the static site. There is no backend, database, or API.
- Serve it with any static file server, e.g.:
  ```bash
  python3 -m http.server 8000 --directory /workspace
  ```
  Then open `http://localhost:8000/index.html`.
- Opening `file:///workspace/index.html` directly also works, but serving over HTTP better matches
  the GitHub Pages deployment target.

### Dependencies / build

- **No package manager, no lockfile, no build step, no install step.** There is nothing to `npm install`.
- `Chart.js` is loaded at runtime from `cdn.jsdelivr.net` (see the `<script>` tag near the top of
  `index.html`). Charts require internet/CDN access; if the CDN is blocked, metrics and tables still
  render and charts show a "Charts require Chart.js from the CDN" fallback message instead of crashing.

### Lint / test / build

- There is **no lint, test, or build tooling** committed to this repo. Verification is manual:
  open the page, click **Load Sample** (loads built-in demo data), and confirm the metric cards,
  subject cards, and Chart.js charts populate. You can also upload a real NWEA ASG CSV.
