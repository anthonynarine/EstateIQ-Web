import type { ReactNode } from "react";

import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleSeriesNav } from "@/components/blog/ArticleSeriesNav";
import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { Container } from "@/components/ui/Container";
import type { BlogArticle } from "@/lib/blog";

type ArticleLayoutProps = {
  article: BlogArticle;
  children: ReactNode;
  next?: BlogArticle;
  previous?: BlogArticle;
};

export function ArticleLayout({
  article,
  children,
  next,
  previous,
}: ArticleLayoutProps) {
  return (
    <>
      <article className="relative py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-radial-violet-glow opacity-30" />
        <Container>
          <div className="mx-auto max-w-3xl">
            <ArticleHeader article={article} />
            <div className="article-body mt-10">{children}</div>
            <ArticleSeriesNav next={next} previous={previous} />
          </div>
        </Container>
      </article>
      <FinalCTASection
        description="Read more about grounded AI, deterministic financial records, and the architecture behind EstateIQ."
        secondaryHref="/ai-academy"
        secondaryLabel="AI Academy"
        title="Explore the system behind EstateIQ."
      />
    </>
  );
}
