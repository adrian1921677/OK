import { serviceArea } from "@/lib/site";

export function HomeServiceArea() {
  return (
    <section className="border-b border-line" aria-labelledby="gebiet-titel">
      <div className="container-site grid-12 gap-y-10 py-16 sm:py-20 lg:py-28">
        <div className="col-span-12 lg:col-span-6" data-reveal>
          <p className="label">Einsatzgebiet</p>
          <h2 id="gebiet-titel" className="h-section mt-4 max-w-[16ch]">
            Aus Großräschen in die Region.
          </h2>
          <p className="lead mt-6 max-w-[34rem]">
            Wir sind in {serviceArea.base}, {serviceArea.towns.slice(1, 5).join(", ")} und dem weiteren{" "}
            {serviceArea.region} für Sie unterwegs – kurze Wege, verlässliche Termine.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <svg viewBox="0 0 320 220" role="img" aria-label="Schematische Karte des Einsatzgebiets" className="w-full text-line">
            <rect x="1" y="1" width="318" height="218" fill="none" stroke="currentColor" strokeWidth="1" />
            <path
              d="M40 160 C80 90, 120 70, 170 95 C210 115, 250 80, 280 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="96" cy="118" r="3" fill="#6B6B6B" />
            <circle cx="148" cy="98" r="2.5" fill="#6B6B6B" />
            <circle cx="188" cy="128" r="2.5" fill="#6B6B6B" />
            <circle cx="228" cy="88" r="2.5" fill="#6B6B6B" />
            <circle cx="256" cy="132" r="2.5" fill="#6B6B6B" />
            <text x="104" y="116" fontSize="10" fill="#6B6B6B" fontFamily="system-ui, sans-serif">
              Großräschen
            </text>
          </svg>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem] text-muted">
            {serviceArea.towns.slice(0, 5).map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
