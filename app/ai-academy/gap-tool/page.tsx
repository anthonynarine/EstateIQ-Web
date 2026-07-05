import type { Metadata } from "next";

import { GapLifecycleDiagram } from "@/components/academy/GapLifecycleDiagram";
import { PrincipleCallout } from "@/components/academy/PrincipleCallout";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/ai-academy/gap-tool");

const taxonomyItems = [
  "Missing analyst tool",
  "Missing selector or service coverage",
  "Missing report metric",
  "Missing dashboard card",
  "Missing document or lease context",
  "Missing education or documentation",
];

const buildOptions = [
  "A new analyst tool for a supported question type.",
  "A selector that safely exposes an existing record view.",
  "A report or dashboard card that makes repeated analysis easier.",
  "A documentation page when the question is educational rather than computational.",
];

export default function GapToolPage() {
  return (
    <>
      <ProductHero
        badge="Gap Tool"
        description="When EstateIQ cannot answer a question, that failure becomes useful product signal without allowing the AI to guess."
        eyebrow="AI Academy"
        previewItems={[
          { label: "Unsupported question detected", href: "#unanswered-questions" },
          { label: "Structured gap event captured", href: "#gap-capture" },
          { label: "Taxonomy categorizes the gap", href: "#gap-taxonomy" },
          { label: "New coverage is reviewed before release", href: "#new-coverage" },
        ]}
        previewTitle="Coverage learning loop"
        title="A gap is a signal, not permission to hallucinate."
      />

      <ProductSection
        background="soft"
        description="Unsupported questions are valuable because they show what landlords expected the system to understand."
        eyebrow="Why unanswered questions matter"
        id="unanswered-questions"
        tabIndex={-1}
        title="A failed answer can still teach the product team what to build next."
      >
        <PrincipleCallout
          eyebrow="Product learning"
          title="The Gap Tool helps the product team understand what users are asking for."
        >
          The AI does not answer unsupported questions just because a gap
          exists. A gap shows demand for coverage; it does not create verified
          financial truth.
        </PrincipleCallout>
      </ProductSection>

      <ProductSection
        description="Gap capture is structured so the team can learn from demand while protecting financial trust."
        eyebrow="How a gap is captured"
        id="gap-capture"
        tabIndex={-1}
        title="The system records safe metadata about missing coverage."
      >
        <GapLifecycleDiagram />
      </ProductSection>

      <ProductSection
        background="soft"
        description="A deterministic taxonomy creates consistent signal before any later clustering groups repeated gaps."
        eyebrow="Gap taxonomy"
        id="gap-taxonomy"
        tabIndex={-1}
        title="Gaps are categorized before they are grouped."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {taxonomyItems.map((item) => (
            <Card className="p-5" key={item} variant="outline">
              <p className="text-sm font-medium text-text-primary">{item}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="Repeated gaps can reveal a missing product capability, but they still require deliberate implementation."
        eyebrow="From gap to new analyst tool"
        id="new-coverage"
        tabIndex={-1}
        title="New AI coverage must be built, tested, and reviewed."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {buildOptions.map((option) => (
            <Card className="p-5" key={option} variant="glass">
              <p className="text-sm leading-6 text-text-secondary">
                {option}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Free-form AI often tries to be helpful by filling gaps. EstateIQ's approach keeps missing coverage visible instead."
        eyebrow="Why this is safer"
        title="The Gap Tool improves coverage without letting the AI guess."
      >
        <PrincipleCallout
          eyebrow="Safety boundary"
          title="A gap is not an answer."
        >
          New coverage must be implemented, tested, and reviewed before
          becoming part of the AI system. Until then, the unsupported question
          remains a gap, not a model-generated financial conclusion.
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
                  See why financial truth stays upstream of AI.
                </h2>
              </div>
              <Button href="/ai-academy/financial-truth" size="lg">
                Financial Truth
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
