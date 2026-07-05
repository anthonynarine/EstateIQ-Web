import { Card } from "@/components/ui/Card";

const metricBlocks = [
  { label: "Rent expected", value: "Structured total" },
  { label: "Cash collected", value: "Ledger-derived" },
  { label: "Expenses", value: "Record-backed" },
];

const rows = [
  "Building and unit context",
  "Lease and ledger records",
  "Expenses with documents",
  "Reports and AI explanation",
];

export function DashboardPreview() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {metricBlocks.map((metric) => (
          <Card className="p-4" key={metric.label} variant="solid">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
              {metric.label}
            </p>
            <p className="mt-3 text-sm font-semibold text-text-primary">
              {metric.value}
            </p>
          </Card>
        ))}
      </div>
      <Card className="p-4" variant="outline">
        <div className="grid gap-3">
          {rows.map((row) => (
            <div
              className="grid gap-3 rounded-2xl border border-border-soft bg-surface px-4 py-3 sm:grid-cols-[1fr_120px]"
              key={row}
            >
              <p className="text-sm font-medium text-text-primary">{row}</p>
              <div className="h-2 self-center rounded-full bg-brand-cyan/30" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
