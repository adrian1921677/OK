"use client";

import { useEffect, useRef, useState } from "react";

/** Zählt einmalig hoch, sobald die Zahl sichtbar wird. Ohne JS / bei reduzierter Bewegung steht der Endwert. */
export function CountUp({ to, duration = 1400, delay = 0 }: { to: number; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer = 0;
    setValue(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          const startedAt = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - startedAt) / duration);
            setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [to, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
