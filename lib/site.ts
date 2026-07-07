const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://propertyledger.org";

function appRoute(path: string) {
  return new URL(path, appUrl).toString();
}

const registerUrl =
  process.env.NEXT_PUBLIC_APP_REGISTER_URL ?? appRoute("/register");
const loginUrl = process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? appRoute("/login");
const demoUrl =
  process.env.NEXT_PUBLIC_APP_DEMO_URL ?? appRoute("/demo");

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
    label: "Get Started",
    href: registerUrl,
  },
  secondaryCta: {
    label: "See how it works",
    href: demoUrl,
  },
  demoCta: {
    label: "See how it works",
    href: demoUrl,
  },
  login: {
    label: "Login",
    href: loginUrl,
  },
  email: "hello@estateiq.com",
  githubUrl: "https://github.com/anthonynarine",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://estateiq.me",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/anthonynarine",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anthony-narine-9ab567245/",
    },
  ],
  copyright: `© ${new Date().getFullYear()} EstateIQ. All rights reserved.`,
} as const;
