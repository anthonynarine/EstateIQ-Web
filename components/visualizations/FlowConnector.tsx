import { cn } from "@/lib/cn";

type FlowConnectorProps = {
  className?: string;
  direction?: "horizontal" | "vertical";
  tone?: "brand" | "success" | "ai" | "warning" | "neutral";
  variant?: "solid" | "dotted" | "glow";
};

export function FlowConnector({
  className,
  direction = "horizontal",
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
          "relative block border-white/20",
          isVertical ? "h-6 border-l" : "w-full border-t",
          variant === "dotted" && "border-dotted",
          variant === "glow" && "shadow-[0_0_6px_rgba(167,139,250,0.4)]",
        )}
      >
        <span
          className={cn(
            "absolute size-2 rotate-45 border-r border-t border-white/20",
            isVertical
              ? "-bottom-0.5 left-1/2 -translate-x-1/2 translate-y-px rotate-[135deg]"
              : "right-0 top-1/2 -translate-x-px -translate-y-1/2 rotate-45",
          )}
        />
      </span>
    </div>
  );
}
