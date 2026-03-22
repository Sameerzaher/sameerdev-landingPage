/**
 * Analytics placeholder — wire to GA4 / Plausible / etc. later.
 */
export function trackEvent(name: string, payload?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, payload ?? {});
  }
  // Future: window.gtag?.("event", name, payload);
}
