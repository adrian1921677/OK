import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { Picture } from "@/components/picture";
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
    text: "Gründliche Ausführung bis in die Details, die den Gesamteindruck eines Hauses prägen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Inhabergeführt. Regional verwurzelt."
        lead="Gebäudereinigung aus Großräschen, seit über 10 Jahren. Ihr Ansprechpartner ist der Inhaber selbst."
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
          </div>

          <div className="pt-4 lg:pt-2" data-reveal>
            <h2 className="h-section max-w-[18ch]">Feste Termine, ein Ansprechpartner.</h2>
            <p className="mt-5 max-w-[34rem] text-muted">
              Wir reinigen Büros, Treppenhäuser und Fenster für Hausverwaltungen, Wohnungsgesellschaften, Büros und
              Praxen. Umfang und Rhythmus stehen im Angebot, die Termine sind fest geplant.
            </p>
            <p className="mt-4 max-w-[34rem] text-muted">
              Sitz des Unternehmens ist die {site.address.street} in {site.address.city}. Ihr Ansprechpartner von der
              ersten Anfrage bis zur laufenden Reinigung ist {site.owner}.
            </p>

            <p className="mt-8">
              <span className="font-script block text-[2.4rem] text-ink">{site.owner}</span>
              <span className="label mt-1 block">Inhaber, {site.name}</span>
            </p>
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
