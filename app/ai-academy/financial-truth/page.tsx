import type { Metadata } from "next";

import { PrincipleCallout } from "@/components/academy/PrincipleCallout";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/ai-academy/financial-truth",
);

const truthSources = [
  {
    title: "Charges and payments",
    description:
      "Ledger entries define what was charged, paid, allocated, and still owed.",
  },
  {
    title: "Expenses",
    description:
      "Expense records provide structured operating costs that can feed reports and explanations.",
  },
  {
    title: "Leases",
    description:
      "Lease records provide the rent, terms, dates, and occupancy context behind portfolio questions.",
  },
  {
    title: "Documents",
    description:
      "Receipts, invoices, leases, and files support the record system as evidence.",
  },
];

const reportRules = [
  "Reports are derived views over structured records.",
  "Report numbers should trace back to the records and logic that produced them.",
  "AI can summarize a report, but it should not replace report generation.",
];

export default function FinancialTruthPage() {
  return (
    <>
      <ProductHero
        badge="Financial Truth"
        description="Financial truth comes from records, not AI. EstateIQ uses AI to summarize and explain, while ledger math and reports remain deterministic."
        eyebrow="AI Academy"
        previewItems={[
          { label: "Records before explanations", href: "#records-before-explanations" },
          { label: "Ledger math stays deterministic", href: "#ledger-math-truth" },
          { label: "Documents support evidence", href: "#documents-evidence" },
          { label: "Reports remain traceable", href: "#reports-derived-views" },
        ]}
        previewTitle="Truth before AI"
        title="Financial truth comes from the record system."
      />

      <ProductSection
        background="soft"
        description="AI is useful only when it can point back to structured sources the product already trusts."
        eyebrow="Records before explanations"
        id="records-before-explanations"
        tabIndex={-1}
        title="The facts exist before the summary."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {truthSources.map((source) => (
            <Card className="p-5" key={source.title} variant="glass">
              <h3 className="text-base font-semibold text-text-primary">
                {source.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {source.description}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="Balances should come from charges, payments, allocations, and deterministic calculation rules."
        eyebrow="Ledger math as truth"
        id="ledger-math-truth"
        tabIndex={-1}
        title="The ledger owns balances."
      >
        <PrincipleCallout
          eyebrow="Ledger-first"
          title="AI cannot create ledger truth."
        >
          AI can explain why a balance appears the way it does, but the balance
          itself must come from ledger records and deterministic math.
        </PrincipleCallout>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Documents are important because they support records with evidence, not because they replace structured review."
        eyebrow="Documents as evidence"
        id="documents-evidence"
        tabIndex={-1}
        title="Supported documents help explain the record trail."
      >
        <Card className="p-6 sm:p-8" variant="outline">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            Receipts, invoices, leases, and other supported documents can
            provide context behind an expense, agreement, or transaction.
            EstateIQ should keep those documents connected to the records they
            support.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        description="Reports turn records into views landlords can use, while preserving the ability to trace where numbers came from."
        eyebrow="Reports as derived views"
        id="reports-derived-views"
        tabIndex={-1}
        title="Reports summarize records without replacing them."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {reportRules.map((rule) => (
            <Card className="p-5" key={rule} variant="glass">
              <p className="text-sm leading-6 text-text-secondary">{rule}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Natural language can make financial information easier to understand, but the explanation remains downstream of the record system."
        eyebrow="AI as explanation layer"
        title="AI helps users understand what the system already knows."
      >
        <PrincipleCallout
          eyebrow="Explanation"
          title="Summaries are helpful when the source remains clear."
        >
          EstateIQ AI can summarize and explain structured financial answers.
          It cannot create truth, modify financial records, or replace the
          deterministic systems that calculate ledger and report outputs.
        </PrincipleCallout>
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
                  Continue
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Return to the AI Academy overview.
                </h2>
              </div>
              <Button href="/ai-academy" size="lg">
                AI Academy
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
