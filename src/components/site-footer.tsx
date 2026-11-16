import Link from "next/link";
import { legalNavigation, navigation, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-site py-10 lg:py-12">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark className="w-fit" />
            <p className="mt-4 max-w-[22rem] text-[0.9375rem] text-muted">
              Fenster-, Treppenhaus- und Büroreinigung in Großräschen und im Lausitzer Seenland.
            </p>
          </div>

          <nav aria-label="Seiten">
            <h2 className="label font-sans tracking-normal">Seiten</h2>
            <ul className="mt-3 space-y-2 text-[0.9375rem]">
              {[...navigation, { href: "/einsatzgebiet", label: "Einsatzgebiet" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label font-sans tracking-normal">Kontakt</h2>
            <ul className="mt-3 space-y-2 text-[0.9375rem]">
              <li>
                <a href={site.phone.href} className="text-link">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.email.href} className="text-link break-all">
                  {site.email.display}
                </a>
              </li>
              <li className="text-muted">
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-6 text-[0.875rem] text-muted">
          <p>
            © {year} {site.name}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
