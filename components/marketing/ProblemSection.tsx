import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const scatteredSources = [
  "Spreadsheets",
  "Receipts",
  "Bank statements",
  "Text messages",
  "Email",
  "Multiple apps",
];

export function ProblemSection() {
  return (
    <Section
      eyebrow="The current reality"
      title="Small landlords run financial businesses with scattered records."
      description="Independent owners often make decisions from records spread across tools, documents, inboxes, and memory. EstateIQ starts by respecting that reality."
      size="md"
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {scatteredSources.map((source) => (
          <Card className="p-5" key={source} variant="outline">
            <p className="text-sm font-medium text-text-primary">{source}</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Important context, usually disconnected from the full financial
              picture.
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
