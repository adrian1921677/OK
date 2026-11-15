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

      <section className="section-surface">
        <div className="container-site grid-12 gap-y-10 py-20 sm:py-24 lg:py-32">
          <div className="col-span-12 lg:col-span-6" data-reveal>
            <p className="max-w-[36rem] text-muted">
              Ausgangspunkt ist {site.address.city}. Von dort aus betreuen wir Objekte in den umliegenden Orten – für
              Hausverwaltungen und Unternehmen mit Bedarf an planbarer Reinigung.
            </p>
            <ul className="mt-10 space-y-0">
              {serviceArea.towns.map((town) => (
                <li
                  key={town}
                  className="border-b border-ink/10 py-3 font-display text-xl tracking-[-0.01em] text-ink"
                >
                  {town}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="col-span-12 lg:col-span-5 lg:col-start-8"
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          >
            <div className="border border-ink/10 bg-paper p-5">
              <svg
                viewBox="0 0 320 260"
                role="img"
                aria-label="Schematische Karte des Einsatzgebiets"
                className="w-full"
              >
                <rect x="0" y="0" width="320" height="260" fill="#F7F5F0" />
                <path
                  d="M36 190 C70 120, 110 90, 160 115 C205 138, 245 95, 290 140"
                  fill="none"
                  stroke="#DDD6CA"
                  strokeWidth="1.5"
                />
                <circle cx="98" cy="140" r="4.5" fill="#0D0D11" />
                <text x="112" y="144" fontSize="12" fill="#6A655E" fontFamily="system-ui, sans-serif">
                  Großräschen
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ink">
        <div className="container-site py-20 sm:py-24 lg:py-32" data-reveal>
          <div className="max-w-[40rem]">
            <h2 className="h-section max-w-[16ch] text-cream">Objekt in der Region?</h2>
            <p className="mt-5 text-cream/70">Schildern Sie uns Standort und Bedarf – wir melden uns zeitnah.</p>
            <p className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center bg-cream px-6 text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-85"
              >
                Angebot anfragen
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
