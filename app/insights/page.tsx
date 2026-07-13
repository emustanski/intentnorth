import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description: "Practical notes on SEO prioritization, search intent, and digital positioning.",
  path: "/insights",
});

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="insights-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]} />

      <div className="mt-6">
        <SectionHeading
          as="h1"
          eyebrow="Insights"
          title="Practical notes on growth strategy"
          description="Written to be useful on their own — not gated, not filled with unverified statistics."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {insights.map((insight) => (
          <Link
            key={insight.slug}
            href={`/insights/${insight.slug}`}
            className="group rounded-2xl border border-mist bg-white p-6 hover:border-indigo"
          >
            <div className="flex items-center gap-3">
              <Badge>{insight.category}</Badge>
              <span className="text-xs text-slate">{insight.readingTime}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-ink group-hover:text-indigo">{insight.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate">{insight.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <time dateTime={insight.publishedAt} className="text-xs text-slate">
                {formatDate(insight.publishedAt)}
              </time>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo">
                Read article
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
