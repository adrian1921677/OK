import { clients } from "@/lib/site";

export function HomeClients() {
  return (
    <section className="border-b border-line" aria-labelledby="kunden-titel">
      <div className="container-site grid-12 gap-y-8 py-16 sm:py-20 lg:py-28">
        <div className="col-span-12 md:col-span-4" data-reveal>
          <p className="label">Für wen wir arbeiten</p>
          <h2 id="kunden-titel" className="h-section mt-4 max-w-[12ch]">
            Klare Auftraggeber.
          </h2>
        </div>
        <ul className="col-span-12 md:col-span-7 md:col-start-6" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          {clients.map((client) => (
            <li key={client} className="border-b border-line py-5 font-serif text-[clamp(1.5rem,3vw,2rem)] font-light text-ink">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
