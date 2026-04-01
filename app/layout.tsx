import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { MobileQuickActions } from "@/components/mobile-quick-actions";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | Döner & Grill`,
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
    "Döner Kontakt",
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
    title: `${siteConfig.brand.name} | Döner & Grill`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
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
