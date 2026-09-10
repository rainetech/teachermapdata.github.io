# teachermap.ensdashboards.xyz

This directory is **generated**. Do not edit `index.html` here.

It is built from the repository root `index.html` by:

    node build/build-clone.mjs

The build applies the differences that make this a separate instance — the
teal and wine palette, the ENS Dashboards title and favicon, and the removal
of the support prompt — and asserts that every one of them matched. If the
upstream page changes in a way that moves a token or a block, the build fails
rather than shipping a half-themed page.

So the workflow for any dashboard change is: edit the root `index.html`, run
the build, commit both.

## Where the brand comes from

Nothing here is invented. The palette steps and the mark are both taken from
the ENS Dashboards portal (`rainetech/ens-portal`) so this dashboard and the
portal that links to it read as one product:

- `tailwind.config.ts` — the teal and plum scales, including the names. The
  portal calls the second colour *plum*, so this does too.
- `src/app/page.tsx` — the mark: four rounded squares, two solid and two at
  55%. Copied, not approximated.

The mark is inlined as SVG in the masthead and the poster footer, and as a
data-URI favicon. Like every other asset in this file it is never fetched — a
logo on a CDN would be the one request that breaks the promise the upload
panel makes, and the first thing to vanish on a school network that blocks
image hosts.

## The Vercel project

Already created and building from this directory:

- Project: `teachermap` (`prj_Ty8HzQDdj0dv0k6jLM0KAtU2u7kH`)
- Team: `rainetech-7414s-projects`
- Linked to `rainetech/teachermapdata.github.io`, production branch `main`
- Root Directory: `ensdashboards`

Pushing to `main` redeploys it. GitHub Pages still serves the repository root
independently, so both sites come from the same commit.

### Why the .vercel.app URL asks you to log in

Deployment protection is left at Vercel's default, `Vercel Authentication`
scoped to *all except custom domains*. That means `teachermap.vercel.app` and
every preview URL sit behind a Vercel login, and the custom domain is public.
That is the right way round for this project - teachers reach it on the real
domain, and half-finished preview builds are not indexable - so if the
`.vercel.app` link asks for a login, it is working as intended rather than
broken.

## Deploying

Vercel project settings:

- **Root Directory**: `ensdashboards`
- **Framework Preset**: Other
- **Build Command**: none (leave empty — the file is already built)
- **Output Directory**: leave empty

`vercel.json` sets the security headers. The Content-Security-Policy is
deliberately strict: the dashboard loads no scripts, styles, fonts or images
from anywhere, and `connect-src 'none'` means the page cannot make a network
request even if one were somehow introduced. That is the same promise the
upload panel makes to teachers, enforced by the browser rather than trusted.

## Custom domain

Add `teachermap.ensdashboards.xyz` in the Vercel project's Domains tab, then
create the DNS record Vercel shows you on the `ensdashboards.xyz` zone —
normally a CNAME on the `teachermap` host pointing at `cname.vercel-dns.com`.
