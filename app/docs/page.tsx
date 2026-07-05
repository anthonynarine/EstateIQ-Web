import type { Metadata } from "next";

import { ComingSoonCard } from "@/components/content/ComingSoonCard";
import { DocumentationSectionGrid } from "@/components/content/DocumentationSectionGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/docs");

const documentationSections = [
  {
    title: "Getting Started",
    description:
      "Future onboarding guides for setting up an EstateIQ workspace, properties, units, leases, records, and initial workflows.",
    status: "Coming soon",
  },
  {
    title: "Product Guides",
    description:
      "Future guides for product areas such as ledger, documents, reports, AI Copilot, and portfolio organization.",
    status: "Coming soon",
  },
  {
    title: "Financial System",
    description:
      "Future documentation for charges, payments, allocations, expenses, balances, reports, and traceable financial records.",
    status: "Coming soon",
  },
  {
    title: "AI Academy",
    description:
      "Links and documentation paths for grounded AI, analyst tools, the Gap Tool, and financial truth before AI.",
    status: "Foundation live",
  },
  {
    title: "Security",
    description:
      "Future trust documentation covering access, organization boundaries, data handling, and auditability.",
    status: "Coming soon",
  },
  {
    title: "Architecture",
    description:
      "Future technical notes about EstateIQ's financial operating model, reporting architecture, and AI grounding approach.",
    status: "Coming soon",
  },
  {
    title: "Release Notes",
    description:
      "A documentation path into changelog entries and release history as the product evolves.",
    status: "Index live",
  },
];

export default function DocsPage() {
  return (
    <>
      <ProductHero
        badge="Documentation"
        description="A central documentation hub for product guides, financial system notes, AI architecture, security, and release history."
        eyebrow="Docs"
        previewItems={[
          "Getting Started",
          "Product Guides",
          "Financial System",
          "AI Academy",
        ]}
        previewTitle="Documentation index"
        title="EstateIQ documentation starts here."
      />

      <ProductSection
        background="soft"
        description="This index defines where documentation will live as the product and public knowledge base grow."
        eyebrow="Documentation sections"
        title="A structured home for product and technical documentation."
      >
        <DocumentationSectionGrid sections={documentationSections} />
      </ProductSection>

      <ProductSection
        description="No product guides are being fabricated in this phase. This page creates the publishing structure that future documentation can fill."
        eyebrow="Documentation foundation"
        title="Ready for future guides, search, and versioned content."
      >
        <ComingSoonCard
          description="Future documentation can be powered by MDX, grouped by section, filtered by product area, and expanded into technical references without restructuring the public docs hub."
          eyebrow="Scalable structure"
          title="Documentation content coming soon."
        />
      </ProductSection>
    </>
  );
}
