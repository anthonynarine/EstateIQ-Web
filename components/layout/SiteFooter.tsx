import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <Container className="border-t border-border-soft py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.6fr] lg:gap-16">
          <div className="max-w-md">
            <Link
              className="inline-flex items-center gap-3 rounded-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
              href="/"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="flex size-9 items-center justify-center rounded-2xl border border-brand-cyan/25 bg-brand-cyan/10 text-sm font-semibold text-brand-cyan shadow-glow-cyan">
                E
              </span>
              <span className="text-sm font-semibold tracking-tight text-text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-text-secondary">
              EstateIQ connects your portfolio, financial records, documents,
              reports, and AI so you can understand the business without
              digging through spreadsheets and folders.
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
              Built for independent owners
            </p>
            <a
              className="mt-3 inline-flex text-sm text-brand-cyan transition hover:text-brand-cyan-300 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <nav aria-label={group.title} key={group.title}>
                <h2 className="text-sm font-semibold text-text-primary">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="text-sm text-text-muted transition hover:text-text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-border-soft pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-faint">{siteConfig.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {siteConfig.socialLinks.map((social) => (
              <Link
                className="text-sm text-text-muted transition hover:text-text-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan"
                href={social.href}
                key={social.label}
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
