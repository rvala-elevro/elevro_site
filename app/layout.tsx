import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seoPages, siteConfig } from "@/lib/site-config";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = siteConfig.url;
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoPages.home.metaTitle,
    template: "%s",
  },

  description: seoPages.home.metaDescription,
  keywords: [
    "Elevro",
    "AI-powered quality engineering",
    "product enablement services",
    "test automation",
    "DevOps",
    "Cloud Engineering",
    "CloudOps",
    "IoT validation",
    "Matter testing",
    "BLE testing",
    "Wi-Fi testing",
    "MQTT testing",
  ],
  authors: [{ name: "Elevro" }],
  creator: "Elevro",
  publisher: "Elevro",
  alternates: {
    canonical: seoPages.home.path,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Elevro",
    title: seoPages.home.metaTitle,
    description: seoPages.home.metaDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elevro Intelligent Product Enablement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoPages.home.metaTitle,
    description: seoPages.home.metaDescription,
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#2b1438",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Load GTM early so Tag Assistant detects it instantly */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T6LVHCKT');`}
        </Script>

        {/* Correct placement for fallback iframe */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6LVHCKT"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
