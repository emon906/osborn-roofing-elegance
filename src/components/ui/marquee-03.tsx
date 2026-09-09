import { Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee-03-utils/marquee";
import { cn } from "@/lib/utils";

export interface MarqueeTestimonial {
  name: string;
  location: string;
  quote: string;
  initials: string;
}

interface Marquee03Props {
  testimonials: MarqueeTestimonial[];
  className?: string;
}

function TestimonialCard({ t }: { t: MarqueeTestimonial }) {
  return (
    <figure className="mb-4 rounded-sm border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-steel/50">
      <Quote className="h-4 w-4 text-steel" />
      <blockquote className="mt-4 text-sm leading-relaxed text-offwhite/85">
        {t.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-[11px] tracking-widest text-steel">
          {t.initials}
        </span>
        <span className="text-xs">
          <span className="block text-offwhite">{t.name}</span>
          <span className="block text-steel">{t.location}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Vertical, pause-on-hover testimonial marquee (three columns on desktop). */
export function Marquee03({ testimonials, className }: Marquee03Props) {
  const columns = [0, 1, 2].map((c) =>
    testimonials.filter((_, i) => i % 3 === c),
  );

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {columns.map((col, i) => (
        <Marquee
          key={i}
          duration={38 + i * 9}
          className={cn("h-[520px]", i === 2 && "hidden lg:block", i === 1 && "hidden sm:block")}
        >
          {col.map((t) => (
            <TestimonialCard key={t.name + t.quote} t={t} />
          ))}
        </Marquee>
      ))}
    </div>
  );
}

export default Marquee03;
