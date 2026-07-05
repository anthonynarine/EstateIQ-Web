import { Card } from "@/components/ui/Card";

export type TrustItem = {
  title: string;
  description: string;
};

type TrustGridProps = {
  items: TrustItem[];
};

export function TrustGrid({ items }: TrustGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card className="p-5" key={item.title} variant="outline">
          <h3 className="text-base font-semibold text-text-primary">
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
