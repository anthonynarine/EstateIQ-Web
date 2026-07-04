import { Card } from "@/components/ui/Card";

type ComparisonRow = {
  oldWay: string;
  estateIq: string;
};

type ComparisonTableProps = {
  rows: ComparisonRow[];
};

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <Card className="overflow-hidden" variant="glass">
      <div className="grid grid-cols-2 border-b border-border-soft bg-surface-elevated px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
        <span>Common pattern</span>
        <span>EstateIQ approach</span>
      </div>
      <div className="divide-y divide-border-soft">
        {rows.map((row) => (
          <div className="grid gap-4 px-4 py-4 sm:grid-cols-2" key={row.oldWay}>
            <p className="text-sm leading-6 text-text-secondary">
              {row.oldWay}
            </p>
            <p className="text-sm leading-6 text-text-primary">
              {row.estateIq}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
