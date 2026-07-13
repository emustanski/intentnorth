"use client";

import * as React from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
};

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/**
 * Renders the Cloudflare Turnstile widget only when
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY is configured. When it isn't, this renders
 * nothing and the form falls back to honeypot-only spam protection — see
 * lib/turnstile.ts for the matching server-side graceful degradation.
 */
export function TurnstileWidget({ onVerify, onExpire }: TurnstileWidgetProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const widgetIdRef = React.useRef<string | undefined>(undefined);
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!scriptLoaded || !siteKey || !containerRef.current || !window.turnstile) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      "expired-callback": onExpire,
    });
  }, [scriptLoaded, onVerify, onExpire]);

  if (!siteKey) {
    return null;
  }

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div ref={containerRef} />
    </div>
  );
}
