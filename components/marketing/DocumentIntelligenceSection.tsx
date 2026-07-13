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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              Document intake engine
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              Upload a document. AI prepares it for your review.
            </h3>
            <p className="mt-4 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
              EstateIQ reads supported invoices, receipts, and statements,
              prepares the important details for review, and waits for your
              approval before creating the record. The original file stays
              attached to what you confirm. Once stored, open the document
              anytime and ask questions grounded in its contents.
            </p>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-2">
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
            {engineSteps.map((step, index) => (
              <div
                className="document-step relative z-10 grid grid-cols-[2.75rem_1fr] gap-3 rounded-2xl border border-border-soft bg-background-app/80 p-4"
                key={step.label}
              >
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
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
