import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-mist bg-white px-3.5 text-base text-ink placeholder:text-slate",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:border-indigo",
        "aria-invalid:border-red-500 aria-invalid:ring-1 aria-invalid:ring-red-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
