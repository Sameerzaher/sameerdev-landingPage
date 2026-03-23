import { audienceContent } from "@/lib/landing-content";
import { cn } from "@/lib/cn";

export function AudienceSection() {
  return (
    <section id="audience" className="section-y scroll-mt-24 border-y border-white/5">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-heading">{audienceContent.title}</h2>
        <p className="section-sub max-w-2xl">{audienceContent.subtitle}</p>
        <ul className="mt-10 grid grid-cols-1 gap-3 text-start sm:grid-cols-2 sm:gap-4">
          {audienceContent.items.map((line) => (
            <li
              key={line}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-white/10 bg-surface/50 px-4 py-3.5 text-sm leading-relaxed text-slate-200 sm:text-base",
                "transition hover:border-accent/20",
              )}
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent"
                aria-hidden
              >
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
