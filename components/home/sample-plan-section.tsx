"use client";

import { samplePlan } from "@/lib/sample-plan";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { trackEvent } from "@/lib/analytics";

export function SamplePlanSection() {
  return (
    <section id="sample-plan" className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sample optimization plan"
          title="See how findings become a prioritized plan"
          description="An example of the type of deliverable a client may receive. This is illustrative only — it does not analyze your website, account, or app, and no visitor data is collected or used."
        />

        <Tabs
          defaultValue={samplePlan[0].key}
          className="mt-10"
          onValueChange={(value) => trackEvent("Sample Plan Category Selected", { category: value })}
        >
          <TabsList aria-label="Sample plan category">
            {samplePlan.map((category) => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {samplePlan.map((category) => (
            <TabsContent key={category.key} value={category.key}>
              <div className="grid gap-6 lg:grid-cols-3">
                {category.tiers.map((tier) => (
                  <div key={tier.label} className="rounded-2xl border border-mist bg-cloud p-6">
                    <h3 className="font-semibold text-ink">{tier.label}</h3>
                    <p className="mt-1 text-sm text-slate">{tier.description}</p>
                    <ul className="mt-4 space-y-2.5">
                      {tier.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-ink">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-8 text-sm text-slate">
          Note: this is an illustrative example of a typical deliverable. It is not generated from, or based on, any
          data about you or your website, account, or app.
        </p>
      </div>
    </section>
  );
}
