import localFont from "next/font/local";

/** Elegant script for the Oliver Kienle wordmark (OFL). */
export const greatVibes = localFont({
  src: [{ path: "../../public/fonts/great-vibes.woff2", weight: "400", style: "normal" }],
  variable: "--font-script",
  display: "swap",
  fallback: ["cursive", "serif"],
});

/** Editorial display serif for headlines (OFL). */
export const instrumentSerif = localFont({
  src: [
    { path: "../../public/fonts/instrument-serif-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const inter = localFont({
  src: [
    { path: "../../public/fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
});
