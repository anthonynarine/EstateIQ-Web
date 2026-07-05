import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site";

export function BetaInterestPlaceholder() {
  return (
    <Card className="p-5 sm:p-6" variant="glass">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-cyan">
            Beta interest
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
            Beta interest flow coming soon.
          </h2>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            This visual form is a placeholder. No backend submission flow is
            connected in this phase. For now, contact EstateIQ directly at{" "}
            <a
              className="font-medium text-brand-cyan transition hover:text-brand-cyan-300 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>

        <form aria-label="Beta interest placeholder form" className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-text-primary" htmlFor="name">
              Name
            </label>
            <input
              className="h-11 rounded-2xl border border-border-soft bg-surface px-4 text-sm text-text-primary outline-none placeholder:text-text-faint disabled:cursor-not-allowed disabled:opacity-70"
              disabled
              id="name"
              name="name"
              placeholder="Coming soon"
              type="text"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-text-primary" htmlFor="email">
              Email
            </label>
            <input
              className="h-11 rounded-2xl border border-border-soft bg-surface px-4 text-sm text-text-primary outline-none placeholder:text-text-faint disabled:cursor-not-allowed disabled:opacity-70"
              disabled
              id="email"
              name="email"
              placeholder="Coming soon"
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <label
              className="text-sm font-medium text-text-primary"
              htmlFor="portfolio-size"
            >
              Portfolio size
            </label>
            <input
              className="h-11 rounded-2xl border border-border-soft bg-surface px-4 text-sm text-text-primary outline-none placeholder:text-text-faint disabled:cursor-not-allowed disabled:opacity-70"
              disabled
              id="portfolio-size"
              name="portfolio-size"
              placeholder="Coming soon"
              type="text"
            />
          </div>
          <Button disabled variant="secondary">
            Submission flow coming soon
          </Button>
        </form>
      </div>
    </Card>
  );
}
