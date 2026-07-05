import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type FeatureCategory = {
  title: string;
  description: string;
  items: string[];
  tone?: "brand" | "ai" | "success" | "warning" | "neutral";
};

type FeatureCategoryGridProps = {
  categories: FeatureCategory[];
};

export function FeatureCategoryGrid({ categories }: FeatureCategoryGridProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {categories.map((category) => (
        <Card className="p-5 sm:p-6" key={category.title} variant="glass">
          <Badge variant={category.tone ?? "neutral"}>{category.title}</Badge>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            {category.description}
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {category.items.map((item) => (
              <li
                className="rounded-2xl border border-border-soft bg-surface px-3 py-2 text-sm text-text-secondary"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
