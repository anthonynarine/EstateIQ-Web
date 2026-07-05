import { PrimaryCTA } from "@/components/cta/PrimaryCTA";
import { SecondaryCTA } from "@/components/cta/SecondaryCTA";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

type FinalCTASectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function FinalCTASection({
  description = "Bring your buildings, money records, supported documents, reports, and AI into one place built for independent landlords.",
  eyebrow = "EstateIQ",
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  title = "Ready to run your rental business from one clearer system?",
}: FinalCTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Card className="overflow-hidden p-6 sm:p-10" variant="glass">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
                {eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryCTA href={primaryHref} label={primaryLabel} />
              <SecondaryCTA href={secondaryHref} label={secondaryLabel} />
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
