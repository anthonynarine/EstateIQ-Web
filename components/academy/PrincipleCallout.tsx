import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";

type PrincipleCalloutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PrincipleCallout({
  eyebrow,
  title,
  children,
}: PrincipleCalloutProps) {
  return (
    <Card className="p-6 sm:p-8" variant="glass">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary">
        {title}
      </h3>
      <p className="mt-4 max-w-3xl text-base leading-7 text-text-secondary">
        {children}
      </p>
    </Card>
  );
}
