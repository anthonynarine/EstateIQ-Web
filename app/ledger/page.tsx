import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { FeatureGrid } from "@/components/product/FeatureGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { FlowDiagram } from "@/components/visualizations/FlowDiagram";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/ledger");

const whyItMatters = [
  {
    title: "Partial payments",
    description:
      "See exactly how much was received and which charges still carry a remaining balance.",
    label: "Partial",
    tone: "warning" as const,
  },
  {
    title: "Overdue balances",
    description:
      "Trace any open balance back to the exact charges and allocations that created it.",
    label: "Overdue",
    tone: "warning" as const,
  },
  {
    title: "Tenant history",
    description:
      "The financial story attached to a lease is preserved over time — not reset on each payment.",
    label: "History",
    tone: "neutral" as const,
  },
  {
    title: "Cleaner reporting",
    description:
      "Well-structured ledger entries make year-end reporting and expense tracking more reliable.",
    label: "Reporting",
    tone: "brand" as const,
  },
  {
    title: "Auditability",
    description:
      "Every balance is explainable when questions come up — no manual tallies to reconstruct.",
    label: "Audit",
    tone: "success" as const,
  },
  {
    title: "Delinquency support",
    description:
      "Delinquency reporting comes from ledger records, not manual notes or toggled flags.",
    label: "Delinquency",
    tone: "success" as const,
  },
];

export default function LedgerPage() {
  return (
    <>
      <ProductHero
        badge="Ledger-first accounting"
        description="Know what is owed, what was paid, and what still remains. EstateIQ calculates balances from charges, payments, and allocations instead of relying on loose paid or unpaid flags."
        eyebrow="Ledger"
        previewItems={[
          { label: "Charge = what is owed", href: "#ledger-model" },
          { label: "Payment = money received", href: "#ledger-model" },
          { label: "Allocation = how payment is applied", href: "#ledger-model" },
          { label: "Balance = charges minus allocations", href: "#why-it-matters" },
        ]}
        previewTitle="Every balance should have a source"
        title="Know exactly why a balance exists."
      />

      <ProductSection
        background="soft"
        description="Every balance is the result of charges, payments, and how those payments were allocated — not a flag that gets toggled."
        eyebrow="Ledger model"
        id="ledger-model"
        tabIndex={-1}
        title="Balances come from recorded activity."
      >
        <FlowDiagram
          aria-label="Ledger flow from charge through payment and allocation to derived balance"
          description="From the first charge through to a calculated balance — every step is recorded and traceable."
          steps={[
            {
              title: "Charge",
              description: "What is owed under a lease.",
              tone: "success",
            },
            {
              title: "Payment",
              description: "Money received and recorded.",
              tone: "success",
            },
            {
              title: "Allocation",
              description: "How the payment is applied to charges.",
              tone: "success",
            },
            {
              title: "Derived balance",
              description: "Calculated from charges minus allocations.",
              tone: "brand",
            },
          ]}
          title="From charge to balance — every step is recorded."
          tone="success"
        />
      </ProductSection>

      <ProductSection
        description="Small landlords often need more than a checkbox. The ledger model handles the situations that make simple balances break down."
        eyebrow="Why it matters"
        id="why-it-matters"
        tabIndex={-1}
        title="Clear records matter most when payments get messy."
      >
        <FeatureGrid items={whyItMatters} />
      </ProductSection>

      <FinalCTASection
        description="Bring charges, payments, allocations, and derived balances into one place where every number has a source."
        eyebrow="EstateIQ Ledger"
        title="Track what was charged, paid, and applied."
      />
    </>
  );
}
