"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { navigation, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <div
        className={`flex h-[3.75rem] items-center justify-between gap-3 rounded-full border bg-paper/85 pr-2 pl-3 backdrop-blur-md transition-[box-shadow,border-color] duration-300 sm:h-16 sm:pl-3.5 ${
          scrolled || open
            ? "border-line shadow-[0_14px_34px_-20px_rgba(12,46,58,0.4)]"
            : "border-line/70 shadow-none"
        }`}
      >
        <Wordmark />

        <nav aria-label="Hauptnavigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200 ${
                  active ? "bg-mist text-accent" : "text-ink hover:bg-mist"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <a href={site.phone.href} className="btn-call" aria-label={`Jetzt anrufen: ${site.phone.display}`}>
            <span className="btn-call-icon">
              <svg className="h-[1.05rem] w-[1.05rem]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8.05 3.5c.4-.4 1.05-.45 1.5-.12l2.1 1.55c.4.3.55.85.35 1.32l-.85 1.95c-.15.35-.1.75.15 1.05l2.45 2.45c.3.25.7.3 1.05.15l1.95-.85c.47-.2 1.02-.05 1.32.35l1.55 2.1c.33.45.28 1.1-.12 1.5l-1.2 1.2c-.55.55-1.3.8-2.05.7-1.85-.25-4.5-1.55-6.95-4-2.45-2.45-3.75-5.1-4-6.950-.1-.75.15-1.5.7-2.05l1.2-1.2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="hidden flex-col pr-1 sm:flex">
              <span className="text-[0.625rem] leading-none font-medium tracking-[0.04em] text-white/65">
                Jetzt anrufen
              </span>
              <span className="mt-1 text-[0.9375rem] leading-none font-medium tabular-nums">{site.phone.display}</span>
            </span>
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              <path
                d="M4 8h16"
                className="origin-center transition-transform duration-300"
                style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }}
              />
              <path
                d="M4 16h16"
                className="origin-center transition-transform duration-300"
                style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={`absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top rounded-[1.5rem] border border-line bg-paper p-3 shadow-[0_24px_50px_-24px_rgba(12,46,58,0.45)] transition-[opacity,transform,visibility] duration-300 ease-[var(--ease-out-soft)] lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 font-display text-[1.5rem] ${active ? "bg-mist text-accent" : "text-ink"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={site.whatsapp.href} className="btn-secondary mt-3 w-full" target="_blank" rel="noopener noreferrer">
            WhatsApp schreiben
          </a>
        </nav>
      </div>
    </div>
  );
}
