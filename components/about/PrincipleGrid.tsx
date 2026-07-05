import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type Principle = {
  title: string;
  description: string;
  label: string;
  tone?: "brand" | "ai" | "success" | "warning" | "neutral";
};

type PrincipleGridProps = {
  principles: Principle[];
};

export function PrincipleGrid({ principles }: PrincipleGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((principle) => (
        <Card className="p-5" key={principle.title} variant="glass">
          <Badge variant={principle.tone ?? "neutral"}>{principle.label}</Badge>
          <h3 className="mt-4 text-lg font-semibold text-text-primary">
            {principle.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {principle.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
