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

const toneBorderBg: Record<SystemNodeTone, string> = {
  brand:   "border-brand-cyan/30   bg-brand-cyan/[0.08]",
  success: "border-brand-emerald/35 bg-brand-emerald/[0.08]",
  ai:      "border-brand-violet/30  bg-brand-violet/[0.08]",
  warning: "border-brand-amber/30   bg-brand-amber/[0.08]",
  danger:  "border-brand-rose/30    bg-brand-rose/[0.08]",
  neutral: "border-border           bg-surface",
};

const toneText: Record<SystemNodeTone, string> = {
  brand:   "text-brand-cyan",
  success: "text-brand-emerald",
  ai:      "text-brand-violet",
  warning: "text-brand-amber",
  danger:  "text-brand-rose",
  neutral: "text-text-secondary",
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
  const label = eyebrow ?? (index ? String(index) : undefined);

  return (
    <div
      className={cn(
        "relative h-full rounded-2xl border px-4 py-4",
        toneBorderBg[tone],
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "font-mono text-[10px] font-semibold uppercase tracking-[0.12em]",
            toneText[tone],
          )}
        >
          {label}
        </p>
      )}
      <h4
        className={cn(
          "text-sm font-semibold",
          label ? "mt-2" : "mt-0",
          toneText[tone],
        )}
      >
        {title}
      </h4>
      {description && (
        <p className="mt-1.5 text-xs leading-5 text-text-muted">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
