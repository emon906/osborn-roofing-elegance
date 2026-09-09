# Osborn Roofing Brilliance

Build an ultra-premium, modern roofing website for **Osborn Roofing WA Pty Ltd**, Busselton, WA, Australia.

**Contact:**
Phone: +61 407 655 550
Email: [osbornroofingwa@icloud.com](mailto:osbornroofingwa@icloud.com)

### Design

* Luxury architectural/construction aesthetic
* Cinematic, high-end hero section
* Dark premium theme only: **#000000, #949599, charcoal, subtle grey, off-white**
* No bright white backgrounds, no colorful/cheap design
* Smooth scrolling, elegant transitions, scroll-reveal animations
* Fully responsive desktop/tablet/mobile
* Use realistic professional roofing images from Unsplash

### Sections

1. **Hero** — cinematic roofing image, bold headline, short tagline, strong “Get a Free Quote” CTA
2. **Roofing Services** — premium animated cards
3. **Featured Project** — large cinematic roofing project showcase
4. **Why Choose Us** — quality, craftsmanship, reliability, professionalism
5. **Testimonials** — elegant animated testimonial cards; use clearly marked placeholders if real reviews are unavailable
6. **Our Process** — visual 4-step process
7. **Contact / Free Quote** — phone, email, Busselton location, CTA
8. **Footer** — premium dark footer

### Tech

Use **React + TypeScript + Tailwind CSS + shadcn/ui + Lucide React**.

### Expanding Cards

Integrate an `ExpandingCards` component at `/components/ui/expanding-cards.tsx`. Adapt it specifically for **roofing services** (e.g. Roof Restoration, Roof Repairs, Roof Replacement, Guttering, Metal Roofing). Use roofing images instead of unrelated demo images. Make it responsive with hover/focus/click interactions and smooth expansion.

### Marquee Testimonials

Integrate `marquee-03.tsx` with a vertical animated testimonial marquee and pause-on-hover. Create the required marquee utility under `/components/ui/marquee-03-utils/marquee.tsx`. Use roofing-related testimonial placeholders unless verified reviews are provided.

If shadcn/Tailwind/TypeScript setup is missing, configure it properly and ensure components work with the existing project structure.

**Goal:** The final website must feel like a **premium Australian roofing brand**, with the hero and service presentation being the strongest visual elements. Avoid unnecessary sections such as About Me, Founder, or Team.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://osborn-roofing-elegance.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/eb5b3244-a6ca-4372-b100-750f6215382f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
