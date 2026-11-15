import Image from "next/image";
import { ContactPanel } from "@/components/contact";
import { serviceIcons } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Leistungen: Fenster-, Treppenhaus- und Büroreinigung",
  description:
    "Fensterreinigung, Treppenhausreinigung und Büroreinigung in Großräschen und im Lausitzer Seenland. Gründlich, zuverlässig und flexibel – Angebot innerhalb von 24 Stunden.",
  path: "/leistungen",
});

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        breadcrumb="Leistungen"
        title={"Wir reinigen mit System – gründlich, zuverlässig, flexibel."}
        lead="Ob Büro, Praxis oder Treppenhaus – wir sorgen für saubere Räume, in denen sich alle wohlfühlen."
      />

      {/* Sprungmarken */}
      <nav aria-label="Leistungen im Überblick" className="pb-10 lg:pb-14">
        <ul className="container-site flex flex-wrap gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-flex min-h-11 items-center rounded-full bg-mist px-5 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((service, index) => {
        const reversed = index % 2 === 1;
        const Icon = serviceIcons[service.icon];
        return (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-titel`}
            className="pb-14 lg:pb-20"
          >
            <div className="container-site grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div data-reveal className={`relative ${reversed ? "lg:order-2" : ""}`}>
                <div
                  aria-hidden="true"
                  className={`absolute -bottom-3 h-2/3 w-2/3 rounded-[1.5rem] bg-glass ${reversed ? "-right-3" : "-left-3"}`}
                />
                <div className="media aspect-[3/2]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    placeholder="blur"
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 33rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className={`icon-tile icon-tile-solid absolute -top-4 h-12 w-12 shadow-lg shadow-ink/10 ${reversed ? "right-6" : "left-6"}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <div data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
                <h2 id={`${service.slug}-titel`} className="h-section">
                  {service.title}
                </h2>
                <p className="lead mt-3 font-medium text-ink">{service.summary}</p>
                {service.description.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-[34rem]">
                    {paragraph}
                  </p>
                ))}
                <ul className="list-dots mt-6 space-y-2 font-medium text-ink">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Placeholder className="mt-7 max-w-[34rem]">
                  Genauer Leistungsumfang der {service.title} (z.&nbsp;B. Intervalle, Zusatzleistungen, Objektarten) ist
                  noch von Herrn Kienle zu bestätigen.
                </Placeholder>
              </div>
            </div>
          </section>
        );
      })}

      <ContactPanel
        title="Welche Reinigung brauchen Sie?"
        text={
          "Beschreiben Sie uns kurz Ihr Objekt. Sie erhalten innerhalb von 24 Stunden ein kostenloses, unverbindliches Angebot."
        }
      />
    </>
  );
}
