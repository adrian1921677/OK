import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactPanel } from "@/components/contact";
import { InfoList } from "@/components/info-list";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { serviceArea, services, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Einsatzgebiet: Großräschen & Lausitzer Seenland",
  description:
    "Gebäudereinigung Kienle ist in Großräschen und im Lausitzer Seenland für Sie im Einsatz: Fensterreinigung, Treppenhausreinigung und Büroreinigung direkt aus der Region.",
  path: "/einsatzgebiet",
});

export default function EinsatzgebietPage() {
  return (
    <>
      <PageHero
        breadcrumb="Einsatzgebiet"
        title={`Gebäudereinigung in ${serviceArea.base} und im ${serviceArea.region}`}
        lead="Wir sind in der Region zu Hause. Das bedeutet kurze Wege und persönliche Absprachen."
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div data-reveal>
            <h2 className="h-section">Von Großräschen aus für Sie unterwegs</h2>
            <p className="mt-5 max-w-[34rem]">
              Unser Firmensitz liegt in der {site.address.street} in {site.address.city}. Von hier aus betreuen wir
              Objekte in {serviceArea.base} und im {serviceArea.region}.
            </p>
            <p className="mt-4 max-w-[34rem]">
              Sie sind nicht sicher, ob Ihr Standort dazugehört? Fragen Sie einfach an – wir sagen Ihnen schnell und
              ehrlich, ob wir Ihr Objekt übernehmen können.
            </p>

            <h3 className="h-sub mt-9">Unsere Leistungen in der Region</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/leistungen#${service.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full bg-mist px-5 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={{ "--reveal-delay": "90ms" } as CSSProperties}>
            <div className="panel p-6 sm:p-8">
              <InfoList
                items={[
                  {
                    label: "Firmensitz",
                    value: (
                      <address className="not-italic">
                        {site.address.street}
                        <br />
                        {site.address.postalCode} {site.address.city}
                      </address>
                    ),
                  },
                  { label: "Region", value: serviceArea.region },
                  ...(serviceArea.towns.length > 0 ? [{ label: "Orte", value: serviceArea.towns.join(", ") }] : []),
                ]}
              />
            </div>

            {serviceArea.towns.length === 0 ? (
              <Placeholder className="mt-4">
                Liste der tatsächlich bedienten Orte. Bestätigt sind bisher nur {serviceArea.base} und das{" "}
                {serviceArea.region}; einzelne Orte werden ergänzt, sobald Herr Kienle sie bestätigt hat.
              </Placeholder>
            ) : null}
          </div>
        </div>
      </section>

      <ContactPanel
        title="Ihr Objekt liegt in der Region?"
        text={
          "Rufen Sie an oder schreiben Sie uns. Sie erhalten innerhalb von 24 Stunden ein kostenloses, unverbindliches Angebot."
        }
      />
    </>
  );
}
