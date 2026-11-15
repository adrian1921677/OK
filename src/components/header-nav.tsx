"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav aria-label="Hauptnavigation" className="hidden lg:block">
        <ul className="flex items-center gap-1">
          {navigation
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-2 text-[0.9375rem] font-bold uppercase tracking-wide transition-colors ${
                      active ? "bg-signal text-ink" : "text-ink hover:bg-paper-deep"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>

      <a href={site.phone.href} className="btn btn-primary hidden lg:inline-flex">
        <Phone aria-hidden="true" className="h-4 w-4" />
        <span className="sr-only">Anrufen: </span>
        {site.phone.display}
      </a>

      <button
        type="button"
        className="grid h-11 w-11 cursor-pointer place-items-center border-2 border-ink bg-paper text-ink lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
        {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-b-2 border-ink bg-paper lg:hidden"
      >
        <nav aria-label="Hauptnavigation mobil" className="container-site pb-5 pt-1">
          <ul>
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-13 items-center text-lg font-bold uppercase tracking-wide ${
                      active ? "text-ink underline decoration-signal decoration-4 underline-offset-4" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={site.phone.href} className="btn btn-primary mt-4 w-full">
            <Phone aria-hidden="true" className="h-4 w-4" />
            {site.phone.display} anrufen
          </a>
        </nav>
      </div>
    </>
  );
}
