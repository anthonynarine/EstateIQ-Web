import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/faq");

const faqs = [
  {
    question: "What makes EstateIQ different?",
    answer:
      "EstateIQ is finance-first. It is built around structured portfolio records, ledger-first accounting, document-supported evidence, deterministic reports, and grounded AI explanations.",
  },
  {
    question: "Why ledger-first accounting?",
    answer:
      "Ledger-first accounting keeps balances explainable. Charges, payments, and allocations create a record trail instead of relying only on loose paid or unpaid states.",
  },
  {
    question: "How does AI work?",
    answer:
      "EstateIQ AI is positioned as an explanation layer over structured records, reports, and deterministic analyst tools. The LLM explains prepared answers in natural language rather than becoming the source of financial truth.",
  },
  {
    question: "Does AI modify my financial records?",
    answer:
      "No. EstateIQ describes AI as an interpretation layer. Financial records should be created and changed through product workflows, not by AI inventing or modifying ledger facts.",
  },
  {
    question: "Why do documents require confirmation?",
    answer:
      "Documents can provide strong supporting evidence, but they should not silently create financial truth. Confirmation helps preserve review, context, and accountability.",
  },
  {
    question: "Who is EstateIQ built for?",
    answer:
      "EstateIQ is built for independent landlords and small portfolio operators who need clearer financial records without enterprise property management complexity.",
  },
  {
    question: "Can I manage multiple buildings?",
    answer:
      "EstateIQ is designed around portfolio structure, including buildings, units, leases, expenses, documents, reports, and AI-supported interpretation.",
  },
  {
    question: "Is my data isolated?",
    answer:
      "EstateIQ is designed around organization boundaries and scoped access patterns. Public pages avoid making unsupported compliance claims beyond the stated trust architecture.",
  },
];

export default function FaqPage() {
  return (
    <>
      <ProductHero
        badge="FAQ"
        description="Straight answers about EstateIQ's product philosophy, ledger-first model, grounded AI, documents, and trust boundaries."
        eyebrow="FAQ"
        previewItems={[
          "Ledger-first accounting",
          "Grounded AI",
          "Document confirmation",
          "Organization boundaries",
        ]}
        previewTitle="Common questions"
        title="EstateIQ FAQ."
      />

      <ProductSection
        background="soft"
        description="These answers explain current product positioning without inventing pricing, integrations, or unsupported capabilities."
        eyebrow="Frequently asked questions"
        title="Clear answers for small landlords evaluating EstateIQ."
      >
        <div className="grid gap-4">
          {faqs.map((item) => (
            <Card className="p-5 sm:p-6" key={item.question} variant="glass">
              <h2 className="text-lg font-semibold text-text-primary">
                {item.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <FinalCTASection
        description="Join the beta path or explore the product overview to understand how EstateIQ connects portfolio records, ledger math, documents, reports, and grounded AI."
        secondaryHref="/product"
        secondaryLabel="View product"
        title="Have a question that is not answered here?"
      />
    </>
  );
}
