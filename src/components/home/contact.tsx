import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";

export function HomeContact() {
  return (
    <section className="pb-14 lg:pb-20" aria-labelledby="kontakt-titel" id="kontakt">
      <div className="container-site">
        <div className="panel-deep grid gap-x-12 gap-y-10 p-5 sm:p-8 lg:grid-cols-[0.85fr_1fr] lg:p-12" data-reveal>
          <div>
            <h2 id="kontakt-titel" className="h-section max-w-[14ch]">
              Sprechen wir über Ihr Objekt.
            </h2>
            <p className="mt-4 max-w-[26rem] text-white/70">
              Schildern Sie kurz Objekt und Bedarf. Ihr Angebot erhalten Sie innerhalb von 24 Stunden – kostenlos und
              unverbindlich.
            </p>
            <div className="mt-8 border-t border-white/15 pt-7">
              <ContactDetails tone="light" />
            </div>
          </div>

          <div className="rounded-[1.25rem] bg-paper p-5 text-ink sm:p-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
