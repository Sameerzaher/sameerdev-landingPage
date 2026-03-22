import { NextResponse } from "next/server";
import { sendLeadViaCallmebot } from "@/lib/callmebot";
import type { LeadFormValues } from "@/lib/lead-messages";

export const runtime = "nodejs";

const LIMITS = {
  name: 120,
  businessType: 160,
  phone: 40,
  message: 2000,
} as const;

function clamp(s: string, max: number): string {
  const t = s.trim();
  return t.length <= max ? t : t.slice(0, max);
}

function parseLead(data: unknown): LeadFormValues | null {
  if (!data || typeof data !== "object") return null;
  const o = data as Record<string, unknown>;
  const name = typeof o.name === "string" ? clamp(o.name, LIMITS.name) : "";
  const businessType = typeof o.businessType === "string" ? clamp(o.businessType, LIMITS.businessType) : "";
  const phone = typeof o.phone === "string" ? clamp(o.phone, LIMITS.phone) : "";
  const message = typeof o.message === "string" ? clamp(o.message, LIMITS.message) : "";

  if (!name || !businessType || !phone) return null;
  return { name, businessType, phone, message };
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const lead = parseLead(json);
  if (!lead) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const result = await sendLeadViaCallmebot(lead);

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: "notify_failed", notified: false },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    notified: !result.skipped,
    skipped: result.skipped,
  });
}
