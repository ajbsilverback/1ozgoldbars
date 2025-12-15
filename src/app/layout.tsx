import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Live 1 oz gold bar pricing, spot gold prices, and educational resources for buyers and investors.",
  keywords: [
    "1 oz gold bars",
    "one ounce gold bars",
    "gold bullion bars",
    "buy 1 oz gold bars",
    "gold investment",
    "gold bar prices",
    "gold bullion",
    "gold bars for sale",
    "physical gold",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    description:
      "Live 1 oz gold bar pricing, spot gold prices, and educational resources for buyers and investors.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "1 oz Gold Bars - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    description:
      "Live 1 oz gold bar pricing, spot gold prices, and educational resources for buyers and investors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bullion-darker text-gray-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
