"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-config";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-mist/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo md:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/40 md:hidden" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-xl focus:outline-none md:hidden"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between">
            <Dialog.Title asChild>
              <Logo className="text-base" />
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-mist/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3.5 text-lg font-medium text-ink hover:bg-mist/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Button asChild className="w-full" size="lg">
              <Link
                href="/request-audit"
                onClick={() => {
                  trackEvent("Audit CTA Clicked", { location: "mobile-nav" });
                  setOpen(false);
                }}
              >
                Request an audit
              </Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
