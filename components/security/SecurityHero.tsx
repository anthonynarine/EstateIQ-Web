import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const portfolioRecords = ["Buildings", "Leases", "Ledger", "Documents"];

export function SecurityHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-cyan-glow opacity-65" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
              Security &amp; trust
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Your portfolio deserves more than a password.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              EstateIQ is designed with organization-scoped access,
              permission-checked files, traceable financial records, and clear
              limits around how AI works with your data.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.primaryCta.href} size="lg">
                {siteConfig.primaryCta.label}
              </Button>
              <Button
                href={siteConfig.secondaryCta.href}
                size="lg"
                variant="outline"
              >
                {siteConfig.secondaryCta.label}
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden p-5 sm:p-6" variant="glass">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
                  Private portfolio workspace
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  One access model across the product.
                </p>
              </div>
              <span className="rounded-full border border-brand-emerald/25 bg-brand-emerald/10 px-3 py-1 text-xs font-medium text-brand-emerald">
                Access scoped
              </span>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-4 py-2 text-center">
                <p className="text-xs font-semibold text-text-primary">
                  Verified member
                </p>
                <p className="mt-0.5 text-[10px] text-text-muted">
                  Signed in
                </p>
              </div>
            </div>
            <div className="mx-auto h-5 w-px bg-gradient-to-b from-brand-cyan/70 to-brand-violet/50" />
            <div className="mx-auto w-fit rounded-full border border-brand-violet/25 bg-brand-violet/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-violet">
              Permission checked
            </div>
            <div className="mx-auto h-5 w-px bg-gradient-to-b from-brand-violet/50 to-border-strong" />

            <div className="rounded-2xl border border-border-strong bg-surface/85 p-4 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Ocean View Rental
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Organization workspace
                  </p>
                </div>
                <span className="size-2 rounded-full bg-brand-emerald shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {portfolioRecords.map((record) => (
                  <div
                    className="rounded-xl border border-border-soft bg-background-app/70 px-3 py-2 text-center text-xs font-medium text-text-secondary"
                    key={record}
                  >
                    {record}
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-brand-violet/20 bg-brand-violet/5 px-3 py-2.5 text-center">
                <p className="text-xs font-semibold text-brand-violet">
                  EstateIQ AI
                </p>
                <p className="mt-1 text-[11px] leading-4 text-text-muted">
                  Same permissions. Grounded in accessible records.
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] leading-5 text-text-muted">
              Access is evaluated before portfolio records or files are
              returned.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
