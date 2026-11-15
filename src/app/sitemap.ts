import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";

// Impressum und Datenschutz sind auf noindex gesetzt und fehlen hier bewusst.
const pages = [{ href: "/", label: "Startseite" }, ...navigation, { href: "/einsatzgebiet", label: "Einsatzgebiet" }];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${site.url}${page.href === "/" ? "" : page.href}`,
    changeFrequency: page.href === "/" ? "monthly" : "yearly",
    priority: page.href === "/" ? 1 : 0.7,
  }));
}
