import type { Metadata, MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type PublicRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const siteUrl = new URL(siteConfig.siteUrl);

export const publicRoutes = [
  {
    path: "/",
    title: "EstateIQ | Financial Operating System for Small Landlords",
    description:
      "EstateIQ helps independent landlords understand what their portfolio earns, spends, and owes through ledger-first records, documents, reports, and grounded AI.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/product",
    title: "Product",
    description:
      "See how EstateIQ organizes properties, leases, expenses, documents, ledger records, reports, and AI insight into one financial command center.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/features",
    title: "Features",
    description:
      "Explore EstateIQ features for portfolio organization, lease records, ledger accounting, expenses, documents, deterministic reports, and grounded AI.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/ledger",
    title: "Ledger-First Accounting",
    description:
      "Learn how EstateIQ calculates balances from charges, payments, and allocations so every balance can trace back to source records.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/documents",
    title: "Document Intelligence",
    description:
      "Learn how EstateIQ keeps receipts, invoices, leases, and supporting files organized around verified financial and portfolio records.",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/reports",
    title: "Deterministic Reports",
    description:
      "See how EstateIQ reporting is built from the records behind the numbers, including ledger balances, expenses, and portfolio context.",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/ai-copilot",
    title: "AI Copilot",
    description:
      "EstateIQ AI Copilot helps interpret portfolio questions using verified ledger data, documents, reports, and source-backed context.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ai-academy",
    title: "AI Academy",
    description:
      "Learn how EstateIQ grounds AI in ledger records, documents, reports, leases, expenses, and payments before explaining portfolio answers.",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/ai-academy/grounded-ai",
    title: "Grounded AI",
    description:
      "Understand how EstateIQ AI answers from verified records and structured outputs instead of unsupported financial assumptions.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/ai-academy/analyst-tools",
    title: "Analyst Tools",
    description:
      "See how EstateIQ routes questions through deterministic analyst tools, selectors, and reporting logic before AI explains the answer.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/ai-academy/gap-tool",
    title: "Gap Tool",
    description:
      "Learn how EstateIQ captures unsupported questions as product signal without allowing AI to invent financial answers.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/ai-academy/financial-truth",
    title: "Financial Truth Before AI",
    description:
      "Learn why EstateIQ keeps charges, payments, allocations, expenses, documents, leases, and reports as the source of financial truth.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/security",
    title: "Security & Trust",
    description:
      "Review the EstateIQ trust foundation: organization isolation, role-aware access, deterministic records, document organization, and auditability.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/about",
    title: "About",
    description:
      "Learn why EstateIQ is built for independent landlords who need financial clarity without enterprise property management complexity.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Contact EstateIQ to join the beta, ask product questions, request a demo, or discuss security and trust topics.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/faq",
    title: "FAQ",
    description:
      "Get clear answers about EstateIQ's ledger-first accounting, grounded AI, document confirmation, portfolio structure, and trust boundaries.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/why-estateiq",
    title: "Why EstateIQ",
    description:
      "Read the EstateIQ philosophy for small landlord financial systems: ledger-first accounting, document-backed records, traceable reports, and grounded AI.",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/learn",
    title: "Learn Center",
    description:
      "Explore EstateIQ's education hub for small landlord financial foundations, ledger accounting, documents, AI, reporting, and portfolio operations.",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/docs",
    title: "Documentation",
    description:
      "Use the EstateIQ documentation hub for future product guides, financial system notes, AI Academy paths, security references, and release notes.",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/blog",
    title: "Blog",
    description:
      "Read EstateIQ architecture articles, product thinking, AI-native application notes, and future education for small landlord financial systems.",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/blog/why-ai-wrappers-arent-enough",
    title: "Why AI Wrappers Aren't Enough",
    description:
      "Why simple AI wrappers break down in high-trust domains, and what building EstateIQ taught us about trustworthy AI application architecture.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/biggest-mistake-building-ai-native-application",
    title: "The Biggest Mistake I Made Building an AI-Native Application",
    description:
      "How moving AI out of the center of EstateIQ clarified the role of business logic, deterministic records, and AI explanation.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/ai-should-explain-your-software",
    title: "AI Should Explain Your Software—Not Replace It",
    description:
      "Why AI-native applications should expose deterministic software capabilities through conversation instead of replacing the application itself.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/software-should-learn-from-questions-it-cannot-answer",
    title: "Software Should Learn From Questions It Cannot Answer",
    description:
      "Why unanswered questions in AI-native software should become structured product feedback instead of unsupported model-generated answers.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/introducing-dana",
    title: "Introducing DANA",
    description:
      "Introducing Deterministic AI-Native Architecture, the pattern behind EstateIQ for building trustworthy AI-native software on structured truth.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/the-six-layers-of-dana",
    title: "The Six Layers of DANA",
    description:
      "A practical blueprint for the six layers of Deterministic AI-Native Architecture: truth, domain, capability, conversation, AI, and intelligence.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/the-capability-layer",
    title: "The Capability Layer: Where Application Intelligence Lives",
    description:
      "Learn why DANA organizes AI-native applications around deterministic capabilities instead of prompts, and how this enables trustworthy, scalable AI software.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/the-gap-tool",
    title: "The Gap Tool: How AI-Native Applications Should Evolve",
    description:
      "Learn how unanswered questions become structured engineering work inside DANA, allowing AI-native applications to expand safely through deterministic capabilities instead of hallucinated answers.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/the-capability-registry",
    title: "The Capability Registry: Building an Operating System for Intelligence",
    description:
      "Learn how DANA organizes application intelligence using a Capability Registry, allowing AI-native applications to scale deterministically instead of growing through increasingly complex prompts.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/blog/ai-operations",
    title: "AI Operations: Running an AI-Native Application in Production",
    description:
      "Learn how DANA treats AI as production infrastructure by monitoring capability coverage, gap trends, prompt versions, latency, failures, and answer quality.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
  {
    path: "/changelog",
    title: "Changelog",
    description:
      "Follow completed EstateIQ website and product education milestones, including the design system, site shell, SEO foundation, and AI Academy.",
    changeFrequency: "monthly",
    priority: 0.55,
  },
] satisfies PublicRoute[];

export type PublicRoutePath = (typeof publicRoutes)[number]["path"];

export function absoluteUrl(path: string = "/") {
  return new URL(path, siteUrl).toString();
}

export function getPublicRoute(path: PublicRoutePath) {
  const route = publicRoutes.find((item) => item.path === path);

  if (!route) {
    throw new Error(`Missing SEO route config for ${path}`);
  }

  return route;
}

export function createPageMetadata(path: PublicRoutePath): Metadata {
  const route = getPublicRoute(path);
  const url = absoluteUrl(path);

  return {
    title: path === "/" ? { absolute: route.title } : route.title,
    description: route.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: path === "/" ? route.title : `${route.title} | ${siteConfig.name}`,
      description: route.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: path === "/" ? route.title : `${route.title} | ${siteConfig.name}`,
      description: route.description,
    },
  };
}

export const globalMetadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "EstateIQ | Financial Operating System for Small Landlords",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: "EstateIQ | Financial Operating System for Small Landlords",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "EstateIQ | Financial Operating System for Small Landlords",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    email: siteConfig.email,
    sameAs: siteConfig.socialLinks.map((link) => link.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description: siteConfig.description,
    audience: {
      "@type": "Audience",
      audienceType: siteConfig.audience,
    },
  },
] as const;
