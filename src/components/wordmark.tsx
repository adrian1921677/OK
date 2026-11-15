import Link from "next/link";
import { site } from "@/lib/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-serif text-[1.625rem] font-light tracking-[-0.02em] text-ink transition-colors hover:text-accent sm:text-[1.75rem] ${className}`}
      aria-label={`${site.name} – zur Startseite`}
    >
      {site.shortName}
    </Link>
  );
}
