import Link from "next/link";
import { RiseText } from "@/components/rise-text";
import { promises, site } from "@/lib/site";
import { HeroWipe } from "./hero-wipe";

const icons = {
  shield: <path d="M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9.5-4.1-1.9-7-5.3-7-9.5V6l7-3zM9 12l2.2 2.2 4.3-4.4" />,
  team: (
    <path d="M9 11a3.2 3.2 0 100-6.4A3.2 3.2 0 009 11zM3 19c.4-3.2 2.8-5 6-5s5.6 1.8 6 5M16.5 11a2.7 2.7 0 000-5.400M18 14.300c1.700.7 2.800 2.300 3 4.700" />
  ),
  clock: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.2 2" />,
};

export function HomeHero() {
  return (
    <section className="overflow-x-clip">
      <div className="container-site pt-8 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="load-fade label" style={{ "--delay": "0ms" } as React.CSSProperties}>
              Gebäudereinigung in {site.address.city} und im Lausitzer Seenland
            </p>
            <h1 className="h-hero mt-4">
              <RiseText text="Klare Sicht." />
              <br />
              <RiseText text="Saubere Räume." start={2} />
            </h1>
            <p className="load-fade lead mt-6 max-w-[31rem]" style={{ "--delay": "450ms" } as React.CSSProperties}>
              Büroreinigung, Treppenhäuser, Fenster und mehr – wir bringen Sauberkeit mit System in Ihre Immobilie. Seit
              über 10 Jahren.
            </p>
            <div className="load-fade mt-8 flex flex-wrap gap-3" style={{ "--delay": "600ms" } as React.CSSProperties}>
              <Link href="/kontakt" className="btn-primary">
                Unverbindlich anfragen
              </Link>
              <a href={site.phone.href} className="btn-secondary">
                {site.phone.display}
              </a>
            </div>
            <p className="load-fade mt-5 text-[0.875rem] text-muted" style={{ "--delay": "700ms" } as React.CSSProperties}>
              Ihr Angebot kommt innerhalb von 24 Stunden, kostenlos.
            </p>
          </div>

          <div className="lg:pl-8">
            <HeroWipe />
          </div>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-3 lg:mt-20" data-reveal>
          {promises.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint text-accent">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[item.icon]}
                </svg>
              </span>
              <div>
                <h2 className="font-sans text-[1rem] font-medium tracking-normal text-ink">{item.title}</h2>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
