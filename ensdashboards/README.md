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
