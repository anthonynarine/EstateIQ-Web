import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { BlogArticle } from "@/lib/blog";

type ArticleSeriesNavProps = {
  previous?: BlogArticle;
  next?: BlogArticle;
};

export function ArticleSeriesNav({ previous, next }: ArticleSeriesNavProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav aria-label="DANA series navigation" className="mt-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Card className="p-5" variant="outline">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Previous
            </p>
            <h2 className="mt-3 text-base font-semibold text-text-primary">
              {previous.title}
            </h2>
            <div className="mt-4">
              <Button href={previous.href} size="sm" variant="outline">
                Read previous
              </Button>
            </div>
          </Card>
        ) : (
          <div />
        )}
        {next && (
          <Card className="p-5" variant="glass">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              Next
            </p>
            <h2 className="mt-3 text-base font-semibold text-text-primary">
              {next.title}
            </h2>
            <div className="mt-4">
              <Button href={next.href} size="sm">
                Read next
              </Button>
            </div>
          </Card>
        )}
      </div>
    </nav>
  );
}
