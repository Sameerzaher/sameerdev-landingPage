"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CTA_WHATSAPP_MESSAGES } from "@/lib/cta-presets";
import { getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export type PortfolioProject = {
  title: string;
  description: string;
  category: string;
  imageClass: string;
};

const PROJECTS: PortfolioProject[] = [
  {
    title: "מספרה דורון",
    description: "דף נחיתה עם גלריה וכפתור וואטסאפ — יותר תורים בלי פרסום מסובך.",
    category: "ספר",
    imageClass: "from-amber-600/40 via-amber-900/30 to-background",
  },
  {
    title: "משרד עו״ד כהן",
    description: "מראה מקצועי, טפסי יצירת קשר ווואטסאפ — לקוחות מגיעים מוכנים.",
    category: "משפטים",
    imageClass: "from-slate-500/35 via-slate-800/40 to-background",
  },
  {
    title: "מסעדת פפרוני",
    description: "תפריט, שעות פתיחה וכפתור הזמנה בוואטסאפ.",
    category: "מסעדה",
    imageClass: "from-red-600/30 via-rose-900/25 to-background",
  },
  {
    title: "קליניקת סקין",
    description: "אתר קלין עם טפסים ושעות — פניות ישירות לוואטסאפ.",
    category: "קוסמטיקה",
    imageClass: "from-fuchsia-500/25 via-purple-900/30 to-background",
  },
  {
    title: "סטודיו לכושר",
    description: "חבילות אימון ומחירים ברורים, פנייה בקליק.",
    category: "כושר",
    imageClass: "from-emerald-500/35 via-teal-900/30 to-background",
  },
  {
    title: "חנות פירות השכונה",
    description: "מבצעים, מיקום ווואטסאפ להזמנות מהירות.",
    category: "קמעונאות",
    imageClass: "from-lime-500/20 via-green-900/25 to-background",
  },
];

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

export function PortfolioSection() {
  const [open, setOpen] = useState<PortfolioProject | null>(null);
  const titleId = useId();

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <section id="portfolio" className="section-y scroll-mt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">פרויקטים נבחרים</h2>
        <p className="section-sub">דוגמאות לסגנונות שונים — כל פרויקט מותאם לעסק ולמטרות שלו.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/50 shadow-card transition hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-black/35"
            >
              <div
                className={`relative aspect-[16/10] bg-gradient-to-br ${project.imageClass} transition duration-300 group-hover:brightness-[1.06]`}
                role="img"
                aria-label={`תצוגה מקדימה: ${project.title}`}
              >
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="h-full w-full max-w-[200px] rounded-xl bg-black/35 ring-1 ring-white/10 backdrop-blur-[2px]" />
                </div>
                <span className="absolute start-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white/95 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 text-start sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                <button
                  type="button"
                  className={cn(
                    "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition",
                    "hover:border-accent/50 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                    "active:scale-[0.98] sm:w-auto sm:px-6 sm:py-3 sm:text-base",
                  )}
                  onClick={() => setOpen(project)}
                >
                  צפה בפרויקט
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-end justify-center p-0 sm:items-center sm:p-6"
            role="presentation"
          >
            <button
              type="button"
              className="absolute inset-0 z-0 bg-black/70 backdrop-blur-[3px] animate-backdrop-in motion-reduce:animate-none"
              aria-label="סגור"
              onClick={close}
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={cn(
                "relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-lg flex-col overflow-hidden border border-white/12 bg-surface-elevated shadow-[0_25px_80px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.06]",
                "rounded-t-2xl sm:max-h-[85vh] sm:rounded-2xl",
                "animate-modal-in motion-reduce:animate-none",
              )}
            >
            <div className={cn("relative shrink-0 bg-gradient-to-br", open.imageClass)}>
              <div className="relative aspect-[16/10]">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="h-full w-full max-w-[220px] rounded-xl bg-black/35 ring-1 ring-white/10 backdrop-blur-[2px]" />
                </div>
                <span className="absolute start-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white/95 backdrop-blur-md">
                  {open.category}
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="absolute end-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                  aria-label="סגור חלון"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto border-t border-white/10 p-5 text-start sm:p-6">
              <h3 id={titleId} className="text-xl font-bold tracking-tight text-white">
                {open.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{open.description}</p>
              <p className="mt-3 rounded-lg bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-slate-400 ring-1 ring-white/5">
                תצוגה להמחשה בלבד — לא קישור לאתר חיצוני.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-3">
                <Button type="button" variant="outline" className="order-2 w-full sm:order-1 sm:w-auto" onClick={close}>
                  סגור
                </Button>
                <Button
                  href={getWhatsappLink(CTA_WHATSAPP_MESSAGES.portfolio(open.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-1 w-full sm:order-2 sm:w-auto"
                  onClick={close}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  שאלו אותי בוואטסאפ
                </Button>
              </div>
            </div>
          </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
