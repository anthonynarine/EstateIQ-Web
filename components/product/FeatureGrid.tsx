import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type FeatureGridItem = {
  title: string;
  description: string;
  id?: string;
  label?: string;
  tone?: "brand" | "ai" | "success" | "warning" | "neutral";
};

type FeatureGridProps = {
  items: FeatureGridItem[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card
          className="scroll-mt-20 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
          id={item.id}
          interactive
          key={item.title}
          tabIndex={item.id ? -1 : undefined}
          variant="glass"
        >
          {item.label && (
            <Badge variant={item.tone ?? "neutral"}>{item.label}</Badge>
          )}
          <h3 className="mt-4 text-lg font-semibold text-text-primary">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
