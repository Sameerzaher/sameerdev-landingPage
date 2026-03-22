import { SectionWhatsAppCta } from "@/components/SectionWhatsAppCta";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { PainSection } from "@/components/sections/PainSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";

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
        <PainSection />
        <SectionWhatsAppCta
          headline="מוכנים להפסיק לאבד לקוחות לטובת המתחרים?"
          buttonText="שלחו לי פרטים על העסק"
          message={CTA_WHATSAPP_MESSAGES.afterPain}
          analyticsLabel="cta_after_pain"
        />
        <AudienceSection />
        <SectionWhatsAppCta
          headline="רוצים אתר שמביא פניות — בלי להסתבך?"
          buttonText="קבלו אתר תוך 3–5 ימים"
          message={CTA_WHATSAPP_MESSAGES.getSite}
          analyticsLabel="cta_after_audience"
        />
        <SolutionSection />
        <HowItWorksSection />
        <SectionWhatsAppCta
          headline="נשמע פשוט? ככה זה באמת עובד."
          buttonText="קבלו הצעת מחיר היום"
          message={CTA_WHATSAPP_MESSAGES.quote}
          analyticsLabel="cta_after_how_it_works"
        />
        <PortfolioSection />
        <WhyChooseSection />
        <SectionWhatsAppCta
          headline="רוצים דוגמה דומה לעסק שלכם?"
          buttonText="שלחו לי פרטים על העסק"
          message={CTA_WHATSAPP_MESSAGES.sendDetails}
          analyticsLabel="cta_after_why_choose"
        />
        <DemoSection />
        <TestimonialsSection />
        <SectionWhatsAppCta
          headline="בואו נדבר על האתר הבא שלכם"
          buttonText="קבלו אתר תוך 3–5 ימים"
          message={CTA_WHATSAPP_MESSAGES.getSite}
          analyticsLabel="cta_after_testimonials"
        />
        <LeadFormSection />
        <FaqSection />
        <SectionWhatsAppCta
          headline="נשארו שאלות? אני כאן בוואטסאפ."
          buttonText="קבלו הצעת מחיר היום"
          message={CTA_WHATSAPP_MESSAGES.quote}
          analyticsLabel="cta_after_faq"
        />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
