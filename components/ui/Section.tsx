import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  description?: string;
  id?: string;
  tabIndex?: number;
  title?: string;
  background?: "default" | "soft" | "panel" | "grid";
  size?: "sm" | "md" | "lg";
};

const backgroundClasses = {
  default: "",
  soft: "bg-background-app-soft/55",
  panel: "bg-background-app-panel",
  grid: "hero-grid",
};

const sizeClasses = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export function Section({
  children,
  className,
  containerClassName,
  description,
  eyebrow,
  id,
  tabIndex,
  title,
  background = "default",
  size = "md",
}: SectionProps) {
  return (
    <section
      className={cn(
        sizeClasses[size],
        backgroundClasses[background],
        id && "scroll-mt-28",
        className,
      )}
      id={id}
      tabIndex={tabIndex}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-3xl sm:mb-10">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-base leading-7 text-text-secondary sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
