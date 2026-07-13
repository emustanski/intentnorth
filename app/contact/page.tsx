import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";
import { BookingLink } from "@/components/booking-link";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with IntentNorth Solutions for press, partnerships, or general questions. Looking for an audit? Use the dedicated audit request form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        id="contact-breadcrumb-jsonld"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <div className="mt-6">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Get in touch"
          description="For press, partnerships, or general questions. Looking to request a full audit instead?"
        />
        <p className="mt-2 max-w-2xl text-slate">
          Use the{" "}
          <Link href="/request-audit" className="text-indigo underline underline-offset-2 hover:no-underline">
            audit request form
          </Link>{" "}
          for a more detailed intake.
        </p>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_240px]">
        <div className="rounded-2xl border border-mist bg-white p-6 sm:p-8">
          <ContactForm />
        </div>

        <div className="space-y-6 text-sm text-slate">
          <div>
            <h2 className="text-sm font-semibold text-ink">Email</h2>
            <a href={`mailto:${siteConfig.contactEmail}`} className="mt-1 block text-indigo hover:underline">
              {siteConfig.contactEmail}
            </a>
          </div>
          {siteConfig.bookingUrl && (
            <div>
              <h2 className="text-sm font-semibold text-ink">Prefer to talk?</h2>
              <div className="mt-2">
                <BookingLink variant="outline" size="sm" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
