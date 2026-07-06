import { Section } from "@/components/ui/Section";

const copilotPoints = [
  {
    index: "01",
    heading: "It reads your records, not the internet.",
    body: "Every answer is grounded in the ledger, expenses, documents, and reports already inside your organization.",
  },
  {
    index: "02",
    heading: "Deterministic tools compute the facts first.",
    body: "Numbers come from the same selectors that power your reports — never invented by a language model.",
  },
  {
    index: "03",
    heading: "The AI presents. It doesn't decide.",
    body: "Once the facts are pulled, the AI's only job is to explain them clearly in plain language.",
  },
  {
    index: "04",
    heading: "It never touches your ledger.",
    body: "Copilot is read-only. It cannot create or change a charge, payment, or expense.",
  },
];

export function AiCopilotSection() {
  return (
    <Section
      className="relative overflow-hidden"
      description="EstateIQ Copilot answers from the records, reports, and supported documents you manage inside the product. When it can't answer safely, it says so."
      eyebrow="AI Copilot"
      id="ai-copilot"
      title="AI that only answers from your actual records."
    >
      <div className="absolute inset-0 -z-10 bg-radial-violet-glow opacity-50" />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

        {/* Left — chat mock */}
        <div className="flex flex-col gap-3 rounded-card border border-border bg-background-app-soft p-5 shadow-card-soft">

          {/* Exchange 1 — answerable */}
          <div className="ml-auto max-w-[88%] rounded-2xl bg-surface-elevated px-4 py-3 text-sm text-text-primary">
            Which building has the most vacancies right now?
          </div>
          <div className="max-w-[88%] rounded-2xl border border-brand-violet/20 bg-brand-violet/8 px-4 py-3">
            <p className="text-sm text-text-secondary">
              Maple Court has 2 of 6 units vacant this month — the most of any
              building in your portfolio. Everywhere else is fully occupied.
            </p>
            <span className="mt-2 block font-mono text-[10px] text-brand-violet">
              source: building health selector · confidence: high
            </span>
          </div>

          {/* Exchange 2 — fail closed */}
          <div className="ml-auto max-w-[88%] rounded-2xl bg-surface-elevated px-4 py-3 text-sm text-text-primary">
            Did unit 4 pay their April rent?
          </div>
          <div className="max-w-[88%] rounded-2xl border border-brand-violet/20 bg-brand-violet/8 px-4 py-3">
            <p className="text-sm text-text-secondary">
              I don&apos;t have enough posted charge and payment history for
              that unit to answer this reliably yet. I&apos;d rather tell you
              that than guess.
            </p>
            <span className="mt-2 block font-mono text-[10px] text-brand-violet">
              source: insufficient data · confidence: low
            </span>
          </div>

          {/* Fail-closed note */}
          <div className="mt-1 rounded-xl border border-dashed border-border px-4 py-3">
            <p className="font-mono text-xs text-text-muted">
              When Copilot can&apos;t answer safely from your records, it says
              so — it doesn&apos;t guess.
            </p>
          </div>
        </div>

        {/* Right — copilot points */}
        <ul className="flex flex-col gap-5">
          {copilotPoints.map((point) => (
            <li className="flex gap-4" key={point.index}>
              <span className="w-6 shrink-0 font-mono text-sm text-brand-violet">
                {point.index}
              </span>
              <p className="text-sm leading-6 text-text-secondary">
                <span className="font-medium text-text-primary">
                  {point.heading}
                </span>{" "}
                {point.body}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
}
