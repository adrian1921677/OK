import Link from "next/link";
import { Picture } from "@/components/picture";

export function HomeHero() {
  return (
    <section className="border-b border-line">
      <div className="container-site grid-12 items-end gap-y-10 py-14 sm:py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-5 lg:pb-8">
          <h1 className="h-hero" data-reveal>
            Gepflegte Gebäude im Lausitzer Seenland.
          </h1>
          <p className="lead mt-6 max-w-[28rem]" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            Fenster-, Treppenhaus- und Büroreinigung für Hausverwaltungen und Unternehmen – diskret, planbar und aus
            Großräschen.
          </p>
          <p className="mt-8" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            <Link href="/kontakt" className="text-link-accent text-[1.0625rem]">
              Angebot anfragen →
            </Link>
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:-mr-[max(0px,calc((100vw-72rem)/2+2.5rem))]">
          <div className="media aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/3] lg:min-h-[28rem]">
            <Picture
              src="/images/hero-glasfassade.jpg"
              alt="Ruhige Glasfassade eines Bürogebäudes, Platzhalter hero-glasfassade"
              priority
              reveal
              revealDelay="100ms"
              sizes="(min-width: 1024px) 58vw, 100vw"
              width={1800}
              height={1350}
              className="absolute inset-0 block h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
