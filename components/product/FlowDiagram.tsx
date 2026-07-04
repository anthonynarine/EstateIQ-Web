import { Card } from "@/components/ui/Card";

type FlowDiagramProps = {
  items: string[];
};

export function FlowDiagram({ items }: FlowDiagramProps) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item}>
          <Card className="h-full p-4" variant="outline">
            <span className="text-xs font-semibold text-brand-cyan">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-medium text-text-primary">{item}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
