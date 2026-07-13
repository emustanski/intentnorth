import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = buildMetadata({
  title: "Imprint",
  description: "Legal and company information for IntentNorth Solutions.",
  path: "/imprint",
});

export default function ImprintPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="imprint-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Imprint", path: "/imprint" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Imprint", path: "/imprint" }]} />

      <div className="mt-6">
        <SectionHeading as="h1" eyebrow="Legal" title="Imprint" />
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-lime/40 bg-lime/10 p-4 text-sm text-ink">
        <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
        <p>
          <strong>Requires professional legal review before launch.</strong> The fields below are centralized
          placeholders pending verified company and legal information. None of this content should be treated as
          complete or compliant until reviewed.
        </p>
      </div>

      <dl className="mt-10 space-y-6 text-sm">
        <Row label="Legal entity name" value={siteConfig.legalEntityName} />
        <Row label="Trading as" value={siteConfig.name} />
        <Row label="Registered address" value={`${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.country}`} />
        <Row label="Contact email" value={siteConfig.contactEmail} />
        <Row label="Phone" value={siteConfig.phone} />
        <Row label="Business registration number" value="PLACEHOLDER: Registration number, once formed" />
        <Row label="VAT / Tax ID" value="PLACEHOLDER: Tax identification number, if applicable" />
        <Row label="Responsible for content" value={siteConfig.founder.name} />
      </dl>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-mist pb-4 sm:grid-cols-[200px_1fr] sm:gap-4">
      <dt className="font-medium text-ink">{label}</dt>
      <dd className="text-slate">{value}</dd>
    </div>
  );
}
