"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const privacy = data.get("privacy");

    if (!privacy) return;

    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `${site.email.href}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className="field mt-2" />
      </div>
      <div>
        <label htmlFor="email" className="label">
          E-Mail
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className="field mt-2" />
      </div>
      <div>
        <label htmlFor="phone" className="label">
          Telefon
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className="field mt-2" />
      </div>
      <div>
        <label htmlFor="message" className="label">
          Nachricht
        </label>
        <textarea id="message" name="message" required className="field mt-2" />
      </div>
      <label className="flex items-start gap-3 text-[0.9375rem] text-muted">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 h-4 w-4 accent-[var(--color-accent)]"
        />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="text-link-accent">
            Datenschutzerklärung
          </a>{" "}
          gelesen und willige in die Verarbeitung meiner Angaben zur Bearbeitung der Anfrage ein.
        </span>
      </label>
      <button type="submit" className="text-link-accent text-[1.0625rem]">
        Angebot anfragen →
      </button>
      {sent ? (
        <p className="text-[0.9375rem] text-muted">
          Ihr E-Mail-Programm sollte sich geöffnet haben. Alternativ schreiben Sie direkt an{" "}
          <a href={site.email.href} className="text-link-accent">
            {site.email.display}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
