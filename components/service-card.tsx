import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { Card } from "@/components/ui/card";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-medium text-ink">The problem</dt>
          <dd className="mt-1 text-slate">{service.cardProblem}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">What we review</dt>
          <dd className="mt-1 text-slate">{service.cardReview}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Deliverable</dt>
          <dd className="mt-1 text-slate">{service.cardDeliverable}</dd>
        </div>
      </dl>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo hover:underline"
      >
        Learn more
        <span className="sr-only"> about {service.name}</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </Card>
  );
}
