import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ConnectedSystemDiagram } from "@/components/features/ConnectedSystemDiagram";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { DocumentIntelligenceFlow } from "@/components/visualizations/DocumentIntelligenceFlow";
import { FinancialTruthFlow } from "@/components/visualizations/FinancialTruthFlow";
import { FlowDiagram } from "@/components/visualizations/FlowDiagram";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/features");

export default function FeaturesPage() {
  return (
    <>
      <ProductHero
        badge="Capability overview"
        description="EstateIQ connects your portfolio, financial records, supporting documents, reports, and AI into one operating system. Upload supported documents like mortgage statements, invoices, insurance policies, receipts, and leases. Organize them alongside buildings, units, leases, expenses, and reports, then ask questions in plain English with answers grounded in the information you manage inside EstateIQ."
        eyebrow="Features"
        previewItems={[
          { label: "Manage your portfolio", href: "#connected-portfolio-system" },
          { label: "Know where every dollar came from", href: "#financial-truth-flow" },
          { label: "Turn documents into knowledge", href: "#document-intelligence-flow" },
          { label: "Ask questions in plain English", href: "#reports-ai-context" },
          { label: "Grow through reviewed capabilities", href: "#gap-capability-flow" },
        ]}
        previewTitle="Enterprise-grade financial intelligence"
        title="Built for owners who want more than bookkeeping."
      />

      <ProductSection
        background="soft"
        description="EstateIQ is a connected operating system for owners who want their records, documents, reports, and AI to work together."
        eyebrow="Connected portfolio system"
        id="connected-portfolio-system"
        tabIndex={-1}
        title="Portfolio structure becomes the foundation for financial intelligence."
      >
        <ConnectedSystemDiagram />
      </ProductSection>

      <ProductSection
        description="Confirmed records and ledger data remain the source of financial truth. EstateIQ keeps charges, payments, allocations, and calculated balances upstream of documents, reports, and AI explanations."
        eyebrow="Financial truth flow"
        id="financial-truth-flow"
        tabIndex={-1}
        title="Know where every dollar came from."
      >
        <FinancialTruthFlow />
      </ProductSection>

      <ProductSection
        background="soft"
        description="Your documents should not just be stored. They should be understood. Supported documents become connected evidence and supported context after review and confirmation."
        eyebrow="Document intelligence flow"
        id="document-intelligence-flow"
        tabIndex={-1}
        title="Turn documents into knowledge."
      >
        <DocumentIntelligenceFlow />
      </ProductSection>

      <ProductSection
        description="Trust reports because they come from records. AI explains recorded activity, report outputs, and supported documents; it does not invent financial truth."
        eyebrow="Reports and AI context"
        id="reports-ai-context"
        tabIndex={-1}
        title="Ask questions in plain English and keep the answer grounded."
      >
        <FlowDiagram
          aria-label="Reports and AI context flow from structured records to AI explanation"
          description="Portfolio, financial records, connected documents, financial truth, reports, and AI explanations work together to support better decisions."
          steps={[
            {
              title: "Portfolio",
              description: "Buildings, units, leases, and portfolio context.",
              tone: "brand",
            },
            {
              title: "Financial records",
              description: "Ledger entries, expenses, payments, and allocations.",
              tone: "success",
            },
            {
              title: "Connected documents",
              description: "Supported evidence such as leases, receipts, invoices, and policies.",
              tone: "ai",
            },
            {
              title: "Financial truth",
              description: "Confirmed records and ledger math establish the facts.",
              tone: "success",
            },
            {
              title: "Reports",
              description: "Traceable views summarize performance and attention areas.",
              tone: "brand",
            },
            {
              title: "Grounded AI",
              description: "AI explains structured records and supported documents.",
              tone: "ai",
            },
          ]}
          title="Portfolio records become reports, explanations, and better decisions."
          tone="brand"
        />
      </ProductSection>

      <ProductSection
        background="soft"
        description="EstateIQ becomes more capable through reviewed product work informed by user questions. Technically, those improvements become deterministic capabilities after implementation, testing, and review."
        eyebrow="Capability expansion"
        id="gap-capability-flow"
        tabIndex={-1}
        title="Unsupported questions become reviewed product work."
      >
        <FlowDiagram
          aria-label="Gap capability flow from unsupported question to released capability"
          description="The product team can use repeated gaps to decide what to build next, while unsupported questions remain unsupported until coverage is implemented and reviewed."
          steps={[
            {
              title: "Unsupported question",
              description: "The router cannot match the request to a supported analyst capability.",
              tone: "warning",
            },
            {
              title: "Gap event",
              description: "Safe metadata captures the missing capability signal.",
              tone: "warning",
            },
            {
              title: "Review",
              description: "The team evaluates whether the gap belongs in the product.",
              tone: "warning",
            },
            {
              title: "New capability",
              description: "A deterministic tool, selector, report, or workflow is built.",
              tone: "brand",
            },
            {
              title: "Tested",
              description: "Coverage is implemented, tested, and reviewed before release.",
              tone: "success",
            },
            {
              title: "Released",
              description: "AI can now explain the new structured capability.",
              tone: "ai",
            },
          ]}
          title="The product improves through reviewed capabilities."
          tone="warning"
        />
      </ProductSection>

      <FinalCTASection
        eyebrow="EstateIQ Features"
        description="EstateIQ brings portfolio structure, ledger-first financial records, connected source documents, traceable reports, and grounded AI explanations into one operating system."
        title="Enterprise-grade financial intelligence without enterprise software weight."
      />
    </>
  );
}
