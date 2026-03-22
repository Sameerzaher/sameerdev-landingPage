"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { buildVisitorWhatsappMessage, type LeadFormValues } from "@/lib/lead-messages";
import { getWhatsappLink } from "@/lib/whatsapp";

export type { LeadFormValues } from "@/lib/lead-messages";

const initial: LeadFormValues = {
  name: "",
  businessType: "",
  phone: "",
  message: "",
};

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" className="stroke-accent/35" strokeWidth="2" />
      <circle cx="24" cy="24" r="18" className="fill-accent/15" />
      <path
        className="stroke-accent"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 24.5 L20.5 30 L33 17"
        fill="none"
      />
    </svg>
  );
}

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notifyError, setNotifyError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const snapshot: LeadFormValues = { ...values };
    setSubmitting(true);
    setNotifyError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(snapshot),
      });
      let data: { ok?: boolean } = {};
      try {
        data = (await res.json()) as { ok?: boolean };
      } catch {
        /* ignore */
      }
      if (!res.ok || !data.ok) {
        setNotifyError("לא הצלחנו לשלוח התראה אוטומטית — אפשר עדיין לפתוח וואטסאפ למטה.");
      }
    } catch {
      setNotifyError("לא הצלחנו לשלוח התראה אוטומטית — אפשר עדיין לפתוח וואטסאפ למטה.");
    }

    const url = getWhatsappLink(buildVisitorWhatsappMessage(snapshot));
    trackEvent("lead_form_submit", snapshot);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.assign(url);

    setSubmitting(false);
    setSubmitted(true);
    setValues(initial);
  }

  if (submitted) {
    return (
      <div className="space-y-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <SuccessIcon className="h-14 w-14" />
          <div>
            <p className="text-lg font-semibold text-white">הפנייה נשלחה</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              נפתח חלון וואטסאפ עם הפרטים שלכם — אפשר לערוך או לשלוח את ההודעה משם.
            </p>
          </div>
        </div>
        {notifyError ? (
          <div
            role="status"
            className="rounded-xl border border-amber-500/25 bg-amber-500/[0.08] px-4 py-3 text-xs leading-relaxed text-amber-100/95"
          >
            {notifyError}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mx-auto max-w-lg space-y-5 text-start", submitting && "motion-safe:opacity-[0.97]")}
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-4">
        <div className="sm:col-span-1">
          <label htmlFor="lead-name" className="form-label">
            שם מלא
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={submitting}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="form-input"
            placeholder="לדוגמה: דני כהן"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="lead-business" className="form-label">
            סוג עסק
          </label>
          <input
            id="lead-business"
            name="businessType"
            type="text"
            required
            disabled={submitting}
            value={values.businessType}
            onChange={(e) => setValues((v) => ({ ...v, businessType: e.target.value }))}
            className="form-input"
            placeholder="לדוגמה: מספרה, מסעדה"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-phone" className="form-label">
          טלפון
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          dir="ltr"
          disabled={submitting}
          className="form-input text-left"
          placeholder="05X-XXX-XXXX"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="lead-message" className="form-label">
          הודעה <span className="font-normal text-muted">(אופציונלי)</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          disabled={submitting}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={cn("form-input min-h-[128px] resize-y leading-relaxed")}
          placeholder="מה חשוב לכם באתר?"
        />
      </div>

      <div className="pt-1">
        <Button
          type="submit"
          disabled={submitting}
          size="lg"
          className="w-full shadow-glow transition hover:brightness-110 disabled:opacity-60"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#06210f]/30 border-t-[#06210f]"
                aria-hidden
              />
              שולח…
            </span>
          ) : (
            "שליחה"
          )}
        </Button>
      </div>

      <div className="border-t border-white/[0.06] pt-5">
        <p className="text-center text-[13px] leading-relaxed text-muted">
          <span className="block text-slate-400">מה קורה אחרי שליחה?</span>
          <span className="mt-1.5 block text-muted">
            בעל האתר יכול לקבל התראה בוואטסאפ (אחרי הגדרה), ובמקביל נפתח לכם צ&apos;אט עם אותם פרטים.
          </span>
        </p>
      </div>
    </form>
  );
}
