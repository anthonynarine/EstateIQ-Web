import { cn } from "@/lib/cn";

type FlowConnectorProps = {
  className?: string;
  direction?: "horizontal" | "vertical";
  tone?: "brand" | "success" | "ai" | "warning" | "neutral";
  variant?: "solid" | "dotted" | "glow";
};

const toneClasses = {
  brand: "border-brand-cyan text-brand-cyan",
  success: "border-brand-emerald text-brand-emerald",
  ai: "border-brand-violet text-brand-violet",
  warning: "border-brand-amber text-brand-amber",
  neutral: "border-border-strong text-text-muted",
};

export function FlowConnector({
  className,
  direction = "horizontal",
  tone = "brand",
  variant = "solid",
}: FlowConnectorProps) {
  const isVertical = direction === "vertical";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center",
        isVertical ? "h-6 w-full" : "hidden h-full lg:flex",
        className,
      )}
    >
      <span
        className={cn(
          "relative block",
          isVertical ? "h-6 border-l" : "w-full border-t",
          variant === "dotted" && "border-dotted",
          variant === "glow" && "shadow-glow-violet",
          toneClasses[tone],
        )}
      >
        <span
          className={cn(
            "absolute size-2 rotate-45 border-r border-t",
            isVertical
              ? "-bottom-0.5 left-1/2 -translate-x-1/2 translate-y-px rotate-[135deg]"
              : "right-0 top-1/2 -translate-x-px -translate-y-1/2 rotate-45",
            toneClasses[tone],
          )}
        />
      </span>
    </div>
  );
}

