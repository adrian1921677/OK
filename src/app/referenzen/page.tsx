import Link from "next/link";
import { Picture } from "@/components/picture";
import { PageHero } from "@/components/page-hero";
import { Placeholder } from "@/components/placeholder";
import { pageMetadata } from "@/lib/metadata";
import { galleryPlaceholders, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Referenzen",
  description:
    "Einblicke in die Arbeit der Gebäudereinigung Kienle: Objektbilder und Eindrücke aus Fenster-, Treppenhaus- und Büroreinigung.",
  path: "/referenzen",
});

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        label="Referenzen"
        title="Objekte und Eindrücke."
        lead="Einblicke in Fenster-, Treppenhaus- und Büroreinigung – aktuell mit freien Beispielfotos, bis eigene Objektaufnahmen vorliegen."
      />

      <section className="bg-paper">
        <div className="container-site py-20 sm:py-24 lg:py-32">
          {site.showPlaceholders ? (
            <Placeholder className="mb-10 max-w-[40rem]">
              Beispielbilder (Stock) zur Vorschau. Eigene Objektfotos ersetzen sie später. Keine Kundennamen ohne Freigabe.
            </Placeholder>
          ) : null}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 sm:gap-6">
            {galleryPlaceholders.map((item, index) => (
              <figure
                key={item.src}
                className={
                  index === 0 ? "sm:col-span-7" : index === 1 ? "sm:col-span-5" : "sm:col-span-12 lg:col-span-8 lg:col-start-3"
                }
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
              >
                <div className={`media ${index === 1 ? "aspect-[3/4]" : "aspect-[16/11]"}`}>
                  <Picture
                    src={item.src}
                    alt={item.alt}
                    width={1600}
                    height={index === 1 ? 2000 : 1100}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="absolute inset-0 block h-full w-full"
                    priority={index === 0}
                  />
                </div>
                <figcaption className="label mt-4">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ink">
        <div className="container-site py-20 sm:py-24 lg:py-32" data-reveal>
          <div className="max-w-[40rem]">
            <h2 className="h-section max-w-[16ch] text-cream">Referenzobjekt besprechen.</h2>
            <p className="mt-5 max-w-[32rem] text-cream/70">
              Schildern Sie uns Ihr Gebäude. Wir sagen Ihnen, welche Reinigung sinnvoll ist und wie der Ablauf aussieht.
            </p>
            <p className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center bg-cream px-6 text-[0.9375rem] font-medium text-ink transition-opacity hover:opacity-85"
              >
                Angebot anfragen
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
