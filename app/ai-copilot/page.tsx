import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function AiCopilotPage() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
          AI Copilot
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          AI grounded in verified records, ledger data, and documents.
        </h1>
        <p className="mt-6 text-base leading-7 text-text-secondary sm:text-lg">
          This placeholder will become the grounded AI Copilot page in a later
          phase.
        </p>
        <Link
          className="mt-8 inline-flex rounded-button text-sm font-medium text-brand-cyan transition hover:text-brand-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
          href="/"
        >
          Back home
        </Link>
      </div>
    </Container>
  );
}
