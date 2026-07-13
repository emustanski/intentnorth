import type { Metadata } from "next";
import Link from "next/link";
import { processStages } from "@/lib/process";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Our Process",
  description:
    "A five-stage manual process — discover, audit, prioritize, plan, measure — applied consistently to every IntentNorth Solutions engagement.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="process-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Process", path: "/process" }]} />

      <div className="mt-6">
        <SectionHeading
          as="h1"
          eyebrow="Process"
          title="A manual process, applied consistently"
          description="Every engagement — regardless of service — follows the same five stages. It's how findings stay grounded in evidence and recommendations stay realistic."
        />
      </div>

      <ol className="mt-14 space-y-10">
        {processStages.map((stage) => (
          <li key={stage.number} className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
              {stage.number}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">{stage.title}</h2>
              <p className="mt-1 font-medium text-slate">{stage.summary}</p>
              <div className="mt-3 space-y-2 text-slate">
                {stage.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-2xl border border-mist bg-white p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-ink">Ready to start with Discover?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate">
          Tell us about your business and current challenge, and we&apos;ll take it from there.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/request-audit">Request an audit</Link>
        </Button>
      </div>
    </div>
  );
}
