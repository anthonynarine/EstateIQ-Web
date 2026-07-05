import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type SystemNodeTone =
  | "brand"
  | "success"
  | "ai"
  | "warning"
  | "danger"
  | "neutral";

type SystemNodeProps = {
  children?: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  index?: number;
  title: string;
  tone?: SystemNodeTone;
};

const toneClasses = {
  brand: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  success: "border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald",
  ai: "border-brand-violet/30 bg-brand-violet/10 text-brand-violet",
  warning: "border-brand-amber/30 bg-brand-amber/10 text-brand-amber",
  danger: "border-brand-rose/30 bg-brand-rose/10 text-brand-rose",
  neutral: "border-border-soft bg-surface text-text-secondary",
};

export function SystemNode({
  children,
  className,
  description,
  eyebrow,
  index,
  title,
  tone = "neutral",
}: SystemNodeProps) {
  return (
    <div
      className={cn(
        "relative h-full rounded-2xl border bg-background-app-panel/80 p-4 shadow-card-soft",
        "transition duration-200 hover:border-border-strong hover:bg-surface-elevated",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex min-h-7 items-center rounded-button border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
            toneClasses[tone],
          )}
        >
          {eyebrow ?? (index ? String(index).padStart(2, "0") : "Node")}
        </span>
      </div>
      <h4 className="mt-4 text-base font-semibold text-text-primary">
        {title}
      </h4>
      {description && (
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

