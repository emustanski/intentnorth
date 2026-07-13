import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5",
  {
    variants: {
      variant: {
        primary: "bg-indigo text-white hover:bg-indigo/90",
        secondary: "bg-navy text-white hover:bg-navy/90",
        outline: "border border-mist bg-transparent text-ink hover:bg-mist/50",
        "outline-inverse": "border border-white/30 bg-transparent text-white hover:bg-white/10",
        ghost: "bg-transparent text-ink hover:bg-mist/50",
        link: "bg-transparent text-indigo underline-offset-4 hover:underline px-0 min-h-0",
      },
      size: {
        default: "h-11",
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
