import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { Picture } from "@/components/picture";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { galleryPlaceholders } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Referenzen",
  description:
    "Einblicke in die Arbeit der Gebäudereinigung Kienle: Objektbilder und Eindrücke aus Fenster-, Treppenhaus- und Büroreinigung.",
  path: "/referenzen",
});

const layout = ["sm:col-span-7 aspect-[4/3]", "sm:col-span-5 aspect-[4/3] sm:aspect-auto", "sm:col-span-12 aspect-[4/3] sm:aspect-[21/9]"];

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        label="Referenzen"
        title="Objekte und Eindrücke."
        lead="Einblicke in Fenster-, Treppenhaus- und Büroreinigung – aktuell mit freien Beispielfotos, bis eigene Objektaufnahmen vorliegen."
      />

      <section className="pb-14 lg:pb-20">
        <div className="container-site">
          <Placeholder className="mb-8 max-w-[40rem]">
            Beispielbilder (Stock) zur Vorschau. Eigene Objektfotos ersetzen sie später. Keine Kundennamen ohne Freigabe.
          </Placeholder>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
            {galleryPlaceholders.map((item, index) => (
              <figure
                key={item.src}
                className={`media group ${layout[index] ?? layout[0]}`}
                data-reveal-image
                style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties}
              >
                <Picture
                  src={item.src}
                  alt={item.alt}
                  width={1600}
                  height={1100}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="absolute inset-0 block h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                  priority={index === 0}
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3.5 py-1.5 text-[0.875rem] font-medium text-ink backdrop-blur-sm">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel
        title="Ihr Objekt als nächstes?"
        text="Schildern Sie uns Ihr Gebäude. Wir sagen Ihnen, welche Reinigung sinnvoll ist und wie der Ablauf aussieht."
      />
    </>
  );
}
