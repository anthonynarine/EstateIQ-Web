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
        description="When you want to understand how EstateIQ works, start here. This hub will collect product guides, financial system notes, AI explanations, security information, and release history."
        eyebrow="Docs"
        previewItems={[
          { label: "Getting Started", href: "#documentation-sections" },
          { label: "Product Guides", href: "#documentation-sections" },
          { label: "Financial System", href: "#documentation-sections" },
          { label: "AI Academy", href: "#documentation-sections" },
        ]}
        previewTitle="Documentation index"
        title="Need to understand how something works?"
      />

      <ProductSection
        background="soft"
        description="This page is the starting point for future guides. It keeps product help, financial concepts, AI architecture, security, and release history in predictable places."
        eyebrow="Documentation sections"
        id="documentation-sections"
        tabIndex={-1}
        title="Find the right explanation without digging through the product."
      >
        <DocumentationSectionGrid sections={documentationSections} />
      </ProductSection>

      <ProductSection
        description="No product guides are being fabricated here. The structure is ready so future documentation can be added clearly as the product grows."
        eyebrow="Documentation foundation"
        title="The help center can grow without becoming a maze."
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
