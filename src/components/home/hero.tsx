import Link from "next/link";
import { Picture } from "@/components/picture";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[min(92vh,54rem)] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Picture
          src="/images/hero-glasfassade.jpg"
          alt="Helle moderne Glasfassade mit Himmel"
          priority
          sizes="100vw"
          width={1920}
          height={1280}
          className="absolute inset-0 block h-full w-full"
          imgClassName="h-full w-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/20"
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative flex min-h-[min(92vh,54rem)] flex-col justify-end pb-14 pt-28 sm:pb-20 lg:justify-center lg:pb-28 lg:pt-24">
        <div className="max-w-[40rem]" data-reveal>
          <p className="font-script text-[1.85rem] text-cream/90 sm:text-[2.15rem]">{site.owner}</p>
          <h1 className="h-hero mt-4 text-cream">Klare Sicht. Saubere Räume.</h1>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-relaxed text-cream/75 sm:text-[1.125rem]">
            Gebäudereinigung Kienle aus Großräschen: Fenster, Treppenhäuser und Büros im Lausitzer Seenland – seit über
            zehn Jahren streifenfrei und verlässlich.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center bg-cream px-6 text-[0.9375rem] font-medium tracking-[0.02em] text-ink transition-opacity hover:opacity-85"
            >
              Angebot anfragen
            </Link>
            <a
              href={site.whatsapp.href}
              className="inline-flex min-h-12 items-center justify-center border border-cream/55 px-6 text-[0.9375rem] font-medium tracking-[0.02em] text-cream transition-colors hover:bg-cream/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
