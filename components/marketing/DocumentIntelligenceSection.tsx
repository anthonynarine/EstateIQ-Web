import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const engineSteps = [
  {
    label: "Upload",
    detail: "Receipt, invoice, lease, or statement",
    tone: "cyan",
  },
  {
    label: "AI extract",
    detail: "Amount, vendor, date, property",
    tone: "violet",
  },
  {
    label: "Review",
    detail: "You approve the details",
    tone: "amber",
  },
  {
    label: "Record",
    detail: "Confirmed financial truth",
    tone: "emerald",
  },
];

const draftFields = [
  { label: "Vendor", value: "Acme Plumbing" },
  { label: "Amount", value: "$428.16" },
  { label: "Property", value: "Maple Ave" },
  { label: "Category", value: "Repairs" },
];

const toneClasses = {
  cyan: "border-brand-cyan/35 bg-brand-cyan/10 text-brand-cyan",
  violet: "border-brand-violet/35 bg-brand-violet/10 text-brand-violet",
  amber: "border-brand-amber/35 bg-brand-amber/10 text-brand-amber",
  emerald: "border-brand-emerald/35 bg-brand-emerald/10 text-brand-emerald",
};

export function DocumentIntelligenceSection() {
  return (
    <Section
      className="document-intelligence-section"
      id="documents"
    >
      <div className="overflow-hidden rounded-card border border-border bg-gradient-to-b from-background-app-panel to-background-app-soft p-5 shadow-card-soft sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,1fr)] lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">
              Review-first workflow
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              EstateIQ does the tedious part. You make the final call.
            </h3>
            <p className="mt-4 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
              Upload a document and EstateIQ prepares a clean draft from it:
              vendor, amount, date, category, and property context. The original
              file stays attached as evidence, and the record is created only
              after you confirm it.
            </p>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-[minmax(180px,0.58fr)_1fr] sm:items-stretch">
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
            <div className="relative grid gap-3">
              {engineSteps.map((step, index) => (
                <div className="relative" key={step.label}>
                  {index < engineSteps.length - 1 && (
                    <div className="absolute left-[1.375rem] top-12 h-full w-px bg-border-soft" />
                  )}
                  <div className="document-step relative z-10 grid grid-cols-[2.75rem_1fr] gap-3 rounded-2xl border border-border-soft bg-background-app/80 p-3">
                    <span
                      className={cn(
                        "document-step-number relative flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold",
                        toneClasses[step.tone as keyof typeof toneClasses],
                      )}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {step.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-text-muted">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl border border-border bg-background-app/75 p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-amber">
                    Draft prepared
                  </p>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight text-text-primary">
                    Review before it becomes accounting.
                  </h4>
                </div>
                <span className="w-fit shrink-0 whitespace-nowrap rounded-full border border-brand-amber/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-amber">
                  Needs approval
                </span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {draftFields.map((field) => (
                  <div
                    className="rounded-xl border border-border-soft bg-background-app/70 p-3"
                    key={field.label}
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted">
                      {field.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-text-primary">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl border border-brand-emerald/25 bg-brand-emerald/5 px-4 py-3"
              >
                <p className="text-sm font-semibold text-brand-emerald">
                  Confirmed records stay tied to the source document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
