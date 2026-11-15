import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export function HomeContact() {
  return (
    <section className="section-ink" aria-labelledby="kontakt-titel" id="kontakt">
      <div className="container-site py-20 sm:py-24 lg:py-32">
        <div className="max-w-[36rem]" data-reveal>
          <p className="label">Kontakt</p>
          <h2 id="kontakt-titel" className="h-section mt-4 text-cream">
            Sprechen wir über Ihr Objekt.
          </h2>
        </div>

        <div
          className="mt-14 grid gap-12 border-t border-cream/20 pt-12 lg:grid-cols-2 lg:gap-16"
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <div>
            <dl className="space-y-7 text-[1.0625rem]">
              <div>
                <dt className="label">Telefon</dt>
                <dd className="mt-2">
                  <a
                    href={site.phone.href}
                    className="font-display text-2xl tracking-[-0.01em] text-cream transition-opacity hover:opacity-70"
                  >
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">WhatsApp</dt>
                <dd className="mt-2">
                  <a
                    href={site.whatsapp.href}
                    className="text-cream/80 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nachricht senden
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">E-Mail</dt>
                <dd className="mt-2">
                  <a
                    href={site.email.href}
                    className="break-all text-cream/80 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream"
                  >
                    {site.email.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Adresse</dt>
                <dd className="mt-2 text-cream/70">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </dd>
              </div>
            </dl>
          </div>

          <div className="[&_.label]:text-cream/55 [&_.field]:border-cream/25 [&_.field]:text-cream [&_.field:focus]:border-cream [&_a]:text-cream [&_button.btn-primary]:bg-cream [&_button.btn-primary]:text-ink [&_span]:text-cream/70">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
