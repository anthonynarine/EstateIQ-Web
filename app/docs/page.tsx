// # Filename: app/docs/page.tsx
import type { Metadata } from "next";

import { DocumentationSectionGrid } from "@/components/content/DocumentationSectionGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/docs");

const documentationSections = [
  {
    title: "AI Documents",
    description:
      "User-facing guidance for Dana: what she is, what she can answer, how she uses your records, where her limits are, and how to ask better portfolio questions.",
    status: "Live",
    href: "/ai-academy/dana",
    actionLabel: "Read AI docs",
    statusVariant: "ai" as const,
  },
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
      "Conceptual learning paths for grounded AI, analyst tools, the Gap Tool, and financial truth before AI.",
    status: "Foundation live",
    href: "/ai-academy",
    actionLabel: "Open academy",
    statusVariant: "brand" as const,
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

const aiDocumentTopics = [
  {
    title: "What Dana is",
    description:
      "Dana is EstateIQ's read-only portfolio assistant. She explains your rental business from records already organized inside EstateIQ.",
  },
  {
    title: "What Dana can help with",
    description:
      "Ask about portfolio health, revenue, tenant balances, expenses, leases, buildings, documents, reports, and Schedule E readiness.",
  },
  {
    title: "How Dana uses your data",
    description:
      "Dana becomes more useful when your buildings, units, leases, charges, payments, expenses, and documents are complete and connected.",
  },
  {
    title: "What Dana cannot do",
    description:
      "Dana cannot create, edit, approve, delete, post, allocate, file returns, give tax advice, or invent missing financial facts.",
  },
  {
    title: "How to ask better questions",
    description:
      "Name the workflow, time period, property, tenant, or record type you care about so Dana can ground the answer in the right context.",
  },
  {
    title: "Example questions",
    description:
      "Start with practical prompts like 'What should I review first?', 'Who owes rent?', or 'What is missing before Schedule E prep?'",
  },
];

export default function DocsPage() {
  return (
    <>
      <ProductHero
        badge="Documentation"
        description="When you want to understand how EstateIQ works, start here. This hub starts with Dana and will collect product guides, financial system notes, security information, and release history."
        eyebrow="Docs"
        previewItems={[
          { label: "AI Documents", href: "#ai-documents" },
          { label: "Dana guide", href: "/ai-academy/dana" },
          { label: "Product Guides", href: "#documentation-sections" },
          { label: "Financial System", href: "#documentation-sections" },
        ]}
        previewTitle="Documentation index"
        title="Need to understand how something works?"
      />

      <ProductSection
        background="soft"
        description="This is the first user-facing documentation set for EstateIQ's AI layer. It explains Dana in plain product language so users understand what to ask, what data matters, and where the guardrails are."
        eyebrow="AI Documents"
        id="ai-documents"
        tabIndex={-1}
        title="Start with Dana, the portfolio assistant."
      >
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6 sm:p-8" variant="glass">
            <Badge variant="ai">First docs set</Badge>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary">
              Dana explains what EstateIQ can verify from your records.
            </h3>
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              The goal is not to make AI feel magical. The goal is to make your
              rental records easier to understand, review, and act on. Complete
              records give Dana better evidence for clearer answers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ai-academy/dana" size="sm">
                Read Dana guide
              </Button>
              <Button href="/ai-copilot" size="sm" variant="outline">
                AI Copilot overview
              </Button>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {aiDocumentTopics.map((topic) => (
              <Card className="p-5" key={topic.title} variant="outline">
                <h3 className="text-base font-semibold text-text-primary">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {topic.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </ProductSection>

      <ProductSection
        description="This page is the starting point for future guides. It keeps product help, financial concepts, AI architecture, security, and release history in predictable places."
        eyebrow="Documentation sections"
        id="documentation-sections"
        tabIndex={-1}
        title="Find the right explanation without digging through the product."
      >
        <DocumentationSectionGrid sections={documentationSections} />
      </ProductSection>

    </>
  );
}
