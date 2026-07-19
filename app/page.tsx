import type { Metadata } from "next";

import { AiCopilotSection } from "@/components/marketing/AiCopilotSection";
import { AiDifferenceDiagram } from "@/components/marketing/AiDifferenceDiagram";
import { DocumentIntelligenceSection } from "@/components/marketing/DocumentIntelligenceSection";
import { FinalCTASection } from "@/components/marketing/FinalCTASection";
import { FinancialTruthSection } from "@/components/marketing/FinancialTruthSection";
import { GettingStartedSection } from "@/components/marketing/GettingStartedSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { PricingSection } from "@/components/marketing/PricingSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FinancialTruthSection />
      <DocumentIntelligenceSection />
      <AiCopilotSection />
      <Section
        eyebrow="Why the AI is different"
        title="Useful answers start with reliable records."
        description="EstateIQ connects the ledger, documents, and reports before AI enters the conversation. That gives Copilot real portfolio context—and gives you a clear path back to the source."
        id="why-different"
      >
        <AiDifferenceDiagram />
      </Section>
      <TrustSection />
      <PricingSection />
      <GettingStartedSection />
      <FinalCTASection />
    </main>
  );
}
