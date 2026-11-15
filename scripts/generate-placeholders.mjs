import sharp from "sharp";
import fs from "fs";
import path from "path";

const outDir = "public/images";
const srcDir = "src/assets/images";
fs.mkdirSync(outDir, { recursive: true });

async function writeAll(baseName, buffer) {
  await sharp(buffer).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(outDir, `${baseName}.jpg`));
  await sharp(buffer).webp({ quality: 80 }).toFile(path.join(outDir, `${baseName}.webp`));
  await sharp(buffer).avif({ quality: 55 }).toFile(path.join(outDir, `${baseName}.avif`));
  const meta = await sharp(buffer).metadata();
  console.log("wrote", baseName, `${meta.width}x${meta.height}`);
}

async function labeled(baseName, input, { width, height, position = "centre", label }) {
  const resized = await sharp(input)
    .resize(width, height, { fit: "cover", position })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();
  const meta = await sharp(resized).metadata();
  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${meta.width}" height="${meta.height}">
      <rect x="0" y="${meta.height - 72}" width="${meta.width}" height="72" fill="rgba(17,17,17,0.72)"/>
      <text x="28" y="${meta.height - 28}" font-family="Arial,sans-serif" font-size="28" fill="#FFD400" font-weight="700">${label}</text>
    </svg>`,
  );
  const final = await sharp(resized)
    .composite([{ input: svg, top: 0, left: 0 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await writeAll(baseName, final);
}

await labeled("hero-hebebuehne", path.join(srcDir, "hero-fassadenreinigung.jpg"), {
  width: 1920,
  height: 1280,
  label: "PLACEHOLDER: hero-hebebuehne",
});

await labeled("leistung-fenster", path.join(srcDir, "leistung-fensterreinigung.jpg"), {
  width: 1200,
  height: 900,
  label: "PLACEHOLDER: leistung-fenster",
});

await labeled("leistung-treppenhaus", path.join(srcDir, "leistung-treppenhausreinigung.jpg"), {
  width: 1200,
  height: 900,
  label: "PLACEHOLDER: leistung-treppenhaus",
});

await labeled("leistung-buero", path.join(srcDir, "leistung-bueroreinigung.jpg"), {
  width: 1200,
  height: 900,
  label: "PLACEHOLDER: leistung-buero",
});

await labeled("portrait-oliver-kienle", path.join(srcDir, "fensterreinigung-portrait.jpg"), {
  width: 1000,
  height: 1250,
  position: "top",
  label: "PLACEHOLDER: portrait-oliver-kienle",
});

const stairs = path.join(srcDir, "leistung-treppenhausreinigung.jpg");
const beforeBuf = await sharp(stairs)
  .resize(1400, 1000, { fit: "cover" })
  .modulate({ brightness: 0.72, saturation: 0.85 })
  .jpeg({ quality: 82 })
  .toBuffer();
await writeAll("vorher-treppenhaus", beforeBuf);

const afterBuf = await sharp(stairs)
  .resize(1400, 1000, { fit: "cover" })
  .modulate({ brightness: 1.12, saturation: 1.05 })
  .sharpen()
  .jpeg({ quality: 82 })
  .toBuffer();
await writeAll("nachher-treppenhaus", afterBuf);

console.log("done");
