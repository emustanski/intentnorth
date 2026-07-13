import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Manual audits and reviews across website SEO, performance, social media, app store listings, positioning, audience research, and prioritized plans.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="services-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <div className="mt-6">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Manual reviews built around audience intent"
          description="Every service below is performed by a person, not an automated tool. Each engagement starts with your goals and ends with a clear, prioritized set of recommendations."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-mist bg-white p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-ink">Not sure which service fits?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate">
          Tell us about your business and current challenge — we&apos;ll point you toward the right starting place.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/request-audit">Request an audit</Link>
        </Button>
      </div>
    </div>
  );
}
