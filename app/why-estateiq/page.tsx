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
    title: "Ledger-first accounting matters",
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
      "AI becomes useful when it is grounded in structured financial truth.",
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
        description="EstateIQ exists because independent landlords need financial systems that are clearer, calmer, and more trustworthy than scattered spreadsheets and generic rent trackers."
        eyebrow="Why EstateIQ"
        previewItems={[
          "Financial truth before AI",
          "Ledger-backed balances",
          "Documents as evidence",
          "Reports that trace back to records",
        ]}
        previewTitle="A finance-first belief system"
        title="Small landlords need better financial systems."
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
        title="Task tracking is not the same as financial clarity."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Spreadsheets become fragile as the portfolio grows.",
            "Rent trackers can hide the records behind a balance.",
            "Documents are often stored away from the records they explain.",
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
        title="Financial truth should come before dashboards, automation, or AI."
      >
        <BeliefSystemGrid beliefs={beliefs} />
      </ProductSection>

      <ProductSection
        description="AI is valuable only when it can reason over structured, traceable information."
        eyebrow="Financial truth before AI"
        title="EstateIQ creates the records first, then lets AI explain them."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            The product philosophy is direct: deterministic financial records
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
