import Link from "next/link";
import { Picture } from "@/components/picture";
import { services } from "@/lib/site";

export function HomeServices() {
  return (
    <section className="bg-paper" aria-labelledby="leistungen-titel">
      <div className="container-site py-16 sm:py-20 lg:py-28">
        <div className="max-w-[34rem]" data-reveal>
          <p className="label">Leistungen</p>
          <h2 id="leistungen-titel" className="h-section mt-3">
            Drei Schwerpunkte, klar und hell.
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug} data-reveal style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}>
              <Link
                href={`/leistungen#${service.slug}`}
                className="group relative block overflow-hidden rounded-[8px]"
              >
                <div className="media aspect-[4/5]">
                  <Picture
                    src={service.image}
                    alt={service.imageAlt}
                    width={1400}
                    height={1750}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="absolute inset-0 block h-full w-full"
                    imgClassName="h-full w-full object-cover transition duration-500 ease-out group-hover:brightness-110 group-hover:saturate-110"
                  />
                </div>
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <div className="glass glass-sheen rounded-xl p-4 transition duration-500 group-hover:bg-white/75">
                    <h3 className="h-sub">{service.title}</h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{service.summary}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
