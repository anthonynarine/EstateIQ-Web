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
      "How to keep supporting files connected to the records they explain.",
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
        description="The Learn Center will organize practical education for landlords who want cleaner records, stronger financial habits, and better portfolio visibility."
        eyebrow="Learn"
        previewItems={[
          "Financial foundations",
          "Ledger accounting",
          "AI for landlords",
          "Reporting and KPIs",
        ]}
        previewTitle="Educational content library"
        title="Learn how to build a healthier rental business."
      />

      <ProductSection
        background="soft"
        description="These categories define the future editorial structure. Articles are not published yet, so each category clearly shows that content is coming soon."
        eyebrow="Learning categories"
        title="A landlord education library built around financial clarity."
      >
        <LearningCategoryGrid categories={learningCategories} />
      </ProductSection>

      <ProductSection
        description="The Learn Center is separate from product documentation. It is for education first: concepts, habits, and operating judgment."
        eyebrow="Editorial foundation"
        title="Built to grow into a durable public knowledge base."
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
