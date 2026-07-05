import { Card } from "@/components/ui/Card";

export type ChangelogEntry = {
  phase: string;
  title: string;
  description: string;
};

type ChangelogTimelineProps = {
  entries: ChangelogEntry[];
};

export function ChangelogTimeline({ entries }: ChangelogTimelineProps) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-4 top-0 hidden h-full w-px bg-border-soft sm:block"
      />
      <ol className="grid gap-4">
        {entries.map((entry) => (
          <li className="relative sm:pl-12" key={entry.phase}>
            <span
              aria-hidden="true"
              className="absolute left-[0.5625rem] top-7 hidden size-3 rounded-full border border-brand-cyan bg-background-app sm:block"
            />
            <Card className="p-5 sm:p-6" variant="glass">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
                {entry.phase}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">
                {entry.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {entry.description}
              </p>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
