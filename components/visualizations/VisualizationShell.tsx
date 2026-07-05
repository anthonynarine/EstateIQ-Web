import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type VisualizationShellProps = {
  "aria-label": string;
  children: ReactNode;
  className?: string;
  description?: string;
  title?: string;
  tone?: "brand" | "success" | "ai" | "warning" | "neutral";
};

const toneClasses = {
  brand: "from-brand-cyan/16",
  success: "from-brand-emerald/16",
  ai: "from-brand-violet/16",
  warning: "from-brand-amber/14",
  neutral: "from-white/8",
};

export function VisualizationShell({
  "aria-label": ariaLabel,
  children,
  className,
  description,
  title,
  tone = "brand",
}: VisualizationShellProps) {
  return (
    <Card
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden p-5 sm:p-6",
        "bg-gradient-to-br to-transparent",
        toneClasses[tone],
        className,
      )}
      role="group"
      variant="glass"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
      <div className="relative">
        {(title || description) && (
          <div className="mb-6 max-w-3xl">
            {title && (
              <h3 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </Card>
  );
}

