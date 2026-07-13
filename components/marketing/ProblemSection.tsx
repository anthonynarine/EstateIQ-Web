import { Section } from "@/components/ui/Section";
import { ChaosToLedger } from "@/components/visualizations/ChaosToLedger";

const problems = [
  {
    headline: "The full picture is hard to see.",
    body: "Rent, expenses, balances, and documents are scattered across tools and folders.",
  },
  {
    headline: "Important details get missed.",
    body: "Partial payments and open balances are easy to lose when records depend on manual updates.",
  },
  {
    headline: "Answers take too much work.",
    body: "Even a simple question can mean checking a spreadsheet, bank activity, and a folder of receipts.",
  },
];

export function ProblemSection() {
  return (
    <Section
      eyebrow="The problem"
      title="Managing rentals should not mean piecing the truth together."
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
