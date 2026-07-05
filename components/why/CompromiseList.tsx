import { Card } from "@/components/ui/Card";

type CompromiseItem = {
  title: string;
  description: string;
};

type CompromiseListProps = {
  items: CompromiseItem[];
};

export function CompromiseList({ items }: CompromiseListProps) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <Card className="p-5" key={item.title} variant="outline">
          <h3 className="text-base font-semibold text-text-primary">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
