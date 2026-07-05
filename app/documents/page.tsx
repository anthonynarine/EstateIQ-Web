import type { Metadata } from "next";

import { DocumentTypeGrid } from "@/components/documents/DocumentTypeGrid";
import { DocumentWorkflow } from "@/components/documents/DocumentWorkflow";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/documents");

const documentBenefits = [
  {
    title: "Cleaner records",
    description:
      "Keep supporting evidence connected to the property, lease, expense, or vendor it explains.",
    label: "Records",
    tone: "brand" as const,
  },
  {
    title: "Less receipt hunting",
    description:
      "Keep receipts and supported documents connected to the records they can help explain later.",
    label: "Evidence",
    tone: "warning" as const,
  },
  {
    title: "Better tax preparation",
    description:
      "Organized documents help support cleaner accountant review without claiming tax compliance.",
    label: "Review",
    tone: "neutral" as const,
  },
  {
    title: "Better AI context",
    description:
      "Documents give AI more source-backed context when paired with verified records.",
    label: "AI context",
    tone: "ai" as const,
  },
  {
    title: "Better reporting support",
    description:
      "Confirmed financial records can connect to the documents that support them.",
    label: "Reports",
    tone: "success" as const,
  },
];

export default function DocumentsPage() {
  return (
    <>
      <ProductHero
        badge="Document intelligence"
        description="Documents are not attachments. EstateIQ treats supported documents as connected evidence that can be reviewed, connected, and explained by AI alongside confirmed records."
        eyebrow="Documents"
        previewItems={[
          { label: "Upload supported documents", href: "#document-support" },
          { label: "Organize by context", href: "#document-support" },
          { label: "Review before confirmation", href: "#document-workflow" },
          { label: "Connect to financial records", href: "#document-benefits" },
        ]}
        previewTitle="Evidence connected to records"
        title="Turn rental paperwork into connected evidence."
      />

      <ProductSection
        background="soft"
        description="Supported documents can provide context for the financial, legal, tax, and operational life of a rental portfolio."
        eyebrow="What documents support"
        id="document-support"
        tabIndex={-1}
        title="Keep important documents connected to the records they explain."
      >
        <DocumentTypeGrid />
      </ProductSection>

      <ProductSection
        description="EstateIQ does not silently turn every document into financial truth. Review and confirmation remain part of the workflow, while confirmed records and ledger data remain the source of financial truth."
        eyebrow="From file to record"
        id="document-workflow"
        tabIndex={-1}
        title="A careful path from supported document to connected evidence."
      >
        <DocumentWorkflow />
      </ProductSection>

      <ProductSection
        background="soft"
        description="Document intelligence is valuable because supported documents become connected evidence for records, reporting, and source-backed AI interpretation."
        eyebrow="Why it matters"
        id="document-benefits"
        tabIndex={-1}
        title="Connected evidence makes financial records easier to understand and review."
      >
        <FeatureGrid items={documentBenefits} />
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-amber">
                  EstateIQ Documents
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Keep financial evidence connected to the records it supports.
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
