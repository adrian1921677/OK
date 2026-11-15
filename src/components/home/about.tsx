import { Picture } from "@/components/picture";
import { aboutFacts, site } from "@/lib/site";

export function HomeAbout() {
  return (
    <section className="bg-paper" aria-labelledby="ueber-titel">
      <div className="container-site grid-12 items-center gap-y-10 py-16 sm:py-20 lg:py-28">
        <div className="col-span-12 lg:col-span-6" data-reveal-image>
          <div className="media aspect-[4/5] max-w-[34rem] shadow-[0_18px_40px_rgba(47,143,216,0.1)]">
            <Picture
              src="/images/ueber-uns-raum.jpg"
              alt="Heller Innenraum mit großen Glasflächen und Tageslicht"
              width={1200}
              height={1500}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="absolute inset-0 block h-full w-full"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal>
          <p className="label">Über uns</p>
          <h2 id="ueber-titel" className="h-section mt-3 max-w-[16ch]">
            Familienbetrieb mit klarer Haltung.
          </h2>
          <p className="mt-5 text-muted">
            {site.owner} führt die Gebäudereinigung Kienle persönlich – aus Großräschen, für Hausverwaltungen und
            Unternehmen im Lausitzer Seenland. Kurze Wege, feste Ansprechpartner, Arbeit, die sich nicht aufdrängt,
            sondern Räume einfach klarer wirken lässt.
          </p>
          <ul className="mt-8 space-y-4 border-t border-line pt-6">
            {aboutFacts.map((fact) => (
              <li key={fact.label} className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="label">{fact.label}</span>
                <span className="font-display text-[1.125rem] tracking-[-0.02em] text-ink">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
