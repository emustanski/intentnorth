import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug } from "@/lib/insights";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/table-of-contents";
import { InsightBody } from "@/components/insight-body";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {};
  }

  return buildMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${insight.slug}`,
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd id="insight-article-jsonld" data={articleJsonLd(insight)} />
      <JsonLd
        id="insight-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ]}
      />

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_280px]">
        <article>
          <header>
            <div className="flex items-center gap-3">
              <Badge>{insight.category}</Badge>
              <span className="text-xs text-slate">{insight.readingTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{insight.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate">{insight.description}</p>
            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate">
              <div className="flex gap-1.5">
                <dt className="font-medium text-ink">Published:</dt>
                <dd>
                  <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time>
                </dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-medium text-ink">Author:</dt>
                <dd>{insight.author}</dd>
              </div>
            </dl>
          </header>

          <div className="mt-4 lg:hidden">
            <TableOfContents sections={insight.sections} />
          </div>

          <div className="mt-10">
            <InsightBody sections={insight.sections} />
          </div>

          <div className="mt-16 rounded-2xl border border-mist bg-white p-8 text-center">
            <h2 className="text-lg font-bold text-ink">Want this applied to your own site or business?</h2>
            <Button asChild size="lg" className="mt-6">
              <Link href="/request-audit">Request an audit</Link>
            </Button>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents sections={insight.sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}
