import type { CSSProperties } from "react";
import { serviceArea } from "@/lib/site";

export function ServiceAreaSection() {
  const places = serviceArea.towns.length
    ? serviceArea.towns
    : [serviceArea.base, "Senftenberg", "Lauchhammer", "Schwarzheide", "Cottbus"];

  return (
    <section className="overflow-hidden border-y-2 border-ink bg-ink py-16 text-paper lg:py-24">
      <div className="container-site">
        <div className="mb-10 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 data-reveal className="h-section max-w-[16ch] text-paper">
            Einsatzgebiet
          </h2>
          <p data-reveal className="max-w-[26rem] text-[1.0625rem] text-ink-muted">
            {serviceArea.base} und das {serviceArea.region}. Kurze Wege. Feste Ansprechpartner vor Ort.
          </p>
        </div>

        <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3">
          {places.map((place, index) => (
            <li key={place} data-reveal style={{ "--reveal-delay": `${index * 40}ms` } as CSSProperties}>
              <span
                className={`font-display inline-block font-bold uppercase leading-[0.9] tracking-[-0.04em] ${
                  index === 0
                    ? "text-[clamp(2.5rem,8vw,6rem)] text-signal"
                    : "text-[clamp(1.5rem,4.5vw,3.25rem)] text-paper"
                }`}
              >
                {place}
                {index < places.length - 1 ? (
                  <span className="mx-2 text-signal sm:mx-3" aria-hidden="true">
                    /
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
