const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.estateiq.com";

function appRoute(path: string) {
  return new URL(path, appUrl).toString();
}

const registerUrl =
  process.env.NEXT_PUBLIC_APP_REGISTER_URL ?? appRoute("/register");
const loginUrl = process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? appRoute("/login");
const demoUrl =
  process.env.NEXT_PUBLIC_APP_DEMO_URL ??
  "https://propertyledger.org/dashboard?org=demo-portfolio";

export const siteConfig = {
  name: "EstateIQ",
  tagline: "The Financial Operating System for Small Landlords.",
  audience: "Independent landlords with 1-50 units",
  description:
    "EstateIQ helps independent landlords understand what their portfolio earns, spends, and owes through deterministic financial records, document intelligence, and AI-powered insights grounded in verified data.",
  appUrl,
  registerUrl,
  loginUrl,
  demoUrl,
  primaryCta: {
    label: "Start Your Free Account",
    href: registerUrl,
  },
  secondaryCta: {
    label: "Explore the Live Demo",
    href: demoUrl,
  },
  demoCta: {
    label: "Explore the Live Demo",
    href: demoUrl,
  },
  login: {
    label: "Login",
    href: loginUrl,
  },
  email: "hello@estateiq.com",
  githubUrl: "https://github.com/estateiq",
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
