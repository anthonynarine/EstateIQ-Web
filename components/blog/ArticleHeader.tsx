import Link from "next/link";

import { danaArticles } from "@/lib/blog";
import type { BlogArticle } from "@/lib/blog";

type ArticleHeaderProps = {
  article: BlogArticle;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const seriesIndex = danaArticles.findIndex((a) => a.slug === article.slug);
  const num = String(seriesIndex + 1).padStart(2, "0");
  const total = String(danaArticles.length).padStart(2, "0");

  return (
    <header className="pb-10">
      {/* Series position + reading time */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-semibold text-brand-violet">
          {num}
          <span className="text-text-faint"> / {total}</span>
        </span>
        <span className="h-px flex-1 bg-border-soft" />
        <span className="font-mono text-xs tracking-[0.12em] text-text-faint">
          {article.readingTime}
        </span>
      </div>

      {/* Series label + author */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet/60">
          {article.series} Series — {article.category}
        </p>
        <span className="text-border-strong hidden sm:block">·</span>
        <Link
          className="group flex items-center gap-1 text-xs text-text-muted transition duration-150 hover:text-brand-violet"
          href="https://www.linkedin.com/in/anthony-narine-9ab567245/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Anthony Narine
          <svg
            className="size-3 opacity-50 transition duration-150 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Title */}
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
        {article.title}
      </h1>

      {/* Subtitle */}
      <p className="mt-5 text-lg leading-8 text-text-secondary">
        {article.subtitle}
      </p>

      {/* Divider */}
      <div className="mt-10 h-px bg-gradient-to-r from-brand-violet/40 via-border-soft to-transparent" />
    </header>
  );
}
