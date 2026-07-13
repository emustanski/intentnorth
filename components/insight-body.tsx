import Link from "next/link";
import type { InsightSection } from "@/lib/insights";

const LINK_TOKEN = /\[\[([^|]+)\|([^\]]+)\]\]/g;

function renderParagraph(text: string, keyPrefix: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let matchIndex = 0;

  LINK_TOKEN.lastIndex = 0;
  while ((match = LINK_TOKEN.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link key={`${keyPrefix}-link-${matchIndex}`} href={href} className="text-indigo underline underline-offset-2 hover:no-underline">
        {label}
      </Link>,
    );
    lastIndex = match.index + fullMatch.length;
    matchIndex += 1;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function InsightBody({ sections }: { sections: InsightSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.id}-${index}`} className="leading-relaxed text-slate">
                {renderParagraph(paragraph, section.id)}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
