import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CardVariant = "glass" | "outline" | "solid";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  variant?: CardVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClasses = {
  glass:
    "border border-border bg-surface shadow-card-soft backdrop-blur-xl",
  outline: "border border-border-soft bg-transparent",
  solid: "border border-border-soft bg-background-app-panel",
};

export function Card<T extends ElementType = "div">({
  as,
  children,
  className,
  interactive = false,
  variant = "glass",
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-card",
        variantClasses[variant],
        interactive &&
          "transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated hover:shadow-glow-cyan",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
