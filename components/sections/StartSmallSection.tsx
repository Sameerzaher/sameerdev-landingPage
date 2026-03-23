import { startSmallContent } from "@/lib/landing-content";

export function StartSmallSection() {
  return (
    <section
      id="start-small"
      className="scroll-mt-24 border-t border-white/5 px-4 py-10 sm:px-6 sm:py-12"
      aria-labelledby="start-small-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] via-surface/50 to-surface/30 px-5 py-6 shadow-card ring-1 ring-white/[0.06] sm:px-8 sm:py-8">
          <h2 id="start-small-heading" className="text-lg font-bold tracking-tight text-white sm:text-xl">
            {startSmallContent.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/95 sm:text-base">{startSmallContent.body}</p>
          <p className="mt-3 border-t border-white/10 pt-3 text-sm text-muted sm:text-[15px]">
            {startSmallContent.supporting}
          </p>
        </div>
      </div>
    </section>
  );
}
