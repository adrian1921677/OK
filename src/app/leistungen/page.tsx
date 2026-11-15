import Link from "next/link";
import { Picture } from "@/components/picture";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { services, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Leistungen",
  description:
    "Fensterreinigung, Treppenhausreinigung und Büroreinigung der Gebäudereinigung Kienle in Großräschen und im Lausitzer Seenland.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        label="Leistungen"
        title="Reinigung mit ruhiger Systematik."
        lead="Drei klar umrissene Leistungen für Hausverwaltungen, Wohnungsgesellschaften sowie Büros und Praxen."
      />

      <nav aria-label="Leistungen im Überblick" className="border-b border-line">
        <ul className="container-site flex flex-wrap gap-x-8 gap-y-3 py-6 text-[0.9375rem]">
          {services.map((service) => (
            <li key={service.slug}>
              <a href={`#${service.slug}`} className="text-link">
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          aria-labelledby={`${service.slug}-titel`}
          className="border-b border-line"
        >
          <div className="container-site grid-12 items-start gap-y-10 py-16 sm:py-20 lg:py-28">
            <div className={`col-span-12 lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-8 lg:order-2" : ""}`}>
              <div className="media aspect-[4/3]" data-reveal-image>
                <Picture
                  src={service.image}
                  alt={service.imageAlt}
                  width={1400}
                  height={1050}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="absolute inset-0 block h-full w-full"
                  priority={index === 0}
                />
              </div>
            </div>

            <div
              className={`col-span-12 lg:col-span-6 ${index % 2 === 1 ? "lg:col-start-1 lg:order-1" : "lg:col-start-7"}`}
              data-reveal
            >
              <p className="label">{service.number}</p>
              <h2 id={`${service.slug}-titel`} className="h-section mt-4">
                {service.title}
              </h2>
              <p className="mt-5 max-w-[34rem] text-muted">{service.summary}</p>
              {service.description.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-[34rem] text-muted">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-8 space-y-3 border-t border-line pt-6 text-[1.0625rem] text-ink">
                {service.points.map((point) => (
                  <li key={point} className="border-b border-line py-3 last:border-b-0">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-line">
        <div className="container-site grid-12 py-16 sm:py-20 lg:py-28">
          <div className="col-span-12 lg:col-span-7" data-reveal>
            <h2 className="h-section max-w-[16ch]">Passende Reinigung für Ihr Objekt.</h2>
            <p className="lead mt-5 max-w-[32rem]">
              Beschreiben Sie kurz Objekt und Bedarf. Wir melden uns mit einem klaren, unverbindlichen Angebot.
            </p>
            <p className="mt-8">
              <Link href="/kontakt" className="text-link-accent">
                Angebot anfragen →
              </Link>
              <span className="mx-4 text-line">|</span>
              <a href={site.phone.href} className="text-link">
                {site.phone.display}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
