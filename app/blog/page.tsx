import type { Metadata } from "next";
import Link from "next/link";

import { ArticleCard } from "@/components/blog/ArticleCard";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { danaArticles } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/blog");

const [featured, ...rest] = danaArticles;

export default function BlogPage() {
  return (
    <>
      <ProductHero
        badge="DANA Series"
        description="Architecture notes and product thinking about building trustworthy AI-native financial software — deterministic records, explicit capabilities, and AI that stays grounded in what the software actually knows."
        eyebrow="Blog"
        previewItems={[
          { label: "Why AI wrappers aren't enough", href: "#published-articles" },
          { label: "The six layers of DANA", href: "#published-articles" },
          { label: "The capability layer", href: "#published-articles" },
          { label: "AI operations in production", href: "#published-articles" },
        ]}
        previewTitle="Published writing"
        title="Writing about financial clarity and trustworthy AI software."
      />

      <ProductSection
        background="soft"
        description="A technical series about building trustworthy AI-native applications where structured software remains the source of truth and AI becomes the explanation layer."
        eyebrow="Published articles"
        id="published-articles"
        tabIndex={-1}
        title="Architecture writing from building EstateIQ."
      >
        <div className="flex flex-col gap-4">
          {/* Featured first article */}
          <ArticleCard article={featured} index={0} featured />

          {/* Remaining articles */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <ArticleCard article={article} index={i + 1} key={article.slug} />
            ))}
          </div>

          {/* Author credit */}
          <p className="pt-2 text-sm text-text-muted">
            Written by{" "}
            <Link
              className="font-medium text-text-secondary transition hover:text-brand-violet"
              href="https://www.linkedin.com/in/anthony-narine-9ab567245/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Anthony Narine
            </Link>
            {" "}— founder of EstateIQ
          </p>
        </div>
      </ProductSection>
    </>
  );
}
