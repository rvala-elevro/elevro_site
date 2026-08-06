// app/contact-us/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageBlocks";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Contact Us | Elevro",
  description:
    "Contact Elevro to discuss AI, product enablement, quality engineering, CloudOps, DevOps, IoT automation, and digital engineering requirements.",
};

const locations = [
  {
    title: "Elevro Solutions Pvt. Ltd",
    city: "Ahmedabad, India",
    image: "/ahmedabad.png",
    address: [
      "D-505, Swati Clover,",
      "Nr. Shilaj Circle,",
      "Thaltej Shilaj Rd.",
      "Thaltej, Ahmedabad - 380059",
    ],
    directionUrl: "https://maps.app.goo.gl/tF8VZQy6wxpPEJfj7",
  },
  {
    title: "Elevro Solutions Inc.",
    city: "Austin, Texas, USA",
    image: "/texas.png",
    address: ["5900 Balcones Drive STE 100", "Austin", "TX - 78731"],
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen overflow-hidden text-cream">
      <PageHero
        eyebrow="Contact Us"
        title="Let’s discuss your product, quality, cloud or automation roadmap."
        text="Share your requirement and Elevro can help with AI-powered QA, CloudOps, DevOps, IoT automation, embedded validation, protocol testing, and product enablement."
      />

      <section className="soft-section relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#6f4b83]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-120 w-120 rounded-full bg-[#a25858]/16 blur-[130px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.08fr] md:items-start">
          <div className="grid gap-6">
            {locations.map((location, index) => (
              <LocationCard
                key={location.city}
                location={location}
                index={index}
              />
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function LocationCard({
  location,
  index,
}: {
  location: {
    title: string;
    city: string;
    image: string;
    address: string[];
    directionUrl?: string;
  };
  index: number;
}) {
  return (
    <Card index={index} isNotHover>
      <div className="relative h-95 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white">
        <Image
          src={location.image}
          alt={`${location.city} office illustration`}
          fill
          priority={index === 0}
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>

      <div className="relative z-10 pt-2">
        <div className="mb-1 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
            <MapPin className="h-4 w-4" />
            {location.city}
          </span>

          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary/25 text-white">
            <Building2 className="h-5 w-5" />
          </span>
        </div>

        <h2 className="text-2xl font-medium tracking-[-0.03em] text-white/90 md:text-3xl">
          {location.title}
        </h2>

        <div className="mt-2 text-base leading-7 text-cream/65">
          {location.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {location.directionUrl ? (
          <Link
            href={location.directionUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9d4038]"
          >
            Get Directions
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
