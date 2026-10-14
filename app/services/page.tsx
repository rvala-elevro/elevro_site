import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Cpu,
  Gauge,
  Layers3,
  Rocket,
  Sparkles,
  TestTubeDiagonal,
  Workflow,
} from "lucide-react";

import { SectionTitle } from "@/components/PageBlocks";
import Card from "@/components/Card";
import { resourceDetails } from "@/lib/resource-details";

export const metadata: Metadata = {
  title: "AI-Powered Product Engineering Services | Elevro",
  description:
    "Explore Elevro's AI-powered product engineering services across intelligent quality engineering, product enablement, artificial intelligence, cloud engineering and digital engineering.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "AI-Powered Product Engineering Services | Elevro",
    description:
      "AI-powered product engineering across quality engineering, product enablement, artificial intelligence, cloud and digital engineering.",
    url: "https://www.elevro.com/services",
    siteName: "Elevro",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Product Engineering Services | Elevro",
    description:
      "AI-powered engineering services spanning quality, DevOps, cloud, AI and digital products.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
    linkText: "Explore Quality Engineering Services",
    icon: TestTubeDiagonal,
    text: "Improve software reliability with AI-powered quality engineering services covering test automation, functional validation, embedded testing, mobile applications, IoT systems and communication protocols. Our quality-driven approach helps identify defects earlier, strengthen test coverage and support continuous product validation.",
    capabilities: [
      "AI-Enabled Test Automation",
      "Enterprise Web & Cloud Testing",
      "Mobile Application Testing",
      "IoT & Embedded Firmware Testing",
      "Matter Testing",
      "Protocol Validation",
    ],
  },
  {
    title: "Product Enablement",
    href: "/services/product-enablement",
    linkText: "Explore Product Enablement Services",
    icon: Rocket,
    text: "Streamline the product development lifecycle with continuous integration, automated delivery and DevOps engineering. Elevro helps businesses build reliable CI/CD pipelines, integrate quality gates and optimise engineering workflows for efficient product development, validation and release readiness.",
    capabilities: [
      "CI/CD Pipelines",
      "QAOps Engineering",
      "DevOps Engineering",
      "Infrastructure Monitoring",
      "AIOps",
      "Release Enablement",
    ],
  },
  {
    title: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
    linkText: "Explore Artificial Intelligence Services",
    icon: BrainCircuit,
    text: "Transform engineering workflows with AI-powered solutions that improve automation, testing efficiency and decision-making. From AI-based testing and generative AI for QA to release risk intelligence and AIOps, we help organisations introduce practical intelligence into their software delivery processes.",
    capabilities: [
      "AI-Based Testing",
      "Generative AI for QA",
      "Release Risk Intelligence",
      "Intelligent Defect Analysis",
      "AIOps Enablement",
    ],
  },
  {
    title: "Cloud Engineering",
    href: "/services/cloud-engineering",
    linkText: "Explore Cloud Engineering Services",
    icon: CloudCog,
    text: "Build and manage scalable cloud environments with Elevro's cloud engineering services. We support cloud infrastructure automation, multi-cloud management, DevOps integration and IoT cloud solutions to help businesses improve deployment efficiency, infrastructure reliability and operational visibility.",
    capabilities: [
      "CloudOps & DevOps Strategy",
      "AWS, Azure & GCP",
      "Multi-Cloud Management",
      "Infrastructure as Code",
      "IoT Cloud Solutions",
    ],
  },
  {
    title: "Digital Engineering",
    href: "/services/digital-engineering",
    linkText: "Explore Digital Engineering Services",
    icon: Cpu,
    text: "Design and engineer modern digital solutions that support business growth and evolving user expectations. Our digital engineering services focus on building scalable applications, backend systems, APIs and connected digital platforms with a strong emphasis on quality, integration and performance.",
    capabilities: [
      "Web Applications",
      "Mobile Applications",
      "Backend Engineering",
      "API Integration",
      "Digital Platform Engineering",
    ],
  },
];

const whyElevro = [
  {
    icon: Sparkles,
    title: "AI-Driven Engineering",
    text: "Leverage AI-assisted testing, intelligent automation and actionable engineering insights to improve efficiency and product quality.",
  },
  {
    icon: Layers3,
    title: "End-to-End Product Expertise",
    text: "Connect firmware, embedded systems, applications, APIs and cloud platforms through integrated engineering and validation.",
  },
  {
    icon: Workflow,
    title: "Continuous Quality & Delivery",
    text: "Integrate automated testing, CI/CD pipelines and quality gates to identify risks earlier and support reliable releases.",
  },
  {
    icon: Gauge,
    title: "Scalable Engineering Solutions",
    text: "Build flexible automation frameworks, reliable cloud infrastructure and digital systems that support evolving business needs.",
  },
];

