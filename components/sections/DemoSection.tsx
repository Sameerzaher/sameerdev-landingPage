import { Button } from "@/components/Button";
import { getWhatsappLink } from "@/lib/whatsapp";

type DemoCard = {
  title: string;
  businessType: string;
  valueProposition: string;
  tags: readonly string[];
  waMessage: string;
  gradient: string;
  frameRing: string;
  accentBar: string;
};

const demos: readonly DemoCard[] = [
  {
    title: "דף נחיתה למספרה",
    businessType: "מספרה · שירות מקומי",
    valueProposition: "שעות, מחירים ופנייה לוואטסאפ בלי בלבול — לקוח יודע מה לבקש.",
    tags: ["Mobile", "WhatsApp", "Fast"],
    waMessage:
      "היי, אני מעוניין בדוגמה דומה לדף נחיתה למספרה (מובייל + וואטסאפ). אפשר לפרט?",
    gradient: "from-amber-500/20 via-orange-600/10 to-background",
    frameRing: "ring-amber-500/20",
    accentBar: "from-amber-400 to-orange-500",
  },
  {
    title: "עמוד למאמן כושר",
    businessType: "מאמן כושר · אימון אישי",
    valueProposition: "מסר ברור על חבילות וזמינות — בנייד נראה מקצועי ולא עמוס.",
    tags: ["Mobile", "WhatsApp", "Fast"],
    waMessage:
      "היי, רוצה דוגמה דומה לעמוד למאמן כושר — עם דגש על מובייל ופנייה מהירה.",
    gradient: "from-emerald-500/25 via-teal-600/10 to-background",
    frameRing: "ring-emerald-500/25",
    accentBar: "from-emerald-400 to-teal-500",
  },
  {
    title: "אתר למורה נהיגה",
    businessType: "מורה נהיגה · ליווי תלמידים",
    valueProposition: "מחירים, אזור שירות והסבר קצר — לפני שמתקשרים כבר יודעים מה מציעים.",
    tags: ["Mobile", "WhatsApp", "Fast"],
    waMessage:
      "היי, מחפש דוגמה לאתר למורה נהיגה — עמוד אחד ברור עם וואטסאפ.",
    gradient: "from-sky-500/20 via-blue-600/10 to-background",
    frameRing: "ring-sky-500/25",
    accentBar: "from-sky-400 to-blue-500",
  },
] as const;

export function DemoSection() {
  return (
    <section id="demo" className="section-y scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">איך זה נראה בפועל</h2>
        <p className="section-sub max-w-xl">
          דוגמאות ממוקדות — עיצוב נקי, טעינה מהירה ופנייה אחת ברורה ללקוח.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <figure
              key={d.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/40 shadow-card transition hover:border-accent/25 hover:shadow-xl hover:shadow-black/30 focus-within:border-accent/30"
            >
              <div className={`relative bg-gradient-to-b ${d.gradient} p-4 pt-6 sm:p-5`}>
                <div
                  className={`mx-auto w-full max-w-[260px] rounded-[1.35rem] border border-white/10 bg-[#070b14] p-2 shadow-2xl ring-2 ${d.frameRing} transition group-hover:ring-accent/30 sm:max-w-none`}
                >
                  <div className="flex items-center justify-between px-2 pb-1.5 pt-0.5">
                    <span className="h-1 w-10 rounded-full bg-white/15" />
                    <span className="text-[9px] font-medium tabular-nums text-white/35">9:41</span>
                    <span className="w-10" />
                  </div>
                  <div className="overflow-hidden rounded-[1.05rem] bg-[#0c1222] ring-1 ring-white/5">
                    <div className={`h-20 bg-gradient-to-bl ${d.accentBar} p-4 opacity-90`}>
                      <div className="h-2 w-16 rounded bg-white/35" />
                      <div className="mt-2 h-1.5 w-28 rounded bg-white/20" />
                    </div>
                    <div className="space-y-2.5 p-3">
                      <div className="h-2 w-3/4 rounded bg-white/15" />
                      <div className="h-2 w-full rounded bg-white/8" />
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="aspect-[4/3] rounded-lg bg-white/[0.06] ring-1 ring-white/10" />
                        <div className="aspect-[4/3] rounded-lg bg-white/[0.06] ring-1 ring-white/10" />
                      </div>
                      <div className="mx-auto mt-2 flex h-9 w-[88%] items-center justify-center rounded-xl bg-[#25D366] text-[10px] font-bold text-[#06210f] shadow-md shadow-black/20">
                        WhatsApp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="flex flex-1 flex-col border-t border-white/5 bg-surface/30 px-4 py-5 text-start">
                <span className="text-base font-semibold text-white">{d.title}</span>
                <span className="mt-1 text-xs font-medium text-accent/90">{d.businessType}</span>
                <span className="mt-2 text-sm leading-snug text-muted">{d.valueProposition}</span>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    href={getWhatsappLink(d.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="md"
                    className="w-full border-white/15 text-sm transition hover:border-accent/40 hover:bg-accent/5 focus-visible:ring-2 focus-visible:ring-accent/50"
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
