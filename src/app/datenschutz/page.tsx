import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der ${site.name} in ${site.address.city}.`,
  path: "/datenschutz",
  noindex: true,
});

/*
 * Grundlage ist die Datenschutzerklärung der bisherigen Website
 * (Stand 15. Juli 2025, abgerufen am 13.11.2026). Übernommen sind nur die
 * Abschnitte, die unabhängig von der Technik der alten Website gelten.
 * Abschnitte, die sich auf WordPress, das Kontaktformular, Cookies und die
 * Schriftart der alten Website bezogen, sind als Platzhalter markiert und
 * müssen rechtlich neu gefasst werden. Keine eigenen Formulierungen.
 */
export default function DatenschutzPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Datenschutzerklärung" />

      <section className="bg-paper">
        <div className="container-site py-14 lg:py-20">
          <div className="prose-legal max-w-3xl">
            <Placeholder>
              Diese Datenschutzerklärung stammt von der bisherigen Website (Stand 15. Juli 2025) und ist noch nicht an
              die neue Website angepasst. Vor dem Livegang muss sie rechtlich geprüft und ergänzt werden. Die
              betroffenen Abschnitte sind unten markiert.
            </Placeholder>

            <h2>1. Verantwortlicher</h2>
            <address>
              {site.name}
              <br />
              Inhaber: {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              Telefon: <a href={site.phone.href}>{site.phone.international}</a>
              <br />
              E-Mail: <a href={site.email.href}>{site.email.display}</a>
            </address>

            <h2>2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten
              ausschließlich im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz
              (BDSG-neu).
            </p>

            <h2>3. Erhebung personenbezogener Daten</h2>
            <h3>a) Beim Besuch der Website</h3>
            <Placeholder>
              Hosting und Server-Logfiles. Der bisherige Text beschrieb den alten Webserver (Löschung der Logdaten nach
              7 Tagen). Die neue Website wird bei Vercel gehostet; Anbieter, Serverstandort, Rechtsgrundlage,
              Speicherdauer und Auftragsverarbeitung müssen hier neu beschrieben werden.
            </Placeholder>

            <h3>b) Kontaktaufnahme per Telefon, E-Mail und WhatsApp</h3>
            <Placeholder>
              Der bisherige Text beschrieb ein Kontaktformular (MetForm), das es auf der neuen Website nicht mehr gibt.
              Stattdessen ist die Verarbeitung bei Kontakt per Telefon, E-Mail und WhatsApp (Anbieter, Rechtsgrundlage,
              Speicherdauer) zu beschreiben.
            </Placeholder>

            <h2>4. Verwendung von Cookies</h2>
            <Placeholder>
              Die neue Website setzt keine Cookies und verwendet kein Tracking. Der bisherige Cookie-Abschnitt passt
              deshalb nicht mehr und ist neu zu fassen oder zu streichen.
            </Placeholder>

            <h2>5. Schriftarten (Fonts)</h2>
            <Placeholder>
              Der bisherige Text nannte die Schriftart „Montserrat“. Die neue Website verwendet „Manrope“, lokal vom
              eigenen Server ausgeliefert, ohne Verbindung zu Google Fonts. Der Abschnitt ist entsprechend anzupassen.
            </Placeholder>

            <h2>6. Bildquellen</h2>
            <p>Die auf dieser Website verwendeten Bilder stammen ausschließlich von:</p>
            <ul>
              <li>pixabay.com (frei verwendbar, keine Namensnennung erforderlich)</li>
              <li>KI-generiert über ChatGPT (zur freien Nutzung)</li>
            </ul>

            <h2>7. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich oder
              gesetzlich vorgeschrieben ist. Nach Zweckwegfall oder Fristablauf erfolgt die Löschung automatisch oder
              manuell.
            </p>

            <h2>8. Ihre Rechte</h2>
            <p>Sie haben nach der DSGVO folgende Rechte:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p>Zur Wahrnehmung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannte Kontaktadresse.</p>

            <h3>Beschwerderecht</h3>
            <p>
              Zuständige Aufsichtsbehörde:
              <br />
              Die Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg
              <br />
              Website:{" "}
              <a href="https://www.lda.brandenburg.de" target="_blank" rel="noopener noreferrer">
                https://www.lda.brandenburg.de
              </a>
            </p>

            <h2>9. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei technischen, rechtlichen oder organisatorischen
              Änderungen anzupassen. Die jeweils aktuelle Version finden Sie stets auf unserer Website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
