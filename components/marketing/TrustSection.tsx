import { Section } from "@/components/ui/Section";
import { EngineeringPrinciples } from "@/components/trust/EngineeringPrinciples";

export function TrustSection() {
  return (
    <Section
      eyebrow="Trust"
      title="Built for financial records that need to stay explainable."
      description="EstateIQ should earn trust through architecture: scoped data, deterministic ledger math, verified records, and careful AI boundaries."
    >
      <EngineeringPrinciples />
    </Section>
  );
}
