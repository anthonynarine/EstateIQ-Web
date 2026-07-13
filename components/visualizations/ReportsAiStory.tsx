const reportMetrics = [
  { label: "Rent collected", value: "$28,400", tone: "text-brand-emerald" },
  { label: "Operating expenses", value: "$8,750", tone: "text-brand-amber" },
  { label: "Net operating income", value: "$19,650", tone: "text-brand-cyan" },
  { label: "Occupancy", value: "92%", tone: "text-brand-violet" },
  { label: "Open balances", value: "$1,800", tone: "text-text-primary" },
];

const answerSources = ["Portfolio report", "Liberty Ave ledger", "Unit 3B lease"];

export function ReportsAiStory() {
  return (
    <div
      aria-label="A traceable portfolio report feeding a plain-English EstateIQ AI explanation with supporting record sources"
      className="overflow-x-auto"
      role="group"
    >
      <div className="min-w-[720px] rounded-2xl border border-border-soft bg-gradient-to-b from-background-app-panel/80 to-background-app/55 p-5 shadow-card-soft sm:p-6">
        <div className="grid grid-cols-[1fr_4.5rem_1fr] items-center">
          <div className="overflow-hidden rounded-2xl border border-brand-cyan/25 bg-background-app/70">
            <div className="flex items-center justify-between gap-4 border-b border-brand-cyan/15 bg-brand-cyan/[0.045] px-5 py-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                  Portfolio report
                </p>
                <h3 className="mt-1.5 text-sm font-semibold text-text-primary">June portfolio snapshot</h3>
              </div>
              <span className="rounded-full border border-brand-cyan/25 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-brand-cyan">
                Current
              </span>
            </div>

            <div className="divide-y divide-border-soft px-5">
              {reportMetrics.map((metric) => (
                <div className="flex items-center justify-between gap-5 py-3" key={metric.label}>
                  <p className="text-xs text-text-secondary">{metric.label}</p>
                  <p className={`font-mono text-sm font-semibold ${metric.tone}`}>{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border-soft bg-background-app-soft/45 px-5 py-3">
              <p className="text-[10px] leading-4 text-text-muted">
                Built from buildings, leases, ledger activity, and expenses.
              </p>
            </div>
          </div>

          <div aria-hidden="true" className="flex items-center px-3">
            <span className="h-px flex-1 bg-gradient-to-r from-brand-cyan/40 to-brand-violet/50" />
            <svg className="-ml-px text-brand-violet/65" fill="none" height="12" viewBox="0 0 8 12" width="8">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-brand-violet/25 bg-brand-violet/[0.05] p-5">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-violet-glow opacity-25" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-violet">
                  EstateIQ AI
                </p>
              </div>
              <h3 className="mt-2 text-sm font-semibold text-text-primary">Ask what the report means</h3>

              <div className="mt-5 flex justify-end">
                <div className="max-w-[88%] rounded-2xl rounded-br-sm border border-brand-cyan/20 bg-brand-cyan/[0.07] px-4 py-3">
                  <p className="text-xs leading-5 text-text-primary">Which property needs my attention?</p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl rounded-bl-sm border border-brand-violet/25 bg-background-app-panel/80 px-4 py-3.5">
                <p className="text-xs leading-5 text-text-primary">
                  Liberty Avenue has the portfolio&apos;s only open balance: $1,800 on Unit 3B. Occupancy remains stable at 92%.
                </p>
              </div>

              <div className="mt-5 border-t border-brand-violet/15 pt-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-text-muted">Records behind this answer</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {answerSources.map((source) => (
                    <span
                      className="rounded-full border border-brand-violet/20 bg-brand-violet/[0.06] px-2.5 py-1 text-[9px] font-medium text-text-secondary"
                      key={source}
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
