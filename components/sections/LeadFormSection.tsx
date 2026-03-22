import { LeadForm } from "@/components/LeadForm";

export function LeadFormSection() {
  return (
    <section
      id="lead-form"
      className="section-y scroll-mt-24 border-y border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="section-heading">השארו פרטים</h2>
        <p className="section-sub">אם נוח לכם טופס — מלאו את השדות. אחרת, אפשר תמיד לדבר ישירות בוואטסאפ.</p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-surface-elevated/50 p-6 shadow-card backdrop-blur-sm sm:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
