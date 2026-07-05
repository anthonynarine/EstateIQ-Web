import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { BlogArticle } from "@/lib/blog";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col p-5 sm:p-6" variant="glass">
      <div className="flex flex-wrap gap-2">
        {[article.category, article.series, article.readingTime, article.status].map(
          (item) => (
            <span
              className="rounded-full border border-border-soft px-3 py-1 text-xs font-medium text-text-muted"
              key={item}
            >
              {item}
            </span>
          ),
        )}
      </div>
      <h2 className="mt-5 text-xl font-semibold tracking-tight text-text-primary">
        {article.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
        {article.subtitle}
      </p>
      <div className="mt-6">
        <Button href={article.href} size="sm" variant="outline">
          Read article
        </Button>
      </div>
    </Card>
  );
}
