import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { Picture } from "@/components/picture";
import { pageMetadata } from "@/lib/metadata";
import { clients, services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Leistungen",
  description:
    "Fensterreinigung, Treppenhausreinigung und Büroreinigung der Gebäudereinigung Kienle in Großräschen und im Lausitzer Seenland.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        label="Leistungen"
        title="Fenster, Treppenhäuser, Büros."
        lead="Drei Leistungen für Hausverwaltungen, Wohnungsgesellschaften, Büros und Praxen. Umfang und Rhythmus stimmen wir mit Ihnen ab und halten beides im Angebot fest."
      />

      <div className="container-site">
        <nav aria-label="Leistungen im Überblick" className="load-fade" style={{ "--delay": "550ms" } as React.CSSProperties}>
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a href={`#${service.slug}`} className="btn-secondary min-h-10 px-4 text-[0.875rem]">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-site section space-y-14 lg:space-y-20">
        {services.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-titel`}
            className="grid items-center gap-x-14 gap-y-7 lg:grid-cols-2"
          >
            <div className={`media aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : ""}`} data-reveal-image>
              <Picture
                src={service.image}
                alt={service.imageAlt}
                width={1400}
                height={1050}
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="absolute inset-0 block h-full w-full"
                priority={index === 0}
              />
            </div>

            <div data-reveal>
              <h2 id={`${service.slug}-titel`} className="h-section">
                {service.title}
              </h2>
              {service.description.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-[34rem] text-muted first-of-type:mt-5">
                  {paragraph}
                </p>
              ))}
              <ul className="check-list mt-6 space-y-2.5 text-ink">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="section pt-0 lg:pt-0" aria-labelledby="kunden-titel">
        <div className="container-site">
          <div className="panel flex flex-wrap items-center justify-between gap-x-12 gap-y-5 p-6 sm:p-8" data-reveal>
            <h2 id="kunden-titel" className="h-sub">
              Für wen wir arbeiten
            </h2>
            <ul className="flex flex-wrap gap-2">
              {clients.map((client) => (
                <li key={client} className="rounded-full bg-paper px-4 py-2 text-[0.9375rem] text-ink">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaPanel
        title="Passende Reinigung für Ihr Objekt."
        text="Beschreiben Sie kurz Objekt und Bedarf. Ihr Angebot erhalten Sie innerhalb von 24 Stunden – kostenlos und unverbindlich."
      />
    </>
  );
}
