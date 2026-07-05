import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/the-six-layers-of-dana",
);

const article = getDanaArticle("the-six-layers-of-dana");
const navigation = getDanaArticleNavigation(article.slug);

export default function TheSixLayersOfDanaPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>In the previous articles, I explained the engineering problems that led to DANA.</p>
      <p>I didn&apos;t set out to create an architecture.</p>
      <p>I set out to build software that people could trust.</p>
      <p>Over time, a consistent pattern emerged.</p>
      <p>
        Regardless of the feature I was building, the application naturally
        organized itself into six layers.
      </p>
      <p>Each layer had a clear responsibility.</p>
      <p>Each layer solved a different problem.</p>
      <p>
        And together they created an application where AI could enhance the user
        experience without becoming the application&apos;s source of truth.
      </p>
      <p>This is DANA.</p>

      <h2>The Architecture</h2>
      <CodeDiagram>{`                        User
                          │
                          ▼
               Conversation Layer
                          │
                          ▼
                Capability Layer
                          │
                          ▼
                  Domain Layer
                          │
                          ▼
                   Truth Layer
                          │
                          ▲
                    AI Explanation
                          │
                          ▲
                 Intelligence Layer`}</CodeDiagram>
      <p>The diagram is intentionally simple.</p>
      <p>The important idea isn&apos;t the direction of the arrows.</p>
      <p>It&apos;s that every layer has exactly one responsibility.</p>

      <h2>Layer 1 — Truth</h2>
      <p>Everything begins with structured truth.</p>
      <p>In EstateIQ that includes:</p>
      <ul>
        <li>Buildings</li>
        <li>Units</li>
        <li>Leases</li>
        <li>Charges</li>
        <li>Payments</li>
        <li>Allocations</li>
        <li>Expenses</li>
        <li>Documents</li>
        <li>Reports</li>
      </ul>
      <p>These records are the foundation of the application.</p>
      <p>
        Nothing above this layer should invent or modify truth without going
        through deterministic business logic.
      </p>
      <p>The AI never owns this layer.</p>

      <h2>Layer 2 — Domain</h2>
      <p>This layer contains the application&apos;s business knowledge.</p>
      <p>Examples include:</p>
      <ul>
        <li>services</li>
        <li>selectors</li>
        <li>validation</li>
        <li>authorization</li>
        <li>ledger calculations</li>
        <li>document confirmation</li>
        <li>reporting rules</li>
      </ul>
      <p>If the Truth Layer answers:</p>
      <blockquote>&quot;What data exists?&quot;</blockquote>
      <p>The Domain Layer answers:</p>
      <blockquote>&quot;How does the business work?&quot;</blockquote>
      <p>Every important business rule belongs here.</p>
      <p>Not inside prompts.</p>

      <h2>Layer 3 — Capability</h2>
      <p>This is where DANA begins to differ from many AI architectures.</p>
      <p>
        Instead of exposing raw database queries to the language model, the
        application exposes capabilities.
      </p>
      <p>A capability is a deterministic unit of knowledge.</p>
      <p>For example:</p>
      <CodeDiagram>{`Revenue Analysis

Expense Analysis

Portfolio Health

Document Intelligence

Delinquency Analysis

Cash Flow Summary`}</CodeDiagram>
      <p>Each capability:</p>
      <ul>
        <li>has one responsibility</li>
        <li>is independently testable</li>
        <li>produces structured output</li>
        <li>can evolve without affecting other capabilities</li>
      </ul>
      <p>Conversation doesn&apos;t call the database.</p>
      <p>Conversation calls capabilities.</p>

      <h2>Layer 4 — Conversation</h2>
      <p>This layer exists entirely for people.</p>
      <p>Its responsibilities include:</p>
      <ul>
        <li>understanding intent</li>
        <li>maintaining context</li>
        <li>selecting capabilities</li>
        <li>coordinating responses</li>
        <li>handling follow-up questions</li>
      </ul>
      <p>Notice what it doesn&apos;t do.</p>
      <p>It doesn&apos;t calculate balances.</p>
      <p>It doesn&apos;t determine permissions.</p>
      <p>It doesn&apos;t apply business rules.</p>
      <p>
        Conversation is simply another interface to the application&apos;s
        existing capabilities.
      </p>

      <h2>Layer 5 — AI</h2>
      <p>The language model finally appears here.</p>
      <p>Its responsibilities are intentionally narrow.</p>
      <p>It can:</p>
      <ul>
        <li>explain</li>
        <li>summarize</li>
        <li>compare</li>
        <li>coach</li>
        <li>clarify</li>
        <li>translate structured results into natural language</li>
      </ul>
      <p>It should never become another source of business logic.</p>
      <p>The application has already done the difficult work.</p>
      <p>The AI makes the results understandable.</p>

      <h2>Layer 6 — Intelligence</h2>
      <p>The final layer is responsible for continuous improvement.</p>
      <p>Examples include:</p>
      <ul>
        <li>Gap Tool</li>
        <li>Capability Registry</li>
        <li>AI Operations</li>
        <li>Prompt Versioning</li>
        <li>Coverage Metrics</li>
        <li>Evaluation</li>
      </ul>
      <p>This layer doesn&apos;t improve the language model.</p>
      <p>It improves the application.</p>
      <p>
        Every unanswered question becomes an opportunity to expand the
        application&apos;s capabilities.
      </p>
      <p>
        Over time, the software becomes more knowledgeable because engineers
        continue teaching it—not because the language model becomes better at
        guessing.
      </p>

      <h2>Why layering matters</h2>
      <p>One lesson became obvious while building EstateIQ.</p>
      <p>
        The moment responsibilities start leaking between layers, complexity
        grows rapidly.
      </p>
      <p>If prompts contain business rules, they&apos;re difficult to test.</p>
      <p>
        If AI calculates financial balances, correctness becomes difficult to
        guarantee.
      </p>
      <p>
        If permissions are enforced inside conversations, security becomes
        harder to reason about.
      </p>
      <p>Each layer exists to protect the others.</p>
      <p>
        That separation makes the application easier to understand, easier to
        maintain, and easier to trust.
      </p>

      <h2>DANA is not tied to finance</h2>
      <p>EstateIQ is simply where DANA emerged.</p>
      <p>The pattern itself is much broader.</p>
      <p>Healthcare systems can replace financial records with clinical records.</p>
      <p>Insurance platforms can replace leases with policies.</p>
      <p>
        Manufacturing systems can replace buildings with production lines.
      </p>
      <p>
        The layers remain remarkably similar because the underlying problem is
        the same.
      </p>
      <p>Every high-trust application has structured truth.</p>
      <p>Every high-trust application has business logic.</p>
      <p>
        Every high-trust application benefits from conversational access to
        deterministic knowledge.
      </p>

      <h2>Looking ahead</h2>
      <p>We&apos;ve now explored the architecture itself.</p>
      <p>The next question is one of implementation.</p>
      <p>How does a user question actually travel through DANA?</p>
      <p>How is a capability selected?</p>
      <p>How does the application know when it cannot answer a question?</p>
      <p>
        And how does the Gap Tool turn those unanswered questions into future
        capabilities?
      </p>
      <p>
        In the next article, we&apos;ll follow a single user question from the
        moment it&apos;s asked to the moment the application responds—and what
        happens when no capability exists.
      </p>
    </ArticleLayout>
  );
}
