import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExpandingCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  points?: string[];
}

interface ExpandingCardsProps {
  items: ExpandingCardItem[];
  className?: string;
  defaultActive?: number;
}

/**
 * Expanding cards: a horizontal accordion on desktop (hover / focus / click to
 * expand) that stacks into vertical expanding panels on small screens.
 */
export function ExpandingCards({ items, className, defaultActive = 0 }: ExpandingCardsProps) {
  const [active, setActive] = React.useState(defaultActive);

  return (
    <div
      className={cn(
        "flex flex-col gap-3 md:h-[560px] md:flex-row md:gap-4",
        className,
      )}
    >
      {items.map((item, i) => {
        const isActive = i === active;
        return (
          <button
            key={item.id}
            type="button"
            aria-expanded={isActive}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              "group relative overflow-hidden rounded-sm border border-border text-left outline-none",
              "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "focus-visible:ring-1 focus-visible:ring-ring",
              isActive ? "h-[420px] md:h-full md:flex-[3.2]" : "h-[132px] md:h-full md:flex-[0.85]",
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isActive ? "scale-100 opacity-70 grayscale-0" : "scale-105 opacity-40 grayscale",
              )}
            />
            <div className="absolute inset-0 hero-veil" />

            <div className="relative flex h-full flex-col justify-end p-5 md:p-7">
              <span className="eyebrow mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={cn(
                  "text-2xl leading-tight text-offwhite transition-all duration-700 md:text-3xl",
                  !isActive && "md:[writing-mode:vertical-rl] md:rotate-180 md:text-xl",
                )}
              >
                {item.title}
              </h3>

              <div
                className={cn(
                  "grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-sm text-sm leading-relaxed text-steel">
                    {item.description}
                  </p>
                  {item.points && (
                    <ul className="mt-4 space-y-1.5">
                      {item.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-steel">
                          <span className="h-px w-4 bg-steel" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-offwhite uppercase">
                    Enquire
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ExpandingCards;
