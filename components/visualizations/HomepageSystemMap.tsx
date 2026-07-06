"use client";

const flow = [
  {
    title: "Portfolio",
    description: "Buildings, units, leases, and ownership context.",
    sectionId: "how-it-works",
  },
  {
    title: "Financial records",
    description: "Charges, payments, allocations, and expenses.",
    sectionId: "ledger",
  },
  {
    title: "Connected documents",
    description: "Supported evidence like leases, receipts, invoices, and statements.",
    sectionId: "documents",
  },
  {
    title: "Reports",
    description: "Traceable views of cash flow, balances, and attention areas.",
    sectionId: "pillars",
  },
  {
    title: "Grounded AI",
    description: "Plain-English explanations based on EstateIQ records.",
    sectionId: "ai-copilot",
  },
  {
    title: "Better decisions",
    description: "Less searching, more confidence about what changed.",
    sectionId: "get-started",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HomepageSystemMap() {
  return (
    <div
      aria-label="EstateIQ homepage system map"
      className="relative rounded-card border border-border bg-surface p-5 shadow-card-soft backdrop-blur-xl sm:p-6"
      role="group"
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.07]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              EstateIQ system
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-text-primary">
              From records to decisions
            </h2>
          </div>
          <span className="rounded-button border border-brand-cyan/25 bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan">
            Connected
          </span>
        </div>

        <ol className="mt-6 grid gap-3">
          {flow.map((item, index) => (
            <li key={item.title}>
              <button
                className="grid w-full grid-cols-[auto_1fr] gap-3 rounded-2xl border border-border-soft bg-background-app-panel/80 p-3 text-left transition duration-200 hover:border-brand-cyan/20 hover:bg-surface-elevated"
                onClick={() => scrollTo(item.sectionId)}
                type="button"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-brand-cyan/30 bg-white/[0.03] font-mono text-xs text-brand-cyan">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
