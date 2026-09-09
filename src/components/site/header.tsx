import * as React from "react";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT } from "@/components/site/data";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#project", label: "Project" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="leading-tight">
          <span className="block font-display text-base tracking-[0.22em] text-offwhite uppercase">
            Osborn Roofing
          </span>
          <span className="block text-[10px] tracking-[0.3em] text-steel uppercase">
            Western Australia
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.18em] text-steel uppercase transition-colors hover:text-offwhite"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 border border-border px-5 py-2.5 text-xs tracking-[0.18em] text-offwhite uppercase transition-colors hover:border-steel hover:bg-secondary sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {CONTACT.phone}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-offwhite lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]",
        )}
      >
        <nav className="flex flex-col overflow-hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border px-5 py-4 text-xs tracking-[0.2em] text-steel uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
