import sharp from "sharp";
import fs from "fs";
import path from "path";

const outDir = "public/images";
fs.mkdirSync(outDir, { recursive: true });

async function writeAll(baseName, buffer) {
  await sharp(buffer).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(outDir, `${baseName}.jpg`));
  await sharp(buffer).webp({ quality: 82 }).toFile(path.join(outDir, `${baseName}.webp`));
  await sharp(buffer).avif({ quality: 58 }).toFile(path.join(outDir, `${baseName}.avif`));
  const meta = await sharp(buffer).metadata();
  console.log("wrote", baseName, `${meta.width}x${meta.height}`);
}

function glassSvg({
  width,
  height,
  label,
  fog = 0,
  bright = 1,
  variant = "facade",
}) {
  const fogOpacity = Math.min(0.72, Math.max(0, fog));
  const skyTop = "#B9D9F2";
  const skyBot = "#EAF4FB";
  const glassA = `rgba(255,255,255,${0.18 * bright})`;
  const glassB = `rgba(180,210,235,${0.22 * bright})`;

  let structure = "";
  if (variant === "facade") {
    structure = `
      <g stroke="rgba(255,255,255,0.55)" stroke-width="2">
        ${Array.from({ length: 8 }, (_, i) => {
          const x = 80 + i * ((width - 160) / 7);
          return `<line x1="${x}" y1="60" x2="${x}" y2="${height - 80}"/>`;
        }).join("")}
        ${Array.from({ length: 5 }, (_, i) => {
          const y = 90 + i * ((height - 180) / 4);
          return `<line x1="70" y1="${y}" x2="${width - 70}" y2="${y}"/>`;
        }).join("")}
      </g>
      <rect x="70" y="60" width="${width - 140}" height="${height - 140}" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="3"/>
    `;
  } else if (variant === "stair") {
    structure = `
      <path d="M80 ${height - 70} H${width * 0.42} V${height * 0.55} H${width * 0.68} V${height * 0.32} H${width - 90}"
        fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="3"/>
      ${Array.from({ length: 6 }, (_, i) => {
        const y = height - 90 - i * 38;
        const w = 120 + i * 55;
        return `<rect x="90" y="${y}" width="${w}" height="28" fill="rgba(255,255,255,${0.12 + i * 0.03})" stroke="rgba(255,255,255,0.45)"/>`;
      }).join("")}
    `;
  } else if (variant === "office") {
    structure = `
      <rect x="90" y="100" width="${width - 180}" height="${height - 200}" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
      <line x1="${width / 2}" y1="100" x2="${width / 2}" y2="${height - 100}" stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
      <circle cx="${width * 0.28}" cy="${height * 0.42}" r="48" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)"/>
      <rect x="${width * 0.58}" y="${height * 0.38}" width="160" height="110" rx="6" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.4)"/>
    `;
  } else if (variant === "drops") {
    structure = `
      <rect x="60" y="50" width="${width - 120}" height="${height - 120}" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
      ${Array.from({ length: 28 }, (_, i) => {
        const x = 100 + ((i * 97) % (width - 200));
        const y = 90 + ((i * 131) % (height - 220));
        const r = 4 + (i % 5);
        return `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.35}" fill="rgba(255,255,255,0.55)" stroke="rgba(200,225,245,0.7)"/>`;
      }).join("")}
    `;
  } else if (variant === "squeegee") {
    structure = `
      <rect x="70" y="70" width="${width - 140}" height="${height - 160}" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
      <line x1="${width * 0.22}" y1="${height * 0.25}" x2="${width * 0.78}" y2="${height * 0.72}" stroke="rgba(255,255,255,0.85)" stroke-width="10" stroke-linecap="round"/>
      <rect x="${width * 0.74}" y="${height * 0.68}" width="54" height="14" rx="3" fill="#2F8FD8" transform="rotate(-28 ${width * 0.77} ${height * 0.72})"/>
    `;
  }

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0.35" y2="1">
        <stop offset="0%" stop-color="${skyTop}"/>
        <stop offset="55%" stop-color="${skyBot}"/>
        <stop offset="100%" stop-color="#FFFFFF"/>
      </linearGradient>
      <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${glassA}"/>
        <stop offset="45%" stop-color="rgba(255,255,255,0)"/>
        <stop offset="100%" stop-color="${glassB}"/>
      </linearGradient>
      <filter id="soft">
        <feGaussianBlur stdDeviation="${fog > 0.2 ? 2.2 : 0.6}"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#sky)"/>
    <g filter="${fog > 0.15 ? "url(#soft)" : "none"}" opacity="${0.85 * bright}">
      ${structure}
    </g>
    <rect width="100%" height="100%" fill="url(#sheen)"/>
    ${
      fogOpacity > 0
        ? `<rect width="100%" height="100%" fill="rgba(210,225,235,${fogOpacity})"/>
           <g opacity="${fogOpacity}">
             ${Array.from({ length: 18 }, (_, i) => {
               const x = (i * 137) % width;
               const y = (i * 89) % height;
               return `<circle cx="${x}" cy="${y}" r="${30 + (i % 7) * 8}" fill="rgba(255,255,255,0.18)"/>`;
             }).join("")}
           </g>`
        : ""
    }
    <rect x="0" y="${height - 56}" width="${width}" height="56" fill="rgba(20,32,43,0.28)"/>
    <text x="24" y="${height - 22}" font-family="ui-sans-serif,system-ui,sans-serif" font-size="20" fill="#FFFFFF">${label}</text>
  </svg>`);
}

