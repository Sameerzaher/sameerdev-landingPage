"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export type LeadFormValues = {
  name: string;
  businessType: string;
  phone: string;
  message: string;
};

const initial: LeadFormValues = {
  name: "",
  businessType: "",
  phone: "",
  message: "",
};

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("[LeadForm]", values);
    trackEvent("lead_form_submit", values);
    setSubmitted(true);
    setValues(initial);
  }

  if (submitted) {
    return (
      <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-6 text-center text-sm leading-relaxed text-slate-100">
        תודה! קיבלתי את הפרטים — מומלץ גם לשלוח הודעה בוואטסאפ לתיאום מהיר.
      </p>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/12 bg-background/60 px-4 py-3.5 text-slate-100 placeholder:text-muted/70 outline-none transition focus:border-accent/45 focus:bg-background/80 focus:ring-2 focus:ring-accent/15";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5 text-start">
      <div>
        <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-slate-200">
          שם מלא
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass}
          placeholder="לדוגמה: דני כהן"
        />
      </div>
      <div>
        <label htmlFor="lead-business" className="mb-1.5 block text-sm font-medium text-slate-200">
          סוג עסק
        </label>
        <input
          id="lead-business"
          name="businessType"
          type="text"
          required
          value={values.businessType}
          onChange={(e) => setValues((v) => ({ ...v, businessType: e.target.value }))}
          className={inputClass}
          placeholder="לדוגמה: מספרה, מסעדה, קליניקה"
        />
      </div>
      <div>
        <label htmlFor="lead-phone" className="mb-1.5 block text-sm font-medium text-slate-200">
          טלפון
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          dir="ltr"
          className={inputClass}
          placeholder="05X-XXX-XXXX"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
      </div>
      <div>
        <label htmlFor="lead-message" className="mb-1.5 block text-sm font-medium text-slate-200">
          הודעה (אופציונלי)
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={cn(inputClass, "resize-y min-h-[120px]")}
          placeholder="מה חשוב לכם באתר?"
        />
      </div>
      <Button type="submit" className="w-full shadow-glow transition hover:brightness-110">
        שליחה
      </Button>
      <p className="text-center text-xs text-muted">
        הטופס לשימוש פנימי — אין שמירה בשרת בגרסה זו. נשמר בקונסול לצורך בדיקה.
      </p>
    </form>
  );
}
