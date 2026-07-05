import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    title: "Manage your portfolio",
    body: "Structure buildings, units, tenants, and leases so every record has a clear home.",
    variant: "brand" as const,
  },
  {
    title: "Know what is owed",
    body: "Track charges, payments, and allocations so balances stay tied to real activity.",
    variant: "success" as const,
  },
  {
    title: "Understand your spending",
    body: "Capture operating spend with category, vendor, property, unit, lease, and document context.",
    variant: "neutral" as const,
  },
  {
    title: "Turn documents into evidence",
    body: "Organize supported documents around the records they explain and review context before it affects financial records.",
    variant: "warning" as const,
  },
  {
    title: "Trust your reports",
    body: "See expected rent, collected cash, expenses, net cash flow, occupancy, and attention areas from recorded activity.",
    variant: "brand" as const,
  },
  {
    title: "Ask plain-English questions",
    body: "Use AI to explain recorded activity, reports, and supported documents without turning AI into the financial record.",
    variant: "ai" as const,
  },
];

export function ProductPillarsSection() {
  return (
    <Section
      background="soft"
      eyebrow="Product pillars"
      title="What can you actually manage in EstateIQ?"
      description="The product is organized around the work small landlords already do: managing properties, recording money, connecting evidence, reading reports, and asking better questions."
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
