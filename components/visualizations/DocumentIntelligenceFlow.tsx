const intakeStages = [
  {
    index: "01",
    label: "Upload",
    title: "Acme Plumbing Invoice.pdf",
    detail: "A supported document enters EstateIQ.",
    tone: "cyan",
  },
  {
    index: "02",
    label: "AI process",
    title: "Read and extract",
    detail: "Vendor · amount · date · property",
    tone: "violet",
  },
  {
    index: "03",
    label: "Human review",
    title: "Draft ready",
    detail: "Check, correct, and approve the details.",
    tone: "amber",
  },
  {
    index: "04",
    label: "Confirm and store",
    title: "Expense + source file",
    detail: "The record and original stay connected.",
    tone: "emerald",
  },
] as const;

const toneClasses = {
  cyan: "border-brand-cyan/30 bg-brand-cyan/[0.05] text-brand-cyan",
  violet: "border-brand-violet/30 bg-brand-violet/[0.06] text-brand-violet",
  amber: "border-brand-amber/30 bg-brand-amber/[0.05] text-brand-amber",
  emerald: "border-brand-emerald/30 bg-brand-emerald/[0.05] text-brand-emerald",
};

const storedDocuments = [
  { label: "Insurance policy", meta: "24 pages", selected: true },
  { label: "Mortgage statement", meta: "June 2026", selected: false },
  { label: "Residential lease", meta: "Unit 2A", selected: false },
  { label: "Acme invoice", meta: "$428.16", selected: false },
];

function Arrow() {
  return (
    <div aria-hidden="true" className="flex w-7 shrink-0 items-center">
      <span className="h-px flex-1 bg-gradient-to-r from-border-strong to-brand-violet/45" />
      <svg className="-ml-px text-brand-violet/60" fill="none" height="10" viewBox="0 0 7 10" width="7">
        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function DocumentIntelligenceFlow() {
  return (
    <div
      aria-label="Document story from upload through AI extraction, human review, permanent storage, and document-grounded chat"
      className="overflow-x-auto"
      role="group"
    >
      <div className="min-w-[780px] rounded-2xl border border-border-soft bg-gradient-to-b from-background-app-panel/80 to-background-app/55 p-5 shadow-card-soft sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-border-soft pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-violet">
              1 · Document intake engine
            </p>
            <p className="mt-1.5 text-sm font-semibold text-text-primary">
              AI prepares the work. You approve the record.
            </p>
          </div>
          <span className="rounded-full border border-brand-emerald/25 bg-brand-emerald/[0.06] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-brand-emerald">
            Review required
          </span>
        </div>

        <div className="mt-5 flex items-stretch">
          {intakeStages.map((stage, index) => (
            <div className="contents" key={stage.label}>
              <div className={`min-w-0 flex-1 rounded-xl border p-3.5 ${toneClasses[stage.tone]}`}>
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full border border-current/25 bg-background-app/30 font-mono text-[9px] font-semibold">
                    {stage.index}
                  </span>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.13em]">{stage.label}</p>
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-text-primary">{stage.title}</p>
                <p className="mt-1 text-[10px] leading-4 text-text-muted">{stage.detail}</p>
              </div>
              {index < intakeStages.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="flex justify-center py-3">
          <div className="flex flex-col items-center">
            <span className="h-5 w-px bg-gradient-to-b from-brand-emerald/55 to-brand-violet/45" />
            <svg className="-mt-px text-brand-violet/55" fill="none" height="7" viewBox="0 0 10 7" width="10">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-brand-violet/25 bg-brand-violet/[0.045]">
          <div className="flex items-center justify-between gap-4 border-b border-brand-violet/15 px-5 py-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-violet">
                2 · Smart documents
              </p>
              <p className="mt-1.5 text-sm font-semibold text-text-primary">
                Stored files remain useful after intake.
              </p>
            </div>
            <p className="text-[10px] text-text-muted">Open a document · Ask a question</p>
          </div>

          <div className="grid grid-cols-[0.8fr_1.2fr] divide-x divide-brand-violet/15">
            <div className="p-4">
              <p className="px-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                Document library
              </p>
              <div className="mt-3 grid gap-2">
                {storedDocuments.map((document) => (
                  <div
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                      document.selected
                        ? "border-brand-violet/35 bg-brand-violet/[0.09]"
                        : "border-border-soft bg-background-app/45"
                    }`}
                    key={document.label}
                  >
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg border font-mono text-[9px] font-semibold ${
                      document.selected
                        ? "border-brand-violet/30 bg-brand-violet/10 text-brand-violet"
                        : "border-border text-text-muted"
                    }`}>
                      PDF
                    </span>
                    <div className="min-w-0">
                      <p className={`truncate text-xs font-medium ${document.selected ? "text-text-primary" : "text-text-secondary"}`}>
                        {document.label}
                      </p>
                      <p className="mt-0.5 text-[10px] text-text-muted">{document.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-5">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-violet-glow opacity-20" />
              <div className="relative">
                <div className="flex items-center gap-3 border-b border-brand-violet/15 pb-3">
                  <span className="size-2 rounded-full bg-brand-violet shadow-[0_0_7px_rgba(124,58,237,0.55)]" />
                  <div>
                    <p className="text-xs font-semibold text-text-primary">Liberty Avenue Insurance.pdf</p>
                    <p className="mt-0.5 text-[10px] text-text-muted">Ask about this document</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-sm border border-brand-cyan/20 bg-brand-cyan/[0.07] px-4 py-2.5">
                    <p className="text-xs leading-5 text-text-primary">When does this policy renew?</p>
                  </div>
                </div>

                <div className="mt-3 flex justify-start">
                  <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-brand-violet/25 bg-background-app-panel/80 px-4 py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-violet">EstateIQ AI</p>
                    <p className="mt-2 text-xs leading-5 text-text-primary">
                      The policy renews on June 1, 2027.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-brand-emerald shadow-[0_0_7px_rgba(52,211,153,0.5)]" />
                  <p className="text-[10px] text-text-secondary">Answer grounded in this document</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