const approach = [
  {
    number: "01",
    title: "Discover & Assess",
    text: "Understand product requirements, system architecture, technical dependencies and engineering challenges to identify improvement opportunities.",
  },
  {
    number: "02",
    title: "Design & Engineer",
    text: "Develop suitable engineering frameworks, automation strategies, infrastructure configurations and integration workflows.",
  },
  {
    number: "03",
    title: "Validate & Automate",
    text: "Implement continuous testing, automated quality checks and CI/CD integration to identify defects and improve release readiness.",
  },
  {
    number: "04",
    title: "Monitor & Optimise",
    text: "Use engineering metrics, operational monitoring and AI-assisted insights to support continuous improvement and system reliability.",
  },
];

const industries = [
  {
    title: "Consumer Electronics",
    href: "/industries/consumer-electronics",
    image: "/services/industries/consumer-electronics.webp",
    text: "Testing and validation for smart devices, embedded firmware, wireless connectivity and connected consumer products.",
  },
  {
    title: "Healthcare & MedTech",
    href: "/industries/healthcare-medtech",
    image: "/services/industries/healthcare-medtech.webp",
    text: "Quality engineering for healthcare applications, medical technology platforms and connected health solutions.",
  },
  {
    title: "eCommerce & Retail",
    href: "/industries/ecommerce-retail",
    image: "/services/industries/ecommerce-retail.webp",
    text: "Validation of eCommerce platforms, customer journeys, payment workflows and backend integrations.",
  },
  {
    title: "Automotive & Infotainment",
    href: "/industries/automotive-infotainment",
    image: "/services/industries/automotive-infotainment.webp",
    text: "Testing for in-vehicle systems, infotainment platforms, wireless connectivity and digital automotive experiences.",
  },
  {
    title: "Smart Home, IoT & Matter",
    href: "/industries/smart-home-iot-matter",
    image: "/services/industries/smart-home-iot-matter.webp",
    text: "End-to-end testing for connected devices, Matter ecosystems, communication protocols and interoperability.",
  },
  {
    title: "Cloud & SaaS Platforms",
    href: "/industries/cloud-saas-platforms",
    image: "/services/industries/cloud-saas.webp",
    text: "Quality engineering and automation for cloud-native applications, APIs, SaaS platforms and scalable infrastructure.",
  },
];

const businessBenefits = [
  {
    title: "Accelerated Product Delivery",
    text: "Streamline development and release processes through automated pipelines and efficient engineering workflows.",
  },
  {
    title: "Improved Software Quality",
    text: "Strengthen validation, detect defects earlier and improve test coverage across digital products.",
  },
  {
    title: "Reduced Manual Effort",
    text: "Apply automation and AI-assisted processes to minimise repetitive engineering and testing activities.",
  },
  {
    title: "Enhanced System Reliability",
    text: "Improve application, device and infrastructure reliability through continuous monitoring and validation.",
  },
  {
    title: "Scalable Digital Infrastructure",
    text: "Build cloud environments and digital platforms designed to support growth and changing requirements.",
  },
];

const faqs = [
  {
    question: "What product engineering services does Elevro offer?",
    answer:
      "Elevro offers intelligent quality engineering, product enablement, artificial intelligence, cloud engineering and digital engineering services. These solutions support product development, testing, automation, cloud operations and continuous delivery.",
  },
  {
    question: "How does AI improve product engineering?",
    answer:
      "AI helps engineering teams automate repetitive tasks, analyse testing data, identify potential risks and improve decision-making. AI-assisted quality engineering can also support test generation, defect analysis and release readiness assessments.",
  },
  {
    question: "Does Elevro provide end-to-end quality engineering services?",
    answer:
      "Yes. Elevro provides quality engineering across enterprise web applications, mobile platforms, embedded firmware, IoT devices, communication protocols and cloud-connected systems.",
  },
  {
    question: "What is the role of DevOps in product engineering?",
    answer:
      "DevOps connects development and operations through automated workflows, continuous integration, deployment pipelines and infrastructure monitoring. It helps engineering teams improve collaboration, delivery consistency and release reliability.",
  },
  {
    question: "Which industries does Elevro support?",
    answer:
      "Elevro supports consumer electronics, healthcare and MedTech, eCommerce and retail, automotive and infotainment, smart home and IoT, and cloud and SaaS platforms.",
  },
  {
    question:
      "How can businesses get started with Elevro's engineering services?",
    answer:
      "Businesses can contact Elevro to discuss product requirements, engineering challenges and their technology roadmap. The team can help identify relevant engineering, automation and quality solutions for their needs.",
  },
];

