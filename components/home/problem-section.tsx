import { SectionHeading } from "@/components/section-heading";

const causes = [
  "Disconnected SEO activities",
  "Unclear positioning",
  "Weak target-audience understanding",
  "Technical and performance issues",
  "Unprioritized recommendations",
  "A lack of measurable direction",
];

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        align="center"
        title="More activity is not always the answer. Clear direction is."
        description="Digital-growth problems rarely come from doing too little. They usually come from effort spread across the wrong things."
        className="mx-auto"
      />
      <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        {causes.map((cause) => (
          <li
            key={cause}
            className="rounded-xl border border-mist bg-white px-5 py-4 text-sm font-medium text-ink"
          >
            {cause}
          </li>
        ))}
      </ul>
    </section>
  );
}
