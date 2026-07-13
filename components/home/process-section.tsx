import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processStages } from "@/lib/process";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="A manual process, built for clarity"
        description="Five stages, applied consistently to every engagement, from a website audit to a full optimization plan."
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {processStages.map((stage) => (
          <li key={stage.number} className="rounded-2xl border border-mist bg-white p-6">
            <span className="text-sm font-semibold text-indigo">{stage.number}</span>
            <h3 className="mt-2 text-lg font-semibold text-ink">{stage.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{stage.summary}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <Link href="/process" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo hover:underline">
          See the full process
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
