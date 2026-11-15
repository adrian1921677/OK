"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { services } from "@/lib/site";

const images: Record<string, { src: string; alt: string }> = {
  fensterreinigung: {
    src: "/images/leistung-fenster.jpg",
    alt: "Fensterreinigung – streifenfreie Scheiben",
  },
  treppenhausreinigung: {
    src: "/images/leistung-treppenhaus.jpg",
    alt: "Treppenhausreinigung – gepflegte Etagen",
  },
  bueroreinigung: {
    src: "/images/leistung-buero.jpg",
    alt: "Büroreinigung – saubere Arbeitsplätze",
  },
};

/**
 * Große nummerierte Leistungsliste. Auf Desktop folgt ein Vorschaubild dem Cursor.
 */
export function ServicesAccordion() {
  const [open, setOpen] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [reduced, setReduced] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover)");
    const sync = () => setReduced(mq.matches || !hover.matches);
    sync();
    mq.addEventListener("change", sync);
    hover.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      hover.removeEventListener("change", sync);
    };
  }, []);

  const onMove = useCallback(
    (event: React.MouseEvent) => {
      if (reduced || !listRef.current) return;
      const rect = listRef.current.getBoundingClientRect();
      setCursor({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        visible: true,
      });
    },
    [reduced],
  );

  const active = services[open] ?? services[0];
  const preview = images[active.slug];

  return (
    <section className="relative overflow-hidden py-16 lg:py-28">
      <div className="container-site">
        <div className="mb-10 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 data-reveal className="h-section max-w-[12ch]">
            Was wir reinigen
          </h2>
          <p data-reveal className="max-w-[28rem] text-[1.0625rem] text-muted lg:mb-1">
            Drei Schwerpunkte. Klar benannt. Ohne Umschweife – für Objekte in Großräschen und im Lausitzer Seenland.
          </p>
        </div>

        <div
          ref={listRef}
          onMouseMove={onMove}
          onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
          className="relative"
        >
          <ul className="border-t-2 border-ink">
            {services.map((service, index) => {
              const isOpen = open === index;
              const num = String(index + 1).padStart(2, "0");
              return (
                <li key={service.slug} className="border-b-2 border-ink">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(index)}
                    onMouseEnter={() => setOpen(index)}
                    className="group flex w-full cursor-pointer items-start gap-4 py-6 text-left sm:gap-8 sm:py-8 lg:gap-12"
                  >
                    <span className="svc-num shrink-0" aria-hidden="true">
                      {num}
                    </span>
                    <span className="min-w-0 flex-1 pt-1 sm:pt-3">
                      <span className="font-display block text-[clamp(1.75rem,5vw,3.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-ink transition-colors group-hover:text-ink">
                        {service.title}
                      </span>
                      <span
                        className={`mt-3 block max-w-[36rem] text-[1.0625rem] text-body transition-[max-height,opacity] duration-300 ${
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                        }`}
                      >
                        {service.summary}{" "}
                        <Link href={`/leistungen#${service.slug}`} className="link">
                          Details
                        </Link>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {!reduced && preview ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute z-10 hidden h-56 w-72 overflow-hidden border-2 border-ink bg-paper lg:block"
              style={{
                left: cursor.x + 28,
                top: cursor.y - 112,
                opacity: cursor.visible ? 1 : 0,
                transform: `translate3d(0,0,0) rotate(${cursor.visible ? -2 : 0}deg)`,
                transition: "opacity 0.2s ease",
              }}
            >
              <Image src={preview.src} alt="" fill sizes="288px" className="object-cover" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
