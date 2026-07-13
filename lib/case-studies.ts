export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  isDemonstration: boolean;
  category: string;
  metaTitle: string;
  metaDescription: string;
  context: string;
  challenge: string;
  analysis: string[];
  priorities: string[];
  actions: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "example-project-structure",
    title: "Example Project Structure: Manual SEO & Positioning Review",
    summary:
      "A demonstration of how an IntentNorth engagement is structured, from initial audit through prioritized recommendations.",
    isDemonstration: true,
    category: "Website SEO & Positioning",
    metaTitle: "Example Project Structure — Not a Client Case Study",
    metaDescription:
      "A demonstration entry showing how an IntentNorth Solutions engagement is structured, from audit through prioritized plan.",
    context:
      "This is a demonstration entry, not a completed client engagement. It illustrates the structure and depth of a typical IntentNorth review so prospective clients know what to expect. It will be replaced with a real, verified case study once client results are available and permission to share them has been granted.",
    challenge:
      "PLACEHOLDER — CHALLENGE: In a real entry, this section would describe the specific business problem the client brought to us: for example, a plateau in organic visibility, unclear positioning relative to competitors, or a website underperforming for its traffic level.",
    analysis: [
      "PLACEHOLDER — ANALYSIS: Summary of what a manual review of the site's structure, content, and technical fundamentals found.",
      "PLACEHOLDER — ANALYSIS: Summary of how the findings connected to audience intent and search behavior.",
      "PLACEHOLDER — ANALYSIS: Notes on how findings compared against relevant competitors or market context.",
    ],
    priorities: [
      "PLACEHOLDER — PRIORITY: An urgent technical or structural issue identified as needing immediate attention.",
      "PLACEHOLDER — PRIORITY: A high-impact content or positioning improvement with meaningful expected value.",
      "PLACEHOLDER — PRIORITY: A strategic, longer-horizon investment worth planning for.",
    ],
    actions: [
      "PLACEHOLDER — ACTION: The specific recommendation delivered to the client for the urgent issue.",
      "PLACEHOLDER — ACTION: The specific recommendation delivered for the high-impact improvement.",
      "PLACEHOLDER — ACTION: The specific recommendation delivered for the strategic investment.",
    ],
    outcome:
      "PLACEHOLDER — MEASURABLE OUTCOME: In a real case study, this section would report a specific, verifiable result observed after implementation, along with the timeframe and how it was measured. No outcome is claimed here because this is a demonstration entry only.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((entry) => entry.slug === slug);
}
