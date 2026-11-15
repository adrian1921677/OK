"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

/**
 * Volle Signalgelb-Fläche: riesige Telefonnummer + einfaches Formular.
 * Formular sendet vorerst per mailto (kein Backend) – siehe Notes.
 */
export function ContactCta() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const privacy = data.get("privacy");
    if (!privacy) return;

    const subject = encodeURIComponent(`Anfrage Gebäudereinigung – ${name || "Kontakt"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nTelefon: ${phone}\n\nNachricht:\n${message}\n\n— gesendet über die Website`,
    );
    window.location.href = `${site.email.href.split("?")[0]}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="kontakt" className="bg-signal py-16 text-ink lg:py-24">
      <div className="container-site">
        <p data-reveal className="text-[0.8125rem] font-bold uppercase tracking-[0.14em]">
          Direkt durchwählen
        </p>
        <a
          data-reveal
          href={site.phone.href}
          className="font-display mt-4 block text-[clamp(2.75rem,12vw,8.5rem)] font-bold uppercase leading-[0.85] tracking-[-0.05em] text-ink underline decoration-ink decoration-4 underline-offset-8 transition-opacity hover:opacity-80"
        >
          <span className="sr-only">Anrufen: </span>
          {site.phone.display}
        </a>
        <p data-reveal className="mt-5 max-w-[36rem] text-[1.125rem]">
          Oder schreiben Sie uns – wir melden uns in der Regel innerhalb von 24&nbsp;Stunden mit einem kostenlosen
          Angebot.
        </p>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div data-reveal className="space-y-4 text-[1.0625rem]">
            <p>
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer" className="link">
                WhatsApp-Nachricht
              </a>
            </p>
            <p>
              <a href={site.email.href} className="link break-all">
                {site.email.display}
              </a>
            </p>
            <address className="not-italic">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>
          </div>

          <form data-reveal onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-[0.8125rem] font-bold uppercase tracking-wide">
                Name
              </label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required className="field" />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1.5 block text-[0.8125rem] font-bold uppercase tracking-wide">
                Telefon
              </label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required className="field" />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-[0.8125rem] font-bold uppercase tracking-wide"
              >
                Ihre Anfrage
              </label>
              <textarea id="contact-message" name="message" required className="field" />
            </div>
            <label className="flex items-start gap-3 text-[0.9375rem]">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1 h-5 w-5 shrink-0 appearance-none border-2 border-ink bg-paper checked:bg-ink"
              />
              <span>
                Ich habe die{" "}
                <Link href="/datenschutz" className="underline decoration-2 underline-offset-2">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und willige in die Verarbeitung meiner Angaben zur Bearbeitung der Anfrage ein.
              </span>
            </label>
            <button type="submit" className="btn btn-outline w-full sm:w-auto">
              Anfrage senden
            </button>
            {status === "sent" ? (
              <p className="text-[0.9375rem] font-medium" role="status">
                Ihr E-Mail-Programm sollte sich öffnen. Falls nicht, rufen Sie uns bitte direkt an.
              </p>
            ) : (
              <p className="text-[0.875rem] text-body/80">
                Hinweis: Das Formular öffnet vorerst Ihr E-Mail-Programm. Ein Server-Backend folgt später.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
