import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const steps = [
  "Buildings",
  "Leases",
  "Financial Ledger",
  "Expenses",
  "Documents",
  "Reports",
  "AI Copilot",
];

export function HowItWorksSection() {
  return (
    <Section
      eyebrow="How EstateIQ works"
      title="A simple flow from portfolio structure to grounded insight."
      description="EstateIQ connects the records that determine what is true about the portfolio, then turns those records into reporting and AI-powered interpretation."
    >
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
        {steps.map((step, index) => (
          <li className="relative" key={step}>
            <Card className="h-full p-4" variant="glass">
              <span className="text-xs font-semibold text-brand-cyan">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-medium text-text-primary">
                {step}
              </p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
