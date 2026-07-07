import { cn } from "@/lib/cn";

type FlowConnectorProps = {
  className?: string;
  direction?: "horizontal" | "vertical";
  tone?: "brand" | "success" | "ai" | "warning" | "neutral";
  variant?: "solid" | "dotted" | "glow";
};

const lineClasses: Record<string, string> = {
  brand: "border-brand-cyan/35",
  success: "border-brand-emerald/35",
  ai: "border-brand-violet/35",
  warning: "border-brand-amber/35",
  neutral: "border-white/20",
};

const arrowClasses: Record<string, string> = {
  brand: "border-brand-cyan/35",
  success: "border-brand-emerald/35",
  ai: "border-brand-violet/35",
  warning: "border-brand-amber/35",
  neutral: "border-white/20",
};

export function FlowConnector({
  className,
  direction = "horizontal",
  tone = "neutral",
  variant = "solid",
}: FlowConnectorProps) {
  const isVertical = direction === "vertical";
  const line = lineClasses[tone] ?? lineClasses.neutral;
  const arrow = arrowClasses[tone] ?? arrowClasses.neutral;

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
          line,
          isVertical ? "h-6 border-l" : "w-full border-t",
          variant === "dotted" && "border-dotted",
          variant === "glow" && "shadow-[0_0_6px_rgba(167,139,250,0.4)]",
        )}
      >
        <span
          className={cn(
            "absolute size-2 rotate-45 border-r border-t",
            arrow,
            isVertical
              ? "-bottom-0.5 left-1/2 -translate-x-1/2 translate-y-px rotate-[135deg]"
              : "right-0 top-1/2 -translate-x-px -translate-y-1/2 rotate-45",
          )}
        />
      </span>
    </div>
  );
}
