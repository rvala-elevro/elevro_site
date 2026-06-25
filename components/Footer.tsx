import Image from "next/image";
import Link from "next/link";

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="mb-4 font-black uppercase tracking-[0.2em] text-cream/80">
        {title}
      </h4>
      <div className="grid gap-3">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-sm text-cream/[0.55] transition hover:text-white"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
const services = [
  {
    title: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
  },
  {
    title: "Product Enablement",
    href: "/services/product-enablement",
  },
  {
    title: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
  },
  {
    title: "Cloud Engineering",
    href: "/services/cloud-engineering",
  },
  {
    title: "Digital Engineering",
    href: "/services/digital-engineering",
  },
];
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#25112f] px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={"/elevro-logo.svg"}
              alt="elevro-icon"
              width={230}
              height={50}
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
          links={["Home", "About Us", "Careers", "Contact Us"]}
        />
        <FooterColumn
          title="Services"
          links={services.map((item) => item.title)}
        />
        <FooterColumn
          title="Resources"
          links={["Blogs", "Whitepapers", "Case Studies", "Partnerships"]}
        />
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-cream/45">
        © 2026 Elevro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
