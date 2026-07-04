import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const groundedSources = [
  "Verified records",
  "Ledger data",
  "Documents",
  "Deterministic reports",
];

export function AiCopilotSection() {
  return (
    <Section
      className="relative overflow-hidden"
      eyebrow="AI Copilot"
      title="AI that helps interpret your financial data, not replace it."
      description="EstateIQ's AI is positioned as an explanation layer over verified records, ledger data, documents, and reporting context."
    >
      <div className="absolute inset-0 -z-10 bg-radial-violet-glow opacity-60" />
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Card className="p-6" variant="glass">
          <Badge variant="ai">Grounded intelligence</Badge>
          <p className="mt-5 text-sm leading-6 text-text-secondary">
            Copilot should be trusted because the application proves the facts
            first. AI can help explain trends, gaps, and next questions, but the
            ledger and source records remain the foundation.
          </p>
        </Card>
        <div className="grid gap-3 sm:grid-cols-2">
          {groundedSources.map((source) => (
            <Card className="p-5" key={source} variant="outline">
              <p className="text-sm font-medium text-brand-violet">{source}</p>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                Context the AI can reference without inventing portfolio facts.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
