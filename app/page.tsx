import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/home/hero";
import { ProblemSection } from "@/components/home/problem-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { SamplePlanSection } from "@/components/home/sample-plan-section";
import { PrinciplesSection } from "@/components/home/principles-section";
import { InsightsPreview } from "@/components/home/insights-preview";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Turn intent into direction.`,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <SamplePlanSection />
      <PrinciplesSection />
      <InsightsPreview />
      <FinalCta />
    </>
  );
}
