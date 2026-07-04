import { Card } from "@/components/ui/Card";

const modelParts = [
  {
    label: "Charges",
    description: "What is owed",
  },
  {
    label: "Allocations",
    description: "Applied payment amounts",
  },
  {
    label: "Balance",
    description: "Charges minus allocations",
  },
];

export function LedgerModelDiagram() {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
        Ledger model
      </p>
      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {modelParts.map((part, index) => (
          <div
            className="rounded-2xl border border-border-soft bg-surface p-4"
            key={part.label}
          >
            <span className="text-xs font-semibold text-text-faint">
              {index === 1 ? "minus" : index === 2 ? "equals" : "start"}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-text-primary">
              {part.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {part.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-2xl border border-brand-emerald/20 bg-brand-emerald/10 p-4 text-sm leading-6 text-text-secondary">
        Payments are recorded as money received. Allocations explain how those
        payments reduce specific charges.
      </p>
    </Card>
  );
}
