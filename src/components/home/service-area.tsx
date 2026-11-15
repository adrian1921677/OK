import { serviceArea } from "@/lib/site";

const towns = ["Großräschen", "Senftenberg", "Lauchhammer", "Schwarzheide", "Cottbus"] as const;

const pins: Record<(typeof towns)[number], { x: number; y: number }> = {
  Großräschen: { x: 118, y: 118 },
  Senftenberg: { x: 168, y: 148 },
  Lauchhammer: { x: 92, y: 96 },
  Schwarzheide: { x: 148, y: 88 },
  Cottbus: { x: 236, y: 132 },
};

export function HomeServiceArea() {
  return (
    <section className="section-ice" aria-labelledby="gebiet-titel">
      <div className="container-site grid-12 items-center gap-y-10 py-16 sm:py-20 lg:py-28">
        <div className="col-span-12 lg:col-span-5" data-reveal>
          <p className="label">Einsatzgebiet</p>
          <h2 id="gebiet-titel" className="h-section mt-3 max-w-[16ch]">
            Aus Großräschen in die Region.
          </h2>
          <p className="lead mt-5 max-w-[32rem]">
            Kurze Wege im {serviceArea.region}: Wir sind in {towns.slice(0, 4).join(", ")} und {towns[4]} für Sie
            unterwegs.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
            {towns.map((town) => (
              <li
                key={town}
                className="rounded-full border border-white/70 bg-white/70 px-3.5 py-1.5 text-[0.9375rem] text-ink shadow-[0_6px_18px_rgba(47,143,216,0.06)]"
              >
                {town}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <div className="glass rounded-2xl p-4 sm:p-6">
            <svg
              viewBox="0 0 320 220"
              role="img"
              aria-label="Reduzierte Karte des Einsatzgebiets im Lausitzer Seenland"
              className="w-full"
            >
              <rect x="0" y="0" width="320" height="220" rx="12" fill="#F8FBFE" />
              <path
                d="M36 168 C78 98, 118 78, 168 104 C214 128, 248 86, 292 118"
                fill="none"
                stroke="#D7E3EE"
                strokeWidth="2"
              />
              <path
                d="M48 70 C98 48, 140 58, 188 42 C230 28, 268 46, 296 68"
                fill="none"
                stroke="#E4EEF6"
                strokeWidth="1.5"
              />
              {towns.map((town) => {
                const pin = pins[town];
                const primary = town === "Großräschen";
                return (
                  <g key={town}>
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={primary ? 5 : 3.5}
                      fill={primary ? "#2F8FD8" : "#8AA8BD"}
                    />
                    <text
                      x={pin.x + 10}
                      y={pin.y + 4}
                      fontSize="11"
                      fill="#5B6B78"
                      fontFamily="var(--font-inter), system-ui, sans-serif"
                    >
                      {town}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
