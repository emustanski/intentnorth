export type InsightSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  readingTime: string;
  sections: InsightSection[];
};

/**
 * Paragraph text may contain internal-link tokens in the form
 * [[link text|/path]], parsed at render time by the InsightBody component.
 */
export const insights: Insight[] = [
  {
    slug: "how-to-prioritize-seo-improvements",
    title: "How to Prioritize SEO Improvements",
    description:
      "A practical framework for deciding what to fix first when an SEO review surfaces more findings than you can act on at once.",
    publishedAt: "2026-05-12",
    author: "PLACEHOLDER: Author name",
    category: "SEO",
    readingTime: "7 min read",
    sections: [
      {
        id: "the-problem-with-long-lists",
        heading: "The problem with long lists",
        paragraphs: [
          "Almost every SEO review produces more findings than a team can reasonably act on in one sprint, one quarter, or sometimes one year. A crawl surfaces broken links, thin pages, duplicate titles, missing headings, and slow templates all at once. Without a way to prioritize, the list itself becomes a source of paralysis rather than a plan.",
          "The instinct is often to work top-to-bottom, or to start with whatever issue is easiest to explain. Neither approach reliably produces the best return on effort. What's needed is a consistent way to weigh urgency against impact — the same logic behind our own [[five-stage process|/process]].",
        ],
      },
      {
        id: "separate-urgency-from-impact",
        heading: "Separate urgency from impact",
        paragraphs: [
          "Not every issue that looks serious is actually urgent, and not every quick fix is actually low-value. A more useful split is to ask two separate questions for each finding: how urgent is it (is something actively broken or being misread by search engines), and how much impact would fixing it likely have (does it affect a page or pattern that matters to the business)?",
          "Issues that are both urgent and high-impact — a noindex tag left on a key page, for instance — come first, without much debate. The harder calls are the issues that are high-impact but not urgent, such as restructuring a category of underperforming content. Those belong in a deliberate plan, not a reactive one.",
        ],
      },
      {
        id: "group-before-you-sequence",
        heading: "Group before you sequence",
        paragraphs: [
          "Individual findings are easier to prioritize once they're grouped into patterns. Ten pages with duplicate title tags are one structural issue, not ten separate tasks. Grouping first prevents a long list from looking more overwhelming — or more urgent — than it actually is, and it usually reveals that a handful of root causes are responsible for the majority of individual findings.",
          "This is also where technical and content issues need to be considered together rather than in isolation. A page that's well-written but not indexable will underperform for reasons that have nothing to do with its content quality — and vice versa.",
        ],
      },
      {
        id: "build-three-tiers-not-one-list",
        heading: "Build three tiers, not one list",
        paragraphs: [
          "A flat list invites arguments about ordering. Three clear tiers avoid that: immediate wins that are low-effort and clearly beneficial, high-impact improvements that require more effort but address real limitations, and strategic investments that are larger in scope and best planned deliberately rather than squeezed into a sprint.",
          "This is the same structure we use in every [[sample optimization plan|/#sample-plan]] we share with prospective clients, because it holds up regardless of the size of the site or the specific findings involved.",
        ],
      },
      {
        id: "revisit-priorities-as-you-go",
        heading: "Revisit priorities as you go",
        paragraphs: [
          "Prioritization isn't a one-time exercise. As immediate wins are implemented, some high-impact items become easier to justify, and new findings may surface that change the picture. Treating the plan as a living document — reviewed periodically rather than fixed at the start — keeps the work honest and keeps effort pointed at what matters most right now, not what mattered most when the audit was first completed.",
        ],
      },
    ],
  },
  {
    slug: "search-intent-the-foundation-of-digital-positioning",
    title: "Search Intent: The Foundation of Digital Positioning",
    description:
      "Why understanding what your audience is actually looking for has to come before any decision about how to position or optimize your business.",
    publishedAt: "2026-04-03",
    author: "PLACEHOLDER: Author name",
    category: "Positioning",
    readingTime: "6 min read",
    sections: [
      {
        id: "positioning-without-intent-is-guesswork",
        heading: "Positioning without intent is guesswork",
        paragraphs: [
          "It's possible to write confident, polished messaging that still fails, because it answers a question no one in the target audience is actually asking. Positioning decisions made without a grounded understanding of audience intent tend to reflect internal assumptions about the business rather than the external reality of how prospects search, compare, and decide.",
          "This is why intent research has to come before positioning work, not alongside it or after. Our [[target-audience research|/services/audience-strategy]] service exists specifically to establish that foundation before any messaging decisions are made.",
        ],
      },
      {
        id: "what-intent-actually-means",
        heading: "What intent actually means",
        paragraphs: [
          "Search intent is the underlying reason behind a query or action, not just the words used to express it. Someone searching for a service category might be comparing options, trying to understand whether they need the service at all, or already decided and looking for a specific provider. Each of those intents calls for different content and different messaging — treating them as interchangeable is one of the most common sources of wasted effort.",
          "Intent also shows up outside of search engines: in the language used in social bios, in the specific features highlighted on a competitor's page, and in the questions prospects ask before they're ready to buy.",
        ],
      },
      {
        id: "from-intent-to-direction",
        heading: "From intent to direction",
        paragraphs: [
          "Once intent is understood, positioning becomes a much narrower, more confident decision. Instead of asking 'what should we say about ourselves,' the question becomes 'what does this specific audience segment need to hear in order to recognize us as the right fit for what they're already trying to do.' That's a meaningfully different — and more answerable — question.",
          "This is also where [[website SEO|/services/website-seo]] and positioning work overlap directly: content that matches genuine intent tends to perform better in search precisely because it's answering the question a real person is actually asking, not because of any technical trick.",
        ],
      },
      {
        id: "intent-changes-revisit-it",
        heading: "Intent changes — revisit it",
        paragraphs: [
          "Audience intent isn't static. Markets shift, new competitors reframe the conversation, and the language people use to describe a problem evolves. Positioning that was accurate two years ago can quietly drift out of alignment with how prospects think today, even if nothing about the business itself has changed.",
          "Treating intent research as a periodic check-in, not a one-time project, is what keeps positioning — and everything built on top of it — pointed in the right direction.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((entry) => entry.slug === slug);
}
