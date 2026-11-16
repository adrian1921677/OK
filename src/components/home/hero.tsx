import Link from "next/link";
import { RiseText } from "@/components/rise-text";
import { site } from "@/lib/site";
import { HeroWipe } from "./hero-wipe";

export function HomeHero() {
  return (
    <section className="overflow-x-clip">
      <div className="container-site pt-8 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="h-hero">
              <RiseText text={`Fenster, Treppenhäuser und Büros in ${site.address.city}.`} />
            </h1>
            <p className="load-fade lead mt-6 max-w-[31rem]" style={{ "--delay": "200ms" } as React.CSSProperties}>
              Wir reinigen nach festem Plan, und Ihr Ansprechpartner bleibt derselbe: {site.owner}. Seit über 10 Jahren
              im Lausitzer Seenland.
            </p>
            <div className="load-fade mt-8 flex flex-wrap gap-3" style={{ "--delay": "300ms" } as React.CSSProperties}>
              <Link href="/kontakt" className="btn-primary">
                Unverbindlich anfragen
              </Link>
              <a href={site.phone.href} className="btn-secondary">
                {site.phone.display}
              </a>
            </div>
            <p className="load-fade mt-5 text-[0.875rem] text-muted" style={{ "--delay": "400ms" } as React.CSSProperties}>
              Ihr Angebot kommt innerhalb von 24 Stunden, kostenlos.
            </p>
          </div>

          <div className="lg:pl-8">
            <HeroWipe />
          </div>
        </div>
      </div>
    </section>
  );
}
