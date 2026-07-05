import { Card } from "@/components/ui/Card";

const trustRows = [
  {
    source: "Balances",
    proof: "Trace back to charges, payments, and allocations.",
  },
  {
    source: "Expenses",
    proof: "Trace back to categorized records and supporting documents.",
  },
  {
    source: "Reports",
    proof: "Trace back to deterministic source-domain records.",
  },
  {
    source: "AI explanations",
    proof: "Trace back to records and reports rather than becoming financial truth.",
  },
];

export function ReportTrustDiagram() {
  return (
    <Card className="overflow-hidden" variant="glass">
      <div className="grid grid-cols-2 border-b border-border-soft bg-surface-elevated px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
        <span>Number</span>
        <span>Traceability</span>
      </div>
      <div className="divide-y divide-border-soft">
        {trustRows.map((row) => (
          <div className="grid gap-4 px-4 py-4 sm:grid-cols-2" key={row.source}>
            <p className="text-sm font-medium text-text-primary">{row.source}</p>
            <p className="text-sm leading-6 text-text-secondary">{row.proof}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
