import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Basic",
    price: "1500₪",
    description: "נכנסים לאינטרנט בצורה מסודרת.",
    features: [
      "עמוד אחד ממוקד שמביא פניות",
      "מותאם לנייד",
      "כפתור וואטסאפ בולט",
      "אחסון והקמה בסיסיים",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "2500₪",
    description: "הבחירה הנפוצה לרוב העסקים.",
    features: [
      "אתר מלא: בית, שירותים ויצירת קשר",
      "מבנה שמסביר מה אתם נותנים ומוביל לפנייה",
      "כוונון טקסטים וקריאות לפעולה להמרה",
      "התאמות קטנות אחרי השקה כלולות",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "3500₪",
    description: "כשצריך יותר נוכחות ותוכן.",
    features: [
      "כל מה שב־Pro, עם יותר עמודים ותוכן",
      "מותג ויזואלי חזק יותר (פריסה מדויקת)",
      "סעיפים נוספים לפי סוג העסק",
      "ליווי צמוד לאורך תהליך האפיון והעלייה לאוויר",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const wa = getWhatsappLink();

  return (
    <section id="pricing" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">מחירים שקופים</h2>
        <p className="section-sub max-w-xl">בחרו חבילה — ונתאים את הפרטים בוואטסאפ.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 shadow-card transition duration-200",
                plan.popular
                  ? "border-accent/50 bg-surface/80 shadow-glow lg:scale-[1.02]"
                  : "border-white/10 bg-surface/40 hover:-translate-y-0.5 hover:border-white/20",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-[#06210f]">
                  הכי פופולרי
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>
              <p className="mt-6 text-4xl font-extrabold tracking-tight text-white">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                variant={plan.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                בואו נדבר
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
