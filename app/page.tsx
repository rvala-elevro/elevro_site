"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Cpu,
  FileText,
  Rocket,
  ShieldCheck,
  TestTubeDiagonal,
} from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import LogoPreloader from "@/components/LogoPreloader";
import { fadeUp } from "@/lib/animation-variants";

const services = [
  {
    title: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
    icon: TestTubeDiagonal,
    text: "Elevate quality with AI-assisted testing, automation frameworks, observability and release confidence dashboards.",
  },
  {
    title: "Product Enablement",
    href: "/services/product-enablement",
    icon: Rocket,
    text: "Integrate Robust CI/CD Across different Stages of the product lifecycle to deliver with confidence.",
  },
  {
    title: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
    icon: BrainCircuit,
    text: "Build intelligent systems that classify, predict, recommend and automate decisions with measurable business value.",
  },
  {
    title: "Cloud Engineering",
    href: "/services/cloud-engineering",
    icon: CloudCog,
    text: "Design secure cloud foundations, DevOps pipelines, infrastructure automation and cost-aware platform operations.",
  },
  {
    title: "Digital Engineering",
    href: "/services/digital-engineering",
    icon: Cpu,
    text: "Engineer resilient web, mobile, backend and data platforms that scale across teams, customers and markets.",
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

let hasHomeLoaderShown = false;
export default function HomePage() {
  const [showLoader, setShowLoader] = useState(() => !hasHomeLoaderShown);
  useEffect(() => {
    if (!showLoader) return;

    hasHomeLoaderShown = true;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowLoader(false);
      document.body.style.overflow = "";
    }, 2300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (showLoader) return;

    gsap.registerPlugin(ScrollTrigger);

    let removeHeroMouseEvents: (() => void) | undefined;

    const ctx = gsap.context(() => {
      gsap.from(".nav-animate", {
        y: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-copy > *", {
        y: 90,
        opacity: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: "back.out(1.35)",
        delay: 0.1,
      });

      gsap.from(".hero-visual", {
        y: 130,
        opacity: 0,
        scale: 0.96,
        duration: 1.35,
        ease: "elastic.out(1, 0.72)",
        delay: 0.25,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card) => {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.42,
          y: -64,
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
            rotateX: 6,
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
          },
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

        removeHeroMouseEvents = () => {
          hero.removeEventListener("mousemove", moveLayers);
          hero.removeEventListener("mouseleave", resetLayers);
        };
      }
    });

    return () => {
      removeHeroMouseEvents?.();
      ctx.revert();
    };
  }, [showLoader]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader ? <HomeLoader /> : null}
      </AnimatePresence>

      <main
        className={`min-h-screen overflow-hidden flex flex-col text-cream transition-opacity duration-700 ${
          showLoader ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Hero />
        {/* <LogoStrip /> */}
        <Services />
        <Evolution />
        {/* <Solutions /> */}
        <Resources />
        <About />
        <CTA />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-parallax hero-soft-bg relative min-h-screen overflow-hidden px-4 flex flex-col items-center justify-center   pt-28 pb-16 lg:pt-0 lg:pb-0 lg:px-8"
    >
      <div
        data-parallax="-0.12"
        className="pointer-events-none absolute -left-32 top-28 h-95 w-95 rounded-full bg-[#6f4b83]/25 blur-[120px]"
      />

      <div
        data-parallax="0.14"
        className="pointer-events-none absolute -right-32 top-28 h-120 w-120 rounded-full bg-[#a25858]/20 blur-[130px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        {/* Hero Text Content Container */}
        <div
          data-parallax="-0.04"
          className="hero-copy mx-auto max-w-3xl lg:mx-0 w-full text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm font-normal text-cream/75 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            AI-led engineering for modern enterprises
          </div>

          <h1 className="max-w-4xl text-[2.35rem] font-medium leading-tight tracking-[-0.04em] text-white/90 sm:text-[2.65rem] md:text-6xl">
            Enabling Products{" "}
            <span className="soft-gradient-text font-medium block sm:inline">
              Engineering Confidence
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-normal leading-7 text-cream/68 md:text-lg md:leading-8">
            We enable modern product engineering with AI-powered Quality
            Engineering, automation, DevOps, CloudOps, and release
            enablement—building confidence across every stage of product
            delivery.
          </p>

          <div className="mt-8 flex flex-col gap-4 w-full sm:w-auto sm:flex-row justify-center lg:justify-start">
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9d4038]"
            >
              Discuss Your Roadmap
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/4 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Hero Visual Container */}
        <div className="hero-visual relative h-145 min-h-100">
          {/* Horizontally centered canvas viewport */}
          <div
            data-depth="-0.03"
            className="mouse-parallax absolute inset-0 z-0"
          >
            <HeroCanvas variant="orb" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="relative border-y border-white/10 bg-[#1b0d21] py-6">
      <div className="mx-auto mb-4 max-w-7xl px-4 text-sm uppercase tracking-[0.32em] text-cream/45 md:px-8">
        Trusted Delivery Mindset through IOT, Embedded, Cloud and End to End AI
        Teams.
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
    <section id="services" className="soft-section px-4 py-12 md:px-8">
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
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5.5 p-6 shadow-soft"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl transition group-hover:bg-secondary/45" />

                {/* Container must have h-full and flex-col */}
                <div className="relative flex flex-col gap-4 h-full">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary/35 text-white flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </span>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium leading-tight text-white/90">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-6 text-cream/62">
                      {service.text}
                    </p>
                  </div>

                  {/* Adding mt-auto pushes this element to the very bottom */}
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-white self-start"
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
    <section className="soft-section relative overflow-hidden px-4 py-12 md:px-8">
      <div
        data-parallax="-0.12"
        className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]"
      />
      <div
        data-parallax="0.14"
        className="pointer-events-none absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white/10 blur-[120px]"
      />
      <div className="reveal surface-panel relative mx-auto grid max-w-7xl overflow-hidden rounded-4xl border border-white/10 shadow-soft lg:grid-cols-2">
        <div className="p-8 md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#d79088]">
            Digital Evolution
          </p>
          <h2 className="text-4xl font-medium tracking-tight leading-tight md:text-5xl">
            From idea to automated operating model.
          </h2>
          <p className="mt-6 text-lg leading-8 text-cream/68">
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
                <p className="text-cream/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-115 bg-[radial-gradient(circle_at_50%_30%,rgba(119,36,29,0.65),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] p-8 md:p-12">
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[44px_44px]" />
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
                <p className="text-sm text-cream/45">0{index + 1}</p>
                <p className="mt-1 font-meduim">{service.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section
      id="resources"
      className="soft-section relative overflow-hidden px-4 py-12 md:px-8"
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
          {resources.map((resource, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.07, duration: 0.55 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5.5 p-6 shadow-soft"
            >
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl transition group-hover:bg-secondary/45" />
              <div className="relative flex flex-col justify-between items-start h-full">
                <span className=" inline-flex items-center   gap-2 rounded-full bg-secondary/25 px-4 py-2 text-sm font-bold text-white">
                  <FileText className="h-4 w-4" /> {resource.type}
                </span>
                <h3 className="text-2xl font-medium leading-tight">
                  {resource.title}
                </h3>
                <Link
                  href={resource.href}
                  className="mt-2 inline-flex items-center gap-2 font-bold"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-12 md:px-8">
      <div className="reveal surface-panel mx-auto grid max-w-7xl gap-8 rounded-4xl border border-white/10 p-8 shadow-soft md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-[#d79088]">
            About Us
          </p>
          <h2 className="text-4xl leading-tight font-medium md:text-5xl">
            Quality Architects, DevOps engineers and AI Engineers under one roof
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
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/62">{text}</p>
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
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-secondary p-8 shadow-soft md:p-14">
        {/* Subtle background glow element to draw the eyes downward */}
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 font-bold uppercase tracking-[0.32em] text-white/65">
            Call to Action
          </p>
          <h2 className="text-4xl font-medium leading-tight text-white/85 md:leading-tight">
            Deliver confident product with robust End to End coverage and
            gatekeepers backed by Cognitive Intelligence.
          </h2>

          <div className="mt-8 rounded-2xl border border-white/25 bg-white/12 px-5 py-4 shadow-[0_20px_60px_rgba(255,255,255,0.12)] backdrop-blur-sm">
            <p className="text-xl font-semibold leading-8 text-white md:text-2xl">
              Share us a problem you are facing and let&apos;s discuss the
              solutions!!
            </p>
          </div>

          {/* Enhanced Interactive Contact Us Button */}
          <motion.div
            className="mt-8 inline-block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="/contact-us"
              className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-linear-to-r from-white via-cream to-white px-8 py-4.5 font-medium text-secondary shadow-xl backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {/* Shimmer linear highlights sliding across the background */}
              <motion.span
                className="absolute inset-0 block w-[200%] -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 2.5,
                }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4 stroke-[3px]" />
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
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
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#d79088]">
        {eyebrow}
      </p>

      <h2 className="text-3xl leading-tight font-medium tracking-[-0.03em] text-white/90 md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base font-normal leading-8 text-cream/62 md:text-lg">
        {text}
      </p>
    </div>
  );
}

function HomeLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#2b1438]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -40,
        transition: {
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      <div className="absolute inset-0 loader-gradient" />

      <motion.div
        className="relative z-10 flex w-[280px] flex-col items-center gap-7 sm:w-[420px] md:w-[560px]"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <LogoPreloader />

        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full rounded-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.65,
              ease: "easeInOut",
              delay: 0.25,
            }}
          />
        </div>

        <p className="text-center text-xs font-normal uppercase tracking-[0.35em] text-white/55">
          Intelligent Product Enablement
        </p>
      </motion.div>
    </motion.div>
  );
}
