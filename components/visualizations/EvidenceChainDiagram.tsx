import { FlowDiagram } from "@/components/visualizations/FlowDiagram";

type EvidenceChainDiagramProps = {
  "aria-label": string;
  description?: string;
  title?: string;
};

export function EvidenceChainDiagram({
  "aria-label": ariaLabel,
  description,
  title,
}: EvidenceChainDiagramProps) {
  return (
    <FlowDiagram
      aria-label={ariaLabel}
      description={description}
      steps={[
        {
          title: "Evidence",
          description: "A supported file or document enters the system.",
          tone: "ai",
        },
        {
          title: "Review",
          description: "The user checks the context before confirmation.",
          tone: "warning",
        },
        {
          title: "Confirmed record",
          description: "Reviewed details become connected financial context.",
          tone: "success",
        },
      ]}
      title={title}
      tone="ai"
    />
  );
}

