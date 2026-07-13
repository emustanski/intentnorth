/**
 * Cloudflare Turnstile server-side verification.
 *
 * Graceful degradation: when TURNSTILE_SECRET_KEY (or the public site key)
 * is not configured, verification is skipped and the caller falls back to
 * honeypot-only validation. This keeps local development usable before a
 * Turnstile account exists. In production, set both env vars — leaving them
 * unset there means submissions are accepted on honeypot alone, which is a
 * materially weaker spam defense.
 */

const VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export function isTurnstileConfigured(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}

export async function verifyTurnstileToken(token: string | undefined | null): Promise<boolean> {
  if (!isTurnstileConfigured()) {
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch(VERIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
