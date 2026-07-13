import { z } from "zod";

export const serviceOptions = [
  "website-seo",
  "website-performance",
  "social-media-optimization",
  "app-store-optimization",
  "positioning",
  "audience-strategy",
  "optimization-plans",
  "not-sure",
] as const;

export const serviceOptionLabels: Record<(typeof serviceOptions)[number], string> = {
  "website-seo": "Website SEO Audit & Optimization",
  "website-performance": "Website Performance & UX Review",
  "social-media-optimization": "Social Media Account Optimization",
  "app-store-optimization": "App Store Optimization",
  positioning: "Brand & Market Positioning",
  "audience-strategy": "Target-Audience Research",
  "optimization-plans": "Prioritized Digital Optimization Plan",
  "not-sure": "Not sure yet",
};

export const budgetOptions = [
  "under-1k",
  "1k-5k",
  "5k-15k",
  "15k-plus",
  "prefer-not-to-say",
] as const;

export const budgetOptionLabels: Record<(typeof budgetOptions)[number], string> = {
  "under-1k": "Under $1,000",
  "1k-5k": "$1,000 – $5,000",
  "5k-15k": "$5,000 – $15,000",
  "15k-plus": "$15,000+",
  "prefer-not-to-say": "Prefer not to say",
};

export const contactMethodOptions = ["email", "phone", "either"] as const;

export const contactMethodOptionLabels: Record<(typeof contactMethodOptions)[number], string> = {
  email: "Email",
  phone: "Phone",
  either: "Either is fine",
};

const honeypot = z
  .string()
  .max(0, "Submission rejected.")
  .optional()
  .or(z.literal(""));

const turnstileToken = z.string().optional().or(z.literal(""));

export const auditFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  workEmail: z.string().trim().email("Enter a valid work email address.").max(200),
  companyName: z.string().trim().min(2, "Enter your company name.").max(150),
  siteUrl: z.string().trim().min(3, "Enter a website, app, or social profile URL.").max(300),
  serviceOfInterest: z.enum(serviceOptions, {
    error: "Select the service you're interested in.",
  }),
  primaryGoal: z.string().trim().min(10, "Tell us a bit more about your primary goal.").max(1000),
  currentChallenge: z.string().trim().min(10, "Tell us a bit more about the current challenge.").max(1500),
  budgetRange: z.enum(budgetOptions).optional(),
  preferredContact: z.enum(contactMethodOptions, {
    error: "Select a preferred contact method.",
  }),
  consent: z.literal(true, {
    error: "You must consent to be contacted about your request.",
  }),
  website: honeypot,
  turnstileToken,
});

export type AuditFormValues = z.infer<typeof auditFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(2000),
  consent: z.literal(true, {
    error: "You must consent to be contacted.",
  }),
  website: honeypot,
  turnstileToken,
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
