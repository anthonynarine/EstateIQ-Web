import type { Metadata } from "next";

import { ComingSoonCard } from "@/components/content/ComingSoonCard";
import { LearningCategoryGrid } from "@/components/content/LearningCategoryGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/learn");

const learningCategories = [
  {
    title: "Financial Foundations",
    description:
      "Core concepts for understanding income, expenses, balances, and operating health.",
  },
  {
    title: "Ledger Accounting",
    description:
      "Plain-language education on charges, payments, allocations, balances, and traceable records.",
  },
  {
    title: "Rental Operations",
    description:
      "Operational guidance for staying organized across properties, units, tenants, and workflows.",
  },
  {
    title: "Documents & Receipts",
    description:
      "How supported documents become connected evidence for the records they explain.",
  },
  {
    title: "AI for Landlords",
    description:
      "Practical education on using grounded AI without replacing financial truth.",
  },
  {
    title: "Reporting & KPIs",
    description:
      "How landlords can read portfolio performance through reports and reliable metrics.",
  },
  {
    title: "Tax Preparation",
    description:
      "How organized records can make tax-season preparation calmer and more traceable.",
  },
  {
    title: "Portfolio Growth",
    description:
      "Educational material for evaluating performance and improving operating discipline over time.",
  },
];

export default function LearnPage() {
  return (
    <>
      <ProductHero
        badge="Learn Center"
        description="If you have ever wondered where the money went, which records matter, or how to read your rental business more clearly, the Learn Center is where those practical lessons will live."
        eyebrow="Learn"
        previewItems={[
          { label: "Financial foundations", href: "#learning-categories" },
          { label: "Ledger accounting", href: "#learning-categories" },
          { label: "AI for landlords", href: "#learning-categories" },
          { label: "Reporting and KPIs", href: "#learning-categories" },
        ]}
        previewTitle="Educational content library"
        title="Learn how to run a clearer rental business."
      />

      <ProductSection
        background="soft"
        description="These categories match the questions small landlords ask as their records, expenses, documents, and reports become harder to manage by memory."
        eyebrow="Learning categories"
        id="learning-categories"
        tabIndex={-1}
        title="Start with the topics that make the business easier to understand."
      >
        <LearningCategoryGrid categories={learningCategories} />
      </ProductSection>

      <ProductSection
        description="The Learn Center is separate from product documentation. It will teach concepts, habits, and operating judgment before pointing back to specific product workflows."
        eyebrow="Editorial foundation"
        title="Useful education first. Product instructions second."
      >
        <ComingSoonCard
          description="Future Learn content can be organized by category, tags, author, and related product areas without changing this route structure."
          eyebrow="Publishing architecture"
          title="Articles coming soon."
        />
      </ProductSection>
    </>
  );
}
