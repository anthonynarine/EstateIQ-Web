import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    label: "Create your workspace",
    detail: "Set up your private organization in seconds.",
  },
  {
    label: "Add your first building",
    detail: "The properties in your portfolio.",
  },
  {
    label: "Add units",
    detail: "The rentable spaces inside each building.",
  },
  {
    label: "Create a lease",
    detail: "Connect a tenant to a unit.",
  },
  {
    label: "Start the ledger",
    detail: "Record a charge or payment to begin your history.",
  },
];

export function GettingStartedSection() {
  return (
    <Section
      description="No blank dashboard, no guesswork. A guided checklist walks you through setup, and if you get stuck on any step, the AI copilot is right there to help."
      eyebrow="Getting started"
      id="getting-started"
      title="Five steps to a working portfolio. AI has your back the whole way."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <Card className="p-5" key={step.label} variant="outline">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-cyan/35 bg-brand-cyan/10 text-sm font-bold text-brand-cyan">
              {index + 1}
            </span>
            <p className="mt-3 text-sm font-semibold text-text-primary">
              {step.label}
            </p>
            <p className="mt-1 text-xs leading-5 text-text-muted">
              {step.detail}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
