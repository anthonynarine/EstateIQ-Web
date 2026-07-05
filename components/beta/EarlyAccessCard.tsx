import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site";

export function EarlyAccessCard() {
  return (
    <Card className="p-5 sm:p-6" variant="outline">
      <h3 className="text-lg font-semibold text-text-primary">
        Early access is handled through conversation first.
      </h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">
        There is no working signup backend on this site yet. The current path
        is to contact EstateIQ directly and describe your portfolio and
        financial workflows.
      </p>
      <div className="mt-5">
        <Button href={siteConfig.primaryCta.href} size="sm">
          {siteConfig.primaryCta.label}
        </Button>
      </div>
    </Card>
  );
}
