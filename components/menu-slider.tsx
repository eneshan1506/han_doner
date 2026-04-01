"use client";

import { useRef } from "react";
import { siteConfig } from "@/config/site";

type MenuItem = (typeof siteConfig.menu)[number]["items"][number];

type MenuSliderProps = {
  label: string;
  items: readonly MenuItem[];
};

export function MenuSlider({ label, items }: MenuSliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.querySelector(".menu-item-card") as HTMLElement | null;
    if (!firstCard) return;

    const computed = window.getComputedStyle(sliderRef.current);
    const gap = Number.parseFloat(computed.columnGap || computed.gap || "0") || 0;
    const scrollAmount = firstCard.offsetWidth + gap;
    const next = direction === "right" ? scrollAmount : -scrollAmount;
    sliderRef.current.scrollBy({ left: next, behavior: "smooth" });
  };

  return (
    <div className="menu-slider-shell">
      <button
        type="button"
        className="slider-arrow slider-arrow-left"
        onClick={() => scrollSlider("left")}
        aria-label={`${label} nach links scrollen`}
      >
        &#8592;
      </button>
      <div className="menu-slider" role="region" aria-label={`${label} Slider`} ref={sliderRef}>
        {items.map((item) => (
          <article key={item.name} className="menu-item-card">
            <div className="food-image-wrap">
              <img src={item.image} alt={item.name} className="food-image" />
              {item.bestSeller ? <span className="item-badge">Bestseller</span> : null}
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
      <button
        type="button"
        className="slider-arrow slider-arrow-right"
        onClick={() => scrollSlider("right")}
        aria-label={`${label} nach rechts scrollen`}
      >
        &#8594;
      </button>
    </div>
  );
}
