import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = {
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsButton = CommonButtonProps & {
  href?: never;
  id?: string;
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  value?: string;
};

type ButtonAsLink = CommonButtonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  rel?: string;
  target?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-button font-medium tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variantClasses = {
  primary:
    "bg-brand-cyan text-background-app shadow-glow-cyan hover:bg-brand-cyan-300",
  secondary:
    "border border-border bg-surface-elevated text-text-primary shadow-card-soft hover:border-border-strong hover:bg-surface-strong",
  ghost:
    "text-text-secondary hover:bg-surface-elevated hover:text-text-primary",
  outline:
    "border border-border-soft bg-transparent text-text-primary hover:border-border-strong hover:bg-surface",
};

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent opacity-80"
    />
  );
}

function shouldUseNativeAnchor(href: string) {
  return href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href);
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    disabled,
    leftIcon,
    rightIcon,
    isLoading,
    size = "md",
    variant = "primary",
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      {isLoading ? <Spinner /> : leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (props.href) {
    if (shouldUseNativeAnchor(props.href)) {
      return (
        <a
          aria-label={props["aria-label"]}
          aria-disabled={disabled || isLoading ? true : undefined}
          className={classes}
          href={props.href}
          onClick={props.onClick}
          rel={props.rel}
          target={props.target}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        aria-label={props["aria-label"]}
        aria-disabled={disabled || isLoading ? true : undefined}
        className={classes}
        href={props.href}
        onClick={props.onClick}
        rel={props.rel}
        target={props.target}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      aria-label={props["aria-label"]}
      className={classes}
      disabled={disabled || isLoading}
      id={buttonProps.id}
      name={buttonProps.name}
      onClick={buttonProps.onClick}
      type={buttonProps.type ?? "button"}
      value={buttonProps.value}
    >
      {content}
    </button>
  );
}
