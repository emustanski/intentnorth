export type ProcessStage = {
  number: string;
  title: string;
  summary: string;
  details: string[];
};

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the business, objectives, audience, and current challenges.",
    details: [
      "Every engagement starts with a conversation, not a template. We review your goals, constraints, and what's already been tried.",
      "This stage establishes what \"good\" looks like for your specific business, so the audit that follows is judged against the right standard.",
    ],
  },
  {
    number: "02",
    title: "Audit",
    summary: "Manually review the relevant website, account, app, or positioning.",
    details: [
      "A person reviews the material directly — no automated scoring or generated reports. Every finding in your audit has been seen and evaluated by a human.",
      "Depending on scope, this may cover site structure, content, technical fundamentals, social profiles, app store listings, or competitive positioning.",
    ],
  },
  {
    number: "03",
    title: "Prioritize",
    summary: "Separate urgent issues, quick wins, and strategic improvements.",
    details: [
      "Findings are grouped into immediate wins, high-impact improvements, and strategic investments — not delivered as an undifferentiated list.",
      "Prioritization accounts for both potential impact and realistic effort, so the plan reflects what's actually achievable.",
    ],
  },
  {
    number: "04",
    title: "Plan",
    summary: "Create a clear and practical optimization roadmap.",
    details: [
      "The output is a written, sequenced roadmap your team (or ours) can act on directly, with plain-language reasoning behind each recommendation.",
      "Nothing in the plan is generated automatically — every recommendation traces back to something observed during the manual audit.",
    ],
  },
  {
    number: "05",
    title: "Measure",
    summary: "Define what should be monitored after implementation.",
    details: [
      "Before the engagement ends, we define the specific signals worth tracking so you can judge whether changes are having the intended effect.",
      "We don't promise specific outcomes — we help you set up a clear, honest way to evaluate progress over time.",
    ],
  },
];
