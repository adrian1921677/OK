import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export function HomeContact() {
  return (
    <section className="section-soft" aria-labelledby="kontakt-titel" id="kontakt">
      <div className="container-site py-16 sm:py-20 lg:py-28">
        <div className="max-w-[34rem]" data-reveal>
          <p className="label">Kontakt</p>
          <h2 id="kontakt-titel" className="h-section mt-3">
            Sprechen wir über Ihr Objekt.
          </h2>
        </div>

        <div
          className="glass glass-sheen mt-10 grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10"
          data-reveal
          data-sheen="on"
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <div>
            <dl className="space-y-6 text-[1.0625rem]">
              <div>
                <dt className="label">Telefon</dt>
                <dd className="mt-2">
                  <a href={site.phone.href} className="text-link font-display text-xl tracking-[-0.02em]">
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">WhatsApp</dt>
                <dd className="mt-2">
                  <a href={site.whatsapp.href} className="text-link-accent" target="_blank" rel="noopener noreferrer">
                    Nachricht senden
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
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
