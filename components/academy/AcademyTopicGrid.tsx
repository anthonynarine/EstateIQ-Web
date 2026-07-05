import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type AcademyTopic = {
  title: string;
  description: string;
  href: string;
  label: string;
};

type AcademyTopicGridProps = {
  topics: AcademyTopic[];
};

export function AcademyTopicGrid({ topics }: AcademyTopicGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {topics.map((topic) => (
        <Card className="flex h-full flex-col p-5 sm:p-6" key={topic.href}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            {topic.label}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-text-primary">
            {topic.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
            {topic.description}
          </p>
          <div className="mt-6">
            <Button href={topic.href} size="sm" variant="outline">
              Read topic
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
