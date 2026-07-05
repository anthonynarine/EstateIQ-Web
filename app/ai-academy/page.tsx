import type { Metadata } from "next";

import { AcademyTopicGrid } from "@/components/academy/AcademyTopicGrid";
import { AiSystemFlow } from "@/components/academy/AiSystemFlow";
import { ComparisonGrid } from "@/components/academy/ComparisonGrid";
import { PrincipleCallout } from "@/components/academy/PrincipleCallout";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/ai-academy");

const topics = [
  {
    title: "Grounded AI",
    description:
      "How EstateIQ keeps AI answers tied to verified portfolio records instead of unsupported assumptions.",
    href: "/ai-academy/grounded-ai",
    label: "Grounding",
  },
  {
    title: "Analyst Tools",
    description:
      "How structured user questions route through deterministic tools before the AI explains the result.",
    href: "/ai-academy/analyst-tools",
    label: "Architecture",
  },
  {
    title: "Gap Tool",
    description:
      "How unanswered questions become product signal without letting the AI invent financial answers.",
    href: "/ai-academy/gap-tool",
    label: "Coverage",
  },
  {
    title: "Financial Truth Before AI",
    description:
      "Why ledger records, documents, reports, leases, expenses, and payments remain the source of truth.",
    href: "/ai-academy/financial-truth",
    label: "Trust",
  },
];

const comparisonItems = [
  {
    generic: "Generic AI may answer from text patterns even when it does not know the records behind the answer.",
    estateIq:
      "EstateIQ AI is designed to answer from structured records, selectors, analyst tools, and reports.",
  },
  {
    generic: "Generic AI can blur the line between confident wording and verified financial truth.",
    estateIq:
      "EstateIQ keeps ledger records, documents, expenses, leases, payments, and reports as the source of truth.",
  },
  {
    generic: "Generic AI may try to fill missing context with assumptions.",
    estateIq:
      "EstateIQ treats unsupported questions as gaps to review, not as permission to guess.",
  },
];

export default function AiAcademyPage() {
  return (
    <>
      <ProductHero
        badge="AI Academy"
        description="Learn how EstateIQ uses AI to explain real portfolio data without replacing financial truth."
        eyebrow="AI Academy"
        previewItems={[
          "Records remain the source of truth",
          "Analyst tools answer structured questions",
          "AI explains structured outputs",
          "Gaps help the team improve coverage",
        ]}
        previewTitle="AI built on financial records"
        title="AI Academy"
      />

      <ProductSection
        background="soft"
        description="The difference is the foundation. EstateIQ starts with records and uses AI as an explanation layer."
        eyebrow="What makes EstateIQ AI different"
        title="EstateIQ AI is not a generic chatbot."
      >
        <ComparisonGrid items={comparisonItems} />
      </ProductSection>

      <ProductSection
        description="Each layer has a job. Financial records hold truth, deterministic code prepares answers, and AI explains those answers in plain language."
        eyebrow="The AI stack"
        title="Grounded answers come from a layered system."
      >
        <AiSystemFlow
          steps={[
            "Financial records",
            "Deterministic selectors",
            "Analyst tools",
            "AI explanation layer",
            "Gap Tool feedback loop",
          ]}
        />
      </ProductSection>

      <ProductSection
        background="soft"
        description="These pages explain the architecture in plain language for landlords who want AI help without sacrificing financial control."
        eyebrow="Academy topics"
        title="Understand the system behind the answer."
      >
        <AcademyTopicGrid topics={topics} />
      </ProductSection>

      <ProductSection
        description="The AI layer can make records easier to understand. It does not replace the records, reports, or workflows that create financial truth."
        eyebrow="Core principle"
        title="Explain the truth. Do not become the truth."
      >
        <PrincipleCallout
          eyebrow="Financial trust"
          title="EstateIQ keeps AI downstream of deterministic records."
        >
          Ledger records, documents, expenses, reports, leases, and payments
          remain the facts. AI can summarize and explain what the system knows,
          but unsupported questions should be handled as product gaps.
        </PrincipleCallout>
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
                  Keep learning
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  See how grounded AI fits into the EstateIQ product.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/ai-copilot" size="lg">
                  AI Copilot
                </Button>
                <Button href="/why-estateiq" size="lg" variant="outline">
                  Why EstateIQ
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
