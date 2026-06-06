import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Kontakt | ${siteConfig.brand.name}`,
  description: `Kontaktieren Sie ${siteConfig.brand.name} – Telefon, WhatsApp, E-Mail und Adresse in Berlin.`,
};

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <section className="section page-fade-in" id="contact-page">
      <div className="container contact-card">
        <h1 className="page-title">Kontakt</h1>
        <p className="page-subtitle">
          Für Bestellungen und Fragen erreichen Sie uns hier.
        </p>

        <div className="contact-grid">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="contact-item"
            title="Jetzt anrufen"
            id="contact-phone"
          >
            <div className="contact-item-icon phone-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>Telefon</span>
            <strong>{siteConfig.contact.phone}</strong>
          </a>

          <a
            href={whatsappLink}
            className="contact-item"
            target="_blank"
            rel="noreferrer"
            title="Per WhatsApp schreiben"
            id="contact-whatsapp"
          >
            <div className="contact-item-icon whatsapp-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.243-1.212l-.257-.154-2.677.702.715-2.614-.168-.267A7.98 7.98 0 0 1 4 12a8 8 0 1 1 16 0 8 8 0 0 1-8 8z" />
              </svg>
            </div>
            <span>WhatsApp</span>
            <strong>Nachricht senden</strong>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="contact-item"
            title="E-Mail senden"
            id="contact-email"
          >
            <div className="contact-item-icon email-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span>E-Mail</span>
            <strong>{siteConfig.contact.email}</strong>
          </a>
        </div>

        <div className="contact-map-wrap">
          <div className="contact-address-card">
            <h2>Adresse</h2>
            <p>{siteConfig.location.addressLine}</p>

            <div className="contact-hours">
              <h3>Öffnungszeiten</h3>
              <ul>
                {siteConfig.hours.map((slot) => (
                  <li key={slot.day}>
                    <span>{slot.day}</span>
                    <strong>{slot.time}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              title="In Google Maps öffnen"
              id="contact-maps-btn"
              style={{ marginTop: "12px" }}
            >
              📍 In Google Maps öffnen
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
