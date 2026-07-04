import Link from "next/link";

import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { NavigationItem } from "@/components/layout/NavigationItem";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

function BrandMark() {
  return (
    <span className="flex size-9 items-center justify-center rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 text-sm font-semibold text-brand-cyan shadow-glow-cyan">
      EI
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background-app/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3 rounded-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
            href="/"
            aria-label={`${siteConfig.name} home`}
          >
            <BrandMark />
            <span className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-text-primary">
                {siteConfig.name}
              </span>
              <span className="hidden rounded-button border border-border-soft bg-surface px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-text-muted sm:inline-flex">
                Financial OS
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {mainNavigation.map((item) => (
              <NavigationItem item={item} key={item.href} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href={siteConfig.login.href} variant="ghost">
              {siteConfig.login.label}
            </Button>
            <Button href={siteConfig.primaryCta.href}>
              {siteConfig.primaryCta.label}
            </Button>
          </div>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
