import Link from "next/link";
import { AreaMap } from "@/components/area-map";
import { serviceArea } from "@/lib/site";

export function HomeServiceArea() {
  return (
    <section className="section pt-0 lg:pt-0" aria-labelledby="gebiet-titel">
      <div className="container-site grid items-center gap-x-14 gap-y-8 lg:grid-cols-[1fr_1.05fr]">
        <div data-reveal>
          <h2 id="gebiet-titel" className="h-section max-w-[16ch]">
            Aus Großräschen in die Region.
          </h2>
          <p className="mt-5 max-w-[30rem] text-muted">
            Kurze Wege im {serviceArea.region}: Wir betreuen Objekte im Umkreis von rund 30 Kilometern – planbar und
            mit festen Terminen.
          </p>
          <ul className="mt-7 flex max-w-[30rem] flex-wrap gap-2">
            {serviceArea.towns.map((town) => (
              <li
                key={town.name}
                className={`rounded-full border px-3.5 py-1.5 text-[0.9375rem] ${
                  town.km === 0 ? "border-accent bg-accent text-white" : "border-line text-ink"
                }`}
              >
                {town.name}
              </li>
            ))}
          </ul>
          <p className="mt-7">
            <Link href="/einsatzgebiet" className="text-link-accent">
              Einsatzgebiet ansehen
            </Link>
          </p>
        </div>

        <div className="panel p-4 sm:p-8" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <AreaMap className="mx-auto w-full max-w-[30rem]" />
        </div>
      </div>
    </section>
  );
}
