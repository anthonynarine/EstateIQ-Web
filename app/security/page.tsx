import type { Metadata } from "next";

import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { SecurityHero } from "@/components/security/SecurityHero";
import { ProductSection } from "@/components/product/ProductSection";
import { Card } from "@/components/ui/Card";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("/security");

const trustPrinciples = [
  {
    number: "01",
    title: "Your workspace sets the boundary",
    description:
      "Buildings, units, tenants, leases, financial records, and documents are organized within an organization workspace.",
  },
  {
    number: "02",
    title: "Access is permission-aware",
    description:
      "Authentication establishes identity. Active membership and authorization determine what that identity can access.",
  },
  {
    number: "03",
    title: "Financial history stays traceable",
    description:
      "Balances come from charges, payments, and allocations. Related financial writes use database transactions so they succeed or roll back together.",
  },
];

const sessionControls = [
  {
    value: "10 minutes",
    label: "Default production access-token lifetime",
  },
  {
    value: "Rotating",
    label: "Refresh tokens are replaced after use",
  },
  {
    value: "Blacklisted",
    label: "Invalidated refresh tokens are rejected",
  },
];

const protectedWorkflows = [
  {
    eyebrow: "Documents",
    title: "Files are not treated like public links.",
    description:
      "Production uploads use private S3-compatible storage. Downloads are permission-checked, and generated links expire after five minutes by default.",
  },
  {
    eyebrow: "EstateIQ AI",
    title: "AI explains records. It does not replace them.",
    description:
      "The AI layer is read-only against financial records. Deterministic tools prepare accessible portfolio facts before AI explains them in plain language.",
  },
];

const documentedControls = [
  "Short-lived, rotating sessions",
  "Organization-scoped access",
  "Five-minute signed document links",
  "Read-only AI against financial records",
];

const unsupportedClaims = [
  "Vague bank-grade language",
  "Undocumented certifications",
  "Unverified compliance status",
  "Absolute security guarantees",
];

export default function SecurityPage() {
  return (
    <>
      <SecurityHero />

      <ProductSection
        background="soft"
        description="The same boundary follows buildings, units, tenants, leases, money, and documents, so protection does not disappear when the workflow changes."
        eyebrow="Your portfolio"
        title="Security follows the record."
      >
        <Card className="p-5 sm:p-7" variant="glass">
          <div className="grid items-stretch lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)]">
            {trustPrinciples.map((item, index) => (
              <div className="contents" key={item.number}>
                <div className="rounded-2xl border border-border-soft bg-surface/70 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-cyan/25 bg-brand-cyan/10 font-mono text-[11px] font-semibold text-brand-cyan">
                      {item.number}
                    </span>
                    <h3 className="text-base font-semibold text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-text-secondary">
                    {item.description}
                  </p>
                </div>
                {index < trustPrinciples.length - 1 && (
                  <div aria-hidden="true" className="flex h-8 items-center justify-center lg:h-auto">
                    <span className="h-full w-px bg-gradient-to-b from-brand-cyan/15 via-brand-cyan/60 to-brand-violet/15 lg:h-px lg:w-full lg:bg-gradient-to-r" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border-soft pt-5 text-xs text-text-muted">
            <span>Buildings</span>
            <span>Units</span>
            <span>Tenants</span>
            <span>Leases</span>
            <span>Ledger</span>
            <span>Documents</span>
          </div>
        </Card>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {sessionControls.map((control) => (
            <div
              className="rounded-2xl border border-border-soft bg-surface/60 px-5 py-4"
              key={control.label}
            >
              <p className="font-mono text-sm font-semibold text-brand-cyan">
                {control.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-text-muted">
                {control.label}
              </p>
            </div>
          ))}
        </div>
      </ProductSection>

      <ProductSection
        description="Documents, AI, and subscription billing each have a defined role. None of them should become a shortcut around the controls protecting the rest of the portfolio."
        eyebrow="Sensitive workflows"
        title="Connected, without creating a back door."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {protectedWorkflows.map((item) => (
            <Card className="p-6 sm:p-7" key={item.title} variant="outline">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
                {item.eyebrow}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
            </Card>
          ))}
          <Card className="p-5 sm:p-6 lg:col-span-2" variant="glass">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-emerald">
                  Subscription billing
                </p>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">
                  Billing events are verified before they change access.
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Stripe hosts checkout and billing management. EstateIQ
                  validates each webhook signature before accepting a
                  subscription change, and card data does not pass through the
                  EstateIQ application.
                </p>
              </div>
              <span className="w-fit shrink-0 rounded-full border border-brand-emerald/25 bg-brand-emerald/10 px-4 py-2 text-xs font-medium text-brand-emerald">
                Hosted by Stripe
              </span>
            </div>
          </Card>
        </div>
      </ProductSection>

      <ProductSection
        background="soft"
        description="We explain the controls EstateIQ is designed around and avoid certifications, guarantees, or compliance claims the product has not earned."
        eyebrow="Plain-language trust"
        title="Specific controls beat impressive-sounding claims."
      >
        <Card className="overflow-hidden" variant="glass">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border-soft p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-emerald">
                What we document
              </p>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Controls you can understand
              </h3>
              <div className="mt-5 grid gap-3">
                {documentedControls.map((item) => (
                  <div
                    className="flex items-center gap-3 text-sm text-text-secondary"
                    key={item}
                  >
                    <span className="size-1.5 rounded-full bg-brand-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                What we do not claim
              </p>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Promises without proof
              </h3>
              <div className="mt-5 grid gap-3">
                {unsupportedClaims.map((item) => (
                  <div
                    className="flex items-center gap-3 text-sm text-text-muted"
                    key={item}
                  >
                    <span className="h-px w-2 bg-text-muted/60" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </ProductSection>

      <FinalCTASection
        description="Have a security or trust question? We will explain the controls EstateIQ has today, plainly and directly."
        eyebrow="EstateIQ security"
        secondaryHref={`mailto:${siteConfig.securityEmail}`}
        secondaryLabel="Ask a security question"
        title="Your portfolio should feel connected, not exposed."
      />
    </>
  );
}
