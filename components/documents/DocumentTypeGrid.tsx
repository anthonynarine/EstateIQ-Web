import { Card } from "@/components/ui/Card";

const documentTypes = [
  "Receipts",
  "Invoices",
  "Lease documents",
  "Maintenance records",
  "Tax-supporting files",
];

export function DocumentTypeGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {documentTypes.map((type) => (
        <Card className="p-5" key={type} variant="glass">
          <p className="text-sm font-medium text-text-primary">{type}</p>
        </Card>
      ))}
    </div>
  );
}
