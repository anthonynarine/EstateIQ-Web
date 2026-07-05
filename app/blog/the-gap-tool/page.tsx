import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/blog/the-gap-tool");

const article = getDanaArticle("the-gap-tool");
const navigation = getDanaArticleNavigation(article.slug);

export default function TheGapToolPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>Turning unanswered questions into deterministic software capabilities.</em>
      </p>

      <p>Every software application has limits.</p>
      <p>
        No matter how much functionality you build, eventually someone will ask
        a question the application cannot answer.
      </p>
      <p>Most software simply returns an error.</p>
      <p>Many AI systems do something else.</p>
      <p>They attempt an answer anyway.</p>
      <p>Sometimes they&apos;re right.</p>
      <p>Sometimes they&apos;re wrong.</p>
      <p>
        Sometimes they produce an answer that sounds convincing but isn&apos;t
        actually supported by the application&apos;s data.
      </p>
      <p>While building EstateIQ, I realized there was a third option.</p>
      <p>Don&apos;t guess.</p>
      <p>Learn.</p>

      <h2>A missing capability is not a failure</h2>
      <p>Imagine a landlord asks:</p>
      <blockquote>
        &quot;Which buildings have produced the lowest return on maintenance
        spending over the past five years?&quot;
      </blockquote>
      <p>Suppose EstateIQ doesn&apos;t yet support that analysis.</p>
      <p>The traditional response is simple.</p>
      <p>Return an error.</p>
      <p>Or let the language model improvise.</p>
      <p>I wasn&apos;t satisfied with either option.</p>
      <p>Instead, I started treating unanswered questions as evidence.</p>
      <p>Not evidence that the AI had failed.</p>
      <p>Evidence that the application had another capability worth building.</p>
      <p>That became the foundation of the Gap Tool.</p>

      <h2>Every unanswered question contains product insight</h2>
      <p>When users ask questions, they reveal something incredibly valuable.</p>
      <p>They tell you what they expect the application to know.</p>
      <p>
        Instead of discarding those questions, EstateIQ captures them as
        structured Gap Events.
      </p>
      <p>Each Gap Event may contain:</p>
      <ul>
        <li>the original question</li>
        <li>detected intent</li>
        <li>business domain</li>
        <li>related entities</li>
        <li>requested capability</li>
        <li>frequency</li>
        <li>timestamp</li>
        <li>organization</li>
        <li>customer impact</li>
      </ul>
      <p>Notice what&apos;s missing.</p>
      <p>There is no fabricated answer.</p>
      <p>The application never pretends knowledge it doesn&apos;t possess.</p>

      <h2>From questions to engineering</h2>
      <p>Capturing the gap is only the beginning.</p>
      <p>As similar Gap Events accumulate, patterns begin to emerge.</p>
      <p>Multiple landlords ask similar questions.</p>
      <p>Entire categories appear.</p>
      <p>
        The product roadmap begins to organize itself around real customer
        demand instead of assumptions.
      </p>
      <p>
        The engineering team now has something much more valuable than feature
        requests.
      </p>
      <p>It has evidence.</p>

      <h2>AI helps engineers</h2>
      <p>
        This is where AI enters the picture in a completely different role.
      </p>
      <p>The language model is no longer answering customer questions.</p>
      <p>Instead, it assists the engineering team.</p>
      <p>
        Once a Gap Event has been reviewed and prioritized, AI can help propose:
      </p>
      <ul>
        <li>Django selectors</li>
        <li>Django services</li>
        <li>analyst tools</li>
        <li>serializers</li>
        <li>API contracts</li>
        <li>React hooks</li>
        <li>documentation</li>
        <li>tests</li>
      </ul>
      <p>Those proposals become starting points for engineers.</p>
      <p>Nothing is merged automatically.</p>
      <p>Nothing bypasses review.</p>
      <p>Nothing skips testing.</p>
      <p>AI accelerates implementation.</p>
      <p>Engineers remain responsible for correctness.</p>

      <h2>Human review remains essential</h2>
      <p>One principle remained constant while designing DANA.</p>
      <p>Business knowledge belongs to the application.</p>
      <p>
        That means every new capability follows the same engineering standards
        as the rest of the system.
      </p>
      <p>Review.</p>
      <p>Testing.</p>
      <p>Validation.</p>
      <p>Deployment.</p>
      <p>The AI can suggest code.</p>
      <p>
        The engineering team decides what becomes part of the application.
      </p>

      <h2>The application becomes more capable</h2>
      <p>This creates a feedback loop unlike traditional AI systems.</p>
      <CodeDiagram>{`User Question
        ↓
Capability Missing
        ↓
Gap Event
        ↓
Pattern Detection
        ↓
Engineering Review
        ↓
AI-Assisted Implementation
        ↓
Testing
        ↓
Deployment
        ↓
New Capability`}</CodeDiagram>
      <p>Notice something important.</p>
      <p>The language model did not become smarter.</p>
      <p>The application became more capable.</p>
      <p>That distinction is one of the central ideas behind DANA.</p>

      <h2>A different philosophy</h2>
      <p>Many conversations about AI focus on improving the model.</p>
      <p>I think an equally important question is:</p>
      <blockquote>&quot;How do we continuously improve the software?&quot;</blockquote>
      <p>The Gap Tool answers that question.</p>
      <p>
        It transforms real customer questions into structured engineering
        opportunities.
      </p>
      <p>
        Over time, the application develops a richer set of deterministic
        capabilities.
      </p>
      <p>
        Conversation improves naturally because the application itself has
        grown.
      </p>

      <h2>EstateIQ today</h2>
      <p>EstateIQ is where this idea first emerged.</p>
      <p>
        Every unanswered financial question represents an opportunity to improve
        the financial operating system.
      </p>
      <p>
        Instead of encouraging the AI to guess, we expand the application&apos;s
        knowledge.
      </p>
      <p>The AI simply gains another capability it can explain.</p>

      <h2>Looking ahead</h2>
      <p>
        As EstateIQ grows, the number of capabilities will continue expanding.
      </p>
      <p>
        Managing those capabilities eventually becomes an architectural
        challenge of its own.
      </p>
      <p>How do you discover them?</p>
      <p>Version them?</p>
      <p>Document them?</p>
      <p>Measure their coverage?</p>
      <p>The next article explores the final piece of the puzzle:</p>
      <p>
        <strong>The Capability Registry.</strong>
      </p>
    </ArticleLayout>
  );
}
