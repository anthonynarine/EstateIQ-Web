import { Section } from "@/components/ui/Section";
import { FlowDiagram } from "@/components/visualizations/FlowDiagram";

const steps = [
  {
    title: "Portfolio",
    description: "Buildings, units, leases, and rent context.",
    tone: "brand" as const,
  },
  {
    title: "Financial records",
    description: "Charges, payments, allocations, and expenses.",
    tone: "success" as const,
  },
  {
    title: "Connected documents",
    description: "Supported evidence reviewed beside the records it explains.",
    tone: "ai" as const,
  },
  {
    title: "Reports",
    description: "Traceable views of performance and attention areas.",
    tone: "brand" as const,
  },
  {
    title: "Grounded AI",
    description: "Plain-English explanations based on EstateIQ records.",
    tone: "ai" as const,
  },
];

export function HowItWorksSection() {
  return (
    <Section
      eyebrow="How EstateIQ works"
      title="How does it all fit together?"
      description="EstateIQ starts with the portfolio, connects the records that explain the money, then turns those records into reports and AI explanations you can trust."
    >
      <FlowDiagram
        aria-label="EstateIQ homepage flow from portfolio records to grounded AI"
        description="Each layer gives the next one better context."
        steps={steps}
        title="Portfolio records become reports, explanations, and better decisions."
        tone="brand"
      />
    </Section>
  );
}
