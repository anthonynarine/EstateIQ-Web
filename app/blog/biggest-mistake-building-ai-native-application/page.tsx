import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/biggest-mistake-building-ai-native-application",
);

const article = getDanaArticle("biggest-mistake-building-ai-native-application");
const navigation = getDanaArticleNavigation(article.slug);

export default function BiggestMistakeBuildingAiNativeApplicationPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          How moving AI out of the center completely changed the architecture of
          EstateIQ.
        </em>
      </p>
      <p>
        When I started building EstateIQ, I thought the AI would become the
        center of the application.
      </p>
      <p>It seemed obvious.</p>
      <p>The user would ask a question.</p>
      <p>The AI would understand the request.</p>
      <p>The AI would retrieve the data.</p>
      <p>The AI would generate the answer.</p>
      <p>
        If you&apos;ve built with large language models, you&apos;ve probably had
        the same instinct. It&apos;s a natural way to think about conversational
        software.
      </p>
      <p>For a while, I did too.</p>
      <p>Then the application started growing.</p>

      <h2>EstateIQ became smarter</h2>
      <p>
        As more features were added, EstateIQ began accumulating real business
        knowledge.
      </p>
      <p>It knew:</p>
      <ul>
        <li>how rent charges were generated</li>
        <li>how lease balances were calculated</li>
        <li>how payments were allocated</li>
        <li>when expenses became financial records</li>
        <li>how reports were built</li>
        <li>how organizations were isolated</li>
        <li>how permissions were enforced</li>
      </ul>
      <p>None of that knowledge lived inside the AI.</p>
      <p>It lived inside the application.</p>
      <p>That realization forced me to ask a simple question.</p>
      <p>If the application already knows the answer...</p>
      <p>
        <strong>Why am I asking the AI to figure it out again?</strong>
      </p>

      <h2>I was duplicating business logic</h2>
      <p>
        Without realizing it, I had started creating two systems.
      </p>
      <p>One system lived in Python.</p>
      <p>The other was slowly creeping into prompts.</p>
      <p>Imagine changing the rules for calculating delinquent rent.</p>
      <p>Where should that change happen?</p>
      <p>In the service layer?</p>
      <p>In the selector?</p>
      <p>Inside the prompt?</p>
      <p>
        If the answer was &quot;all of the above,&quot; then I had created an
        architecture that would slowly drift apart.
      </p>
      <p>Business rules should have one home.</p>
      <p>Not two.</p>

      <h2>The architecture was backwards</h2>
      <p>
        The more I worked on EstateIQ, the more I realized I had accidentally
        put the wrong component at the center.
      </p>
      <p>My mental model looked like this:</p>
      <CodeDiagram>{`User
   ↓
AI
   ↓
Application`}</CodeDiagram>
      <p>The AI became responsible for understanding everything.</p>
      <p>That sounded powerful.</p>
      <p>In reality, it made the application harder to reason about.</p>
      <p>The application already knew how to calculate balances.</p>
      <p>The application already knew how to enforce permissions.</p>
      <p>The application already knew how to generate reports.</p>
      <p>The AI didn&apos;t need to rediscover that knowledge.</p>

      <h2>Flipping the architecture</h2>
      <p>Eventually I inverted the entire system.</p>
      <p>Instead of asking the AI to understand the application...</p>
      <p>I asked the application to understand itself.</p>
      <p>The architecture became:</p>
      <CodeDiagram>{`User
   ↓
Application
   ↓
Business Logic
   ↓
AI`}</CodeDiagram>
      <p>That single decision simplified almost everything.</p>
      <p>Business logic stayed in code.</p>
      <p>Calculations stayed deterministic.</p>
      <p>Permissions stayed explicit.</p>
      <p>The AI became responsible for something it does exceptionally well:</p>
      <p>Helping people understand complex information.</p>

      <h2>AI became the explanation layer</h2>
      <p>
        Once I stopped treating the language model as the application&apos;s
        brain, its role became much clearer.
      </p>
      <p>The AI didn&apos;t calculate lease balances.</p>
      <p>The ledger already did.</p>
      <p>The AI didn&apos;t determine whether an expense was confirmed.</p>
      <p>The application already knew.</p>
      <p>The AI didn&apos;t decide whether a user could access an organization.</p>
      <p>The permission system already enforced that.</p>
      <p>
        Instead, the AI translated structured information into natural language.
      </p>
      <p>That distinction changed the product.</p>
      <p>Instead of asking,</p>
      <blockquote>&quot;Can the AI answer this?&quot;</blockquote>
      <p>I started asking,</p>
      <blockquote>&quot;Does the application already know this?&quot;</blockquote>
      <p>If the answer was yes, the AI could explain it.</p>
      <p>
        If the answer was no, then the application-not the model-needed a new
        capability.
      </p>

      <h2>A better engineering model</h2>
      <p>One unexpected benefit was that the system became easier to test.</p>
      <p>Every financial calculation remained deterministic.</p>
      <p>Every business rule remained version-controlled.</p>
      <p>Every report could be traced back to underlying records.</p>
      <p>
        The conversational experience improved because it was built on top of
        software that already understood its own domain.
      </p>
      <p>The AI wasn&apos;t replacing the application.</p>
      <p>
        It was exposing the application&apos;s capabilities through conversation.
      </p>

      <h2>The next problem</h2>
      <p>Solving this architectural problem uncovered another one.</p>
      <p>
        Eventually, users would ask questions the application genuinely
        couldn&apos;t answer.
      </p>
      <p>
        Traditional AI systems often respond by letting the model improvise.
      </p>
      <p>I wasn&apos;t comfortable with that.</p>
      <p>
        If the capability doesn&apos;t exist, pretending otherwise doesn&apos;t make
        the software smarter.
      </p>
      <p>It makes it less trustworthy.</p>
      <p>
        That realization led to the next major idea in EstateIQ&apos;s architecture:
        treating unanswered questions as structured engineering feedback instead
        of conversational failures.
      </p>
      <p>
        That system eventually became what we now call the <strong>Gap Tool</strong>.
      </p>
      <p>We&apos;ll explore that in the next article.</p>
    </ArticleLayout>
  );
}
