import { HomeAbout } from "@/components/home/about";
import { HomeBeforeAfter } from "@/components/home/before-after";
import { HomeContact } from "@/components/home/contact";
import { HomeGlassWipe } from "@/components/home/glass-wipe";
import { HomeHero } from "@/components/home/hero";
import { HomeServiceArea } from "@/components/home/service-area";
import { HomeServices } from "@/components/home/services";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${site.name} | Großräschen & Lausitzer Seenland`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeGlassWipe />
      <HomeServices />
      <HomeAbout />
      <HomeBeforeAfter />
      <HomeServiceArea />
      <HomeContact />
    </>
  );
}
