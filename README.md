# SyfinorWebPage — syfinor.com

GitHub Pages serves this repo's **root** (branch `main`) at https://syfinor.com.

## Layout
| Path | What it is |
|---|---|
| `index.html`, `privacy/`, `terms/`, `assets/`, `oracle-logo.svg`, `CNAME`, `.nojekyll` | **Published site** — the built output of WebPageV2. Do not edit by hand. |
| `WebPageV2/` | Source of the current site (React + Vite + Tailwind). |
| `WebPageV1/` | Previous static site, kept for reference. |

## Updating the site
1. Edit the source in `WebPageV2/src/` (legal pages: `WebPageV2/src/legal/`).
2. From `WebPageV2`: `npm install` (first time only), then `npm run publish:site`.
   This builds the site, shrinks the images, and replaces the published files at the repo root (CNAME included).
3. Commit and push to `main`. GitHub Pages updates syfinor.com in a minute or two.

Preview locally with `npm run dev` (http://localhost:3000).
