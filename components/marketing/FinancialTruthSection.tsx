import { Section } from "@/components/ui/Section";

const ledgerRows = [
  { label: "Charge — Rent, Jun 1", amount: "$3,200.00", type: "charge" as const },
  { label: "Payment — Zelle, Jun 4", amount: "−$1,000.00", type: "payment" as const },
  { label: "Payment — Zelle, Jun 18", amount: "−$400.00", type: "payment" as const },
];

export function FinancialTruthSection() {
  return (
    <Section
      description="EstateIQ records each charge and payment, then calculates what remains. You can follow any balance back to the transactions behind it."
      eyebrow="The ledger"
      id="ledger"
      title="Every balance has a clear history."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

        {/* Left — balance equation */}
        <div className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-background-app-panel to-background-app-soft p-6 shadow-card-soft sm:p-8">
          <div className="absolute inset-0 bg-radial-cyan-glow opacity-30" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
              How the balance works
            </p>

            <div className="mt-8 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4">
              <div className="rounded-2xl border border-brand-cyan/25 bg-brand-cyan/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                  Charges
                </p>
                <p className="mt-3 font-mono text-xl font-semibold text-text-primary">
                  $3,200
                </p>
                <p className="mt-2 text-xs text-text-secondary">What was owed</p>
              </div>

              <span
                className="ledger-operator ledger-operator-minus text-center font-mono text-xl text-text-muted"
                aria-hidden="true"
              >
                −
              </span>

              <div className="rounded-2xl border border-brand-emerald/25 bg-brand-emerald/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                  Payments
                </p>
                <p className="mt-3 font-mono text-xl font-semibold text-brand-emerald">
                  $1,400
                </p>
                <p className="mt-2 text-xs text-text-secondary">What was paid</p>
              </div>

              <span
                className="ledger-operator ledger-operator-equals text-center font-mono text-xl text-text-muted"
                aria-hidden="true"
              >
                =
              </span>

              <div className="rounded-2xl border border-brand-violet/30 bg-brand-violet/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                  Balance
                </p>
                <p className="mt-3 font-mono text-xl font-semibold text-brand-violet">
                  $1,800
                </p>
                <p className="mt-2 text-xs text-text-secondary">What remains</p>
              </div>
            </div>

            <p className="mt-8 border-t border-border-soft pt-5 text-sm leading-6 text-text-secondary">
              The total is calculated from the activity below it. Open the
              history anytime to see exactly how the balance was reached.
            </p>
          </div>
        </div>

        {/* Right — ledger panel */}
        <div className="rounded-card border border-border bg-background-app-panel p-6 shadow-card-soft">
          {/* Ledger rows */}
          <div className="divide-y divide-border-soft">
            {ledgerRows.map((row) => (
              <div
                className="flex items-baseline justify-between gap-4 py-3 font-mono text-sm"
                key={row.label}
              >
                <span className="text-text-secondary">{row.label}</span>
                <span
                  className={
                    row.type === "payment"
                      ? "shrink-0 text-brand-emerald"
                      : "shrink-0 text-text-primary"
                  }
                >
                  {row.amount}
                </span>
              </div>
            ))}

            {/* Total row */}
            <div className="flex items-baseline justify-between gap-4 pt-4 font-mono text-sm font-semibold">
              <span className="text-text-secondary">Remaining balance</span>
              <span className="shrink-0 text-brand-cyan">$1,800.00</span>
            </div>
          </div>

          {/* Formula */}
          <div className="mt-5 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 px-4 py-3">
            <p className="font-mono text-xs text-brand-cyan">
              balance = Σ(charges) − Σ(allocations)
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
}
