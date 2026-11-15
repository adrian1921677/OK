"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Einziger Wow-Moment: beschlagenes Glas wird per Scroll/Cursor freigewischt
 * und gibt die klare Fassade darunter frei. Bei reduced-motion: nur klares Bild.
 */
export function HomeGlassWipe() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const updateFromScroll = () => {
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const start = view * 0.92;
      const end = Math.max(view * -0.05, -rect.height * 0.35);
      const span = start - end || 1;
      const raw = (start - rect.top) / span;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const fromPointer = Math.min(1, Math.max(0, x * 0.7 + (1 - y) * 0.3));
    setProgress((prev) => Math.max(prev, fromPointer));
  }

  const wipe = Math.round(progress * 100);

  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-32" aria-labelledby="wipe-titel">
      <div className="container-site">
        <div className="max-w-[36rem]" data-reveal>
          <p className="label">Streifenfrei</p>
          <h2 id="wipe-titel" className="h-section mt-4">
            Vom Beschlag zur klaren Sicht.
          </h2>
          <p className="lead mt-5">
            Scrollen oder mit dem Zeiger über das Glas fahren – die Fläche wird freigewischt.
          </p>
        </div>

        <div
          ref={ref}
          className="media relative mt-12 aspect-[16/10] cursor-ew-resize"
          onPointerMove={onPointerMove}
          role="img"
          aria-label="Beschlagenes Glas wird freigewischt und zeigt darunter die klare Fassade"
          data-reveal
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
          {!reduced ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/wipe-beschlagen.jpg"
              alt=""
              width={1600}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                clipPath: `inset(0 0 0 ${wipe}%)`,
                WebkitClipPath: `inset(0 0 0 ${wipe}%)`,
              }}
              decoding="async"
              loading="lazy"
              aria-hidden="true"
            />
          ) : null}
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-cream"
            style={{ left: `${wipe}%` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
