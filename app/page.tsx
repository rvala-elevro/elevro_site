"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Cpu,
  FileText,
  Layers3,
  Menu,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTubeDiagonal,
  X,
} from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
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
    label: "Solutions & Accelerators",
    href: "/solutions-accelerators",
    children: [
      {
        label: "AI Quality Command Center",
        href: "/solutions-accelerators/ai-quality-command-center",
      },
      {
        label: "Automation Accelerator Studio",
        href: "/solutions-accelerators/automation-accelerator-studio",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Overview", href: "/about-us/overview" },
      { label: "Careers", href: "/about-us/careers" },
      { label: "Partnerships", href: "/about-us/partnerships" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

const services = [
  {
    title: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
    icon: BrainCircuit,
    text: "Build intelligent systems that classify, predict, recommend and automate decisions with measurable business value.",
  },
  {
    title: "Product Enablement",
    href: "/services/product-enablement",
    icon: Rocket,
    text: "Move from idea to launch with discovery, product architecture, MVP delivery, UX and platform modernization.",
  },
  {
    title: "Digital Engineering",
    href: "/services/digital-engineering",
    icon: Cpu,
    text: "Engineer resilient web, mobile, backend and data platforms that scale across teams, customers and markets.",
  },
  {
    title: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
    icon: TestTubeDiagonal,
    text: "Elevate quality with AI-assisted testing, automation frameworks, observability and release confidence dashboards.",
  },
  {
    title: "Cloud Engineering",
    href: "/services/cloud-engineering",
    icon: CloudCog,
    text: "Design secure cloud foundations, DevOps pipelines, infrastructure automation and cost-aware platform operations.",
  },
];

const accelerators = [
  {
    title: "AI Quality Command Center",
    icon: ShieldCheck,
    points: [
      "AI-assisted defect prediction",
      "Release risk scoring",
      "Live quality intelligence dashboards",
    ],
  },
  {
    title: "Automation Accelerator Studio",
    icon: Bot,
    points: [
      "Reusable automation components",
      "Workflow bots and copilots",
      "Faster test and process automation",
    ],
  },
];

const resources = [
  {
    type: "Blog",
    title: "How intelligent automation improves release confidence",
    href: "/resources/blogs/intelligent-automation-release-confidence",
  },
  {
    type: "Whitepaper",
    title: "AI-led quality engineering maturity model",
    href: "/resources/whitepapers/ai-quality-engineering-maturity-model",
  },
  {
    type: "Case Study",
    title: "Reducing manual regression effort with automation accelerators",
    href: "/resources/case-studies/regression-automation-accelerator",
  },
];

const stats = [
  ["5+", "Core service pillars"],
  ["2x", "Faster quality cycles"],
  ["40%", "Lower manual effort target"],
  ["24/7", "Cloud-native reliability mindset"],
];

const clients = [
  "AI Labs",
  "FinEdge",
  "CloudWorks",
  "Medix",
  "RetailOps",
  "DataGrid",
  "Nexora",
  "QualifyX",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".nav-animate", {
        y: -26,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-copy > *", {
        y: 34,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
          },
        });
      });
      // Add this inside your existing useEffect(), after your ".reveal" animation block

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card) => {
        gsap.to(card, {
          scale: 0.88,
          opacity: 0.35,
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 28%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      
        gsap.fromTo(
          card,
          {
            rotateX: 8,
            transformPerspective: 1200,
          },
          {
            rotateX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 28%",
              scrub: true,
            },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax || 0.2);

        gsap.to(el, {
          y: () => window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      const hero = document.querySelector<HTMLElement>(".hero-parallax");

      if (hero) {
        const layers = gsap.utils.toArray<HTMLElement>(".mouse-parallax");

        const moveLayers = (event: MouseEvent) => {
          const rect = hero.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;

          layers.forEach((layer) => {
            const depth = Number(layer.dataset.depth || 0.04);

            gsap.to(layer, {
              x: x * depth,
              y: y * depth,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        };

        const resetLayers = () => {
          layers.forEach((layer) => {
            gsap.to(layer, {
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
          });
        };

        hero.addEventListener("mousemove", moveLayers);
        hero.addEventListener("mouseleave", resetLayers);

        return () => {
          hero.removeEventListener("mousemove", moveLayers);
          hero.removeEventListener("mouseleave", resetLayers);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden flex flex-col gap-3 bg-primary text-cream">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <LogoStrip />
      <Services />
      <Evolution />
      <Solutions />
      <Resources />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}

function Navbar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <header className="nav-animate fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-primary/70 px-4 py-3 shadow-glow backdrop-blur-xl md:px-6">
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
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-cream/[0.78] transition hover:bg-white/10 hover:text-white"
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
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:scale-105 lg:inline-flex"
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
}

// 2. Replace your Hero function with this:

function Hero() {
  return (
    <section
      id="home"
      className="hero-parallax noise relative min-h-screen overflow-hidden bg-radialNoise px-4 pt-36 md:px-8 lg:pt-40"
    >
      <div
        data-parallax="-0.18"
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-secondary/30 blur-[110px]"
      />

      <div
        data-parallax="0.16"
        className="pointer-events-none absolute -right-40 top-32 h-[520px] w-[520px] rounded-full bg-[#77241D]/25 blur-[130px]"
      />

      <div
        data-parallax="0.28"
        className="pointer-events-none absolute bottom-10 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-white/10 blur-[100px]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,17,41,0)_0%,#150A1A_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-parallax="-0.06" className="hero-copy max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cream/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            AI-led engineering for modern enterprises
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
            Elevating Quality Through{" "}
            <span className="gradient-text">Intelligent Automation</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/[0.72] md:text-xl">
            We design AI, digital engineering and cloud-native quality systems
            that convert complex workflows into reliable, automated and
            measurable business outcomes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 font-bold text-white shadow-glow transition hover:scale-105"
            >
              Discuss Your Roadmap{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.15] px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div data-parallax="0.08" className="relative h-[620px] min-h-[420px]">
          <div
            data-depth="-0.03"
            className="mouse-parallax absolute inset-0 z-0"
          >
            <HeroCanvas variant="orb" />
          </div>

          <motion.div
            data-depth="0.08"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mouse-parallax glass absolute bottom-8 left-0 z-10 max-w-sm rounded-3xl p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/70">
                <Layers3 className="h-5 w-5" />
              </span>

              <div>
                <p className="font-bold">Quality Intelligence Layer</p>
                <p className="text-sm text-cream/60">
                  AI + automation + observability
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              {stats.slice(0, 3).map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/[0.08] p-3">
                  <p className="text-lg font-black">{value}</p>
                  <p className="mt-1 text-xs text-cream/[0.55]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div
            data-depth="0.12"
            className="mouse-parallax glass absolute right-4 top-20 z-10 hidden rounded-3xl p-4 md:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cream/45">
              Automation
            </p>
            <p className="mt-2 text-2xl font-black">2x Faster</p>
          </div>

          <div
            data-depth="-0.08"
            className="mouse-parallax absolute right-8 bottom-28 z-10 hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold backdrop-blur-xl md:block"
          >
            AI Quality Engine
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="relative border-y border-white/10 bg-[#1b0d21] py-6">
      <div className="mx-auto mb-4 max-w-7xl px-4 text-sm uppercase tracking-[0.32em] text-cream/[0.45] md:px-8">
        Trusted delivery mindset across digital, cloud and AI teams
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="marquee inline-flex gap-4 pr-4">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-cream/70"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything required to engineer intelligent, reliable digital products."
          text="A homepage service grid inspired by enterprise AI consultancies, adapted for your exact service categories and brand colors."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-card"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl transition group-hover:bg-secondary/[0.45]" />
                <div className="relative">
                  <span className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-secondary/[0.35] text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-black leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-cream/[0.62]">
                    {service.text}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white"
                  >
                    Know More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Evolution() {
  return (
    // 3. Replace your Evolution section opening wrapper with this:

    <section className="relative overflow-hidden px-4 pb-24 md:px-8">
      <div
        data-parallax="-0.12"
        className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]"
      />

      <div
        data-parallax="0.14"
        className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/10 blur-[120px]"
      />

      <div className="reveal relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#17091e] shadow-card lg:grid-cols-2">
        <div className="p-8 md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-secondary">
            Digital Evolution
          </p>
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            From idea to automated operating model.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cream/[0.68]">
            Use this section like Zylitix’s deeper service explanation area:
            each service gets a narrative, benefits and a conversion path, but
            the content is tuned around intelligent quality and automation.
          </p>
          <div className="mt-9 space-y-4">
            {[
              "Map business workflows and quality risks",
              "Build the AI, automation and cloud foundation",
              "Measure impact through dashboards and release intelligence",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/5 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                <p className="text-cream/[0.78]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[460px] bg-[radial-gradient(circle_at_50%_30%,rgba(119,36,29,0.65),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] p-8 md:p-12">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="relative grid gap-5">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-3xl p-5"
              >
                <p className="text-sm text-cream/[0.45]">0{index + 1}</p>
                <p className="mt-1 font-black">{service.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    // 4. Replace your Solutions section opening with this:

    <section
      id="solutions"
      className="relative overflow-hidden bg-[#180B1F] px-4 py-24 md:px-8"
    >
      <div
        data-parallax="-0.1"
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[120px]"
      />

      <div
        data-parallax="0.16"
        className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions & Accelerators"
          title="Reusable accelerators that shorten the path from strategy to production."
          text="Two subsections are added as requested. Rename them to your actual accelerator names when your product packaging is finalized."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {accelerators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal rounded-[2rem] border border-white/10 bg-primary/70 p-8 shadow-card"
              >
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-secondary/[0.35]">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-8 text-3xl font-black">{item.title}</h3>
                <div className="mt-7 grid gap-3">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-cream/75"
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary" />{" "}
                      {point}
                    </div>
                  ))}
                </div>
                <Link
                  href="/solutions-accelerators"
                  className="mt-8 inline-flex items-center gap-2 font-bold"
                >
                  Explore accelerator <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    // 5. Replace your Resources section opening with this:

    <section
      id="resources"
      className="relative overflow-hidden px-4 py-24 md:px-8"
    >
      <div
        data-parallax="-0.08"
        className="pointer-events-none absolute right-20 top-10 h-80 w-80 rounded-full bg-secondary/20 blur-[100px]"
      />

      <div
        data-parallax="0.12"
        className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resources"
          title="Thought leadership for AI, automation, quality and cloud teams."
          text="Blogs, whitepapers and case studies are represented as separate resource types in the homepage preview."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <motion.article
              key={resource.title}
              whileHover={{ y: -8 }}
              className="reveal rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-card"
            >
              <span className="mb-10 inline-flex items-center gap-2 rounded-full bg-secondary/25 px-4 py-2 text-sm font-bold text-white">
                <FileText className="h-4 w-4" /> {resource.type}
              </span>
              <h3 className="text-2xl font-black leading-tight">
                {resource.title}
              </h3>
              <Link
                href={resource.href}
                className="mt-8 inline-flex items-center gap-2 font-bold"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 pb-24 md:px-8">
      <div className="reveal mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-[#17091e] p-8 shadow-card md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-secondary">
            About Us
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Product designers, AI engineers and quality architects under one
            roof.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Overview",
              "A delivery partner focused on measurable automation outcomes.",
            ],
            [
              "Careers",
              "Build with teams solving AI, cloud and quality challenges.",
            ],
            [
              "Partnerships",
              "Co-create accelerators and platform integrations.",
            ],
          ].map(([title, text]) => (
            <Link
              key={title}
              href={`/about-us/${title.toLowerCase()}`}
              className="rounded-3xl bg-white/5 p-6 transition hover:bg-secondary/25"
            >
              <BriefcaseBusiness className="mb-8 h-7 w-7 text-secondary" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/[0.62]">{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="reveal noise relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-secondary p-8 shadow-glow md:p-14">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 font-bold uppercase tracking-[0.32em] text-white/[0.65]">
            Call to Action
          </p>
          <h2 className="text-4xl font-black md:text-6xl">
            Transform your quality workflow into an intelligent automation
            engine.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Let’s define your AI, cloud and quality roadmap with practical
            milestones and production-ready accelerators.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-primary transition hover:scale-105"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#120717] px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-black">IntelliQA</span>
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
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-cream/[0.45]">
        © 2026 IntelliQA. All rights reserved.
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="reveal max-w-3xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-secondary">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-cream/[0.62]">{text}</p>
    </div>
  );
}

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
