import { Card } from "@/components/ui/Card";

type ComingSoonCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ComingSoonCard({
  eyebrow,
  title,
  description,
}: ComingSoonCardProps) {
  return (
    <Card className="p-6 sm:p-8" variant="glass">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">
        {description}
      </p>
    </Card>
  );
}
