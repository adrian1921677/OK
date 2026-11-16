import { serviceArea } from "@/lib/site";

const SCALE = 4; // Pixel pro Kilometer
const CX = 152;
const CY = 136;
const rings = [10, 20, 30];
const labelLeft = new Set(["Lauchhammer"]);

/**
 * Schematische Karte: Orte liegen maßstäblich zu Großräschen,
 * die Ringe zeigen 10, 20 und 30 Kilometer Entfernung.
 */
export function AreaMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 272"
      role="img"
      aria-label={`Karte des Einsatzgebiets: ${serviceArea.towns.map((town) => town.name).join(", ")} im Umkreis von rund 30 Kilometern um Großräschen`}
      className={className}
    >
      {rings.map((km) => (
        <g key={km}>
          <circle
            cx={CX}
            cy={CY}
            r={km * SCALE}
            fill={km === 30 ? "var(--color-paper)" : "none"}
            fillOpacity={0.55}
            stroke="var(--color-accent)"
            strokeOpacity={0.28}
            strokeDasharray="2 4"
          />
          <text
            x={CX - km * SCALE + 4}
            y={CY - 4}
            textAnchor="start"
            fontSize="8"
            fill="var(--color-muted)"
            fontFamily="var(--font-inter), system-ui, sans-serif"
          >
            {km} km
          </text>
        </g>
      ))}

      {serviceArea.towns.map((town) => {
        const x = CX + town.x * SCALE;
        const y = CY + town.y * SCALE;
        const base = town.km === 0;
        const left = labelLeft.has(town.name);
        return (
          <g key={town.name}>
            {base ? <circle className="map-pulse" cx={x} cy={y} r={6} fill="var(--color-accent)" opacity={0} /> : null}
            <circle
              cx={x}
              cy={y}
              r={base ? 6 : 3.5}
              fill={base ? "var(--color-accent)" : "var(--color-paper)"}
              stroke="var(--color-accent)"
              strokeWidth={base ? 0 : 1.5}
            />
            <text
              x={left ? x - 8 : x + (base ? 11 : 8)}
              y={base ? y - 8 : y + 3.5}
              textAnchor={left ? "end" : "start"}
              fontSize={base ? 12 : 10.5}
              fontWeight={base ? 500 : 400}
              fill="var(--color-ink)"
              fontFamily="var(--font-inter), system-ui, sans-serif"
            >
              {town.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
