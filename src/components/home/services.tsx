import Link from "next/link";
import { Picture } from "@/components/picture";
import { services } from "@/lib/site";

export function HomeServices() {
  return (
    <section className="bg-paper" aria-labelledby="leistungen-titel">
      <div className="container-site py-20 sm:py-24 lg:py-32">
        <div className="max-w-[36rem]" data-reveal>
          <p className="label">Leistungen</p>
          <h2 id="leistungen-titel" className="h-section mt-4">
            Drei Schwerpunkte, klar und hell.
          </h2>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <li key={service.slug} data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}>
              <Link href={`/leistungen#${service.slug}`} className="group block">
                <div className="media aspect-[4/5]">
                  <Picture
                    src={service.image}
                    alt={service.imageAlt}
                    width={1400}
                    height={1750}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="absolute inset-0 block h-full w-full"
                    imgClassName="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <p className="label">0{index + 1}</p>
                  <h3 className="h-sub mt-2">{service.title}</h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-muted">{service.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
