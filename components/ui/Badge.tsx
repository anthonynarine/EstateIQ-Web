import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeVariant = "brand" | "ai" | "success" | "warning" | "neutral";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
} & ComponentPropsWithoutRef<"span">;

const variantClasses = {
  brand: "border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan",
  ai: "border-brand-violet/25 bg-brand-violet/10 text-brand-violet",
  success: "border-brand-emerald/25 bg-brand-emerald/10 text-brand-emerald",
  warning: "border-brand-amber/25 bg-brand-amber/10 text-brand-amber",
  neutral: "border-border-soft bg-surface-elevated text-text-secondary",
};

export function Badge({
  children,
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-button border px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
