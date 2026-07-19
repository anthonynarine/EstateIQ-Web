// # Filename: app/ai-academy/dana/page.tsx
import type { Metadata } from "next";

import { ProductHero } from "@/components/product/ProductHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/ai-academy/dana");

const helpfulAreas = [
  {
    title: "Owner briefings",
    description:
      "Ask for a practical readout of revenue, expenses, NOI, tax readiness, portfolio health, and the first thing to review.",
  },
  {
    title: "Revenue and balances",
    description:
      "Understand collected rent, open tenant balances, missing rent charges, and payments that have not been fully applied.",
  },
  {
    title: "Lease and building health",
    description:
      "Review active leases, vacant units, occupancy, expiring leases, and building-level operating signals.",
  },
  {
    title: "Expenses and NOI",
    description:
      "Summarize spending, identify large categories or vendors, compare periods, and understand what is affecting cash flow.",
  },
  {
    title: "Documents and evidence",
    description:
      "Use documents as supporting context for receipts, invoices, leases, statements, and records that need review.",
  },
  {
    title: "Tax readiness",
    description:
      "See what is organized for Schedule E preparation and what still needs receipts, categorization, or finance profile details.",
  },
];

const dataSources = [
  "Buildings and units",
  "Tenants and leases",
  "Charges, payments, and allocations",
  "Expenses and categories",
  "Receipts, invoices, leases, and statements",
  "Property finance profiles",
  "Reports and tax-readiness summaries",
];

const boundaries = [
  "Dana cannot create, edit, approve, delete, post, allocate, or file records from chat.",
  "Dana does not replace the ledger, reports, accountants, attorneys, or your own review.",
  "Dana will not guess at missing financial facts or turn unsupported questions into confident answers.",
  "Dana can help with tax preparation context, but she does not provide tax, legal, or financial advice.",
];

const betterAnswerTips = [
  "Add every building and unit you actively manage.",
  "Create leases with accurate rent, dates, tenants, and unit context.",
  "Post rent charges from lease ledgers when they are due.",
  "Record payments and allocate them to the charges they satisfy.",
  "Categorize expenses and attach receipts or supporting documents.",
  "Maintain mortgage, property tax, and insurance profiles for each building.",
  "Keep each tax year complete before relying on Schedule E readiness summaries.",
];

const exampleGroups = [
  {
    workflow: "Dashboard",
    questions: [
      "Give me a monthly owner briefing for the whole portfolio.",
      "How is my portfolio doing?",
      "What should I review first?",
    ],
  },
  {
    workflow: "Revenue",
    questions: [
      "Summarize revenue this month.",
      "Who owes rent this month?",
      "Are there any unapplied payments?",
      "Which leases are missing rent charges?",
    ],
  },
  {
    workflow: "Expenses",
    questions: [
      "Summarize expenses this month.",
      "What were my biggest expenses?",
      "Which category drove spending?",
      "How did expenses change from last month?",
    ],
  },
  {
    workflow: "Buildings",
    questions: [
      "How are my buildings doing?",
      "Which building has the most vacancies?",
      "Give me an occupancy breakdown by building.",
    ],
  },
  {
    workflow: "Leases",
    questions: [
      "How are my leases looking?",
      "Show me tenant balances.",
      "Explain this lease ledger.",
      "Are any leases expiring soon?",
    ],
  },
  {
    workflow: "Documents",
    questions: [
      "What documents are missing?",
      "How do receipts connect to expenses?",
      "Why do I need documents for tax readiness?",
    ],
  },
  {
    workflow: "Tax / Schedule E",
    questions: [
      "Summarize my tax readiness.",
      "What is missing before tax export?",
      "Which expenses need receipts?",
      "What does Schedule E readiness mean?",
    ],
  },
];

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-text-secondary">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(52,211,153,0.55)]" />
      <span>{children}</span>
    </li>
  );
}

