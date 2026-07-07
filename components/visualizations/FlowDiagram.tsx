import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";
import { FlowConnector } from "@/components/visualizations/FlowConnector";
import { VisualizationShell } from "@/components/visualizations/VisualizationShell";
import type { SystemNodeTone } from "@/components/visualizations/SystemNode";

type ConnectorTone = "brand" | "success" | "ai" | "warning" | "neutral";

function toConnectorTone(t?: SystemNodeTone): ConnectorTone {
  if (!t || t === "danger") return "neutral";
  return t;
}

type FlowStep = {
  description?: string;
  eyebrow?: string;
  title: string;
  tone?: SystemNodeTone;
};

type FlowDiagramProps = {
  "aria-label": string;
  description?: string;
  steps: FlowStep[];
  title?: string;
  tone?: "brand" | "success" | "ai" | "warning" | "neutral";
};

// Accent bar at top of each node — tone color as the visual identifier
const accentClasses: Record<SystemNodeTone, string> = {
  brand: "bg-brand-cyan",
  success: "bg-brand-emerald",
  ai: "bg-brand-violet",
  warning: "bg-brand-amber",
  danger: "bg-brand-rose",
  neutral: "bg-border-strong",
};

const labelClasses: Record<SystemNodeTone, string> = {
  brand: "text-brand-cyan/70",
  success: "text-brand-emerald/70",
  ai: "text-brand-violet/70",
  warning: "text-brand-amber/70",
  danger: "text-brand-rose/70",
  neutral: "text-text-faint",
};

const titleClasses: Record<SystemNodeTone, string> = {
  brand: "text-brand-cyan",
  success: "text-brand-emerald",
  ai: "text-brand-violet",
  warning: "text-brand-amber",
  danger: "text-brand-rose",
  neutral: "text-text-primary",
};

type FlowNodeProps = {
  description?: string;
  label?: string;
  title: string;
  tone?: SystemNodeTone;
};

function FlowNode({ description, label, title, tone = "neutral" }: FlowNodeProps) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-border-soft bg-background-app-panel/80 p-4 shadow-card-soft transition duration-200 hover:border-border-strong hover:bg-surface-elevated">
      {/* Tone accent bar — replaces the numbered badge */}
      <div className={cn("absolute inset-x-0 top-0 h-[2px]", accentClasses[tone])} />

      {/* Optional label (only shown when explicitly provided — no auto-numbers) */}
      {label && (
        <p className={cn("text-[10px] font-semibold uppercase tracking-[0.15em]", labelClasses[tone])}>
          {label}
        </p>
      )}

      {/* Title */}
      <h4
        className={cn(
          "text-sm font-semibold leading-snug",
          label ? "mt-2" : "mt-1",
          titleClasses[tone],
        )}
      >
        {title}
      </h4>

      {/* Description */}
      {description && (
        <p className="mt-2 text-xs leading-[1.6] text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}

export function FlowDiagram({
  "aria-label": ariaLabel,
  description,
  steps,
  title,
  tone = "brand",
}: FlowDiagramProps) {
  return (
    <VisualizationShell
      aria-label={ariaLabel}
      description={description}
      title={title}
      tone={tone}
    >
      <ol
        className="grid gap-3 lg:grid-cols-[repeat(var(--step-count),minmax(0,1fr))]"
        style={{ "--step-count": steps.length } as CSSProperties}
      >
        {steps.map((step, index) => (
          <li className="grid gap-3 lg:grid-cols-[1fr_2rem]" key={step.title}>
            <FlowNode
              description={step.description}
              label={step.eyebrow}
              title={step.title}
              tone={step.tone}
            />
            {index < steps.length - 1 && (
              <>
                <FlowConnector
                  className="lg:hidden"
                  direction="vertical"
                  tone={toConnectorTone(step.tone)}
                />
                <FlowConnector tone={toConnectorTone(step.tone)} />
              </>
            )}
          </li>
        ))}
      </ol>
    </VisualizationShell>
  );
}
