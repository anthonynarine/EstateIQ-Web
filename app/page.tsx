import { AiCopilotSection } from "@/components/marketing/AiCopilotSection";
import { DesignedForLandlordsSection } from "@/components/marketing/DesignedForLandlordsSection";
import { DocumentIntelligenceSection } from "@/components/marketing/DocumentIntelligenceSection";
import { FinalCTASection } from "@/components/marketing/FinalCTASection";
import { FinancialTruthSection } from "@/components/marketing/FinancialTruthSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { HowItWorksSection } from "@/components/marketing/HowItWorksSection";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { ProductPillarsSection } from "@/components/marketing/ProductPillarsSection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { WhyEstateIQSection } from "@/components/marketing/WhyEstateIQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhyEstateIQSection />
      <HowItWorksSection />
      <ProductPillarsSection />
      <FinancialTruthSection />
      <DocumentIntelligenceSection />
      <AiCopilotSection />
      <DesignedForLandlordsSection />
      <TrustSection />
      <FinalCTASection />
    </>
  );
}
