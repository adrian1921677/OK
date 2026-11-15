import Link from "next/link";
import { Picture } from "@/components/picture";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { aboutFacts, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Über uns",
  description:
    "Gebäudereinigung Kienle aus Großräschen: inhabergeführt von Oliver Kienle, seit über zehn Jahren Partner für gepflegte Gebäude im Lausitzer Seenland.",
  path: "/ueber-uns",
});

const principles = [
  {
    title: "Verlässlichkeit",
    text: "Feste Ansprechpartner und planbare Einsätze – ohne Überraschungen im Alltag Ihrer Objekte.",
  },
  {
    title: "Diskretion",
    text: "Wir arbeiten ruhig und respektvoll in bewohnten und genutzten Gebäuden.",
  },
  {
    title: "Sorgfalt",
    text: "Gründliche Ausführung bis in Details, die den Gesamteindruck eines Hauses prägen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Inhabergeführt. Regional verwurzelt."
        lead={`Seit über zehn Jahren betreut ${site.owner} Objekte in ${site.address.city} und dem Lausitzer Seenland.`}
      />

      <section className="bg-paper">
        <div className="container-site grid-12 items-start gap-y-10 py-16 sm:py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-5" data-reveal-image>
            <div className="media aspect-[4/5] shadow-[0_16px_36px_rgba(47,143,216,0.1)]">
              <Picture
                src="/images/ueber-uns-raum.jpg"
                alt="Heller Innenraum mit großen Glasflächen und Tageslicht"
                width={1200}
                height={1500}
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="absolute inset-0 block h-full w-full"
                priority
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal>
            <p className="label">Unternehmen</p>
            <h2 className="h-section mt-3 max-w-[16ch]">Familienbetrieb mit klarer Haltung.</h2>
            <p className="mt-6 max-w-[34rem] text-muted">
              Gebäudereinigung Kienle kümmert sich um Fenster, Treppenhäuser und Büros – mit dem Anspruch, dass gepflegte
              Gebäude hell und klar wirken, ohne Aufsehen.
            </p>
            <p className="mt-4 max-w-[34rem] text-muted">
              Sitz des Unternehmens ist die {site.address.street} in {site.address.city}. Ansprechpartner von der ersten
              Anfrage bis zur laufenden Reinigung ist {site.owner}.
            </p>
            <ul className="mt-8 space-y-4 border-t border-line pt-6">
              {aboutFacts.map((fact) => (
                <li key={fact.label} className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="label">{fact.label}</span>
                  <span className="font-display text-[1.125rem] tracking-[-0.02em] text-ink">{fact.value}</span>
                </li>
              ))}
            </ul>
            <Placeholder className="mt-8 max-w-[34rem]">
              Persönliche Vorstellung von Herrn Kienle (Werdegang, Team, Haltung) folgt, sobald der Text vorliegt.
            </Placeholder>
          </div>
        </div>
      </section>

      <section className="section-ice">
        <div className="container-site py-16 sm:py-20 lg:py-28">
          <p className="label" data-reveal>
            Haltung
          </p>
          <ul className="mt-8 space-y-5">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="glass rounded-2xl p-5 sm:p-6"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <h3 className="font-display text-xl tracking-[-0.02em] text-ink">{item.title}</h3>
                <p className="mt-2 max-w-[34rem] text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-soft">
        <div className="container-site py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="glass glass-sheen max-w-[40rem] p-7 sm:p-9" data-sheen="on">
            <h2 className="h-section max-w-[14ch]">Ihr Objekt im Blick.</h2>
            <p className="lead mt-5 max-w-[32rem]">
              Ob Hausverwaltung oder Unternehmen: Wir stimmen Umfang und Rhythmus auf Ihre Anforderungen ab.
            </p>
            <p className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Gespräch vereinbaren
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
