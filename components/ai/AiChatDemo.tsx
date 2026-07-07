"use client";

import { useEffect, useState } from "react";

type Exchange = {
  question: string;
  answer: string;
  source: string;
  confidence: "high" | "low";
  docLabel?: string;
};

const EXCHANGES: Exchange[] = [
  {
    question: "What's the interest rate on the Maple Court mortgage?",
    answer:
      "The Maple Court mortgage shows a fixed rate of 4.75% APR with a remaining balance of $284,000 — pulled from the statement you uploaded in March 2024.",
    source: "mortgage_maple_court.pdf · extracted field",
    confidence: "high",
    docLabel: "mortgage_maple_court.pdf",
  },
  {
    question: "Which building has the most vacancies right now?",
    answer:
      "Maple Court has 2 of 6 units vacant this month — the most of any building in your portfolio. Everywhere else is fully occupied.",
    source: "building health selector",
    confidence: "high",
  },
  {
    question: "Did unit 4 pay their April rent?",
    answer:
      "I don't have enough posted charge and payment history for that unit to answer this reliably yet. I'd rather tell you that than guess.",
    source: "insufficient data",
    confidence: "low",
  },
];

type Phase = "typing-q" | "thinking" | "typing-a" | "pause";

const Q_SPEED = 36;
const A_SPEED = 14;
const THINKING_DELAY = 850;
const PAUSE_DELAY = 2800;

export function AiChatDemo() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing-q");
  const [qChars, setQChars] = useState(0);
  const [aChars, setAChars] = useState(0);
  const [prev, setPrev] = useState<Exchange | null>(null);

  const exchange = EXCHANGES[idx % EXCHANGES.length];

  // typing question
  useEffect(() => {
    if (phase !== "typing-q") return;
    if (qChars < exchange.question.length) {
      const t = setTimeout(() => setQChars((n) => n + 1), Q_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("thinking"), 400);
    return () => clearTimeout(t);
  }, [phase, qChars, exchange.question.length]);

  // thinking → typing answer
  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => setPhase("typing-a"), THINKING_DELAY);
    return () => clearTimeout(t);
  }, [phase]);

  // typing answer
  useEffect(() => {
    if (phase !== "typing-a") return;
    if (aChars < exchange.answer.length) {
      const t = setTimeout(() => setAChars((n) => n + 1), A_SPEED);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("pause"), 400);
    return () => clearTimeout(t);
  }, [phase, aChars, exchange.answer.length]);

  // pause → next exchange
  useEffect(() => {
    if (phase !== "pause") return;
    const t = setTimeout(() => {
      setPrev(exchange);
      setIdx((i) => i + 1);
      setQChars(0);
      setAChars(0);
      setPhase("typing-q");
    }, PAUSE_DELAY);
    return () => clearTimeout(t);
  }, [phase, exchange]);

  const questionVisible = qChars > 0;
  const answerVisible = phase === "typing-a" || phase === "pause";

  return (
    <div className="relative h-72 overflow-hidden rounded-card border border-border bg-background-app-soft shadow-card-soft">
      {/* top fade — masks old content scrolling out */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-background-app-soft to-transparent" />

      <div className="flex h-full flex-col justify-end gap-3 p-5">

      {/* previous exchange — faded */}
      {prev && (
        <div className="flex flex-col gap-2 opacity-35 transition-opacity duration-500">
          <div className="ml-auto max-w-[88%] rounded-2xl bg-surface-elevated px-4 py-3 text-sm text-text-primary">
            {prev.question}
          </div>
          <div className="max-w-[88%] rounded-2xl border border-brand-violet/20 bg-brand-violet/8 px-4 py-3">
            <p className="text-sm text-text-secondary">{prev.answer}</p>
            <span className="mt-2 block font-mono text-[10px] text-brand-violet">
              source: {prev.source} · confidence: {prev.confidence}
            </span>
          </div>
        </div>
      )}

      {/* current question */}
      {questionVisible && (
        <div className="ml-auto max-w-[88%] rounded-2xl bg-surface-elevated px-4 py-3 text-sm text-text-primary">
          {exchange.question.slice(0, qChars)}
          {phase === "typing-q" && (
            <span className="ml-px inline-block w-px animate-pulse bg-text-primary align-middle">
              &nbsp;
            </span>
          )}
        </div>
      )}

      {/* thinking dots */}
      {phase === "thinking" && (
        <div className="max-w-[88%] rounded-2xl border border-brand-violet/20 bg-brand-violet/8 px-4 py-3">
          <ThinkingDots />
        </div>
      )}

      {/* answer */}
      {answerVisible && (
        <div className="max-w-[88%] rounded-2xl border border-brand-violet/20 bg-brand-violet/8 px-4 py-3">
          {exchange.docLabel && (
            <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-md border border-brand-violet/25 bg-brand-violet/10 px-2 py-1">
              <svg
                className="size-3 shrink-0 text-brand-violet"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-[10px] text-brand-violet">
                {exchange.docLabel}
              </span>
            </div>
          )}
          <p className="text-sm text-text-secondary">
            {exchange.answer.slice(0, aChars)}
            {phase === "typing-a" && (
              <span className="ml-px inline-block w-px animate-pulse bg-text-secondary align-middle">
                &nbsp;
              </span>
            )}
          </p>
          {phase === "pause" && (
            <span className="mt-2 block font-mono text-[10px] text-brand-violet">
              source: {exchange.source} · confidence: {exchange.confidence}
            </span>
          )}
        </div>
      )}

      {/* fail-closed note — only on the third exchange */}
      {phase === "pause" && exchange.confidence === "low" && (
        <div className="rounded-xl border border-dashed border-border px-4 py-3">
          <p className="font-mono text-xs text-text-muted">
            When Copilot can&apos;t answer safely from your records, it says
            so — it doesn&apos;t guess.
          </p>
        </div>
      )}

      </div>
    </div>
  );
}

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1.5 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block size-1.5 animate-bounce rounded-full bg-brand-violet/50"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
