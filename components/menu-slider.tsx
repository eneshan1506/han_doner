"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type MenuItem = (typeof siteConfig.menu)[number]["items"][number];

type MenuSliderProps = {
  label: string;
  items: readonly MenuItem[];
};

export function MenuSlider({ label, items }: MenuSliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const resizeObserver = new ResizeObserver(() => checkScroll());
    resizeObserver.observe(el);

    // Run again slightly after mount to ensure layout is complete
    const timeout = setTimeout(checkScroll, 100);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      resizeObserver.disconnect();
      clearTimeout(timeout);
    };
  }, [checkScroll, items]);

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
        title="Nach links"
        disabled={!canScrollLeft}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="menu-slider" role="region" aria-label={`${label} Slider`} ref={sliderRef}>
        {items.map((item) => (
          <article key={item.name} className="menu-item-card">
            <div className="food-image-wrap">
              <Image
                src={item.image}
                alt={item.name}
                title={item.name}
                className="food-image"
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
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
        title="Nach rechts"
        disabled={!canScrollRight}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
