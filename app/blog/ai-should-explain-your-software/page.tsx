import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/ai-should-explain-your-software",
);

const article = getDanaArticle("ai-should-explain-your-software");
const navigation = getDanaArticleNavigation(article.slug);

export default function AiShouldExplainYourSoftwarePage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          The most important architectural decision I made while building
          EstateIQ.
        </em>
      </p>
      <p>
        After realizing the AI shouldn&apos;t sit at the center of the application,
        I was left with a new question.
      </p>
      <p>
        If the language model isn&apos;t responsible for the business logic...
      </p>
      <p>What is?</p>
      <p>At first, I didn&apos;t have a good answer.</p>
      <p>I only knew what I didn&apos;t want.</p>
      <p>I didn&apos;t want financial calculations inside prompts.</p>
      <p>I didn&apos;t want permission rules inside prompts.</p>
      <p>
        I didn&apos;t want business logic duplicated between Python and the language
        model.
      </p>
      <p>There had to be a better way.</p>

      <h2>Software already has knowledge</h2>
      <p>
        Traditional software isn&apos;t just a collection of database tables.
      </p>
      <p>Good software already understands its own domain.</p>
      <p>An accounting system knows how to calculate balances.</p>
      <p>A scheduling system knows how appointments work.</p>
      <p>An inventory system knows what stock is available.</p>
      <p>A healthcare system knows how clinical workflows operate.</p>
      <p>That knowledge already exists.</p>
      <p>
        It&apos;s encoded in services, business rules, validation, and
        application logic.
      </p>
      <p>
        The mistake I almost made was treating the language model as though it
        needed to rediscover all of that knowledge.
      </p>
      <p>It didn&apos;t.</p>

      <h2>Applications have capabilities</h2>
      <p>Eventually I stopped thinking about AI in terms of prompts.</p>
      <p>I started thinking in terms of capabilities.</p>
      <p>Instead of asking:</p>
      <blockquote>&quot;Can the AI answer this question?&quot;</blockquote>
      <p>I began asking:</p>
      <blockquote>
        &quot;Does the application already have a capability that answers this
        question?&quot;
      </blockquote>
      <p>Those are very different questions.</p>
      <p>For EstateIQ, a capability might be:</p>
      <ul>
        <li>Calculate lease balance</li>
        <li>Summarize monthly expenses</li>
        <li>Identify delinquent leases</li>
        <li>Explain document confirmation status</li>
        <li>Compare revenue month over month</li>
        <li>Build a portfolio health summary</li>
      </ul>
      <p>Each capability already exists inside the application.</p>
      <p>Each one is deterministic.</p>
      <p>Each one is testable.</p>
      <p>Each one produces structured output.</p>
      <p>The AI doesn&apos;t invent those capabilities.</p>
      <p>It exposes them through conversation.</p>

      <h2>Conversation became another interface</h2>
      <p>Once I started thinking about capabilities, something clicked.</p>
      <p>
        A conversational interface isn&apos;t fundamentally different from a web
        page.
      </p>
      <p>Or a dashboard.</p>
      <p>Or a PDF report.</p>
      <p>
        They&apos;re all different ways of accessing the same underlying
        knowledge.
      </p>
      <p>Consider a dashboard.</p>
      <p>It doesn&apos;t calculate your lease balance.</p>
      <p>It asks the application for the lease balance and displays it.</p>
      <p>Conversation should work exactly the same way.</p>
      <p>The user asks a question.</p>
      <p>
        The application determines which capability can answer it.
      </p>
      <p>The capability produces structured results.</p>
      <p>
        The language model explains those results in natural language.
      </p>
      <p>
        For example, if a user asks, &quot;Which of my leases are overdue this
        month?&quot;, the application maps that question to the &quot;Identify
        delinquent leases&quot; capability. That capability returns a structured
        list of leases with missed payments and relevant dates. The language
        model then explains: &quot;You have three leases that are currently
        overdue. Unit 204 is 15 days late, Unit 310 is 7 days late, and Unit 118
        is 3 days late. Would you like to send reminders to these tenants?&quot;
      </p>
      <p>The AI isn&apos;t replacing the application.</p>
      <p>It&apos;s providing another interface to it.</p>

      <h2>Why this matters</h2>
      <p>This distinction changes how you build software.</p>
      <p>Instead of writing larger prompts...</p>
      <p>You build better capabilities.</p>
      <p>Instead of making the model more creative...</p>
      <p>You make the application more capable.</p>
      <p>
        The language model benefits automatically because it has more
        trustworthy information to explain.
      </p>
      <p>Every improvement happens where it belongs:</p>
      <ul>
        <li>Business logic stays in code.</li>
        <li>Financial calculations stay deterministic.</li>
        <li>Permissions stay explicit.</li>
        <li>AI focuses on communication.</li>
      </ul>
      <p>
        That separation has made EstateIQ easier to test, easier to maintain,
        and easier to trust.
      </p>

      <h2>The obvious question</h2>
      <p>Eventually another problem appeared.</p>
      <p>
        What happens when someone asks a question that doesn&apos;t match any
        capability?
      </p>
      <p>Should the language model try to answer anyway?</p>
      <p>Or should the application admit that it doesn&apos;t know?</p>
      <p>For me, there was only one acceptable answer.</p>
      <p>
        The application should never pretend it has knowledge it doesn&apos;t
        possess.
      </p>
      <p>
        Instead, unanswered questions became something far more valuable.
      </p>
      <p>They became signals.</p>
      <p>Signals about what users actually needed.</p>
      <p>Signals about where the application should grow next.</p>
      <p>
        That idea eventually evolved into one of the most interesting parts of
        EstateIQ&apos;s architecture: a system that captures unanswered questions,
        categorizes them, and turns them into future application capabilities.
      </p>
      <p>That&apos;s the subject of the next article.</p>
    </ArticleLayout>
  );
}
