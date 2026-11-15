import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import { ContactPanel } from "@/components/contact";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Referenzen & Galerie",
  description:
    "Einblicke in die Arbeit der Gebäudereinigung Kienle aus Großräschen: Bilder aus Fensterreinigung, Treppenhausreinigung und Büroreinigung.",
  path: "/referenzen",
});

type GalleryImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

/**
 * Echte Unternehmensbilder hier eintragen. Dateien nach src/assets/galerie
 * legen, oben importieren und mit aussagekräftigem Alt-Text ergänzen:
 *
 *   import treppenhaus01 from "@/assets/galerie/treppenhaus-01.jpg";
 *   { src: treppenhaus01, alt: "Gereinigtes Treppenhaus …", caption: "Treppenhausreinigung" }
 *
 * Keine Stockfotos und keine Kundennamen ohne Freigabe.
 */
const gallery: GalleryImage[] = [];

const placeholderSlots = [
  "Fensterreinigung im Einsatz",
  "Treppenhaus nach der Reinigung",
  "Büroreinigung",
  "Team und Ausstattung",
  "Vorher-Nachher-Vergleich",
  "Objekt aus der Region",
];

const delay = (index: number) => ({ "--reveal-delay": `${(index % 3) * 80}ms` }) as CSSProperties;

export default function ReferenzenPage() {
  const hasImages = gallery.length > 0;

  return (
    <>
      <PageHero
        breadcrumb="Referenzen"
        title="Einblicke in unsere Arbeit"
        lead={
          hasImages
            ? "Echte Bilder aus echten Einsätzen – damit Sie sehen, wie wir arbeiten."
            : "Wir zeigen hier ausschließlich eigene Aufnahmen. Die ersten Bilder folgen in Kürze."
        }
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site">
          <h2 className="sr-only">Galerie</h2>
          {hasImages ? (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <li key={item.src.src} data-reveal style={delay(index)}>
                  <figure className="zoom">
                    <div className="media aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {item.caption ? (
                      <figcaption className="mt-2 text-[0.9375rem] text-muted">{item.caption}</figcaption>
                    ) : null}
                  </figure>
                </li>
              ))}
            </ul>
          ) : site.showPlaceholders ? (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {placeholderSlots.map((slot, index) => (
                <li
                  key={slot}
                  data-reveal
                  style={delay(index)}
                  className="grid aspect-[4/3] place-items-center rounded-[1.25rem] border border-dashed border-amber-600 bg-amber-50 p-6 text-center text-[0.9375rem] text-amber-950"
                >
                  <p>
                    <strong>Platzhalter:</strong> {slot}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <ContactPanel
        title="Überzeugen Sie sich selbst"
        text={"Fragen Sie unverbindlich an. Sie erhalten innerhalb von 24 Stunden ein kostenloses Angebot."}
      />
    </>
  );
}
