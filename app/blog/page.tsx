import type { Metadata } from "next";

import { ArticleCard } from "@/components/blog/ArticleCard";
import { ContentCategoryGrid } from "@/components/content/ContentCategoryGrid";
import { ContentPlaceholderCard } from "@/components/content/ContentPlaceholderCard";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Card } from "@/components/ui/Card";
import { danaArticles, upcomingDanaArticles } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/blog");

const blogCategories = [
  {
    title: "Architecture",
    description:
      "Technical writing about trustworthy AI-native application architecture, deterministic software capabilities, and DANA.",
  },
  {
    title: "Product",
    description:
      "Future writing about EstateIQ workflows, product thinking, and practical feature education.",
  },
  {
    title: "Finance",
    description:
      "Future education on rental financial clarity, ledger discipline, reports, and portfolio operations.",
  },
  {
    title: "Engineering",
    description:
      "Future technical writing about product architecture, data modeling, and building trustworthy systems.",
  },
  {
    title: "AI",
    description:
      "Future writing about grounded AI, analyst tools, product coverage, and financial explanation layers.",
  },
  {
    title: "Announcements",
    description:
      "Future company and product announcements when there is something real to share.",
  },
];

export default function BlogPage() {
  return (
    <>
      <ProductHero
        badge="Blog"
        description="Architecture notes, product thinking, and educational writing about building trustworthy AI-native financial software."
        eyebrow="Blog"
        previewItems={[
          { label: "DANA architecture series", href: "#dana-series" },
          {
            id: "ai-native-application-design",
            label: "AI-native application design",
            href: "#published-articles",
          },
          {
            id: "deterministic-software-capabilities",
            label: "Deterministic software capabilities",
            href: "#published-articles",
          },
          { label: "Financial truth before AI", href: "#blog-categories" },
        ]}
        previewTitle="Published writing"
        title="Writing about financial clarity and trustworthy AI software."
      />

      <ProductSection
        background="soft"
        description="A technical series about building trustworthy AI-native applications where structured software remains the source of truth and AI becomes the explanation layer."
        eyebrow="DANA Series"
        id="dana-series"
        tabIndex={-1}
        title="Architecture writing from building EstateIQ."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <p className="max-w-3xl text-base leading-7 text-text-secondary">
            DANA is the emerging architecture behind EstateIQ&apos;s AI-native
            product thinking: deterministic records, explicit application
            capabilities, analyst tools, gap capture, and AI explanations that
            stay grounded in software truth.
          </p>
        </Card>
      </ProductSection>

      <ProductSection
        description="The first three architecture articles are now published as static pages."
        eyebrow="Published articles"
        id="published-articles"
        tabIndex={-1}
        title="Read the first DANA articles."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {danaArticles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="These are planned DANA topics only. Full articles will be added when they are written."
        eyebrow="Upcoming"
        title="Coming soon in the DANA series."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingDanaArticles.map((title) => (
            <ContentPlaceholderCard
              description="This article is planned for the DANA series but has not been published yet."
              eyebrow="DANA"
              key={title}
              meta="Coming soon"
              title={title}
            />
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="Categories define the editorial map without pretending every category already has content."
        eyebrow="Categories"
        id="blog-categories"
        tabIndex={-1}
        title="A focused publishing structure for future writing."
      >
        <ContentCategoryGrid categories={blogCategories} />
      </ProductSection>
    </>
  );
}
