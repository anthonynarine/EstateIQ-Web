import { Card } from "@/components/ui/Card";

type ContentPlaceholderCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
};

export function ContentPlaceholderCard({
  eyebrow,
  title,
  description,
  meta = "Coming soon",
}: ContentPlaceholderCardProps) {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
          {eyebrow}
        </p>
        <span className="rounded-full border border-border-soft px-3 py-1 text-xs font-medium text-text-muted">
          {meta}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}
