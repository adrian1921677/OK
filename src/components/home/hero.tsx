import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { LineReveal } from "@/components/home/line-reveal";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
      <Image
        src="/images/hero-hebebuehne.jpg"
        alt="Fensterreiniger auf einer Hebebühne an einer Glasfassade – Platzhalter"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="relative flex min-h-[100svh] flex-col">
        <div className="container-site flex flex-1 flex-col pb-8 pt-6 sm:pb-10 sm:pt-8">
          <div className="flex justify-end">
            <p className="hero-badge">Seit über 10 Jahren im Lausitzer Seenland</p>
          </div>

          <div className="mt-auto max-w-[18ch] pt-24 sm:pt-28">
            <p className="mb-4 text-[0.8125rem] font-bold uppercase tracking-[0.16em] text-signal">
              {site.name}
            </p>
            <LineReveal
              as="h1"
              className="h-hero text-paper"
              lines={["Fenster.", "Treppenhaus.", "Büro."]}
            />
            <p className="mt-6 max-w-[28rem] text-[1.125rem] text-paper/90">
              Gebäudereinigung aus Großräschen – für Objekte, die den ersten Eindruck nicht dem Zufall überlassen.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={site.phone.href} className="btn btn-primary">
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">Anrufen: </span>
              {site.phone.display}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
