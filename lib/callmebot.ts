import { buildOwnerNotifyMessage, type LeadFormValues } from "@/lib/lead-messages";

const MAX_TEXT = 3800;

/**
 * Sends a WhatsApp text to your own number via CallMeBot (free tier for personal use).
 * Setup: https://www.callmebot.com/blog/free-api-whatsapp-messages/
 *
 * Env (server-only):
 * - CALLMEBOT_APIKEY — from the bot after you send the activation phrase
 * - CALLMEBOT_PHONE — same WhatsApp number as digits only, e.g. 972548040310
 */
export async function sendLeadViaCallmebot(lead: LeadFormValues): Promise<{ ok: boolean; skipped: boolean }> {
  const apikey = process.env.CALLMEBOT_APIKEY?.trim();
  const phone = process.env.CALLMEBOT_PHONE?.replace(/\D/g, "");

  if (!apikey || !phone) {
    return { ok: true, skipped: true };
  }

  let text = buildOwnerNotifyMessage(lead);
  if (text.length > MAX_TEXT) {
    text = `${text.slice(0, MAX_TEXT)}\n…`;
  }

  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", phone);
  url.searchParams.set("apikey", apikey);
  url.searchParams.set("text", text);

  const res = await fetch(url.toString(), {
    method: "GET",
    cache: "no-store",
    headers: { Accept: "text/plain" },
  });

  if (!res.ok) {
    return { ok: false, skipped: false };
  }

  return { ok: true, skipped: false };
}