async function make(baseName, opts) {
  const svg = glassSvg({ ...opts, label: `${baseName}.jpg` });
  const png = await sharp(svg).png().toBuffer();
  await writeAll(baseName, png);
}

await make("hero-glasfassade", { width: 1920, height: 1280, variant: "facade", bright: 1.05 });
await make("wipe-klar", { width: 1600, height: 1000, variant: "facade", bright: 1.08, fog: 0 });
await make("wipe-beschlagen", { width: 1600, height: 1000, variant: "facade", bright: 0.85, fog: 0.55 });
await make("vorher-glas", { width: 1400, height: 900, variant: "drops", bright: 0.78, fog: 0.42 });
await make("nachher-glas", { width: 1400, height: 900, variant: "facade", bright: 1.1, fog: 0 });
await make("service-fenster", { width: 1400, height: 1050, variant: "squeegee", bright: 1.05 });
await make("service-treppenhaus", { width: 1400, height: 1050, variant: "stair", bright: 1 });
await make("service-buero", { width: 1400, height: 1050, variant: "office", bright: 1.02 });
await make("ueber-uns-raum", { width: 1200, height: 1500, variant: "office", bright: 1.05 });
await make("strip-fassade", { width: 1600, height: 1100, variant: "facade", bright: 1.04 });
await make("strip-treppenhaus", { width: 1200, height: 1600, variant: "stair", bright: 1 });
await make("strip-buero", { width: 1600, height: 1000, variant: "office", bright: 1.02 });
await make("referenz-fenster", { width: 1600, height: 1100, variant: "drops", bright: 1.05, fog: 0.08 });
await make("referenz-treppenhaus", { width: 1200, height: 1500, variant: "stair", bright: 1.02 });
await make("referenz-buero", { width: 1600, height: 1000, variant: "office", bright: 1.04 });

const og = glassSvg({
  width: 1200,
  height: 630,
  label: "Gebäudereinigung Kienle",
  variant: "facade",
  bright: 1.08,
});
await sharp(og)
  .composite([
    {
      input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
        <rect x="56" y="170" width="520" height="220" rx="12" fill="rgba(255,255,255,0.62)" stroke="rgba(255,255,255,0.75)"/>
        <text x="88" y="250" font-family="ui-sans-serif,system-ui,sans-serif" font-size="42" font-weight="500" fill="#14202B">Gebäudereinigung Kienle</text>
        <text x="88" y="310" font-family="ui-sans-serif,system-ui,sans-serif" font-size="24" fill="#5B6B78">Klare Sicht. Saubere Räume.</text>
        <rect x="88" y="340" width="120" height="4" fill="#2F8FD8"/>
      </svg>`),
      top: 0,
      left: 0,
    },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile("public/og-image.jpg");
console.log("wrote og-image.jpg");

await sharp(
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="12" fill="#FFFFFF"/>
    <rect x="6" y="6" width="52" height="52" rx="10" fill="#F2F7FB" stroke="#2F8FD8" stroke-width="2"/>
    <text x="32" y="42" text-anchor="middle" font-family="ui-sans-serif,system-ui,sans-serif" font-size="28" font-weight="500" fill="#2F8FD8">K</text>
  </svg>`),
)
  .png()
  .toFile("src/app/apple-icon.png");

fs.writeFileSync(
  "src/app/icon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="12" fill="#FFFFFF"/>
  <rect x="6" y="6" width="52" height="52" rx="10" fill="#F2F7FB" stroke="#2F8FD8" stroke-width="2"/>
  <text x="32" y="42" text-anchor="middle" font-family="ui-sans-serif,system-ui,sans-serif" font-size="28" font-weight="500" fill="#2F8FD8">K</text>
</svg>
`,
);

console.log("done");
