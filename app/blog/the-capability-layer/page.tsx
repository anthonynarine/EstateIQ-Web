import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/the-capability-layer",
);

const article = getDanaArticle("the-capability-layer");
const navigation = getDanaArticleNavigation(article.slug);

export default function TheCapabilityLayerPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          Why modern AI-native applications should organize around capabilities
          instead of prompts.
        </em>
      </p>

      <p>
        If I had to point to one idea that defines DANA more than any other, it
        would be the Capability Layer.
      </p>
      <p>Everything else in the architecture supports it.</p>
      <p>
        When people first build AI applications, they naturally think in terms
        of prompts.
      </p>
      <p>&quot;What prompt should answer this question?&quot;</p>
      <p>That feels intuitive.</p>
      <p>But while building EstateIQ, I realized that question was backwards.</p>
      <p>The better question is:</p>
      <blockquote>
        <strong>What capability inside the application already knows the answer?</strong>
      </blockquote>
      <p>That simple shift changes the architecture completely.</p>

      <h2>Prompts are temporary</h2>
      <p>Prompts are important.</p>
      <p>Good prompts improve communication.</p>
      <p>Good prompts improve consistency.</p>
      <p>Good prompts improve the quality of explanations.</p>
      <p>But prompts should not become the application&apos;s intelligence.</p>
      <p>
        If business knowledge begins living inside prompts, several problems
        appear.
      </p>
      <p>Business rules become difficult to test.</p>
      <p>Logic becomes duplicated.</p>
      <p>Updates become inconsistent.</p>
      <p>
        The application&apos;s source of truth slowly drifts away from its own
        codebase.
      </p>
      <p>That&apos;s not a language model problem.</p>
      <p>It&apos;s an architectural problem.</p>

      <h2>Applications already have expertise</h2>
      <p>
        A mature application already knows an incredible amount about its
        domain.
      </p>
      <p>EstateIQ already understands:</p>
      <ul>
        <li>lease balances</li>
        <li>rent charges</li>
        <li>payment allocations</li>
        <li>expense reporting</li>
        <li>document confirmation</li>
        <li>delinquency</li>
        <li>financial reporting</li>
      </ul>
      <p>That knowledge didn&apos;t come from AI.</p>
      <p>It came from software engineering.</p>
      <p>The AI shouldn&apos;t replace that expertise.</p>
      <p>It should expose it.</p>

      <h2>What is a capability?</h2>
      <p>A capability is a deterministic unit of application knowledge.</p>
      <p>Each capability owns exactly one responsibility.</p>
      <p>Examples from EstateIQ include:</p>
      <CodeDiagram>{`Expense Trend Analysis

Revenue Analysis

Portfolio Health

Document Intelligence

Delinquency Analysis

Cash Flow Summary

Building Performance

Monthly Executive Summary`}</CodeDiagram>
      <p>Notice something.</p>
      <p>None of these are prompts.</p>
      <p>None of these are conversations.</p>
      <p>They are application capabilities.</p>
      <p>Conversation simply becomes another interface to them.</p>

      <h2>Every capability has a contract</h2>
      <p>
        One lesson I learned while building EstateIQ is that capabilities should
        behave like APIs.
      </p>
      <p>Each capability should clearly define:</p>
      <CodeDiagram>{`Name

Purpose

Supported Questions

Inputs

Outputs

Dependencies

Version

Tests

Owner`}</CodeDiagram>
      <p>
        The more explicit the contract becomes, the easier the application is to
        evolve.
      </p>
      <p>
        Adding a new capability becomes a software engineering task—not a prompt
        engineering exercise.
      </p>

      <h2>Capabilities are deterministic</h2>
      <p>Suppose a user asks:</p>
      <blockquote>
        &quot;Which building generated the most maintenance expenses this
        quarter?&quot;
      </blockquote>
      <p>The Conversation Layer selects the appropriate capability.</p>
      <p>That capability performs deterministic work.</p>
      <p>It may call selectors.</p>
      <p>Services.</p>
      <p>Reporting logic.</p>
      <p>Ledger calculations.</p>
      <p>Eventually it produces structured output like:</p>
      <CodeDiagram>{`{
  "building": "Maple Apartments",
  "maintenance_total": 18420,
  "largest_vendor": "ABC Plumbing"
}`}</CodeDiagram>
      <p>Only after the capability finishes does the language model become involved.</p>
      <p>The AI transforms structured results into conversation.</p>
      <p>It never owns the calculation itself.</p>

      <h2>Why capabilities scale</h2>
      <p>Prompt-based systems often grow by adding more prompts.</p>
      <p>Capability-based systems grow by adding more software.</p>
      <p>Every new capability immediately becomes available through:</p>
      <ul>
        <li>dashboards</li>
        <li>reports</li>
        <li>APIs</li>
        <li>exports</li>
        <li>conversation</li>
      </ul>
      <p>Because the intelligence lives inside the application—not the prompt.</p>
      <p>That&apos;s a much stronger foundation.</p>

      <h2>A capability-first mindset</h2>
      <p>
        One unexpected benefit of this architecture is how it changes
        engineering conversations.
      </p>
      <p>Instead of asking:</p>
      <blockquote>&quot;Can AI answer this?&quot;</blockquote>
      <p>Teams begin asking:</p>
      <blockquote>&quot;Should we build a new capability?&quot;</blockquote>
      <p>That shift is subtle.</p>
      <p>But it&apos;s profound.</p>
      <p>It encourages engineers to improve the application itself.</p>
      <p>
        The conversational experience improves naturally because the underlying
        software becomes more capable.
      </p>

      <h2>EstateIQ today</h2>
      <p>EstateIQ continues growing by adding capabilities.</p>
      <p>Every report.</p>
      <p>Every financial analysis.</p>
      <p>Every document workflow.</p>
      <p>Every AI insight.</p>
      <p>
        They all begin as deterministic capabilities before they ever become
        conversational experiences.
      </p>
      <p>
        That separation has made the system easier to reason about, easier to
        test, and easier to trust.
      </p>

      <h2>Looking ahead</h2>
      <p>The Capability Layer solves one important problem.</p>
      <p>It gives the application explicit knowledge.</p>
      <p>But another challenge remains.</p>
      <p>How should applications discover missing capabilities?</p>
      <p>How should they prioritize what to build next?</p>
      <p>
        And how can AI accelerate that engineering process without becoming the
        decision-maker?
      </p>
      <p>The next article explores the component that answers those questions:</p>
      <p>
        <strong>The Gap Tool.</strong>
      </p>
    </ArticleLayout>
  );
}
