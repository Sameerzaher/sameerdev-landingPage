export function UrgencySection() {
  return (
    <section
      className="scroll-mt-24 border-b border-white/5 bg-white/[0.02] px-4 py-6 sm:px-6 sm:py-7"
      aria-labelledby="urgency-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.07] via-surface/40 to-surface/30 px-4 py-4 shadow-card ring-1 ring-white/[0.04] sm:px-6 sm:py-5">
          <h2 id="urgency-heading" className="text-center text-base font-semibold text-white sm:text-lg">
            אני עובד עם מספר מצומצם של עסקים בכל שבוע
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-muted">
            כדי לשמור על איכות ומהירות, אני לוקח עד 3 פרויקטים בשבוע.
          </p>
          <p className="mt-3 text-center text-sm text-muted">
            <span className="font-medium text-accent">זמינות משתנה</span>
            <span className="mx-1">—</span>
            אפשר לשאול בוואטסאפ מה פנוי השבוע. אין התחייבות רק בשליחת הודעה.
          </p>
        </div>
      </div>
    </section>
  );
}
