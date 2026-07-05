import { Card } from "@/components/ui/Card";

export function BetaBanner() {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
        Beta
      </p>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        EstateIQ is actively evolving. Early users help shape the product by
        showing which financial workflows, reports, and AI-supported questions
        matter most.
      </p>
    </Card>
  );
}
