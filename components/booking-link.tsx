"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type BookingLinkProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Renders the external booking CTA only when NEXT_PUBLIC_BOOKING_URL is
 * configured. Without it, the CTA is omitted rather than pointing nowhere.
 */
export function BookingLink({ className, children, variant, size }: BookingLinkProps) {
  if (!siteConfig.bookingUrl) {
    return null;
  }

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(className)}
    >
      <a
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("Booking CTA Clicked")}
      >
        {children ?? "Book a consultation"}
      </a>
    </Button>
  );
}
