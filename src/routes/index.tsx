import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import {
  Contact,
  FeaturedProject,
  Hero,
  Process,
  Services,
  SiteFooter,
  Testimonials,
  WhyChooseUs,
} from "@/components/site/sections";

const TITLE = "Osborn Roofing WA | Roofing Busselton, Western Australia";
const DESCRIPTION =
  "Premium roof restoration, repairs, replacement, guttering and Colorbond metal roofing across Busselton and the South West. Free quotes — call +61 407 655 550.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "Osborn Roofing WA Pty Ltd",
          telephone: "+61407655550",
          email: "osbornroofingwa@icloud.com",
          areaServed: "Busselton, Western Australia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Busselton",
            addressRegion: "WA",
            addressCountry: "AU",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
