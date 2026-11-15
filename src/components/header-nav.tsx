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
    <div className="relative">
      <div className="flex h-[4rem] items-center justify-between gap-3 sm:h-[4.5rem]">
        <Wordmark />

        <nav aria-label="Hauptnavigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.875rem] tracking-[0.04em] transition-opacity hover:opacity-60 ${active ? "opacity-100" : "opacity-80"}`}
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
            <svg className="h-5 w-5 lg:hidden" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M8.05 3.5c.4-.4 1.05-.45 1.5-.12l2.1 1.55c.4.3.55.85.35 1.32l-.85 1.95c-.15.35-.1.75.15 1.05l2.45 2.45c.3.25.7.3 1.05.15l1.95-.85c.47-.2 1.02-.05 1.32.35l1.55 2.1c.33.45.28 1.1-.12 1.5l-1.2 1.2c-.55.55-1.3.8-2.05.7-1.85-.25-4.5-1.55-6.95-4-2.45-2.45-3.75-5.1-4-6.95-.1-.75.15-1.5.7-2.05l1.2-1.2Z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden lg:inline">{site.phone.display}</span>
          </a>
          <button
            type="button"
            className="px-2 py-2 text-[0.8125rem] font-medium tracking-[0.08em] uppercase text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      {open ? (
        <div id={panelId} className="border-t border-line bg-paper lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1 py-5">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 font-display text-[1.75rem] tracking-[-0.01em] ${active ? "text-ink" : "text-ink/70"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={site.phone.href} className="btn-primary mt-4 w-full">
              {site.phone.display}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
