import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const reportAreas = [
  {
    title: "Portfolio overview",
    description:
      "See expected rent, collected cash, expenses, net cash flow, occupancy, and attention areas.",
    tone: "brand" as const,
  },
  {
    title: "Expense summaries",
    description:
      "Understand spend by month, category, and building from structured expense records.",
    tone: "neutral" as const,
  },
  {
    title: "Ledger balances",
    description:
      "Read open balances from charges, payments, and allocations rather than loose totals.",
    tone: "success" as const,
  },
  {
    title: "Delinquency context",
    description:
      "Identify leases with remaining balances and understand what still needs attention.",
    tone: "warning" as const,
  },
  {
    title: "Building performance",
    description:
      "Compare building-level financial activity and occupancy context.",
    tone: "brand" as const,
  },
  {
    title: "Tax readiness context",
    description:
      "Use categorized records and supporting documents to prepare cleaner accountant review.",
    tone: "neutral" as const,
  },
];

export function ReportAreaGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reportAreas.map((area) => (
        <Card className="p-5" key={area.title} variant="glass">
          <Badge variant={area.tone}>{area.title}</Badge>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            {area.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
