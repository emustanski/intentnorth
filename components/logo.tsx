import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  variant?: "dark" | "light";
};

/**
 * Text-based wordmark with a compass/north-arrow mark formed from the
 * negative space of the "I" — a subtle directional cue without leaning on
 * travel iconography.
 */
export function Logo({ className, markClassName, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const accentColor = variant === "light" ? "text-lime" : "text-indigo";
  const mutedColor = variant === "light" ? "text-white/60" : "text-slate";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn("h-7 w-7 shrink-0", markClassName)}
      >
        <circle cx="16" cy="16" r="15" className={cn("fill-none stroke-current", textColor)} strokeWidth="1.5" opacity="0.25" />
        <path
          d="M16 5 L21 22 L16 18.5 L11 22 Z"
          className={cn("fill-current", accentColor)}
        />
      </svg>
      <span className={cn("text-lg font-bold tracking-tight", textColor)}>
        IntentNorth
        <span className={cn("font-normal", mutedColor)}> Solutions</span>
      </span>
    </span>
  );
}
