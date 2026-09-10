import type { ExpandingCardItem } from "@/components/ui/expanding-cards";
import type { MarqueeTestimonial } from "@/components/ui/marquee-03";
import serviceRestoration from "@/assets/service-restoration.jpg";
import serviceRepairs from "@/assets/service-repairs.jpg";
import serviceReplacement from "@/assets/service-replacement.jpg";
import serviceGuttering from "@/assets/service-guttering.jpg";
import serviceMetal from "@/assets/service-metal.jpg";

export const CONTACT = {
  business: "Osborn Roofing WA Pty Ltd",
  phone: "+61 407 655 550",
  phoneHref: "tel:+61407655550",
  email: "osbornroofingwa@icloud.com",
  location: "Busselton, Western Australia",
};

export const SERVICES: ExpandingCardItem[] = [
  {
    id: "restoration",
    title: "Roof Restoration",
    description:
      "Full restoration of tiled and metal roofs — high-pressure clean, re-bedding and re-pointing of ridge caps, then a premium protective coating system built for South West conditions.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80",
    points: ["Re-bed & re-point", "Pressure clean & seal", "Colour-matched coatings"],
  },
  {
    id: "repairs",
    title: "Roof Repairs",
    description:
      "Fast, precise leak detection and repair. Cracked tiles, failed flashings, rusted valleys and storm damage — diagnosed properly and fixed once.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    points: ["Leak diagnosis", "Flashing & valley work", "Storm damage response"],
  },
  {
    id: "replacement",
    title: "Roof Replacement",
    description:
      "Complete re-roofs managed end to end, from tear-off and sarking through to insulation, new sheeting and final detailing — with your home kept watertight throughout.",
    image:
      "https://images.unsplash.com/photo-1621873495884-845a939892d4?auto=format&fit=crop&w=1600&q=80",
    points: ["Tile to metal conversions", "Sarking & insulation", "Full site management"],
  },
  {
    id: "guttering",
    title: "Guttering & Fascia",
    description:
      "New gutters, downpipes, fascia and leaf protection, set out for correct fall so heavy winter rain moves away from your home rather than into it.",
    image:
      "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?auto=format&fit=crop&w=1600&q=80",
    points: ["Colorbond guttering", "Downpipes & rainheads", "Leaf guard systems"],
  },
  {
    id: "metal",
    title: "Metal Roofing",
    description:
      "Architectural Colorbond and standing-seam metal roofing for new builds, extensions and coastal properties — engineered for wind, salt air and long service life.",
    image:
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1600&q=80",
    points: ["Colorbond & Zincalume", "Standing seam profiles", "Coastal-grade fixings"],
  },
];

/** PLACEHOLDER TESTIMONIALS — replace with verified client reviews. */
export const TESTIMONIALS: MarqueeTestimonial[] = [
  {
    name: "Sample Client",
    location: "Busselton, WA — placeholder review",
    quote:
      "The crew re-roofed our place in under a week and left the site spotless. Communication was excellent from quote to final walk-through.",
    initials: "SC",
  },
  {
    name: "Sample Client",
    location: "Dunsborough, WA — placeholder review",
    quote:
      "They found a leak three other roofers missed. Fixed properly, priced fairly, and it hasn't moved through two winters since.",
    initials: "SC",
  },
  {
    name: "Sample Client",
    location: "Vasse, WA — placeholder review",
    quote:
      "Our tiled roof looked tired and stained. After the restoration the house looks a decade newer. Genuinely premium finish.",
    initials: "SC",
  },
  {
    name: "Sample Client",
    location: "Yallingup, WA — placeholder review",
    quote:
      "Coastal exposure was our worry. They specified the right Colorbond profile and fixings and explained exactly why.",
    initials: "SC",
  },
  {
    name: "Sample Client",
    location: "Margaret River, WA — placeholder review",
    quote:
      "New guttering and fascia across the whole home. Clean lines, correct falls, no more overflow in a downpour.",
    initials: "SC",
  },
  {
    name: "Sample Client",
    location: "Bunbury, WA — placeholder review",
    quote:
      "Storm took part of our ridge off. They had it made safe the same day and permanently repaired that week.",
    initials: "SC",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Site Inspection",
    body: "We inspect the roof, cavity and drainage, photograph every issue and measure accurately — no guesswork.",
  },
  {
    step: "02",
    title: "Detailed Quote",
    body: "A written, itemised quote with materials, scope and timeline clearly set out. Fixed price, no surprises.",
  },
  {
    step: "03",
    title: "Precision Works",
    body: "A dedicated crew, safe access, quality materials and daily site clean-down while your home stays watertight.",
  },
  {
    step: "04",
    title: "Final Handover",
    body: "Joint inspection, water testing, workmanship guarantee and full documentation handed over on completion.",
  },
];
