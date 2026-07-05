import type { Metadata } from "next";

import { AiHero } from "@/components/ai/AiHero";
import { AnalystWorkflowDiagram } from "@/components/ai/AnalystWorkflowDiagram";
import { QuestionExamples } from "@/components/ai/QuestionExamples";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/ai-copilot");

const groundedRules = [
  {
    title: "Answers from your EstateIQ records",
    id: "structured-records",
    description:
      "Copilot works from portfolio, lease, ledger, expense, supported document, and reporting context.",
    label: "Records",
    tone: "ai" as const,
  },
  {
    title: "Does not invent balances",
    id: "does-not-invent-balances",
    description:
      "Financial values must come from recorded activity and analyst tools, not model guesses.",
    label: "Deterministic",
    tone: "success" as const,
  },
  {
    title: "Does not modify financial data",
    description:
      "AI explains information. Financial records remain owned by the application workflows.",
    label: "Read-only",
    tone: "neutral" as const,
  },
  {
    title: "Designed to be explainable",
    description:
      "The product emphasizes source-backed context, confidence, and answers you can trace.",
    label: "Traceable",
    tone: "brand" as const,
  },
];

const comparisonRows = [
  {
    oldWay: "Generic AI can sound confident without knowing which records prove the answer.",
    estateIq:
      "EstateIQ AI explains portfolio records, ledger data, supported documents, and reports you manage inside the product.",
  },
  {
    oldWay: "Generic AI may guess when context is missing.",
    estateIq:
      "EstateIQ routes supported questions through analyst tools and avoids unsupported financial answers.",
  },
  {
    oldWay: "Generic AI can blur the line between explanation and source of truth.",
    estateIq:
      "EstateIQ keeps confirmed financial records as the source of truth and uses AI to explain them.",
  },
];

export default function AiCopilotPage() {
  return (
    <>
      <AiHero />

      <ProductSection
        description="First, EstateIQ finds the relevant records and reports. Then analyst tools prepare the answer before AI explains it in plain language."
        eyebrow="How EstateIQ AI works"
        id="ledger-backed-context"
        tabIndex={-1}
        title="From your portfolio question to an answer you can trace."
      >
        <AnalystWorkflowDiagram />
      </ProductSection>

      <ProductSection
        background="soft"
        description="These examples show the kind of portfolio, revenue, expense, report, and building questions EstateIQ is designed to explain from product data."
        eyebrow="What you can ask"
        id="reports-documents"
        tabIndex={-1}
        title="Ask practical questions about the financial life of the portfolio."
      >
        <QuestionExamples />
      </ProductSection>

      <ProductSection
        description="Grounded AI means the answer starts from EstateIQ records, reports, and supported documents instead of generic internet knowledge."
        eyebrow="Grounded AI"
        id="grounded-ai-rules"
        tabIndex={-1}
        title="The facts stay in the records."
      >
        <FeatureGrid items={groundedRules} />
      </ProductSection>

      <ProductSection
        background="soft"
        description="The difference is not louder AI. The difference is that the product knows where the answer should come from."
        eyebrow="Why grounding matters"
        title="EstateIQ AI explains your software. It does not wander away from it."
      >
        <ComparisonTable rows={comparisonRows} />
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
                  EstateIQ AI Copilot
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Ask better questions about verified portfolio data.
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
