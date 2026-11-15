import Link from "next/link";
import { site } from "@/lib/site";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-script whitespace-nowrap text-[1.35rem] leading-none text-ink transition-opacity hover:opacity-70 sm:text-[1.75rem] lg:text-[1.9rem] ${className}`}
      aria-label={`${site.name} – zur Startseite`}
    >
      {site.owner}
    </Link>
  );
}
