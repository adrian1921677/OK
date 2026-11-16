import { site } from "@/lib/site";

/** Kontaktwege als Liste – für helle Flächen und für das dunkle Panel (tone="light"). */
export function ContactDetails({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  const value = light ? "text-white" : "text-ink";
  const sub = light ? "text-white/70" : "text-muted";

  return (
    <dl className="space-y-5">
      <div>
        <dt className="label">Telefon</dt>
        <dd className={`mt-1 font-display text-[1.75rem] leading-tight ${value}`}>
          <a href={site.phone.href} className="text-link">
            {site.phone.display}
          </a>
        </dd>
      </div>
      <div>
        <dt className="label">WhatsApp</dt>
        <dd className={`mt-1 ${value}`}>
          <a href={site.whatsapp.href} className="text-link" target="_blank" rel="noopener noreferrer">
            Nachricht senden
          </a>
        </dd>
      </div>
      <div>
        <dt className="label">E-Mail</dt>
        <dd className={`mt-1 ${value}`}>
          <a href={site.email.href} className="text-link break-all">
            {site.email.display}
          </a>
        </dd>
      </div>
      <div>
        <dt className="label">Adresse</dt>
        <dd className={`mt-1 ${sub}`}>
          <address className="not-italic">
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </address>
        </dd>
      </div>
    </dl>
  );
}
