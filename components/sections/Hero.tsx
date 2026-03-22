import { Button } from "@/components/Button";
import { HeroMockup } from "@/components/HeroMockup";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  CTA_HELPER,
  CTA_PRIMARY_BUTTON,
  CTA_REASSURANCE,
  CTA_SECONDARY_BUTTON,
  HERO_EMOTIONAL_HOOK,
  TRUST_STRIP,
} from "@/lib/cta-copy";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";
import { getWhatsappLink } from "@/lib/whatsapp";

export function Hero() {
  const waPrimary = getWhatsappLink(CTA_WHATSAPP_MESSAGES.getSite);
  const waSecondary = getWhatsappLink(CTA_WHATSAPP_MESSAGES.softFit);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,211,102,0.15),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="text-center lg:text-start">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            SameerDev · בניית אתרים לעסקים קטנים
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
            יותר פניות לעסק שלך — אתר מקצועי תוך 3–5 ימים
          </h1>
          <p className="mx-auto mt-4 max-w-xl rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3 text-center text-[15px] font-medium leading-snug text-amber-100/95 sm:text-base lg:mx-0 lg:text-start">
            {HERO_EMOTIONAL_HOOK}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted sm:text-lg lg:mx-0">
            מעייפים אתר שלא מביא לקוחות ופרסום מסובך? בונים דף נקי, מהיר ומותאם לנייד — עם וואטסאפ בקליק אחד.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button
              href={waPrimary}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full min-h-[3.25rem] shadow-glow ring-2 ring-accent/25 transition hover:scale-[1.02] hover:brightness-110 hover:ring-accent/40 active:scale-[0.99] sm:w-auto sm:px-8"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {CTA_PRIMARY_BUTTON}
            </Button>
            <Button href="#pricing" variant="outline" size="lg" className="w-full sm:w-auto">
              עבור למחירים
            </Button>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs leading-relaxed text-muted sm:text-sm lg:text-start">
            {CTA_HELPER}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-center text-[11px] leading-relaxed text-slate-500 sm:text-xs lg:text-start">
            {CTA_REASSURANCE}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-center text-[11px] leading-relaxed text-slate-500 sm:text-xs lg:text-start">
            טווח מחירים שקוף ב
            <a href="#pricing" className="mx-1 font-medium text-accent/90 underline-offset-2 hover:text-accent hover:underline">
              חלק המחירים
            </a>
            — בלי הפתעות. מעדיף טופס?
            <a
              href="#lead-form"
              className="mx-1 font-medium text-accent/90 underline-offset-2 hover:text-accent hover:underline"
            >
              השאר פרטים כאן
            </a>
          </p>
          <div className="mt-3">
            <Button
              href={waSecondary}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="md"
              className="w-full text-sm text-slate-300 underline-offset-4 hover:bg-white/5 hover:text-white hover:underline sm:w-auto"
            >
              {CTA_SECONDARY_BUTTON}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-muted sm:text-sm lg:justify-start">
            {TRUST_STRIP.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
