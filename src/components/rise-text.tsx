import { Fragment } from "react";

/** Wörter steigen beim Laden nacheinander auf (reine CSS-Animation, siehe globals.css). */
export function RiseText({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="rise-word">
            <span style={{ "--i": start + index } as React.CSSProperties}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}
