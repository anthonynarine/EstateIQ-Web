import { SystemNode } from "@/components/visualizations/SystemNode";
import { VisualizationShell } from "@/components/visualizations/VisualizationShell";

const systemNodes = [
  {
    title: "Portfolio basics",
    description: "Manage the operating structure of a small rental business.",
    tone: "brand" as const,
  },
  {
    title: "Buildings",
    description: "Properties create the reporting and decision spine.",
    tone: "brand" as const,
  },
  {
    title: "Units",
    description: "Rentable spaces connect occupancy and lease context.",
    tone: "brand" as const,
  },
  {
    title: "Leases",
    description: "Lease records define occupancy and rent obligations.",
    tone: "neutral" as const,
  },
  {
    title: "Ledger",
    description: "Know where every dollar came from through ledger-first records.",
    tone: "success" as const,
  },
  {
    title: "Expenses",
    description: "Owner-side spend becomes structured financial context.",
    tone: "neutral" as const,
  },
  {
    title: "Documents",
    description: "Supported documents become connected evidence and context.",
    tone: "ai" as const,
  },
  {
    title: "Reports",
    description: "Reports are trusted because they come from records.",
    tone: "brand" as const,
  },
  {
    title: "AI Copilot",
    description: "Ask plain-English questions grounded in the information you manage.",
    tone: "ai" as const,
  },
];

export function ConnectedSystemMap() {
  return (
    <VisualizationShell
      aria-label="Connected EstateIQ portfolio system map"
      description="Each part of the product helps explain the next: the portfolio, the money records, the documents, the reports, and the AI explanation."
      title="One place for the rental business to make sense."
      tone="brand"
    >
      <ol className="relative grid gap-3 md:grid-cols-3">
        <span
          aria-hidden="true"
          className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-brand-cyan/50 via-brand-emerald/45 to-brand-violet/50 md:left-1/2 md:top-1/2 md:block md:h-px md:w-[calc(100%-3rem)] md:-translate-x-1/2 md:-translate-y-1/2"
        />
        {systemNodes.map((node, index) => (
          <li className="relative" key={node.title}>
            <SystemNode
              description={node.description}
              index={index + 1}
              title={node.title}
              tone={node.tone}
            />
          </li>
        ))}
      </ol>
    </VisualizationShell>
  );
}
