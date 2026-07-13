import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/tracked-link";
import { BookingLink } from "@/components/booking-link";

export function FinalCta() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Not sure what is limiting your digital growth?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Start with a focused manual audit and receive a clear view of what deserves attention first.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <TrackedLink href="/request-audit" event="Audit CTA Clicked" eventProps={{ location: "final-cta" }}>
              Request your audit
            </TrackedLink>
          </Button>
          <BookingLink size="lg" variant="outline-inverse" />
        </div>
      </div>
    </section>
  );
}
