import type { Metadata } from "next";

import { ComparisonGrid } from "@/components/academy/ComparisonGrid";
import { PrincipleCallout } from "@/components/academy/PrincipleCallout";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/ai-academy/grounded-ai",
);

const comparisonItems = [
  {
    generic: "May explain from general language patterns without knowing which portfolio records support the answer.",
    estateIq:
      "Explains answers grounded in verified EstateIQ records and structured outputs.",
  },
  {
    generic: "May make unsupported financial assumptions when context is missing.",
    estateIq:
      "Should reference real totals, balances, expenses, documents, and reports when answering.",
  },
  {
    generic: "May sound precise even when no deterministic calculation exists.",
    estateIq:
      "Keeps deterministic financial data as the authority behind the explanation.",
  },
];

const groundingSteps = [
  "A question is understood as a structured intent.",
  "The system routes that intent to supported analyst tools.",
  "Tools use selectors and reporting logic over EstateIQ records.",
  "The LLM receives structured output and explains it naturally.",
];

const notAllowed = [
  "Invent balances, expenses, payments, or document facts.",
  "Treat missing context as enough evidence for a financial conclusion.",
  "Modify charges, payments, allocations, leases, expenses, or reports.",
  "Replace ledger math, reporting logic, or source documents as financial truth.",
];

export default function GroundedAiPage() {
  return (
    <>
      <ProductHero
        badge="Grounded AI"
        description="Grounded AI means answers are based on verified EstateIQ records, not unsupported financial assumptions."
        eyebrow="AI Academy"
        previewItems={[
          { label: "Verified records first", href: "#generic-vs-grounded" },
          { label: "Structured answers before explanation", href: "#how-grounding-works" },
          { label: "No invented balances", href: "#grounding-guardrails" },
          { label: "AI explains the system's truth", href: "#why-grounding-matters" },
        ]}
        previewTitle="Grounding rules"
        title="AI should explain real portfolio data."
      />

      <ProductSection
        background="soft"
        description="For financial software, the question is not whether AI sounds fluent. The question is whether the answer can trace back to records."
        eyebrow="Generic AI vs grounded AI"
        id="generic-vs-grounded"
        tabIndex={-1}
        title="Grounding changes what the AI is allowed to rely on."
      >
        <ComparisonGrid items={comparisonItems} />
      </ProductSection>

      <ProductSection
        description="Landlords make decisions from balances, lease terms, expenses, and reports. Those answers need a source of truth below the model."
        eyebrow="Why financial software requires grounding"
        id="why-grounding-matters"
        tabIndex={-1}
        title="Financial answers need more than plausible wording."
      >
        <PrincipleCallout
          eyebrow="Core rule"
          title="AI explains the system's truth; it does not become the truth."
        >
          EstateIQ AI should help users understand real totals, balances,
          expenses, documents, and reports. The authority still comes from the
          records and deterministic logic that produced the answer.
        </PrincipleCallout>
      </ProductSection>

      <ProductSection
        background="soft"
        description="EstateIQ grounds answers by keeping the model downstream of structured system outputs."
        eyebrow="How EstateIQ grounds answers"
        id="how-grounding-works"
        tabIndex={-1}
        title="Records become structured context before they become natural language."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {groundingSteps.map((step, index) => (
            <Card className="p-5" key={step} variant="glass">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {step}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="Clear boundaries make the AI more useful because users know what it can and cannot do."
        eyebrow="Guardrails"
        id="grounding-guardrails"
        tabIndex={-1}
        title="What the AI is not allowed to do."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {notAllowed.map((item) => (
            <Card className="p-5" key={item} variant="outline">
              <p className="text-sm leading-6 text-text-secondary">{item}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
                  Next topic
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  See how analyst tools produce structured answers.
                </h2>
              </div>
              <Button href="/ai-academy/analyst-tools" size="lg">
                Analyst Tools
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
