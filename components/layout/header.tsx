"use client";

import * as React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site-config";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent bg-cloud/95 backdrop-blur transition-[padding,box-shadow,border-color] duration-200",
        scrolled && "border-mist shadow-sm",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-8xl items-center justify-between px-4 py-5 transition-[padding] duration-200 sm:px-6 lg:px-8",
          scrolled && "py-3",
        )}
      >
        <Link href="/" className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-mist/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/request-audit" onClick={() => trackEvent("Audit CTA Clicked", { location: "header" })}>
              Request an audit
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
