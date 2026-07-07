import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/blog/introducing-dana");

const article = getDanaArticle("introducing-dana");
const navigation = getDanaArticleNavigation(article.slug);

export default function IntroducingDanaPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        When I started building EstateIQ, I wasn&apos;t trying to invent a new
        software architecture.
      </p>
      <p>I was trying to solve a practical problem.</p>
      <p>
        How do you build an AI-native financial application that can be
        trusted?
      </p>
      <p>At first, I assumed the answer was better prompts.</p>
      <p>Then I thought it was better language models.</p>
      <p>Eventually I realized neither was the real problem.</p>
      <p>The challenge wasn&apos;t making the AI more intelligent.</p>
      <p>
        The challenge was designing an application that already understood its
        own domain before the AI ever became involved.
      </p>
      <p>
        Over time, every architectural decision pushed me toward the same
        conclusion.
      </p>
      <p>The AI shouldn&apos;t own the application&apos;s intelligence.</p>
      <p>The application should.</p>
      <p>
        Eventually I looked back at what EstateIQ had become and realized it
        wasn&apos;t just a collection of engineering decisions anymore.
      </p>
      <p>It had become an architectural pattern.</p>
      <p>
        I now call that pattern <strong>DANA</strong>.
      </p>
      <p>
        <strong>Deterministic AI-Native Architecture.</strong>
      </p>

      <h2>The problem DANA tries to solve</h2>
      <p>Large language models are extraordinary.</p>
      <p>They can reason.</p>
      <p>They can communicate.</p>
      <p>They can summarize.</p>
      <p>They can teach.</p>
      <p>But language models are not accounting systems.</p>
      <p>They are not medical record systems.</p>
      <p>They are not legal case management systems.</p>
      <p>They are not insurance platforms.</p>
      <p>Those applications already contain something incredibly valuable.</p>
      <p>They contain structured truth.</p>
      <p>
        The more I worked on EstateIQ, the more I realized that AI should build
        on top of that truth—not replace it.
      </p>

      <h2>The central idea</h2>
      <p>Every application already has expertise.</p>
      <p>It knows:</p>
      <ul>
        <li>how to calculate balances</li>
        <li>how to validate permissions</li>
        <li>how reports are generated</li>
        <li>how workflows operate</li>
        <li>how records relate to one another</li>
      </ul>
      <p>The language model doesn&apos;t need to rediscover that knowledge.</p>
      <p>It needs access to it.</p>
      <p>That realization became the foundation of DANA.</p>
      <p>Instead of asking:</p>
      <blockquote>&quot;How can the AI answer this?&quot;</blockquote>
      <p>DANA asks:</p>
      <blockquote>
        &quot;What capability inside the application already knows the answer?&quot;
      </blockquote>
      <p>If the capability exists, the AI explains it.</p>
      <p>If it doesn&apos;t exist, the application shouldn&apos;t pretend otherwise.</p>

      <h2>The six layers</h2>
      <p>
        While building EstateIQ, the architecture naturally settled into six
        distinct layers.
      </p>

      <h2>1. Truth Layer</h2>
      <p>The application&apos;s source of truth.</p>
      <p>Examples:</p>
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
      <p>Everything starts here.</p>
      <p>Without trustworthy data, nothing above it matters.</p>

      <h2>2. Domain Layer</h2>
      <p>Business logic.</p>
      <p>Validation.</p>
      <p>Permissions.</p>
      <p>Ledger calculations.</p>
      <p>Organization boundaries.</p>
      <p>This layer answers one question:</p>
      <p>
        <strong>How does the business actually work?</strong>
      </p>

      <h2>3. Capability Layer</h2>
      <p>This is where the application&apos;s intelligence lives.</p>
      <p>Not inside prompts.</p>
      <p>Inside explicit capabilities.</p>
      <p>Examples:</p>
      <ul>
        <li>Revenue Analysis</li>
        <li>Expense Analysis</li>
        <li>Portfolio Health</li>
        <li>Delinquency Analysis</li>
        <li>Document Intelligence</li>
        <li>Reporting</li>
      </ul>
      <p>Every capability is deterministic.</p>
      <p>Every capability is testable.</p>
      <p>Every capability has one responsibility.</p>

      <h2>4. Conversation Layer</h2>
      <p>The conversational interface.</p>
      <p>Responsibilities include:</p>
      <ul>
        <li>understanding user intent</li>
        <li>routing requests</li>
        <li>managing conversation context</li>
        <li>selecting capabilities</li>
        <li>preparing structured responses</li>
      </ul>
      <p>This layer connects people to the application.</p>
      <p>It does not replace the application.</p>

      <h2>5. AI Layer</h2>
      <p>This is where models like OpenAI or Claude operate.</p>
      <p>Their job is remarkably focused.</p>
      <p>They:</p>
      <ul>
        <li>explain</li>
        <li>summarize</li>
        <li>clarify</li>
        <li>teach</li>
        <li>communicate</li>
      </ul>
      <p>They do not calculate ledger balances.</p>
      <p>They do not enforce permissions.</p>
      <p>They do not invent financial truth.</p>
      <p>They help people understand it.</p>

      <h2>6. Intelligence Layer</h2>
      <p>The final layer is where the application improves over time.</p>
      <p>This includes:</p>
      <ul>
        <li>Gap Tool</li>
        <li>Capability Registry</li>
        <li>Coverage Metrics</li>
        <li>Prompt Versioning</li>
        <li>AI Operations</li>
        <li>Human Review</li>
      </ul>
      <p>
        Instead of allowing unanswered questions to become hallucinations, DANA
        treats them as opportunities to expand the application&apos;s capabilities.
      </p>
      <p>
        The application becomes smarter because engineers continuously improve
        it—not because the model starts guessing better.
      </p>

      <h2>A different philosophy</h2>
      <p>Many AI systems begin with the language model.</p>
      <p>DANA begins with the application.</p>
      <p>The application owns:</p>
      <ul>
        <li>truth</li>
        <li>business rules</li>
        <li>capabilities</li>
      </ul>
      <p>The AI owns:</p>
      <ul>
        <li>conversation</li>
        <li>explanation</li>
        <li>communication</li>
      </ul>
      <p>That separation isn&apos;t a limitation.</p>
      <p>It&apos;s the reason the system remains trustworthy.</p>

      <h2>EstateIQ is the first implementation</h2>
      <p>DANA wasn&apos;t designed in isolation.</p>
      <p>It emerged while building EstateIQ.</p>
      <p>
        EstateIQ simply became the first application where these ideas came
        together.
      </p>
      <p>The same pattern could apply anywhere structured truth matters.</p>
      <p>Healthcare.</p>
      <p>Insurance.</p>
      <p>Legal technology.</p>
      <p>Manufacturing.</p>
      <p>Supply chain.</p>
      <p>Any domain where correctness is more important than creativity.</p>

      <h2>Looking forward</h2>
      <p>
        I don&apos;t believe the future of enterprise AI will be defined by the
        largest language model.
      </p>
      <p>
        I think it will be defined by applications that understand their own
        domain deeply enough that AI can become a trusted interface rather than
        an unreliable source of truth.
      </p>
      <p>That&apos;s ultimately what DANA represents.</p>
      <p>Not a framework.</p>
      <p>Not a library.</p>
      <p>Not a product.</p>
      <p>A way of thinking about how AI-native software should be built.</p>
      <p>
        And for me, it all started with a simple realization while building
        EstateIQ:
      </p>
      <p>
        <strong>
          The application should own the truth. AI should make that truth easier
          to understand.
        </strong>
      </p>
    </ArticleLayout>
  );
}
