import type { Metadata } from "next";

import { ChangelogTimeline } from "@/components/content/ChangelogTimeline";
import { ComingSoonCard } from "@/components/content/ComingSoonCard";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/changelog");

const changelogEntries = [
  {
    phase: "Phase 0",
    title: "Project foundation",
    description:
      "Established the initial EstateIQ website direction, product framing, and implementation baseline.",
  },
  {
    phase: "Design System",
    title: "Visual and component foundation",
    description:
      "Created the dark-first EstateIQ design language, theme tokens, reusable UI primitives, and layout patterns.",
  },
  {
    phase: "Phase 1",
    title: "Site shell",
    description:
      "Added the global layout, header, mobile navigation, footer, navigation configuration, and route structure.",
  },
  {
    phase: "Phase 2",
    title: "Homepage",
    description:
      "Built the homepage narrative for EstateIQ as the Financial Operating System for Small Landlords.",
  },
  {
    phase: "Phase 3",
    title: "Product pages",
    description:
      "Added public pages for product areas including ledger, documents, reports, AI Copilot, security, about, contact, and why EstateIQ.",
  },
  {
    phase: "Phase 4",
    title: "SEO foundation",
    description:
      "Added structured metadata, route metadata, sitemap, robots, and foundational search visibility support.",
  },
  {
    phase: "Phase 5A",
    title: "AI Academy",
    description:
      "Added public education pages explaining grounded AI, analyst tools, the Gap Tool, and financial truth before AI.",
  },
];

export default function ChangelogPage() {
  return (
    <>
      <ProductHero
        badge="Changelog"
        description="A transparent record of the public website foundation and product education work completed so far."
        eyebrow="Changelog"
        previewItems={[
          "Design system",
          "Site shell",
          "Product pages",
          "AI Academy",
        ]}
        previewTitle="Release history"
        title="EstateIQ changelog."
      />

      <ProductSection
        background="soft"
        description="This timeline records completed website phases only. Future product releases can be added here when they are real."
        eyebrow="Timeline"
        title="Transparent product and website evolution."
      >
        <ChangelogTimeline entries={changelogEntries} />
      </ProductSection>

      <ProductSection
        description="The changelog is ready to grow into release filtering, RSS, version labels, and deeper release notes."
        eyebrow="Release notes foundation"
        title="Built for future release history."
      >
        <ComingSoonCard
          description="Future entries can be generated from release metadata, grouped by version or product area, and connected back to documentation without changing this public route."
          eyebrow="Publishing architecture"
          title="More release notes will appear as real work ships."
        />
      </ProductSection>
    </>
  );
}
