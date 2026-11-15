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
      <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
        {navigation.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.9375rem] transition-colors hover:text-accent ${active ? "text-accent" : "text-ink"}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <a href={site.phone.href} className="text-[0.9375rem] text-muted transition-colors hover:text-accent">
          {site.phone.display}
        </a>
      </nav>

      <div className="flex items-center gap-4 lg:hidden">
        <a href={site.phone.href} className="text-[0.875rem] text-muted transition-colors hover:text-accent">
          {site.phone.display}
        </a>
        <button
          type="button"
          className="label text-ink"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-b border-line bg-paper lg:hidden"
        >
          <nav aria-label="Mobile Navigation" className="container-site flex flex-col gap-1 py-6">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 font-serif text-2xl font-light ${active ? "text-accent" : "text-ink"}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}
