/**
 * Centralized site configuration.
 *
 * Values marked "PLACEHOLDER" are not real and must be replaced with
 * verified company information before launch. Never treat placeholder
 * legal or contact details as final.
 */

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.intentnorth.example").replace(/\/$/, "");

export const siteConfig = {
  name: "IntentNorth Solutions",
  shortName: "IntentNorth",
  tagline: "Turn intent into direction.",
  description:
    "IntentNorth Solutions helps businesses understand audience intent and turn it into a clear direction for improved visibility, positioning, and sustainable digital growth.",
  url: siteUrl,
  contactEmail: process.env.CONTACT_EMAIL ?? "hello@intentnorth.example",
  // PLACEHOLDER — replace with a verified business phone number before launch.
  phone: "PLACEHOLDER: +1 (000) 000-0000",
  // PLACEHOLDER — replace with a verified registered business address before launch.
  address: {
    line1: "PLACEHOLDER: Street address",
    line2: "PLACEHOLDER: City, State/Region, Postal code",
    country: "PLACEHOLDER: Country",
  },
  // PLACEHOLDER — replace with real, live profiles or remove entries that don't exist.
  social: {
    linkedin: "PLACEHOLDER: https://www.linkedin.com/company/intentnorth-solutions",
    x: "PLACEHOLDER: https://x.com/intentnorth",
  },
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  // PLACEHOLDER — replace once the legal entity is formed and registered.
  legalEntityName: "PLACEHOLDER: IntentNorth Solutions (legal entity pending formation)",
  founder: {
    name: "Edi Mustanski",
    bio: "Edi Mustanski founded IntentNorth Solutions, bringing together a background in software engineering, conversational AI, and AI prompt engineering, alongside a growing interest in marketing. That combination shapes how IntentNorth works: understanding the technical systems that determine visibility, and the human intent behind every search, then applying both directly and manually to every audit and recommendation.",
    // PLACEHOLDER — replace with a real founder photo before launch.
    photoPlaceholder: true,
  },
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/process", label: "Process" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
  ],
  services: [
    { href: "/services/website-seo", label: "Website SEO" },
    { href: "/services/website-performance", label: "Website Performance & UX" },
    { href: "/services/social-media-optimization", label: "Social Media Optimization" },
    { href: "/services/app-store-optimization", label: "App Store Optimization" },
    { href: "/services/positioning", label: "Brand & Market Positioning" },
    { href: "/services/audience-strategy", label: "Target-Audience Research" },
    { href: "/services/optimization-plans", label: "Prioritized Optimization Plans" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/imprint", label: "Imprint" },
  ],
} as const;
