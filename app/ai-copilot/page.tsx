import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { FlowDiagram } from "@/components/visualizations/FlowDiagram";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/ai-copilot");

const questionExamples = [
  {
    title: "Why did expenses increase this month?",
    description:
      "Compares current expense records to prior periods and explains the difference by category and vendor.",
    label: "Expenses",
    tone: "warning" as const,
  },
  {
    title: "Which buildings are underperforming?",
    description:
      "Reviews NOI, occupancy, and collection rate across your portfolio to identify lagging properties.",
    label: "Portfolio",
    tone: "brand" as const,
  },
  {
    title: "Summarize this month's portfolio.",
    description:
      "Pulls revenue collected, outstanding balances, vacancy, and expense totals into a plain-English summary.",
    label: "Summary",
    tone: "ai" as const,
  },
  {
    title: "How much rent is outstanding?",
    description:
      "Derives unpaid charges from ledger allocations and lists tenants with open balances.",
    label: "Ledger",
    tone: "success" as const,
  },
  {
    title: "What's the NOI for Maple Court?",
    description:
      "Calculates net operating income from revenue and expense records tied to that building.",
    label: "Reports",
    tone: "brand" as const,
  },
  {
    title: "Which tenants have paid late more than once?",
    description:
      "Reviews payment timing across lease history to surface patterns in late payment behavior.",
    label: "Tenants",
    tone: "neutral" as const,
  },
];

const comparisonRows = [
  {
    oldWay: "Generic AI can sound confident without knowing which records prove the answer.",
    estateIq:
      "EstateIQ AI explains portfolio records, ledger data, supported documents, and reports you manage inside the product.",
  },
  {
    oldWay: "Generic AI may guess when context is missing.",
    estateIq:
      "EstateIQ routes supported questions through analyst tools and avoids unsupported financial answers.",
  },
  {
    oldWay: "Generic AI can blur the line between explanation and source of truth.",
    estateIq:
      "EstateIQ keeps confirmed financial records as the source of truth and uses AI to explain them.",
  },
];

export default function AiCopilotPage() {
  return (
    <>
      <ProductHero
        badge="Grounded in your records"
        description="Ask questions in plain English about your portfolio, reports, and supported documents. EstateIQ Copilot explains the information you manage inside the product without replacing the records that prove it."
        eyebrow="AI Copilot"
        previewItems={[
          { label: "How it works", href: "#how-it-works" },
          { label: "What you can ask", href: "#what-you-can-ask" },
          { label: "Why grounding matters", href: "#why-grounding-matters" },
        ]}
        previewTitle="AI grounded in EstateIQ data"
        title="AI that explains your portfolio, not generic internet answers."
      />

      <ProductSection
        background="soft"
        description="Every answer passes through deterministic analyst tools before AI explains it — the model never invents the numbers."
        eyebrow="How it works"
        id="how-it-works"
        tabIndex={-1}
        title="From your question to an answer you can trace."
      >
        <FlowDiagram
          aria-label="AI Copilot workflow from portfolio data to plain-English answer"
          description="EstateIQ finds the relevant records, analyst tools prepare the answer, then AI explains it in plain language."
          steps={[
            {
              title: "Portfolio data",
              description: "Buildings, units, leases, and ownership context.",
              tone: "brand",
            },
            {
              title: "Ledger",
              description: "Charges, payments, allocations, and derived balances.",
              tone: "success",
            },
            {
              title: "Documents",
              description: "Supported evidence such as receipts, invoices, and leases.",
              tone: "warning",
            },
            {
              title: "Reports",
              description: "Traceable summaries of financial performance.",
              tone: "brand",
            },
            {
              title: "Analyst tools",
              description: "Deterministic selectors prepare the answer before AI sees it.",
              tone: "success",
            },
            {
              title: "AI Copilot",
              description: "Explains the prepared answer in plain English.",
              tone: "ai",
            },
          ]}
          title="The model explains. It does not decide."
          tone="ai"
        />
      </ProductSection>

      <ProductSection
        description="These are the kinds of questions EstateIQ is built to answer — from your records, not from assumptions."
        eyebrow="What you can ask"
        id="what-you-can-ask"
        tabIndex={-1}
        title="Ask practical questions about the financial life of the portfolio."
      >
        <FeatureGrid items={questionExamples} />
      </ProductSection>

      <ProductSection
        background="soft"
        description="The difference is not louder AI. The difference is that the product knows where the answer should come from."
        eyebrow="Why grounding matters"
        id="why-grounding-matters"
        tabIndex={-1}
        title="EstateIQ AI explains your software. It does not wander away from it."
      >
        <ComparisonTable rows={comparisonRows} />
      </ProductSection>

      <FinalCTASection
        description="Ask better questions about your portfolio records, ledger data, supported documents, and reports — with answers grounded in what EstateIQ actually knows."
        eyebrow="EstateIQ AI Copilot"
        title="Ask better questions about verified portfolio data."
      />
    </>
  );
}
