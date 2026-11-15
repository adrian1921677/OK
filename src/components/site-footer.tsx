import Link from "next/link";
import { legalNavigation, site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-script text-[1.65rem] text-ink">{site.owner}</p>
          <p className="mt-2 text-[0.875rem] text-muted">
            © {year} {site.name}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-muted">
          {legalNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-opacity hover:opacity-60">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
