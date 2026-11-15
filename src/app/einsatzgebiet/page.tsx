import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceArea, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Einsatzgebiet",
  description: `Einsatzgebiet der Gebäudereinigung Kienle: ${serviceArea.base}, ${serviceArea.towns.slice(1, 5).join(", ")} und das ${serviceArea.region}.`,
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

      <section className="border-b border-line">
        <div className="container-site grid-12 gap-y-10 py-16 sm:py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-6" data-reveal>
            <p className="max-w-[36rem] text-muted">
              Ausgangspunkt ist {site.address.city}. Von dort aus betreuen wir Objekte in den umliegenden Orten – für
              Hausverwaltungen und Unternehmen mit Bedarf an planbarer Reinigung.
            </p>
            <ul className="mt-10 border-t border-line">
              {serviceArea.towns.map((town) => (
                <li key={town} className="border-b border-line py-4 font-serif text-xl font-light text-ink">
                  {town}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <svg viewBox="0 0 320 260" role="img" aria-label="Schematische Karte des Einsatzgebiets" className="w-full text-line">
              <rect x="1" y="1" width="318" height="258" fill="none" stroke="currentColor" strokeWidth="1" />
              <path
                d="M36 190 C70 120, 110 90, 160 115 C205 138, 245 95, 290 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="98" cy="140" r="3" fill="#6B6B6B" />
              <text x="108" y="138" fontSize="11" fill="#6B6B6B" fontFamily="system-ui, sans-serif">
                Großräschen
              </text>
            </svg>
            <p className="mt-8">
              <Link href="/kontakt" className="text-link-accent">
                Objekt anfragen →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
