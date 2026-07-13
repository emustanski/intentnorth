"use client";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

export type AnalyticsEvent =
  | "Audit CTA Clicked"
  | "Audit Form Started"
  | "Audit Form Submitted"
  | "Contact Form Submitted"
  | "Service Page Viewed"
  | "Sample Plan Category Selected"
  | "Booking CTA Clicked";

/**
 * Fires a Plausible custom event when analytics is configured. Never pass
 * form contents, emails, names, or URLs as event props — only coarse,
 * non-identifying context (e.g. a service slug or category key).
 */
export function trackEvent(event: AnalyticsEvent, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || !window.plausible) {
    return;
  }
  window.plausible(event, props ? { props } : undefined);
}
