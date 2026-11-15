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
        <div className="container-site grid-12 items-start gap-y-10 py-20 sm:py-24 lg:py-32">
          <div className="col-span-12 lg:col-span-5" data-reveal-image>
            <div className="media aspect-[4/5]">
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
            <h2 className="h-section mt-4 max-w-[16ch]">Familienbetrieb mit klarer Haltung.</h2>
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
                  <span className="font-display text-[1.25rem] tracking-[-0.01em] text-ink">{fact.value}</span>
                </li>
              ))}
            </ul>
            <Placeholder className="mt-8 max-w-[34rem]">
              Persönliche Vorstellung von Herrn Kienle (Werdegang, Team, Haltung) folgt, sobald der Text vorliegt.
            </Placeholder>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container-site py-20 sm:py-24 lg:py-32">
          <p className="label" data-reveal>
            Haltung
          </p>
          <ul className="mt-10 space-y-0">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="border-t border-ink/15 py-8"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <h3 className="font-display text-2xl tracking-[-0.01em] text-ink">{item.title}</h3>
                <p className="mt-3 max-w-[34rem] text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-ink">
        <div className="container-site py-20 sm:py-24 lg:py-32" data-reveal>
          <div className="max-w-[40rem]">
            <h2 className="h-section max-w-[14ch] text-cream">Ihr Objekt im Blick.</h2>
            <p className="mt-5 max-w-[32rem] text-cream/70">
              Ob Hausverwaltung oder Unternehmen: Wir stimmen Umfang und Rhythmus auf Ihre Anforderungen ab.
            </p>
            <p className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center bg-cream px-6 text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-85"
              >
                Gespräch vereinbaren
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
