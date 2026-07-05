import type { Metadata } from "next";

import { PrincipleGrid } from "@/components/about/PrincipleGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/about");

const productPrinciples = [
  {
    title: "Financial clarity over feature overload",
    description:
      "EstateIQ is built to help owners understand what the portfolio earns, spends, and owes.",
    label: "Clarity",
    tone: "brand" as const,
  },
  {
    title: "Ledger-first records",
    description:
      "Charges, payments, and allocations make balances more explainable than loose status fields.",
    label: "Ledger",
    tone: "success" as const,
  },
  {
    title: "Documents as evidence",
    description:
      "Receipts, leases, invoices, and statements support financial records instead of silently replacing them.",
    label: "Evidence",
    tone: "warning" as const,
  },
  {
    title: "Deterministic reporting",
    description:
      "Reports should trace back to the records behind the numbers.",
    label: "Reports",
    tone: "neutral" as const,
  },
  {
    title: "Grounded AI",
    description:
      "AI explains verified information. It does not become the ledger or invent financial truth.",
    label: "AI",
    tone: "ai" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <ProductHero
        badge="Built for small landlords"
        description="EstateIQ began from a practical need: help small real estate owners understand what their portfolio earns, spends, and owes without forcing them into enterprise property software."
        eyebrow="About EstateIQ"
        previewItems={[
          "Financial clarity first",
          "Built around trusted records",
          "Designed for 1-50 units",
          "AI grounded in verified context",
        ]}
        previewTitle="A focused financial operating system"
        title="EstateIQ is built for the portfolios most software overlooks."
      />

      <ProductSection
        background="soft"
        description="Independent landlords run real financial businesses, but their records often live across spreadsheets, inboxes, bank statements, PDFs, and memory."
        eyebrow="Why EstateIQ exists"
        title="Small owners need a clearer financial system of record."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            EstateIQ exists to reduce ambiguity. The product organizes property,
            lease, ledger, expense, document, and reporting records so owners can
            make decisions from a dependable operating picture.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        description="EstateIQ is intentionally designed for independent owners and family-run portfolios, not large property management companies."
        eyebrow="Built for small landlords"
        title="Professional financial visibility without enterprise complexity."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Independent landlords",
            "Family portfolios",
            "1-50 units",
            "Operators who need clarity",
          ].map((item) => (
            <Card className="p-5" key={item} variant="outline">
              <p className="text-sm font-medium text-text-primary">{item}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="The product is calm, finance-first, and built around the records that explain portfolio performance."
        eyebrow="Product principles"
        title="EstateIQ organizes financial truth before interpretation."
      >
        <PrincipleGrid principles={productPrinciples} />
      </ProductSection>

      <ProductSection
        description="The engineering approach favors clear domain boundaries, deterministic records, organization-scoped data, and AI that stays grounded in source-backed context."
        eyebrow="Engineering philosophy"
        title="Trust comes from systems that remain explainable."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            EstateIQ is not trying to make landlords busier. It is designed to
            make the financial life of a small portfolio easier to inspect,
            explain, and improve over time.
          </p>
        </Card>
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
                  EstateIQ
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Built for financial clarity, not software sprawl.
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
