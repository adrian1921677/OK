"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { navigation, site } from "@/lib/site";

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

      <div className="flex items-center gap-3">
        <a href={site.phone.href} className="btn-phone hidden xs:inline-flex sm:inline-flex">
          {site.phone.display}
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

      {open ? (
        <div id={panelId} className="absolute inset-x-3 top-[calc(100%+0.5rem)] z-50 lg:hidden sm:inset-x-4">
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
              <a href={site.phone.href} className="btn-phone mt-3 w-full xs:hidden">
                {site.phone.display}
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
