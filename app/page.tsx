import type { Metadata } from "next";

import { AiCopilotSection } from "@/components/marketing/AiCopilotSection";
import { DocumentIntelligenceSection } from "@/components/marketing/DocumentIntelligenceSection";
import { FinalCTASection } from "@/components/marketing/FinalCTASection";
import { FinancialTruthSection } from "@/components/marketing/FinancialTruthSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { ComparisonTable } from "@/components/product/ComparisonTable";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

const comparisonRows = [
  {
    oldWay: "AI bolted onto disconnected rent, expense, document, and report screens.",
    estateIq:
      "AI built into one operating layer where records, documents, reports, and answers stay connected.",
  },
  {
    oldWay: "Chat answers that sound confident but cannot trace where the number came from.",
    estateIq:
      "Responses grounded in ledger records, supported documents, and report outputs the owner can inspect.",
  },
  {
    oldWay: "Automation that tries to turn guesses into accounting records.",
    estateIq:
      "Review-first workflows where AI prepares context, and confirmed records remain the financial truth.",
  },
  {
    oldWay: "Property software where AI is a side panel watching from the outside.",
    estateIq:
      "An AI-native financial operating system where the product structure gives AI something reliable to explain.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FinancialTruthSection />
      <DocumentIntelligenceSection />
      <AiCopilotSection />
      <Section
        eyebrow="Why it is different"
        title="EstateIQ is AI-native because the system gives AI real financial context."
        description="The goal is not to make AI sound smarter than the records. EstateIQ keeps the ledger, documents, reports, and Copilot connected so AI can explain the business without becoming the source of truth."
        id="why-different"
      >
        <ComparisonTable
          leftHeader="AI add-on pattern"
          rightHeader="EstateIQ AI-native approach"
          rows={comparisonRows}
        />
      </Section>
      <TrustSection />
      <FinalCTASection />
    </>
  );
}
