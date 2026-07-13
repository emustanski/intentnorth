import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo">{eyebrow}</p>
      )}
      <Heading className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</Heading>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate">{description}</p>}
    </div>
  );
}
