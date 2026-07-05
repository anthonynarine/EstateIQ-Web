import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ConnectedSystemDiagram } from "@/components/features/ConnectedSystemDiagram";
import { FeatureCategoryGrid } from "@/components/features/FeatureCategoryGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { FeatureWalkthrough } from "@/components/tour/FeatureWalkthrough";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/features");

const featureCategories = [
  {
    title: "Portfolio Organization",
    description:
      "Buildings and units create the structure that makes portfolio records useful.",
    items: ["Buildings", "Units", "Occupancy context"],
    tone: "brand" as const,
  },
  {
    title: "Lease Records",
    description:
      "Tenant and lease data grounds rent obligations, occupancy, and history.",
    items: ["Tenants", "Leases", "Lease status"],
    tone: "neutral" as const,
  },
  {
    title: "Ledger Accounting",
    description:
      "Lease receivables stay explainable through charges, payments, and allocations.",
    items: ["Charges", "Payments", "Allocations", "Balances"],
    tone: "success" as const,
  },
  {
    title: "Expenses",
    description:
      "Owner-side spend becomes reporting-ready when it is structured by context.",
    items: ["Categories", "Vendors", "Building context", "Unit context", "Lease context"],
    tone: "neutral" as const,
  },
  {
    title: "Documents",
    description:
      "Evidence stays connected to the records it supports without becoming automatic financial truth.",
    items: ["Receipts", "Leases", "Invoices", "Supporting files"],
    tone: "warning" as const,
  },
  {
    title: "Reporting",
    description:
      "Reports summarize financial activity from the records behind the numbers.",
    items: ["Cash flow", "Expense summaries", "Delinquency context", "Portfolio visibility"],
    tone: "brand" as const,
  },
  {
    title: "AI Copilot",
    description:
      "AI explains verified records and reports instead of inventing portfolio facts.",
    items: ["Source-backed explanations", "Summary support", "Grounded portfolio questions"],
    tone: "ai" as const,
  },
];

const featureTours = [
  {
    title: "Expense Tracking",
    description:
      "A guided explanation of how expense records become useful financial context.",
    steps: [
      {
        title: "Capture the spend",
        description:
          "Record the expense with category, vendor, amount, and portfolio context.",
      },
      {
        title: "Attach evidence",
        description:
          "Connect receipts or invoices so the record has supporting context.",
      },
      {
        title: "Use in reports",
        description:
          "Expense data can support reporting once it is structured and reviewed.",
      },
    ],
  },
  {
    title: "Document Intelligence",
    description:
      "Documents support the system without silently becoming financial truth.",
    steps: [
      {
        title: "Organize files",
        description:
          "Receipts, invoices, leases, and supporting files stay attached to the records they explain.",
      },
      {
        title: "Confirm context",
        description:
          "Financial meaning should be reviewed before documents affect records.",
      },
      {
        title: "Preserve evidence",
        description:
          "Documents help users understand where a number or agreement came from.",
      },
    ],
  },
  {
    title: "Ledger",
    description:
      "Ledger-first accounting keeps balances explainable instead of state-based.",
    steps: [
      {
        title: "Create charges",
        description:
          "Rent and other obligations are represented as structured ledger records.",
      },
      {
        title: "Record payments",
        description:
          "Payments are tracked separately from the obligations they satisfy.",
      },
      {
        title: "Allocate and calculate",
        description:
          "Balances come from deterministic allocation and calculation logic.",
      },
    ],
  },
  {
    title: "Reports",
    description:
      "Reports summarize records while keeping the source trail visible.",
    steps: [
      {
        title: "Read structured data",
        description:
          "Reports depend on ledger, expense, lease, document, and portfolio context.",
      },
      {
        title: "Apply reporting logic",
        description:
          "Numbers are derived through deterministic logic rather than model guesses.",
      },
      {
        title: "Explain results",
        description:
          "Users can understand what changed and which records are involved.",
      },
    ],
  },
  {
    title: "AI Copilot",
    description:
      "AI explains structured outputs from records, reports, and analyst tools.",
    steps: [
      {
        title: "Classify the question",
        description:
          "The system identifies whether the request maps to supported analysis.",
      },
      {
        title: "Use analyst tools",
        description:
          "Deterministic tools prepare structured answers from registered logic.",
      },
      {
        title: "Explain naturally",
        description:
          "The LLM presents the result without replacing financial truth.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <ProductHero
        badge="Capability overview"
        description="EstateIQ connects properties, leases, expenses, documents, reports, and AI insight into one financial operating system for independent landlords."
        eyebrow="Features"
        previewItems={[
          "Portfolio structure",
          "Ledger-backed balances",
          "Document-supported records",
          "Deterministic reporting",
        ]}
        previewTitle="Connected by financial truth"
        title="Everything your rental portfolio needs to become financially clear."
      />

      <ProductSection
        background="soft"
        description="EstateIQ features are designed to reinforce one another, not sit as isolated tools."
        eyebrow="Feature categories"
        title="The product areas that support a clearer financial picture."
      >
        <FeatureCategoryGrid categories={featureCategories} />
      </ProductSection>

      <ProductSection
        description="The value comes from how the system connects records. Property structure supports leases, leases support the ledger, and records support reporting and AI interpretation."
        eyebrow="Connected system"
        title="EstateIQ turns separate workflows into one financial spine."
      >
        <ConnectedSystemDiagram />
      </ProductSection>

      <ProductSection
        background="soft"
        description="These walkthroughs are explanatory foundations, not interactive demos. They describe how the product experience should guide users through finance-first workflows."
        eyebrow="Product tours"
        title="Feature walkthroughs for core workflows."
      >
        <FeatureWalkthrough tours={featureTours} />
      </ProductSection>

      <FinalCTASection
        eyebrow="EstateIQ Features"
        title="Build financial clarity from the records you already manage."
      />
    </>
  );
}
