import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

type BrowserFrameProps = {
  children: ReactNode;
  label?: string;
};

export function BrowserFrame({ children, label = "Illustrative preview" }: BrowserFrameProps) {
  return (
    <Card className="overflow-hidden" variant="glass">
      <div className="flex items-center justify-between border-b border-border-soft bg-background-app-panel px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-rose-400/80" />
          <span className="size-2.5 rounded-full bg-amber-300/80" />
          <span className="size-2.5 rounded-full bg-emerald-300/80" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
          {label}
        </p>
      </div>
      <div className="bg-background-app-soft/60 p-4 sm:p-6">{children}</div>
    </Card>
  );
}
