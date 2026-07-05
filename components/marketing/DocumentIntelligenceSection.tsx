import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const documentUses = [
  "Upload receipts",
  "Upload invoices",
  "Upload leases",
  "Connect supported documents",
  "Review details before financial records are created",
];

export function DocumentIntelligenceSection() {
  return (
    <Section
      background="soft"
      eyebrow="Document intelligence"
      title="Your documents should not just be stored. They should be understood."
      description="EstateIQ helps connect supported documents to the properties, leases, expenses, and reports they explain. User confirmation remains the boundary before document context becomes a financial record."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="grid gap-3">
          {documentUses.map((item) => (
            <Card className="p-4" key={item} variant="outline">
              <p className="text-sm font-medium text-text-primary">{item}</p>
            </Card>
          ))}
        </div>
        <Card className="p-6" variant="glass">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">
            Review-first workflow
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
            Evidence supports financial truth. It does not silently replace it.
          </h3>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            Bills, receipts, statements, and leases can become connected
            evidence in EstateIQ. Confirmed financial entries stay grounded in
            user-reviewed data and backend validation.
          </p>
        </Card>
      </div>
    </Section>
  );
}
