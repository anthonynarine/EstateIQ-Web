import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { FlowDiagram } from "@/components/product/FlowDiagram";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { FeatureShowcase } from "@/components/showcase/FeatureShowcase";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/product");

const audienceItems = [
  "Independent landlords",
  "Family-run portfolios",
  "Owners with 1-50 units",
  "Operators who need clarity without enterprise complexity",
];

const systemFlow = [
  "Buildings",
  "Units",
  "Leases",
  "Ledger",
  "Expenses",
  "Documents",
  "Reports",
  "AI Copilot",
];

const productAreas = [
  {
    title: "Manage the portfolio",
    description:
      "Structure buildings, units, tenants, and leases so every financial record has a clear place.",
    label: "Structure",
    tone: "brand" as const,
  },
  {
    title: "Lease Records",
    description:
      "Connect tenants, lease dates, rent terms, and occupancy history to the units they explain.",
    label: "Leases",
    tone: "neutral" as const,
  },
  {
    title: "Know what is owed",
    description:
      "Track charges, payments, allocations, and derived balances from ledger records.",
    label: "Ledger",
    tone: "success" as const,
  },
  {
    title: "Expense Tracking",
    description:
      "Capture owner-side spend with property, unit, lease, vendor, category, and document context.",
    label: "Expenses",
    tone: "neutral" as const,
  },
  {
    title: "Connect the documents",
    description:
      "Keep receipts, invoices, leases, bills, and supported documents connected to the records they explain.",
    label: "Documents",
    tone: "warning" as const,
  },
  {
    title: "Trust the reports",
    description:
      "Understand expected rent, collected cash, expenses, net cash flow, occupancy, and attention areas.",
    label: "Reports",
    tone: "brand" as const,
  },
  {
    title: "Ask better questions",
    description:
      "Use AI as an interpretation layer grounded in verified records, documents, ledger data, and reports.",
    label: "Grounded AI",
    tone: "ai" as const,
  },
];

const comparisonRows = [
  {
    oldWay: "Rent tracking that depends on loose paid or unpaid states.",
    estateIq:
      "Ledger records built from charges, payments, and allocations.",
  },
  {
    oldWay: "Generic property management workflows that treat finance as a side feature.",
    estateIq:
      "A finance-first system centered on what the portfolio earns, spends, and owes.",
  },
  {
    oldWay: "AI answers that are not grounded in source records.",
    estateIq:
      "AI explains confirmed records, supported documents, and reports instead of becoming the financial record.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductHero
        badge="Financial Operating System"
        description="Manage your buildings, leases, expenses, documents, reports, and AI in one place. EstateIQ organizes the records behind your rental business so you can understand what changed and why."
        eyebrow="Product"
        previewItems={[
          { label: "Portfolio structure", href: "#portfolio-structure" },
          { label: "Lease and ledger truth", href: "#system-overview" },
          { label: "Expenses and documents", href: "#product-areas" },
          { label: "Reports and AI interpretation", href: "#why-different" },
        ]}
        previewTitle="One connected financial spine"
        title="Run your rental business from one connected financial system."
      />

      <ProductSection
        background="soft"
        description="EstateIQ is designed for owners who need enterprise-grade financial intelligence without enterprise software weight."
        eyebrow="Who it is for"
        id="portfolio-structure"
        tabIndex={-1}
        title="Built for owners who want more than bookkeeping."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audienceItems.map((item) => (
            <Card className="p-5" key={item} variant="glass">
              <p className="text-sm font-medium text-text-primary">{item}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="The product flow starts with the real-world shape of a portfolio, then connects money records, documents, reports, and AI explanation."
        eyebrow="System overview"
        id="system-overview"
        tabIndex={-1}
        title="From buildings and leases to answers you can trust."
      >
        <FlowDiagram items={systemFlow} />
      </ProductSection>

      <ProductSection
        background="soft"
        description="This framework gives the site a place for real screenshots later while staying honest today."
        eyebrow="Product visualization"
        title="Preview the shape of the operating system."
      >
        <FeatureShowcase />
      </ProductSection>

      <ProductSection
        eyebrow="Product areas"
        id="product-areas"
        tabIndex={-1}
        title="The operating layer for the rental business you actually run."
      >
        <FeatureGrid items={productAreas} />
      </ProductSection>

      <ProductSection
        description="EstateIQ starts with the owner problem first: scattered tools make it hard to trust the answer. The technical difference is that records, reports, and AI all stay connected."
        eyebrow="Why it is different"
        id="why-different"
        tabIndex={-1}
        title="AI is useful because the records come first."
      >
        <ComparisonTable rows={comparisonRows} />
      </ProductSection>

      <FinalCTASection title="Bring the financial life of your portfolio into one connected system." />
    </>
  );
}
