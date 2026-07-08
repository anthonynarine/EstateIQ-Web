import type { Metadata } from "next";

import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { CodeDiagram } from "@/components/blog/CodeDiagram";
import { getDanaArticle, getDanaArticleNavigation } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/blog/why-ai-wrappers-arent-enough",
);

const article = getDanaArticle("why-ai-wrappers-arent-enough");
const navigation = getDanaArticleNavigation(article.slug);

export default function WhyAiWrappersArentEnoughPage() {
  return (
    <ArticleLayout article={article} {...navigation}>
      <p>
        <em>
          What building EstateIQ taught me about designing trustworthy AI
          applications.
        </em>
      </p>
      <p>
        Early in building EstateIQ, I demoed it to a landlord who managed about
        twelve units in Florida. He asked a simple question: how much rent is
        overdue right now?
      </p>
      <p>The AI gave him a number.</p>
      <p>It was wrong by about four thousand dollars.</p>
      <p>
        I caught it before he noticed. But the fact that I had to catch it —
        that there was nothing in the system preventing a confidently wrong
        financial answer — stayed with me for a long time.
      </p>
      <p>
        But while building <strong>EstateIQ</strong>, I discovered something that
        fundamentally changed how I think about AI architecture.
      </p>
      <p>
        <strong>
          The moment correctness matters, the architecture matters more than the
          model.
        </strong>
      </p>

      <h2>The illusion of intelligence</h2>
      <p>Most AI applications follow a familiar pattern.</p>
      <CodeDiagram>{`User
   ↓
Language Model
   ↓
Answer`}</CodeDiagram>
      <p>It&apos;s simple.</p>
      <p>It&apos;s fast.</p>
      <p>And it produces an impressive demo.</p>
      <p>
        I&apos;ve talked to a lot of developers building AI features. Almost all
        of them start here. I did too. The demo felt like the product.
      </p>
      <p>
        The problem is that real business software isn&apos;t built around
        conversations.
      </p>
      <p>
        It&apos;s built around <strong>truth</strong>.
      </p>
      <p>Financial systems have balances.</p>
      <p>Healthcare systems have patient records.</p>
      <p>Insurance systems have policies.</p>
      <p>Legal systems have case files.</p>
      <p>
        Those systems already contain structured information, business rules,
        permissions, validations, and years of accumulated domain knowledge.
      </p>
      <p>
        They contain <strong>truth</strong>.
      </p>
      <p>
        And truth should never be guessed, invented, or assumed by AI.
      </p>
      <p>
        That is the danger of bolting AI onto business software after the fact:
        the model can sound right without being grounded in what is actually
        true.
      </p>
      <p>
        A language model doesn&apos;t replace the system of record.
      </p>
      <p>It sits beside it.</p>

      <h2>The question that changed everything</h2>
      <p>
        Early in the development of EstateIQ, I kept asking myself the same
        question.
      </p>
      <p>If a landlord asks:</p>
      <blockquote>&quot;How much rent is overdue this month?&quot;</blockquote>
      <p>Who should answer that question?</p>
      <p>Should the language model calculate the answer?</p>
      <p>Or should the application?</p>
      <p>
        At first, that distinction didn&apos;t seem important. Then I realized
        it changes everything.
      </p>
      <p>The application already knows:</p>
      <ul>
        <li>which leases are active</li>
        <li>which charges exist</li>
        <li>which payments have been received</li>
        <li>how allocations affect balances</li>
        <li>how overdue amounts are calculated</li>
      </ul>
      <p>Those rules already exist.</p>
      <p>Why move them into prompts?</p>

      <h2>Business logic belongs in software</h2>
      <p>This became one of the guiding principles of EstateIQ.</p>
      <p>
        Business rules should remain inside deterministic application code.
      </p>
      <p>
        Financial calculations should remain inside deterministic application
        code.
      </p>
      <p>
        Permission checks should remain inside deterministic application code.
      </p>
      <p>Validation should remain inside deterministic application code.</p>
      <p>
        The AI should not become another place where business rules quietly
        live.
      </p>
      <p>Instead, the application performs the work it already understands.</p>
      <p>The language model explains the results.</p>
      <p>That sounds like a subtle distinction.</p>
      <p>In practice, it&apos;s enormous.</p>

      <h2>Truth before conversation</h2>
      <p>Once I accepted that idea, the architecture began to shift.</p>
      <p>
        Instead of treating AI as the center of the application, I started
        treating it as another layer.
      </p>
      <p>The flow became much simpler.</p>
      <CodeDiagram>{`Structured Records
        ↓
Business Logic
        ↓
Verified Results
        ↓
AI Explanation`}</CodeDiagram>
      <p>The application owns the truth.</p>
      <p>The AI helps people understand it.</p>
      <p>That means when someone asks:</p>
      <blockquote>&quot;Why did expenses increase this month?&quot;</blockquote>
      <p>The AI isn&apos;t inventing an explanation.</p>
      <p>
        It&apos;s interpreting verified financial records produced by the
        application itself.
      </p>
      <p>That&apos;s a very different responsibility.</p>

      <h2>Trust isn&apos;t created by prompts</h2>
      <p>One lesson surprised me more than any other.</p>
      <p>Users don&apos;t trust software because it uses AI.</p>
      <p>
        They trust software because they believe its answers are grounded in
        something real.
      </p>
      <p>
        I&apos;ve shown EstateIQ to a lot of landlords at this point. The ones
        who trust it most are never the ones most impressed by the AI. They&apos;re
        impressed by the fact that the numbers match their bank statements. That
        the balance they see in the app matches the check they deposited.
      </p>
      <p>
        In high-trust domains — finance, healthcare, insurance, legal — correctness
        matters more than creativity.
      </p>
      <p>People don&apos;t need an answer that sounds convincing.</p>
      <p>They need an answer they can rely on.</p>
      <p>That kind of trust doesn&apos;t come from prompt engineering.</p>
      <p>It comes from software architecture.</p>

      <h2>A pattern began to emerge</h2>
      <p>As EstateIQ grew, solving one problem revealed another.</p>
      <p>
        If the AI shouldn&apos;t own business logic, how should it access the
        application&apos;s capabilities?
      </p>
      <p>
        If capabilities become explicit, how should they be organized?
      </p>
      <p>
        What happens when a user asks a question the system genuinely cannot
        answer?
      </p>
      <p>
        How should the product improve without encouraging the AI to guess?
      </p>
      <p>
        Over time, these stopped feeling like isolated implementation details.
      </p>
      <p>They began to form a coherent architectural pattern.</p>
      <p>I wasn&apos;t trying to invent a new architecture.</p>
      <p>I was trying to build software that people could trust.</p>
      <p>
        The architecture emerged from solving real engineering problems.
      </p>
      <p>
        In the next article, I&apos;ll share the biggest architectural mistake I
        made while building EstateIQ — and how correcting it completely changed
        the way I think about AI-native applications.
      </p>
    </ArticleLayout>
  );
}
