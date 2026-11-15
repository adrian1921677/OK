import Link from "next/link";
import { legalNavigation, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-site flex flex-col gap-4 py-8 text-[0.875rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
