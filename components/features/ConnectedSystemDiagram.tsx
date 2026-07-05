import { Card } from "@/components/ui/Card";

const systemLinks = [
  {
    title: "Properties feed leases",
    description:
      "Buildings and units create the structure that occupancy and rent records attach to.",
  },
  {
    title: "Leases feed the ledger",
    description:
      "Lease terms explain what should be charged and where balances belong.",
  },
  {
    title: "Expenses and documents support reporting",
    description:
      "Operating spend and evidence connect to properties, units, leases, and categories.",
  },
  {
    title: "Reports give AI context",
    description:
      "AI explanations are grounded in deterministic records and reporting outputs.",
  },
];

export function ConnectedSystemDiagram() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {systemLinks.map((link, index) => (
        <Card className="h-full p-5" key={link.title} variant="outline">
          <span className="text-xs font-semibold text-brand-cyan">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-base font-semibold text-text-primary">
            {link.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {link.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
