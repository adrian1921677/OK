import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Rechtstexte sollen nicht in Suchergebnissen erscheinen */
  noindex?: boolean;
  /** true: Titel ohne angehängten Firmennamen */
  absoluteTitle?: boolean;
};

/** Vorschaubild für geteilte Links, liegt unter public/og-image.jpg */
const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} – Fenster-, Treppenhaus- und Büroreinigung in Großräschen und im Lausitzer Seenland`,
};

/** Einheitliche Metadaten je Seite: Title, Description, Canonical, Open Graph. */
export function pageMetadata({ title, description, path, noindex, absoluteTitle }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
