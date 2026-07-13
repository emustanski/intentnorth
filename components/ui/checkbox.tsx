import * as React from "react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-5 w-5 shrink-0 rounded border border-mist text-indigo",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2",
        "aria-invalid:border-red-500",
        className,
      )}
      {...props}
    />
  );
}

export { Checkbox };
