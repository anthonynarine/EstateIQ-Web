import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function WhyEstateIQSection() {
  return (
    <Section
      background="soft"
      eyebrow="Why EstateIQ exists"
      title="EstateIQ organizes the financial life of a rental portfolio into one trusted system."
      description="The product is built around financial clarity first: structured records, lease-scoped receivables, owner-side expenses, supporting documents, deterministic reports, and grounded AI interpretation."
    >
      <Card className="p-6 sm:p-8" variant="glass">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Not traditional property management
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              EstateIQ is not centered on tenant portals or generic task
              tracking. It is centered on financial truth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Records before interpretation
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Reports and AI become useful only when the underlying lease,
              ledger, expense, and document records are dependable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Built for small portfolios
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Independent owners get professional financial visibility without
              enterprise property software complexity.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
