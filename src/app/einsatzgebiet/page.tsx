import { AreaMap } from "@/components/area-map";
import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceArea, site } from "@/lib/site";

const others = serviceArea.towns.filter((town) => town.km > 0);

export const metadata = pageMetadata({
  title: "Einsatzgebiet",
  description: `Einsatzgebiet der Gebäudereinigung Kienle: ${serviceArea.base}, ${others
    .slice(0, 4)
    .map((town) => town.name)
    .join(", ")} und das ${serviceArea.region}.`,
  path: "/einsatzgebiet",
});

export default function EinsatzgebietPage() {
  return (
    <>
      <PageHero
        label="Einsatzgebiet"
        title="Aus Großräschen in die Region."
        lead={`Kurze Wege im ${serviceArea.region} – verlässliche Termine für Ihre Objekte.`}
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site grid items-start gap-x-14 gap-y-10 lg:grid-cols-[1fr_1.05fr]">
          <div data-reveal>
            <p className="max-w-[34rem] text-muted">
              Ausgangspunkt ist {site.address.city}. Von dort aus betreuen wir Objekte in den umliegenden Orten – für
              Hausverwaltungen und Unternehmen mit Bedarf an planbarer Reinigung.
            </p>
            <table className="mt-7 w-full max-w-[30rem] text-left">
              <caption className="sr-only">Orte im Einsatzgebiet mit Entfernung ab Großräschen</caption>
              <thead>
                <tr className="label border-b border-line">
                  <th scope="col" className="py-2 font-medium">
                    Ort
                  </th>
                  <th scope="col" className="py-2 text-right font-medium">
                    Luftlinie ab {serviceArea.base}
                  </th>
                </tr>
              </thead>
              <tbody>
                {others.map((town) => (
                  <tr key={town.name} className="border-b border-line">
                    <th scope="row" className="py-3 font-display text-[1.25rem] font-normal text-ink">
                      {town.name}
                    </th>
                    <td className="py-3 text-right text-muted tabular-nums">ca. {town.km} km</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 max-w-[30rem] text-[0.9375rem] text-muted">
              Ihr Ort ist nicht dabei? Fragen Sie trotzdem an – oft lässt sich eine Lösung finden.
            </p>
          </div>

          <div className="panel p-4 sm:p-8 lg:sticky lg:top-28" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <AreaMap className="mx-auto w-full max-w-[32rem]" />
          </div>
        </div>
      </section>

      <CtaPanel
        title="Objekt in der Region?"
        text="Schildern Sie uns Standort und Bedarf – Ihr Angebot erhalten Sie innerhalb von 24 Stunden."
      />
    </>
  );
}
