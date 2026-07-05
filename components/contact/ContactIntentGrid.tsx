import { Card } from "@/components/ui/Card";

const intents = [
  {
    title: "Join the beta",
    description: "Raise your hand for early access as the beta flow opens.",
  },
  {
    title: "Ask a product question",
    description: "Clarify whether EstateIQ fits your portfolio and workflow.",
  },
  {
    title: "Request a demo",
    description: "Learn how EstateIQ explains records, ledger data, and reports.",
  },
  {
    title: "Security or trust question",
    description: "Ask about data boundaries, documents, and trust posture.",
  },
  {
    title: "Partnership or press",
    description: "Reach out about relevant partnership or media inquiries.",
  },
];

export function ContactIntentGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {intents.map((intent) => (
        <Card className="p-5" key={intent.title} variant="outline">
          <h3 className="text-base font-semibold text-text-primary">
            {intent.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {intent.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
