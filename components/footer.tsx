import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-minimal">
        <div className="footer-minimal-top">
          <div className="footer-brand">
            <BrandLogo />
          </div>

          <nav className="footer-minimal-nav" aria-label="Footer Navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} title={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-hours-mini">
          {siteConfig.hours.map((slot) => (
            <span key={slot.day}>
              {slot.day}: <strong>{slot.time}</strong>
            </span>
          ))}
        </div>

        <div className="footer-minimal-bottom">
          <a
            href={siteConfig.location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            title="Adresse in Google Maps öffnen"
          >
            📍 {siteConfig.location.addressLine}
          </a>
          <a href={`tel:${siteConfig.contact.phone}`} title="Telefonnummer anrufen">
            📞 {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} title="E-Mail senden">
            ✉️ {siteConfig.contact.email}
          </a>
        </div>
      </div>

      <div className="container footer-legal">
        <p>© {year} {siteConfig.brand.name}</p>
        <p>Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
