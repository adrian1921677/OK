import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  /** Bildausschnitt, z. B. "object-[60%_center]" */
  position?: string;
  /** Seitenverhältnis des Fotos, z. B. "aspect-[4/3]" */
  aspect?: string;
  /** Plakette, die über der unteren Ecke des Fotos liegt */
  badge?: ReactNode;
};

/**
 * Hauptfoto der Startseite: versetzter roter Rahmen dahinter, Seifenfilm, der
 * beim Laden einmal abgezogen wird, und eine Plakette an der unteren Ecke.
 */
export function HeroMedia({ src, alt, sizes, position = "object-center", aspect = "aspect-[4/3]", badge }: Props) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.25rem] border-[1.5px] border-brand-strong/45"
      />
      <div className={`media ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          placeholder="blur"
          sizes={sizes}
          loading="eager"
          fetchPriority="high"
          className={`hero-settle object-cover ${position}`}
        />
        <div aria-hidden="true" className="wipe-film" />
      </div>
      {badge ? <div className="hero-pop absolute -bottom-5 left-4 z-10 sm:-left-5 sm:bottom-7">{badge}</div> : null}
    </div>
  );
}
