import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const ledgerRows = [
  ["Expected rent", "Ledger-backed"],
  ["Operating spend", "Document-linked"],
  ["Open balances", "Derived"],
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-cyan-glow opacity-80" />
      <div className="absolute inset-0 -z-10 bg-dot-grid opacity-[0.18]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <Badge variant="brand">Financial OS for small landlords</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Know exactly what your portfolio earns, spends, and owes.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              EstateIQ is the Financial Operating System for Small Landlords.
              It connects ledger-backed records, documents, deterministic
              reports, and AI-powered insights grounded in verified financial
              data.
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

          <Card className="relative overflow-hidden p-5 sm:p-6" variant="glass">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-cyan/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
                    Portfolio view
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-text-primary">
                    Financial command center
                  </h2>
                </div>
                <span className="rounded-button border border-brand-emerald/25 bg-brand-emerald/10 px-3 py-1 text-xs font-medium text-brand-emerald">
                  Clear
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {ledgerRows.map(([label, status]) => (
                  <div
                    className="flex items-center justify-between rounded-2xl border border-border-soft bg-surface px-4 py-3"
                    key={label}
                  >
                    <span className="text-sm text-text-secondary">{label}</span>
                    <span className="text-sm font-medium text-text-primary">
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-brand-violet/20 bg-brand-violet/10 p-4">
                <p className="text-sm font-medium text-brand-violet">
                  Grounded AI layer
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Copilot interprets verified records, ledger data, documents,
                  and reports without replacing the system of record.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
