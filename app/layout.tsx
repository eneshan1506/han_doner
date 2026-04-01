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
