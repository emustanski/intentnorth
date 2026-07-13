"use server";

import { contactFormSchema } from "@/lib/validations";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendContactEmail } from "@/lib/email";

export type ContactActionResult =
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(rawValues: unknown): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(rawValues);

  if (!parsed.success) {
    return { status: "error", message: "Please check the form for errors and try again." };
  }

  const { website, turnstileToken, ...values } = parsed.data;

  if (website) {
    return { status: "error", message: "Submission could not be processed." };
  }

  const turnstileValid = await verifyTurnstileToken(turnstileToken);
  if (!turnstileValid) {
    return { status: "error", message: "We couldn't verify your submission. Please try again." };
  }

  const result = await sendContactEmail(values);

  if (!result.ok) {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}
