import { Section } from "@/components/ui/Section";
import { ChaosToLedger } from "@/components/visualizations/ChaosToLedger";

const problems = [
  {
    headline: "Cash flow is hard to reconcile.",
    body: "The spreadsheet formula that used to work quietly stopped, and nobody noticed for two months.",
  },
  {
    headline: "Open balances get lost.",
    body: "A tenant paid part of March. Did they ever pay the rest? Where would that even be written down?",
  },
  {
    headline: "Receipts live in a phone folder.",
    body: "Disconnected from the expense they belong to, until tax season makes you go find them.",
  },
  {
    headline: "Tax readiness arrives too late.",
    body: "The scramble starts in March, not because the numbers are wrong — because nobody could see them clearly before then.",
  },
  {
    headline: "AI feels risky here.",
    body: "You've seen AI make things up. Financial records are the last place you want a confident guess.",
  },
];

export function ProblemSection() {
  return (
    <Section
      eyebrow="The problem"
      title="Your financial records live in five different places, and none of them talk to each other."
      size="md"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
        <ChaosToLedger />

        <ul className="flex flex-col gap-6">
          {problems.map((p) => (
            <li key={p.headline} className="flex gap-3.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              <p className="text-base leading-7 text-text-secondary">
                <strong className="font-semibold text-text-primary">
                  {p.headline}
                </strong>{" "}
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
