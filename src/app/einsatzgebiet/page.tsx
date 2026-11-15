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

      <section className="section-ice">
        <div className="container-site grid-12 gap-y-10 py-16 sm:py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-6" data-reveal>
            <p className="max-w-[36rem] text-muted">
              Ausgangspunkt ist {site.address.city}. Von dort aus betreuen wir Objekte in den umliegenden Orten – für
              Hausverwaltungen und Unternehmen mit Bedarf an planbarer Reinigung.
            </p>
            <ul className="mt-10 flex flex-wrap gap-3">
              {serviceArea.towns.map((town) => (
                <li
                  key={town}
                  className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[0.975rem] text-ink"
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
            <div className="glass rounded-2xl p-5">
              <svg
                viewBox="0 0 320 260"
                role="img"
                aria-label="Schematische Karte des Einsatzgebiets"
                className="w-full"
              >
                <rect x="0" y="0" width="320" height="260" rx="12" fill="#F8FBFE" />
                <path
                  d="M36 190 C70 120, 110 90, 160 115 C205 138, 245 95, 290 140"
                  fill="none"
                  stroke="#D7E3EE"
                  strokeWidth="2"
                />
                <circle cx="98" cy="140" r="5" fill="#2F8FD8" />
                <text x="112" y="144" fontSize="12" fill="#5B6B78" fontFamily="system-ui, sans-serif">
                  Großräschen
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container-site py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="glass glass-sheen max-w-[40rem] p-7 sm:p-9" data-sheen="on">
            <h2 className="h-section max-w-[16ch]">Objekt in der Region?</h2>
            <p className="lead mt-5">Schildern Sie uns Standort und Bedarf – wir melden uns zeitnah.</p>
            <p className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Angebot anfragen
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
