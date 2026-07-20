import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/who-its-for");

const audiences = [
  {
    title: "Individual homeowners",
    label: "Personal asset",
    description:
      "A home is more than a place to live. For many owners, it is their largest asset, part of their retirement plan, and something they hope to pass on to their family. EstateIQ helps manage it with a cohesive toolkit for costs, documents, obligations, repairs, and AI-supported insight.",
    items: [
      "Mortgage, insurance, and property tax visibility",
      "Repairs, improvements, receipts, and warranties",
      "Documents for refinancing, review, or future sale",
      "Clear answers from the information you maintain",
    ],
  },
  {
    title: "Independent landlords",
    label: "Small business",
    description:
      "Independent landlords wear every hat: owner, operator, bookkeeper, document manager, and asset manager. EstateIQ brings those workflows into one toolkit so the business is easier to understand and run.",
    items: [
      "Buildings, units, tenants, and leases",
      "Rent charges, payments, and allocations",
      "Unpaid balances, missing charges, and collection context",
      "Documents, reports, and Schedule E preparation",
    ],
  },
  {
    title: "Small portfolio owners",
    label: "Asset management",
    description:
      "A growing portfolio needs more than scattered updates and end-of-month guesswork. EstateIQ gives small portfolio owners an asset-management toolkit for performance, cash flow, occupancy, documents, issues, and AI-supported owner briefings.",
    items: [
      "Portfolio, building, and asset health",
      "Expense trends and NOI",
      "Occupancy, lease, and risk signals",
      "AI owner briefings from connected data",
    ],
  },
];

const sharedNeeds = [
  "The same tools for records, documents, reporting, tax-readiness preparation, and AI explanations.",
  "Clear visibility into each asset: what it costs, what it earns, what is missing, and what needs attention.",
  "Exception tracking for issues like unpaid balances, missing rent charges, uncategorized expenses, and missing documents.",
  "AI help that explains what EstateIQ can verify without changing records or inventing missing financial facts.",
];

const toolkitRows = [
  {
    capability: "Financial records",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Document organization",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Property finance profiles",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Repairs and expenses",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Reports and summaries",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Tax-readiness preparation",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Dana AI explanations",
    homeowner: "Included",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Issue visibility",
    homeowner: "Single asset",
    landlord: "Rental workflow",
    portfolio: "Portfolio view",
  },
  {
    capability: "Lease and tenant workflows",
    homeowner: "If applicable",
    landlord: "Included",
    portfolio: "Included",
  },
  {
    capability: "Asset health",
    homeowner: "Single asset",
    landlord: "Property view",
    portfolio: "Portfolio view",
  },
];

function CapabilityValue({ value }: { value: string }) {
  const isIncluded = value === "Included";

  return (
    <div className="flex items-center gap-2 text-sm text-text-secondary">
      <span
        className={
          isIncluded
            ? "flex size-5 shrink-0 items-center justify-center rounded-full border border-brand-emerald/30 bg-brand-emerald/10 text-xs font-semibold text-brand-emerald"
            : "flex size-5 shrink-0 items-center justify-center rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-[10px] font-semibold text-brand-cyan"
        }
      >
        {isIncluded ? "✓" : "•"}
      </span>
      <span>{value}</span>
    </div>
  );
}

