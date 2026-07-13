const reviewStages = [
  {
    index: "01",
    label: "Gap captured",
    detail: "The missing capability becomes safe product feedback.",
    tone: "amber",
  },
  {
    index: "02",
    label: "Team review",
    detail: "Repeated needs help the team decide what belongs in EstateIQ.",
    tone: "cyan",
  },
  {
    index: "03",
    label: "Tested capability",
    detail: "New coverage is available only after it is built and verified.",
    tone: "emerald",
  },
] as const;

const toneClasses = {
  amber: "border-brand-amber/30 bg-brand-amber/[0.06] text-brand-amber",
  cyan: "border-brand-cyan/30 bg-brand-cyan/[0.06] text-brand-cyan",
  emerald: "border-brand-emerald/30 bg-brand-emerald/[0.06] text-brand-emerald",
};

function Arrow() {
  return (
    <div aria-hidden="true" className="flex w-7 shrink-0 items-center">
      <span className="h-px flex-1 bg-gradient-to-r from-border-strong to-brand-cyan/40" />
      <svg className="-ml-px text-brand-cyan/55" fill="none" height="10" viewBox="0 0 7 10" width="7">
        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function GapToolStory() {
  return (
    <div
      aria-label="EstateIQ identifies an unsupported mortgage question, refuses to guess, and captures the gap for reviewed product improvement"
      className="overflow-x-auto"
      role="group"
    >
      <div className="min-w-[720px] rounded-2xl border border-border-soft bg-gradient-to-b from-background-app-panel/80 to-background-app/55 p-5 shadow-card-soft sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-brand-violet/25 bg-brand-violet/[0.045] p-5">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-violet-glow opacity-20" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-brand-violet shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-violet">EstateIQ AI</p>
              </div>

              <div className="mt-5 flex justify-end">
                <div className="max-w-[90%] rounded-2xl rounded-br-sm border border-brand-cyan/20 bg-brand-cyan/[0.07] px-4 py-3">
                  <p className="text-xs leading-5 text-text-primary">
                    Can you forecast my mortgage payoff over the next 10 years?
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl rounded-bl-sm border border-brand-amber/25 bg-background-app-panel/80 px-4 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-brand-amber shadow-[0_0_7px_rgba(251,191,36,0.5)]" />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-amber">Not supported yet</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-text-primary">
                  I can&apos;t support that calculation yet, so I won&apos;t guess.
                </p>
              </div>

              <p className="mt-4 text-[10px] leading-4 text-text-muted">
                The question remains unanswered until reliable coverage exists.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border-soft bg-background-app/55 p-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-amber">Product learning loop</p>
              <p className="mt-1.5 text-sm font-semibold text-text-primary">The gap becomes useful—without becoming an answer.</p>
            </div>

            <div className="mt-5 flex items-stretch">
              {reviewStages.map((stage, index) => (
                <div className="contents" key={stage.label}>
                  <div className={`min-w-0 flex-1 rounded-xl border p-3.5 ${toneClasses[stage.tone]}`}>
                    <span className="flex size-6 items-center justify-center rounded-full border border-current/25 bg-background-app/25 font-mono text-[9px] font-semibold">
                      {stage.index}
                    </span>
                    <p className="mt-3 text-xs font-semibold leading-5 text-text-primary">{stage.label}</p>
                    <p className="mt-1 text-[10px] leading-4 text-text-muted">{stage.detail}</p>
                  </div>
                  {index < reviewStages.length - 1 && <Arrow />}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-border-soft pt-4">
              <span className="size-2 rounded-full bg-brand-emerald shadow-[0_0_7px_rgba(52,211,153,0.5)]" />
              <p className="text-[10px] leading-4 text-text-secondary">
                EstateIQ expands through reviewed product work—not improvised AI answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
