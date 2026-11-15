"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Blendet Elemente mit dem Attribut data-reveal ein, sobald sie in den
 * sichtbaren Bereich kommen. Was beim Laden schon sichtbar ist, bleibt
 * unangetastet; versteckt wird nur, was unterhalb liegt. Ohne JavaScript oder
 * bei reduzierter Bewegung passiert nichts und alles bleibt sichtbar.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    // erst alle Positionen lesen, dann schreiben
    const limit = window.innerHeight * 0.92;
    const below = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (element) => element.getBoundingClientRect().top > limit,
    );
    for (const element of below) {
      element.setAttribute("data-reveal", "out");
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
