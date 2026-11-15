import { Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { serviceArea, site } from "@/lib/site";

type Channel = {
  icon: LucideIcon;
  label: string;
  value: string;
  hint: string;
  href: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    icon: Phone,
    label: "Telefon",
    value: site.phone.display,
    hint: "Der direkte Weg zu uns.",
    href: site.phone.href,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Nachricht schreiben",
    hint: "Gern auch mit Fotos vom Objekt.",
    href: site.whatsapp.href,
    external: true,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: site.email.display,
    hint: "Für ausführliche Anfragen.",
    href: site.email.href,
  },
];

export function ContactTiles() {
  return (
    <ul className="grid gap-3 md:grid-cols-3">
      {channels.map(({ icon: Icon, label, value, hint, href, external }, index) => (
        <li key={label} data-reveal style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group block h-full border-2 border-ink bg-paper p-6 transition-colors hover:bg-ink"
          >
            <span aria-hidden="true" className="icon-tile">
              <Icon className="h-5 w-5" />
            </span>
            <span className="mt-5 block text-[0.9375rem] text-muted transition-colors group-hover:text-ink-muted">
              {label}
            </span>
            <span className="lettering mt-1 block break-words text-xl transition-colors group-hover:text-paper">
              {value}
            </span>
            <span className="mt-2 block text-[0.9375rem] text-muted transition-colors group-hover:text-ink-muted">
              {hint}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Kontaktblock für Unterseiten – Signalgelb, ohne Diagonalstreifen. */
export function ContactPanel({
  title = "Kostenloses Angebot innerhalb von 24 Stunden",
  text = `Sagen Sie uns kurz, um welches Objekt es geht. Wir sind in ${serviceArea.base} und im ${serviceArea.region} für Sie da.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="pb-14 pt-4 lg:pb-20">
      <div className="container-site">
        <div
          data-reveal
          className="grid gap-8 border-2 border-ink bg-signal px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 lg:px-14 lg:py-14"
        >
          <div>
            <h2 className="h-section max-w-[18ch] text-ink">{title}</h2>
            <p className="mt-4 max-w-[30rem] text-ink/80">{text}</p>
          </div>
          <div>
            <a
              href={site.phone.href}
              className="lettering inline-flex items-center gap-3 text-[clamp(1.875rem,5vw,2.5rem)] text-ink transition-opacity hover:opacity-80"
            >
              <Phone aria-hidden="true" className="h-[0.7em] w-[0.7em] shrink-0" strokeWidth={2.25} />
              <span className="sr-only">Anrufen: </span>
              {site.phone.display}
            </a>
            <div className="mt-6 flex flex-col gap-3 xs:flex-row">
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                WhatsApp-Anfrage
              </a>
              <a href={site.email.href} className="btn btn-outline">
                <Mail aria-hidden="true" className="h-4 w-4" />
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
