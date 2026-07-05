import { Card } from "@/components/ui/Card";

type AiSystemFlowProps = {
  steps: string[];
};

export function AiSystemFlow({ steps }: AiSystemFlowProps) {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <ol className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li className="relative" key={step}>
            <div className="h-full rounded-2xl border border-border-soft bg-surface px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                Step {index + 1}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-text-primary">
                {step}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
