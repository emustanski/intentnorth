import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/lib/insights";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function InsightsPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Recent thinking"
          description="Practical notes on SEO, positioning, and digital growth strategy."
        />

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
              <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-indigo">{insight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{insight.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo">
                Read article
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
