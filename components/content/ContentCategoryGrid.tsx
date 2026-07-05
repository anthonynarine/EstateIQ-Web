import { Card } from "@/components/ui/Card";

export type ContentCategory = {
  title: string;
  description: string;
};

type ContentCategoryGridProps = {
  categories: ContentCategory[];
};

export function ContentCategoryGrid({ categories }: ContentCategoryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card className="p-5" key={category.title} variant="outline">
          <h3 className="text-base font-semibold text-text-primary">
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
