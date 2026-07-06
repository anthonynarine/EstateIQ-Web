import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type VisualizationShellProps = {
  "aria-label": string;
  children: ReactNode;
  className?: string;
  description?: string;
  title?: string;
  tone?: "brand" | "success" | "ai" | "warning" | "neutral";
};

export function VisualizationShell({
  "aria-label": ariaLabel,
  children,
  className,
  description,
  title,
}: VisualizationShellProps) {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border",
        "bg-gradient-to-b from-background-app-panel to-background-app-soft",
        "px-6 py-8 sm:px-8 sm:py-10",
        className,
      )}
      role="group"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-dot-grid opacity-[0.06]"
      />
      <div className="relative">
        {(title || description) && (
          <div className="mb-8 max-w-3xl">
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
        <div className="overflow-x-auto">
          <div className="min-w-[560px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
