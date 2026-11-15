import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Impressum",
  description: `Impressum der ${site.name}, Inhaber ${site.owner}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}.`,
  path: "/impressum",
  noindex: true,
});

/*
 * Der Text ist unverändert von der bisherigen Website übernommen
 * (abgerufen am 13.11.2026). Keine eigenen rechtlichen Formulierungen.
 */
export default function ImpressumPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Impressum" />

      <section className="bg-paper">
        <div className="container-site py-14 lg:py-20">
          <div className="prose-legal max-w-3xl">
            <Placeholder>
              Dieser Text stammt unverändert von der bisherigen Website und ist vor dem Livegang rechtlich zu prüfen.
              Auffällig: Die Gesetzesangaben „§ 5 DGG“ und „§ 55 Abs. 2 DGG“ sind vermutlich nicht korrekt, die
              E-Mail-Adresse weicht von der alten Startseite ab (dort yahoo.com), und die OS-Plattform der EU-Kommission
              sollte auf Aktualität geprüft werden.
            </Placeholder>

            <h2>Angaben gemäß § 5 DGG</h2>
            <address>
              {site.name}
              <br />
              Inhaber: {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>

            <h2>Kontakt</h2>
            <p>
              Telefon: <a href={site.phone.href}>{site.phone.international}</a>
              <br />
              E-Mail: <a href={site.email.href}>{site.email.display}</a>
            </p>

            <h2>Umsatzsteuerliche Registrierung</h2>
            <p>
              Steuernummer: {site.taxNumber} ({site.taxOffice})
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 DGG</h2>
            <address>
              {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>

            <h2>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO</h2>
            <p>
              Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>

            <h2>Verbraucherschlichtung</h2>
            <p>Wir beteiligen uns nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.</p>
          </div>
        </div>
      </section>
    </>
  );
}
