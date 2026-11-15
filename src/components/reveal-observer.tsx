"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fade-in + 12px translate-up für [data-reveal] und [data-reveal-image].
 * Ohne JS / bei prefers-reduced-motion bleibt alles sichtbar.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const attr = entry.target.hasAttribute("data-reveal-image") ? "data-reveal-image" : "data-reveal";
          entry.target.setAttribute(attr, "in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    const limit = window.innerHeight * 0.92;
    const nodes = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
      ...document.querySelectorAll<HTMLElement>("[data-reveal-image]"),
    ];

    for (const element of nodes) {
      if (element.getBoundingClientRect().top > limit) {
        const attr = element.hasAttribute("data-reveal-image") ? "data-reveal-image" : "data-reveal";
        element.setAttribute(attr, "out");
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
