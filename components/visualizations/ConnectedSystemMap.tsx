type Tone = "cyan" | "violet" | "emerald" | "muted";

const toneClasses: Record<Tone, { border: string; index: string; label: string; shadow: string }> = {
  cyan: {
    border: "border-brand-cyan/30",
    index: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
    label: "text-brand-cyan",
    shadow: "shadow-[0_0_22px_rgba(34,211,238,0.08)]",
  },
  violet: {
    border: "border-brand-violet/30",
    index: "border-brand-violet/30 bg-brand-violet/10 text-brand-violet",
    label: "text-brand-violet",
    shadow: "shadow-[0_0_22px_rgba(124,58,237,0.09)]",
  },
  emerald: {
    border: "border-brand-emerald/30",
    index: "border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald",
    label: "text-brand-emerald",
    shadow: "shadow-[0_0_22px_rgba(52,211,153,0.1)]",
  },
  muted: {
    border: "border-border",
    index: "border-border bg-background-app-soft text-text-muted",
    label: "text-text-muted",
    shadow: "",
  },
};

function RecordCard({
  detail,
  index,
  label,
  tone,
  value,
}: {
  detail: string;
  index: string;
  label: string;
  tone: Tone;
  value: string;
}) {
  const classes = toneClasses[tone];

  return (
    <div className={`rounded-xl border bg-background-app-panel/85 px-4 py-3.5 text-center ${classes.border} ${classes.shadow}`}>
      <div className="flex items-center justify-center gap-2">
        <span className={`flex size-6 items-center justify-center rounded-full border font-mono text-[9px] font-semibold ${classes.index}`}>
          {index}
        </span>
        <p className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${classes.label}`}>
          {label}
        </p>
      </div>
      <p className="mt-3 text-sm font-semibold text-text-primary">{value}</p>
      <p className="mt-1 text-[11px] leading-4 text-text-muted">{detail}</p>
    </div>
  );
}

function VerticalConnector({ tone = "violet" }: { tone?: "cyan" | "violet" | "emerald" }) {
  const color = {
    cyan: "bg-brand-cyan/35",
    violet: "bg-brand-violet/35",
    emerald: "bg-brand-emerald/35",
  }[tone];

  return <div aria-hidden="true" className={`mx-auto h-5 w-px ${color}`} />;
}

export function ConnectedSystemMap() {
  return (
    <div
      aria-label="Portfolio hierarchy showing a building branching into occupied and vacant units, with the occupied unit connected to its tenant, lease, and ledger"
      className="overflow-x-auto"
      role="group"
    >
      <div className="min-w-[760px] rounded-2xl border border-border-soft bg-gradient-to-b from-background-app-panel/80 to-background-app/55 px-6 py-5 shadow-card-soft">
        <div className="flex items-center justify-between gap-4 border-b border-border-soft pb-4">
          <div className="flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-brand-cyan shadow-[0_0_9px_rgba(34,211,238,0.6)]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text-muted">Portfolio</p>
              <p className="mt-1 text-sm font-medium text-text-primary">Ocean View Rental</p>
            </div>
          </div>
          <p className="font-mono text-[10px] text-text-muted">2 buildings · 5 units</p>
        </div>

        <div className="mx-auto mt-5 w-64">
          <RecordCard
            detail="4 units · Brooklyn, NY"
            index="01"
            label="Building"
            tone="cyan"
            value="Liberty Avenue"
          />
        </div>

        <svg aria-hidden="true" className="h-12 w-full text-brand-cyan/35" fill="none" preserveAspectRatio="none" viewBox="0 0 600 48">
          <path d="M300 0V16M150 48V28H450V48M300 16V28" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="grid grid-cols-2 gap-16">
          <div className="mx-auto w-full max-w-72">
            <RecordCard
              detail="Occupied"
              index="02"
              label="Unit"
              tone="cyan"
              value="Unit 2A"
            />

            <VerticalConnector />
            <RecordCard
              detail="Contact and occupancy history"
              index="03"
              label="Tenant"
              tone="violet"
              value="Jordan Lee"
            />

            <VerticalConnector />
            <RecordCard
              detail="Jun 2026–May 2027 · $3,200/mo"
              index="04"
              label="Active lease"
              tone="violet"
              value="Residential lease"
            />

            <VerticalConnector tone="emerald" />
            <RecordCard
              detail="3 entries · Charges and payments"
              index="05"
              label="Lease ledger"
              tone="emerald"
              value="$1,800 open balance"
            />
          </div>

          <div className="mx-auto w-full max-w-72">
            <RecordCard
              detail="Ready for a new tenant and lease"
              index="02"
              label="Unit"
              tone="muted"
              value="Unit 2B · Vacant"
            />
            <div className="mx-auto mt-5 max-w-56 rounded-xl border border-dashed border-border px-4 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">No active lease</p>
              <p className="mt-1.5 text-[11px] leading-4 text-text-muted">
                The unit remains organized and ready for its next tenancy.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
