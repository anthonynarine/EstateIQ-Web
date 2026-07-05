import { Card } from "@/components/ui/Card";

const lifecycleSteps = [
  {
    title: "Question received",
    description:
      "A user asks for financial or portfolio insight through the AI experience.",
  },
  {
    title: "No supported tool match",
    description:
      "The router cannot match the question to a registered analyst tool with the right selectors or report coverage.",
  },
  {
    title: "Gap event captured",
    description:
      "EstateIQ records safe metadata such as intent, domain, missing capability, and org-safe context.",
  },
  {
    title: "Taxonomy first",
    description:
      "The gap is categorized into a deterministic taxonomy before any later clustering is considered.",
  },
  {
    title: "Product review",
    description:
      "The team decides whether the gap calls for a new tool, selector, report, dashboard card, or documentation page.",
  },
  {
    title: "Reviewed coverage",
    description:
      "New coverage must be implemented, tested, and reviewed before becoming part of the AI system.",
  },
];

export function GapLifecycleDiagram() {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lifecycleSteps.map((step, index) => (
          <li
            className="rounded-2xl border border-border-soft bg-surface p-4"
            key={step.title}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-base font-semibold text-text-primary">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Card>
  );
}
