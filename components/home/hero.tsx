import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { IntentVisual } from "@/components/home/intent-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-lime">
            Turn intent into direction.
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Turn audience intent into measurable growth.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            IntentNorth Solutions improves how businesses are found, understood, and chosen across search engines,
            social media, websites, and app stores.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <TrackedLink href="/request-audit" event="Audit CTA Clicked" eventProps={{ location: "hero" }}>
                Request an audit
              </TrackedLink>
            </Button>
            <Button asChild size="lg" variant="outline-inverse">
              <TrackedLink href="/services" event="Service Page Viewed" eventProps={{ location: "hero-secondary" }}>
                Explore our services
              </TrackedLink>
            </Button>
          </div>
        </div>

        <IntentVisual />
      </div>
    </section>
  );
}
