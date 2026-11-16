import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kontakt zur Gebäudereinigung Kienle in Großräschen: Telefon 0172 2664403, E-Mail oliver.kienle@yahoo.de, Seestraße 7.",
  path: "/kontakt",
});

const hints = [
  "Welche Leistung: Fenster, Treppenhaus oder Büro",
  "Wo das Objekt liegt",
  "Ungefähre Größe: Etagen, Räume oder Fensterflächen",
  "Einmalig oder regelmäßig",
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title="Sprechen wir über Ihr Objekt."
        lead="Telefon, WhatsApp, E-Mail oder Formular – Ihr Angebot erhalten Sie innerhalb von 24 Stunden, kostenlos und unverbindlich."
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site grid items-start gap-x-12 gap-y-10 lg:grid-cols-[0.85fr_1fr]">
          <div data-reveal>
            <ContactDetails />

            <div className="mt-8 border-t border-line pt-7">
              <h2 className="h-sub">Diese Angaben helfen uns weiter</h2>
              <ul className="check-list mt-4 space-y-2.5 text-muted">
                {hints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel p-5 sm:p-8" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <h2 className="h-sub">Anfrage schreiben</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
