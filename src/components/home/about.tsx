import { WipeImage } from "@/components/home/wipe-image";
import { site } from "@/lib/site";

const facts = [
  { value: "10+", label: "Jahre im Seenland" },
  { value: "3", label: "Kernleistungen" },
  { value: "24h", label: "bis zum Angebot" },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28">
      <div className="container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
        <div className="relative lg:-rotate-1 lg:translate-y-6">
          <WipeImage
            src="/images/portrait-oliver-kienle.jpg"
            alt={`Porträt von ${site.owner} – Platzhalter`}
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="aspect-[4/5] border-2 border-ink"
            imageClassName="object-cover object-top"
          />
          <p className="mt-3 text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-muted">
            {site.owner} · Inhaber
          </p>
        </div>

        <div className="lg:pl-8 lg:pt-10">
          <p data-reveal className="font-display text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-[-0.035em] text-ink">
            „Sauberkeit ist kein Extra – sie ist der erste Eindruck Ihrer Immobilie. Und den machen wir richtig.“
          </p>
          <p data-reveal className="mt-6 max-w-[34rem] text-[1.125rem]">
            Ich bin {site.owner}. Seit über zehn Jahren reinige ich Fenster, Treppenhäuser und Büros in Großräschen und
            im Lausitzer Seenland – persönlich, planbar, ohne leere Versprechen.
          </p>

          <ul className="mt-12 grid grid-cols-3 gap-4 border-t-2 border-ink pt-8 sm:gap-8">
            {facts.map((fact) => (
              <li key={fact.label} data-reveal>
                <p className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-ink">
                  {fact.value}
                </p>
                <p className="mt-2 text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-muted">{fact.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
