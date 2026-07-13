import type { InsightSection } from "@/lib/insights";

export function TableOfContents({ sections }: { sections: InsightSection[] }) {
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-mist bg-white p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate">On this page</h2>
      <ol className="mt-4 space-y-2.5 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-ink hover:text-indigo hover:underline">
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
