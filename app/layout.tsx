import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { MobileQuickActions } from "@/components/mobile-quick-actions";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b71c1c",
};

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | Döner & Grill – Berlin`,
  description: siteConfig.brand.description,
  metadataBase: new URL("https://han-doner.vercel.app"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "HAN Döner",
    "Döner Berlin",
    "Türkisches Essen Berlin",
    "Döner Speisekarte",
    "Döner Kreuzberg",
    "Bester Döner Berlin",
    "Döner bestellen Berlin",
  ],
  authors: [{ name: "HAN Döner" }],
  publisher: "HAN Döner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.brand.name} | Döner & Grill – Berlin`,
    description: siteConfig.brand.description,
    url: "https://han-doner.vercel.app",
    siteName: siteConfig.brand.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: siteConfig.brand.heroImage,
        width: 1200,
        height: 630,
        alt: "Saftiger Döner mit frischem Gemüse",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.brand.name,
  description: siteConfig.brand.description,
  url: "https://han-doner.vercel.app",
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oranienstrasse 42",
    addressLocality: "Berlin",
    postalCode: "10999",
    addressCountry: "DE",
  },
  servesCuisine: ["Turkish", "Döner", "Kebab"],
  priceRange: "€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "22:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileQuickActions />
        <WhatsAppFab />
      </body>
    </html>
  );
}
