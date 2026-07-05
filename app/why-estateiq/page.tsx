import type { Metadata } from "next";

import { BeliefSystemGrid } from "@/components/why/BeliefSystemGrid";
import { CompromiseList } from "@/components/why/CompromiseList";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/why-estateiq");

const beliefs = [
  {
    title: "Small landlords deserve better financial systems",
    description:
      "A small portfolio is still a financial business. Owners need clarity without enterprise complexity.",
    label: "Customer",
    tone: "brand" as const,
  },
  {
    title: "Every balance should explain itself",
    description:
      "Balances should trace back to charges, payments, and allocations.",
    label: "Ledger",
    tone: "success" as const,
  },
  {
    title: "Documents support records",
    description:
      "Receipts and leases should provide evidence, not unchecked financial truth.",
    label: "Evidence",
    tone: "warning" as const,
  },
  {
    title: "Reports should be traceable",
    description:
      "Numbers are more useful when the owner can understand where they came from.",
    label: "Reports",
    tone: "neutral" as const,
  },
  {
    title: "AI should explain, not invent",
    description:
      "AI becomes useful when it explains records instead of guessing.",
    label: "AI",
    tone: "ai" as const,
  },
];

const compromises = [
  {
    title: "No vague financial answers",
    description:
      "EstateIQ should preserve the connection between every answer and the records behind it.",
  },
  {
    title: "No unchecked document automation",
    description:
      "Documents can support workflows, but user review and confirmation matter.",
  },
  {
    title: "No generic property management positioning",
    description:
      "EstateIQ is finance-first and built for independent landlords.",
  },
  {
    title: "No AI as financial truth",
    description:
      "AI should interpret verified records, not replace them.",
  },
];

export default function WhyEstateIQPage() {
  return (
    <>
      <ProductHero
        badge="Why EstateIQ"
        description="EstateIQ exists because independent landlords need one place to understand buildings, money, documents, reports, and AI without losing control of the records."
        eyebrow="Why EstateIQ"
        previewItems={[
          { label: "Records before AI", href: "#financial-truth-before-ai" },
          { label: "Balances that explain themselves", href: "#belief-system" },
          { label: "Documents as connected evidence", href: "#traditional-tools" },
          { label: "Reports that trace back to records", href: "#compromises" },
        ]}
        previewTitle="A finance-first belief system"
        title="Small landlords deserve software that understands the business."
      />

      <ProductSection
        background="soft"
        description="Independent landlords often operate from fragmented records: spreadsheets, bank statements, receipts, leases, email attachments, and memory."
        eyebrow="The small landlord problem"
        title="The work is financial, but the tools are often scattered."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            When records are scattered, owners spend too much time reconciling
            what happened and too little time understanding what changed.
            EstateIQ is designed to make the operating picture clearer.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        description="Spreadsheets and rent trackers can help at the start, but they often fall short once owners need lease history, ledger-backed balances, document context, reporting, and grounded AI."
        eyebrow="Why traditional tools fall short"
        id="traditional-tools"
        tabIndex={-1}
        title="Task tracking is not the same as financial clarity."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Spreadsheets become fragile as the portfolio grows.",
            "Rent trackers can hide the records behind a balance.",
            "Documents should become connected evidence, not disconnected storage.",
            "Generic AI is risky when it is not grounded in source records.",
          ].map((item) => (
            <Card className="p-5" key={item} variant="outline">
              <p className="text-sm leading-6 text-text-secondary">{item}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="EstateIQ is intentionally calm, focused, and financial-first."
        eyebrow="The EstateIQ belief system"
        id="belief-system"
        tabIndex={-1}
        title="The answer should come from records before dashboards, automation, or AI."
      >
        <BeliefSystemGrid beliefs={beliefs} />
      </ProductSection>

      <ProductSection
        description="AI is valuable only when it can explain records, reports, and supported documents the owner can trace."
        eyebrow="Financial truth before AI"
        id="financial-truth-before-ai"
        tabIndex={-1}
        title="EstateIQ creates the record trail first, then lets AI explain it."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            The product philosophy is direct: confirmed financial records
            provide the facts. Reports summarize those facts. AI can help
            explain them, but it should never invent the numbers or replace the
            record system.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        background="soft"
        description="A financial operating system should make tradeoffs visible."
        eyebrow="What EstateIQ refuses to compromise"
        id="compromises"
        tabIndex={-1}
        title="Trust depends on what the product chooses not to do."
      >
        <CompromiseList items={compromises} />
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
                  Understand the portfolio through records you can trust.
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
