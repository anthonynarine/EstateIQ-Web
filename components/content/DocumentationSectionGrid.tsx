// # Filename: components/content/DocumentationSectionGrid.tsx
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export type DocumentationSection = {
  title: string;
  description: string;
  status: string;
  href?: string;
  actionLabel?: string;
  statusVariant?: "ai" | "brand" | "neutral";
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
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium",
                section.statusVariant === "ai" &&
                  "border-brand-violet/25 bg-brand-violet/10 text-brand-violet",
                section.statusVariant === "brand" &&
                  "border-brand-cyan/25 bg-brand-cyan/10 text-brand-cyan",
                (!section.statusVariant ||
                  section.statusVariant === "neutral") &&
                  "border-border-soft text-text-muted",
              )}
            >
              {section.status}
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-text-secondary">
            {section.description}
          </p>
          {section.href && (
            <div className="mt-6">
              <Button href={section.href} size="sm" variant="outline">
                {section.actionLabel ?? "Open section"}
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
