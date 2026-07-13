import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "How IntentNorth Solutions engagements are structured, from manual audit through prioritized recommendations.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="case-studies-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }]} />

      <div className="mt-6">
        <SectionHeading
          as="h1"
          eyebrow="Case Studies"
          title="How an engagement comes together"
          description="Real client case studies will be added here as engagements are completed and results can be shared. For now, this section includes one clearly labeled demonstration entry."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {caseStudies.map((entry) => (
          <Link
            key={entry.slug}
            href={`/case-studies/${entry.slug}`}
            className="group rounded-2xl border border-mist bg-white p-6 hover:border-indigo"
          >
            {entry.isDemonstration && (
              <Badge className="border-indigo/30 bg-indigo/10 text-indigo">Example project structure</Badge>
            )}
            <h2 className="mt-4 text-lg font-semibold text-ink group-hover:text-indigo">{entry.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">{entry.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo">
              Read more
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
