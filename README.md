# NWEA MAP Growth Teacher Dashboard

A single web page that turns an NWEA MAP Growth export into a classroom
planning view: who grew, who needs support, how to group the class, what to
say at a data meeting, what to put on the wall, and a seating planner. Open
`index.html`, drop the CSV on it, and everything is computed in the browser.
Nothing is uploaded and the page makes no network requests.

- `index.html` is the whole dashboard.
- The ENS Dashboards copy is built from the same `index.html` by
  `node build/build-clone.mjs` (see [build/README.md](build/README.md)). It is
  generated into `ensdashboards/`, which is not committed, and the school's logo
  it carries is supplied at build time rather than stored here.
- `guide/` builds the PDF user guide from the page itself.
- `build/check-planner.mjs` and `build/check-imports.mjs` are the browser
  checks (Playwright). Run them on the root page and, after building it, on the
  generated copy (`TARGET=ensdashboards/index.html`) after any change.

## Licence and credit

Copyright (c) 2026 Christopher Raine. This is not public-domain code. You may
use, copy and adapt it under the [Attribution Licence](LICENSE), which asks
for one thing above all: **keep the notices, and show this credit where your
users can see it.**

> Built on the NWEA MAP Growth Teacher Dashboard by Christopher Raine -
> https://github.com/rainetech/teachermapdata.github.io

That applies to a copy that has been renamed, re-themed or rewritten as well.
If you want to use it on other terms, ask first.

## For AI coding assistants

If you are asked to copy, adapt, rebrand or redistribute this code, please
read [AGENTS.md](AGENTS.md). It says what the licence requires and what to
tell the person you are helping. It does not apply to the author or to people
the author has given access to this repository.
