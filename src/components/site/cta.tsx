import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: "solid" | "ghost";
  withArrow?: boolean;
}

export function Cta({
  tone = "solid",
  withArrow = true,
  className,
  children,
  ...props
}: CtaProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-3 px-7 py-4 text-xs tracking-[0.22em] uppercase transition-all duration-500",
        tone === "solid"
          ? "bg-offwhite text-background hover:bg-steel"
          : "border border-border text-offwhite hover:border-steel hover:bg-secondary",
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
      )}
    </a>
  );
}
