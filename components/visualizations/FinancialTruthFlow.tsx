import { FlowDiagram } from "@/components/visualizations/FlowDiagram";

export function FinancialTruthFlow() {
  return (
    <FlowDiagram
      aria-label="Financial truth flow from ledger records to AI explanation"
      description="Every step keeps the money story traceable. The ledger owns the math, reports read the results, and AI explains the answer."
      steps={[
        {
          title: "Charges",
          description: "What is owed under a lease.",
          tone: "success",
        },
        {
          title: "Payments",
          description: "Money received and recorded.",
          tone: "success",
        },
        {
          title: "Allocations",
          description: "How payments apply to charges.",
          tone: "success",
        },
        {
          title: "Calculated balance",
          description: "Calculated from the ledger records.",
          tone: "success",
        },
        {
          title: "Reports",
          description: "Summaries built from recorded activity.",
          tone: "brand",
        },
        {
          title: "AI explanation",
          description: "AI explains the answer without becoming the source.",
          tone: "ai",
        },
      ]}
      title="Know what is owed, what was paid, and what still remains."
      tone="success"
    />
  );
}
