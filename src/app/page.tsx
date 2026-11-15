import { AboutSection } from "@/components/home/about";
import { BeforeAfterSlider } from "@/components/home/before-after";
import { ContactCta } from "@/components/home/contact-cta";
import { HomeHero } from "@/components/home/hero";
import { ServiceAreaSection } from "@/components/home/service-area";
import { ServicesAccordion } from "@/components/home/services-accordion";
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
      <ServicesAccordion />
      <BeforeAfterSlider />
      <AboutSection />
      <ServiceAreaSection />
      <ContactCta />
    </>
  );
}
