import { processSteps } from "@/lib/site";

/** Der Weg von der Anfrage zur Reinigung – eine echte Reihenfolge, daher nummeriert. */
export function HomeProcess() {
  return (
    <section className="section pt-0 lg:pt-0" aria-labelledby="ablauf-titel">
      <div className="container-site">
        <h2 id="ablauf-titel" className="h-section" data-reveal>
          In drei Schritten zur sauberen Immobilie.
        </h2>

        <ol className="relative mt-10 grid gap-y-8 sm:grid-cols-3 sm:gap-x-8" data-reveal>
          <span
            className="draw-line absolute top-[1.375rem] right-[30%] left-[1.375rem] hidden h-px bg-line sm:block"
            aria-hidden="true"
          />
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 sm:block">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-[1.25rem] text-accent">
                {index + 1}
              </span>
              <div className="sm:mt-5">
                <h3 className="h-sub">{step.title}</h3>
                <p className="mt-2 max-w-[20rem] text-[0.9375rem] leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
