import Image from "next/image";
import { DemoCtaGroup } from "@/components/DemoCtaGroup";
import { DEMO_URLS, type DemoCaseId } from "@/lib/demo-links";
import { DEMO_PREVIEW_IMAGES } from "@/lib/demo-preview-images";
import { getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type DemoCard = {
  id: DemoCaseId;
  title: string;
  businessType: string;
  bulletPoints: readonly string[];
  resultLine: string;
  waMessage: string;
  gradient: string;
  frameRing: string;
  mockBrand: string;
};

const demos: readonly DemoCard[] = [
  {
    id: "fitwithnoa",
    title: "FitWithNoa – אתר למאמנת כושר",
    businessType: "מותג אישי · אימון אישי",
    bulletPoints: ["עמוד מותאם לנייד", "הסבר ברור על השירותים", "נוכחות מקצועית יותר אונליין"],
    resultLine: "לקוחות מבינים מה מקבלים — פחות הסברים חוזרים בטלפון",
    waMessage:
      "היי, רוצה משהו דומה לדוגמה FitWithNoa (מאמנת כושר) — מובייל + וואטסאפ.",
    gradient: "from-emerald-500/30 via-teal-600/15 to-background",
    frameRing: "ring-emerald-400/30",
    mockBrand: "FitWithNoa",
  },
  {
    id: "kingfade",
    title: "King Fade – אתר לספר",
    businessType: "מספרה · שירות מקומי",
    bulletPoints: ["עלייה לאוויר תוך 3 ימים", "יותר פניות דרך וואטסאפ", "קל לשלוח ללקוחות לינק אחד מסודר"],
    resultLine: "פניות מסודרות מהעמוד — לינק אחד במקום הסברים בחצי שעה",
    waMessage: "היי, מעוניין בדוגמה בסגנון King Fade — ספר עם גלריה ווואטסאפ.",
    gradient: "from-amber-500/25 via-orange-600/12 to-background",
    frameRing: "ring-amber-400/25",
    mockBrand: "King Fade",
  },
  {
    id: "driveright",
    title: "DriveRight – אתר למורה נהיגה",
    businessType: "לימוד נהיגה · אזורי שירות",
    bulletPoints: ["מחירים וחבילות ברורים", "אזור שירות ושעות קבלה", "יותר פניות רלוונטיות מתלמידים"],
    resultLine: "תלמידים יודעים מה לשאול לפני שמחייגים",
    waMessage: "היי, רוצה דוגמה כמו DriveRight — מורה נהיגה עם מחירים ווואטסאפ.",
    gradient: "from-sky-500/25 via-blue-600/12 to-background",
    frameRing: "ring-sky-400/30",
    mockBrand: "DriveRight",
  },
] as const;

function demoUrlFor(id: DemoCaseId): string {
  return DEMO_URLS[id];
}

function PhoneMockupPreview({
  frameRing,
  brand,
  preview,
  priority,
}: {
  frameRing: string;
  brand: string;
  preview: { src: string; alt: string };
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-[232px] flex-col items-center">
      {/* Ambient glow behind device */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-b from-white/[0.07] to-transparent blur-2xl"
        aria-hidden
      />

      <div
        dir="ltr"
        className={cn(
          "relative w-full rounded-[1.75rem] border border-white/[0.12] bg-gradient-to-b from-[#141c2e] to-[#060912] p-2.5 pb-2 shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75)] ring-2 ring-white/[0.06] transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_36px_90px_-22px_rgba(0,0,0,0.85)] group-hover:ring-accent/25",
          frameRing,
        )}
      >
        {/* Status bar — LTR inside mockup matches real device chrome */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-1 pb-2 pt-1">
          <span className="justify-self-start text-[9px] font-semibold tracking-wide text-white/50">{brand}</span>
          <div
            className="h-[22px] w-[88px] shrink-0 rounded-full bg-black/90 ring-1 ring-white/10"
            aria-hidden
          />
          <div className="flex items-center justify-end gap-2 justify-self-end">
            <span className="text-[10px] font-medium tabular-nums text-white/40">9:41</span>
            <span className="flex gap-0.5" aria-hidden>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="h-1 w-1 rounded-full bg-white/30" />
            </span>
          </div>
        </div>

        {/* Screen bezel */}
        <div className="rounded-xl bg-black/50 p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/50">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[0.65rem] bg-[#0c1222] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.4)]">
            <Image
              src={preview.src}
              alt={preview.alt}
              fill
              sizes="232px"
              priority={priority}
              className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
            />
            {/* Screen glass edge */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[0.65rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]"
              aria-hidden
            />
          </div>
        </div>

        <p className="px-1 pb-0.5 pt-2.5 text-center text-[9px] font-medium tracking-wide text-white/35">
          תצוגה לדוגמה בלבד
        </p>
      </div>
    </div>
  );
}

export function DemoSection() {
  return (
    <section id="demo" className="section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">מקרי בוחן (דוגמאות)</h2>
        <p className="section-sub max-w-xl">
          תוצאות אמיתיות לסוגי עסקים — זמן עלייה לאוויר, פניות וסדר בעבודה.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {demos.map((d, index) => {
            const demoUrl = demoUrlFor(d.id);
            const waHref = getWhatsappLink(d.waMessage);
            const isPlaceholder = !demoUrl.startsWith("http");
            const preview = DEMO_PREVIEW_IMAGES[d.id];

            return (
              <figure
                key={d.id}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-surface/35 shadow-card backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.55)] focus-within:border-accent/30",
                  /* כרטיס שלישי במסך ביניים: ממורכז מתחת לשניים הראשונים */
                  index === 2 && "sm:col-span-2 sm:mx-auto sm:max-w-[min(100%,22rem)] lg:col-span-1 lg:max-w-none",
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden bg-gradient-to-b px-4 pb-8 pt-8 sm:px-5 sm:pb-10 sm:pt-10",
                    d.gradient,
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(255,255,255,0.12), transparent 55%)",
                    }}
                    aria-hidden
                  />
                  <PhoneMockupPreview
                    frameRing={d.frameRing}
                    brand={d.mockBrand}
                    preview={preview}
                    priority={index === 0}
                  />
                </div>

                <figcaption className="flex flex-1 flex-col border-t border-white/[0.06] bg-gradient-to-b from-surface/40 to-surface/25 px-5 py-6 text-start">
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    מקרה בוחן
                  </span>
                  <span className="mt-3 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl">
                    {d.title}
                  </span>
                  <span className="mt-1.5 text-xs font-medium leading-relaxed text-slate-300/95">
                    {d.businessType}
                  </span>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-200/95">
                    {d.bulletPoints.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                          ✔
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-xl border border-accent/20 bg-accent/[0.07] px-3 py-2.5 text-xs leading-relaxed text-slate-100/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <span className="font-semibold text-accent">תוצאה: </span>
                    {d.resultLine}
                  </p>
                  <DemoCtaGroup demoUrl={demoUrl} whatsappHref={waHref} className="mt-5" />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
