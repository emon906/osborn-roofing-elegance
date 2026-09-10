import * as React from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MapMarker {
  lng: number;
  lat: number;
  title: string;
  subtitle?: string;
}

interface MapMarkerTooltipProps {
  center: [number, number];
  zoom?: number;
  markers: MapMarker[];
  className?: string;
}

/**
 * Dark interactive map (MapLibre GL) with hover-tooltip markers.
 * Loads the map library on the client only.
 */
export function MapMarkerTooltip({
  center,
  zoom = 10,
  markers,
  className,
}: MapMarkerTooltipProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    let map: import("maplibre-gl").Map | null = null;
    let cancelled = false;

    (async () => {
      try {
        const maplibregl = await import("maplibre-gl");
        await import("maplibre-gl/dist/maplibre-gl.css");
        if (cancelled || !containerRef.current) return;

        map = new maplibregl.Map({
          container: containerRef.current,
          style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
          center,
          zoom,
          attributionControl: false,
        });
        map.addControl(
          new maplibregl.NavigationControl({ showCompass: false }),
          "bottom-right",
        );
        map.addControl(
          new maplibregl.AttributionControl({ compact: true }),
          "bottom-left",
        );
        map.scrollZoom.disable();

        for (const m of markers) {
          const el = document.createElement("div");
          el.className = "map-marker";
          el.setAttribute("aria-label", m.title);

          const popup = new maplibregl.Popup({
            offset: 22,
            closeButton: false,
            closeOnClick: false,
            className: "map-tooltip",
          }).setHTML(
            `<strong>${m.title}</strong>${m.subtitle ? `<span>${m.subtitle}</span>` : ""}`,
          );

          new maplibregl.Marker({ element: el })
            .setLngLat([m.lng, m.lat])
            .setPopup(popup)
            .addTo(map);

          el.addEventListener("mouseenter", () => popup.addTo(map!));
          el.addEventListener("mouseleave", () => popup.remove());
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [center, zoom, markers]);

  return (
    <div className={cn("relative overflow-hidden border border-border bg-charcoal", className)}>
      {failed ? (
        <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 p-8 text-center">
          <MapPin className="h-6 w-6 text-steel" />
          <p className="text-sm text-steel">
            Map unavailable — find us in Busselton, Western Australia.
          </p>
        </div>
      ) : (
        <div ref={containerRef} className="h-full min-h-[320px] w-full" />
      )}
    </div>
  );
}
