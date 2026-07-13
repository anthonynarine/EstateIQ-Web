function InputCard({
  amount,
  detail,
  label,
  tone,
}: {
  amount: string;
  detail: string;
  label: string;
  tone: "cyan" | "emerald";
}) {
  const classes = {
    cyan: {
      border: "border-brand-cyan/30",
      label: "text-brand-cyan",
      glow: "shadow-[0_0_20px_rgba(34,211,238,0.08)]",
    },
    emerald: {
      border: "border-brand-emerald/30",
      label: "text-brand-emerald",
      glow: "shadow-[0_0_20px_rgba(52,211,153,0.08)]",
    },
  }[tone];

  return (
    <div className={`rounded-xl border bg-background-app-panel/80 px-4 py-3.5 ${classes.border} ${classes.glow}`}>
      <p className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${classes.label}`}>{label}</p>
      <p className="mt-2 font-mono text-lg font-semibold text-text-primary">{amount}</p>
      <p className="mt-1 text-[11px] text-text-muted">{detail}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex items-center px-3">
      <span className="h-px flex-1 bg-gradient-to-r from-border-strong to-brand-emerald/45" />
      <svg className="-ml-px text-brand-emerald/60" fill="none" height="10" viewBox="0 0 7 10" width="7">
        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function FinancialTruthFlow() {
  return (
    <div
      aria-label="A charge and payment enter the lease ledger, producing a calculated remaining balance"
      className="overflow-x-auto"
      role="group"
    >
      <div className="min-w-[720px] rounded-2xl border border-border-soft bg-gradient-to-b from-background-app-panel/80 to-background-app/55 p-5 shadow-card-soft sm:p-6">
        <div className="grid grid-cols-[1fr_4rem_1.35fr_4rem_1fr] items-center">
          <div className="grid gap-3">
            <InputCard
              amount="$3,200"
              detail="June rent"
              label="Rent due"
              tone="cyan"
            />
            <InputCard
              amount="$3,200"
              detail="June rent paid in full"
              label="Payment recorded"
              tone="emerald"
            />
          </div>

          <FlowArrow />

          <div className="overflow-hidden rounded-xl border border-brand-emerald/30 bg-brand-emerald/[0.04] shadow-[0_0_26px_rgba(52,211,153,0.09)]">
            <div className="flex items-center justify-between gap-3 border-b border-brand-emerald/20 bg-brand-emerald/[0.06] px-4 py-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-emerald">Lease ledger</p>
                <p className="mt-1 text-xs text-text-secondary">Liberty Avenue · Unit 2A</p>
              </div>
              <span className="rounded-full border border-brand-emerald/25 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-brand-emerald">
                Automatic
              </span>
            </div>
            <div className="divide-y divide-border-soft px-4">
              <div className="flex items-center justify-between gap-4 py-3 text-xs">
                <div>
                  <p className="font-medium text-text-primary">June rent</p>
                  <p className="mt-0.5 text-[10px] text-text-muted">Amount owed</p>
                </div>
                <span className="font-mono font-semibold text-text-primary">+$3,200</span>
              </div>
              <div className="flex items-center justify-between gap-4 py-3 text-xs">
                <div>
                  <p className="font-medium text-text-primary">Payment received</p>
                  <p className="mt-0.5 text-[10px] text-text-muted">Applied to open rent</p>
                </div>
                <span className="font-mono font-semibold text-brand-emerald">−$3,200</span>
              </div>
            </div>
          </div>

          <FlowArrow />

          <div className="rounded-xl border border-brand-violet/30 bg-brand-violet/[0.06] px-5 py-6 text-center shadow-[0_0_24px_rgba(124,58,237,0.1)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-violet">Remaining balance</p>
            <p className="mt-3 font-mono text-2xl font-semibold text-text-primary">$0</p>
            <p className="mt-2 text-[11px] font-medium leading-4 text-brand-emerald">Paid in full</p>
          </div>
        </div>

      </div>
    </div>
  );
}
