"use client";

import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import { CTA_HELPER, CTA_PRIMARY_BUTTON, CTA_REASSURANCE, CTA_SECONDARY_BUTTON } from "@/lib/cta-copy";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";
import { getWhatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  const waPrimary = getWhatsappLink(CTA_WHATSAPP_MESSAGES.default);
  const waSecondary = getWhatsappLink(CTA_WHATSAPP_MESSAGES.softFit);

  return (
    <section className="px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-10">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-surface/80 to-background px-5 py-12 text-center shadow-glow sm:px-12 sm:py-14">
        <div className="pointer-events-none absolute -top-20 start-[-5rem] h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 end-[-4rem] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <h2 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
          מוכנים לעצור בריחת לקוחות ולהתחיל לקבל פניות?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg px-0.5 text-[15px] leading-[1.65] text-slate-300/95 sm:mt-3 sm:px-0 sm:text-base sm:leading-relaxed sm:text-muted">
          שלחו הודעה בוואטסאפ — נבין מה העסק צריך ואחזיר כיוון עוד היום.
        </p>
        <div className="relative mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
          <Button
            href={waPrimary}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full min-h-[3.35rem] shadow-glow ring-2 ring-accent/35 transition hover:scale-[1.02] hover:brightness-110 sm:w-auto sm:min-w-[min(100%,22rem)] sm:px-10"
            onClick={() => trackEvent("whatsapp_click", { label: "final_cta" })}
          >
            <WhatsAppIcon className="h-5 w-5" />
            {CTA_PRIMARY_BUTTON}
          </Button>
          <Button
            href={waSecondary}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="w-full min-h-[3rem] border-white/22 bg-white/[0.04] text-[15px] font-medium text-slate-200/95 sm:min-h-auto sm:w-auto sm:text-base"
            onClick={() => trackEvent("whatsapp_click", { label: "final_cta_secondary" })}
          >
            {CTA_SECONDARY_BUTTON}
          </Button>
        </div>
        <p className="relative mx-auto mt-6 max-w-md text-[13px] leading-[1.65] text-slate-400 sm:mt-5 sm:text-sm sm:leading-relaxed sm:text-muted">
          {CTA_HELPER}
        </p>
        <p className="relative mx-auto mt-2 max-w-md text-[11px] leading-relaxed text-slate-500 sm:text-xs">{CTA_REASSURANCE}</p>
      </div>
    </section>
  );
}
