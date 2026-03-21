import { AudienceSection } from "@/components/sections/AudienceSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { MidPageWhatsAppCta } from "@/components/sections/MidPageWhatsAppCta";
import { PainSection } from "@/components/sections/PainSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-28 sm:pb-24">
        <Hero />
        <PainSection />
        <AudienceSection />
        <SolutionSection />
        <MidPageWhatsAppCta />
        <DemoSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
