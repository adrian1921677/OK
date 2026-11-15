"use client";

import Link from "next/link";
import { useState } from "react";
import { Picture } from "@/components/picture";
import { services } from "@/lib/site";

export function HomeServices() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="border-b border-line" aria-labelledby="leistungen-titel">
      <div className="container-site py-16 sm:py-20 lg:py-28">
        <div className="grid-12 items-end gap-y-4">
          <div className="col-span-12 lg:col-span-5">
            <p className="label" data-reveal>
              Leistungen
            </p>
            <h2 id="leistungen-titel" className="h-section mt-4 max-w-[14ch]" data-reveal>
              Drei Schwerpunkte, klar geführt.
            </h2>
          </div>
        </div>

        <ul className="mt-14 border-t border-line">
          {services.map((service) => {
            const isActive = active === service.slug;
            return (
              <li key={service.slug} className="border-b border-line">
                <Link
                  href={`/leistungen#${service.slug}`}
                  className="group relative grid-12 items-center gap-y-4 py-8 sm:py-10"
                  onMouseEnter={() => setActive(service.slug)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(service.slug)}
                  onBlur={() => setActive(null)}
                  data-reveal
                >
                  <span className="col-span-2 label text-muted/80 sm:col-span-1">{service.number}</span>
                  <div className="col-span-9 sm:col-span-7 lg:col-span-6">
                    <h3 className="h-sub">{service.title}</h3>
                    <p className="mt-2 max-w-[34rem] text-[0.975rem] text-muted sm:text-[1.0625rem]">{service.summary}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="col-span-1 col-start-12 justify-self-end text-accent opacity-70 transition-opacity group-hover:opacity-100"
                  >
                    →
                  </span>

                  <div
                    className={`pointer-events-none absolute right-0 top-1/2 hidden w-[15rem] -translate-y-1/2 overflow-hidden transition-opacity duration-500 lg:block ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  >
                    <div className="media aspect-[4/3]">
                      <Picture
                        src={service.image}
                        alt=""
                        width={560}
                        height={420}
                        sizes="15rem"
                        className="absolute inset-0 block h-full w-full"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
