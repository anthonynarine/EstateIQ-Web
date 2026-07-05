import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function WhyEstateIQSection() {
  return (
    <Section
      background="soft"
      eyebrow="Why EstateIQ exists"
      title="What if your records, documents, reports, and AI all worked together?"
      description="That is the difference EstateIQ is building toward. The product connects portfolio structure, lease receivables, expenses, supported documents, traceable reports, and AI explanations into one financial operating layer."
    >
      <Card className="p-6 sm:p-8" variant="glass">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Not traditional property management
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              EstateIQ is not centered on tenant portals or generic task
              tracking. It is centered on understanding the money story.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Records before interpretation
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Reports and AI become useful only when the underlying lease,
              ledger, expense, and supported document records are dependable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              Built for small portfolios
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Independent owners get enterprise-grade financial intelligence
              without enterprise property software complexity.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
