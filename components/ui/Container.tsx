import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const sizeClasses = {
  narrow: "max-w-[768px]",
  default: "max-w-[1280px]",
  wide: "max-w-[1440px]",
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "default",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-6",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
