import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-minimal">
        <div className="footer-minimal-top">
          <div className="footer-title-wrap">
            <strong>{siteConfig.brand.name}</strong>
            <span>{siteConfig.brand.slogan}</span>
          </div>
        </div>

        <div className="footer-minimal-bottom">
          <a href={siteConfig.location.mapsUrl} target="_blank" rel="noreferrer">
            {siteConfig.location.addressLine}
          </a>
          <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </div>
      </div>

      <div className="container footer-legal">
        <p>© {year} {siteConfig.brand.name}</p>
        <p>Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
