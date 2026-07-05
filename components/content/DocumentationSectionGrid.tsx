import { Card } from "@/components/ui/Card";

export type DocumentationSection = {
  title: string;
  description: string;
  status: string;
};

type DocumentationSectionGridProps = {
  sections: DocumentationSection[];
};

export function DocumentationSectionGrid({
  sections,
}: DocumentationSectionGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {sections.map((section) => (
        <Card className="p-5 sm:p-6" key={section.title} variant="glass">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-text-primary">
              {section.title}
            </h3>
            <span className="rounded-full border border-border-soft px-3 py-1 text-xs font-medium text-text-muted">
              {section.status}
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            {section.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
