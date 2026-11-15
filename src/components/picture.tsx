type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  reveal?: boolean;
  revealDelay?: string;
};

/**
 * Responsive Bild mit AVIF/WebP-Quellen und JPG-Fallback.
 * Erwartet gleichnamige Dateien: name.jpg + name.webp + name.avif
 */
export function Picture({
  src,
  alt,
  className,
  imgClassName = "h-full w-full object-cover",
  width,
  height,
  priority = false,
  sizes = "100vw",
  reveal = false,
  revealDelay,
}: PictureProps) {
  const base = src.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  const style = revealDelay ? ({ "--reveal-delay": revealDelay } as React.CSSProperties) : undefined;

  return (
    <picture
      className={className}
      {...(reveal ? { "data-reveal-image": true } : {})}
      style={style}
    >
      <source srcSet={`${base}.avif`} type="image/avif" sizes={sizes} />
      <source srcSet={`${base}.webp`} type="image/webp" sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png") ? src : `${base}.jpg`}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={imgClassName}
      />
    </picture>
  );
}
