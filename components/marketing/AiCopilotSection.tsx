import { AiChatDemo } from "@/components/ai/AiChatDemo";
import { Section } from "@/components/ui/Section";

const copilotPoints = [
  {
    index: "01",
    heading: "It reads your records, not the internet.",
    body: "Every answer is grounded in the ledger, expenses, documents, and reports already inside your organization.",
  },
  {
    index: "02",
    heading: "Deterministic tools compute the facts first.",
    body: "Numbers come from the same selectors that power your reports — never invented by a language model.",
  },
  {
    index: "03",
    heading: "The AI presents. It doesn't decide.",
    body: "Once the facts are pulled, the AI's only job is to explain them clearly in plain language.",
  },
  {
    index: "04",
    heading: "It never touches your ledger.",
    body: "Copilot is read-only. It cannot create or change a charge, payment, or expense.",
  },
];

export function AiCopilotSection() {
  return (
    <Section
      className="relative overflow-hidden"
      description="EstateIQ Copilot answers from the records, reports, and supported documents you manage inside the product. When it can't answer safely, it says so."
      eyebrow="AI Copilot"
      id="ai-copilot"
      title="AI that only answers from your actual records."
    >
      <div className="absolute inset-0 -z-10 bg-radial-violet-glow opacity-50" />

      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

        {/* Left — animated chat demo */}
        <AiChatDemo />

        {/* Right — copilot points */}
        <ul className="flex flex-col gap-5">
          {copilotPoints.map((point) => (
            <li className="flex gap-4" key={point.index}>
              <span className="w-6 shrink-0 font-mono text-sm text-brand-violet">
                {point.index}
              </span>
              <p className="text-sm leading-6 text-text-secondary">
                <span className="font-medium text-text-primary">
                  {point.heading}
                </span>{" "}
                {point.body}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
}
