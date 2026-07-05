import type { BlogArticle } from "@/lib/blog";

type ArticleHeaderProps = {
  article: BlogArticle;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="border-b border-border-soft pb-10">
      <div className="flex flex-wrap gap-2">
        {[article.category, article.series, article.readingTime].map((item) => (
          <span
            className="rounded-full border border-border-soft bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
        {article.title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
        {article.subtitle}
      </p>
    </header>
  );
}
