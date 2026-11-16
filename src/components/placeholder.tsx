import { site } from "@/lib/site";

/** Sichtbarer Hinweis für noch offene Inhalte – ohne Signaloptik. */
export function Placeholder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  if (!site.showPlaceholders) return null;

  return (
    <aside
      className={`rounded-xl border border-dashed border-line bg-paper/60 px-4 py-3 text-[0.875rem] leading-relaxed text-muted ${className}`}
    >
      <p className="label mb-2">Platzhalter</p>
      <div>{children}</div>
    </aside>
  );
}
