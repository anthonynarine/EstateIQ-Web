import { FlowDiagram } from "@/components/visualizations/FlowDiagram";

export function DocumentIntelligenceFlow() {
  return (
    <FlowDiagram
      aria-label="Document intelligence flow from supported documents to connected records"
      description="A receipt, lease, invoice, or statement is more useful when you know what record it explains."
      steps={[
        {
          title: "Supported document",
          description: "Mortgage statement, lease, receipt, or invoice.",
          tone: "ai",
        },
        {
          title: "Upload",
          description: "The file enters the document workflow.",
          tone: "brand",
        },
        {
          title: "Review",
          description: "Details are checked before financial use.",
          tone: "warning",
        },
        {
          title: "Confirm",
          description: "Reviewed fields can become connected context.",
          tone: "success",
        },
        {
          title: "Connected record",
          description: "Connected evidence supports expenses, leases, or property context.",
          tone: "success",
        },
        {
          title: "Reports and AI",
          description: "Reports and AI can explain supported documents and confirmed records.",
          tone: "ai",
        },
      ]}
      title="Your documents should work for you."
      tone="ai"
    />
  );
}
