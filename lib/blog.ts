export type BlogArticle = {
  title: string;
  subtitle: string;
  category: string;
  series: string;
  readingTime: string;
  slug: string;
  href: string;
  status: "Published" | "Coming soon";
};

export const danaArticles = [
  {
    title: "Why AI Wrappers Aren't Enough",
    subtitle:
      "What building EstateIQ taught me about designing trustworthy AI applications.",
    category: "Architecture",
    series: "DANA",
    readingTime: "5 min read",
    slug: "why-ai-wrappers-arent-enough",
    href: "/blog/why-ai-wrappers-arent-enough",
    status: "Published",
  },
  {
    title: "The Biggest Mistake I Made Building an AI-Native Application",
    subtitle:
      "How moving AI out of the center completely changed the architecture of EstateIQ.",
    category: "Architecture",
    series: "DANA",
    readingTime: "5 min read",
    slug: "biggest-mistake-building-ai-native-application",
    href: "/blog/biggest-mistake-building-ai-native-application",
    status: "Published",
  },
  {
    title: "AI Should Explain Your Software—Not Replace It",
    subtitle:
      "The most important architectural decision we made while building EstateIQ.",
    category: "Architecture",
    series: "DANA",
    readingTime: "6 min read",
    slug: "ai-should-explain-your-software",
    href: "/blog/ai-should-explain-your-software",
    status: "Published",
  },
  {
    title: "Software Should Learn From Questions It Cannot Answer",
    subtitle:
      "Why unanswered questions shouldn't become hallucinations—they should become the roadmap.",
    category: "Architecture",
    series: "DANA",
    readingTime: "5 min read",
    slug: "software-should-learn-from-questions-it-cannot-answer",
    href: "/blog/software-should-learn-from-questions-it-cannot-answer",
    status: "Published",
  },
  {
    title: "Meet DANA.",
    subtitle:
      "The intelligence layer behind EstateIQ — built on verified records, not assumptions.",
    category: "Architecture",
    series: "DANA",
    readingTime: "5 min read",
    slug: "introducing-dana",
    href: "/blog/introducing-dana",
    status: "Published",
  },
  {
    title: "The Six Layers of DANA",
    subtitle:
      "A practical blueprint for building trustworthy AI-native applications.",
    category: "Architecture",
    series: "DANA",
    readingTime: "6 min read",
    slug: "the-six-layers-of-dana",
    href: "/blog/the-six-layers-of-dana",
    status: "Published",
  },
  {
    title: "The Capability Layer",
    subtitle:
      "Why modern AI-native applications should organize around capabilities instead of prompts.",
    category: "Architecture",
    series: "DANA",
    readingTime: "9 min read",
    slug: "the-capability-layer",
    href: "/blog/the-capability-layer",
    status: "Published",
  },
  {
    title: "The Gap Tool: How AI-Native Applications Should Evolve",
    subtitle:
      "Turning unanswered questions into deterministic software capabilities.",
    category: "Architecture",
    series: "DANA",
    readingTime: "10 min read",
    slug: "the-gap-tool",
    href: "/blog/the-gap-tool",
    status: "Published",
  },
  {
    title: "The Capability Registry: Building an Operating System for Intelligence",
    subtitle:
      "Why every deterministic capability should become a first-class software asset.",
    category: "Architecture",
    series: "DANA",
    readingTime: "9 min read",
    slug: "the-capability-registry",
    href: "/blog/the-capability-registry",
    status: "Published",
  },
  {
    title: "AI Operations: Running an AI-Native Application in Production",
    subtitle:
      "Why trustworthy AI systems need observability, coverage metrics, and operational discipline.",
    category: "Architecture",
    series: "DANA",
    readingTime: "10 min read",
    slug: "ai-operations",
    href: "/blog/ai-operations",
    status: "Published",
  },
] satisfies BlogArticle[];

export const upcomingDanaArticles = [
  "Business Logic Does Not Belong in Prompts",
  "Building AI That Earns Trust",
];

export function getDanaArticle(slug: string) {
  const article = danaArticles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Missing DANA article for slug: ${slug}`);
  }

  return article;
}

export function getDanaArticleNavigation(slug: string) {
  const index = danaArticles.findIndex((item) => item.slug === slug);

  if (index === -1) {
    throw new Error(`Missing DANA article navigation for slug: ${slug}`);
  }

  return {
    previous: index > 0 ? danaArticles[index - 1] : undefined,
    next: index < danaArticles.length - 1 ? danaArticles[index + 1] : undefined,
  };
}
