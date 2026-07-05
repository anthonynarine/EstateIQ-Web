import { Card } from "@/components/ui/Card";

type ComparisonItem = {
  generic: string;
  estateIq: string;
};

type ComparisonGridProps = {
  items: ComparisonItem[];
};

export function ComparisonGrid({ items }: ComparisonGridProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="p-5 sm:p-6" variant="outline">
        <h3 className="text-lg font-semibold text-text-primary">
          Generic AI
        </h3>
        <div className="mt-5 grid gap-3">
          {items.map((item) => (
            <p
              className="rounded-2xl border border-border-soft bg-background-app-panel px-4 py-3 text-sm leading-6 text-text-secondary"
              key={item.generic}
            >
              {item.generic}
            </p>
          ))}
        </div>
      </Card>
      <Card className="p-5 sm:p-6" variant="glass">
        <h3 className="text-lg font-semibold text-text-primary">
          EstateIQ grounded AI
        </h3>
        <div className="mt-5 grid gap-3">
          {items.map((item) => (
            <p
              className="rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 px-4 py-3 text-sm leading-6 text-text-secondary"
              key={item.estateIq}
            >
              {item.estateIq}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
}
