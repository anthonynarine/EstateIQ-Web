import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const trustItems = [
  {
    title: "Tenant isolation",
    body: "Portfolio data is organized around an organization boundary.",
  },
  {
    title: "Ledger-first architecture",
    body: "Financial answers come from charges, payments, allocations, and deterministic reporting.",
  },
  {
    title: "Verified records",
    body: "Documents and reports support financial understanding without relying on unsupported claims.",
  },
  {
    title: "Modern security posture",
    body: "The product is designed around private files, scoped access, and professional engineering discipline.",
  },
];

export function TrustSection() {
  return (
    <Section
      eyebrow="Trust"
      title="Built for financial records that need to stay explainable."
      description="EstateIQ should earn trust through architecture: scoped data, deterministic ledger math, verified records, and careful AI boundaries."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {trustItems.map((item) => (
          <Card className="p-5" key={item.title} variant="outline">
            <h3 className="text-base font-semibold text-text-primary">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {item.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
