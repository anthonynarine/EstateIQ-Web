import { Card } from "@/components/ui/Card";

const workflow = [
  {
    title: "Upload",
    description: "Add supported documents such as receipts, invoices, and leases.",
  },
  {
    title: "Connect",
    description: "Connect documents to property, lease, expense, or vendor context.",
  },
  {
    title: "Review",
    description: "Inspect document details before creating financial records.",
  },
  {
    title: "Confirm",
    description: "User-confirmed fields become part of the financial workflow.",
  },
  {
    title: "Connect",
    description: "Preserve connected evidence beside the record it supports.",
  },
];

export function DocumentWorkflow() {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {workflow.map((step, index) => (
        <li key={step.title}>
          <Card className="h-full p-4" variant="outline">
            <span className="text-xs font-semibold text-brand-amber">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-base font-semibold text-text-primary">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {step.description}
            </p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
