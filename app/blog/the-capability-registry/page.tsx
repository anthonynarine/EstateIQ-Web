import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/the-capability-registry",
);

const article = getDanaArticle("the-capability-registry");
const navigation = getDanaArticleNavigation(article.slug);

export default function TheCapabilityRegistryPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          Why every deterministic capability should become a first-class
          software asset.
        </em>
      </p>

      <p>As EstateIQ grew, I noticed something interesting.</p>
      <p>Adding new capabilities wasn&apos;t becoming difficult.</p>
      <p>Finding them was.</p>
      <p>The application started with only a handful of capabilities.</p>
      <p>Revenue analysis.</p>
      <p>Expense summaries.</p>
      <p>Portfolio health.</p>
      <p>Document intelligence.</p>
      <p>It was easy to remember what the application knew.</p>
      <p>But every new feature added another capability.</p>
      <p>Eventually I realized the problem wasn&apos;t building intelligence.</p>
      <p>It was organizing it.</p>

      <h2>Applications accumulate knowledge</h2>
      <p>Traditional software grows by adding features.</p>
      <p>AI-native applications grow by adding capabilities.</p>
      <p>Every report.</p>
      <p>Every financial analysis.</p>
      <p>Every document workflow.</p>
      <p>Every comparison.</p>
      <p>Every AI insight.</p>
      <p>
        Each one represents another piece of deterministic application
        knowledge.
      </p>
      <p>That knowledge deserves structure.</p>
      <p>Not just another Python function buried somewhere in the codebase.</p>

      <h2>Capabilities become assets</h2>
      <p>
        One of the ideas that emerged while building DANA was surprisingly
        simple.
      </p>
      <p>Capabilities should be treated like APIs.</p>
      <p>Not because they are HTTP endpoints.</p>
      <p>
        Because they represent explicit contracts between the application and
        its conversational interface.
      </p>
      <p>Every capability should clearly describe:</p>
      <ul>
        <li>what it does</li>
        <li>what it requires</li>
        <li>what it produces</li>
        <li>who owns it</li>
        <li>how it is tested</li>
        <li>what questions it supports</li>
      </ul>
      <p>
        Once capabilities become explicit, the application becomes dramatically
        easier to understand.
      </p>

      <h2>A capability contract</h2>
      <p>Imagine a capability called:</p>
      <CodeDiagram>{`Portfolio Health`}</CodeDiagram>
      <p>Instead of existing as an undocumented function, it could declare:</p>
      <CodeDiagram>{`Capability

Portfolio Health

Purpose

Calculate the overall health of a landlord's portfolio.

Inputs

Organization
Time Period

Uses

Revenue Analysis

Expense Analysis

Vacancy Analysis

Outputs

Health Score

Summary

Risk Indicators

Version

1.4

Tests

58 Passing

Owner

Portfolio Domain

Supported Questions

"What is my portfolio health?"

"How healthy is my business?"

"Give me a portfolio summary."`}</CodeDiagram>
      <p>Notice what happened.</p>
      <p>The capability became self-describing.</p>

      <h2>Why this matters</h2>
      <p>As applications grow, engineering teams change.</p>
      <p>New developers join.</p>
      <p>Features evolve.</p>
      <p>Business rules become more sophisticated.</p>
      <p>
        Without explicit capabilities, knowledge becomes scattered throughout
        the application.
      </p>
      <p>
        With a Capability Registry, the application&apos;s intelligence becomes
        discoverable.
      </p>
      <p>Instead of asking:</p>
      <blockquote>&quot;Where is that calculation implemented?&quot;</blockquote>
      <p>Engineers can ask:</p>
      <blockquote>&quot;Which capability owns this responsibility?&quot;</blockquote>
      <p>That question is much easier to answer.</p>

      <h2>Conversation becomes simpler</h2>
      <p>The Conversation Layer doesn&apos;t need to understand business logic.</p>
      <p>It only needs to understand capabilities.</p>
      <p>When a user asks:</p>
      <blockquote>&quot;Show me my portfolio health.&quot;</blockquote>
      <p>Conversation simply locates the appropriate capability.</p>
      <p>The capability owns the implementation.</p>
      <p>The Conversation Layer owns the interaction.</p>
      <p>The separation remains clean.</p>

      <h2>The registry becomes the application&apos;s intelligence catalog</h2>
      <p>
        Over time, the Capability Registry grows into something much larger.
      </p>
      <p>It becomes the application&apos;s map of everything it knows.</p>
      <p>Imagine opening a registry and seeing:</p>
      <CodeDiagram>{`Revenue

Expense Analysis

Portfolio Health

Building Performance

Cash Flow

Document Intelligence

Delinquency

Monthly Executive Summary

Mortgage Summary

Tax Preparation

Vendor Analysis

Maintenance Trends`}</CodeDiagram>
      <p>Each capability documents itself.</p>
      <p>Each capability can evolve independently.</p>
      <p>Each capability remains deterministic.</p>

      <h2>Preparing for orchestration</h2>
      <p>
        One unexpected benefit of the Capability Registry is that it prepares
        the application for more advanced AI workflows.
      </p>
      <p>
        In the future, a complex question may require multiple capabilities
        working together.
      </p>
      <p>For example:</p>
      <blockquote>
        &quot;Which building reduced my cash flow the most this year, and was it
        caused by maintenance, vacancy, or unpaid rent?&quot;
      </blockquote>
      <p>No single capability may answer that question.</p>
      <p>
        Instead, the application can orchestrate several deterministic
        capabilities and combine their structured outputs before the AI
        generates a response.
      </p>
      <p>
        The registry makes that orchestration possible because every capability
        has a clear contract.
      </p>

      <h2>EstateIQ today</h2>
      <p>EstateIQ is still growing.</p>
      <p>Every new financial insight becomes another capability.</p>
      <p>Every capability strengthens the operating system.</p>
      <p>
        The conversational experience improves naturally because the application
        itself continues becoming more knowledgeable.
      </p>
      <p>The AI doesn&apos;t become more intelligent.</p>
      <p>The application does.</p>

      <h2>Looking ahead</h2>
      <p>We&apos;ve now explored how DANA organizes application intelligence.</p>
      <p>
        The final piece is understanding how to operate an AI-native application
        in production.
      </p>
      <p>How do you measure coverage?</p>
      <p>Monitor capability health?</p>
      <p>Track unanswered questions?</p>
      <p>Evaluate prompts?</p>
      <p>Observe system quality over time?</p>
      <p>The next article explores the operational side of DANA:</p>
      <p>
        <strong>
          AI Operations: Running an AI-Native Application in Production.
        </strong>
      </p>
    </ArticleLayout>
  );
}
