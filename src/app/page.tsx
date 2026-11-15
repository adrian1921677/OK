import { HomeClients } from "@/components/home/clients";
import { HomeContact } from "@/components/home/contact";
import { HomeHero } from "@/components/home/hero";
import { HomeImageStrip } from "@/components/home/image-strip";
import { HomeIntro } from "@/components/home/intro";
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
      <HomeIntro />
      <HomeServices />
      <HomeImageStrip />
      <HomeClients />
      <HomeServiceArea />
      <HomeContact />
    </>
  );
}
