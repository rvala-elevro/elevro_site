import type { Metadata } from "next";
import AboutOverviewContent from "@/components/AboutOverview";

export const metadata: Metadata = {
  title: "About Elevro | Product Engineering & Quality Engineering",
  description:
    "Learn about Elevro, a product engineering company delivering AI, quality engineering, digital engineering, CloudOps, DevOps, IoT and product enablement solutions.",

  alternates: {
    canonical: "/about-us",
  },

  openGraph: {
    title: "About Elevro | Product Engineering & Quality Engineering",
    description:
      "Learn about Elevro, a product engineering company delivering AI, quality engineering, digital engineering, CloudOps, DevOps, IoT and product enablement solutions.",
    url: "https://www.elevro.com/about-us",
    siteName: "Elevro",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Elevro | Product Engineering & Quality Engineering",
    description:
      "Learn about Elevro, a product engineering company delivering AI, quality engineering, digital engineering, CloudOps, DevOps, IoT and product enablement solutions.",
    images: ["/og-image.png"],
  },
};

export default async function AboutPage() {
  return <AboutOverviewContent />;
}
