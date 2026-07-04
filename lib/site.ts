export const siteConfig = {
  name: "EstateIQ",
  tagline: "The Financial Operating System for Small Landlords.",
  audience: "Independent landlords with 1-50 units",
  description:
    "EstateIQ helps independent landlords understand what their portfolio earns, spends, and owes through deterministic financial records, document intelligence, and AI-powered insights grounded in verified data.",
  primaryCta: {
    label: "Join the beta",
    href: "/contact",
  },
  secondaryCta: {
    label: "View demo",
    href: "/product",
  },
  login: {
    label: "Login",
    href: "/login",
  },
  email: "hello@estateiq.com",
  githubUrl: "https://github.com/estateiq",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "/login",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://estateiq.com",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/estateiq",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/estateiq",
    },
    {
      label: "X",
      href: "https://x.com/estateiq",
    },
  ],
  copyright: `© ${new Date().getFullYear()} EstateIQ. All rights reserved.`,
} as const;
