import Link from "next/link";
import { legalNavigation, navigation, services, site } from "@/lib/site";
import { Wordmark } from "./wordmark";

const headingClass = "text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-signal";
const linkClass = "inline-block py-1.5 text-paper/85 underline-offset-4 hover:text-signal hover:underline";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-ink text-[0.9375rem] text-paper">
      <div className="container-site grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[5fr_3fr_3fr_4fr] lg:py-14">
        <div>
          <Wordmark invert />
          <p className="mt-5 max-w-[20rem] text-ink-muted">
            Fenster. Treppenhaus. Büro. Gebäudereinigung aus Großräschen für das Lausitzer Seenland.
          </p>
        </div>

        <nav aria-label="Seiten">
          <h2 className={headingClass}>Seiten</h2>
          <ul className="mt-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Leistungen">
          <h2 className={headingClass}>Leistungen</h2>
          <ul className="mt-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/leistungen#${service.slug}`} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Kontakt</h2>
          <ul className="mt-3">
            <li>
              <a href={site.phone.href} className="lettering inline-block py-1.5 text-xl text-signal hover:opacity-80">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp-Anfrage
              </a>
            </li>
            <li>
              <a href={site.email.href} className={`break-all ${linkClass}`}>
                {site.email.display}
              </a>
            </li>
            <li>
              <address className="py-1.5 not-italic text-ink-muted">
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site">
        <div className="flex flex-col gap-2 border-t border-ink-line py-5 text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}, Inhaber {site.owner}
          </p>
          <ul className="flex gap-6">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1.5 underline-offset-4 hover:text-signal hover:underline">
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
