import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function AiHero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-violet-glow opacity-75" />
      <div className="absolute inset-0 -z-10 bg-dot-grid opacity-[0.12]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-violet">
              EstateIQ AI Copilot
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              AI grounded in verified financial records.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              EstateIQ Copilot explains structured portfolio data, ledger
              records, documents, and reports. It helps interpret financial
              truth without replacing the records that prove it.
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

          <Card className="p-5 sm:p-6" variant="glass">
            <Badge variant="ai">Grounded, deterministic, traceable</Badge>
            <div className="mt-5 grid gap-3">
              {[
                "References structured records",
                "Uses ledger-backed context",
                "Explains reports and documents",
                "Does not invent balances",
              ].map((item) => (
                <div
                  className="rounded-2xl border border-brand-violet/20 bg-brand-violet/10 px-4 py-3 text-sm text-text-secondary"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
