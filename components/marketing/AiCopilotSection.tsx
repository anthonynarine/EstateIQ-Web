import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const groundedSources = [
  "Verified records",
  "Ledger data",
  "Supported documents",
  "Traceable reports",
];

export function AiCopilotSection() {
  return (
    <Section
      className="relative overflow-hidden"
      eyebrow="AI Copilot"
      title="AI is only useful if it understands your business."
      description="EstateIQ Copilot helps explain the records, reports, and supported documents you manage inside the product. Under the hood, AI stays downstream of ledger data and verified records."
    >
      <div className="absolute inset-0 -z-10 bg-radial-violet-glow opacity-60" />
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Card className="p-6" variant="glass">
          <Badge variant="ai">Grounded intelligence</Badge>
          <p className="mt-5 text-sm leading-6 text-text-secondary">
            Copilot is useful because the application proves the facts first.
            AI can explain trends, gaps, and next questions, but confirmed
            records and ledger data remain the foundation.
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {groundedSources.map((source) => (
            <Card className="p-5" key={source} variant="outline">
              <p className="text-sm font-medium text-brand-violet">{source}</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                Context the AI can explain without inventing portfolio facts.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
