"use client";

import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import { getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const HELPER =
  "שלחו שם העסק + מה צריך — ואחזור אליכם היום (בדרך כלל תוך שעות ספורות).";

export type SectionWhatsAppCtaProps = {
  headline: string;
  buttonText: string;
  message: string;
  analyticsLabel?: string;
  className?: string;
};

export function SectionWhatsAppCta({
  headline,
  buttonText,
  message,
  analyticsLabel = "section_whatsapp",
  className,
}: SectionWhatsAppCtaProps) {
  const href = getWhatsappLink(message);

  return (
    <section
      className={cn("px-4 py-5 sm:px-6 sm:py-7", "motion-reduce:animate-none", className)}
      aria-label="קריאה לפעולה"
    >
      <div
        className={cn(
          "mx-auto max-w-3xl rounded-2xl border border-white/10 bg-surface-elevated/90 px-5 py-6 shadow-card backdrop-blur-md sm:px-8 sm:py-8",
          "ring-1 ring-white/[0.06] transition hover:border-accent/20 hover:shadow-lg hover:shadow-black/30 hover:ring-accent/15",
        )}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base font-semibold leading-snug text-white sm:text-lg">{headline}</p>
          <Button
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full shadow-glow transition hover:scale-[1.02] active:scale-[0.99] sm:w-auto"
            onClick={() => trackEvent("whatsapp_click", { label: analyticsLabel })}
          >
            <WhatsAppIcon className="h-5 w-5" />
            {buttonText}
          </Button>
          <p className="max-w-md text-xs leading-relaxed text-muted sm:text-sm">{HELPER}</p>
        </div>
      </div>
    </section>
  );
}
