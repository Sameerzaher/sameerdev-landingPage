/** Live demo URLs for case-study cards (open in new tab). Use "#" until deployed. */
export const DEMO_URLS = {
  kingfade: "https://sameerdev-barbertemplate.vercel.app/",
  /** Placeholder: עדיין אין דומיין חי — נשארים באותו סקשן */
  fitwithnoa: "#demo",
  driveright: "#demo",
} as const;

export type DemoCaseId = keyof typeof DEMO_URLS;
