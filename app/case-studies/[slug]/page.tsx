import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCaseStudyBySlug(slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: entry.metaTitle,
    description: entry.metaDescription,
    path: `/case-studies/${entry.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getCaseStudyBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="case-study-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: entry.title, path: `/case-studies/${entry.slug}` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: entry.title, path: `/case-studies/${entry.slug}` },
        ]}
      />

      {entry.isDemonstration && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-lime/40 bg-lime/10 p-4 text-sm text-ink">
          <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
          <p>
            <strong>Example project structure — not a client case study.</strong> {entry.context}
          </p>
        </div>
      )}

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{entry.title}</h1>

      <Section title="Challenge">
        <p className="text-slate">{entry.challenge}</p>
      </Section>

      <Section title="Analysis">
        <ul className="space-y-3 text-slate">
          {entry.analysis.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Priorities">
        <ul className="space-y-3 text-slate">
          {entry.priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Actions">
        <ul className="space-y-3 text-slate">
          {entry.actions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Measurable outcome">
        <p className="text-slate">{entry.outcome}</p>
      </Section>

      <div className="mt-16 rounded-2xl border border-mist bg-white p-8 text-center sm:p-10">
        <h2 className="text-xl font-bold text-ink">Want a plan structured like this for your business?</h2>
        <Button asChild size="lg" className="mt-6">
          <Link href="/request-audit">Request an audit</Link>
        </Button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <SectionHeading as="h2" title={title} className="max-w-none" />
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}
