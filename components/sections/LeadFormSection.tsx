import { LeadForm } from "@/components/LeadForm";

export function LeadFormSection() {
  return (
    <section
      id="lead-form"
      className="section-y scroll-mt-24 border-y border-white/5 bg-gradient-to-b from-accent/[0.04] via-transparent to-transparent"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 text-xs font-medium text-accent">
            טופס פניות
          </p>
          <h2 className="section-heading">השארו פרטים</h2>
          <p className="section-sub">
            אם נוח לכם טופס — מלאו את השדות. אחרת, אפשר תמיד לדבר ישירות בוואטסאפ.
          </p>
        </div>

        <div className="relative mt-10">
          <div
            className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-accent/25 via-white/[0.06] to-transparent opacity-60 blur-sm"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-gradient-to-b from-surface-elevated/95 to-surface/90 p-1 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.05]">
            <div className="h-1 w-full rounded-t-[1.2rem] bg-gradient-to-l from-transparent via-accent/70 to-accent/30" aria-hidden />
            <div className="px-5 pb-8 pt-7 sm:px-9 sm:pb-9 sm:pt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
