import { Card } from "@/components/ui/Card";

export type LearningCategory = {
  title: string;
  description: string;
};

type LearningCategoryGridProps = {
  categories: LearningCategory[];
};

export function LearningCategoryGrid({
  categories,
}: LearningCategoryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <Card className="p-5" key={category.title} variant="glass">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
            Articles coming soon
          </p>
          <h3 className="mt-4 text-lg font-semibold text-text-primary">
            {category.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {category.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
