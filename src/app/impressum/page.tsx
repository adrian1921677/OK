import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Impressum",
  description: `Impressum der ${site.name}, Inhaber ${site.owner}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}.`,
  path: "/impressum",
  noindex: true,
});

/*
 * Grundlage ist der Text der bisherigen Website (abgerufen am 13.11.2026).
 * Angepasst: § 5 DDG statt „DGG“, § 18 Abs. 2 MStV statt „§ 55 Abs. 2 DGG“,
 * Hinweis auf die 2025 eingestellte EU-Streitbeilegungsplattform entfernt.
 * Rechtliche Prüfung steht noch aus.
 */
export default function ImpressumPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Impressum" />

      <section className="bg-paper">
        <div className="container-site border-t border-line pt-10 pb-14 lg:pb-20">
          <div className="prose-legal max-w-3xl">
            <h2>Angaben gemäß § 5 DDG</h2>
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

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <address>
              {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>

            <h2>Verbraucherschlichtung</h2>
            <p>Wir beteiligen uns nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.</p>
          </div>
        </div>
      </section>
    </>
  );
}
