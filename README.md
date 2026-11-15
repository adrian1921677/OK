# Gebäudereinigung Kienle – Website

Statische Unternehmenswebsite für die Gebäudereinigung Kienle in Großräschen.
Next.js (App Router), TypeScript, Tailwind CSS. Kein Backend, keine Datenbank, keine API-Routen.

Designrichtung: helles Glas / „streifenfrei“ — Weiß, Ice Blue, Sky-Akzent, selektives Milchglas, Instrument Sans + Inter.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build, alle Seiten werden statisch vorgerendert
npm run typecheck
```

Platzhalterbilder neu erzeugen:

```bash
node scripts/generate-glass-placeholders.mjs
```

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/lib/site.ts` | Unternehmensdaten, Navigation, Leistungen, Einsatzgebiet |
| `src/lib/metadata.ts` | Title, Description, Canonical, Open Graph |
| `src/app/globals.css` | Designsystem: Farben, Milchglas, Buttons, Motion |
| `src/components/` | Header, Footer, Home-Sektionen, Formular, Reveal |
| `src/app/*/page.tsx` | Seiten |
| `public/images/` | JPG + WebP + AVIF Platzhalter |
| `public/og-image.jpg` | Vorschaubild für geteilte Links |

## Vor dem Livegang

- [ ] Echte Objektfotos liefern (Platzhalter ersetzen)
- [ ] Persönlichen Text und Porträt von Oliver Kienle ergänzen
- [ ] Telefonische Erreichbarkeit bestätigen
- [ ] Impressum und Datenschutzerklärung rechtlich prüfen
- [ ] Bildrechte der Platzhalterfotos prüfen

## Deployment

Repository: `https://github.com/adrian1921677/OK.git` — Push auf `main` deployt automatisch über Vercel (Projekt `ok`). Domain `gebäudereinigung-großräschen.de`. Keine Umgebungsvariablen nötig. Alte URL `/startseite` wird dauerhaft auf `/` weitergeleitet.
