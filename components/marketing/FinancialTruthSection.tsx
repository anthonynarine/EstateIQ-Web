import { Section } from "@/components/ui/Section";

const ledgerRows = [
  { label: "Charge — Rent, Jun 1", amount: "$1,450.00", type: "charge" as const },
  { label: "Charge — Late fee, Jun 6", amount: "$45.00", type: "charge" as const },
  { label: "Payment — Zelle, Jun 4", amount: "−$1,000.00", type: "payment" as const },
  { label: "Payment — Zelle, Jun 18", amount: "−$495.00", type: "payment" as const },
];

export function FinancialTruthSection() {
  return (
    <Section
      description="Charges, payments, and allocations preserve every financial event. That ledger-first model makes open balances, delinquency, and reporting easier to trust."
      eyebrow="The ledger"
      id="ledger"
      title="Balances aren't typed in. They're derived."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

        {/* Left — contrast boxes */}
        <div className="flex flex-col gap-4">
          {/* Bad: what simple trackers do */}
          <div className="rounded-2xl border border-brand-rose/25 bg-transparent p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
              Most rent trackers
            </p>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Track whether rent was marked{" "}
              <span className="text-text-primary">&ldquo;paid&rdquo;</span> — a
              single flag someone has to remember to update.
            </p>
          </div>

          {/* Good: what EstateIQ does */}
          <div className="rounded-2xl border border-brand-emerald/30 bg-brand-emerald/5 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
              EstateIQ
            </p>
            <p className="mt-3 text-sm leading-6 text-text-primary">
              Tracks what was charged, what was paid, how each payment was
              applied, and what remains — every time.
            </p>
          </div>

          <p className="text-sm leading-6 text-text-secondary">
            That difference matters the moment a tenant pays part of what they
            owe, a payment is applied across two charges, or you need an open
            balance as of a specific date. A flag can&apos;t answer that. A
            ledger can.
          </p>
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
              <span className="shrink-0 text-brand-cyan">$0.00</span>
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
