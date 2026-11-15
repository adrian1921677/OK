type PageHeroProps = {
  label: string;
  title: string;
  lead?: string;
};

export function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <header className="section-soft">
      <div className="container-site py-14 sm:py-16 lg:py-24">
        <p className="label" data-reveal>
          {label}
        </p>
        <h1 className="h-page mt-4 max-w-[18ch]" data-reveal>
          {title}
        </h1>
        {lead ? (
          <p className="lead mt-5 max-w-[36rem]" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}
