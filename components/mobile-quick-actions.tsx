import { siteConfig } from "@/config/site";

export function MobileQuickActions() {
  return (
    <div className="mobile-quick-actions" aria-label="Schnellaktionen" id="mobile-quick-actions">
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="mobile-action-btn mobile-action-call"
        id="mobile-call-btn"
      >
        📞 Anrufen
      </a>
      <a
        href={siteConfig.location.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mobile-action-btn mobile-action-route"
        id="mobile-route-btn"
      >
        📍 Route
      </a>
    </div>
  );
}
