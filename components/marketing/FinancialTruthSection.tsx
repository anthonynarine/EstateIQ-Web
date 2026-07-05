import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const ledgerFacts = [
  {
    title: "Charges",
    body: "What is owed under a lease.",
  },
  {
    title: "Payments",
    body: "Money received and recorded.",
  },
  {
    title: "Allocations",
    body: "How each payment is applied to charges.",
  },
  {
    title: "Traceable balances",
    body: "Balances derived from ledger records, not manually edited totals.",
  },
];

export function FinancialTruthSection() {
  return (
    <Section
      eyebrow="Financial truth"
      title="Wondering where your money actually went?"
      description="Charges, payments, and allocations preserve financial history. That ledger-first model makes open balances, delinquency, and reporting easier to trust."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <Card className="p-6" variant="glass">
          <p className="text-sm font-medium text-text-secondary">
            Core formula
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
            Lease balance = charges - allocations
          </p>
          <p className="mt-4 text-sm leading-6 text-text-muted">
            This keeps the ledger explainable. Partial payments, unapplied
            payments, and outstanding balances remain tied to the underlying
            records.
          </p>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          {ledgerFacts.map((fact) => (
            <Card className="p-5" key={fact.title} variant="outline">
              <h3 className="text-base font-semibold text-text-primary">
                {fact.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {fact.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
