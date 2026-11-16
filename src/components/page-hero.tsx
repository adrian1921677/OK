import Link from "next/link";
import { RiseText } from "./rise-text";

type PageHeroProps = {
  label: string;
  title: string;
  lead?: string;
};

/** Kompakter Seitenkopf: Pfad, Titel, Einleitung – ohne Farbband. */
export function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <header>
      <div className="container-site pt-8 pb-10 sm:pt-12 lg:pt-16 lg:pb-12">
        <nav aria-label="Pfad" className="load-fade label" style={{ "--delay": "0ms" } as React.CSSProperties}>
          <Link href="/" className="text-link">
            Startseite
          </Link>
          <span className="mx-2 text-line" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{label}</span>
        </nav>
        <h1 className="h-page mt-4 max-w-[20ch]">
          <RiseText text={title} />
        </h1>
        {lead ? (
          <p className="load-fade lead mt-5 max-w-[38rem]" style={{ "--delay": "250ms" } as React.CSSProperties}>
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}
