import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Marke: eine Scheibe mit Wischkante, daneben der Name in aufrechter Serifenschrift.
 * Die Schreibschrift bleibt der Unterschrift im Über-uns-Bereich vorbehalten.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 whitespace-nowrap ${className}`}
      aria-label={`${site.name} – zur Startseite`}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--color-accent)" />
        <path
          d="M9 23 23 9"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="origin-center transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
        />
        <path d="M9 16l7-7M16 23l7-7" stroke="#fff" strokeOpacity="0.45" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col">
        <span className="font-display text-[1.3rem] leading-none tracking-[-0.01em] text-ink sm:text-[1.45rem]">
          {site.owner}
        </span>
        <span className="mt-1 text-[0.625rem] leading-none font-medium tracking-[0.06em] text-muted sm:text-[0.6875rem]">
          Gebäudereinigung
        </span>
      </span>
    </Link>
  );
}
