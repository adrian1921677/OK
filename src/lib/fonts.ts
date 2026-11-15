import localFont from "next/font/local";

export const instrumentSans = localFont({
  src: [
    { path: "../../public/fonts/instrument-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/instrument-sans-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
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
