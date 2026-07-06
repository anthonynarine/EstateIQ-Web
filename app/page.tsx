import type { Metadata } from "next";

import { AiCopilotSection } from "@/components/marketing/AiCopilotSection";
import { DocumentIntelligenceSection } from "@/components/marketing/DocumentIntelligenceSection";
import { FinalCTASection } from "@/components/marketing/FinalCTASection";
import { FinancialTruthSection } from "@/components/marketing/FinancialTruthSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { ProductPillarsSection } from "@/components/marketing/ProductPillarsSection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

const comparisonRows = [
  {
    oldWay: "Rent tracking that depends on loose paid or unpaid states.",
    estateIq: "Ledger records built from charges, payments, and allocations.",
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ProductPillarsSection />
      <FinancialTruthSection />
      <DocumentIntelligenceSection />
      <AiCopilotSection />
      <Section
        eyebrow="Why it is different"
        title="AI is useful because the records come first."
        description="EstateIQ starts with the owner problem: scattered tools make it impossible to trust the answer. Records, reports, and AI stay connected by design."
        id="why-different"
      >
        <ComparisonTable rows={comparisonRows} />
      </Section>
      <TrustSection />
      <FinalCTASection />
    </>
  );
}
