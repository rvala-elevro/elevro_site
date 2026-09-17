import type { Metadata } from "next";
import { PageHero } from "@/components/PageBlocks";
import KekaJobsEmbed from "@/components/KekaJobsEmbed";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Elevro and work on AI-led quality engineering, automation, DevOps, CloudOps, IoT validation, and product engineering.",

  alternates: {
    canonical: "/careers",
  },

  openGraph: {
    title: "Careers | Elevro",
    description:
      "Join Elevro and work on AI-led quality engineering, automation, DevOps, CloudOps, IoT validation, and product engineering.",
    url: "https://www.elevro.com/careers",
    siteName: "Elevro",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers | Elevro",
    description:
      "Join Elevro and work on AI-led quality engineering, automation, DevOps, CloudOps, IoT validation, and product engineering.",
    images: ["/og-image.png"],
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden text-cream">
      <PageHero
        eyebrow="Careers"
        title="Let’s build with us"
        text="Join Elevro and work with teams solving real engineering challenges across AI, automation, quality engineering, DevOps, CloudOps, IoT, and digital products."
      />

      <section id="open-positions" className="soft-section px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10">
          <KekaJobsEmbed />
        </div>
      </section>
    </main>
  );
}
