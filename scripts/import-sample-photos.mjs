/**
 * Lädt freie Stock-Fotos (Unsplash / Pexels) und schreibt die benannten
 * Bild-Slots als JPG + WebP + AVIF (plus OG). Siehe public/images/ATTRIBUTION.md
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(".");
const OUT = path.join(ROOT, "public", "images");
const TMP = path.join(ROOT, ".tmp-stock", "hires");
const PUBLIC = path.join(ROOT, "public");

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const UA = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
};

/** Quellen mit Lizenz & Credit (kommerziell nutzbar). */
const SOURCES = {
  facadeJoel: {
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=85",
    credit: "Joel Filipe",
    page: "https://unsplash.com/photos/1487958449943-2429e8be8625",
    license: "Unsplash License",
    note: "Helle Glas-/Betonfassade mit Himmel",
  },
  facadeCorner: {
    url: "https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=2400&q=85",
    credit: "Unsplash contributor",
    page: "https://images.unsplash.com/photo-1481026469463-66327c86e544",
    license: "Unsplash License",
    note: "Helle Glasfassaden-Ecke, kühle Töne",
  },
  skylineCool: {
    url: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=2400",
    credit: "Aleksandar Pasaric",
    page: "https://www.pexels.com/photo/view-of-cityscape-325185/",
    license: "Pexels License",
    note: "Helle Skyline / Glasfassaden über Wolken",
  },
  glassLowAngle: {
    url: "https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=2400",
    credit: "Pixabay / Pexels",
    page: "https://www.pexels.com/photo/273209/",
    license: "Pexels License",
    note: "Low-Angle Glasfassade",
  },
  drops: {
    url: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=2000&q=85",
    credit: "Max Bender",
    page: "https://unsplash.com/photos/1515694346937-94d85e41e6f0",
    license: "Unsplash License",
    note: "Wassertropfen auf Glas",
  },
  squeegee: {
    url: "https://images.pexels.com/photos/37440103/pexels-photo-37440103.jpeg?auto=compress&cs=tinysrgb&w=2000",
    credit: "Cihat Dede",
    page: "https://www.pexels.com/photo/professional-window-cleaner-at-work-outdoors-37440103/",
    license: "Pexels License",
    note: "Fensterreinigung mit Abzieher",
  },
  stairsGlass: {
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=2400",
    credit: "Vecislavas Popa",
    page: "https://www.pexels.com/photo/1571460/",
    license: "Pexels License",
    note: "Helles Interieur mit Glastreppe",
  },
  atrium: {
    url: "https://images.pexels.com/photos/28532416/pexels-photo-28532416.jpeg?auto=compress&cs=tinysrgb&w=2400",
    credit: "mingche lee",
    page: "https://www.pexels.com/photo/modern-interior-of-a-multi-story-glass-building-28532416/",
    license: "Pexels License",
    note: "Helles Glas-Atrium",
  },
  officeBright: {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85",
    credit: "Nastuh Abootalebi",
    page: "https://unsplash.com/photos/1497366216548-37526070297c",
    license: "Unsplash License",
    note: "Heller Büroraum mit Glaswänden",
  },
  officeLounge: {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=85",
    credit: "Nastuh Abootalebi",
    page: "https://unsplash.com/photos/1497366754035-f200968a6e72",
    license: "Unsplash License",
    note: "Heller Büroflur mit Glas",
  },
  meetingGlass: {
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85",
    credit: "Nastuh Abootalebi",
    page: "https://unsplash.com/photos/1497366811353-6870744d04b2",
    license: "Unsplash License",
    note: "Besprechungsraum mit Glasfront",
  },
  deskWindow: {
    url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=2000&q=85",
    credit: "Unsplash contributor",
    page: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    license: "Unsplash License",
    note: "Arbeitsplatz vor großer Glasscheibe",
  },
};

