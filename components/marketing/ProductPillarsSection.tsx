import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    title: "Property Organization",
    body: "Structure buildings, units, tenants, and leases so every record has a clear home.",
    variant: "brand" as const,
  },
  {
    title: "Ledger Accounting",
    body: "Track charges, payments, and allocations instead of relying on manually edited balances.",
    variant: "success" as const,
  },
  {
    title: "Expense Tracking",
    body: "Capture operating spend with category, vendor, property, unit, lease, and document context.",
    variant: "neutral" as const,
  },
  {
    title: "Document Intelligence",
    body: "Organize receipts, invoices, statements, leases, and supporting records around financial truth.",
    variant: "warning" as const,
  },
  {
    title: "Portfolio Reporting",
    body: "See expected rent, collected cash, expenses, net cash flow, occupancy, and attention areas.",
    variant: "brand" as const,
  },
  {
    title: "AI Copilot",
    body: "Interpret verified records, ledger data, documents, and reports with grounded AI assistance.",
    variant: "ai" as const,
  },
];

export function ProductPillarsSection() {
  return (
    <Section
      background="soft"
      eyebrow="Product pillars"
      title="One operating layer for the records small landlords already depend on."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <Card className="p-5" interactive key={pillar.title} variant="glass">
            <Badge variant={pillar.variant}>{pillar.title}</Badge>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              {pillar.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
