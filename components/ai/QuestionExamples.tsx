import { Card } from "@/components/ui/Card";

const questions = [
  "Why did expenses increase this month?",
  "Which buildings are underperforming?",
  "Summarize this month's portfolio.",
  "How much rent is outstanding?",
];

export function QuestionExamples() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {questions.map((question) => (
        <Card className="p-5" key={question} variant="glass">
          <p className="text-sm font-medium text-text-primary">{question}</p>
        </Card>
      ))}
    </div>
  );
}
