const testimonials = [
  "⭐⭐⭐⭐⭐ שירות מהיר ומקצועי, קיבלתי פניות כבר ביום הראשון",
  "⭐⭐⭐⭐⭐ האתר נראה מעולה והלקוחות התחילו לפנות בוואטסאפ",
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">מה אומרים על השירות</h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {testimonials.map((text, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 text-center shadow-card backdrop-blur-sm sm:p-8"
            >
              <p className="text-base font-medium leading-relaxed text-slate-100 sm:text-lg">{text}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
