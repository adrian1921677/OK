import Link from "next/link";
import type { ReactNode } from "react";

/** Kopfbereich der Unterseiten: Pfad, Titel und Einleitung auf Weiß. */
export function PageHero({ title, lead, breadcrumb }: { title: ReactNode; lead?: ReactNode; breadcrumb: string }) {
  return (
    <section className="relative isolate pb-10 pt-6 sm:pt-10 lg:pb-12">
      <div aria-hidden="true" className="grid-backdrop" />
      <div className="container-site">
        <nav aria-label="Brotkrumen" className="hero-fade [--d:0ms]">
          <ol className="flex items-center gap-2 text-[0.9375rem] text-muted">
            <li>
              <Link href="/" className="inline-block py-2 underline-offset-4 hover:text-ink hover:underline">
                Startseite
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {breadcrumb}
            </li>
          </ol>
        </nav>
        <h1 className="h-page hero-fade mt-4 max-w-[22ch] [--d:80ms]">{title}</h1>
        {lead ? <p className="lead hero-fade mt-5 max-w-[36rem] [--d:180ms]">{lead}</p> : null}
      </div>
    </section>
  );
}
