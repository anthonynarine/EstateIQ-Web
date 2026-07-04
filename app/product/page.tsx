import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { FlowDiagram } from "@/components/product/FlowDiagram";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { siteConfig } from "@/lib/site";

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
    title: "Portfolio Organization",
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
    title: "Ledger Accounting",
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
    title: "Document Intelligence",
    description:
      "Keep receipts, invoices, leases, bills, and supporting documents connected to financial records.",
    label: "Documents",
    tone: "warning" as const,
  },
  {
    title: "Reporting",
    description:
      "Understand expected rent, collected cash, expenses, net cash flow, occupancy, and attention areas.",
    label: "Reports",
    tone: "brand" as const,
  },
  {
    title: "AI Copilot",
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
      "AI positioned as an explanation layer over deterministic records and reports.",
  },
];

export default function ProductPage() {
  return (
    <>
      <ProductHero
        badge="Financial Operating System"
        description="EstateIQ organizes property, lease, expense, document, and ledger records into one financial command center for independent landlords."
        eyebrow="Product"
        previewItems={[
          "Portfolio structure",
          "Lease and ledger truth",
          "Expenses and documents",
          "Reports and AI interpretation",
        ]}
        previewTitle="One connected financial spine"
        title="A financial operating system for the rental portfolio you actually own."
      />

      <ProductSection
        background="soft"
        description="EstateIQ is designed for small real estate portfolios that need reliable financial visibility without enterprise software weight."
        eyebrow="Who it is for"
        title="Built for owners who need clarity before complexity."
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
        description="The product flow starts with the real-world shape of a portfolio, then builds financial records and reporting on top."
        eyebrow="System overview"
        title="From property structure to grounded insight."
      >
        <FlowDiagram items={systemFlow} />
      </ProductSection>

      <ProductSection
        background="soft"
        eyebrow="Product areas"
        title="The operating layer for the records that determine financial truth."
      >
        <FeatureGrid items={productAreas} />
      </ProductSection>

      <ProductSection
        description="EstateIQ is data-first and finance-first. It is not generic property management software, and it is not AI-first guessing."
        eyebrow="Why it is different"
        title="EstateIQ starts with deterministic records and uses AI to explain them."
      >
        <ComparisonTable rows={comparisonRows} />
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
                  EstateIQ
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  Bring the financial life of your portfolio into one system.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href={siteConfig.primaryCta.href} size="lg">
                  {siteConfig.primaryCta.label}
                </Button>
                <Button
                  href={siteConfig.secondaryCta.href}
                  size="lg"
                  variant="outline"
                >
                  {siteConfig.secondaryCta.label}
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
