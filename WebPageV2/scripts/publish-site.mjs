// Builds WebPageV2, shrinks images, and copies the result to the repo root
// so GitHub Pages (deploy from branch main, / root) serves it at syfinor.com.
// Usage (from WebPageV2):  npm run publish:site
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const here = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const v2 = path.resolve(here, '..');
const dist = path.join(v2, 'dist');
const root = path.resolve(v2, '..');

execSync('npx vite build', { cwd: v2, stdio: 'inherit' });

// Image optimisation: same file names and formats, smaller dimensions/quality.
const rules = [
  [/^fintech_/, { w: 1600, q: 72 }],
  [/^(banking|global|laptop|support)_/, { w: 800, q: 72 }],
  [/^MaheshVemani/, { w: 600, png: true }],
  [/^syfinor-logo/, { w: 600, png: true }],
  [/^telescope/, { w: 320, png: true }],
];
const assets = path.join(dist, 'assets');
for (const f of fs.readdirSync(assets)) {
  const r = rules.find(([re]) => re.test(f));
  if (!r) continue;
  const o = r[1];
  const file = path.join(assets, f);
  let p = sharp(file).resize({ width: o.w, withoutEnlargement: true });
  p = o.png ? p.png({ palette: true, quality: 85, compressionLevel: 9, effort: 10 }) : p.jpeg({ quality: o.q, mozjpeg: true });
  const buf = await p.toBuffer();
  fs.writeFileSync(file, buf);
  console.log('optimised', f, Math.round(buf.length / 1024) + 'KB');
}

// Public-folder copies that nothing references.
for (const f of ['MaheshVemani.png', 'VenkataAnjaniPhoto.jpg', 'syfinor-logo.png', 'syfinor-logo-white.png']) {
  fs.rmSync(path.join(dist, f), { force: true });
}
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

// Copy the new build to the repo root. Old files in root assets/ are deliberately KEPT:
// browsers and GitHub's CDN can cache index.html for ~10 minutes after a release, and a cached
// page still points at the previous build's file names. Deleting them caused a blank page for
// those visitors. Asset files are small, so leaving older ones in place is harmless.
for (const f of fs.readdirSync(dist)) {
  fs.cpSync(path.join(dist, f), path.join(root, f), { recursive: true });
}
console.log('Published to', root);
