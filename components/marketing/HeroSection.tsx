import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HomepageSystemMap } from "@/components/visualizations/HomepageSystemMap";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-cyan-glow opacity-80" />
      <div className="absolute inset-0 -z-10 bg-dot-grid opacity-[0.18]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <Badge variant="brand">For independent landlords · 1–50 units</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Run your rental portfolio on software that understands it.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              EstateIQ is the financial operating system built for small
              landlords — ledger-backed records, connected documents, and AI
              that only answers from your own data.
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

          <HomepageSystemMap />
        </div>
      </Container>
    </section>
  );
}
