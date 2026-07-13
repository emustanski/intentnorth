export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  cardProblem: string;
  cardReview: string;
  cardDeliverable: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problemsAddressed: string[];
  whatWeReview: string[];
  whatsIncluded: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  relatedSlugs: string[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "website-seo",
    name: "Website SEO Audits & Optimization",
    shortDescription:
      "A manual review of how your website is structured, written, and understood by search engines — and by the people searching.",
    cardProblem: "Search visibility is inconsistent or has plateaued, and it's unclear which SEO issues actually matter.",
    cardReview: "Site structure, on-page content, technical fundamentals, internal linking, and search intent alignment.",
    cardDeliverable: "A prioritized SEO findings report with clear, actionable recommendations.",
    metaTitle: "Website SEO Audits & Optimization",
    metaDescription:
      "A manual website SEO audit that identifies what's limiting your search visibility and prioritizes the fixes that matter most.",
    intro:
      "Search visibility rarely fails for one obvious reason. It's usually a combination of structural, content, and technical issues compounding over time. This service is a manual, page-by-page and site-wide review that separates what's actually limiting your visibility from what's simply cosmetic — so effort goes toward changes that move the needle.",
    problemsAddressed: [
      "Search rankings and organic traffic have plateaued or declined without a clear cause",
      "Content targets keywords without matching what searchers actually intend to find",
      "Previous SEO work has been reactive or disconnected from a larger strategy",
      "It's unclear whether technical issues are limiting how the site is crawled or indexed",
      "Internal linking and site structure make it hard for both users and search engines to find key pages",
    ],
    whatWeReview: [
      "Site architecture and navigation structure",
      "On-page elements: titles, headings, meta descriptions, and copy",
      "Search intent alignment between content and the queries it targets",
      "Internal linking patterns and orphaned or under-linked pages",
      "Indexability signals: robots directives, canonical tags, and sitemap coverage",
      "Content depth, duplication, and topical coverage relative to competing pages",
    ],
    whatsIncluded: [
      "A full manual crawl-and-review of key site sections",
      "Search intent analysis for your priority pages and topics",
      "A technical findings summary in plain language, not just raw data",
      "A prioritized list of fixes, grouped by urgency and expected impact",
    ],
    deliverables: [
      "A written SEO findings report with prioritized recommendations",
      "A summary walkthrough of the most urgent issues and quick wins",
      "Guidance on sequencing fixes across immediate, high-impact, and strategic work",
    ],
    process: [
      { title: "Discover", description: "Review your business goals, current performance, and target audience before opening the site." },
      { title: "Audit", description: "Manually review site structure, content, and technical fundamentals against search intent." },
      { title: "Prioritize", description: "Separate urgent technical issues from quick wins and longer-term content investments." },
      { title: "Plan", description: "Document a clear, sequenced roadmap your team (or ours) can act on." },
      { title: "Measure", description: "Define the specific signals worth monitoring after changes are implemented." },
    ],
    relatedSlugs: ["website-performance", "audience-strategy", "optimization-plans"],
    faqs: [
      {
        question: "Will you run automated tools during the audit?",
        answer:
          "The audit itself is a manual review performed by a person. Standard, publicly available tools may inform context, but findings and recommendations are not auto-generated — every issue in your report has been reviewed directly.",
      },
      {
        question: "Do you guarantee ranking improvements?",
        answer:
          "No. No ethical SEO service can guarantee rankings, since search engines control their own algorithms. What we provide is a clear, prioritized view of what's likely limiting visibility, based on manual review.",
      },
      {
        question: "How long does an SEO audit take?",
        answer:
          "Timelines depend on site size and scope, which is why every engagement starts with a discovery conversation. We'll give you a specific estimate after understanding your site and goals.",
      },
      {
        question: "Do I need to give you site access?",
        answer:
          "Some engagements benefit from read-only analytics or search console access for additional context, but it isn't required to begin. We'll discuss what's useful for your specific situation.",
      },
    ],
  },
  {
    slug: "website-performance",
    name: "Website Performance & UX Review",
    shortDescription:
      "A manual review of how your site loads, feels, and functions for real visitors — and where friction is costing you attention.",
    cardProblem: "Visitors bounce, hesitate, or drop off, and it's unclear whether the cause is speed, layout, or clarity.",
    cardReview: "Page speed factors, layout stability, navigation clarity, mobile usability, and conversion friction points.",
    cardDeliverable: "A prioritized performance and UX findings report with specific, page-level recommendations.",
    metaTitle: "Website Performance & UX Review",
    metaDescription:
      "A manual performance and user-experience review that identifies friction points slowing visitors down or driving them away.",
    intro:
      "A site can rank well and still lose visitors at the door. This review looks at how your website actually performs and feels in use — load behavior, layout stability, navigation clarity, and the small frictions that add up — so you know exactly where attention and effort should go first.",
    problemsAddressed: [
      "Visitors arrive but leave quickly, and it's unclear why",
      "The site feels slow or unstable, but the specific cause hasn't been isolated",
      "Mobile visitors have a noticeably different (and often worse) experience than desktop visitors",
      "Key actions — contact, purchase, sign-up — are harder to complete than they should be",
      "Design decisions have been made without a clear view of how they affect usability",
    ],
    whatWeReview: [
      "Page load behavior and the factors most likely contributing to slowness",
      "Layout stability and visual consistency across common devices",
      "Navigation clarity and the steps required to reach key pages or actions",
      "Mobile usability, including touch target sizing and readability",
      "Friction points along common visitor paths, such as contact or checkout flows",
    ],
    whatsIncluded: [
      "A manual walkthrough of key pages and user paths on desktop and mobile",
      "A review of layout, hierarchy, and interaction clarity",
      "Identification of likely performance bottlenecks in plain language",
      "A prioritized list of usability and performance recommendations",
    ],
    deliverables: [
      "A written performance and UX findings report",
      "Page-level notes on specific friction points and suggested fixes",
      "A prioritized roadmap grouped by urgency and expected impact",
    ],
    process: [
      { title: "Discover", description: "Understand your key visitor journeys, goals, and known pain points." },
      { title: "Audit", description: "Manually walk through the site on desktop and mobile, noting friction and instability." },
      { title: "Prioritize", description: "Distinguish critical usability blockers from smaller refinements." },
      { title: "Plan", description: "Document a clear improvement roadmap sequenced by impact." },
      { title: "Measure", description: "Identify what to track after changes to confirm friction has been reduced." },
    ],
    relatedSlugs: ["website-seo", "optimization-plans", "positioning"],
    faqs: [
      {
        question: "Do you run automated performance scoring tools?",
        answer:
          "No automated scores or instant reports are generated as part of this service. The review is a manual, human evaluation of how the site behaves and feels in real use.",
      },
      {
        question: "Will you fix issues you find, or just report them?",
        answer:
          "This service delivers a findings report and prioritized recommendations. Implementation can be discussed separately depending on scope and your team's capacity.",
      },
      {
        question: "What devices and browsers are reviewed?",
        answer:
          "We review the combination of devices and browsers most relevant to your actual visitor base, discussed and confirmed during discovery.",
      },
    ],
  },
  {
    slug: "social-media-optimization",
    name: "Social Media Account Optimization",
    shortDescription:
      "A manual review of your social profiles, positioning, and content approach against what your audience is actually looking for.",
    cardProblem: "Social presence feels disconnected from business goals, with unclear positioning or inconsistent messaging.",
    cardReview: "Profile setup, bio and positioning clarity, content themes, posting consistency, and audience fit.",
    cardDeliverable: "A prioritized social optimization report with profile- and content-level recommendations.",
    metaTitle: "Social Media Account Optimization",
    metaDescription:
      "A manual review of your social media profiles and content approach, with a prioritized plan to improve clarity and audience fit.",
    intro:
      "Social platforms reward clarity and consistency, not just activity. This review manually examines how your profiles present your business, whether your content themes match audience intent, and where small structural changes could make your presence easier to find and understand.",
    problemsAddressed: [
      "Profiles are inconsistent across platforms in messaging, tone, or visual presentation",
      "It's unclear what content themes actually serve audience intent versus internal preference",
      "Bios, links, and calls-to-action are outdated, vague, or missing entirely",
      "Posting activity exists without a clear connection to business objectives",
      "Growth has stalled and the cause hasn't been diagnosed",
    ],
    whatWeReview: [
      "Profile setup: bios, links, categories, and visual presentation",
      "Content themes and how well they align with what your target audience searches for or engages with",
      "Consistency of positioning and messaging across platforms",
      "Posting patterns and structural use of platform features (highlights, pinned content, etc.)",
      "Calls-to-action and how clearly they guide visitors toward a next step",
    ],
    whatsIncluded: [
      "A manual review of each relevant social profile",
      "An assessment of positioning clarity and audience fit",
      "Content theme recommendations grounded in audience intent, not trend-chasing",
      "A prioritized list of profile and content changes",
    ],
    deliverables: [
      "A written social optimization findings report",
      "Profile-by-profile recommendations",
      "A prioritized content direction summary",
    ],
    process: [
      { title: "Discover", description: "Clarify your goals for each platform and who you're trying to reach." },
      { title: "Audit", description: "Manually review each profile's setup, positioning, and content history." },
      { title: "Prioritize", description: "Separate quick profile fixes from deeper content-strategy shifts." },
      { title: "Plan", description: "Document a practical roadmap for profile and content improvements." },
      { title: "Measure", description: "Define what engagement and clarity signals to track going forward." },
    ],
    relatedSlugs: ["positioning", "audience-strategy", "app-store-optimization"],
    faqs: [
      {
        question: "Which platforms do you review?",
        answer:
          "We review whichever platforms are relevant to your business and audience — this is scoped during discovery rather than applied as a fixed template.",
      },
      {
        question: "Do you manage or post content for us?",
        answer:
          "This service is a review and recommendation engagement, not ongoing content management. We identify what should change; execution is a separate conversation.",
      },
      {
        question: "Can you guarantee follower growth?",
        answer:
          "No. We don't make growth or engagement guarantees. The goal is a clearer, more intentional presence based on manual analysis, not a promised outcome.",
      },
    ],
  },
  {
    slug: "app-store-optimization",
    name: "App Store Optimization",
    shortDescription:
      "A manual review of your app store listing — from metadata to visuals — against what people are actually searching for.",
    cardProblem: "App downloads or discoverability are lower than expected, and it's unclear whether the listing is the cause.",
    cardReview: "Listing metadata, keyword relevance, screenshots and preview assets, and category positioning.",
    cardDeliverable: "A prioritized ASO findings report with specific listing-level recommendations.",
    metaTitle: "App Store Optimization (ASO)",
    metaDescription:
      "A manual app store listing review that identifies discoverability and conversion gaps, with a prioritized set of recommendations.",
    intro:
      "An app's store listing does two jobs at once: it needs to be found, and it needs to convince someone to install. This review manually evaluates your listing's metadata, visuals, and positioning against genuine search intent, so you know which changes are likely to matter most.",
    problemsAddressed: [
      "App impressions or downloads are lower than expected relative to category competitors",
      "Listing copy describes features but doesn't match how people actually search",
      "Screenshots and preview assets don't clearly communicate value at a glance",
      "It's unclear which keywords or category placement are worth prioritizing",
      "Previous listing changes were made without a clear rationale or review",
    ],
    whatWeReview: [
      "Title, subtitle, and metadata relevance to likely search terms",
      "Description clarity and how well it communicates core value",
      "Screenshots, preview video, and icon presentation",
      "Category and competitive positioning within the store",
      "Ratings and review presentation as it affects listing credibility",
    ],
    whatsIncluded: [
      "A manual review of your current store listing(s)",
      "Keyword and search-intent relevance analysis based on manual research",
      "Visual asset feedback focused on clarity and first-impression impact",
      "A prioritized list of listing improvements",
    ],
    deliverables: [
      "A written ASO findings report",
      "Specific metadata and visual recommendations",
      "A prioritized improvement roadmap",
    ],
    process: [
      { title: "Discover", description: "Understand the app's purpose, audience, and current store performance context." },
      { title: "Audit", description: "Manually review listing metadata, visuals, and category positioning." },
      { title: "Prioritize", description: "Identify which listing changes are likely to have the most discoverability impact." },
      { title: "Plan", description: "Document a clear, sequenced set of listing recommendations." },
      { title: "Measure", description: "Define what listing signals are worth monitoring after updates." },
    ],
    relatedSlugs: ["social-media-optimization", "positioning", "audience-strategy"],
    faqs: [
      {
        question: "Do you pull data directly from app store analytics platforms?",
        answer:
          "The review is manual. If you have access to store analytics you'd like to share as context, that can inform the conversation, but no automated data pulls or scores are part of this service.",
      },
      {
        question: "Do you cover both iOS and Android listings?",
        answer:
          "Yes, scope is confirmed during discovery based on which platforms your app is live on.",
      },
      {
        question: "Can you guarantee more downloads?",
        answer:
          "No. Store algorithms and user behavior are outside our control. We provide a manual, prioritized view of what's likely limiting discoverability and conversion.",
      },
    ],
  },
  {
    slug: "positioning",
    name: "Brand & Market Positioning",
    shortDescription:
      "A manual review of how clearly your business is positioned relative to what your audience needs and how competitors present themselves.",
    cardProblem: "Messaging feels generic, inconsistent, or fails to clearly differentiate the business from alternatives.",
    cardReview: "Value proposition clarity, messaging consistency, competitive differentiation, and audience relevance.",
    cardDeliverable: "A positioning findings summary with a prioritized set of messaging and clarity recommendations.",
    metaTitle: "Brand & Market Positioning Review",
    metaDescription:
      "A manual positioning review that clarifies how your business is understood by its audience and differentiated from alternatives.",
    intro:
      "Positioning problems rarely show up as a single broken page — they show up as vague messaging, inconsistent claims, and visitors who leave without understanding what makes you the right choice. This review manually examines how your business presents itself across key touchpoints and identifies where clarity is missing.",
    problemsAddressed: [
      "It's difficult to explain, in one sentence, why a prospect should choose you over an alternative",
      "Messaging shifts inconsistently across the website, social profiles, and sales conversations",
      "Positioning was set early on and hasn't been revisited as the business or market changed",
      "Competitors appear clearer or more differentiated, even when the underlying offering is comparable",
      "Marketing activity continues without a shared, current understanding of what the business stands for",
    ],
    whatWeReview: [
      "Core value proposition and how consistently it appears across touchpoints",
      "Messaging clarity for a first-time visitor with no prior context",
      "Competitive landscape and how your positioning compares to direct alternatives",
      "Audience relevance — whether the messaging speaks to real audience priorities",
      "Consistency across website, social, and any other public-facing materials reviewed",
    ],
    whatsIncluded: [
      "A manual review of current messaging across key touchpoints",
      "A competitive positioning comparison against relevant alternatives",
      "Identification of clarity gaps and inconsistencies",
      "A prioritized set of positioning recommendations",
    ],
    deliverables: [
      "A written positioning findings summary",
      "A competitive comparison overview",
      "A prioritized set of messaging clarity recommendations",
    ],
    process: [
      { title: "Discover", description: "Understand the business, its offering, and how it currently describes itself." },
      { title: "Audit", description: "Manually review messaging consistency and competitive differentiation." },
      { title: "Prioritize", description: "Identify the clarity gaps most likely to affect how prospects understand the offering." },
      { title: "Plan", description: "Document recommended messaging direction and next steps." },
      { title: "Measure", description: "Define what to watch for as positioning changes are implemented." },
    ],
    relatedSlugs: ["audience-strategy", "social-media-optimization", "optimization-plans"],
    faqs: [
      {
        question: "Will you write our final messaging and taglines for us?",
        answer:
          "This service focuses on diagnosing clarity and differentiation gaps and recommending direction. Full copywriting can be scoped as a separate conversation depending on your needs.",
      },
      {
        question: "Do you conduct customer interviews as part of this?",
        answer:
          "Not by default. If audience research is needed to inform positioning, that's covered by our target-audience research service and can be combined with this one.",
      },
    ],
  },
  {
    slug: "audience-strategy",
    name: "Target-Audience Research",
    shortDescription:
      "A manual research process to clarify who your audience actually is, what they're searching for, and what drives their decisions.",
    cardProblem: "Marketing and content decisions are being made without a clear, current picture of the target audience.",
    cardReview: "Audience segments, search behavior patterns, decision drivers, and gaps between assumptions and reality.",
    cardDeliverable: "An audience research summary with clear segment definitions and intent insights.",
    metaTitle: "Target-Audience Research",
    metaDescription:
      "Manual target-audience research that clarifies who you're reaching, what they're searching for, and what drives their decisions.",
    intro:
      "Every optimization decision — SEO, positioning, content, ads — depends on a clear understanding of who it's for. This service is a manual research process to build (or rebuild) that understanding, so subsequent recommendations are grounded in how your actual audience thinks and searches, not assumptions.",
    problemsAddressed: [
      "Audience assumptions were set early on and haven't been revisited",
      "Marketing decisions rely on internal opinion rather than audience evidence",
      "It's unclear which audience segments are most valuable to prioritize",
      "Content and messaging don't reflect the language or intent your audience actually uses",
      "Multiple stakeholders have different, unreconciled views of who the target audience is",
    ],
    whatWeReview: [
      "Existing audience assumptions and where they came from",
      "Observable search intent and language patterns relevant to your offering",
      "Segment differences in needs, priorities, and likely decision triggers",
      "Gaps between current messaging and actual audience language",
      "Available first-party context you choose to share, such as customer feedback or sales notes",
    ],
    whatsIncluded: [
      "A manual research process grounded in publicly observable intent signals and any context you provide",
      "Clear segment definitions where more than one audience group is relevant",
      "An intent summary describing what each segment is likely searching for and why",
      "A prioritized set of implications for messaging, content, and optimization work",
    ],
    deliverables: [
      "A written audience research summary",
      "Segment definitions and intent notes",
      "Practical implications for messaging and content direction",
    ],
    process: [
      { title: "Discover", description: "Gather existing audience assumptions, business goals, and available context." },
      { title: "Audit", description: "Manually research observable intent signals and language patterns." },
      { title: "Prioritize", description: "Identify which audience segments and intents matter most right now." },
      { title: "Plan", description: "Translate research into practical direction for messaging and content." },
      { title: "Measure", description: "Define how audience understanding should be revisited over time." },
    ],
    relatedSlugs: ["positioning", "website-seo", "optimization-plans"],
    faqs: [
      {
        question: "Do you conduct live interviews or surveys with our customers?",
        answer:
          "This service is centered on manual research and analysis. If you'd like to incorporate direct customer interviews or survey data, we're glad to discuss how that fits into the engagement.",
      },
      {
        question: "How is this different from the positioning service?",
        answer:
          "Audience research focuses on understanding who your audience is and what they need. Positioning focuses on how your business communicates in response to that understanding. They work well together, but can be scoped independently.",
      },
    ],
  },
  {
    slug: "optimization-plans",
    name: "Prioritized Digital Optimization Plans",
    shortDescription:
      "A consolidated, prioritized roadmap that brings findings from one or more reviews into a single, practical plan.",
    cardProblem: "You have scattered findings or recommendations, but no single, prioritized plan for acting on them.",
    cardReview: "Findings across relevant reviews, business constraints, resourcing, and realistic sequencing.",
    cardDeliverable: "A single prioritized roadmap organized into immediate, high-impact, and strategic work.",
    metaTitle: "Prioritized Digital Optimization Plans",
    metaDescription:
      "A consolidated, prioritized optimization roadmap that turns scattered findings into a clear, sequenced plan of action.",
    intro:
      "Recommendations are only useful if they're prioritized realistically. This service takes findings from one or more manual reviews — SEO, performance, social, ASO, or positioning — and consolidates them into a single roadmap sequenced by urgency, effort, and expected impact.",
    problemsAddressed: [
      "Multiple audits or reviews have produced findings that were never consolidated into one plan",
      "It's unclear what to work on first given limited time or budget",
      "Past recommendations were listed without any sense of relative priority",
      "Teams disagree on what matters most without a shared, structured view",
      "Progress feels difficult to track without a clear roadmap to measure against",
    ],
    whatWeReview: [
      "Findings from any completed IntentNorth reviews relevant to your business",
      "Practical constraints: team capacity, budget, and technical limitations",
      "Dependencies between recommendations across different areas",
      "Realistic sequencing based on effort versus likely impact",
    ],
    whatsIncluded: [
      "Consolidation of findings into a single, coherent roadmap",
      "Clear grouping into immediate wins, high-impact improvements, and strategic investments",
      "Notes on dependencies and suggested sequencing",
      "A plain-language rationale for each priority tier",
    ],
    deliverables: [
      "A single written, prioritized optimization roadmap",
      "Tiered recommendations: immediate, high-impact, and strategic",
      "Guidance on what to measure as the plan is implemented",
    ],
    process: [
      { title: "Discover", description: "Confirm business goals, constraints, and available findings to consolidate." },
      { title: "Audit", description: "Review all relevant findings and current-state context together." },
      { title: "Prioritize", description: "Sequence recommendations by urgency, effort, and expected impact." },
      { title: "Plan", description: "Produce a single, clear roadmap covering all prioritized work." },
      { title: "Measure", description: "Define the specific indicators worth tracking as the plan is executed." },
    ],
    relatedSlugs: ["website-seo", "website-performance", "positioning"],
    faqs: [
      {
        question: "Can this be a standalone service, or does it require another audit first?",
        answer:
          "It can be standalone if you already have existing findings — from us or elsewhere — to consolidate. It also pairs naturally with any of our audit or review services.",
      },
      {
        question: "Will you implement the plan for us?",
        answer:
          "This service delivers the prioritized plan itself. Implementation support can be discussed separately depending on scope.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
