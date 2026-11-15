import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

const itemClass =
  "flex min-h-12 items-center justify-center gap-1.5 whitespace-nowrap px-2 text-[0.875rem] font-bold text-ink";

/** Feste Kontaktleiste auf Mobilgeräten – eckig, Signalgelb. */
export function MobileContactBar() {
  return (
    <nav
      aria-label="Schnellkontakt"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-signal p-1.5 md:hidden"
      style={{ paddingBottom: "calc(0.375rem + env(safe-area-inset-bottom))" }}
    >
      <ul className="grid grid-cols-[1.15fr_1.15fr_1fr] gap-1">
        <li>
          <a href={site.phone.href} className={`${itemClass} bg-ink text-signal`}>
            <Phone aria-hidden="true" className="h-4 w-4" />
            Anrufen
          </a>
        </li>
        <li>
          <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className={itemClass}>
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </a>
        </li>
        <li>
          <a href={site.email.href} className={itemClass}>
            <Mail aria-hidden="true" className="h-4 w-4" />
            E-Mail
          </a>
        </li>
      </ul>
    </nav>
  );
}
