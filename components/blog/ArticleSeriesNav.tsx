import Link from "next/link";

import { danaArticles } from "@/lib/blog";
import type { BlogArticle } from "@/lib/blog";

type ArticleSeriesNavProps = {
  previous?: BlogArticle;
  next?: BlogArticle;
};

function navIndex(article: BlogArticle) {
  return danaArticles.findIndex((a) => a.slug === article.slug) + 1;
}

export function ArticleSeriesNav({ previous, next }: ArticleSeriesNavProps) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="DANA series navigation" className="mt-16 border-t border-border-soft pt-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link
            href={previous.href}
            className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-background-app-panel/80 p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-border-soft transition duration-200 group-hover:bg-brand-violet/50" />
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-text-faint transition duration-200 group-hover:text-text-muted">
              <svg className="size-3.5 transition duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                {String(navIndex(previous)).padStart(2, "0")} — Previous
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold leading-snug text-text-primary">
              {previous.title}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {next && (
          <Link
            href={next.href}
            className="group relative flex flex-col overflow-hidden rounded-card border border-brand-violet/25 bg-brand-violet/[0.04] p-5 transition duration-200 hover:border-brand-violet/50 hover:bg-brand-violet/[0.08]"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-violet/40 transition duration-200 group-hover:bg-brand-violet" />
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-brand-violet/60 transition duration-200 group-hover:text-brand-violet">
              <span>
                {String(navIndex(next)).padStart(2, "0")} — Next
              </span>
              <svg className="size-3.5 transition duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-3 text-sm font-semibold leading-snug text-text-primary">
              {next.title}
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
