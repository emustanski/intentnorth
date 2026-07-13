import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How IntentNorth Solutions handles information submitted through this website.",
  path: "/privacy",
});

const thirdParties = [
  {
    name: "Cloudflare Turnstile",
    purpose: "Spam and bot verification on the audit-request and contact forms.",
    placeholder:
      "PLACEHOLDER: Confirm Cloudflare's data processing terms and add any required disclosures once Turnstile is configured for production.",
    configured: Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY),
  },
  {
    name: "Resend",
    purpose: "Transactional email delivery for form submissions (sending your request to us, and an optional confirmation to you).",
    placeholder:
      "PLACEHOLDER: Confirm Resend's data processing terms and retention policy before launch.",
    configured: true,
  },
  {
    name: "Plausible Analytics",
    purpose: "Privacy-focused, cookieless website analytics — only active when explicitly configured.",
    placeholder:
      "PLACEHOLDER: Confirm whether Plausible is self-hosted or cloud-hosted, and disclose accordingly.",
    configured: Boolean(siteConfig.plausibleDomain),
  },
  {
    name: "Booking provider (Cal.com or Calendly)",
    purpose: "Scheduling a consultation, via an external link — only shown when a booking URL is configured.",
    placeholder:
      "PLACEHOLDER: Name the specific booking provider in use and link to its privacy policy once selected.",
    configured: Boolean(siteConfig.bookingUrl),
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="privacy-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]} />

      <div className="mt-6">
        <SectionHeading as="h1" eyebrow="Privacy" title="Privacy Policy" />
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-lime/40 bg-lime/10 p-4 text-sm text-ink">
        <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
        <p>
          <strong>Requires professional legal review before launch.</strong> This page is a placeholder template, not
          a complete or compliant privacy policy. It must be reviewed by a qualified professional before the site
          goes live, and updated as configuration changes.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
          <p className="mt-3 leading-relaxed text-slate">
            This website collects information you voluntarily submit through the audit-request form ({" "}
            <code>/request-audit</code>) or the contact form (<code>/contact</code>), such as your name, email
            address, company name, and message content. This information is sent by email to{" "}
            {siteConfig.contactEmail} and is not stored in a database on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">How information is used</h2>
          <p className="mt-3 leading-relaxed text-slate">
            Submitted information is used solely to review your request manually and respond to you. We do not sell
            or share your information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Third-party data processing</h2>
          <p className="mt-3 leading-relaxed text-slate">
            The categories of third-party processing below apply to this website. Services marked &ldquo;not
            currently configured&rdquo; are not active in this deployment.
          </p>
          <div className="mt-6 space-y-4">
            {thirdParties.map((party) => (
              <div key={party.name} className="rounded-xl border border-mist bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-ink">{party.name}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      party.configured ? "bg-lime/20 text-ink" : "bg-mist text-slate"
                    }`}
                  >
                    {party.configured ? "Configured in this deployment" : "Not currently configured"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate">{party.purpose}</p>
                <p className="mt-2 text-xs italic text-slate">{party.placeholder}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Data retention</h2>
          <p className="mt-3 leading-relaxed text-slate">
            PLACEHOLDER: Define and disclose how long submitted information and any email records are retained
            before this policy is published.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Your rights</h2>
          <p className="mt-3 leading-relaxed text-slate">
            PLACEHOLDER: Add applicable data-subject rights (e.g. access, correction, deletion) based on the
            jurisdictions this business operates in and serves, confirmed by legal review.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Contact</h2>
          <p className="mt-3 leading-relaxed text-slate">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-indigo hover:underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
