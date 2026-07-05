import { Button, type ButtonProps } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type SecondaryCTAProps = Partial<Pick<ButtonProps, "className" | "size">> & {
  label?: string;
  href?: string;
};

export function SecondaryCTA({
  className,
  href = siteConfig.secondaryCta.href,
  label = siteConfig.secondaryCta.label,
  size = "lg",
}: SecondaryCTAProps) {
  return (
    <Button className={className} href={href} size={size} variant="outline">
      {label}
    </Button>
  );
}
