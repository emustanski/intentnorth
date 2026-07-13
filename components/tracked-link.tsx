"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventProps?: Record<string, string | number | boolean>;
};

/**
 * A next/link wrapper that fires a coarse Plausible event on click.
 * Lets server-component sections keep a single client boundary for
 * analytics instead of becoming client components themselves.
 */
export function TrackedLink({ event, eventProps, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, eventProps);
        onClick?.(e);
      }}
    />
  );
}
