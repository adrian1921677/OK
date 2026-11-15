import { Picture } from "@/components/picture";
import { galleryPlaceholders } from "@/lib/site";

export function HomeImageStrip() {
  return (
    <section className="border-b border-line" aria-label="Eindrücke">
      <div className="container-site py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5 lg:gap-6">
          <figure className="sm:col-span-7" data-reveal>
            <div className="media aspect-[16/11]">
              <Picture
                src={galleryPlaceholders[0].src}
                alt={galleryPlaceholders[0].alt}
                reveal
                revealDelay="80ms"
                width={1600}
                height={1100}
                sizes="(min-width: 640px) 58vw, 100vw"
                className="absolute inset-0 block h-full w-full"
              />
            </div>
            <figcaption className="label mt-3">{galleryPlaceholders[0].caption}</figcaption>
          </figure>

          <figure className="sm:col-span-5 sm:row-span-2" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
            <div className="media aspect-[3/4] sm:h-full sm:min-h-[28rem] sm:aspect-auto">
              <Picture
                src={galleryPlaceholders[1].src}
                alt={galleryPlaceholders[1].alt}
                reveal
                revealDelay="160ms"
                width={1200}
                height={1600}
                sizes="(min-width: 640px) 40vw, 100vw"
                className="absolute inset-0 block h-full w-full"
              />
            </div>
            <figcaption className="label mt-3">{galleryPlaceholders[1].caption}</figcaption>
          </figure>

          <figure className="sm:col-span-7" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <div className="media aspect-[16/10]">
              <Picture
                src={galleryPlaceholders[2].src}
                alt={galleryPlaceholders[2].alt}
                reveal
                revealDelay="200ms"
                width={1600}
                height={1200}
                sizes="(min-width: 640px) 58vw, 100vw"
                className="absolute inset-0 block h-full w-full"
              />
            </div>
            <figcaption className="label mt-3">{galleryPlaceholders[2].caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
