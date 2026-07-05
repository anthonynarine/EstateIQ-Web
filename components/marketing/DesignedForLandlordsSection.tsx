import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const audiences = [
  "Independent owners",
  "Family portfolios",
  "1-50 units",
  "Small operators growing into better financial discipline",
];

export function DesignedForLandlordsSection() {
  return (
    <Section
      background="soft"
      eyebrow="Designed for small landlords"
      title="Enterprise-grade financial intelligence for the portfolio you actually own."
      description="EstateIQ is built for owners who need clear records, reporting, documents, and AI without adopting a heavy institutional platform."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience) => (
          <Card className="p-5" key={audience} variant="glass">
            <p className="text-sm font-medium text-text-primary">{audience}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
