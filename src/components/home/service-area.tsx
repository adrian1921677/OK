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
    <section className="section-surface" aria-labelledby="gebiet-titel">
      <div className="container-site grid-12 items-center gap-y-12 py-20 sm:py-24 lg:py-32">
        <div className="col-span-12 lg:col-span-5" data-reveal>
          <p className="label">Einsatzgebiet</p>
          <h2 id="gebiet-titel" className="h-section mt-4 max-w-[16ch]">
            Aus Großräschen in die Region.
          </h2>
          <p className="lead mt-6 max-w-[32rem]">
            Kurze Wege im {serviceArea.region}: Wir sind in {towns.slice(0, 4).join(", ")} und {towns[4]} für Sie
            unterwegs.
          </p>
          <ul className="mt-10 space-y-3">
            {towns.map((town) => (
              <li key={town} className="border-b border-ink/10 py-3 font-display text-xl tracking-[-0.01em] text-ink">
                {town}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="col-span-12 lg:col-span-6 lg:col-start-7"
          data-reveal
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
        >
          <div className="border border-ink/10 bg-paper p-4 sm:p-6">
            <svg
              viewBox="0 0 320 220"
              role="img"
              aria-label="Reduzierte Karte des Einsatzgebiets im Lausitzer Seenland"
              className="w-full"
            >
              <rect x="0" y="0" width="320" height="220" fill="#F7F5F0" />
              <path
                d="M36 168 C78 98, 118 78, 168 104 C214 128, 248 86, 292 118"
                fill="none"
                stroke="#DDD6CA"
                strokeWidth="1.5"
              />
              <path
                d="M48 70 C98 48, 140 58, 188 42 C230 28, 268 46, 296 68"
                fill="none"
                stroke="#E9DFCE"
                strokeWidth="1.25"
              />
              {towns.map((town) => {
                const pin = pins[town];
                const primary = town === "Großräschen";
                return (
                  <g key={town}>
                    <circle cx={pin.x} cy={pin.y} r={primary ? 4.5 : 3} fill={primary ? "#0D0D11" : "#6A655E"} />
                    <text
                      x={pin.x + 10}
                      y={pin.y + 4}
                      fontSize="11"
                      fill="#6A655E"
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
