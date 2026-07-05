import type { CSSProperties } from "react";

import { FlowConnector } from "@/components/visualizations/FlowConnector";
import { SystemNode, type SystemNodeTone } from "@/components/visualizations/SystemNode";
import { VisualizationShell } from "@/components/visualizations/VisualizationShell";

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
            <SystemNode
              description={step.description}
              eyebrow={step.eyebrow}
              index={index + 1}
              title={step.title}
              tone={step.tone}
            />
            {index < steps.length - 1 && (
              <>
                <FlowConnector
                  className="lg:hidden"
                  direction="vertical"
                  tone={step.tone === "warning" ? "warning" : tone}
                  variant={step.tone === "ai" ? "glow" : "solid"}
                />
                <FlowConnector
                  tone={step.tone === "warning" ? "warning" : tone}
                  variant={step.tone === "ai" ? "glow" : "solid"}
                />
              </>
            )}
          </li>
        ))}
      </ol>
    </VisualizationShell>
  );
}
