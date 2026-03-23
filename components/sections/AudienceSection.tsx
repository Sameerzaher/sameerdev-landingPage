import { cn } from "@/lib/cn";

const ITEMS = [
  "עסק שעובד רק עם אינסטגרם/וואטסאפ",
  "עסק שמקבל פניות אבל לא בצורה מסודרת",
  "עסק שרוצה להיראות מקצועי יותר",
  "עסק שצריך עמוד פשוט שמביא לקוחות",
] as const;

export function AudienceSection() {
  return (
    <section id="audience" className="section-y scroll-mt-24 border-y border-white/5">
      <div className="mx-auto max-w-3xl">
        <h2 className="section-heading">למי זה מתאים?</h2>
        <p className="section-sub">אם אחד מאלה מתאר אתכם — כנראה שזה בשבילכם.</p>
        <ul className="mt-10 space-y-3 text-start">
          {ITEMS.map((line) => (
            <li
              key={line}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-white/10 bg-surface/50 px-4 py-3.5 text-sm leading-relaxed text-slate-200 sm:text-base",
                "transition hover:border-accent/20",
              )}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent" aria-hidden>
                ✓
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
