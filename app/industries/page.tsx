import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  Car,
  CheckCircle2,
  CloudCog,
  Cpu,
  Gauge,
  HeartPulse,
  House,
  Layers3,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TestTubeDiagonal,
  Workflow,
} from "lucide-react";

import Card from "@/components/Card";
import { SectionTitle } from "@/components/PageBlocks";
import { resourceDetails } from "@/lib/resource-details";

export const metadata: Metadata = {
  title: "Industry-Specific Product Engineering Solutions | Elevro",
  description:
    "Explore Elevro's industry-specific product engineering solutions across consumer electronics, healthcare, eCommerce, automotive, IoT, Matter, cloud and SaaS platforms.",

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title: "Industry-Specific Product Engineering Solutions | Elevro",
    description:
      "AI-driven engineering, quality assurance, automation and scalable digital solutions for connected and complex product industries.",
    url: "https://www.elevro.com/industries",
    siteName: "Elevro",
    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific Product Engineering Solutions | Elevro",
    description:
      "Explore Elevro engineering solutions across consumer electronics, healthcare, automotive, IoT, eCommerce and cloud.",
    images: ["/og-image.png"],
  },
};

/* -------------------------------------------------------------------------- */
/* INDUSTRIES                                                                 */
/* -------------------------------------------------------------------------- */

