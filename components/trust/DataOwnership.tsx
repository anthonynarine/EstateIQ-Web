import { Card } from "@/components/ui/Card";

export function DataOwnership() {
  return (
    <Card className="p-6 sm:p-8" variant="glass">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
        Data ownership
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
        Your records should stay understandable and portable in principle.
      </h3>
      <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">
        EstateIQ is built around structured records: buildings, units, leases,
        charges, payments, expenses, documents, and reports. That structure is
        what makes the portfolio easier to explain and audit through deliberate
        product workflows.
      </p>
    </Card>
  );
}
