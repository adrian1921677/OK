/**
 * Erzeugt benannte Architektur-Platzhalter (jpg + webp + avif)
 * und ein OG-/Favicon-Set im neuen Markenlook.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = path.resolve("public/images");
const PUBLIC = path.resolve("public");
const APP = path.resolve("src/app");

await mkdir(OUT, { recursive: true });

const palette = {
  paper: { r: 250, g: 250, b: 247 },
  ink: { r: 28, g: 28, b: 28 },
  muted: { r: 107, g: 107, b: 107 },
  line: { r: 229, g: 227, b: 222 },
  lake: { r: 63, g: 90, b: 84 },
  glass: { r: 180, g: 190, b: 188 },
  stone: { r: 150, g: 148, b: 140 },
  shadow: { r: 90, g: 95, b: 93 },
};

function svgFacade({ w, h, label, variant = 0 }) {
  const tones = [
    [palette.glass, palette.stone, palette.shadow],
    [palette.stone, palette.glass, palette.muted],
    [palette.shadow, palette.glass, palette.stone],
  ][variant % 3];
  const [a, b, c] = tones;
  const cols = 6;
  const rows = 8;
  const gap = Math.max(4, Math.round(w * 0.008));
  const pad = Math.round(w * 0.06);
  const cellW = (w - pad * 2 - gap * (cols - 1)) / cols;
  const cellH = (h - pad * 2 - gap * (rows - 1)) / rows;
  let cells = "";
  for (let r = 0; r < rows; r++) {
    for (let cIdx = 0; cIdx < cols; cIdx++) {
      const x = pad + cIdx * (cellW + gap);
      const y = pad + r * (cellH + gap);
      const tone = (r + cIdx + variant) % 3 === 0 ? a : (r + cIdx) % 2 === 0 ? b : c;
      const op = 0.35 + ((r * cols + cIdx + variant) % 5) * 0.08;
      cells += `<rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" fill="rgb(${tone.r},${tone.g},${tone.b})" opacity="${op}"/>`;
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="rgb(${palette.paper.r},${palette.paper.g},${palette.paper.b})"/>
  <rect x="0" y="0" width="${w}" height="${h}" fill="rgb(${c.r},${c.g},${c.b})" opacity="0.18"/>
  ${cells}
  <rect x="0" y="${h - 56}" width="${w}" height="56" fill="rgb(${palette.paper.r},${palette.paper.g},${palette.paper.b})" opacity="0.72"/>
  <text x="28" y="${h - 22}" font-family="Georgia, serif" font-size="18" fill="rgb(${palette.muted.r},${palette.muted.g},${palette.muted.b})">${label}</text>
</svg>`;
}

async function writeSet(baseName, svg, widths = [1600]) {
  const input = Buffer.from(svg);
  for (const width of widths) {
    const base = sharp(input).resize({ width, withoutEnlargement: true });
    const jpgName = widths.length === 1 ? `${baseName}.jpg` : `${baseName}-${width}.jpg`;
    const webpName = widths.length === 1 ? `${baseName}.webp` : `${baseName}-${width}.webp`;
    const avifName = widths.length === 1 ? `${baseName}.avif` : `${baseName}-${width}.avif`;
    await Promise.all([
      base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(OUT, jpgName)),
      base.clone().webp({ quality: 72 }).toFile(path.join(OUT, webpName)),
      base.clone().avif({ quality: 55 }).toFile(path.join(OUT, avifName)),
    ]);
  }
  console.log("images", baseName);
}

const images = [
  { name: "hero-glasfassade", label: "hero-glasfassade.jpg", w: 1800, h: 2200, variant: 0 },
  { name: "strip-buero", label: "strip-buero.jpg", w: 1600, h: 1200, variant: 1 },
  { name: "strip-treppenhaus", label: "strip-treppenhaus.jpg", w: 1200, h: 1600, variant: 2 },
  { name: "strip-fassade", label: "strip-fassade.jpg", w: 1600, h: 1100, variant: 0 },
  { name: "service-fenster", label: "service-fenster.jpg", w: 1400, h: 1000, variant: 1 },
  { name: "service-treppenhaus", label: "service-treppenhaus.jpg", w: 1400, h: 1000, variant: 2 },
  { name: "service-buero", label: "service-buero.jpg", w: 1400, h: 1000, variant: 0 },
  { name: "ueber-uns-raum", label: "ueber-uns-raum.jpg", w: 1400, h: 1600, variant: 1 },
];

for (const img of images) {
  await writeSet(img.name, svgFacade(img));
}

// OG image 1200x630 — wordmark style
const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="rgb(${palette.paper.r},${palette.paper.g},${palette.paper.b})"/>
  <line x1="72" y1="72" x2="1128" y2="72" stroke="rgb(${palette.line.r},${palette.line.g},${palette.line.b})" stroke-width="1"/>
  <text x="72" y="220" font-family="Georgia, 'Times New Roman', serif" font-size="96" font-weight="400" fill="rgb(${palette.ink.r},${palette.ink.g},${palette.ink.b})">Kienle</text>
  <text x="72" y="290" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="rgb(${palette.muted.r},${palette.muted.g},${palette.muted.b})">Gebäudereinigung · Großräschen</text>
  <text x="72" y="520" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="rgb(${palette.lake.r},${palette.lake.g},${palette.lake.b})">Lausitzer Seenland</text>
  <line x1="72" y1="558" x2="1128" y2="558" stroke="rgb(${palette.line.r},${palette.line.g},${palette.line.b})" stroke-width="1"/>
</svg>`;

await sharp(Buffer.from(ogSvg)).jpeg({ quality: 85, mozjpeg: true }).toFile(path.join(PUBLIC, "og-image.jpg"));
console.log("og-image.jpg");

// Favicon SVG + apple icon
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" fill="#FAFAF7"/>
  <text x="32" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="34" fill="#1C1C1C">K</text>
</svg>`;
await writeFile(path.join(APP, "icon.svg"), favicon);
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile(path.join(APP, "apple-icon.png"));
console.log("favicon");
