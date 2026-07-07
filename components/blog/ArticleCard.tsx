import Link from "next/link";

import { cn } from "@/lib/cn";
import type { BlogArticle } from "@/lib/blog";

type ArticleCardProps = {
  article: BlogArticle;
  index: number;
  featured?: boolean;
};

export function ArticleCard({ article, index, featured = false }: ArticleCardProps) {
  const num = String(index + 1).padStart(2, "0");

  if (featured) {
    return (
      <Link
        href={article.href}
        className="group relative flex overflow-hidden rounded-card border border-border bg-background-app-panel/80 p-8 shadow-card-soft transition duration-200 hover:border-brand-violet/50 sm:p-10 lg:items-center lg:gap-10"
      >
        {/* top accent */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-violet/30 transition duration-200 group-hover:bg-brand-violet" />

        {/* big number */}
        <span
          aria-hidden="true"
          className="hidden shrink-0 font-mono text-[7rem] font-bold leading-none text-brand-violet/10 transition duration-200 group-hover:text-brand-violet/20 lg:block"
        >
          {num}
        </span>

        <div className="flex flex-col">
          {/* mobile number */}
          <span className="font-mono text-2xl font-bold text-brand-violet/20 transition duration-200 group-hover:text-brand-violet/40 lg:hidden">
            {num}
          </span>

          <div className="mt-2 flex items-center gap-3 lg:mt-0">
            <span className="font-mono text-[10px] tracking-[0.15em] text-text-faint">
              {article.readingTime}
            </span>
            <span className="h-px w-4 bg-border-soft" />
            <span className="font-mono text-[10px] tracking-[0.15em] text-brand-violet/50">
              Start here
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary transition duration-200 group-hover:text-brand-violet-300 sm:text-3xl">
            {article.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
            {article.subtitle}
          </p>

          <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-violet/60 transition duration-200 group-hover:text-brand-violet">
            Read article
            <svg
              className="size-4 transition duration-200 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={article.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-background-app-panel/80 p-5 shadow-card-soft transition duration-200 hover:border-brand-violet/40 hover:bg-surface-elevated sm:p-6"
    >
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-violet/20 transition duration-200 group-hover:bg-brand-violet/70" />

      {/* number + meta row */}
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-3xl font-bold text-brand-violet/15 transition duration-200 group-hover:text-brand-violet/30">
          {num}
        </span>
        <span className="font-mono text-[10px] tracking-[0.12em] text-text-faint">
          {article.readingTime}
        </span>
      </div>

      <h2 className="mt-4 text-base font-semibold leading-snug tracking-tight text-text-primary transition duration-200 group-hover:text-brand-violet-300">
        {article.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
        {article.subtitle}
      </p>

      <div className="mt-5 flex items-center gap-1 text-xs font-medium text-brand-violet/50 transition duration-200 group-hover:text-brand-violet">
        Read article
        <svg
          className="size-3.5 transition duration-200 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}
