import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Card className="overflow-hidden p-6 sm:p-10" variant="glass">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
                EstateIQ
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Ready to understand your portfolio with confidence?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">
                Move from scattered records to a financial operating system
                built for independent landlords.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
        </Card>
      </Container>
    </section>
  );
}
