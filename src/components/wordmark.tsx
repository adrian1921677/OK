import Link from "next/link";

/** Signal-Quadrat statt weicher Icon-Kacheln. */
export function PaneMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="0" y="0" width="11" height="11" fill="currentColor" />
      <rect x="13" y="0" width="11" height="11" className="fill-signal" />
      <rect x="0" y="13" width="11" height="11" fill="currentColor" />
      <rect x="13" y="13" width="11" height="11" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ invert = false }: { invert?: boolean }) {
  return (
    <Link
      href="/"
      translate="no"
      className={`inline-flex items-center gap-2.5 ${invert ? "text-paper" : "text-ink"}`}
    >
      <PaneMark className="h-8 w-8 shrink-0" />
      <span className="leading-none">
        <span className={`block text-[0.6875rem] font-medium uppercase tracking-[0.08em] ${invert ? "text-ink-muted" : "text-muted"}`}>
          Gebäudereinigung
        </span>
        <span className="font-display mt-0.5 block text-[1.375rem] font-bold uppercase tracking-[-0.04em]">
          Kienle
        </span>
        <span className="sr-only"> – zur Startseite</span>
      </span>
    </Link>
  );
}
