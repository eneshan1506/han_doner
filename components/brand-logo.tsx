export function BrandLogo() {
  return (
    <span className="brand-logo" aria-hidden="true">
      <svg viewBox="0 0 64 64" className="brand-logo-icon">
        <defs>
          <linearGradient id="donerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f57c00" />
            <stop offset="100%" stopColor="#c62828" />
          </linearGradient>
        </defs>
        <rect x="29" y="8" width="6" height="48" rx="3" fill="#3c2a1f" />
        <ellipse cx="32" cy="12" rx="10" ry="6" fill="#2e7d32" opacity="0.18" />
        <path d="M20 18c6-5 18-5 24 0-6 7-18 7-24 0z" fill="url(#donerGrad)" />
        <path d="M18 26c7-5 21-5 28 0-7 7-21 7-28 0z" fill="#d94a1f" />
        <path d="M17 34c8-5 22-5 30 0-8 8-22 8-30 0z" fill="#f57c00" />
        <circle cx="32" cy="56" r="4" fill="#2e7d32" />
      </svg>
      <span className="brand-logo-text">
        <strong>HAN</strong>
        <em>Döner</em>
      </span>
    </span>
  );
}
