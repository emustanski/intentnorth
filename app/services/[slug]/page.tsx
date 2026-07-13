import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd id="service-jsonld" data={serviceJsonLd(service)} />
      <JsonLd id="service-faq-jsonld" data={faqJsonLd(service.faqs)} />
      <JsonLd
        id="service-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      />

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{service.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate">{service.intro}</p>

      <div className="mt-8">
        <Button asChild size="lg">
          <Link href="/request-audit">Request an audit</Link>
        </Button>
      </div>

      <Section title="Problems this service addresses">
        <ul className="space-y-3">
          {service.problemsAddressed.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section title="What we review manually">
        <ul className="space-y-3">
          {service.whatWeReview.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section title="What's included">
        <ul className="space-y-3">
          {service.whatsIncluded.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section title="Typical deliverables">
        <ul className="space-y-3">
          {service.deliverables.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </ul>
      </Section>

      <Section title="How this engagement works">
        <ol className="grid gap-4 sm:grid-cols-2">
          {service.process.map((stage, index) => (
            <li key={stage.title} className="rounded-xl border border-mist bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-semibold text-ink">{stage.title}</h3>
              <p className="mt-1.5 text-sm text-slate">{stage.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {related.length > 0 && (
        <Section title="Related services">
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group flex items-center justify-between rounded-xl border border-mist bg-white p-5 hover:border-indigo"
              >
                <span className="font-medium text-ink group-hover:text-indigo">{relatedService.name}</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-slate group-hover:text-indigo" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section title="Frequently asked questions">
        <Accordion type="single" collapsible className="rounded-2xl border border-mist bg-white px-6">
          {service.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Card className="mt-16 bg-navy text-center text-white">
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl font-bold">Ready to see what&apos;s limiting your results?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Start with a focused manual audit for {service.name.toLowerCase()}.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/request-audit">Request an audit</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <SectionHeading as="h2" title={title} className="max-w-none" />
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-slate">
      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-indigo" />
      <span>{children}</span>
    </li>
  );
}
