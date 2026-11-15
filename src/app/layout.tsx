import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MobileContactBar } from "@/components/mobile-contact-bar";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clashDisplay, satoshi } from "@/lib/fonts";
import { serviceArea, services, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Großräschen & Lausitzer Seenland`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} | Großräschen & Lausitzer Seenland`,
    description: site.description,
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} – Fenster-, Treppenhaus- und Büroreinigung in Großräschen`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Großräschen & Lausitzer Seenland`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#unternehmen`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/og-image.jpg`,
  telephone: site.phone.international,
  email: site.email.display,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: serviceArea.base },
    { "@type": "Place", name: serviceArea.region },
    ...serviceArea.towns.map((name) => ({ "@type": "City", name })),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: `${site.url}/leistungen#${service.slug}`,
      },
    })),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${clashDisplay.variable} ${satoshi.variable}`} data-scroll-behavior="smooth">
      <body>
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-ink focus:bg-signal focus:px-4 focus:py-3 focus:font-bold focus:text-ink"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <div className="pb-20 md:pb-0">
          <SiteFooter />
        </div>
        <MobileContactBar />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
