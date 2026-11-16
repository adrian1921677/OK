import { HomeAbout } from "@/components/home/about";
import { HomeContact } from "@/components/home/contact";
import { HomeHero } from "@/components/home/hero";
import { HomeProcess } from "@/components/home/process";
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
      <HomeServices />
      <HomeAbout />
      <HomeProcess />
      <HomeServiceArea />
      <HomeContact />
    </>
  );
}
