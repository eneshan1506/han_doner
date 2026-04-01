import { siteConfig } from "@/config/site";

export function MobileQuickActions() {
  return (
    <div className="mobile-quick-actions" aria-label="Schnellaktionen">
      <a href={`tel:${siteConfig.contact.phone}`} className="mobile-action-btn mobile-action-call">
        Anrufen
      </a>
      <a href={siteConfig.location.mapsUrl} target="_blank" rel="noreferrer" className="mobile-action-btn mobile-action-route">
        Route
      </a>
    </div>
  );
}
