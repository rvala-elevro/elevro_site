import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const siteUrl = "https://www.elevro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Elevro | Intelligent Product Enablement & Quality Engineering",
    template: "%s | Elevro",
  },

  description:
    "Elevro provides AI-powered quality engineering, product enablement, digital engineering, CloudOps, DevOps, IoT automation, embedded QA, and intelligent automation services.",

  keywords: [
    "Elevro",
    "Artificial Intelligence",
    "Product Enablement",
    "Digital Engineering",
    "Quality Engineering",
    "Intelligent Quality Engineering",
    "Cloud Engineering",
    "CloudOps",
    "DevOps",
    "IoT Automation",
    "Embedded QA",
    "Automation Testing",
    "AI Testing",
  ],

  authors: [{ name: "Elevro" }],
  creator: "Elevro",
  publisher: "Elevro",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Elevro",
    title: "Elevro | Intelligent Product Enablement & Quality Engineering",
    description:
      "AI-powered quality engineering, product enablement, CloudOps, DevOps, IoT automation, embedded QA, and intelligent automation services.",
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
    title: "Elevro | Intelligent Product Enablement & Quality Engineering",
    description:
      "AI-powered quality engineering, product enablement, CloudOps, DevOps, IoT automation, embedded QA, and intelligent automation services.",
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
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
