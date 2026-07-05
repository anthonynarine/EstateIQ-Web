import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/blog/ai-operations");

const article = getDanaArticle("ai-operations");
const navigation = getDanaArticleNavigation(article.slug);

export default function AiOperationsPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          Why trustworthy AI systems need observability, coverage metrics, and
          operational discipline.
        </em>
      </p>

      <p>Once an application starts using AI, a new question appears.</p>
      <p>How do you know if the AI system is healthy?</p>
      <p>Traditional software teams already monitor APIs.</p>
      <p>They monitor databases.</p>
      <p>They monitor background jobs.</p>
      <p>They monitor queues, deployments, errors, latency, and uptime.</p>
      <p>But many AI features are still treated like black boxes.</p>
      <p>A prompt is written.</p>
      <p>A model is called.</p>
      <p>An answer is returned.</p>
      <p>
        If something goes wrong, teams often discover it through user
        complaints.
      </p>
      <p>That is not enough for high-trust software.</p>
      <p>AI-native applications need operations.</p>

      <h2>AI is part of production infrastructure</h2>
      <p>
        While building EstateIQ, I began thinking about AI the same way I think
        about any production system.
      </p>
      <p>It needs observability.</p>
      <p>It needs versioning.</p>
      <p>It needs failure tracking.</p>
      <p>It needs quality checks.</p>
      <p>It needs coverage metrics.</p>
      <p>
        It needs a way to understand what the system can answer, what it cannot
        answer, and where it is improving.
      </p>
      <p>That operational layer became part of DANA.</p>

      <h2>What should be measured?</h2>
      <p>
        In a DANA-style system, the language model is only one part of the
        architecture.
      </p>
      <p>That means AI Operations should not only monitor model calls.</p>
      <p>It should monitor the full path from question to answer.</p>
      <p>Useful signals include:</p>
      <ul>
        <li>questions received</li>
        <li>detected intents</li>
        <li>selected capabilities</li>
        <li>capability success rate</li>
        <li>unsupported questions</li>
        <li>gap frequency</li>
        <li>response latency</li>
        <li>prompt version</li>
        <li>model provider</li>
        <li>error rate</li>
        <li>answer quality reviews</li>
      </ul>
      <p>The goal is not to watch the model in isolation.</p>
      <p>The goal is to understand the entire intelligence system.</p>

      <h2>Coverage matters</h2>
      <p>One of the most important metrics is coverage.</p>
      <p>Coverage answers a simple question:</p>
      <blockquote>
        &quot;What percentage of user questions can the application answer using
        deterministic capabilities?&quot;
      </blockquote>
      <p>That number matters more than raw model performance.</p>
      <p>
        If the application has no capability for a question, the model should
        not invent an answer.
      </p>
      <p>
        The system should either route the question to a supported capability or
        capture a Gap Event.
      </p>
      <p>
        Over time, coverage should increase because the application becomes more
        capable.
      </p>

      <h2>Capability health</h2>
      <p>Every capability should be observable.</p>
      <p>A capability can fail.</p>
      <p>It can become slow.</p>
      <p>It can return incomplete results.</p>
      <p>It can depend on a selector that changes.</p>
      <p>
        It can produce outputs that no longer match what the conversation layer
        expects.
      </p>
      <p>AI Operations should track capability health just like API health.</p>
      <p>Examples include:</p>
      <CodeDiagram>{`Portfolio Health Capability

Status: Healthy
Success Rate: 99.2%
Average Latency: 184ms
Supported Questions: 14
Last Updated: v1.4
Open Gaps: 3`}</CodeDiagram>
      <p>
        This turns application intelligence into something teams can inspect.
      </p>

      <h2>Prompt versioning</h2>
      <p>Even in DANA, prompts still matter.</p>
      <p>They shape how structured outputs are explained.</p>
      <p>But prompts should be versioned like code.</p>
      <p>If an explanation prompt changes, the team should know:</p>
      <ul>
        <li>which version generated an answer</li>
        <li>when the prompt changed</li>
        <li>what capability used it</li>
        <li>whether answer quality improved</li>
        <li>whether regressions appeared</li>
      </ul>
      <p>
        Without prompt versioning, teams cannot reliably understand why AI
        behavior changed.
      </p>

      <h2>Gap trends</h2>
      <p>The Gap Tool produces one of the most valuable operational signals.</p>
      <p>
        If many users ask unsupported questions about mortgage amortization,
        that is product signal.
      </p>
      <p>
        If gaps spike after a new feature launch, that may indicate unclear UX.
      </p>
      <p>
        If a specific domain repeatedly generates gaps, that tells the team
        where the application is least capable.
      </p>
      <p>Gap trends help the roadmap become evidence-driven.</p>

      <h2>Evaluation loops</h2>
      <p>High-trust AI cannot rely only on automated metrics.</p>
      <p>Some answers need review.</p>
      <p>Teams may sample answers and evaluate:</p>
      <ul>
        <li>Was the correct capability selected?</li>
        <li>Was the structured output accurate?</li>
        <li>Did the AI explanation remain faithful?</li>
        <li>Did it make unsupported claims?</li>
        <li>Was the answer useful?</li>
      </ul>
      <p>
        This creates a feedback loop for both the application and the AI
        explanation layer.
      </p>

      <h2>EstateIQ example</h2>
      <p>Imagine EstateIQ receives one thousand AI questions in a month.</p>
      <p>AI Operations might show:</p>
      <CodeDiagram>{`Questions Received: 1,000
Answered by Capabilities: 842
Captured as Gaps: 118
Clarification Needed: 40

Top Capability:
Expense Trend Analysis

Top Gap Domain:
Mortgage Analysis

Average Response Time:
712ms

Prompt Version:
executive_summary_v4`}</CodeDiagram>
      <p>That gives the team a practical view of the system.</p>
      <p>Not vibes.</p>
      <p>Not anecdotes.</p>
      <p>Operational evidence.</p>

      <h2>Why this matters</h2>
      <p>AI-native applications cannot be operated blindly.</p>
      <p>
        If AI is part of the user experience, then it deserves the same
        operational discipline as the rest of the system.
      </p>
      <p>DANA treats AI as a production subsystem.</p>
      <p>Not magic.</p>
      <p>Not decoration.</p>
      <p>Infrastructure.</p>
      <p>
        And once AI becomes infrastructure, it can be monitored, improved,
        tested, and trusted.
      </p>

      <h2>Looking ahead</h2>
      <p>We&apos;ve now covered the core architecture of DANA:</p>
      <ul>
        <li>structured truth</li>
        <li>deterministic domain logic</li>
        <li>capabilities</li>
        <li>conversation</li>
        <li>AI explanation</li>
        <li>gap intelligence</li>
        <li>capability registry</li>
        <li>operations</li>
      </ul>
      <p>The next question is one backend engineers care about deeply:</p>
      <p>Where should business logic live?</p>
      <p>The next article makes the case plainly:</p>
      <p>
        <strong>Business Logic Does Not Belong in Prompts.</strong>
      </p>
    </ArticleLayout>
  );
}
