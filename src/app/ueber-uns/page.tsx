import { CountUp } from "@/components/count-up";
import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { Picture } from "@/components/picture";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { satisfaction, site } from "@/lib/site";

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
    text: "Gründliche Ausführung bis in die Details, die den Gesamteindruck eines Hauses prägen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Inhabergeführt. Regional verwurzelt."
        lead="Ihr zuverlässiger Partner für Sauberkeit und Werterhalt – seit über 10 Jahren."
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site grid items-start gap-x-14 gap-y-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative">
            <div className="media aspect-[4/3] lg:aspect-[4/5]" data-reveal-image="in">
              <Picture
                src="/images/ueber-uns-raum.jpg"
                alt="Heller Besprechungsraum mit großen Glasflächen und Tageslicht"
                width={1200}
                height={1500}
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="absolute inset-0 block h-full w-full"
                priority
              />
            </div>
            <div
              className="load-fade absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-line bg-paper py-3 pr-5 pl-4 shadow-[0_18px_40px_-18px_rgba(12,46,58,0.35)] sm:right-6 lg:-right-6"
              style={{ "--delay": "700ms" } as React.CSSProperties}
            >
              <p className="font-display text-[2.5rem] leading-none text-accent">
                <CountUp to={satisfaction} delay={800} />
                <span className="text-[1.5rem]"> %</span>
              </p>
              <p className="text-[0.875rem] leading-snug text-muted">
                zufriedene
                <br />
                Kunden
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-2" data-reveal>
            <h2 className="h-section max-w-[18ch]">Sauberkeit, die bleibt.</h2>
            <p className="mt-5 max-w-[34rem] text-muted">
              Bei Kienle Gebäudereinigung kümmern wir uns täglich um saubere Büros, gepflegte Treppenhäuser und
              streifenfreie Fenster. Mit einem erfahrenen Team, modernen Reinigungsmitteln und einem klaren Anspruch an
              Qualität sorgen wir für Sauberkeit, die bleibt – gründlich, pünktlich und zuverlässig.
            </p>
            <p className="mt-4 max-w-[34rem] text-muted">
              Sitz des Unternehmens ist die {site.address.street} in {site.address.city}. Ihr Ansprechpartner von der
              ersten Anfrage bis zur laufenden Reinigung ist {site.owner}.
            </p>

            <ul className="check-list mt-6 space-y-2.5 text-ink">
              <li>Erfahrenes, geschultes Team</li>
              <li>Moderne Reinigungsmittel und Verfahren</li>
              <li>Angebot innerhalb von 24 Stunden</li>
            </ul>

            <p className="mt-8">
              <span className="font-script block text-[2.4rem] text-ink">{site.owner}</span>
              <span className="label mt-1 block">Inhaber, {site.name}</span>
            </p>

            <Placeholder className="mt-8 max-w-[34rem]">
              Persönliche Vorstellung von Herrn Kienle (Werdegang, Team, Haltung) und ein Porträt folgen, sobald sie
              vorliegen.
            </Placeholder>
          </div>
        </div>
      </section>

      <section className="section pt-0 lg:pt-0" aria-labelledby="haltung-titel">
        <div className="container-site">
          <div className="panel p-6 sm:p-10 lg:p-12">
            <h2 id="haltung-titel" className="h-section" data-reveal>
              Wofür wir stehen
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-7 md:grid-cols-3">
              {principles.map((item, index) => (
                <li
                  key={item.title}
                  className="border-t border-ink/15 pt-5"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                >
                  <h3 className="h-sub">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaPanel
        title="Ihr Objekt im Blick."
        text="Ob Hausverwaltung oder Unternehmen: Wir stimmen Umfang und Rhythmus auf Ihre Anforderungen ab."
        action="Gespräch vereinbaren"
      />
    </>
  );
}
