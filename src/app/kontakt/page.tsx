import type { CSSProperties } from "react";
import { ContactTiles } from "@/components/contact";
import { InfoList } from "@/components/info-list";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Gebäudereinigung Kienle in Großräschen erreichen: Telefon 0172 2664403, WhatsApp oder E-Mail. Kostenloses, unverbindliches Angebot innerhalb von 24 Stunden.",
  path: "/kontakt",
});

const questions = [
  "Welche Leistung benötigen Sie: Fenster-, Treppenhaus- oder Büroreinigung?",
  "Wo befindet sich das Objekt?",
  "Wie groß ist es ungefähr, zum Beispiel Anzahl der Etagen, Räume oder Fenster?",
  "Soll einmalig oder regelmäßig gereinigt werden?",
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        breadcrumb="Kontakt"
        title="Sprechen Sie uns direkt an"
        lead={
          "Telefon, WhatsApp oder E-Mail – Sie erhalten innerhalb von 24 Stunden ein kostenloses, unverbindliches Angebot."
        }
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site">
          <h2 className="sr-only">Kontaktwege</h2>
          <ContactTiles />
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div data-reveal>
            <h2 className="h-section">Diese Angaben helfen uns weiter</h2>
            <ul className="list-dots mt-6 max-w-[34rem] space-y-3 font-medium text-ink">
              {questions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
            <div className="panel p-6 sm:p-8">
              <InfoList
                items={[
                  { label: "Ansprechpartner", value: `${site.owner}, Inhaber` },
                  {
                    label: "Anschrift",
                    value: (
                      <address className="not-italic">
                        {site.name}
                        <br />
                        {site.address.street}
                        <br />
                        {site.address.postalCode} {site.address.city}
                      </address>
                    ),
                  },
                  { label: "Antwortzeit", value: "Angebot innerhalb von 24 Stunden" },
                ]}
              />
            </div>
            <Placeholder className="mt-4">
              Telefonische Erreichbarkeit (Tage und Uhrzeiten) ist noch nicht bestätigt und wird hier ergänzt.
            </Placeholder>
          </div>
        </div>
      </section>
    </>
  );
}
