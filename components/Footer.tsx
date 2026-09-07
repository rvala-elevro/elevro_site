import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "./icons/LinkedIn";
import Instagram from "./icons/Instagram";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 font-medium uppercase tracking-[0.2em] text-cream/80">
        {title}
      </h4>
      <div className="grid gap-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm text-cream/[0.55] transition hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
const industries = [
  {
    name: "Consumer Electronics",
    href: "/industries/consumer-electronics",
  },
  {
    name: "Healthcare & MedTech",
    href: "/industries/healthcare-medtech",
  },
  {
    name: "eCommerce & Retail",
    href: "/industries/ecommerce-retail",
  },
  {
    name: "Automotive & Infotainment",
    href: "/industries/automotive-infotainment",
  },
  {
    name: "Smart Home, IoT & Matter",
    href: "/industries/smart-home-iot-matter",
  },
  {
    name: "Cloud & SaaS Platforms",
    href: "/industries/cloud-saas-platforms",
  },
];
const services = [
  {
    name: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
  },
  {
    name: "Product Enablement",
    href: "/services/product-enablement",
  },
  {
    name: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
  },
  {
    name: "Cloud Engineering",
    href: "/services/cloud-engineering",
  },
  {
    name: "Digital Engineering",
    href: "/services/digital-engineering",
  },
];
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#25112f] px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={"/elevro-text-logo.svg"}
              alt="elevro-icon"
              width={250}
              height={70}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/[0.55]">
            AI-led product, cloud and quality engineering for teams that want
            automation with measurable impact.
          </p>
        </div>
        <FooterColumn
          title="Company"
          links={[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Careers", href: "/careers" },
            { name: "Contact Us", href: "/contact-us" },
          ]}
        />
        <FooterColumn title="Services" links={services} />
        <FooterColumn title="Industries" links={industries} />
        <FooterColumn
          title="Resources"
          links={[
            { name: "Blogs", href: "/resources/blogs" },
            { name: "Whitepapers", href: "/resources/whitepapers" },
            { name: "Case Studies", href: "/resources/case-studies" },
          ]}
        />
      </div>
      <div className="flex mx-auto mt-10 gap-3 md:flex-row flex-col-reverse border-t border-white/10 pt-4 justify-between max-w-7xl">
        <span className="  self-start  text-sm text-cream/45">
          © 2026 Elevro. All rights reserved.
        </span>
        <div className="flex items-center slef-end justify-end gap-3">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Elevro LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream/70 transition hover:-translate-y-0.5 hover:bg-secondary/30 hover:text-white"
          >
            <LinkedIn className="h-5 w-5" />
          </a>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Elevro Instagram"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-cream/70 transition hover:-translate-y-0.5 hover:bg-secondary/30 hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
