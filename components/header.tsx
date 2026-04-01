import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand-logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Startseite">
          <BrandLogo />
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link" title={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="call-btn" href={`tel:${siteConfig.contact.phone}`} title="Jetzt anrufen">
          Anrufen
        </a>
      </div>
    </header>
  );
}
