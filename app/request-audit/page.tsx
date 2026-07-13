import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { AuditForm } from "@/components/forms/audit-form";
import { siteConfig } from "@/lib/site-config";
import { BookingLink } from "@/components/booking-link";

export const metadata: Metadata = buildMetadata({
  title: "Request an Audit",
  description:
    "Request a manual audit from IntentNorth Solutions. Tell us about your business and goals — we'll review the information and follow up with next steps.",
  path: "/request-audit",
});

export default function RequestAuditPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="request-audit-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Request an Audit", path: "/request-audit" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request an Audit", path: "/request-audit" }]} />

      <div className="mt-6">
        <SectionHeading
          as="h1"
          eyebrow="Request an audit"
          title="Tell us about your business"
          description="Share a few details and we'll review the information manually before reaching out about the right next step. No automated report is generated from this form."
        />
      </div>

      <div className="mt-10 rounded-2xl border border-mist bg-white p-6 sm:p-10">
        <AuditForm />
      </div>

      <p className="mt-8 text-sm text-slate">
        Prefer to talk it through first? Email us directly at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-indigo underline underline-offset-2 hover:no-underline">
          {siteConfig.contactEmail}
        </a>
        {siteConfig.bookingUrl && " or "}
        {siteConfig.bookingUrl && (
          <span className="inline-block align-middle">
            <BookingLink variant="link" className="p-0 text-sm" />
          </span>
        )}
        .
      </p>
    </div>
  );
}
