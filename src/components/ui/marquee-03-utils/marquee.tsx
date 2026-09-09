import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Seconds for one full loop. */
  duration?: number;
  /** Pause the animation while hovered. */
  pauseOnHover?: boolean;
  /** Fade the top and bottom edges. */
  fade?: boolean;
  children: React.ReactNode;
}

/**
 * Vertical marquee: duplicates its children once and translates the track
 * by -50% so the loop is seamless.
 */
export function Marquee({
  duration = 40,
  pauseOnHover = true,
  fade = true,
  className,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      style={
        fade
          ? {
              maskImage:
                "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            }
          : undefined
      }
      {...props}
    >
      <div
        className={cn(
          "flex flex-col will-change-transform motion-reduce:animate-none",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{
          animation: `marquee-up ${duration}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 flex-col">{children}</div>
        <div aria-hidden className="flex shrink-0 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
