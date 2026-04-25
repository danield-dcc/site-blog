import { CallToAction } from "@/components/call-to-action";
import { CustomerStorySection } from "@/components/customer-history-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";

export default function Home() {
  return (
    <>
      <article>
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  );
}
