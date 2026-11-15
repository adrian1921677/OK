"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { navigation, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Glass pill only — overflow:hidden stays on .glass; menu is a sibling below */}
      <div className="glass glass-nav relative flex h-[3.75rem] items-center justify-between gap-3 px-3 shadow-[0_8px_30px_rgba(47,143,216,0.08)] sm:h-[4.25rem] sm:gap-4 sm:px-5">
        <Wordmark />

        <nav aria-label="Hauptnavigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.9375rem] tracking-[-0.01em] transition-colors hover:text-accent ${active ? "text-accent" : "text-ink"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phone.href}
            className="btn-phone btn-phone-header shrink-0"
            aria-label={`Anrufen ${site.phone.display}`}
          >
            <svg
              className="h-5 w-5 lg:hidden"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8.05 3.5c.4-.4 1.05-.45 1.5-.12l2.1 1.55c.4.3.55.85.35 1.32l-.85 1.95c-.15.35-.1.75.15 1.05l2.45 2.45c.3.25.7.3 1.05.15l1.95-.85c.47-.2 1.02-.05 1.32.35l1.55 2.1c.33.45.28 1.1-.12 1.5l-1.2 1.2c-.55.55-1.3.8-2.05.7-1.85-.25-4.5-1.55-6.95-4-2.45-2.45-3.75-5.1-4-6.95-.1-.75.15-1.5.7-2.05l1.2-1.2Z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden lg:inline">{site.phone.display}</span>
          </a>
          <button
            type="button"
            className="rounded-full px-3 py-2 text-[0.875rem] font-medium text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 lg:hidden"
        >
          <div className="glass glass-sheen rounded-2xl p-5 shadow-[0_16px_40px_rgba(47,143,216,0.12)]" data-sheen="on">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-3 font-display text-xl tracking-[-0.02em] ${active ? "text-accent" : "text-ink"}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a href={site.phone.href} className="btn-phone mt-3 w-full">
                {site.phone.display}
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
