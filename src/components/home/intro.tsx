export function HomeIntro() {
  return (
    <section className="border-b border-line">
      <div className="container-site grid-12 gap-y-6 py-16 sm:py-20 lg:py-28">
        <div className="col-span-12 md:col-span-3" data-reveal>
          <p className="label">Über Kienle</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
          <p className="font-serif text-[clamp(1.5rem,3.2vw,2.25rem)] font-light leading-[1.35] text-ink">
            Seit über zehn Jahren betreut Gebäudereinigung Kienle Objekte in Großräschen und der Region – zuverlässig,
            diskret und mit dem Anspruch, dass gepflegte Gebäude selbstverständlich wirken.
          </p>
        </div>
      </div>
    </section>
  );
}
