import { siteConfig } from "@/lib/site";

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
  { label: "Who It's For", href: "/who-its-for" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Security", href: "/security" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact#send-a-message" },
];

export const ctaNavigation: NavigationItem[] = [
  { label: siteConfig.login.label, href: siteConfig.login.href },
  { label: siteConfig.primaryCta.label, href: siteConfig.primaryCta.href },
];

export const footerNavigation: NavigationGroup[] = [
  {
    title: "Product",
    items: [
      { label: "Overview", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Who It's For", href: "/who-its-for" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "/docs" },
      { label: "AI Academy", href: "/ai-academy" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
