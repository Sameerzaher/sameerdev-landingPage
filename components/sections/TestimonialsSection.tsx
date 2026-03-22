export type Testimonial = {
  name: string;
  businessType: string;
  quote: string;
  result: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "אחמד ח׳טיב",
    businessType: "ספר",
    quote:
      "האתר יצא נקי, מהיר ונראה מקצועי. הרבה יותר קל לי לשלוח לקוחות ללינק אחד מסודר.",
    result: "יותר סדר ופניות דרך וואטסאפ",
  },
  {
    name: "נועה לוי",
    businessType: "מאמנת כושר",
    quote:
      "תוך כמה ימים היה לי עמוד שנראה טוב בנייד ועוזר לי להסביר בדיוק מה אני מציעה.",
    result: "נוכחות מקצועית יותר אונליין",
  },
  {
    name: "סמיר דראושה",
    businessType: "מורה נהיגה",
    quote: "הייתי צריך משהו פשוט, ברור ומהיר — וזה בדיוק מה שקיבלתי.",
    result: "קל יותר לקבל פניות מתלמידים",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-heading">מה אומרים הלקוחות</h2>
        <p className="section-sub max-w-xl">
          חוות דעת אמיתיות מעסקים כמוך — שקיפות לפני שמחליטים.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="card-elevated flex flex-col border-white/[0.08] bg-white/[0.06] p-6 text-start hover:-translate-y-0.5 hover:border-accent/25 sm:p-7"
            >
              <header className="border-b border-white/10 pb-4">
                <p className="text-base font-bold text-white">{t.name}</p>
                <p className="mt-1 text-sm text-accent/95">{t.businessType}</p>
              </header>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-100 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p
                className="mt-4 inline-flex w-fit rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent ring-1 ring-accent/25"
                role="status"
              >
                {t.result}
              </p>
              <p className="mt-3 text-[11px] text-slate-500" aria-hidden>
                ⭐⭐⭐⭐⭐
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
