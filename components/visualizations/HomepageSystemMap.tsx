import { cn } from "@/lib/cn";

const flow = [
  {
    title: "Portfolio",
    description: "Buildings, units, leases, and ownership context.",
    tone: "brand" as const,
  },
  {
    title: "Financial records",
    description: "Charges, payments, allocations, and expenses.",
    tone: "success" as const,
  },
  {
    title: "Connected documents",
    description: "Supported evidence like leases, receipts, invoices, and statements.",
    tone: "ai" as const,
  },
  {
    title: "Reports",
    description: "Traceable views of cash flow, balances, and attention areas.",
    tone: "brand" as const,
  },
  {
    title: "Grounded AI",
    description: "Plain-English explanations based on EstateIQ records.",
    tone: "ai" as const,
  },
  {
    title: "Better decisions",
    description: "Less searching, more confidence about what changed.",
    tone: "success" as const,
  },
];

const toneClasses = {
  brand: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  success: "border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald",
  ai: "border-brand-violet/30 bg-brand-violet/10 text-brand-violet",
};

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
            <li className="relative grid gap-3" key={item.title}>
              <div className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-border-soft bg-background-app-panel/80 p-3 transition duration-200 hover:border-border-strong hover:bg-surface-elevated">
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-button border text-xs font-semibold",
                    toneClasses[item.tone],
                  )}
                >
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
              </div>
              {index < flow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-4 h-4 w-px bg-gradient-to-b from-brand-cyan/60 to-brand-violet/60 motion-safe:animate-pulse motion-reduce:animate-none"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
