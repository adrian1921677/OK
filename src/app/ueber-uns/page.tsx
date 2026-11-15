import Link from "next/link";
import { Picture } from "@/components/picture";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

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

      <section className="border-b border-line">
        <div className="container-site grid-12 items-start gap-y-10 py-16 sm:py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-6" data-reveal>
            <p className="label">Unternehmen</p>
            <h2 className="h-section mt-4 max-w-[16ch]">Sauberkeit, die selbstverständlich wirkt.</h2>
            <p className="mt-6 max-w-[34rem] text-muted">
              Gebäudereinigung Kienle kümmert sich um Fenster, Treppenhäuser und Büros – mit dem Anspruch, dass gepflegte
              Gebäude nicht auffallen müssen, sondern ruhig und klar wirken.
            </p>
            <p className="mt-4 max-w-[34rem] text-muted">
              Sitz des Unternehmens ist die {site.address.street} in {site.address.city}. Ansprechpartner von der ersten
              Anfrage bis zur laufenden Reinigung ist {site.owner}.
            </p>
            <Placeholder className="mt-8 max-w-[34rem]">
              Persönliche Vorstellung von Herrn Kienle (Werdegang, Team, Haltung) folgt, sobald der Text vorliegt.
            </Placeholder>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal-image>
            <div className="media aspect-[4/5]">
              <Picture
                src="/images/ueber-uns-raum.jpg"
                alt="Ruhiger Innenraum mit Glas und Tageslicht, Platzhalter ueber-uns-raum"
                width={1400}
                height={1750}
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="absolute inset-0 block h-full w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-site py-16 sm:py-20 lg:py-28">
          <p className="label" data-reveal>
            Haltung
          </p>
          <ul className="mt-10 border-t border-line">
            {principles.map((item) => (
              <li key={item.title} className="grid-12 gap-y-3 border-b border-line py-8" data-reveal>
                <h3 className="col-span-12 font-serif text-2xl font-light sm:col-span-4">{item.title}</h3>
                <p className="col-span-12 max-w-[34rem] text-muted sm:col-span-7 sm:col-start-6">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-site py-16 sm:py-20 lg:py-28" data-reveal>
          <h2 className="h-section max-w-[14ch]">Ihr Objekt im Blick.</h2>
          <p className="lead mt-5 max-w-[32rem]">
            Ob Hausverwaltung oder Unternehmen: Wir stimmen Umfang und Rhythmus auf Ihre Anforderungen ab.
          </p>
          <p className="mt-8">
            <Link href="/kontakt" className="text-link-accent">
              Gespräch vereinbaren →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
