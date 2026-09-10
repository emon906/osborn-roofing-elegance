import {
  Award,
  Clock,
  Hammer,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Cta } from "@/components/site/cta";
import { MapMarkerTooltip } from "@/components/ui/map-marker-tooltip";
import { CONTACT, PROCESS, SERVICES, TESTIMONIALS } from "@/components/site/data";
import { Reveal } from "@/components/site/reveal";
import { ExpandingCards } from "@/components/ui/expanding-cards";
import { Marquee03 } from "@/components/ui/marquee-03";

import heroImage from "@/assets/hero-roof.jpg";
import projectHero from "@/assets/project-hero.jpg";
import projectDetail from "@/assets/project-detail.jpg";

const HERO_IMAGE = heroImage;
const PROJECT_IMAGE = projectHero;
const PROJECT_DETAIL = projectDetail;

function SectionHead({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 text-4xl leading-[1.05] text-offwhite md:text-6xl">{title}</h2>
      </Reveal>
      {copy && (
        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-steel md:text-base">{copy}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Architectural metal roofline of a modern home at dusk"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-55"
      />
      <div className="absolute inset-0 hero-veil" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <span className="eyebrow">Busselton · South West WA</span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl text-[2.75rem] leading-[0.95] text-offwhite sm:text-6xl md:text-8xl">
            Roofing built for
            <span className="block text-steel">the West Australian coast.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-steel md:text-lg">
            Restoration, repairs, re-roofs and architectural metal roofing —
            delivered with precision by a local Busselton team.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Cta href="#contact">Get a Free Quote</Cta>
            <Cta href={CONTACT.phoneHref} tone="ghost" withArrow={false}>
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </Cta>
          </div>
        </Reveal>
        <Reveal delay={440}>
          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-border pt-8 md:grid-cols-4">
            {[
              ["Local", "Busselton based"],
              ["Licensed", "Fully insured"],
              ["Guaranteed", "Workmanship backed"],
              ["Materials", "Colorbond specified"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-xl text-offwhite">{k}</dt>
                <dd className="mt-1 text-xs tracking-[0.14em] text-steel uppercase">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Roofing Services"
          title="Every roof, handled properly."
          copy="Hover, tap or focus a service to expand it. Each scope is quoted in writing, with materials and timelines set out before we start."
        />
        <Reveal delay={120} className="mt-14">
          <ExpandingCards items={SERVICES} />
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedProject() {
  return (
    <section id="project" className="border-t border-border">
      <div className="relative h-[70svh] min-h-[420px] overflow-hidden">
        <img
          src={PROJECT_IMAGE}
          alt="Completed Colorbond metal roof on a contemporary coastal residence"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 md:px-10 md:pb-16">
          <Reveal>
            <span className="eyebrow">Featured Project</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] text-offwhite md:text-7xl">
              Coastal residence re-roof, Geographe Bay
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-24">
        <div>
          <Reveal>
            <p className="text-sm leading-relaxed text-steel md:text-base">
              A full tile-to-metal conversion on an exposed bay-front home. The
              existing roof had failed pointing and rusted valleys after years of
              salt air. We stripped back to the frame, installed new sarking and
              insulation, and finished with a matte Colorbond profile detailed for
              wind uplift and coastal corrosion.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["Scope", "Full re-roof"],
                ["Material", "Matte Colorbond"],
                ["Duration", "9 days"],
                ["Location", "Busselton, WA"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 font-display text-lg text-offwhite">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={220} className="mt-10">
            <Cta href="#contact" tone="ghost">
              Discuss your project
            </Cta>
          </Reveal>
        </div>
        <Reveal delay={180}>
          <img
            src={PROJECT_DETAIL}
            alt="Close detail of standing seam metal roof sheeting and flashing"
            loading="lazy"
            className="h-full w-full rounded-sm object-cover opacity-85"
          />
        </Reveal>
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: Award,
    title: "Uncompromised Quality",
    body: "Specified materials only — Colorbond sheeting, quality fixings and coatings rated for coastal exposure.",
  },
  {
    icon: Hammer,
    title: "Real Craftsmanship",
    body: "Clean flashing lines, correct falls and detailing done by tradesmen who take pride in the finish.",
  },
  {
    icon: Clock,
    title: "Reliability",
    body: "We turn up when we say, keep the site tidy, and finish inside the timeline we quoted.",
  },
  {
    icon: ShieldCheck,
    title: "Professionalism",
    body: "Licensed, fully insured, safety-compliant access and a workmanship guarantee on every job.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Why Choose Us"
          title="A standard you can stand under."
        />
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 110}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-charcoal md:p-10"
            >
              <r.icon className="h-6 w-6 text-steel transition-colors duration-500 group-hover:text-offwhite" />
              <h3 className="mt-8 text-2xl text-offwhite">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead
          eyebrow="Testimonials"
          title="What clients say."
          copy="Placeholder reviews shown below — send through your verified Google or client reviews and we will replace them."
        />
        <Reveal delay={120} className="mt-14">
          <Marquee03 testimonials={TESTIMONIALS} />
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHead eyebrow="Our Process" title="Four steps, no surprises." />
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 120} className="relative md:pr-6">
              <span className="font-display text-5xl text-steel/40 md:text-6xl">{p.step}</span>
              <span className="mt-6 block h-px w-full bg-border" />
              <h3 className="mt-6 text-2xl text-offwhite">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-10">
        <div>
          <SectionHead
            eyebrow="Free Quote"
            title="Let's look at your roof."
            copy="Call, email or send a few photos and we will arrange an inspection across Busselton and the South West. Written quotes, obligation free."
          />
        </div>
        <div className="flex flex-col justify-center gap-px border border-border bg-border">
          {[
            { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
            {
              icon: Mail,
              label: "Email",
              value: CONTACT.email,
              href: `mailto:${CONTACT.email}`,
            },
            { icon: MapPin, label: "Servicing", value: CONTACT.location },
          ].map((item, i) => {
            const inner = (
              <>
                <item.icon className="h-5 w-5 shrink-0 text-steel" />
                <span>
                  <span className="eyebrow block">{item.label}</span>
                  <span className="mt-1 block font-display text-xl break-all text-offwhite md:text-2xl">
                    {item.value}
                  </span>
                </span>
              </>
            );
            return (
              <Reveal key={item.label} delay={i * 110} className="bg-background">
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-5 p-7 transition-colors duration-500 hover:bg-charcoal md:p-9"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-5 p-7 md:p-9">{inner}</div>
                )}
              </Reveal>
            );
          })}
          <Reveal delay={340} className="bg-background p-7 md:p-9">
            <Cta href={CONTACT.phoneHref} className="w-full justify-center">
              Get a Free Quote
            </Cta>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal/40">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="block font-display text-lg tracking-[0.22em] text-offwhite uppercase">
              Osborn Roofing WA
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              Osborn Roofing WA Pty Ltd — roof restoration, repairs, replacement,
              guttering and metal roofing across Busselton and the South West.
            </p>
          </div>
          <div>
            <span className="eyebrow">Services</span>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="transition-colors hover:text-offwhite">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-offwhite">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-offwhite"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Osborn Roofing WA Pty Ltd. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Busselton · Western Australia</span>
        </div>
      </div>
    </footer>
  );
}
