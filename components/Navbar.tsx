'use client'
import { ChevronDown, Menu, X } from "lucide-react";
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
        label: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
      { label: "Product Enablement", href: "/services/product-enablement" },
      { label: "Digital Engineering", href: "/services/digital-engineering" },
      {
        label: "Intelligent Quality Engineering",
        href: "/services/intelligent-quality-engineering",
      },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
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
  { label: "Contact Us", href: "/contact-us" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-animate fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-[#2d1738]/70 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        {" "}
        <Link href="/" className="flex items-center ">
          <Image
            src={"/elevro-logo.svg"}
            alt="elevro-icon"
            width={230} // Reflects the actual design aspect ratio
            height={50} // dynamically matching the canvas proportions
            className="h-9 w-auto object-contain" // Constrain the height, let the width breathe
            priority
          />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-cream/78 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
                {item.children ? <ChevronDown className="h-3.5 w-3.5" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-12 w-72 translate-y-3 rounded-3xl border border-white/10 bg-[#1a0c20]/95 p-3 opacity-0 shadow-card backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
              ) : null}
            </div>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="hidden rounded-full bg-[#8b332c] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9d4038] lg:inline-flex"
        >
          Start a Project
        </Link>
        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#1a0c20]/95 p-4 shadow-card backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-white/10 py-2 last:border-0"
            >
              <Link
                href={item.href}
                className="block py-2 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-sm text-cream/70"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
