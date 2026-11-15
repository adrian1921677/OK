import Image, { type StaticImageData } from "next/image";

type WipeImageProps = {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

/** Bild mit Abzieher-Wipe beim Scroll-Reveal. */
export function WipeImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  imageClassName = "object-cover",
  fill = true,
  width,
  height,
}: WipeImageProps) {
  return (
    <div data-reveal className={`wipe-reveal media ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          className={imageClassName}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          className={imageClassName}
        />
      )}
    </div>
  );
}
