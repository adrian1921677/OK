import Link from "next/link";
import { site } from "@/lib/site";

/** Unterschrift des Inhabers als Marke, darunter klein der Firmenname. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex flex-col whitespace-nowrap transition-opacity hover:opacity-70 ${className}`}
      aria-label={`${site.name} – zur Startseite`}
    >
      <span className="font-script text-[1.6rem] text-ink sm:text-[1.75rem]">{site.owner}</span>
      <span className="-mt-0.5 text-[0.625rem] font-medium tracking-[0.04em] text-muted sm:text-[0.6875rem]">
        Gebäudereinigung
      </span>
    </Link>
  );
}
