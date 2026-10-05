# The ENS Dashboards build (teachermap.ensdashboards.xyz)

`ensdashboards/` is **generated and not committed**. It is built from the
repository root `index.html` by:

    node build/build-clone.mjs

The build applies the differences that make this a separate instance - the
teal and wine palette, the ENS Dashboards title, favicon and logo, and the
removal of the support prompt and of the credit footer the open site shows (the
copyright and licence notices in the page source stay) - and asserts that every
one of them matched. If the upstream page changes in a way that moves a token
or a block, the build fails rather than shipping a half-themed page.

So the workflow for any dashboard change is: edit the root `index.html`, run
the checks, commit. Vercel runs the build on every push, so the ENS site follows
without a second commit. To run the checks against the ENS page locally, build
it first:

    node build/build-clone.mjs
    TARGET=ensdashboards/index.html node build/check-imports.mjs
    TARGET=ensdashboards/index.html node build/check-planner.mjs

## The logo is not in this repository

This repository is public and the Emirates National Schools mark belongs to
the school, so neither the logo files nor a page that embeds them are
committed. The build takes the two PNGs - `ens-logo.png`, the full lockup, and
`ens-symbol.png`, the symbol alone for the favicon (709x130 of Arabic and
English is a smear at 16px) - from, in this order:

1. **Environment variables**: `ENS_LOGO_PNG_B64` and `ENS_SYMBOL_PNG_B64`, the
   base64 of each PNG. A long value can be split as `ENS_LOGO_PNG_B64_1`,
   `_2`, ... which are joined in order. This is how Vercel builds the site.
2. **A folder**: the one named by `ENS_BRAND_DIR`, or `build/assets/` (ignored
   by git). Keep your copies there, or anywhere private.
3. **Neither**: a plain text wordmark stands in, so the build still runs on a
   machine without the files. On Vercel this is an error instead, and so is a
   value that is not a whole PNG (every chunk's checksum is verified): a deploy
   must not quietly publish the site without its logo, or with a broken one.

`ENS_BRAND=plain` forces the stand-in even when the files are there.

Both are inlined as data URIs. A logo on a CDN would be the one request that
breaks the promise the upload panel makes, and the first thing to vanish on a
school network that blocks image hosts.

### The logo and the brand colours do not match

Worth knowing before anyone tries to "fix" it. The logo file is plain sRGB and
contains **teal #007c85 and plum #a30046**. The brand colours specified for
this instance - and the ones the ENS Dashboards portal's config uses - are
**#007272 and #8e2344**. That is a CIE76 Delta E of 6.8 and 13.4: not a
colour-management artefact, and far enough apart to look like a printing error
if the two teals ever share an edge.

The interface therefore uses the specified colours, and the logo is always
placed on white, where its own teal never abuts the interface's. If the logo
file is the canonical brand rather than the hex values, the fix is to change
the palette in `build/build-clone.mjs` - not to recolour the logo.

The palette steps come from the ENS Dashboards portal (`rainetech/ens-portal`,
`tailwind.config.ts`), so this dashboard and the portal that links to it read
as one product. The portal calls the second colour *plum*, so this does too.

## The user guide

The page links to `teacher-dashboard-guide.pdf` relatively, so the guide has to
be in the deployed site or the link is dead. It is the instance's own copy,
photographed from this instance's page so the pictures carry its colours and
its name. Photographing needs a browser, which Vercel's build does not have, so
it is built ahead of time and **committed** at
`build/ens-guide/teacher-dashboard-guide.pdf`; the build copies it into
`ensdashboards/`. It is built from the plain wordmark build, so that it carries
no logo. Rebuild it whenever a section changes:

    ENS_BRAND=plain node build/build-clone.mjs
    GUIDE_INDEX=ensdashboards/index.html \
    GUIDE_OUTPUT=build/ens-guide/teacher-dashboard-guide.pdf \
    GUIDE_TITLE="Teacher MAP Dashboard | ENS Dashboards" \
    node guide/build-guide.js

`vercel.json` exempts the PDF from the frame-denying headers the page itself
carries, because a browser's PDF viewer loads the document inside a frame.

## The Vercel project

- Project: `teachermap` (`prj_Ty8HzQDdj0dv0k6jLM0KAtU2u7kH`)
- Team: `ENS_Platforms` (slug `ensplatforms`, `team_Iwl363H4TKfoqdwtWfICSO0V`)
- Linked to `rainetech/teachermapdata.github.io`, production branch `main`
- **Root Directory**: the repository root (empty). The build reads the root
  `index.html`, so it cannot be a subdirectory.
- **Build Command** and **Output Directory** come from the root `vercel.json`:
  `node build/build-clone.mjs` and `ensdashboards`.
- **Environment variables** (Production and Preview): `ENS_LOGO_PNG_B64_1` to
  `_13` and `ENS_SYMBOL_PNG_B64_1` to `_8`, the base64 of the two logo files cut
  into 2000-character pieces (a value typed or pasted in one piece works just as
  well: `ENS_LOGO_PNG_B64` and `ENS_SYMBOL_PNG_B64`). The build log prints a short
  fingerprint of each piece, so a piece that was mangled on its way in can be
  found by comparing it with the file it came from.

Pushing to `main` redeploys it. GitHub Pages still serves the repository root
independently, so both sites come from the same commit.

`vercel.json` also sets the security headers. The Content-Security-Policy is
deliberately strict: the dashboard loads no scripts, styles, fonts or images
from anywhere, and `connect-src 'none'` means the page cannot make a network
request even if one were somehow introduced. That is the same promise the
upload panel makes to teachers, enforced by the browser rather than trusted.

### Why the .vercel.app URL asks you to log in

Deployment protection is left at Vercel's default, `Vercel Authentication`
scoped to *all except custom domains*. That means `teachermap.vercel.app` and
every preview URL sit behind a Vercel login, and the custom domain is public.
That is the right way round for this project - teachers reach it on the real
domain, and half-finished preview builds are not indexable - so if the
`.vercel.app` link asks for a login, it is working as intended rather than
broken.

## Custom domain

Add `teachermap.ensdashboards.xyz` in the Vercel project's Domains tab, then
create the DNS record Vercel shows you on the `ensdashboards.xyz` zone -
normally a CNAME on the `teachermap` host pointing at `cname.vercel-dns.com`.
