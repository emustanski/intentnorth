import type { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for couldn't be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <Compass aria-hidden="true" className="h-12 w-12 text-indigo" />
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        We couldn&apos;t find that direction.
      </h1>
      <p className="mt-4 text-lg text-slate">
        The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Back to homepage</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/services">Explore services</Link>
        </Button>
      </div>
    </div>
  );
}