export default function WhoItsForPage() {
  return (
    <>
      <ProductHero
        badge="Who it's for"
        description="EstateIQ is for owners who need a clear operating system for property assets, from one home to a small rental portfolio."
        eyebrow="Owners"
        previewItems={[
          { label: "Individual homeowners", href: "#individual-homeowners" },
          { label: "Independent landlords", href: "#independent-landlords" },
          { label: "Small portfolio owners", href: "#small-portfolio-owners" },
          { label: "What all owners need", href: "#shared-record-needs" },
        ]}
        previewTitle="Different owners. Same operating system."
        title="Tooling for owners who manage property like a business asset."
      />

      <ProductSection
        background="soft"
        description="A home, rental unit, duplex, or small portfolio is an asset with costs, obligations, documents, risks, performance signals, and decisions attached to it."
        eyebrow="The common thread"
        title="EstateIQ gives every owner the same asset-management foundation."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Badge variant="brand">Asset-first ownership</Badge>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary">
                One product foundation. Different ownership lives.
              </h2>
            </div>
            <p className="text-base leading-7 text-text-secondary">
              Individual homeowners, independent landlords, and small portfolio
              owners all need the same core tools: organized financial records,
              connected documents, clear asset visibility, issue tracking,
              reports, tax-readiness preparation, and AI help that explains what
              the system can verify.
            </p>
          </div>
        </Card>
      </ProductSection>

      <ProductSection
        description="The workflows change by owner type, but the product is not split into lighter and heavier versions. Every owner benefits from the same financial operating system."
        eyebrow="Owner types"
        title="Different owners. Same core tools."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {audiences.map((audience) => (
            <Card
              className="p-5 sm:p-6"
              id={audience.title.toLowerCase().replaceAll(" ", "-")}
              key={audience.title}
              tabIndex={-1}
              variant="glass"
            >
              <Badge variant="ai">{audience.label}</Badge>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {audience.description}
              </p>
              <ul className="mt-5 grid gap-2">
                {audience.items.map((item) => (
                  <li
                    className="rounded-xl border border-border-soft bg-surface px-3 py-2 text-sm text-text-secondary"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="The free tier gives individual homeowners a low-friction way to bring one property, documents, expenses, repairs, property finance details, and AI-supported insight into EstateIQ."
        eyebrow="Start free"
        title="Homeowners can start free with one property."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Badge variant="success">Free tier fit</Badge>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary">
                A practical starting point for individual owners.
              </h2>
            </div>
            <p className="text-base leading-7 text-text-secondary">
              If you are managing one home, EstateIQ can start as the place
              where your property costs, documents, repairs, obligations, and
              AI-supported explanations come together. As ownership gets more
              complex, the same toolkit can grow with the work.
            </p>
          </div>
        </Card>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Everyone gets the same EstateIQ foundation: financial records, document organization, reports, tax-readiness preparation, issue visibility, and Dana. The difference is the ownership context EstateIQ helps you manage."
        eyebrow="Same toolkit"
        title="The product does not shrink for different owner types."
      >
        <Card className="overflow-hidden" variant="glass">
          <div className="hidden grid-cols-[1.15fr_repeat(3,minmax(0,1fr))] border-b border-border-soft bg-surface-elevated px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted sm:grid">
            <span>Toolset</span>
            <span>Homeowners</span>
            <span>Landlords</span>
            <span>Portfolio owners</span>
          </div>
          <div className="divide-y divide-border-soft">
            {toolkitRows.map((row) => (
              <div
                className="grid gap-3 px-4 py-4 sm:grid-cols-[1.15fr_repeat(3,minmax(0,1fr))] sm:items-center"
                key={row.capability}
              >
                <p className="text-sm font-medium text-text-primary">
                  {row.capability}
                </p>
                <div className="grid gap-2 sm:contents">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-faint sm:hidden">
                      Homeowners
                    </p>
                    <CapabilityValue value={row.homeowner} />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-faint sm:hidden">
                      Landlords
                    </p>
                    <CapabilityValue value={row.landlord} />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-faint sm:hidden">
                      Portfolio owners
                    </p>
                    <CapabilityValue value={row.portfolio} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </ProductSection>

      <ProductSection
        description="The important question is not whether you own one property or ten. It is whether you can see what is happening across the asset and trust the information behind that view."
        eyebrow="Shared needs"
        id="shared-record-needs"
        tabIndex={-1}
        title="Every owner needs visibility, not just storage."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {sharedNeeds.map((need) => (
            <Card className="p-5 sm:p-6" key={need} variant="outline">
              <p className="text-sm leading-6 text-text-secondary">{need}</p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="Dana helps users understand their assets from information already organized inside EstateIQ. She stays read-only, does not change records, and does not invent missing financial facts."
        eyebrow="AI for owners"
        title="Dana helps explain what is happening across the asset."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            Whether you own one home or manage rentals, Dana is useful because
            she starts from the same asset-first foundation: property context,
            financial records, connected documents, reports, and tax-readiness
            summaries. Better data gives Dana better evidence to explain from.
          </p>
        </Card>
      </ProductSection>

      <FinalCTASection
        description="Start with the property assets you already manage, then build a clearer system for money, documents, reports, issue tracking, and AI explanations."
        eyebrow="EstateIQ"
        title="Own property? See the asset more clearly."
      />
    </>
  );
}
