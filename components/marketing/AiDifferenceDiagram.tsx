const traditionalSources = ["Spreadsheets", "PDF folders", "Separate apps"];

const estateIqSources = [
  { label: "Ledger", tone: "border-brand-cyan/35 text-brand-cyan" },
  { label: "Documents", tone: "border-brand-violet/35 text-brand-violet" },
  { label: "Reports", tone: "border-brand-emerald/35 text-brand-emerald" },
];

export function AiDifferenceDiagram() {
  return (
    <div className="relative overflow-hidden rounded-card border border-border bg-background-app-panel p-4 shadow-card-soft sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.05]" />

      <div className="relative grid gap-5 lg:grid-cols-2">
        <div className="order-2 rounded-2xl border border-border-soft bg-background-app/65 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                Bolt-on AI
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                Context has to be assembled for every question.
              </p>
            </div>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-text-muted/35" />
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2">
            {traditionalSources.map((source) => (
              <div
                className="rounded-xl border border-dashed border-border bg-background-app-soft/60 px-2 py-3 text-center text-[11px] leading-4 text-text-muted"
                key={source}
              >
                {source}
              </div>
            ))}
          </div>

          <div className="mx-auto h-7 w-px border-l border-dashed border-border" />
          <div className="mx-auto max-w-56 rounded-xl border border-border bg-surface-elevated px-4 py-3 text-center">
            <p className="text-sm font-semibold text-text-secondary">Generic AI</p>
            <p className="mt-1 text-[11px] text-text-muted">Partial, pasted context</p>
          </div>
          <div className="mx-auto h-7 w-px border-l border-dashed border-border" />

          <div className="rounded-xl border border-brand-rose/20 bg-brand-rose/5 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-text-secondary">Plausible answer</p>
            <p className="mt-1 text-xs text-brand-rose/80">Source and accuracy unclear</p>
          </div>
        </div>

        <div className="relative order-1 overflow-hidden rounded-2xl border border-brand-violet/30 bg-gradient-to-br from-brand-violet/10 via-background-app/80 to-brand-cyan/5 p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-radial-violet-glow opacity-35" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-violet">
                  EstateIQ AI-native
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Portfolio context is already connected.
                </p>
              </div>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-emerald shadow-[0_0_12px_rgba(52,211,153,0.55)]" />
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2">
              {estateIqSources.map((source) => (
                <div
                  className={`rounded-xl border bg-background-app/75 px-2 py-3 text-center text-[11px] font-semibold leading-4 ${source.tone}`}
                  key={source.label}
                >
                  {source.label}
                </div>
              ))}
            </div>

            <div className="relative pt-7">
              <span aria-hidden="true" className="ai-chip-thread ai-chip-thread-left"><i /></span>
              <span aria-hidden="true" className="ai-chip-thread ai-chip-thread-center"><i /></span>
              <span aria-hidden="true" className="ai-chip-thread ai-chip-thread-right"><i /></span>
              <div className="ai-difference-core relative mx-auto w-3/5 max-w-56 rounded-xl border border-brand-violet/35 bg-background-app/95 px-4 py-3 text-center shadow-[0_0_24px_rgba(124,58,237,0.12)]">
                <p className="text-sm font-semibold text-text-primary">EstateIQ AI</p>
                <p className="mt-1 text-[11px] text-text-secondary">Your full portfolio context</p>
              </div>
            </div>
            <div className="ai-difference-connection ai-difference-connection-delayed relative mx-auto h-7 w-px bg-gradient-to-b from-brand-violet to-brand-emerald" />

            <div className="rounded-xl border border-brand-emerald/30 bg-brand-emerald/5 px-4 py-3 text-center">
              <p className="text-sm font-semibold text-text-primary">Grounded answer</p>
              <p className="mt-1 text-xs text-brand-emerald">Calculated facts · Source records attached</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
