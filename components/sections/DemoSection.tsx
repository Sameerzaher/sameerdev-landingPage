import { Button } from "@/components/Button";
import { getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type DemoCard = {
  id: string;
  title: string;
  businessType: string;
  bulletPoints: readonly string[];
  resultLine: string;
  waMessage: string;
  gradient: string;
  frameRing: string;
  accentBar: string;
  /** Short label shown in mock header (Hebrew, decorative). */
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
    gradient: "from-emerald-500/25 via-teal-600/10 to-background",
    frameRing: "ring-emerald-500/25",
    accentBar: "from-emerald-400 to-teal-500",
    mockBrand: "FitWithNoa",
  },
  {
    id: "kingfade",
    title: "King Fade – אתר לספר",
    businessType: "מספרה · שירות מקומי",
    bulletPoints: ["עלייה לאוויר תוך 3 ימים", "יותר פניות דרך וואטסאפ", "קל לשלוח ללקוחות לינק אחד מסודר"],
    resultLine: "פניות מסודרות מהעמוד — לינק אחד במקום הסברים בחצי שעה",
    waMessage: "היי, מעוניין בדוגמה בסגנון King Fade — ספר עם גלריה ווואטסאפ.",
    gradient: "from-amber-500/20 via-orange-600/10 to-background",
    frameRing: "ring-amber-500/20",
    accentBar: "from-amber-400 to-orange-500",
    mockBrand: "King Fade",
  },
  {
    id: "driveright",
    title: "DriveRight – אתר למורה נהיגה",
    businessType: "לימוד נהיגה · אזורי שירות",
    bulletPoints: ["מחירים וחבילות ברורים", "אזור שירות ושעות קבלה", "יותר פניות רלוונטיות מתלמידים"],
    resultLine: "תלמידים יודעים מה לשאול לפני שמחייגים",
    waMessage: "היי, רוצה דוגמה כמו DriveRight — מורה נהיגה עם מחירים ווואטסאפ.",
    gradient: "from-sky-500/20 via-blue-600/10 to-background",
    frameRing: "ring-sky-500/25",
    accentBar: "from-sky-400 to-blue-500",
    mockBrand: "DriveRight",
  },
] as const;

function PhoneMockupPreview({
  accentBar,
  frameRing,
  brand,
}: {
  accentBar: string;
  frameRing: string;
  brand: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[260px] rounded-[1.35rem] border border-white/10 bg-[#070b14] p-2 shadow-2xl ring-2 transition group-hover:ring-accent/35 sm:max-w-none",
        frameRing,
      )}
    >
      <div className="flex items-center justify-between px-2 pb-1.5 pt-0.5">
        <span className="text-[8px] font-semibold tracking-wide text-white/45" dir="ltr">
          {brand}
        </span>
        <span className="text-[9px] font-medium tabular-nums text-white/35">9:41</span>
        <span className="flex gap-0.5" aria-hidden>
          <span className="h-1 w-1 rounded-full bg-white/25" />
          <span className="h-1 w-1 rounded-full bg-white/25" />
          <span className="h-1 w-1 rounded-full bg-white/25" />
        </span>
      </div>
      <div className="overflow-hidden rounded-[1.05rem] bg-[#0c1222] ring-1 ring-white/5">
        <div className={cn("relative h-[5.25rem] bg-gradient-to-bl p-3 opacity-95", accentBar)}>
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1.5">
              <div className="h-1.5 w-12 rounded bg-white/40" />
              <div className="h-2 w-24 max-w-[85%] rounded bg-white/25" />
              <div className="h-1.5 w-20 rounded bg-white/18" />
            </div>
            <span className="rounded-md bg-black/20 px-1.5 py-0.5 text-[7px] font-medium text-white/90 ring-1 ring-white/15">
              דף נחיתה
            </span>
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="flex items-center justify-between border-b border-white/6 pb-2">
            <span className="text-[8px] font-medium text-white/40">שירותים</span>
            <div className="flex gap-1">
              <span className="h-1 w-4 rounded-full bg-white/12" />
              <span className="h-1 w-4 rounded-full bg-white/12" />
              <span className="h-1 w-4 rounded-full bg-white/12" />
            </div>
          </div>
          <div className="h-1.5 w-[92%] rounded bg-white/12" />
          <div className="h-1.5 w-full rounded bg-white/7" />
          <div className="h-1.5 w-[70%] rounded bg-white/7" />
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10" />
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] ring-1 ring-white/10" />
          </div>
          <div className="mx-auto mt-1 flex h-9 w-[88%] items-center justify-center gap-1 rounded-xl bg-[#25D366] text-[10px] font-bold text-[#06210f] shadow-md shadow-black/25 ring-1 ring-black/10">
            <span className="inline-block h-2 w-2 rounded-full bg-[#06210f]/30" aria-hidden />
            WhatsApp
          </div>
        </div>
      </div>
      <p className="px-1 pb-0.5 pt-1.5 text-center text-[8px] text-white/30">תצוגה לדוגמה בלבד</p>
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <figure
              key={d.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/40 shadow-card transition hover:border-accent/30 hover:shadow-xl hover:shadow-black/30 focus-within:border-accent/35"
            >
              <div className={`relative bg-gradient-to-b ${d.gradient} p-4 pt-6 sm:p-5`}>
                <PhoneMockupPreview accentBar={d.accentBar} frameRing={d.frameRing} brand={d.mockBrand} />
              </div>
              <figcaption className="flex flex-1 flex-col border-t border-white/5 bg-surface/30 px-4 py-5 text-start">
                <span className="inline-flex w-fit rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  מקרה בוחן
                </span>
                <span className="mt-2 text-base font-semibold leading-snug text-white">{d.title}</span>
                <span className="mt-1 text-xs font-medium text-accent/90">{d.businessType}</span>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                  {d.bulletPoints.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent" aria-hidden>
                        ✔
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 rounded-lg border border-accent/15 bg-accent/[0.06] px-2.5 py-2 text-xs leading-relaxed text-slate-200">
                  <span className="font-semibold text-accent">תוצאה: </span>
                  {d.resultLine}
                </p>
                <div className="mt-4">
                  <Button
                    href={getWhatsappLink(d.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    className="w-full font-semibold shadow-glow ring-2 ring-accent/35 transition hover:brightness-110 hover:ring-accent/50"
                  >
                    צפה בדוגמה
                  </Button>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
