import type { ReactNode } from "react";

import { BrowserFrame } from "@/components/showcase/BrowserFrame";

type ProductScreenshotProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ProductScreenshot({
  title,
  description,
  children,
}: ProductScreenshotProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
          Product preview
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-text-secondary">
          {description}
        </p>
        <p className="mt-4 text-xs leading-5 text-text-muted">
          Illustrative placeholder. Real screenshots can replace this preview
          when production product imagery is ready.
        </p>
      </div>
      <BrowserFrame>{children}</BrowserFrame>
    </div>
  );
}
