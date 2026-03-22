import { Button } from "@/components/Button";
import { HeroMockup } from "@/components/HeroMockup";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsappLink } from "@/lib/whatsapp";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";

export function Hero() {
  const wa = getWhatsappLink(CTA_WHATSAPP_MESSAGES.getSite);

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
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted sm:text-lg lg:mx-0">
            מעייפים אתר שלא מביא לקוחות ופרסום מסובך? בונים דף נקי, מהיר ומותאם לנייד — עם וואטסאפ בקליק אחד.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-slate-300 lg:mx-0">
            נבנה לעסקים קטנים ובינוניים בישראל
            <span className="mt-1 block text-xs font-normal text-slate-500" lang="en" dir="ltr">
              Built for small businesses in Israel
            </span>
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full transition hover:scale-[1.02] active:scale-[0.99] sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              קבלו אתר תוך 3–5 ימים
            </Button>
            <Button href="#pricing" variant="outline" size="lg" className="w-full sm:w-auto">
              עבור למחירים
            </Button>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500 lg:text-start">נשארו 5 מקומות השבוע</p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              מסירה מהירה
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ללא מורכבות
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ממוקד המרות
            </li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