const industries = [
  {
    title: "Consumer Electronics",
    href: "/industries/consumer-electronics",
    image: "/industries/consumer-electronics.webp",
    icon: Smartphone,
    text: "Deliver reliable connected experiences with quality engineering for smart devices, wearables, embedded firmware and wireless products. We support device-to-app connectivity, protocol testing, firmware validation and automated testing across complex consumer technology ecosystems.",
    capabilities: [
      "Embedded Firmware Testing",
      "BLE & Wi-Fi Validation",
      "Mobile App Automation",
      "Device-to-Cloud Testing",
      "Hardware-in-the-Loop Automation",
    ],
  },

  {
    title: "Healthcare & MedTech",
    href: "/industries/healthcare-medtech",
    image: "/industries/healthcare-medtech.webp",
    icon: HeartPulse,
    text: "Support accurate and reliable healthcare technology with specialised software testing and quality engineering. Elevro helps validate connected health devices, healthcare applications, patient-facing platforms, APIs and complex data workflows.",
    capabilities: [
      "Healthcare Application Testing",
      "Connected Medical Device Validation",
      "API & Database Testing",
      "Test Automation",
      "Regression Testing",
    ],
  },

  {
    title: "eCommerce & Retail",
    href: "/industries/ecommerce-retail",
    image: "/industries/ecommerce-retail.webp",
    icon: ShoppingCart,
    text: "Create seamless digital commerce experiences with end-to-end quality assurance and automated testing. We help businesses validate product catalogues, pricing, inventory, checkout journeys, order management and backend workflows.",
    capabilities: [
      "eCommerce QA",
      "Checkout Testing",
      "Inventory Validation",
      "API Testing",
      "Cross-Platform Testing",
      "Test Automation",
    ],
  },

  {
    title: "Automotive & Infotainment",
    href: "/industries/automotive-infotainment",
    image: "/industries/automotive-infotainment.webp",
    icon: Car,
    text: "Strengthen automotive software quality with automated validation for infotainment systems, Android Auto, Android Automotive OS and connected vehicle interfaces.",
    capabilities: [
      "Android Auto Testing",
      "AAOS Validation",
      "Infotainment Automation",
      "Bluetooth & Wi-Fi Testing",
      "Vehicle Interface Validation",
    ],
  },

  {
    title: "Smart Home, IoT & Matter",
    href: "/industries/smart-home-iot-matter",
    image: "/industries/smart-home-iot-matter.webp",
    icon: House,
    text: "Enable reliable connectivity and interoperability across smart home ecosystems with specialised IoT testing and automation. We validate Matter-enabled devices, wireless protocols, hubs, mobile applications, firmware and voice assistant integrations.",
    capabilities: [
      "Matter Testing",
      "IoT Test Automation",
      "BLE, Wi-Fi & Thread Validation",
      "Device Provisioning",
      "Hub Interoperability Testing",
    ],
  },

  {
    title: "Cloud & SaaS Platforms",
    href: "/industries/cloud-saas-platforms",
    image: "/industries/cloud-saas-platforms.webp",
    icon: CloudCog,
    text: "Support scalable cloud-native applications with intelligent quality engineering, automation and continuous delivery solutions. Elevro helps validate SaaS workflows, APIs, backend systems and cloud infrastructure.",
    capabilities: [
      "SaaS Application Testing",
      "Cloud QA",
      "API Automation",
      "CI/CD Integration",
      "Performance Validation",
      "Cloud Infrastructure Automation",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* CHALLENGES                                                                 */
/* -------------------------------------------------------------------------- */

const challenges = [
  {
    title: "Complex System Integration",
    text: "Validate communication between devices, applications, APIs and cloud services to improve compatibility and end-to-end reliability.",
  },
  {
    title: "Product Quality & Reliability",
    text: "Strengthen software and firmware validation through structured testing, automation and continuous quality assurance.",
  },
  {
    title: "Faster Product Releases",
    text: "Reduce repetitive validation activities and streamline delivery workflows through automation, CI/CD and continuous testing.",
  },
  {
    title: "Scalability & Performance",
    text: "Support evolving infrastructure and application requirements with scalable engineering, cloud validation and performance-focused testing.",
  },
];

/* -------------------------------------------------------------------------- */
/* CROSS SERVICE CAPABILITIES                                                 */
/* -------------------------------------------------------------------------- */

const engineeringCapabilities = [
  {
    icon: TestTubeDiagonal,
    title: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
    text: "Improves application, device and system reliability through automated validation and continuous testing.",
  },
  {
    icon: Workflow,
    title: "Product Enablement",
    href: "/services/product-enablement",
    text: "Streamlines development workflows with CI/CD, QAOps, DevOps and release automation.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
    text: "Supports smarter testing, predictive insights, engineering automation and AI-driven decision-making.",
  },
  {
    icon: CloudCog,
    title: "Cloud Engineering",
    href: "/services/cloud-engineering",
    text: "Enables scalable cloud infrastructure, deployment automation and reliable cloud operations.",
  },
  {
    icon: Cpu,
    title: "Digital Engineering",
    href: "/services/digital-engineering",
    text: "Supports development and integration across web, mobile, backend and connected product ecosystems.",
  },
];

/* -------------------------------------------------------------------------- */
/* WHY ELEVRO                                                                 */
/* -------------------------------------------------------------------------- */

const whyElevro = [
  {
    icon: Sparkles,
    title: "AI-Driven Engineering Expertise",
    text: "Apply AI-assisted testing, intelligent automation and engineering insights to improve product quality and development efficiency.",
  },
  {
    icon: Layers3,
    title: "Cross-Industry Technical Expertise",
    text: "Address complex requirements across connected devices, healthcare applications, automotive systems, digital commerce and cloud platforms.",
  },
  {
    icon: CheckCircle2,
    title: "Quality-Focused Engineering",
    text: "Integrate structured validation, test automation and continuous quality checks throughout product development.",
  },
  {
    icon: Gauge,
    title: "Scalable Engineering Solutions",
    text: "Implement flexible testing frameworks, automation pipelines and engineering practices that adapt to evolving product requirements.",
  },
];

/* -------------------------------------------------------------------------- */
/* APPROACH                                                                   */
/* -------------------------------------------------------------------------- */

const approach = [
  {
    number: "01",
    title: "Understand Industry Requirements",
    text: "Evaluate product workflows, system dependencies, technical requirements and industry-specific risks to establish clear engineering priorities.",
  },
  {
    number: "02",
    title: "Design Engineering Solutions",
    text: "Develop tailored validation strategies, automation frameworks, integration workflows and infrastructure approaches aligned with product objectives.",
  },
  {
    number: "03",
    title: "Implement & Validate",
    text: "Execute automated testing, system validation, integration checks and continuous quality processes across connected product environments.",
  },
  {
    number: "04",
    title: "Optimise & Scale",
    text: "Monitor engineering outcomes, improve automation coverage and refine delivery workflows to support product evolution and reliable releases.",
  },
];

/* -------------------------------------------------------------------------- */
/* CASE STUDIES                                                               */
/* -------------------------------------------------------------------------- */

const caseStudies = [
  {
    category: "Automotive & Infotainment",
    title: "Android Auto Test Automation",
    image: "/industries/case-studies/android-auto.webp",
    text: "Automated connectivity, user interface, media playback and call workflow validation to support reliable in-vehicle experiences.",
  },
  {
    category: "Smart Home & IoT",
    title: "Matter IoT Test Automation Framework",
    image: "/industries/case-studies/matter-iot.webp",
    text: "Automation for device provisioning, mobile interactions, voice commands and interoperability testing across connected ecosystems.",
  },
  {
    category: "Consumer Electronics",
    title: "Smart Audio Device Test Automation",
    image: "/industries/case-studies/smart-audio.webp",
    text: "Automated validation across Bluetooth, Wi-Fi, audio interfaces, voice integrations and firmware workflows.",
  },
];

/* -------------------------------------------------------------------------- */
/* BENEFITS                                                                   */
/* -------------------------------------------------------------------------- */

const benefits = [
  {
    title: "Improved Product Quality",
    text: "Identify potential defects earlier through structured validation, automation and continuous testing.",
  },
  {
    title: "Faster Time to Market",
    text: "Streamline engineering workflows and reduce repetitive processes through CI/CD and test automation.",
  },
  {
    title: "Enhanced System Reliability",
    text: "Support consistent performance across applications, firmware, connected devices and cloud environments.",
  },
  {
    title: "Reduced Engineering Complexity",
    text: "Simplify interconnected technology workflows through integrated engineering and quality assurance practices.",
  },
  {
    title: "Greater Automation Efficiency",
    text: "Reduce manual testing dependencies and support repeatable validation across product releases.",
  },
  {
    title: "Scalable Product Development",
    text: "Build engineering foundations that adapt to evolving technical, operational and business requirements.",
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    question: "Which industries does Elevro serve?",
    answer:
      "Elevro provides engineering and quality assurance solutions for consumer electronics, healthcare and MedTech, eCommerce and retail, automotive and infotainment, smart home and IoT, and cloud and SaaS platforms.",
  },
  {
    question:
      "How does Elevro address industry-specific engineering challenges?",
    answer:
      "Elevro evaluates each industry's technical requirements, product workflows and system dependencies before developing appropriate engineering, testing and automation approaches.",
  },
  {
    question:
      "Does Elevro provide software testing services across different industries?",
    answer:
      "Yes. Elevro offers intelligent quality engineering and automated testing for enterprise applications, mobile platforms, embedded firmware, connected devices, APIs and cloud systems.",
  },
  {
    question: "How does AI-powered engineering benefit different industries?",
    answer:
      "AI-powered engineering can help reduce repetitive testing activities, analyse quality data, identify potential defects and support faster, more informed product release decisions.",
  },
  {
    question: "Can Elevro support IoT and connected device engineering?",
    answer:
      "Yes. Elevro supports embedded firmware validation, wireless connectivity testing, Matter-enabled devices, mobile application integration and interoperability testing across connected ecosystems.",
  },
  {
    question:
      "How can businesses get started with Elevro's industry solutions?",
    answer:
      "Businesses can contact Elevro to discuss their industry requirements, product challenges and engineering objectives. The team can assess relevant quality engineering, automation, AI, cloud and digital engineering capabilities.",
  },
];

/* -------------------------------------------------------------------------- */
/* BLOGS                                                                      */
/* -------------------------------------------------------------------------- */

const industryBlogSlugs = [
  "ai-based-testing-for-modern-product-teams",
  "protocol-automation-for-connected-devices",
  "building-cicd-quality-gates-for-embedded-sdks",
];

const insights = resourceDetails.filter(
  (resource) =>
    resource.type === "blogs" && industryBlogSlugs.includes(resource.slug),
);

/* ========================================================================== */
/* PAGE                                                                       */
/* ========================================================================== */

export default function IndustriesPage() {
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

      <IndustriesHero />

      {/* ================================================================ */}
      {/* 2. INDUSTRY OVERVIEW                                             */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
                Industry Engineering
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.04em] text-white md:text-5xl">
                Engineering Solutions Built Around Industry Challenges
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-cream/62">
              <p>
                Every industry faces unique challenges in product development,
                system integration, software quality and digital transformation.
                Building reliable technology requires engineering solutions that
                account for industry-specific workflows, technical complexity
                and evolving customer expectations.
              </p>

              <p>
                At Elevro, we combine product engineering expertise, intelligent
                automation, AI-powered quality engineering and cloud
                capabilities to help organisations address these challenges.
              </p>

              <p>
                Our industry-focused approach supports connected devices,
                embedded systems, enterprise applications and cloud platforms,
                helping businesses strengthen product reliability, accelerate
                development and deliver consistent digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. SIX INDUSTRY IMAGE CARDS                                      */}
      {/* ================================================================ */}

      <section
        id="industry-expertise"
        className="soft-section-alt px-4 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industries We Serve"
            title="Explore Our Industry Expertise"
            text="Discover how Elevro applies specialised engineering, automation and quality assurance capabilities to support the technology needs of different industries."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group surface-panel flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-[#d79088]/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#17091e]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#17091e]/70 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#2d1738]/75 text-[#d79088] backdrop-blur-xl">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#17091e]/55 px-3 py-1.5 text-xs text-white/65 backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                      {industry.title}
                    </h3>

                    <p className="mt-4 leading-7 text-cream/58">
                      {industry.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {industry.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] text-cream/48"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#d79088]">
                      Explore {industry.title}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. CHALLENGES                                                    */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industry Challenges"
            title="Solving Complex Engineering Challenges Across Industries"
            text="Modern digital products operate across interconnected applications, devices, infrastructure and data ecosystems."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {challenges.map((item, index) => (
              <Card index={index} key={item.title}>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d79088]/25 bg-[#8b332c]/15 text-xs font-medium text-[#d79088]">
                  0{index + 1}
                </span>

                <h3 className="mt-7 text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-cream/58">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. CROSS-SERVICE CAPABILITIES                                    */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industry-Focused Engineering"
            title="Integrated Engineering Expertise for Every Industry"
            text="Elevro connects intelligent quality engineering, AI, DevOps, cloud infrastructure and digital engineering to support the complete product lifecycle."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {engineeringCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group surface-panel flex gap-5 rounded-[1.7rem] border border-white/10 p-6 shadow-soft transition hover:-translate-y-1 hover:border-[#d79088]/30 md:p-7"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary/25 text-[#d79088]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-lg font-medium text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-cream/55">{item.text}</p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#d79088]">
                      Explore Service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#d79088] transition hover:text-white"
            >
              Explore Our Engineering Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. WHY ELEVRO                                                    */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Elevro?"
            title="Why Businesses Across Industries Choose Elevro"
            text="Domain-specific engineering knowledge, intelligent automation and integrated quality practices for dependable digital products."
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
      {/* 7. APPROACH                                                      */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Industry Engineering Approach"
            title="A Structured Approach to Industry-Specific Engineering"
            text="Our engineering approach aligns technical capabilities with business requirements, industry challenges and product complexity."
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
      {/* 8. CASE STUDIES                                                  */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Case Studies"
            title="Real-World Engineering Applications Across Industries"
            text="Explore how specialised engineering, automation and quality assurance approaches address product challenges across connected devices, automotive platforms and IoT ecosystems."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="surface-panel group overflow-hidden rounded-[2rem] border border-white/10 shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#17091e]/60 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#d79088]">
                    {study.category}
                  </p>

                  <h3 className="mt-4 text-xl font-medium text-white">
                    {study.title}
                  </h3>

                  <p className="mt-4 leading-7 text-cream/56">{study.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/resources/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#d79088] transition hover:text-white"
            >
              Explore All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 9. BENEFITS                                                      */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Business Outcomes"
            title="Driving Better Engineering Outcomes Across Industries"
            text="Elevro helps organisations improve engineering processes, strengthen product reliability and deliver technology solutions aligned with industry-specific business goals."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="surface-panel rounded-[1.7rem] border border-white/10 p-6 shadow-soft md:p-7"
              >
                <span className="text-xs font-medium text-[#d79088]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-lg font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-cream/55">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 10. INDUSTRY INSIGHTS                                            */}
      {/* ================================================================ */}

      <section className="soft-section px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industry Insights"
            title="Industry Insights & Latest Innovations"
            text="Stay ahead of industry trends with expert insights on AI-powered engineering, intelligent quality assurance and digital transformation."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insights.map((article, index) => (
              <Card key={article.slug} index={index}>
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

      {/* ================================================================ */}
      {/* 11. FAQ                                                          */}
      {/* ================================================================ */}

      <section className="soft-section-alt px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions About Our Industry Solutions"
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
      {/* 12. FINAL CTA                                                    */}
      {/* ================================================================ */}

      <section className="soft-section px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#8b332c]/20 p-8 shadow-soft md:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
                Let&apos;s Solve Your Industry&apos;s Engineering Challenges
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-cream/65">
                Every industry has unique technology demands. Elevro brings
                together domain-focused engineering expertise, AI-powered
                automation and continuous quality practices to help you build
                reliable, scalable and high-performing digital products.
              </p>

              <p className="mt-3 max-w-3xl leading-8 text-cream/55">
                Connect with our experts to explore engineering solutions
                tailored to your industry and product requirements.
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
/* HERO                                                                       */
/* ========================================================================== */

function IndustriesHero() {
  return (
    <section className="hero-soft-bg relative overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -right-28 top-0 h-[32rem] w-[32rem] rounded-full bg-secondary/20 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d79088]">
            Industries
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-0.055em] text-white md:text-6xl xl:text-7xl">
            Industry-Specific Product Engineering Solutions
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-white/75">
            Empowering industries with AI-driven engineering, intelligent
            quality assurance and scalable digital solutions.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-cream/55">
            Elevro helps businesses across diverse industries develop, test and
            optimise reliable digital products. From connected devices and
            healthcare platforms to automotive systems, eCommerce applications
            and cloud-native solutions, our industry-focused approach combines
            automation, AI and technical expertise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#industry-expertise"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9d4038]"
            >
              Explore Industries
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

        <IndustryGraphic />
      </div>
    </section>
  );
}

/* ========================================================================== */
/* HERO VISUAL                                                                */
/* ========================================================================== */

function IndustryGraphic() {
  const nodes = [
    {
      icon: Smartphone,
      title: "Consumer",
      className: "left-[2%] top-[10%]",
    },
    {
      icon: HeartPulse,
      title: "MedTech",
      className: "right-[1%] top-[12%]",
    },
    {
      icon: Car,
      title: "Automotive",
      className: "left-[0%] bottom-[12%]",
    },
    {
      icon: House,
      title: "IoT",
      className: "right-[0%] bottom-[10%]",
    },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-[12%] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl" />

      <div className="absolute inset-[27%] rounded-full border border-[#d79088]/20 bg-[#2d1738]/65 shadow-[0_30px_100px_rgba(20,8,26,0.38)]">
        <div className="grid h-full place-items-center text-center">
          <div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-secondary/30 text-[#d79088]">
              <Layers3 className="h-7 w-7" />
            </span>

            <p className="mt-4 text-sm font-medium text-white">Product</p>

            <p className="text-sm text-cream/50">Engineering</p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[14%] h-[72%] w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#d79088]/25 to-transparent" />

      <div className="absolute left-[14%] top-1/2 h-px w-[72%] -translate-y-1/2 bg-linear-to-r from-transparent via-[#d79088]/25 to-transparent" />

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
