import Link from "next/link";
import { site } from "@/lib/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-display text-[1.2rem] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-accent sm:text-[1.3rem] ${className}`}
      aria-label={`${site.name} – zur Startseite`}
    >
      {site.shortName}
    </Link>
  );
}
