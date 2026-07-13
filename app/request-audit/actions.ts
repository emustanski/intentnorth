"use server";

import { auditFormSchema } from "@/lib/validations";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendAuditRequestEmail } from "@/lib/email";

export type AuditActionResult =
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitAuditRequest(rawValues: unknown): Promise<AuditActionResult> {
  const parsed = auditFormSchema.safeParse(rawValues);

  if (!parsed.success) {
    return { status: "error", message: "Please check the form for errors and try again." };
  }

  const { website, turnstileToken, ...values } = parsed.data;

  // Honeypot: a real visitor never fills this hidden field in.
  if (website) {
    return { status: "error", message: "Submission could not be processed." };
  }

  const turnstileValid = await verifyTurnstileToken(turnstileToken);
  if (!turnstileValid) {
    return { status: "error", message: "We couldn't verify your submission. Please try again." };
  }

  const result = await sendAuditRequestEmail(values);

  if (!result.ok) {
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}
