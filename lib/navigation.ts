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
      { label: "Documents", href: "/documents" },
      { label: "Reports", href: "/reports" },
      { label: "AI Copilot", href: "/ai-copilot" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "/docs" },
      { label: "Learn", href: "/learn" },
      { label: "AI Academy", href: "/ai-academy" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Why EstateIQ", href: "/why-estateiq" },
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
