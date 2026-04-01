import { siteConfig } from "@/config/site";
import { MenuSlider } from "@/components/menu-slider";

export default function MenuPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="page-title">Speisekarte</h1>
        <p className="page-subtitle">Täglich frisch zubereitet mit authentischem türkischem Geschmack.</p>

        <div className="menu-groups">
          {siteConfig.menu.map((group) => (
            <div key={group.category} className="menu-group">
              <h2 className="menu-section-heading">{group.category}</h2>
              <MenuSlider label={group.category} items={group.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
