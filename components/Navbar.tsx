"use client";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Intelligent Quality Engineering",
        href: "/services/intelligent-quality-engineering",
      },
      { label: "Product Enablement", href: "/services/product-enablement" },
      {
        label: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
      { label: "Digital Engineering", href: "/services/digital-engineering" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      {
        label: "Consumer Electronics",
        href: "/industries/consumer-electronics",
      },
      { label: "Healthcare & MedTech", href: "/industries/healthcare-medtech" },
      { label: "Ecommerce & Retail", href: "/industries/ecommerce-retail" },
      {
        label: "Automative & Infotainment",
        href: "/industries/automative-infotainment",
      },
      { label: "Smart Home & IOT", href: "/industries/smart-home" },
      { label: "Cloud & SaaS Platforms", href: "/industries/cloud-saas" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-animate fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-[#2d1738]/70 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src={"/elevro-logo.svg"}
            alt="elevro-icon"
            width={230}
            height={50}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative py-2">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-cream/78 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.children ? (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                ) : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-3xl border border-white/10 bg-[#1a0c20]/95 p-3 shadow-card backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.label}
                        className="block rounded-2xl px-4 py-3 text-sm text-cream/75 transition hover:bg-secondary/30 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          href="/contact-us"
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9d4038] lg:inline-flex"
        >
          Contact Us
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu - Scroll Fixed & Card Styling Applied */}
      {isOpen ? (
        <div className="group relative mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5.5 p-5 shadow-soft backdrop-blur-xl lg:hidden">
          {/* Ambient blur gradient matching your card aesthetic */}
          <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl pointer-events-none" />

          {/* Scrollable Container Wrapper */}
          <div className="relative z-10 max-h-[calc(100vh-130px)] overflow-y-auto pr-1 flex flex-col gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-white/10 py-2 last:border-0"
              >
                <Link
                  href={item.href}
                  className="block py-2 font-medium text-white/90 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-cream/62 transition active:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {/* Added Mobile Call to Action Button within the scroll frame */}
            <div className="mt-4 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white shadow-soft"
                onClick={() => setIsOpen(false)}
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
