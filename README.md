# Gebäudereinigung Kienle – Website

Statische Unternehmenswebsite für die Gebäudereinigung Kienle in Großräschen.
Next.js (App Router), TypeScript, Tailwind CSS, Lucide Icons. Kein Backend, keine Datenbank, keine API-Routen.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build, alle Seiten werden statisch vorgerendert
npm run typecheck
```

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/lib/site.ts` | Alle Unternehmensdaten, Navigation, Leistungen, Einsatzgebiet |
| `src/lib/metadata.ts` | Einheitliche Metadaten (Title, Description, Canonical, Open Graph) |
| `src/app/globals.css` | Designsystem: Farben, Schriftrollen (Instrument Sans), Buttons, Flächen, alle Animationen |
| `src/components/` | Kopfzeile, Fußzeile, mobile Kontaktleiste, Hero-Foto, Kontaktfeld, Scroll-Einblendung (`reveal-observer.tsx`), Platzhalter |
| `src/app/*/page.tsx` | Die acht Seiten |
| `src/assets/images/` | Fotos, werden von `next/image` als AVIF/WebP ausgeliefert |
| `public/og-image.jpg` | Vorschaubild für geteilte Links |

## Vor dem Livegang

Offene Inhalte sind auf der Website als gelb gestrichelte **Platzhalter** sichtbar. Sie verschwinden, sobald
`showPlaceholders` in `src/lib/site.ts` auf `false` steht. Vorher zu klären:

- [ ] E-Mail-Adresse bestätigen: Impressum nennt `yahoo.de`, die alte Startseite `yahoo.com`
- [ ] Orte des Einsatzgebiets eintragen (`serviceArea.towns` in `src/lib/site.ts`)
- [ ] Echte Fotos für die Galerie liefern (`src/app/referenzen/page.tsx`)
- [ ] Porträt und persönlichen Text von Oliver Kienle ergänzen (`src/app/ueber-uns/page.tsx`)
- [ ] Telefonische Erreichbarkeit bestätigen (`src/app/kontakt/page.tsx`)
- [ ] Genauen Leistungsumfang je Leistung bestätigen (`services` in `src/lib/site.ts`)
- [ ] Impressum und Datenschutzerklärung rechtlich prüfen lassen. Beide Texte stammen von der alten Website;
      die Datenschutzerklärung ist noch nicht an Vercel-Hosting und die neuen Kontaktwege angepasst.
- [ ] Bildrechte der fünf übernommenen Fotos prüfen (laut alter Datenschutzerklärung Pixabay und KI-generiert)

## Deployment

Das Projekt ist für Vercel vorbereitet: Repository bei GitHub anlegen, in Vercel importieren, Domain
`gebäudereinigung-großräschen.de` verbinden. Es sind keine Umgebungsvariablen nötig. Die alte URL `/startseite`
wird dauerhaft auf `/` weitergeleitet.
