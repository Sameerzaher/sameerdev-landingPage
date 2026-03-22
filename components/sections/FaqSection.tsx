"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type FaqItem = { q: string; a: string };

const FAQ: FaqItem[] = [
  {
    q: "תוך כמה זמן האתר מוכן?",
    a: "בדרך כלל תוך 3–5 ימי עבודה, תלוי בהיקף ובחומרים שצריך להכין.",
  },
  {
    q: "מה צריך לשלוח כדי להתחיל?",
    a: "שם העסק, תחום הפעילות, טקסט בסיסי, לוגו אם יש, וקישורים רלוונטיים.",
  },
  {
    q: "המחיר כולל דומיין ואחסון?",
    a: "המחיר כולל הקמה של האתר. דומיין ואחסון תלויים בצורך ויכולים להיות מתומחרים בנפרד.",
  },
  {
    q: "אפשר לבקש שינויים?",
    a: "כן. בכל חבילה יש סבב תיקונים בסיסי כדי לוודא שהתוצאה מתאימה לעסק שלכם.",
  },
  {
    q: "האתר מתאים למובייל?",
    a: "כן. כל האתרים נבנים בגישה mobile-first ומתאימים לטלפון, טאבלט ומחשב.",
  },
  {
    q: "אפשר לבנות בכמה שפות?",
    a: "כן. אפשר לבנות את האתר בעברית, ערבית או אנגלית, ובחלק מהמקרים גם לשלב כמה שפות.",
  },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <h2 className="section-heading">שאלות נפוצות</h2>
        <p className="section-sub">תשובות ישירות — נשמח לפרט יותר בוואטסאפ.</p>
        <div className="mt-10 space-y-3">
          {FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-white/10 bg-surface/50 shadow-card transition hover:border-white/18"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-start text-base font-medium text-white sm:px-5 sm:py-[1.125rem]"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="leading-snug">{item.q}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-muted transition duration-200",
                      open && "rotate-180 bg-accent/10 text-accent",
                    )}
                    aria-hidden
                  >
                    <ChevronIcon className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-white/5 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-5">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
