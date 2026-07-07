import { cn } from "@/lib/cn";
import { VisualizationShell } from "@/components/visualizations/VisualizationShell";

type Tone = "brand" | "success" | "warning";

// ── Data ──────────────────────────────────────────────────────────────────────

const structureTier = [
  {
    label: "Buildings",
    description: "Portfolio structure, addresses, and ownership context.",
    tone: "brand" as Tone,
  },
  {
    label: "Units",
    description: "Individual rentable spaces connected to each property.",
    tone: "brand" as Tone,
  },
  {
    label: "Leases",
    description: "Tenant agreements that define rent schedules and occupancy.",
    tone: "brand" as Tone,
    detail: "occupancy · rent terms",
  },
];

const ledgerNode = {
  label: "Ledger",
  description:
    "Every charge and payment recorded. The balance is always derived — never stored as a flag.",
  tone: "success" as Tone,
  detail: "charges · payments · allocations",
};

const financialSiblings = [
  {
    label: "Revenue",
    description:
      "Expected rent, collected amounts, outstanding balances, and collection rate — derived from ledger allocations.",
    tone: "success" as Tone,
    detail: "expected · collected · rate",
  },
  {
    label: "Expenses",
    description: "Operating costs with vendor, category, and property context.",
    tone: "warning" as Tone,
    detail: "operating costs · vendor",
  },
];

const reportsNode = {
  label: "Reports",
  description:
    "NOI, cash flow, occupancy, and delinquency — derived from the entire financial stack.",
  tone: "brand" as Tone,
  detail: "NOI · cash flow · occupancy",
};

// ── Style maps ────────────────────────────────────────────────────────────────

const dotClasses: Record<Tone | "ai", string> = {
  brand: "bg-brand-cyan shadow-[0_0_6px_rgba(34,211,238,0.65)]",
  success: "bg-brand-emerald shadow-[0_0_6px_rgba(52,211,153,0.65)]",
  ai: "bg-brand-violet shadow-[0_0_6px_rgba(167,139,250,0.65)]",
  warning: "bg-brand-amber shadow-[0_0_6px_rgba(251,191,36,0.65)]",
};

const labelClasses: Record<Tone, string> = {
  brand: "text-brand-cyan",
  success: "text-brand-emerald",
  warning: "text-brand-amber",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function TierRow({
  description,
  detail,
  label,
  tone,
}: {
  description: string;
  detail?: string;
  label: string;
  tone: Tone;
}) {
  return (
    <div className="flex items-start gap-3 px-4 py-3.5">
      <div
        className={cn(
          "mt-[5px] size-2.5 shrink-0 rounded-full",
          dotClasses[tone],
        )}
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <span className={cn("text-sm font-semibold", labelClasses[tone])}>
            {label}
          </span>
          {detail && (
            <span className="font-mono text-[10px] tracking-wide text-text-faint">
              {detail}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs leading-5 text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1">
      <svg
        className="text-border-strong"
        fill="none"
        height="18"
        viewBox="0 0 12 18"
        width="12"
      >
        <line
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          x1="6"
          x2="6"
          y1="0"
          y2="12"
        />
        <polyline
          fill="none"
          points="2,9 6,14 10,9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ConnectedSystemMap() {
  return (
    <VisualizationShell
      aria-label="Connected EstateIQ portfolio system map"
      description="From portfolio structure to financial records, revenue tracking, and AI — every layer connects to the one below it."
      title="One place for the rental business to make sense."
      tone="brand"
    >
      <div className="grid gap-y-8 lg:grid-cols-[3fr_1px_2fr] lg:gap-y-0">

        {/* ── Three-tier tower ── */}
        <div className="flex flex-col lg:pr-8">

          {/* Tier 1 — Structure */}
          <div className="overflow-hidden rounded-xl border border-border-soft">
            <div className="border-b border-border-soft bg-background-app-panel/60 px-4 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-faint">
                Structure
              </p>
            </div>
            {structureTier.map((node, i) => (
              <div
                className={cn(i > 0 && "border-t border-border-soft")}
                key={node.label}
              >
                <TierRow {...node} />
              </div>
            ))}
          </div>

          <FlowArrow />

          {/* Tier 2 — Financial Core */}
          <div className="overflow-hidden rounded-xl border border-brand-emerald/30 bg-brand-emerald/[0.04] shadow-[0_0_28px_rgba(52,211,153,0.1)]">
            <div className="border-b border-brand-emerald/20 bg-brand-emerald/[0.08] px-4 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-emerald/70">
                Financial core
              </p>
            </div>
            {/* Ledger — full width */}
            <div className="border-b border-brand-emerald/15">
              <TierRow {...ledgerNode} />
            </div>
            {/* Revenue + Expenses — side by side */}
            <div className="grid grid-cols-2 divide-x divide-brand-emerald/15">
              {financialSiblings.map((node) => (
                <TierRow key={node.label} {...node} />
              ))}
            </div>
          </div>

          <FlowArrow />

          {/* Tier 3 — Output */}
          <div className="overflow-hidden rounded-xl border border-border-soft">
            <div className="border-b border-border-soft bg-background-app-panel/60 px-4 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-faint">
                Output
              </p>
            </div>
            <TierRow {...reportsNode} />
          </div>

        </div>

        {/* ── Divider ── */}
        <div
          aria-hidden="true"
          className="h-px bg-border-soft lg:h-auto lg:w-px"
        />

        {/* ── Intelligence layer ── */}
        <div className="flex flex-col gap-4 lg:pl-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-faint">
            Intelligence layer
          </p>

          {/* AI Copilot */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-brand-violet/25 bg-brand-violet/[0.06] p-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-radial-violet-glow opacity-25"
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "size-[9px] shrink-0 rounded-full",
                    dotClasses.ai,
                  )}
                />
                <p className="text-sm font-semibold text-brand-violet">
                  AI Copilot
                </p>
              </div>
              <p className="mt-0.5 font-mono text-[10px] text-text-faint">
                reads from the entire stack
              </p>
              <p className="mt-3 text-xs leading-[1.65] text-text-secondary">
                Ask plain-English questions about your portfolio. Answers come
                from your ledger, revenue, expenses, and documents — not
                assumptions.
              </p>
              <div className="mt-3.5 flex flex-col gap-1.5">
                {[
                  "What's my NOI this quarter?",
                  "Which tenants have outstanding balances?",
                ].map((q) => (
                  <div
                    className="rounded-lg border border-brand-violet/15 bg-brand-violet/[0.06] px-3 py-2"
                    key={q}
                  >
                    <p className="text-[11px] leading-snug text-text-secondary">
                      &ldquo;{q}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Document Intelligence */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-amber/25 bg-brand-amber/[0.05] p-5">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "size-[9px] shrink-0 rounded-full",
                  dotClasses.warning,
                )}
              />
              <p className="text-sm font-semibold text-brand-amber">
                Document Intelligence
              </p>
            </div>
            <p className="mt-0.5 font-mono text-[10px] text-text-faint">
              connects to leases · expenses · buildings
            </p>
            <p className="mt-3 text-xs leading-[1.65] text-text-secondary">
              Receipts, invoices, leases, and statements become connected
              evidence after your review — context that explains records without
              replacing them.
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {["Leases", "Receipts", "Invoices", "Statements"].map((doc) => (
                <span
                  className="rounded-md border border-brand-amber/20 bg-brand-amber/[0.07] px-2.5 py-1 font-mono text-[10px] font-medium text-brand-amber/80"
                  key={doc}
                >
                  {doc}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </VisualizationShell>
  );
}
