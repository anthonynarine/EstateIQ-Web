import { AiChatDemo } from "@/components/ai/AiChatDemo";
import { Section } from "@/components/ui/Section";

const copilotPoints = [
  {
    index: "01",
    heading: "It starts with your numbers.",
    body: "Copilot uses the ledger, expenses, documents, and reports already connected to your portfolio.",
  },
  {
    index: "02",
    heading: "The facts are calculated before AI explains them.",
    body: "Numbers come from the same reliable calculations that power your reports—not from a language model's best guess.",
  },
  {
    index: "03",
    heading: "It stays out of your books.",
    body: "Copilot can explain what it finds, but it cannot change a charge, payment, or expense.",
  },
];

export function AiCopilotSection() {
  return (
    <Section
      className="relative overflow-hidden"
      description="See what is owed, understand where the money went, or prepare for a conversation—without digging through spreadsheets and folders. It’s the tool you won’t want to manage without."
      eyebrow="Your business’s personal AI assistant"
      id="ai-copilot"
      title="Your entire portfolio. One question away."
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
