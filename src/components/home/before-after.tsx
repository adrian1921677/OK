"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

export function HomeBeforeAfter() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(52);
  const labelId = useId();

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(96, Math.max(4, next)));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let dragging = false;

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      el.setPointerCapture(event.pointerId);
      setFromClientX(event.clientX);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      setFromClientX(event.clientX);
    };
    const onPointerUp = () => {
      dragging = false;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [setFromClientX]);

  return (
    <section className="bg-paper" aria-labelledby={labelId}>
      <div className="container-site py-20 sm:py-24 lg:py-32">
        <div className="max-w-[36rem]" data-reveal>
          <p className="label">Vorher / Nachher</p>
          <h2 id={labelId} className="h-section mt-4">
            Schmutziges Glas, klar gezogen.
          </h2>
          <p className="lead mt-5">Ziehen Sie den Griff und vergleichen Sie den Unterschied.</p>
        </div>

        <div
          ref={trackRef}
          className="media relative mt-12 aspect-[16/10] touch-none select-none"
          data-reveal
          role="img"
          aria-label="Vergleich: beschlagenes Glas links, klare Scheibe rechts"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wipe-klar.jpg"
            alt=""
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
            loading="lazy"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wipe-beschlagen.jpg"
            alt=""
            width={1600}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
            decoding="async"
            loading="lazy"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-px bg-cream"
            style={{ left: `${value}%` }}
            aria-hidden="true"
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-cream/80 bg-paper/90">
              <span className="h-2 w-2 rounded-full bg-ink" />
            </span>
          </div>

          <label className="sr-only" htmlFor="ba-range">
            Vorher-Nachher-Vergleich
          </label>
          <input
            id="ba-range"
            type="range"
            min={4}
            max={96}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          />

          <span className="pointer-events-none absolute left-4 top-4 bg-paper/85 px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-ink">
            Vorher
          </span>
          <span className="pointer-events-none absolute right-4 top-4 bg-paper/85 px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-ink">
            Nachher
          </span>
        </div>
      </div>
    </section>
  );
}
