import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <section className="section">
      <div className="container contact-card">
        <h1 className="page-title">Kontakt</h1>
        <p className="page-subtitle">Für Bestellungen und Fragen erreichen Sie uns hier.</p>

        <div className="contact-grid">
          <a href={`tel:${siteConfig.contact.phone}`} className="contact-item" title="Telefonla arayın">
            <span>Telefon</span>
            <strong>{siteConfig.contact.phone}</strong>
          </a>
          <a href={whatsappLink} className="contact-item" target="_blank" rel="noreferrer" title="WhatsApp ile mesaj gönderin">
            <span>WhatsApp</span>
            <strong>Nachricht Senden</strong>
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="contact-item" title="E-Mail gönderin">
            <span>E-Mail</span>
            <strong>{siteConfig.contact.email}</strong>
          </a>
        </div>

        <div className="contact-map-wrap">
          <div className="contact-address-card">
            <h2>Adresse</h2>
            <p>{siteConfig.location.addressLine}</p>
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              title="Google Maps'te adresi aç"
            >
              In Google Maps Öffnen
            </a>
          </div>

          <div className="map-embed-card">
            <iframe
              title="Berlin Zentrum Karte"
              src={siteConfig.location.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
