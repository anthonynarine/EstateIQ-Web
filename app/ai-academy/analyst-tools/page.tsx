import type { Metadata } from "next";

import { AiSystemFlow } from "@/components/academy/AiSystemFlow";
import { PrincipleCallout } from "@/components/academy/PrincipleCallout";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/ai-academy/analyst-tools",
);

const toolResponsibilities = [
  "Classify the user question into a supported intent.",
  "Route the intent to a registered analyst tool.",
  "Call selectors or services for ledger, lease, building, expense, document, or report data.",
  "Return structured output that can be checked and explained.",
];

const selectorSources = [
  "Ledger charges, payments, allocations, and balances.",
  "Lease and occupancy records.",
  "Building, unit, and portfolio context.",
  "Expense records and categories.",
  "Documents connected to financial or lease records.",
  "Reports produced by deterministic reporting logic.",
];

export default function AnalystToolsPage() {
  return (
    <>
      <ProductHero
        badge="Analyst Tools"
        description="Analyst tools are deterministic backend capabilities that answer structured portfolio questions before the LLM explains the result."
        eyebrow="AI Academy"
        previewItems={[
          "Question classified into intent",
          "Intent routes to a registered tool",
          "Selectors read structured records",
          "LLM explains structured output",
        ]}
        previewTitle="Structured question handling"
        title="Analyst tools keep AI answers grounded."
      />

      <ProductSection
        background="soft"
        description="The LLM is not the database layer. It receives structured outputs from supported tools and explains them in natural language."
        eyebrow="System flow"
        title="A user question moves through deterministic steps."
      >
        <AiSystemFlow
          steps={[
            "User question",
            "Intent classifier",
            "Analyst tool",
            "Selector/reporting logic",
            "Structured answer",
          ]}
        />
        <Card className="mt-4 p-5 sm:p-6" variant="outline">
          <p className="text-sm leading-6 text-text-secondary">
            After the structured answer is produced, the AI explanation layer
            presents it naturally. The LLM does not directly query the database.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        description="Analyst tools create a controlled bridge between a landlord's question and EstateIQ's financial records."
        eyebrow="What analyst tools do"
        title="They turn questions into supported, testable capabilities."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {toolResponsibilities.map((item) => (
            <Card className="p-5" key={item} variant="glass">
              <p className="text-sm leading-6 text-text-secondary">{item}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Selectors and services read the same record systems the rest of the product depends on."
        eyebrow="Source records"
        title="Tools read structured financial and portfolio data."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {selectorSources.map((source) => (
            <Card className="p-5" key={source} variant="outline">
              <p className="text-sm leading-6 text-text-secondary">
                {source}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="This architecture makes the answer easier to inspect because the model is explaining a prepared result, not searching raw records on its own."
        eyebrow="Explanation layer"
        title="The LLM presents the answer; it does not own the calculation."
      >
        <PrincipleCallout
          eyebrow="Boundary"
          title="Deterministic tools answer. AI explains."
        >
          EstateIQ analyst tools return structured output from registered
          selectors and services. The LLM turns that answer into plain language,
          while financial calculations remain in deterministic code.
        </PrincipleCallout>
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
                  Learn how unsupported questions become product signal.
                </h2>
              </div>
              <Button href="/ai-academy/gap-tool" size="lg">
                Gap Tool
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