export default function DanaAcademyPage() {
  return (
    <>
      <ProductHero
        badge="Dana user guide"
        description="Dana helps you understand your rental business from the records already in EstateIQ, with guardrails in place: she is read-only, does not change records, and does not invent missing financial facts."
        eyebrow="AI Academy"
        previewItems={[
          { label: "What Dana is", href: "#what-is-dana" },
          { label: "What Dana can help with", href: "#what-dana-can-help-with" },
          { label: "How Dana uses your data", href: "#how-dana-uses-data" },
          { label: "What Dana cannot do", href: "#what-dana-cannot-do" },
          { label: "Example questions", href: "#example-questions" },
        ]}
        previewTitle="User-facing AI docs"
        title="Meet Dana, the ai brain of your business."
      />

      <ProductSection
        background="soft"
        description="Dana comes from EstateIQ's Deterministic AI-Native Architecture: a way of building AI around verified product records, clear boundaries, and traceable answers."
        eyebrow="What is Dana?"
        id="what-is-dana"
        tabIndex={-1}
        title="Dana is built from deterministic AI-native architecture."
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 sm:p-8" variant="glass">
            <Badge variant="ai">Read-only assistant</Badge>
            <p className="mt-5 text-base leading-7 text-text-secondary">
              Dana reads structured EstateIQ records such as buildings, units,
              leases, charges, payments, allocations, expenses, documents,
              property finance profiles, reports, and tax-readiness summaries.
              Her job is to make those records easier to understand.
            </p>
          </Card>
          <Card className="p-6 sm:p-8" variant="outline">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
              Core rule
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
              Dana explains financial truth. She does not become financial
              truth.
            </p>
          </Card>
        </div>
      </ProductSection>

      <ProductSection
        description="Dana is most useful when a question can be answered from the records and reports EstateIQ already manages."
        eyebrow="What Dana can help with"
        id="what-dana-can-help-with"
        tabIndex={-1}
        title="Ask about operations, money, evidence, and readiness."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {helpfulAreas.map((area) => (
            <Card className="p-5 sm:p-6" key={area.title} variant="glass">
              <h3 className="text-lg font-semibold text-text-primary">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="Better inputs create better answers. Dana does not learn from you in the consumer-AI sense; her answers improve when your EstateIQ records are complete, accurate, and connected."
        eyebrow="How Dana uses your data"
        id="how-dana-uses-data"
        tabIndex={-1}
        title="Dana answers from organized EstateIQ records."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="p-6 sm:p-8" variant="outline">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              Grounding path
            </p>
            <div className="mt-6 grid gap-3">
              {["Records", "Calculations", "Evidence", "Plain answer"].map(
                (step, index) => (
                  <div
                    className="flex items-center gap-3 rounded-xl border border-border-soft bg-surface px-4 py-3"
                    key={step}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 font-mono text-[11px] text-brand-cyan">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                      {step}
                    </span>
                  </div>
                ),
              )}
            </div>
          </Card>
          <Card className="p-6 sm:p-8" variant="glass">
            <h3 className="text-xl font-semibold text-text-primary">
              The records Dana can explain from
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {dataSources.map((source) => (
                <CheckItem key={source}>{source}</CheckItem>
              ))}
            </ul>
          </Card>
        </div>
      </ProductSection>

      <ProductSection
        description="Dana's limits are part of the product design. They keep financial records controlled by EstateIQ workflows and reviewed by the user."
        eyebrow="What Dana cannot do"
        id="what-dana-cannot-do"
        tabIndex={-1}
        title="Dana stays inside clear safety boundaries."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {boundaries.map((boundary) => (
            <Card className="p-5 sm:p-6" key={boundary} variant="outline">
              <p className="text-sm leading-6 text-text-secondary">
                {boundary}
              </p>
            </Card>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="When your record system is clean, Dana has better evidence to explain from and fewer reasons to say there is not enough information."
        eyebrow="How to get better answers"
        id="better-answers"
        tabIndex={-1}
        title="Keep the operating record complete."
      >
        <Card className="p-6 sm:p-8" variant="glass">
          <ul className="grid gap-3 sm:grid-cols-2">
            {betterAnswerTips.map((tip) => (
              <CheckItem key={tip}>{tip}</CheckItem>
            ))}
          </ul>
        </Card>
      </ProductSection>

      <ProductSection
        description="Use specific questions that name the page, workflow, time period, or record type you care about. Dana can also guide you through product concepts when you are not sure what to ask."
        eyebrow="Example questions to ask Dana"
        id="example-questions"
        tabIndex={-1}
        title="Start with the workflow in front of you."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {exampleGroups.map((group) => (
            <Card className="p-5 sm:p-6" key={group.workflow} variant="glass">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-text-primary">
                  {group.workflow}
                </h3>
                <Badge variant="neutral">Examples</Badge>
              </div>
              <div className="mt-5 grid gap-3">
                {group.questions.map((question) => (
                  <blockquote
                    className="rounded-xl border border-brand-violet/20 bg-brand-violet/[0.06] px-4 py-3 text-sm leading-6 text-text-secondary"
                    key={question}
                  >
                    &quot;{question}&quot;
                  </blockquote>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </ProductSection>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Card className="p-6 sm:p-10" variant="glass">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
                  Continue learning
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  See why EstateIQ keeps AI grounded in financial truth.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/ai-academy/grounded-ai" size="lg">
                  Grounded AI
                </Button>
                <Button href="/ai-copilot" size="lg" variant="outline">
                  AI Copilot
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
