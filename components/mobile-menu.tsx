"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand-logo";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, close]);

  return (
    <>
      <button
        type="button"
        className="hamburger-btn"
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`mobile-menu-overlay${isOpen ? " active" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`mobile-menu-panel${isOpen ? " active" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-header">
          <BrandLogo />
          <button
            type="button"
            className="mobile-menu-close"
            onClick={close}
            aria-label="Menü schließen"
          >
            ✕
          </button>
        </div>

        <div className="mobile-menu-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="mobile-menu-cta"
          >
            📞 Jetzt Anrufen
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mobile-menu-cta"
            style={{
              background: "linear-gradient(135deg, #2ed16a 0%, #1da851 100%)",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
}
