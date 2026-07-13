import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Where we help"
          description="Every service is a manual review performed by a person, focused on what's actually limiting your visibility and results."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo hover:underline"
          >
            View all services
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
