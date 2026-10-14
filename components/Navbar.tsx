"use client";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Intelligent Quality Engineering",
        href: "/services/intelligent-quality-engineering",
      },
      {
        label: "Product Enablement",
        href: "/services/product-enablement",
      },
      {
        label: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
      {
        label: "Cloud Engineering",
        href: "/services/cloud-engineering",
      },
      {
        label: "Digital Engineering",
        href: "/services/digital-engineering",
      },
    ],
  },

  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Consumer Electronics",
        href: "/industries/consumer-electronics",
      },
      {
        label: "Healthcare & MedTech",
        href: "/industries/healthcare-medtech",
      },
      {
        label: "eCommerce & Retail",
        href: "/industries/ecommerce-retail",
      },
      {
        label: "Automotive & Infotainment",
        href: "/industries/automotive-infotainment",
      },
      {
        label: "Smart Home, IoT & Matter",
        href: "/industries/smart-home-iot-matter",
      },
      {
        label: "Cloud & SaaS Platforms",
        href: "/industries/cloud-saas-platforms",
      },
    ],
  },

  {
    label: "Resources",
    href: null,
    children: [
      {
        label: "Blogs",
        href: "/resources/blogs",
      },
      {
        label: "Whitepapers",
        href: "/resources/whitepapers",
      },
      {
        label: "Case Studies",
        href: "/resources/case-studies",
      },
    ],
  },

  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Careers",
    href: "/careers",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(
    null,
  );

  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(
    null,
  );

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileMenu((current) =>
      current === label ? null : label,
    );
  };

  const toggleDesktopSubmenu = (label: string) => {
    setActiveDesktopMenu((current) =>
      current === label ? null : label,
    );
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setActiveMobileMenu(null);
    setActiveDesktopMenu(null);
  };

  const isItemActive = (href: string | null) => {
    if (!href) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="nav-animate fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/12 bg-[#2d1738]/70 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={closeAllMenus}
        >
          <Image
            src="/elevro-text-logo.svg"
            alt="Elevro"
            width={230}
            height={50}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* -------------------------------------------------------------- */}
        {/* DESKTOP NAVIGATION                                             */}
        {/* -------------------------------------------------------------- */}

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const menuOpen = activeDesktopMenu === item.label;
            const active = isItemActive(item.href);

            /* Normal navigation item */
            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={closeAllMenus}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-cream/78 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            /* Navigation item + dropdown */
            return (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() =>
                  setActiveDesktopMenu(item.label)
                }
                onMouseLeave={() =>
                  setActiveDesktopMenu(null)
                }
              >
                <div
                  className={`flex items-center rounded-full transition ${
                    active || menuOpen
                      ? "bg-white/10"
                      : "hover:bg-white/10"
                  }`}
                >
                  {/* Parent page link */}
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      className={`py-2 pl-4 pr-2 text-sm font-medium transition ${
                        active
                          ? "text-white"
                          : "text-cream/78 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    /* Resources has no parent page */
                    <button
                      type="button"
                      onClick={() =>
                        toggleDesktopSubmenu(item.label)
                      }
                      className="py-2 pl-4 pr-2 text-sm font-medium text-cream/78 transition hover:text-white"
                    >
                      {item.label}
                    </button>
                  )}

                  {/* Independent dropdown button */}
                  <button
                    type="button"
                    aria-label={`Open ${item.label} menu`}
                    aria-expanded={menuOpen}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleDesktopSubmenu(item.label);
                    }}
                    className="mr-2 grid h-7 w-7 place-items-center rounded-full text-cream/60 transition hover:bg-white/10 hover:text-white"
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full w-80 pt-2 transition-all duration-200 ${
                    menuOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="rounded-3xl border border-white/10 bg-[#1a0c20]/95 p-3 shadow-card backdrop-blur-xl">
                    {/* Parent-page shortcut */}
                    {item.href && (
                      <>
                        <Link
                          href={item.href}
                          onClick={closeAllMenus}
                          className="group mb-2 flex items-center justify-between rounded-2xl bg-white/[0.055] px-4 py-3.5 text-sm font-medium text-white transition hover:bg-secondary/25"
                        >
                          View all {item.label}

                          <ArrowRight className="h-4 w-4 text-[#d79088] transition-transform group-hover:translate-x-1" />
                        </Link>

                        <div className="mb-2 h-px bg-white/8" />
                      </>
                    )}

                    {item.children?.map((child) => {
                      const childActive =
                        pathname === child.href;

                      return (
                        <Link
                          href={child.href}
                          key={child.label}
                          onClick={closeAllMenus}
                          className={`block rounded-2xl px-4 py-3 text-sm transition ${
                            childActive
                              ? "bg-secondary/30 text-white"
                              : "text-cream/70 hover:bg-secondary/20 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <Link
          href="/contact-us"
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9d4038] lg:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile trigger */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* -------------------------------------------------------------- */}
      {/* MOBILE MENU                                                    */}
      {/* -------------------------------------------------------------- */}

      {isOpen && (
        <div className="relative mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#2d1738]/95 p-5 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl" />

          <div className="relative z-10 flex max-h-[calc(100vh-180px)] flex-col gap-1 overflow-y-auto pr-1">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const submenuOpen =
                activeMobileMenu === item.label;

              const active = isItemActive(item.href);

              /* Normal mobile link */
              if (!hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 py-1 last:border-0"
                  >
                    <Link
                      href={item.href!}
                      onClick={closeAllMenus}
                      className={`flex w-full items-center py-2.5 text-base font-medium transition ${
                        active
                          ? "text-[#d79088]"
                          : "text-white/90"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <div
                  key={item.label}
                  className="border-b border-white/10 py-1 last:border-0"
                >
                  {/* Main mobile row */}
                  <div className="flex items-center justify-between">
                    {/* Services/Industries = real page */}
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={closeAllMenus}
                        className={`flex-1 py-2.5 text-base font-medium transition ${
                          active
                            ? "text-[#d79088]"
                            : "text-white/90"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      /* Resources = dropdown only */
                      <button
                        type="button"
                        onClick={() =>
                          toggleMobileSubmenu(item.label)
                        }
                        className="flex-1 py-2.5 text-left text-base font-medium text-white/90"
                      >
                        {item.label}
                      </button>
                    )}

                    {/* Separate dropdown arrow */}
                    <button
                      type="button"
                      aria-label={`Open ${item.label} submenu`}
                      aria-expanded={submenuOpen}
                      onClick={() =>
                        toggleMobileSubmenu(item.label)
                      }
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white/65 transition active:bg-white/10"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          submenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mobile submenu */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      submenuOpen
                        ? "my-2 grid-rows-[1fr] opacity-100"
                        : "pointer-events-none grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-1 flex flex-col gap-1 border-l border-white/10 pl-4">
                        {/* View parent */}
                        {item.href && (
                          <Link
                            href={item.href}
                            onClick={closeAllMenus}
                            className="group mb-1 flex items-center justify-between rounded-xl bg-white/[0.055] px-3 py-2.5 text-sm font-medium text-[#d79088]"
                          >
                            View all {item.label}

                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}

                        {item.children?.map((child) => {
                          const activeChild =
                            pathname === child.href;

                          return (
                            <Link
                              href={child.href}
                              key={child.label}
                              onClick={closeAllMenus}
                              className={`block rounded-xl px-3 py-2.5 text-sm transition ${
                                activeChild
                                  ? "bg-secondary/25 text-white"
                                  : "text-white/65 active:bg-white/10"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="mt-4 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white shadow-soft"
                onClick={closeAllMenus}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}