import type { Metadata } from "next";

import { BetaBanner } from "@/components/beta/BetaBanner";
import { BetaCallout } from "@/components/beta/BetaCallout";
import { EarlyAccessCard } from "@/components/beta/EarlyAccessCard";
import { BetaInterestPlaceholder } from "@/components/contact/BetaInterestPlaceholder";
import { ContactIntentGrid } from "@/components/contact/ContactIntentGrid";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <ProductHero
        badge="Beta interest"
        description="EstateIQ is building a finance-first operating system for independent landlords. Use this page to understand the current contact path and beta-interest status."
        eyebrow="Contact"
        previewItems={[
          "Join the beta",
          "Ask a product question",
          "Request a demo",
          "Security or trust questions",
        ]}
        previewTitle="Contact paths"
        title="Start a conversation about EstateIQ."
      />

      <ProductSection
        background="soft"
        description="Choose the intent that best matches why you are reaching out."
        eyebrow="Contact intents"
        title="A focused path for product and beta questions."
      >
        <div className="grid gap-4">
          <BetaBanner />
          <ContactIntentGrid />
        </div>
      </ProductSection>

      <ProductSection
        description="The beta path should be direct about what exists now and how early feedback will be used."
        eyebrow="Beta program"
        title="Early users help shape the product."
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <BetaCallout />
          <EarlyAccessCard />
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="The beta-interest form is intentionally static until a real backend flow is connected."
        eyebrow="Beta interest placeholder"
        title="No fake submissions. No pretend workflow."
      >
        <BetaInterestPlaceholder />
      </ProductSection>

      <ProductSection
        description="Until the beta flow is connected, the clearest path is direct email."
        eyebrow="What happens next"
        title="Beta intake will be connected in a later phase."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            If you want to reach EstateIQ now, email{" "}
            <a
              className="font-medium text-brand-cyan transition hover:text-brand-cyan-300 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            . Future work can connect a proper beta-interest workflow when the
            backend endpoint and review process are defined.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        description="EstateIQ handles financial records, documents, and AI interpretation. Contact and beta workflows should preserve that same trust standard."
        eyebrow="Trust note"
        title="The contact experience should be as honest as the product."
      >
        <Card className="p-6 sm:p-8" variant="outline">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            This page does not collect or submit data yet. It avoids fake
            success states and makes the current limitation visible.
          </p>
        </Card>
      </ProductSection>
    </>
  );
}
