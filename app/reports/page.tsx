import type { Metadata } from "next";

import { ReportAreaGrid } from "@/components/reports/ReportAreaGrid";
import { ReportTrustDiagram } from "@/components/reports/ReportTrustDiagram";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/reports");

const deterministicReasons = [
  {
    title: "Numbers trace back to records",
    description:
      "Reports should point back to the leases, ledger entries, expenses, and buildings behind them.",
    label: "Traceable",
    tone: "brand" as const,
  },
  {
    title: "Balances trace back to ledger entries",
    description:
      "Open balances come from charges minus allocations, not manually edited totals.",
    label: "Ledger",
    tone: "success" as const,
  },
  {
    title: "Expenses trace back to categorized records",
    description:
      "Expense reporting is strongest when spend is categorized and connected to property context.",
    label: "Expenses",
    tone: "neutral" as const,
  },
  {
    title: "AI explains reports",
    description:
      "AI can interpret reporting context, but it does not create the financial truth.",
    label: "Grounded AI",
    tone: "ai" as const,
  },
];

export default function ReportsPage() {
  return (
    <>
      <ProductHero
        badge="Deterministic reporting"
        description="EstateIQ reports are built from the source records behind the numbers: leases, ledger entries, expenses, documents, buildings, and units."
        eyebrow="Reports"
        previewItems={[
          "Portfolio overview",
          "Expense summaries",
          "Ledger balances",
          "Building performance",
        ]}
        previewTitle="Reports with record context"
        title="Reports built from the records behind the numbers."
      />

      <ProductSection
        background="soft"
        description="Current reporting surfaces are focused on portfolio visibility, cash flow, expense context, balances, delinquency, and building performance."
        eyebrow="Reporting areas"
        title="See what changed, what needs attention, and where the records point."
      >
        <ReportAreaGrid />
      </ProductSection>

      <ProductSection
        description="Financial reporting should be explainable. EstateIQ's reporting posture starts from deterministic source records."
        eyebrow="Why deterministic reports matter"
        title="The number is more useful when you know where it came from."
      >
        <ReportTrustDiagram />
      </ProductSection>

      <ProductSection
        background="soft"
        description="AI can help interpret reporting context, but it should not invent the report or replace the underlying records."
        eyebrow="AI relationship"
        title="AI explains reports. It does not create financial truth."
      >
        <FeatureGrid items={deterministicReasons} />
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
                  EstateIQ Reports
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Understand the portfolio through records you can trace.
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
