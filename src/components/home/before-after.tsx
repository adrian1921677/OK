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
      <div className="container-site py-16 sm:py-20 lg:py-28">
        <div className="max-w-[34rem]" data-reveal>
          <p className="label">Vorher / Nachher</p>
          <h2 id={labelId} className="h-section mt-3">
            Schmutziges Glas, klar gezogen.
          </h2>
          <p className="lead mt-4">Ziehen Sie den Griff und vergleichen Sie den Unterschied.</p>
        </div>

        <div
          ref={trackRef}
          className="media relative mt-10 aspect-[16/10] touch-none select-none shadow-[0_18px_44px_rgba(47,143,216,0.1)]"
          data-reveal
          role="img"
          aria-label="Vergleich: beschlagenes Glas links, klare Scheibe rechts"
        >
          {/* Gleiches Scheiben-Motiv wie der Wipe-Effekt (klar / beschlagen) */}
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
            className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white"
            style={{ left: `${value}%` }}
            aria-hidden="true"
          >
            <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 shadow-[0_8px_24px_rgba(47,143,216,0.2)] backdrop-blur-[8px]">
              <span className="h-4 w-4 rounded-full bg-accent" />
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

          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/75 px-3 py-1 text-[0.75rem] font-medium text-ink backdrop-blur-[8px]">
            Vorher
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/75 px-3 py-1 text-[0.75rem] font-medium text-ink backdrop-blur-[8px]">
            Nachher
          </span>
        </div>
      </div>
    </section>
  );
}
