import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { SecurityHero } from "@/components/security/SecurityHero";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductSection } from "@/components/product/ProductSection";
import { Card } from "@/components/ui/Card";
import { DataOwnership } from "@/components/trust/DataOwnership";
import { PrivacyHighlights } from "@/components/trust/PrivacyHighlights";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/security");

const engineeringPrinciples = [
  {
    title: "Private portfolio workspaces",
    description:
      "EstateIQ is designed around private organization workspaces for each portfolio.",
    label: "Boundary",
    tone: "brand" as const,
  },
  {
    title: "Organization isolation",
    description:
      "Sensitive reads and writes are scoped through organization-aware application layers.",
    label: "Isolation",
    tone: "success" as const,
  },
  {
    title: "Permission-aware access",
    description:
      "Authentication and authorization are treated as separate responsibilities.",
    label: "Access",
    tone: "neutral" as const,
  },
  {
    title: "Traceable records",
    description:
      "Financial facts come from ledger, expense, document, and reporting records.",
    label: "Records",
    tone: "brand" as const,
  },
  {
    title: "Document organization",
    description:
      "Documents and receipts are organized as supporting evidence around financial context.",
    label: "Documents",
    tone: "warning" as const,
  },
  {
    title: "Auditability",
    description:
      "Ledger-first architecture helps preserve explainable financial history.",
    label: "Traceable",
    tone: "success" as const,
  },
];

const dataProtection = [
  {
    title: "Private file handling",
    description:
      "Documents are designed to be accessed through permission-checked flows rather than public file links.",
  },
  {
    title: "Scoped data access",
    description:
      "Portfolio data is modeled around organization ownership and active membership checks.",
  },
  {
    title: "Stripe-hosted subscription flows",
    description:
      "Subscription payments are handled through Stripe-hosted checkout and customer portal flows.",
  },
  {
    title: "AI boundaries",
    description:
      "Copilot explains verified records and does not become the financial ledger.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />

      <ProductSection
        background="soft"
        description="EstateIQ handles financial records, tenant context, lease data, payment records, expenses, receipts, reports, and documents. The owner benefit is control; the engineering layer is organization isolation, scoped access, and traceable records."
        eyebrow="Trust principles"
        title="Keep each portfolio's records in the right place."
      >
        <FeatureGrid items={engineeringPrinciples} />
      </ProductSection>

      <ProductSection
        description="EstateIQ explains concrete controls and intentionally avoids unsupported compliance claims."
        eyebrow="Data protection"
        title="Clear controls, not vague security promises."
      >
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {dataProtection.map((item) => (
              <Card className="p-5" key={item.title} variant="outline">
                <h3 className="text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
          <PrivacyHighlights />
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Independent landlords rely on EstateIQ to explain what the portfolio earns, spends, and owes. Trust depends on records that can be traced, reviewed, and understood."
        eyebrow="Why trust matters"
        title="Financial clarity is only useful when the records are reliable."
      >
        <DataOwnership />
      </ProductSection>

      <FinalCTASection
        eyebrow="EstateIQ Trust"
        title="Build your portfolio records on a clearer foundation."
      />
    </>
  );
}
