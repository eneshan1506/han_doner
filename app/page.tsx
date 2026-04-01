import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  type MenuItem = (typeof siteConfig.menu)[number]["items"][number];
  const allItems = siteConfig.menu.flatMap((group) => [...group.items]) as MenuItem[];
  const bestSellers = allItems.filter((item) => item.bestSeller).slice(0, 3);

  return (
    <div>
      <section className="hero">
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
              <a href={`tel:${siteConfig.contact.phone}`} className="btn btn-primary pulse-cta" title="Jetzt telefonisch bestellen">
                Jetzt Bestellen
              </a>
              <Link href="/menu" className="btn btn-outline" title="Speisekarte ansehen">
                Speisekarte Entdecken
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src={siteConfig.brand.heroImage}
              alt="Saftiger Döner mit frischem Gemüse"
              title="Saftiger Döner mit frischem Gemüse"
              className="hero-image"
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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Bestseller</h2>
            <Link href="/menu" title="Zur kompletten Speisekarte">
              Komplette Speisekarte
            </Link>
          </div>

          <div className="featured-grid">
            {bestSellers.map((item) => (
              <article key={item.name} className="food-card">
                <div className="food-image-wrap">
                  <img src={item.image} alt={item.name} title={item.name} className="food-image" />
                  <span className="item-badge">Bestseller</span>
                </div>
                <div className="food-card-body">
                  <h3>{item.name}</h3>
                  <p className="tr-name">{item.trName}</p>
                  <p>{item.desc}</p>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
