import { Button } from "@/components/Button";
import { HeroMockup } from "@/components/HeroMockup";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const wa = getWhatsAppUrl();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,211,102,0.15),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="text-center lg:text-right">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            SameerDev · אתרים לעסקים קטנים ובינוניים
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            אתר לעסק שלך תוך 3–5 ימים שמביא לך יותר פניות
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted sm:text-lg lg:mx-0">
            אתר פשוט, מהיר, מותאם לנייד עם כפתור וואטסאפ
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              דבר איתי בוואטסאפ
            </Button>
            <Button href="#pricing" variant="outline" size="lg" className="w-full sm:w-auto">
              צפה במחירים
            </Button>
          </div>
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
