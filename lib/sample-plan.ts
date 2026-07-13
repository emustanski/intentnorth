export type SamplePlanTier = {
  label: string;
  description: string;
  items: string[];
};

export type SamplePlanCategory = {
  key: "website" | "social" | "app";
  label: string;
  tiers: SamplePlanTier[];
};

export const samplePlan: SamplePlanCategory[] = [
  {
    key: "website",
    label: "Website",
    tiers: [
      {
        label: "Immediate wins",
        description: "Low-effort changes with a clear, direct benefit.",
        items: [
          "Rewrite three page titles that don't reflect what the page is actually about",
          "Fix broken internal links found during the review",
          "Add missing alt text to key product or service images",
        ],
      },
      {
        label: "High-impact improvements",
        description: "Larger changes addressing real structural limitations.",
        items: [
          "Restructure navigation so priority pages are reachable within two clicks",
          "Consolidate three overlapping pages competing for the same search intent",
          "Improve page load behavior on the highest-traffic templates",
        ],
      },
      {
        label: "Strategic investments",
        description: "Longer-horizon work worth planning deliberately.",
        items: [
          "Develop a content structure around a newly clarified set of audience segments",
          "Plan a phased information-architecture redesign for the next major site update",
        ],
      },
    ],
  },
  {
    key: "social",
    label: "Social Media",
    tiers: [
      {
        label: "Immediate wins",
        description: "Low-effort changes with a clear, direct benefit.",
        items: [
          "Update outdated bios and profile links across all active platforms",
          "Pin the post or highlight that best reflects current positioning",
          "Standardize handles and visual presentation across platforms",
        ],
      },
      {
        label: "High-impact improvements",
        description: "Larger changes addressing real structural limitations.",
        items: [
          "Realign content themes to match researched audience intent, not internal preference",
          "Introduce a consistent posting cadence tied to actual audience activity patterns",
        ],
      },
      {
        label: "Strategic investments",
        description: "Longer-horizon work worth planning deliberately.",
        items: [
          "Establish a distinct content pillar for a newly identified, high-value audience segment",
          "Build a quarterly review cadence to keep positioning and content aligned as the market shifts",
        ],
      },
    ],
  },
  {
    key: "app",
    label: "App",
    tiers: [
      {
        label: "Immediate wins",
        description: "Low-effort changes with a clear, direct benefit.",
        items: [
          "Rewrite the app subtitle to match how people actually search the category",
          "Replace an unclear first screenshot with one that states the core value immediately",
          "Fix outdated metadata left over from a previous release",
        ],
      },
      {
        label: "High-impact improvements",
        description: "Larger changes addressing real structural limitations.",
        items: [
          "Restructure the listing description around top researched search terms",
          "Redesign preview screenshots to walk through the core user journey in order",
        ],
      },
      {
        label: "Strategic investments",
        description: "Longer-horizon work worth planning deliberately.",
        items: [
          "Plan a category-positioning shift if research shows a better-fit category exists",
          "Establish a recurring listing-review cadence ahead of each major release",
        ],
      },
    ],
  },
];
