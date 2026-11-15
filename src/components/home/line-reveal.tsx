import type { CSSProperties } from "react";

/** Zeilenweise Headline-Reveal (CSS-Animation, reduced-motion-sicher). */
export function LineReveal({
  lines,
  as: Tag = "h1",
  className = "",
}: {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  return (
    <Tag className={`line-reveal ${className}`}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>
          <span style={{ "--i": index } as CSSProperties}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
