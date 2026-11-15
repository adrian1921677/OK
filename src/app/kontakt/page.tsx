import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kontakt zur Gebäudereinigung Kienle in Großräschen: Telefon 0172 2664403, E-Mail oliver.kienle@yahoo.de, Seestraße 7.",
  path: "/kontakt",
});

const hints = [
  "Welche Leistung benötigen Sie: Fenster, Treppenhaus oder Büro.",
  "Wo liegt das Objekt.",
  "Ungefähre Größe: Etagen, Räume oder Fensterflächen.",
  "Einmalig oder regelmäßig.",
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title="Sprechen wir über Ihr Objekt."
        lead="Telefon, E-Mail oder Formular – wir melden uns mit einem klaren, unverbindlichen Angebot."
      />

      <section className="border-b border-line">
        <div className="container-site grid-12 gap-y-14 py-16 sm:py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-5" data-reveal>
            <dl className="space-y-8">
              <div>
                <dt className="label">Telefon</dt>
                <dd className="mt-2 font-serif text-2xl font-light">
                  <a href={site.phone.href} className="text-link">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">E-Mail</dt>
                <dd className="mt-2">
                  <a href={site.email.href} className="text-link break-all">
                    {site.email.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Adresse</dt>
                <dd className="mt-2 text-muted">
                  <address className="not-italic">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </address>
                </dd>
              </div>
            </dl>

            <div className="mt-12 border-t border-line pt-10">
              <h2 className="h-sub">Diese Angaben helfen weiter</h2>
              <ul className="mt-6 space-y-3 text-muted">
                {hints.map((item) => (
                  <li key={item} className="border-b border-line py-3 last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
              <Placeholder className="mt-8">
                Telefonische Erreichbarkeit (Tage und Uhrzeiten) wird ergänzt, sobald bestätigt.
              </Placeholder>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
