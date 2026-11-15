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
        lead="Hier erscheinen ausschließlich eigene Aufnahmen. Bis dahin markieren wir die Bildplätze klar als Platzhalter."
      />

      <section className="bg-paper">
        <div className="container-site py-16 sm:py-20 lg:py-28">
          {site.showPlaceholders ? (
            <Placeholder className="mb-10 max-w-[40rem]">
              Echte Objektfotos ersetzen die Glas-Platzhalter. Keine Kundennamen ohne Freigabe.
            </Placeholder>
          ) : null}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-5">
            {galleryPlaceholders.map((item, index) => (
              <figure
                key={item.src}
                className={
                  index === 0 ? "sm:col-span-7" : index === 1 ? "sm:col-span-5" : "sm:col-span-12 lg:col-span-8 lg:col-start-3"
                }
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
              >
                <div className={`media shadow-[0_14px_32px_rgba(47,143,216,0.08)] ${index === 1 ? "aspect-[3/4]" : "aspect-[16/11]"}`}>
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
                <figcaption className="label mt-3">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft">
        <div className="container-site py-16 sm:py-20 lg:py-28" data-reveal>
          <div className="glass glass-sheen max-w-[40rem] p-7 sm:p-9" data-sheen="on">
            <h2 className="h-section max-w-[16ch]">Referenzobjekt besprechen.</h2>
            <p className="lead mt-5 max-w-[32rem]">
              Schildern Sie uns Ihr Gebäude. Wir sagen Ihnen, welche Reinigung sinnvoll ist und wie der Ablauf aussieht.
            </p>
            <p className="mt-8">
              <Link href="/kontakt" className="btn-primary">
                Angebot anfragen
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
