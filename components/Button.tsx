import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Shared = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
};

type ButtonAsAnchor = Shared &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variants: Record<NonNullable<Shared["variant"]>, string> = {
  primary:
    "bg-accent text-[#06210f] shadow-glow hover:brightness-110 active:scale-[0.98]",
  outline:
    "border border-white/15 bg-white/5 text-slate-100 hover:border-accent/50 hover:bg-white/[0.07]",
  ghost: "text-slate-200 hover:bg-white/10",
};

const sizes: Record<NonNullable<Shared["size"]>, string> = {
  md: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
  lg: "px-6 py-3 text-base sm:px-8 sm:py-3.5 sm:text-lg",
};

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "md", ...rest } = props;
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
