import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { LedgerModelDiagram } from "@/components/product/LedgerModelDiagram";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/ledger");

const ledgerParts = [
  {
    title: "Charge",
    description: "What is owed under a lease, such as rent or a fee.",
    label: "Obligation",
    tone: "brand" as const,
  },
  {
    title: "Payment",
    description: "Money received and recorded by the owner.",
    label: "Received",
    tone: "success" as const,
  },
  {
    title: "Allocation",
    description: "How a payment is applied to one or more charges.",
    label: "Applied",
    tone: "neutral" as const,
  },
  {
    title: "Balance",
    description: "The amount derived from charges minus allocations.",
    label: "Derived",
    tone: "warning" as const,
  },
];

const whyItMatters = [
  {
    title: "Partial payments",
    description:
      "Understand how much was received and which charges still have remaining balances.",
  },
  {
    title: "Overdue balances",
    description:
      "Trace open balances back to the charges and allocations that created them.",
  },
  {
    title: "Delinquency",
    description:
      "Support delinquency reporting from ledger records instead of manual notes.",
  },
  {
    title: "Tenant history",
    description:
      "Preserve the financial story attached to a lease over time.",
  },
  {
    title: "Auditability",
    description:
      "Keep financial records explainable when questions come up later.",
  },
  {
    title: "Financial trust",
    description:
      "Use traceable ledger math as the basis for reports and future interpretation.",
  },
];

const benefits = [
  "You can see who owes what.",
  "You can understand why a balance exists.",
  "You can avoid spreadsheet confusion.",
  "You can prepare cleaner records for taxes and reporting.",
];

export default function LedgerPage() {
  return (
    <>
      <ProductHero
        badge="Ledger-first accounting"
        description="Know what is owed, what was paid, and what still remains. EstateIQ calculates balances from charges, payments, and allocations instead of relying on loose paid or unpaid flags."
        eyebrow="Ledger"
        previewItems={[
          { label: "Charge = what is owed", href: "#ledger-model" },
          { label: "Payment = money received", href: "#ledger-model" },
          { label: "Allocation = how payment is applied", href: "#visual-model" },
          { label: "Balance = charges minus allocations", href: "#small-landlord-benefits" },
        ]}
        previewTitle="Every balance should have a source"
        title="Know exactly why a balance exists."
      />

      <ProductSection
        background="soft"
        description="Start with simple records: what was charged, what was paid, how money was applied, and what remains. The technical layer is a ledger-first model built from charges, payments, allocations, and derived balances."
        eyebrow="Ledger model"
        id="ledger-model"
        tabIndex={-1}
        title="Track the parts behind every balance."
      >
        <FeatureGrid items={ledgerParts} />
      </ProductSection>

      <ProductSection
        description="EstateIQ preserves the relationship between what was owed and how received money was applied."
        eyebrow="Visual model"
        id="visual-model"
        tabIndex={-1}
        title="Balances come from recorded activity."
      >
        <LedgerModelDiagram />
      </ProductSection>

      <ProductSection
        background="soft"
        description="Small landlords often need more than a checkbox. The ledger model helps explain the situations that make simple balances break down."
        eyebrow="Why it matters"
        title="Clear records matter most when payments get messy."
      >
        <FeatureGrid items={whyItMatters} />
      </ProductSection>

      <ProductSection
        description="The benefit is practical: fewer disconnected notes, clearer balances, and records that can support reporting."
        eyebrow="Small landlord benefits"
        id="small-landlord-benefits"
        tabIndex={-1}
        title="Plain-English clarity for everyday portfolio questions."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <Card className="p-5" key={benefit} variant="outline">
              <p className="text-sm font-medium text-text-primary">{benefit}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
                  EstateIQ Ledger
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Track what was charged, paid, and applied.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href={siteConfig.primaryCta.href} size="lg">
                  {siteConfig.primaryCta.label}
                </Button>
                <Button
                  href={siteConfig.secondaryCta.href}
                  size="lg"
                  variant="outline"
                >
                  {siteConfig.secondaryCta.label}
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
