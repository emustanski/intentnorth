import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/process",
    "/case-studies",
    "/insights",
    "/about",
    "/request-audit",
    "/contact",
    "/privacy",
    "/imprint",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((entry) => ({
    url: `${siteConfig.url}/case-studies/${entry.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}`,
    changeFrequency: "yearly",
    lastModified: insight.publishedAt,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...insightEntries];
}
