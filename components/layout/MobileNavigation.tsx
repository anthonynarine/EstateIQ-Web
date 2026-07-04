"use client";

import { useEffect, useId, useState } from "react";

import { Button } from "@/components/ui/Button";
import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { NavigationItem } from "@/components/layout/NavigationItem";
import { cn } from "@/lib/cn";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex size-10 items-center justify-center rounded-button border border-border-soft bg-surface text-text-primary transition hover:border-border hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="relative size-4" aria-hidden="true">
          <span
            className={cn(
              "absolute left-0 top-1 h-px w-4 bg-current transition",
              isOpen && "top-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-2 h-px w-4 bg-current transition",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-3 h-px w-4 bg-current transition",
              isOpen && "top-2 -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background-app/70 backdrop-blur-sm transition-opacity duration-200",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        id={menuId}
        className={cn(
          "fixed inset-x-3 top-20 z-50 origin-top rounded-panel border border-border bg-background-app-panel/95 p-3 shadow-card-soft backdrop-blur-xl transition duration-200",
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0",
        )}
      >
        <nav aria-label="Mobile navigation" className="grid gap-2">
          {mainNavigation.map((item) => (
            <NavigationItem
              item={item}
              key={item.href}
              onNavigate={() => setIsOpen(false)}
              variant="mobile"
            />
          ))}
        </nav>

        <div className="mt-3 grid gap-2 border-t border-border-soft pt-3">
          <Button
            className="w-full"
            href={siteConfig.login.href}
            onClick={() => setIsOpen(false)}
            variant="outline"
          >
            {siteConfig.login.label}
          </Button>
          <Button
            className="w-full"
            href={siteConfig.primaryCta.href}
            onClick={() => setIsOpen(false)}
          >
            {siteConfig.primaryCta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
