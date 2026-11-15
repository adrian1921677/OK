import Link from "next/link";
import { Picture } from "@/components/picture";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[min(88vh,52rem)] overflow-hidden">
      <div className="absolute inset-0">
        <Picture
          src="/images/hero-glasfassade.jpg"
          alt="Helle moderne Glasfassade mit Himmel"
          priority
          sizes="100vw"
          width={1920}
          height={1280}
          className="absolute inset-0 block h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-hero-soft/80 via-white/25 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative flex min-h-[min(88vh,52rem)] items-end pb-12 pt-28 sm:pb-16 lg:items-center lg:pb-24 lg:pt-20">
        <div
          className="glass glass-sheen max-w-[34rem] p-6 sm:p-8 lg:p-10"
          data-reveal
          data-sheen="on"
        >
          <h1 className="h-hero">Klare Sicht. Saubere Räume.</h1>
          <p className="lead mt-5 max-w-[30rem]">
            Gebäudereinigung Kienle aus Großräschen: Fenster, Treppenhäuser und Büros im Lausitzer Seenland – seit über
            zehn Jahren streifenfrei und verlässlich.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-primary">
              Angebot anfragen
            </Link>
            <a href={site.whatsapp.href} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
