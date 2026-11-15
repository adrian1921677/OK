import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";

// Impressum und Datenschutz sind auf noindex gesetzt und fehlen hier bewusst.
export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((page) => ({
    url: `${site.url}${page.href === "/" ? "" : page.href}`,
    changeFrequency: page.href === "/" ? "monthly" : "yearly",
    priority: page.href === "/" ? 1 : 0.7,
  }));
}
