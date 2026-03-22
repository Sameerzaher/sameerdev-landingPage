export type Testimonial = {
  name: string;
  businessType: string;
  quote: string;
  result: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "רועי כ.",
    businessType: "מספרה בתל אביב",
    quote: "האתר עלה מהר והלקוחות באמת התחילו לכתוב בוואטסאפ. בלי סיבוכים.",
    result: "פניות ראשונות כבר בשבוע הראשון",
  },
  {
    name: "נועה מ.",
    businessType: "קליניקת קוסמטיקה",
    quote: "סדרנו את המסרים והכפתור בולט — הרבה פחות שאלות חוזרות בטלפון.",
    result: "פחות שיחות 'כמה זה עולה'",
  },
  {
    name: "אחמד ח.",
    businessType: "מורה נהיגה",
    quote: "הצגתי שירותים ומחירים בבירור. הלקוחות יודעים מה לכתוב לי לפני שיחה.",
    result: "יותר פניות איכותיות",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading">מה אומרים הלקוחות</h2>
        <p className="section-sub max-w-xl">חוות דעת לדוגמה — התוצאות משתנות לפי ענף וקהל יעד.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name + t.businessType}
              className="card-elevated flex flex-col border-white/[0.08] bg-white/[0.06] p-6 text-start hover:-translate-y-0.5 hover:border-accent/25 sm:p-7"
            >
              <p className="text-amber-200/90" aria-hidden>
                ⭐⭐⭐⭐⭐
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-100 sm:text-base">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">{t.result}</p>
              <footer className="mt-4 border-t border-white/10 pt-4 text-sm text-muted">
                <span className="font-semibold text-slate-200">{t.name}</span>
                <span className="mt-0.5 block text-xs">{t.businessType}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
