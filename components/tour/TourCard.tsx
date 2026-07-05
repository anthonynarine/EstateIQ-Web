import { Card } from "@/components/ui/Card";
import { TourStep, type TourStepData } from "@/components/tour/TourStep";

export type TourCardData = {
  title: string;
  description: string;
  steps: TourStepData[];
};

export function TourCard({ title, description, steps }: TourCardData) {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {description}
      </p>
      <div className="mt-5 grid gap-3">
        {steps.map((step, index) => (
          <TourStep
            description={step.description}
            index={index}
            key={step.title}
            title={step.title}
          />
        ))}
      </div>
    </Card>
  );
}
