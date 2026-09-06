# The user guide

`teacher-dashboard-guide.pdf` in the repository root is generated, not written
by hand. `build-guide.js` opens `index.html` in a headless browser, loads the
built-in sample data, reads the section titles and the section help text
(`SECTION_PLAN` and `SECTION_HELP` in `index.html`), photographs every section
in both a growth file and a fall single-window file, and prints the result to
PDF. Because the text and the pictures come from the page itself, the guide
cannot drift from the app.

Rebuild it whenever a section changes:

```sh
npm i -D playwright            # once; then: npx playwright install chromium
node guide/build-guide.js      # writes ../teacher-dashboard-guide.pdf
```

Set `PLAYWRIGHT_CHROMIUM=/path/to/chromium` to use a Chromium you already have.

The chapters that are not per-section (getting the file out of NWEA, reading
the numbers, printing and exporting, troubleshooting) live in `buildHTML()`
inside `build-guide.js`. The per-section text is edited in `SECTION_HELP` in
`index.html`, which also drives the `?` button in each section's corner.
