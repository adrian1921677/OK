import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export function HomeContact() {
  return (
    <section className="border-b border-line" aria-labelledby="kontakt-titel" id="kontakt">
      <div className="container-site grid-12 gap-y-12 py-20 sm:py-24 lg:py-32">
        <div className="col-span-12 lg:col-span-5" data-reveal>
          <h2 id="kontakt-titel" className="h-page max-w-[12ch]">
            Sprechen wir über Ihr Objekt.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          <dl className="space-y-5 text-[1.0625rem]">
            <div>
              <dt className="label">Telefon</dt>
              <dd className="mt-2">
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
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
