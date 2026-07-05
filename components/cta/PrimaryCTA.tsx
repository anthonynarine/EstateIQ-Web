import { Button, type ButtonProps } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type PrimaryCTAProps = Partial<Pick<ButtonProps, "className" | "size">> & {
  label?: string;
  href?: string;
};

export function PrimaryCTA({
  className,
  href = siteConfig.primaryCta.href,
  label = siteConfig.primaryCta.label,
  size = "lg",
}: PrimaryCTAProps) {
  return (
    <Button className={className} href={href} size={size}>
      {label}
    </Button>
  );
}
