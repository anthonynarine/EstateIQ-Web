import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/software-should-learn-from-questions-it-cannot-answer",
);

const article = getDanaArticle(
  "software-should-learn-from-questions-it-cannot-answer",
);
const navigation = getDanaArticleNavigation(article.slug);

export default function SoftwareShouldLearnFromQuestionsPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          Why unanswered questions shouldn&apos;t become hallucinations—they
          should become the roadmap.
        </em>
      </p>
      <p>Every software application has limits.</p>
      <p>There will always be a question it cannot answer.</p>
      <p>Traditional applications usually respond in one of two ways.</p>
      <p>They either display an error.</p>
      <p>Or they simply say:</p>
      <blockquote>&quot;I don&apos;t know.&quot;</blockquote>
      <p>Large language models introduced a third possibility.</p>
      <p>They try to answer anyway.</p>
      <p>Sometimes they&apos;re correct.</p>
      <p>Sometimes they&apos;re partially correct.</p>
      <p>
        Sometimes they confidently produce an answer that isn&apos;t supported by
        the application&apos;s data at all.
      </p>
      <p>For creative tasks, that&apos;s often acceptable.</p>
      <p>For financial software, it isn&apos;t.</p>

      <h2>The wrong question</h2>
      <p>When an AI cannot answer something, most people immediately ask:</p>
      <blockquote>&quot;How can we make the model smarter?&quot;</blockquote>
      <p>
        While building EstateIQ, I found myself asking a different question.
      </p>
      <blockquote>
        &quot;Why couldn&apos;t the application answer this in the first place?&quot;
      </blockquote>
      <p>That shift completely changed how I thought about AI systems.</p>
      <p>Instead of treating unanswered questions as AI failures...</p>
      <p>I started treating them as application feedback.</p>

      <h2>A missing capability</h2>
      <p>Imagine a landlord asks:</p>
      <blockquote>
        &quot;Which building has produced the lowest cash flow over the last
        eighteen months after maintenance expenses?&quot;
      </blockquote>
      <p>
        If EstateIQ already has a capability for answering that question, great.
      </p>
      <p>The application runs it.</p>
      <p>The AI explains it.</p>
      <p>But suppose that capability doesn&apos;t exist yet.</p>
      <p>What should happen?</p>
      <p>One option is to let the language model infer an answer.</p>
      <p>I think that&apos;s the wrong choice.</p>
      <p>
        Instead, the application should honestly acknowledge that it doesn&apos;t
        yet support that analysis.
      </p>
      <p>That honesty creates an opportunity.</p>

      <h2>Turning uncertainty into engineering</h2>
      <p>
        Instead of disappearing into a log file, unanswered questions become
        structured events.
      </p>
      <p>Each gap can capture information like:</p>
      <ul>
        <li>the original question</li>
        <li>the detected domain</li>
        <li>the intended capability</li>
        <li>related entities</li>
        <li>frequency</li>
        <li>customer impact</li>
      </ul>
      <p>Notice what isn&apos;t stored.</p>
      <p>There isn&apos;t an AI-generated answer.</p>
      <p>There isn&apos;t a hallucinated explanation.</p>
      <p>There isn&apos;t a guess.</p>
      <p>
        There is simply evidence that users are asking for something the
        application cannot yet do.
      </p>
      <p>That evidence is incredibly valuable.</p>

      <h2>The Gap Tool</h2>
      <p>
        Inside EstateIQ, those unanswered questions become what I call{" "}
        <strong>gaps</strong>.
      </p>
      <p>A gap is not an error.</p>
      <p>A gap is a missing application capability.</p>
      <p>Over time, repeated gaps begin to tell a story.</p>
      <p>Maybe many landlords want to understand cash flow trends.</p>
      <p>Maybe users repeatedly ask for maintenance forecasting.</p>
      <p>
        Maybe people want comparisons the reporting engine doesn&apos;t yet
        provide.
      </p>
      <p>Instead of guessing...</p>
      <p>The application listens.</p>

      <h2>AI helps engineers—not production users</h2>
      <p>This is where AI becomes useful in a completely different way.</p>
      <p>
        Once a gap has been reviewed and prioritized, AI can assist the
        engineering process.
      </p>
      <p>For example, it might help generate:</p>
      <ul>
        <li>a new analyst tool</li>
        <li>a selector</li>
        <li>a service</li>
        <li>API contracts</li>
        <li>frontend hooks</li>
        <li>documentation</li>
        <li>tests</li>
      </ul>
      <p>But none of that automatically becomes part of the product.</p>
      <p>Every proposed implementation is reviewed.</p>
      <p>Every capability is tested.</p>
      <p>Every business rule remains deterministic.</p>
      <p>The AI accelerates development.</p>
      <p>It does not bypass engineering.</p>

      <h2>The application becomes more capable</h2>
      <p>This creates a feedback loop.</p>
      <CodeDiagram>{`User Question
        ↓
Capability Missing
        ↓
Gap Captured
        ↓
Categorized
        ↓
Reviewed
        ↓
Capability Implemented
        ↓
Tests Added
        ↓
Application Becomes Smarter`}</CodeDiagram>
      <p>Notice something important.</p>
      <p>The language model never became smarter.</p>
      <p>The application did.</p>
      <p>That&apos;s the distinction.</p>

      <h2>Why this matters</h2>
      <p>Most conversations about AI focus on improving the model.</p>
      <p>I think the bigger opportunity is improving the software.</p>
      <p>
        Every unanswered question reveals another capability the application
        could eventually own.
      </p>
      <p>Every new capability becomes deterministic.</p>
      <p>Every deterministic capability becomes available through conversation.</p>
      <p>The AI improves because the software improves.</p>
      <p>Not because the model became better at guessing.</p>

      <h2>Looking ahead</h2>
      <p>
        As this idea continued to evolve, I realized the Gap Tool wasn&apos;t just
        a feature.
      </p>
      <p>It was one layer of a much larger architectural pattern.</p>
      <p>
        One where structured truth, deterministic business logic, explicit
        capabilities, conversational AI, and continuous capability expansion all
        worked together.
      </p>
      <p>
        Eventually, that pattern became something I could finally describe.
      </p>
      <p>
        In the next article, I&apos;ll introduce the architectural model that
        emerged while building EstateIQ and explain why I now think of it as{" "}
        <strong>Deterministic AI-Native Architecture (DANA).</strong>
      </p>
    </ArticleLayout>
  );
}
