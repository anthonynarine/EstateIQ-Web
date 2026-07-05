import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type Belief = {
  title: string;
  description: string;
  label: string;
  tone?: "brand" | "ai" | "success" | "warning" | "neutral";
};

type BeliefSystemGridProps = {
  beliefs: Belief[];
};

export function BeliefSystemGrid({ beliefs }: BeliefSystemGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {beliefs.map((belief) => (
        <Card className="p-5" key={belief.title} variant="glass">
          <Badge variant={belief.tone ?? "neutral"}>{belief.label}</Badge>
          <h3 className="mt-4 text-lg font-semibold text-text-primary">
            {belief.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {belief.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
