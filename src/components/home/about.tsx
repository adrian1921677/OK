import { Picture } from "@/components/picture";
import { aboutFacts, site } from "@/lib/site";

export function HomeAbout() {
  return (
    <section className="section-cream" aria-labelledby="ueber-titel">
      <div className="container-site grid-12 items-center gap-y-12 py-20 sm:py-24 lg:py-32">
        <div className="col-span-12 lg:col-span-6" data-reveal-image>
          <div className="media aspect-[4/5] max-w-[34rem]">
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
          <h2 id="ueber-titel" className="h-section mt-4 max-w-[16ch]">
            Familienbetrieb mit klarer Haltung.
          </h2>
          <p className="mt-6 text-muted">
            {site.owner} führt die Gebäudereinigung Kienle persönlich – aus Großräschen, für Hausverwaltungen und
            Unternehmen im Lausitzer Seenland. Kurze Wege, feste Ansprechpartner, Arbeit, die sich nicht aufdrängt,
            sondern Räume einfach klarer wirken lässt.
          </p>
          <ul className="mt-10 space-y-5 border-t border-ink/15 pt-7">
            {aboutFacts.map((fact) => (
              <li key={fact.label} className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="label">{fact.label}</span>
                <span className="font-display text-[1.25rem] tracking-[-0.01em] text-ink">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
