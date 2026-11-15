import Image from "next/image";
import { Check } from "lucide-react";
import type { CSSProperties } from "react";
import aboutImage from "@/assets/images/fensterreinigung-portrait.jpg";
import { ContactPanel } from "@/components/contact";
import { promiseIcons } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { promises, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Über uns",
  description:
    "Gebäudereinigung Kienle aus Großräschen: inhabergeführt von Oliver Kienle, seit über 10 Jahren Partner für Sauberkeit und Werterhalt im Lausitzer Seenland.",
  path: "/ueber-uns",
});

const values = [
  "Feste Ansprechpartner und planbare Einsätze",
  "Gründlich bis ins kleinste Detail",
  "Flexibel an Ihren Alltag angepasst",
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Über uns"
        title="Ihr Partner für Sauberkeit und Werterhalt"
        lead={`Inhabergeführt aus ${site.address.city} – seit über 10 Jahren.`}
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div data-reveal>
            <h2 className="h-section">Sauberkeit, die bleibt</h2>
            <p className="mt-5 max-w-[34rem]">
              Bei Kienle Gebäudereinigung kümmern wir uns täglich um saubere Büros, gepflegte Treppenhäuser und
              streifenfreie Fenster. Mit einem erfahrenen Team, modernen Reinigungsmitteln und einem klaren Anspruch an
              Qualität sorgen wir für Sauberkeit, die bleibt – gründlich, pünktlich und zuverlässig.
            </p>
            <p className="mt-4 max-w-[34rem]">
              Das Unternehmen wird von Inhaber {site.owner} geführt und hat seinen Sitz in der {site.address.street} in{" "}
              {site.address.city}.
            </p>
            <ul className="mt-6 space-y-3 font-medium text-ink">
              {values.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-strong"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={delay(90)} className="relative">
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-2/3 w-2/3 rounded-[1.5rem] bg-glass" />
            <div className="media aspect-[4/3] lg:aspect-[6/5]">
              <Image
                src={aboutImage}
                alt="Fensterreiniger wäscht die Scheibe eines Hauses mit dem Einwascher ein"
                fill
                placeholder="blur"
                loading="eager"
                sizes="(min-width: 1024px) 30rem, 100vw"
                className="object-cover object-[center_28%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inhaber */}
      <section className="pb-14 lg:pb-20">
        <div className="container-site">
          <div
            data-reveal
            className="panel grid gap-8 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12"
          >
            {site.showPlaceholders ? (
              <div className="grid aspect-[4/5] w-44 place-items-center rounded-2xl border border-dashed border-amber-600 bg-amber-50 p-4 text-center text-[0.9375rem] text-amber-950">
                <p>
                  <strong>Platzhalter:</strong> Porträtfoto
                </p>
              </div>
            ) : null}
            <div>
              <h2 className="h-section">{site.owner}</h2>
              <p className="mt-4 max-w-[34rem]">
                {site.owner} ist Inhaber der {site.name} und Ihr persönlicher Ansprechpartner – von der ersten Anfrage
                bis zur laufenden Reinigung.
              </p>
              <Placeholder className="mt-5 max-w-[34rem]">
                Persönliche Vorstellung von Herrn Kienle (Werdegang, Gründung, Team, was ihm bei der Arbeit wichtig
                ist). Diese Angaben liegen noch nicht vor und werden nicht erfunden.
              </Placeholder>
            </div>
          </div>
        </div>
      </section>

      {/* Versprechen */}
      <section className="pb-14 lg:pb-20">
        <div className="container-site">
          <h2 data-reveal className="h-section">
            Unser Anspruch an jede Reinigung
          </h2>
          <ul className="mt-9 grid gap-4 md:grid-cols-3">
            {promises.map((item, index) => {
              const dark = index === 1;
              const Icon = promiseIcons[item.icon];
              return (
                <li
                  key={item.title}
                  data-reveal
                  style={delay(index * 90)}
                  className={`relative overflow-hidden rounded-3xl p-7 ${dark ? "bg-ink" : "bg-mist"}`}
                >
                  {dark ? <div aria-hidden="true" className="swaths" /> : null}
                  <span aria-hidden="true" className={`icon-tile ${dark ? "icon-tile-solid" : ""}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className={`h-sub mt-5 ${dark ? "text-white" : ""}`}>{item.title}</h3>
                  <p className={`mt-1.5 text-[0.9375rem] ${dark ? "text-ink-muted" : ""}`}>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
