"use client";

import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import { CTA_HELPER, CTA_PRIMARY_BUTTON, CTA_REASSURANCE, TRUST_STRIP } from "@/lib/cta-copy";
import { getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export type SectionWhatsAppCtaProps = {
  headline: string;
  /** Defaults to conversion primary label. */
  buttonText?: string;
  message: string;
  /** Defaults to shared helper line. */
  helperText?: string;
  analyticsLabel?: string;
  className?: string;
  /** Show three trust microcopy bullets under the helper. Default true. */
  showTrustStrip?: boolean;
  /** Optional second action (outline) — e.g. “is this for me?” */
  secondaryCta?: { label: string; message: string };
  /** Show reassurance line (human, no spam). Default true. */
  showReassurance?: boolean;
};

export function SectionWhatsAppCta({
  headline,
  buttonText = CTA_PRIMARY_BUTTON,
  message,
  helperText = CTA_HELPER,
  analyticsLabel = "section_whatsapp",
  className,
  showTrustStrip = true,
  showReassurance = true,
  secondaryCta,
}: SectionWhatsAppCtaProps) {
  const href = getWhatsappLink(message);
  const secondaryHref = secondaryCta ? getWhatsappLink(secondaryCta.message) : null;

  return (
    <section
      className={cn("px-4 py-6 sm:px-6 sm:py-8", "motion-reduce:animate-none", className)}
      aria-label="קריאה לפעולה"
    >
      <div
        className={cn(
          "mx-auto max-w-3xl rounded-2xl border border-white/10 bg-surface-elevated/90 px-5 py-7 shadow-card backdrop-blur-md sm:px-8 sm:py-9",
          "ring-1 ring-white/[0.06] transition hover:border-accent/25 hover:shadow-lg hover:shadow-black/35 hover:ring-accent/20",
        )}
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base font-semibold leading-snug text-white sm:text-lg">{headline}</p>
          <Button
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full min-h-[3.35rem] shadow-glow ring-2 ring-accent/30 transition hover:scale-[1.02] hover:brightness-110 hover:ring-accent/45 active:scale-[0.99] sm:w-auto sm:min-w-[min(100%,20rem)] sm:px-10"
            onClick={() => trackEvent("whatsapp_click", { label: analyticsLabel })}
          >
            <WhatsAppIcon className="h-5 w-5" />
            {buttonText}
          </Button>
          <p className="max-w-md text-xs leading-relaxed text-muted sm:text-sm">{helperText}</p>
          {showReassurance ? (
            <p className="max-w-md text-[11px] leading-relaxed text-slate-500 sm:text-xs">{CTA_REASSURANCE}</p>
          ) : null}
          {showTrustStrip ? (
            <ul className="flex max-w-lg flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] text-slate-500 sm:text-xs">
              {TRUST_STRIP.map((line) => (
                <li key={line} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent/80" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
          {secondaryCta && secondaryHref ? (
            <Button
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              className="w-full border-white/20 sm:w-auto"
              onClick={() => trackEvent("whatsapp_click", { label: `${analyticsLabel}_secondary` })}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
