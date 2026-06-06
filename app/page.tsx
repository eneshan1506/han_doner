import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MenuSlider } from "@/components/menu-slider";

export default function Home() {
  type MenuItem = (typeof siteConfig.menu)[number]["items"][number];
  const allItems = siteConfig.menu.flatMap((group) => [...group.items]) as MenuItem[];
  const bestSellers = allItems.filter((item) => item.bestSeller);

  return (
    <div className="page-fade-in">
      <section className="hero" id="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="kicker">Authentisches Türkisches Streetfood</p>
            <h1>{siteConfig.brand.name}</h1>
            <p className="hero-text">{siteConfig.brand.description}</p>

            <div className="badges">
              {siteConfig.heroBadges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>

            <div className="cta-row">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn btn-primary pulse-cta"
                title="Jetzt telefonisch bestellen"
                id="hero-call-btn"
              >
                📞 Jetzt Bestellen
              </a>
              <Link href="/menu" className="btn btn-outline" title="Speisekarte ansehen" id="hero-menu-btn">
                Speisekarte Entdecken
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src={siteConfig.brand.heroImage}
              alt="Saftiger Döner mit frischem Gemüse"
              title="Saftiger Döner mit frischem Gemüse"
              className="hero-image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-hours-card">
              <h2>Öffnungszeiten</h2>
              <ul>
                {siteConfig.hours.map((slot) => (
                  <li key={slot.day}>
                    <span>{slot.day}</span>
                    <strong>{slot.time}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="bestseller">
        <div className="container">
          <div className="section-head" style={{ marginBottom: "16px" }}>
            <h2>Bestseller</h2>
            <Link href="/menu" title="Zur kompletten Speisekarte">
              Komplette Speisekarte
            </Link>
          </div>

          <MenuSlider label="Bestseller" items={bestSellers} />
        </div>
      </section>
    </div>
  );
}
