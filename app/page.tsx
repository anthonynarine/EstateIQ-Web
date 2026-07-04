import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <Container className="flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
          EstateIQ
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          The Financial Operating System for Small Landlords.
        </h1>
        <p className="mt-6 text-base leading-7 text-text-secondary sm:text-lg">
          Site shell initialized. Homepage build begins in Phase 2.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={siteConfig.primaryCta.href}>
            {siteConfig.primaryCta.label}
          </Button>
          <Button href={siteConfig.secondaryCta.href} variant="outline">
            {siteConfig.secondaryCta.label}
          </Button>
        </div>
      </div>
    </Container>
  );
}
