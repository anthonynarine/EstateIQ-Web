import { Card } from "@/components/ui/Card";

export function BetaCallout() {
  return (
    <Card className="p-6 sm:p-8" variant="glass">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
        Early access
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
        Help shape a financial operating system for small landlords.
      </h3>
      <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">
        Early feedback helps EstateIQ decide which workflows, reports, and
        analyst tools should be improved next. AI coverage can expand through
        reviewed product work informed by the Gap Tool process, not by allowing
        AI to change financial coverage on its own.
      </p>
    </Card>
  );
}
