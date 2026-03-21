const testimonials = [
  {
    quote: "שירות מהיר ומקצועי, קיבלתי פניות כבר ביום הראשון",
  },
  {
    quote: "האתר נראה מעולה והלקוחות התחילו לפנות בוואטסאפ",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">מה אומרים על השירות</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted">
          חוות דעת מלקוחות — שקיפות ואמון לפני שמחליטים.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-start shadow-card backdrop-blur-sm sm:p-8"
            >
              <p className="text-base leading-relaxed text-amber-200/90" aria-label="דירוג חמישה כוכבים">
                ⭐⭐⭐⭐⭐
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-slate-100 sm:text-lg">&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
