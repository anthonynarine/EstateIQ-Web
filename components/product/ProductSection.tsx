import type { ReactNode } from "react";

import { Section } from "@/components/ui/Section";

type ProductSectionProps = {
  children: ReactNode;
  eyebrow: string;
  title: string;
  description?: string;
  background?: "default" | "soft" | "panel" | "grid";
};

export function ProductSection({
  children,
  eyebrow,
  title,
  description,
  background = "default",
}: ProductSectionProps) {
  return (
    <Section
      background={background}
      description={description}
      eyebrow={eyebrow}
      title={title}
    >
      {children}
    </Section>
  );
}