const latestInsights = resourceDetails
  .filter((resource) => resource.type === "blogs")
  .slice(-3)
  .reverse();

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* ================================================================ */}
      {/* 1. HERO                                                          */}
      {/* ================================================================ */}

      <ServicesHero />

      {/* ================================================================ */}
      {/* 2. OVERVIEW                                                      */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
                End-to-End Engineering
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
                End-to-End Engineering Services for Modern Digital Products
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-cream/62">
              <p>
                Modern businesses need more than software development. They need
                intelligent engineering solutions that support quality,
                performance, scalability and continuous innovation throughout
                the product lifecycle.
              </p>

              <p>
                At Elevro, we bring together AI-powered quality engineering,
                product enablement, DevOps, cloud infrastructure and digital
                engineering to help organisations solve complex technology
                challenges.
              </p>

              <p>
                Our services support the complete product ecosystem, from
                embedded systems and connected devices to enterprise
                applications, APIs and cloud-native platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. CORE SERVICES                                                 */}
      {/* ================================================================ */}

      <section
        id="core-services"
        className="soft-section-alt px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Core Services"
            title="Explore Our AI-Powered Engineering Services"
            text="Discover engineering solutions designed to improve product quality, accelerate development and support scalable digital transformation."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card index={index} key={service.title}>
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary/25 text-[#d79088]">
                        <Icon className="h-6 w-6" />
                      </span>

                      <span className="text-sm text-cream/25">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-medium tracking-[-0.03em] text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-cream/60">
                      {service.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.capabilities.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs text-cream/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#d79088] transition hover:text-white"
                    >
                      {service.linkText}

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. WHY ELEVRO                                                    */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Elevro?"
            title="Why Choose Elevro for Product Engineering Services?"
            text="Elevro combines engineering expertise, intelligent automation and continuous quality practices to help businesses build reliable digital products."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyElevro.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card index={index} key={item.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#d79088]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-7 text-xl font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-cream/58">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. ENGINEERING APPROACH                                          */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Engineering Approach"
            title="Our Approach to Intelligent Product Engineering"
            text="We follow a structured engineering approach that combines technical assessment, automation, continuous validation and release intelligence to support reliable product delivery."
          />

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-[#d79088]/25 to-transparent lg:block" />

            <div className="relative grid gap-5 lg:grid-cols-4">
              {approach.map((item) => (
                <div
                  key={item.number}
                  className="surface-panel rounded-[1.8rem] border border-white/10 p-7 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-[#d79088]/30 bg-[#8b332c]/15 text-sm font-medium text-[#d79088]">
                    {item.number}
                  </span>

                  <h3 className="mt-7 text-xl font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-cream/58">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. INDUSTRIES — SIX IMAGE CARDS                                  */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industries We Serve"
            title="Industry-Focused Engineering Solutions"
            text="Elevro provides specialised engineering, automation and product validation support for industries where connected systems, software reliability and digital performance are critical."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group surface-panel overflow-hidden rounded-[2rem] border border-white/10 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-[#d79088]/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#17091e]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#17091e]/65 via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-medium text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-7 text-cream/58">
                    {industry.text}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d79088]">
                    Explore Industry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. BUSINESS BENEFITS                                             */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Business Value"
            title="Engineering Solutions That Deliver Business Value"
            text="Our AI-powered engineering services help businesses address critical development challenges while improving quality, operational efficiency and product reliability."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {businessBenefits.map((item, index) => (
              <div
                key={item.title}
                className="surface-panel rounded-[1.7rem] border border-white/10 p-6 shadow-soft"
              >
                <span className="text-xs font-medium text-[#d79088]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-lg font-medium leading-7 text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-cream/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. BLOGS / INSIGHTS                                              */}
      {/* ================================================================ */}

      {latestInsights.length > 0 && (
        <section className="soft-section px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Insights"
              title="Insights & Ideas from the World of Engineering"
              text="Stay informed with the latest insights on AI-powered engineering, intelligent quality assurance, cloud technologies, DevOps and digital innovation."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {latestInsights.map((article, index) => (
                <Card index={index} key={article.slug}>
                  <Link
                    href={`/resources/blogs/${article.slug}`}
                    className="group flex h-full flex-col"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#d79088]">
                      {article.category}
                    </p>

                    <h3 className="mt-5 text-xl font-medium leading-7 text-white">
                      {article.title}
                    </h3>

                    <p className="mt-4 leading-7 text-cream/55">
                      {article.excerpt}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#d79088]">
                      Read Insight
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/resources/blogs"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#d79088] transition hover:text-white"
              >
                Explore All Insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* 9. FAQ                                                           */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions About Our Engineering Services"
          />

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 font-medium text-white/85 md:px-6">
                  <span>{faq.question}</span>

                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-lg text-[#d79088] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="border-t border-white/8 px-5 py-5 leading-7 text-cream/60 md:px-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 10. FINAL CTA                                                    */}
      {/* ================================================================ */}

      <section className="soft-section px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#8b332c]/20 p-8 shadow-soft md:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
                Let&apos;s Build Better
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
                Ready to Build Smarter, More Reliable Digital Products?
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-cream/65">
                Partner with Elevro to strengthen product quality, automate
                engineering workflows and accelerate digital innovation with
                AI-powered engineering services.
              </p>

              <p className="mt-3 max-w-3xl leading-8 text-cream/55">
                From intelligent testing and DevOps to cloud infrastructure and
                digital engineering, let&apos;s identify the right approach for
                your next product challenge.
              </p>

              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9d4038]"
              >
                Talk to Our Experts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ========================================================================== */
/* CUSTOM SPLIT HERO                                                          */
/* ========================================================================== */

function ServicesHero() {
  return (
    <section className="hero-soft-bg relative overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -right-28 top-0 h-[32rem] w-[32rem] rounded-full bg-secondary/20 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* LEFT */}
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d79088]">
            Product Engineering Services
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-white md:text-6xl xl:text-7xl">
            AI-Powered Product Engineering Services
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-cream/65">
            Accelerate digital innovation with Elevro&apos;s AI-powered product
            engineering services. From intelligent quality engineering and
            product enablement to artificial intelligence, cloud engineering and
            digital engineering, we help businesses develop, validate and
            deliver reliable, scalable digital products.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-cream/52">
            Our engineering-driven approach combines automation, continuous
            testing, DevOps and AI-powered intelligence to improve product
            quality, streamline development and enable confident releases.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#core-services"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9d4038]"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>

        {/* RIGHT GRAPHIC */}
        <EngineeringGraphic />
      </div>
    </section>
  );
}

function EngineeringGraphic() {
  const nodes = [
    {
      icon: BrainCircuit,
      title: "AI",
      className: "left-[6%] top-[12%]",
    },
    {
      icon: TestTubeDiagonal,
      title: "Quality",
      className: "right-[5%] top-[16%]",
    },
    {
      icon: Workflow,
      title: "DevOps",
      className: "left-[2%] bottom-[13%]",
    },
    {
      icon: CloudCog,
      title: "Cloud",
      className: "right-[3%] bottom-[12%]",
    },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-[12%] rounded-full border border-white/10 bg-white/[0.035] backdrop-blur-xl" />

      <div className="absolute inset-[25%] rounded-full border border-[#d79088]/20 bg-[#2d1738]/60 shadow-[0_30px_100px_rgba(20,8,26,0.35)]">
        <div className="grid h-full place-items-center text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-secondary/30 text-[#d79088]">
              <Cpu className="h-7 w-7" />
            </span>

            <p className="mt-4 text-sm font-medium text-white">Product</p>

            <p className="text-sm text-cream/50">Engineering</p>
          </div>
        </div>
      </div>

      {/* connecting lines */}
      <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#d79088]/25 to-transparent" />

      <div className="absolute left-[15%] top-1/2 h-px w-[70%] -translate-y-1/2 bg-linear-to-r from-transparent via-[#d79088]/25 to-transparent" />

      {nodes.map(({ icon: Icon, title, className }) => (
        <div
          key={title}
          className={`absolute ${className} surface-panel flex h-28 w-28 flex-col items-center justify-center rounded-[1.6rem] border border-white/10 shadow-soft`}
        >
          <Icon className="h-6 w-6 text-[#d79088]" />

          <span className="mt-3 text-sm font-medium text-white/85">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
