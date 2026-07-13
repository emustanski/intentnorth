import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

/**
 * Only injects the Plausible script tag when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is
 * configured, so no third-party analytics request fires otherwise.
 */
export function PlausibleScript() {
  if (!siteConfig.plausibleDomain) {
    return null;
  }

  return (
    <Script
      defer
      data-domain={siteConfig.plausibleDomain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
