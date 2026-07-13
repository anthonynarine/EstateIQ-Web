import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ConnectedSystemDiagram } from "@/components/features/ConnectedSystemDiagram";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { DocumentIntelligenceFlow } from "@/components/visualizations/DocumentIntelligenceFlow";
import { FinancialTruthFlow } from "@/components/visualizations/FinancialTruthFlow";
import { GapToolStory } from "@/components/visualizations/GapToolStory";
import { ReportsAiStory } from "@/components/visualizations/ReportsAiStory";
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
          { label: "See how EstateIQ handles unknowns", href: "#gap-capability-flow" },
        ]}
        previewTitle="Built for owners who want their time back"
        title="A next-generation toolkit for rental operations."
      />

      <ProductSection
        background="soft"
        description="Create buildings and units, manage tenants and leases, and record every charge and payment in the ledger. EstateIQ keeps each record tied to the right property, person, agreement, and history."
        eyebrow="Connected portfolio"
        id="connected-portfolio-system"
        tabIndex={-1}
        title="Your rental business, connected from building to balance."
      >
        <ConnectedSystemDiagram />
      </ProductSection>

      <ProductSection
        description="Record what was due and what was paid. EstateIQ applies payments to the right amounts owed and calculates what remains—without manually editing a balance."
        eyebrow="Financial truth"
        id="financial-truth-flow"
        tabIndex={-1}
        title="Every balance explains itself."
      >
        <FinancialTruthFlow />
      </ProductSection>

      <ProductSection
        background="soft"
        description="EstateIQ prepares key details from supported financial documents for your review, keeps the original attached to the confirmed record, and lets you ask questions grounded in the document itself. Store it. Find it. Ask it."
        eyebrow="Document intelligence"
        id="document-intelligence-flow"
        tabIndex={-1}
        title="Upload it once. Understand it anytime."
      >
        <DocumentIntelligenceFlow />
      </ProductSection>

      <ProductSection
        description="EstateIQ turns connected records into portfolio reports, then helps you understand what changed, what needs attention, and which records support the answer."
        eyebrow="Reports and EstateIQ AI"
        id="reports-ai-context"
        tabIndex={-1}
        title="See the numbers. Ask what they mean."
      >
        <ReportsAiStory />
      </ProductSection>

      <ProductSection
        background="soft"
        description="Unsupported questions are handled honestly and become product feedback—not made-up financial answers."
        eyebrow="The Gap Tool"
        id="gap-capability-flow"
        tabIndex={-1}
        title="When EstateIQ doesn’t know, it doesn’t pretend."
      >
        <GapToolStory />
      </ProductSection>

      <FinalCTASection
        eyebrow="Bring it all together"
        description="Manage buildings, units, tenants, leases, money, documents, reports, and answers in one system designed to keep the full picture clear."
        title="Your rental business is connected. Your software should be too."
      />
    </>
  );
}