async function download(key) {
  const src = SOURCES[key];
  const dest = path.join(TMP, `${key}.jpg`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 40_000) {
    console.log("cached", key);
    return dest;
  }
  const res = await fetch(src.url, { headers: UA });
  if (!res.ok) throw new Error(`Download failed ${key}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 10_000) throw new Error(`Too small ${key}: ${buf.length}`);
  fs.writeFileSync(dest, buf);
  console.log("downloaded", key, buf.length);
  return dest;
}

async function writeAll(baseName, buffer) {
  const meta = await sharp(buffer).metadata();
  await Promise.all([
    sharp(buffer).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(OUT, `${baseName}.jpg`)),
    sharp(buffer).webp({ quality: 82 }).toFile(path.join(OUT, `${baseName}.webp`)),
    sharp(buffer).avif({ quality: 55 }).toFile(path.join(OUT, `${baseName}.avif`)),
  ]);
  console.log("wrote", baseName, `${meta.width}x${meta.height}`);
}

async function fit(file, width, height, { brighten = 1, saturate = 1.05 } = {}) {
  let pipeline = sharp(file).rotate().resize({
    width,
    height,
    fit: "cover",
    position: "centre",
    withoutEnlargement: false,
  });
  if (brighten !== 1 || saturate !== 1) {
    pipeline = pipeline.modulate({
      brightness: brighten,
      saturation: saturate,
    });
  }
  // leichte kühle Anhebung
  pipeline = pipeline.linear(1.02, 4);
  return pipeline.toBuffer();
}

async function fogBuffer(clearBuf, amount = 0.48) {
  const meta = await sharp(clearBuf).metadata();
  const w = meta.width;
  const h = meta.height;
  const overlay = await sharp({
    create: {
      width: w,
      height: h,
      channels: 4,
      background: { r: 210, g: 225, b: 235, alpha: amount },
    },
  })
    .png()
    .toBuffer();

  return sharp(clearBuf)
    .modulate({ brightness: 0.92, saturation: 0.78 })
    .blur(1.2)
    .composite([{ input: overlay, blend: "over" }])
    .jpeg({ quality: 88 })
    .toBuffer();
}

const usedCredits = [];

function use(key, slots) {
  usedCredits.push({ key, slots, ...SOURCES[key] });
}

async function main() {
  for (const key of Object.keys(SOURCES)) {
    await download(key);
  }

  const files = Object.fromEntries(
    Object.keys(SOURCES).map((k) => [k, path.join(TMP, `${k}.jpg`)]),
  );

  // Hero
  use("facadeCorner", ["hero-glasfassade", "og-image"]);
  await writeAll("hero-glasfassade", await fit(files.facadeCorner, 1920, 1280, { brighten: 1.06 }));

  // Wipe: gleiches Motiv klar vs. beschlagen (Clip-Path)
  use("facadeJoel", ["wipe-klar", "wipe-beschlagen", "nachher-glas", "strip-fassade"]);
  const wipeKlar = await fit(files.facadeJoel, 1600, 1000, { brighten: 1.08 });
  await writeAll("wipe-klar", wipeKlar);
  await writeAll("wipe-beschlagen", await fogBuffer(wipeKlar, 0.52));

  // Vorher / Nachher
  use("drops", ["vorher-glas"]);
  await writeAll("vorher-glas", await fit(files.drops, 1400, 900, { brighten: 1.04, saturate: 0.95 }));
  const nachher = await fit(files.facadeJoel, 1400, 900, { brighten: 1.1 });
  await writeAll("nachher-glas", nachher);

  // Services
  use("squeegee", ["service-fenster", "referenz-fenster"]);
  await writeAll(
    "service-fenster",
    await fit(files.squeegee, 1400, 1050, { brighten: 1.12, saturate: 1.02 }),
  );

  use("stairsGlass", ["service-treppenhaus", "referenz-treppenhaus"]);
  await writeAll(
    "service-treppenhaus",
    await fit(files.stairsGlass, 1400, 1050, { brighten: 1.05 }),
  );

  use("officeBright", ["service-buero"]);
  await writeAll(
    "service-buero",
    await fit(files.officeBright, 1400, 1050, { brighten: 1.06 }),
  );

  // Über uns
  use("meetingGlass", ["ueber-uns-raum"]);
  await writeAll(
    "ueber-uns-raum",
    await fit(files.meetingGlass, 1200, 1500, { brighten: 1.05 }),
  );

  // Strips (nicht mehr im UI, aber Dateinamen behalten)
  await writeAll("strip-fassade", await fit(files.facadeJoel, 1600, 1100, { brighten: 1.06 }));
  use("atrium", ["strip-treppenhaus"]);
  await writeAll("strip-treppenhaus", await fit(files.atrium, 1200, 1600, { brighten: 1.08 }));
  use("officeLounge", ["strip-buero", "referenz-buero"]);
  await writeAll("strip-buero", await fit(files.officeLounge, 1600, 1000, { brighten: 1.05 }));

  // Referenzen
  await writeAll(
    "referenz-fenster",
    await fit(files.squeegee, 1600, 1100, { brighten: 1.1 }),
  );
  await writeAll(
    "referenz-treppenhaus",
    await fit(files.stairsGlass, 1200, 1500, { brighten: 1.05 }),
  );
  await writeAll(
    "referenz-buero",
    await fit(files.officeLounge, 1600, 1000, { brighten: 1.05 }),
  );

  // OG aus Hero + Markenpanel
  const ogBase = await fit(files.facadeCorner, 1200, 630, { brighten: 1.08 });
  const panel = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect x="48" y="160" width="540" height="240" rx="14" fill="rgba(255,255,255,0.72)" stroke="rgba(255,255,255,0.85)"/>
    <text x="80" y="240" font-family="ui-sans-serif,system-ui,sans-serif" font-size="40" font-weight="600" fill="#14202B">Gebäudereinigung Kienle</text>
    <text x="80" y="300" font-family="ui-sans-serif,system-ui,sans-serif" font-size="24" fill="#5B6B78">Klare Sicht. Saubere Räume.</text>
    <rect x="80" y="330" width="128" height="4" fill="#2F8FD8"/>
  </svg>`);
  await sharp(ogBase)
    .composite([{ input: panel, top: 0, left: 0 }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(PUBLIC, "og-image.jpg"));
  console.log("wrote og-image.jpg");

  // Attribution
  const byKey = new Map();
  for (const row of usedCredits) {
    if (!byKey.has(row.key)) byKey.set(row.key, row);
    else {
      const prev = byKey.get(row.key);
      prev.slots = [...new Set([...prev.slots, ...row.slots])];
    }
  }

  const lines = [
    "# Bildnachweise (Sample / Stock)",
    "",
    "Beispielbilder für Design und Vorschau. Alle Quellen sind frei für kommerzielle Nutzung gemäß der genannten Lizenz. Eigene Objektfotos von Gebäudereinigung Kienle können diese Dateien später 1:1 ersetzen (gleiche Dateinamen).",
    "",
    "| Datei-Slots | Fotograf | Quelle | Lizenz | Motiv |",
    "| --- | --- | --- | --- | --- |",
  ];

  for (const row of byKey.values()) {
    lines.push(
      `| \`${row.slots.join("`, `")}\` | ${row.credit} | [${row.page}](${row.page}) | ${row.license} | ${row.note} |`,
    );
  }

  lines.push(
    "",
    "## Lizenzen (Kurz)",
    "",
    "- [Unsplash License](https://unsplash.com/license) – freie Nutzung inkl. kommerziell; Namensnennung erwünscht.",
    "- [Pexels License](https://www.pexels.com/license/) – freie Nutzung inkl. kommerziell; Namensnennung erwünscht.",
    "",
    "## Technik",
    "",
    "Export: `node scripts/import-sample-photos.mjs` (JPG + WebP + AVIF, passende Zuschnitte). Wipe-/Vorher-Varianten teils aus dem Klar-Motiv per Soft-Fog abgeleitet, damit Clip-Path-Wipes deckungsgleich bleiben.",
    "",
  );

  fs.writeFileSync(path.join(OUT, "ATTRIBUTION.md"), lines.join("\n"), "utf8");
  console.log("wrote ATTRIBUTION.md");
  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
