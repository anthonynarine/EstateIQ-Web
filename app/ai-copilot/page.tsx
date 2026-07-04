import { AiHero } from "@/components/ai/AiHero";
import { AnalystWorkflowDiagram } from "@/components/ai/AnalystWorkflowDiagram";
import { QuestionExamples } from "@/components/ai/QuestionExamples";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const groundedRules = [
  {
    title: "References structured records",
    description:
      "Copilot works from portfolio, lease, ledger, expense, document, and reporting context.",
    label: "Records",
    tone: "ai" as const,
  },
  {
    title: "Does not invent balances",
    description:
      "Financial values must come from deterministic records and analyst tools, not model guesses.",
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
      "The product emphasizes source-backed context, confidence, and traceable financial reasoning.",
    label: "Traceable",
    tone: "brand" as const,
  },
];

const comparisonRows = [
  {
    oldWay: "Generic AI can sound confident without knowing which records prove the answer.",
    estateIq:
      "EstateIQ AI is grounded in structured portfolio records, ledger data, documents, and reports.",
  },
  {
    oldWay: "Generic AI may guess when context is missing.",
    estateIq:
      "EstateIQ is designed to rely on deterministic analyst tools and avoid unsupported financial answers.",
  },
  {
    oldWay: "Generic AI can blur the line between explanation and source of truth.",
    estateIq:
      "EstateIQ keeps financial records as the source of truth and uses AI as an interpretation layer.",
  },
];

export default function AiCopilotPage() {
  return (
    <>
      <AiHero />

      <ProductSection
        description="The system starts with structured financial truth. Analyst tools prepare grounded context before AI explains it."
        eyebrow="How EstateIQ AI works"
        title="From portfolio data to source-backed interpretation."
      >
        <AnalystWorkflowDiagram />
      </ProductSection>

      <ProductSection
        background="soft"
        description="These examples reflect current grounded portfolio, revenue, expense, report, and building analysis directions."
        eyebrow="What you can ask"
        title="Ask practical questions about the financial life of the portfolio."
      >
        <QuestionExamples />
      </ProductSection>

      <ProductSection
        description="EstateIQ AI should reinforce trust. It interprets records; it does not replace them."
        eyebrow="Grounded AI"
        title="Financial facts stay deterministic."
      >
        <FeatureGrid items={groundedRules} />
      </ProductSection>

      <ProductSection
        background="soft"
        description="The difference is not louder AI. The difference is a stronger source of truth underneath the answer."
        eyebrow="Why grounding matters"
        title="EstateIQ is not a free-roaming chatbot attached to financial records."
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
