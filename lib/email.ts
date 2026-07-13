import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";
import { serviceOptionLabels, budgetOptionLabels, contactMethodOptionLabels } from "@/lib/validations";
import type { AuditFormValues, ContactFormValues } from "@/lib/validations";

function getResendClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) {
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type SendResult = { ok: true } | { ok: false; error: string };

export async function sendAuditRequestEmail(
  values: Omit<AuditFormValues, "website" | "turnstileToken">,
): Promise<SendResult> {
  const resend = getResendClient();
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resend || !fromEmail) {
    return { ok: false, error: "Email delivery is not configured." };
  }

  const rows: [string, string][] = [
    ["Full name", values.fullName],
    ["Work email", values.workEmail],
    ["Company", values.companyName],
    ["Website / app / profile URL", values.siteUrl],
    ["Service of interest", serviceOptionLabels[values.serviceOfInterest]],
    ["Primary goal", values.primaryGoal],
    ["Current challenge", values.currentChallenge],
    ["Budget range", values.budgetRange ? budgetOptionLabels[values.budgetRange] : "Not specified"],
    ["Preferred contact method", contactMethodOptionLabels[values.preferredContact]],
  ];

  const html = `
    <h2>New audit request — ${escapeHtml(siteConfig.name)}</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold;vertical-align:top;">${escapeHtml(label)}</td><td>${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: siteConfig.contactEmail,
      replyTo: values.workEmail,
      subject: `[Audit Request] ${values.companyName} — ${serviceOptionLabels[values.serviceOfInterest]}`,
      html,
    });

    if (error) {
      return { ok: false, error: error.message ?? "Unknown email delivery error." };
    }

    await resend.emails
      .send({
        from: fromEmail,
        to: values.workEmail,
        subject: `We received your audit request — ${siteConfig.name}`,
        html: `<p>Hi ${escapeHtml(values.fullName)},</p><p>Thank you — your request has been received. We'll review the information manually and contact you about the appropriate next step.</p><p>${escapeHtml(siteConfig.name)}</p>`,
      })
      .catch(() => undefined);

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email delivery error." };
  }
}

export async function sendContactEmail(
  values: Omit<ContactFormValues, "website" | "turnstileToken">,
): Promise<SendResult> {
  const resend = getResendClient();
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resend || !fromEmail) {
    return { ok: false, error: "Email delivery is not configured." };
  }

  const html = `
    <h2>New general inquiry — ${escapeHtml(siteConfig.name)}</h2>
    <p><strong>Full name:</strong> ${escapeHtml(values.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(values.email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: siteConfig.contactEmail,
      replyTo: values.email,
      subject: `[General Inquiry] ${values.fullName}`,
      html,
    });

    if (error) {
      return { ok: false, error: error.message ?? "Unknown email delivery error." };
    }

    await resend.emails
      .send({
        from: fromEmail,
        to: values.email,
        subject: `We received your message — ${siteConfig.name}`,
        html: `<p>Hi ${escapeHtml(values.fullName)},</p><p>Thank you for reaching out. We've received your message and will get back to you soon.</p><p>${escapeHtml(siteConfig.name)}</p>`,
      })
      .catch(() => undefined);

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email delivery error." };
  }
}
