"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavigationItem as NavigationItemType } from "@/lib/navigation";
import { cn } from "@/lib/cn";

type NavigationItemProps = {
  item: NavigationItemType;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavigationItem({
  item,
  onNavigate,
  variant = "desktop",
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = isActivePath(pathname, item.href);

  if (variant === "mobile") {
    return (
      <Link
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "flex min-h-11 items-center justify-between rounded-2xl border px-4 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan",
          isActive
            ? "border-brand-cyan/35 bg-brand-cyan/10 text-brand-cyan"
            : "border-border-soft bg-surface text-text-secondary hover:border-border hover:bg-surface-elevated hover:text-text-primary",
        )}
        href={item.href}
        onClick={onNavigate}
      >
        {item.label}
        {isActive && <span className="size-1.5 rounded-full bg-brand-cyan" />}
      </Link>
    );
  }

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative rounded-button px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan",
        isActive
          ? "text-text-primary"
          : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
      )}
      href={item.href}
    >
      {item.label}
      {isActive && (
        <span className="absolute inset-x-3 -bottom-px h-px bg-brand-cyan shadow-glow-cyan" />
      )}
    </Link>
  );
}
