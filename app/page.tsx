import { SectionWhatsAppCta } from "@/components/SectionWhatsAppCta";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { LossWithoutWebsiteSection } from "@/components/sections/LossWithoutWebsiteSection";
import { PainSection } from "@/components/sections/PainSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CTA_HELPER, CTA_SECONDARY_BUTTON } from "@/lib/cta-copy";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";

const secondary = {
  label: CTA_SECONDARY_BUTTON,
  message: CTA_WHATSAPP_MESSAGES.softFit,
} as const;

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative pb-28 sm:pb-32">
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(37,211,102,0.07),transparent_55%)]"
          aria-hidden
        />
        <Hero />
        <UrgencySection />
        <PainSection />
        <SectionWhatsAppCta
          headline="רוצים להפסיק לראות לקוחות עוברים למתחרה עם אתר?"
          message={CTA_WHATSAPP_MESSAGES.afterPain}
          helperText={CTA_HELPER}
          analyticsLabel="cta_after_pain"
          secondaryCta={secondary}
        />
        <AudienceSection />
        <SolutionSection />
        <AboutMeSection />
        <HowItWorksSection />
        <PortfolioSection />
        <WhyChooseSection />
        <DemoSection />
        <TestimonialsSection />
        <SectionWhatsAppCta
          headline="בואו נדבר על האתר הבא שלכם"
          message={CTA_WHATSAPP_MESSAGES.getSite}
          helperText={CTA_HELPER}
          analyticsLabel="cta_after_testimonials"
          secondaryCta={secondary}
        />
        <LeadFormSection />
        <FaqSection />
        <SectionWhatsAppCta
          headline="נשארו שאלות? אני כאן בוואטסאפ."
          message={CTA_WHATSAPP_MESSAGES.quote}
          helperText={CTA_HELPER}
          analyticsLabel="cta_after_faq"
        />
        <PricingSection />
        <LossWithoutWebsiteSection />
        <WhatYouGetSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
