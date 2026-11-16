import Link from "next/link";
import { Picture } from "@/components/picture";
import { aboutFacts, site } from "@/lib/site";

export function HomeAbout() {
  return (
    <section className="section pt-0 lg:pt-0" aria-labelledby="ueber-titel">
      <div className="container-site">
        <div className="panel grid items-center gap-x-12 gap-y-8 p-5 sm:p-8 lg:grid-cols-[0.8fr_1fr] lg:p-10">
          <div className="media aspect-[4/3] lg:aspect-[4/5]" data-reveal-image>
            <Picture
              src="/images/ueber-uns-raum.jpg"
              alt="Heller Besprechungsraum mit großen Glasflächen und Tageslicht"
              width={1200}
              height={1500}
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="absolute inset-0 block h-full w-full"
            />
          </div>

          <div data-reveal>
            <h2 id="ueber-titel" className="h-section max-w-[20ch]">
              Ihr zuverlässiger Partner für Sauberkeit und Werterhalt.
            </h2>
            <p className="mt-5 max-w-[34rem] text-muted">
              Bei Kienle Gebäudereinigung kümmern wir uns täglich um saubere Büros, gepflegte Treppenhäuser und
              streifenfreie Fenster. Mit einem erfahrenen Team, modernen Reinigungsmitteln und einem klaren Anspruch an
              Qualität sorgen wir für Sauberkeit, die bleibt – gründlich, pünktlich und zuverlässig.
            </p>

            <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-1 font-display text-[1.2rem] leading-tight text-ink sm:text-[1.35rem]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
              <p>
                <span className="font-script block text-[2.1rem] text-ink">{site.owner}</span>
                <span className="label mt-1 block">Inhaber</span>
              </p>
              <Link href="/ueber-uns" className="btn-secondary">
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
