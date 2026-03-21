import { FinalCta } from "@/components/sections/FinalCta";
import { DemoSection } from "@/components/sections/DemoSection";
import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MidPageWhatsAppCta } from "@/components/sections/MidPageWhatsAppCta";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <MidPageWhatsAppCta />
        <DemoSection />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
