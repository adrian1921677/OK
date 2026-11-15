"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

/**
 * Vorher/Nachher-Slider mit ziehbarem Griff – Treppenhaus.
 */
export function BeforeAfterSlider() {
  const id = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(event.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <section className="py-16 lg:py-28">
      <div className="container-site">
        <div className="mb-8 flex flex-col gap-3 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 data-reveal className="h-section max-w-[14ch]">
            Vorher. Nachher.
          </h2>
          <p data-reveal className="max-w-[24rem] text-muted">
            Ziehen Sie den Griff – so sieht der Unterschied in einem Treppenhaus aus.
          </p>
        </div>

        <div
          data-reveal
          ref={trackRef}
          className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink bg-paper-deep sm:aspect-[16/10]"
        >
          <Image
            src="/images/nachher-treppenhaus.jpg"
            alt="Treppenhaus nach der Reinigung"
            fill
            sizes="(min-width: 1280px) 78rem, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image
              src="/images/vorher-treppenhaus.jpg"
              alt="Treppenhaus vor der Reinigung"
              fill
              sizes="(min-width: 1280px) 78rem, 100vw"
              className="object-cover"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-y-0 z-10 w-0.5 bg-signal"
            style={{ left: `${pos}%` }}
          />

          <div
            role="slider"
            aria-labelledby={id}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)} Prozent Vorher sichtbar`}
            tabIndex={0}
            className="absolute top-1/2 z-20 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center border-2 border-ink bg-signal text-ink outline-none focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink"
            style={{ left: `${pos}%` }}
            onPointerDown={(event) => {
              event.preventDefault();
              dragging.current = true;
              setFromClientX(event.clientX);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") setPos((p) => Math.max(4, p - 3));
              if (event.key === "ArrowRight") setPos((p) => Math.min(96, p + 3));
            }}
          >
            <span className="font-display text-xs font-bold tracking-wide">◀▶</span>
          </div>

          <span className="absolute left-3 top-3 z-10 bg-ink px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-signal">
            Vorher
          </span>
          <span className="absolute right-3 top-3 z-10 bg-signal px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-wide text-ink">
            Nachher
          </span>
          <span id={id} className="sr-only">
            Vorher-Nachher-Vergleich Treppenhaus
          </span>
        </div>
      </div>
    </section>
  );
}
