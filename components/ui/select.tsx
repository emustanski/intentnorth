import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(
          "flex h-11 w-full appearance-none rounded-lg border border-mist bg-white px-3.5 pr-10 text-base text-ink",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:border-indigo",
          "aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate"
      />
    </div>
  );
}

export { Select };
