"use client";

import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import { getWhatsappLink } from "@/lib/whatsapp";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";

const HELPER =
  "שלחו שם עסק + תחום + מה אתם צריכים, ואחזור אליכם עם כיוון ברור.";

export function FinalCta() {
  const wa = getWhatsappLink(CTA_WHATSAPP_MESSAGES.default);

  return (
    <section className="px-4 pb-24 pt-6 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-surface/80 to-background px-6 py-14 text-center shadow-glow sm:px-12">
        <div className="pointer-events-none absolute -top-20 start-[-5rem] h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 end-[-4rem] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <h2 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
          רוצה אתר שמביא לך לקוחות?
        </h2>
        <p className="relative mx-auto mt-3 max-w-lg text-muted">
          שלחו הודעה בוואטסאפ — נבין מה העסק צריך ונחזור עם הצעה ברורה.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="transition hover:scale-[1.02] active:scale-[0.99]"
            onClick={() => trackEvent("whatsapp_click", { label: "final_cta" })}
          >
            <WhatsAppIcon className="h-5 w-5" />
            דבר איתי בוואטסאפ
          </Button>
        </div>
        <p className="relative mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted sm:text-sm">{HELPER}</p>
        <p className="relative mx-auto mt-3 max-w-lg text-xs text-slate-500 sm:text-sm">
          פיתוח מהיר, תקשורת ישירה, תוצאה ברורה
        </p>
      </div>
    </section>
  );
}
