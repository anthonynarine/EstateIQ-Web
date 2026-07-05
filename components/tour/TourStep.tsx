import { Card } from "@/components/ui/Card";

export type TourStepData = {
  title: string;
  description: string;
};

type TourStepProps = TourStepData & {
  index: number;
};

export function TourStep({ title, description, index }: TourStepProps) {
  return (
    <Card className="p-4" variant="outline">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
        Step {index + 1}
      </p>
      <h4 className="mt-3 text-base font-semibold text-text-primary">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}
