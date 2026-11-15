import type { ReactNode } from "react";
import { site } from "@/lib/site";

/**
 * Sichtbar gekennzeichneter Platzhalter für Inhalte, die noch nicht bestätigt
 * oder geliefert sind. Verschwindet, sobald `site.showPlaceholders` false ist.
 */
export function Placeholder({ children, className = "" }: { children: ReactNode; className?: string }) {
  if (!site.showPlaceholders) return null;
  return (
    <div
      role="note"
      className={`rounded-xl border border-dashed border-amber-600 bg-amber-50 px-4 py-3 text-[0.9375rem] text-amber-950 ${className}`}
    >
      <strong className="font-bold">Platzhalter:</strong> {children}
    </div>
  );
}
