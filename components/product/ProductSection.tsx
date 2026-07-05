import type { ReactNode } from "react";

import { Section } from "@/components/ui/Section";

type ProductSectionProps = {
  children: ReactNode;
  eyebrow: string;
  title: string;
  description?: string;
  background?: "default" | "soft" | "panel" | "grid";
  id?: string;
  tabIndex?: number;
};

export function ProductSection({
  children,
  eyebrow,
  title,
  description,
  background = "default",
  id,
  tabIndex,
}: ProductSectionProps) {
  return (
    <Section
      background={background}
      description={description}
      eyebrow={eyebrow}
      id={id}
      tabIndex={tabIndex}
      title={title}
    >
      {children}
    </Section>
  );
}
