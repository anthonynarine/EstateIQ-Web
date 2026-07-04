import { Card } from "@/components/ui/Card";

const workflow = [
  "Portfolio Data",
  "Ledger",
  "Documents",
  "Reports",
  "Analyst Tools",
  "AI Copilot",
];

export function AnalystWorkflowDiagram() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
      {workflow.map((item, index) => (
        <li key={item}>
          <Card className="h-full p-4" variant="outline">
            <span className="text-xs font-semibold text-brand-violet">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-medium text-text-primary">{item}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
