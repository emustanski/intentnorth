import { ClipboardCheck, ListOrdered, MessageSquareText, ShieldCheck, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    icon: ClipboardCheck,
    title: "Evidence before assumptions",
    description: "Recommendations trace back to something directly observed, not a template or a guess.",
  },
  {
    icon: ListOrdered,
    title: "Priorities before busywork",
    description: "Findings are sequenced by urgency and impact, not delivered as an undifferentiated list.",
  },
  {
    icon: MessageSquareText,
    title: "Clear recommendations",
    description: "Every recommendation is explained in plain language, with the reasoning behind it.",
  },
  {
    icon: ShieldCheck,
    title: "Honest expectations",
    description: "No guaranteed rankings, traffic, or revenue — just a clear, honest view of what's likely to help.",
  },
  {
    icon: TrendingUp,
    title: "Measurable progress",
    description: "Every plan includes what to monitor afterward, so progress can be judged, not assumed.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Working principles"
        title="How we approach every engagement"
        description="Instead of testimonials we can't yet back with client results, here's what actually guides the work."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {principles.map((principle) => (
          <div key={principle.title} className="rounded-2xl border border-mist bg-white p-6">
            <principle.icon aria-hidden="true" className="h-6 w-6 text-indigo" />
            <h3 className="mt-4 font-semibold text-ink">{principle.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
