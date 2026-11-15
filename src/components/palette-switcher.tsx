"use client";

import { useEffect, useState } from "react";

/**
 * VORLÄUFIG: Farbvarianten live umschalten, um eine Entscheidung zu treffen.
 * Wird nur im Entwicklungsmodus eingebunden und nach der Auswahl entfernt.
 */
const palettes = [
  { id: "rot", label: "Rot (aktuell)", color: "#d2323a" },
  { id: "blau", label: "Blau", color: "#1663d6" },
  { id: "petrol", label: "Petrol", color: "#0b7a78" },
  { id: "gruen", label: "Grün", color: "#11804f" },
] as const;

type PaletteId = (typeof palettes)[number]["id"];

function apply(id: PaletteId) {
  if (id === "rot") delete document.documentElement.dataset.palette;
  else document.documentElement.dataset.palette = id;
}

export function PaletteSwitcher() {
  const [active, setActive] = useState<PaletteId>("rot");

  useEffect(() => {
    const saved = window.localStorage.getItem("palette") as PaletteId | null;
    if (saved && palettes.some((palette) => palette.id === saved)) {
      apply(saved);
      setActive(saved);
    }
  }, []);

  return (
    <div
      role="group"
      aria-label="Farbvariante (nur Vorschau)"
      className="fixed right-3 top-24 z-50 flex flex-col items-center gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-ink/15 ring-1 ring-line"
    >
      <span className="text-[0.6875rem] font-semibold text-muted">Farbe</span>
      {palettes.map((palette) => (
        <button
          key={palette.id}
          type="button"
          title={palette.label}
          aria-label={palette.label}
          aria-pressed={active === palette.id}
          onClick={() => {
            apply(palette.id);
            setActive(palette.id);
            window.localStorage.setItem("palette", palette.id);
          }}
          className={`h-8 w-8 cursor-pointer rounded-full ring-offset-2 transition-shadow ${
            active === palette.id ? "ring-2 ring-ink" : "ring-1 ring-line hover:ring-2 hover:ring-muted"
          }`}
          style={{ background: palette.color }}
        />
      ))}
    </div>
  );
}
