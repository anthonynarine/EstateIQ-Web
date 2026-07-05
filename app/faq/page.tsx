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
      "EstateIQ helps owners manage buildings, money records, supported documents, reports, and AI in one connected system. Under the hood, it uses ledger-first accounting, traceable reports, and AI explanations grounded in product records.",
  },
  {
    question: "Why ledger-first accounting?",
    answer:
      "Because landlords need to know what was charged, what was paid, and what still remains. Ledger-first accounting is the technical model behind that: charges, payments, and allocations create a record trail instead of relying only on loose paid or unpaid states.",
  },
  {
    question: "How does AI work?",
    answer:
      "EstateIQ AI explains records, reports, and supported documents you manage inside the product. For supported questions, analyst tools prepare structured answers before the LLM explains them in natural language.",
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
        description="Straight answers to the questions a landlord would ask before trusting EstateIQ with portfolio records, documents, reports, and AI."
        eyebrow="FAQ"
        previewItems={[
          { label: "Ledger-first accounting", href: "#frequently-asked-questions" },
          { label: "Grounded AI", href: "#frequently-asked-questions" },
          { label: "Document confirmation", href: "#frequently-asked-questions" },
          { label: "Organization boundaries", href: "#frequently-asked-questions" },
        ]}
        previewTitle="Common questions"
        title="Questions you might ask before using EstateIQ."
      />

      <ProductSection
        background="soft"
        description="These answers stay practical first and technical second. They explain what EstateIQ does today without inventing pricing, integrations, or unsupported capabilities."
        eyebrow="Frequently asked questions"
        id="frequently-asked-questions"
        tabIndex={-1}
        title="Clear answers before you bring your records into a new system."
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
        description="Start an account path or explore the product overview to understand how EstateIQ connects portfolio records, ledger math, supported documents, reports, and AI explanations."
        secondaryHref="/product"
        secondaryLabel="View product"
        title="Have a question that is not answered here?"
      />
    </>
  );
}
