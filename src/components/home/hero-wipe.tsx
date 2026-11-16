"use client";

import { useEffect, useState } from "react";
import { Picture } from "@/components/picture";

const REST = 62;

/**
 * Der eine laute Moment der Seite: Die beschlagene Scheibe wird beim Laden
 * freigewischt. Danach lässt sich die Kante ziehen (Maus, Finger, Pfeiltasten).
 */
export function HeroWipe() {
  const [value, setValue] = useState(REST);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setValue(0);
    const timer = window.setTimeout(() => {
      const startedAt = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - startedAt) / 1700);
        setValue(REST * (1 - Math.pow(1 - t, 4)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, 450);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, []);

  const imgClass = "h-full w-full object-cover object-[78%_100%]";

  return (
    <div className="relative">
      <div className="media aspect-[4/3] select-none sm:aspect-[16/11] lg:aspect-[5/6]">
        <Picture
          src="/images/wipe-klar.jpg"
          alt="Helle Glasfassade mit klaren Scheiben vor blauem Himmel"
          priority
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 34rem, 100vw"
          widths={[800, 1600]}
          className="absolute inset-0 block h-full w-full"
          imgClassName={imgClass}
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${value}%)` }} aria-hidden="true">
          <Picture
            src="/images/wipe-beschlagen.jpg"
            alt=""
            priority
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 34rem, 100vw"
          widths={[800, 1600]}
            className="absolute inset-0 block h-full w-full"
            imgClassName={imgClass}
          />
        </div>

        {/* Himmel leicht einfärben, damit die helle Aufnahme auf weißer Seite eine klare Kante behält */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-[#9fcfe0]/70 via-[#cfe6ee]/35 to-transparent mix-blend-multiply shadow-[inset_0_0_0_1px_rgba(12,46,58,0.08)]"
          aria-hidden="true"
        />

        {/* Abzieher-Kante */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-accent shadow-[0_8px_24px_-6px_rgba(12,46,58,0.45)]">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        <label className="sr-only" htmlFor="hero-wipe">
          Scheibe freiwischen: Anteil der gereinigten Fläche
        </label>
        <input
          id="hero-wipe"
          type="range"
          min={4}
          max={96}
          value={Math.round(Math.min(96, Math.max(4, value)))}
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
