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
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  { label: "Ledger", href: "/ledger" },
  { label: "AI Copilot", href: "/ai-copilot" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const ctaNavigation: NavigationItem[] = [
  { label: "Login", href: "/login" },
  { label: "Join the beta", href: "/contact" },
];

export const footerNavigation: NavigationGroup[] = [
  {
    title: "Product",
    items: [
      { label: "Product", href: "/product" },
      { label: "Features", href: "/features" },
      { label: "Ledger", href: "/ledger" },
      { label: "AI Copilot", href: "/ai-copilot" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];
