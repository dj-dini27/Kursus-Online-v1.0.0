"use client";

import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  /** Render styling onto the single child element (e.g. <Link>) instead of a <button>. */
  asChild?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 border border-transparent font-sans text-label font-semibold uppercase tracking-button transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
  secondary:
    "bg-foreground text-background hover:bg-primary hover:text-primary-foreground",
  outline:
    "border-foreground/25 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
  ghost:
    "bg-transparent text-muted-foreground hover:text-foreground",
  inverse:
    "bg-background text-foreground hover:bg-primary hover:text-primary-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2",
  md: "min-h-11 px-6 py-3",
  lg: "min-h-12 px-8 py-4",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
} = {}) {
  return [base, variants[variant], sizes[size], fullWidth ? "w-full" : "", className]
    .filter(Boolean)
    .join(" ");
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className = "",
  disabled = false,
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = buttonVariants({ variant, size, fullWidth, className });

  // Render child element (e.g. <Link>) with button styling, avoiding <button><a/></button>.
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: [classes, child.props.className].filter(Boolean).join(" "),
    });
  }

  return (
    <button disabled={disabled || loading} className={classes} {...props}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}
