"use client";

import Link from "next/link";
import { useState } from "react";
import { Picture } from "@/components/picture";
import { services } from "@/lib/site";

/**
 * Leistungen als Liste mit einem Bild, das zur aktiven Zeile wechselt.
 * Zeiger, Fokus und Tippen aktivieren eine Zeile; der Link führt zur Detailseite.
 */
export function HomeServices() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" aria-labelledby="leistungen-titel">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4" data-reveal>
          <h2 id="leistungen-titel" className="h-section max-w-[18ch]">
            Was wir für Sie reinigen
          </h2>
          <p className="max-w-[26rem] text-muted">
            Für Hausverwaltungen, Wohnungsgesellschaften, Büros und Praxen. Umfang und Rhythmus halten wir im Angebot
            fest.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-x-12 gap-y-8 lg:mt-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="media order-first aspect-[4/3] lg:order-last lg:aspect-auto lg:min-h-[26rem]" data-reveal-image>
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out-soft)] ${
                  index === active ? "opacity-100" : "scale-[1.03] opacity-0"
                }`}
                aria-hidden={index !== active}
              >
                <Picture
                  src={service.image}
                  alt={service.imageAlt}
                  width={1400}
                  height={1050}
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="absolute inset-0 block h-full w-full"
                />
              </div>
            ))}
          </div>

          <ul className="flex flex-col justify-center" data-reveal>
            {services.map((service, index) => {
              const isActive = index === active;
              return (
                <li
                  key={service.slug}
                  className="border-b border-line first:border-t"
                  onPointerEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <Link
                    href={`/leistungen#${service.slug}`}
                    className="group block py-5 sm:py-6"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span
                        className={`font-display text-[1.6rem] leading-tight transition-colors duration-300 sm:text-[1.9rem] ${
                          isActive ? "text-accent" : "text-ink"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive ? "border-accent bg-accent text-white" : "border-line text-muted"
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12l8-8M6 4h6v6" />
                        </svg>
                      </span>
                    </span>
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out-soft)] ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block max-w-[30rem] pt-2 text-muted">{service.summary}</span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
