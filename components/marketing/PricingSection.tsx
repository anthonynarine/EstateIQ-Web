import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

type PricingPlan = {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  highlight?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    priceNote: "Free forever, no card required",
    tagline: "See your real financial picture before you commit to anything.",
    features: [
      "Up to 3 units",
      "3 AI questions a day",
      "500MB document storage",
    ],
    ctaLabel: "Start free",
  },
  {
    name: "Starter",
    price: "$19",
    priceNote: "$15.83/mo billed annually",
    tagline:
      "An everyday AI copilot for portfolios that are starting to grow.",
    features: [
      "20 AI questions a day",
      "Room to grow — up to 10 units",
      "2GB document storage",
    ],
    ctaLabel: "Get Starter",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$49",
    priceNote: "$40.83/mo billed annually",
    tagline: "Full AI power for landlords running a real portfolio.",
    features: [
      "50 AI questions a day",
      "Document Q&A — ask your leases and invoices directly",
      "Up to 50 units",
      "10GB document storage",
    ],
    ctaLabel: "Get Pro",
  },
];

export function PricingSection() {
  return (
    <Section
      description="No processing fees, no per-unit charges hiding in the fine print. Every plan runs on the same deterministic ledger — you're paying for more AI headroom, not a different product."
      eyebrow="Pricing"
      id="pricing"
      title="Start free. Upgrade when the AI earns it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            className={cn(
              "flex flex-col p-6",
              plan.highlight && "border-brand-cyan/30 shadow-glow-cyan",
            )}
            key={plan.name}
            variant={plan.highlight ? "glass" : "outline"}
          >
            <div className="mb-4 flex h-6 items-center">
              {plan.highlight && (
                <Badge variant="brand">Most popular</Badge>
              )}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              {plan.name}
            </p>

            <div className="mt-2 flex items-end gap-1">
              <span className="text-3xl font-bold tracking-tight text-text-primary">
                {plan.price}
              </span>
              {plan.price !== "$0" && (
                <span className="mb-1 text-sm text-text-secondary">
                  /month
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-text-muted">{plan.priceNote}</p>

            <p className="mt-4 text-sm leading-6 text-text-secondary">
              {plan.tagline}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {plan.features.map((feature) => (
                <li
                  className="flex items-start gap-2 text-sm text-text-secondary"
                  key={feature}
                >
                  <span className="mt-0.5 text-brand-emerald">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="mt-6"
              href={siteConfig.registerUrl}
              variant={plan.highlight ? "primary" : "secondary"}
            >
              {plan.ctaLabel}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
