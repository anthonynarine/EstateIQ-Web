import { Section } from "@/components/ui/Section";
import { EngineeringPrinciples } from "@/components/trust/EngineeringPrinciples";

export function TrustSection() {
  return (
    <Section
      eyebrow="Trust"
      title="Trust the numbers because you can trace the records."
      description="EstateIQ earns trust through practical boundaries first: private portfolio workspaces, traceable ledger math, verified records, and AI that explains without replacing financial truth."
    >
      <EngineeringPrinciples />
    </Section>
  );
}
