import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

type ProductHeroPreviewItem =
  | string
  | {
      id?: string;
      label: string;
      href: string;
    };

type ProductHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  previewTitle: string;
  previewItems: ProductHeroPreviewItem[];
};

export function ProductHero({
  eyebrow,
  title,
  description,
  badge,
  previewTitle,
  previewItems,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-radial-cyan-glow opacity-70" />
      <div className="absolute inset-0 -z-10 bg-dot-grid opacity-[0.14]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
              {eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
              {description}
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
            {badge && <Badge variant="brand">{badge}</Badge>}
            <h2 className="mt-5 text-xl font-semibold text-text-primary">
              {previewTitle}
            </h2>
            <div className="mt-5 grid gap-3">
              {previewItems.map((item) => {
                const label = typeof item === "string" ? item : item.label;
                const key =
                  typeof item === "string"
                    ? label
                    : (item.id ?? `${item.href}:${item.label}`);

                if (typeof item !== "string") {
                  return (
                    <a
                      className="rounded-2xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-secondary transition hover:border-border-strong hover:bg-surface-elevated hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
                      href={item.href}
                      key={key}
                    >
                      {label}
                    </a>
                  );
                }

                return (
                  <div
                    className="rounded-2xl border border-border-soft bg-surface px-4 py-3 text-sm text-text-secondary"
                    key={key}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
