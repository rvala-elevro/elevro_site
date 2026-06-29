// components/AboutOverviewContent.tsx

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Cpu,
  HeartHandshake,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTubeDiagonal,
  Users,
} from "lucide-react";
import Card from "./Card";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const services = [
  {
    title: "Intelligent Quality Engineering",
    icon: TestTubeDiagonal,
    text: "AI-assisted testing, automation frameworks, QAOps, observability, release dashboards, test strategy, and full product validation.",
  },
  {
    title: "Product Enablement",
    icon: Rocket,
    text: "CI/CD integration, release engineering, product lifecycle automation, workflow optimization, and engineering productivity improvement.",
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    text: "AI systems that classify, predict, recommend, automate decisions, and improve product intelligence with measurable business value.",
  },
  {
    title: "Cloud Engineering and CloudOps",
    icon: CloudCog,
    text: "Secure cloud foundations, DevOps pipelines, infrastructure automation, monitoring, platform reliability, and cost-aware operations.",
  },
  {
    title: "Digital Engineering",
    icon: Cpu,
    text: "Resilient web, mobile, backend, API, data, and cloud-native platforms built to scale across users, teams, and markets.",
  },
];

const outcomes = [
  "Faster release cycles",
  "Higher test coverage",
  "Reduced manual regression effort",
  "Better defect detection",
  "Scalable automation architecture",
  "Reliable cloud and DevOps operations",
  "Clear release visibility",
  "Long-term engineering confidence",
];

const values = [
  {
    title: "Beyond Services",
    text: "We do not want to be another vendor. We want to be a product engineering partner who understands the problem, anticipates the risk, and contributes to the outcome.",
  },
  {
    title: "Customer Delight",
    text: "Delivery is complete when the customer feels confident, informed, and supported.",
  },
  {
    title: "Employee Growth",
    text: "Elevro is built on continuous learning, ownership, curiosity, technical depth, and real-world problem solving.",
  },
  {
    title: "Confident Delivery",
    text: "We value precision, discipline, and quality so every customer can release with clarity instead of uncertainty.",
  },
  {
    title: "Enriching Environment",
    text: "We want to build a workplace with purpose, respect, and personal growth.",
  },
  {
    title: "Delivery Excellence",
    text: "Excellence is a habit built through learning, feedback, improvement, and accountability.",
  },
  {
    title: "Graceful Challenges",
    text: "We see complex product problems as opportunities to grow and engineer better systems.",
  },
];

export default function AboutOverviewContent() {
  return (
    <main className="min-h-screen overflow-hidden text-cream">
      <AboutHero />
      <StorySection />
      <WhyStartedSection />
      <WhatWeDoSection />
      <ApproachSection />
      <ValuesSection />
      <WhoWeAreSection />
      <PromiseSection />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="hero-soft-bg relative min-h-[92vh] overflow-hidden px-4 py-28 md:px-8 md:py-36">
      <div className="pointer-events-none absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#6f4b83]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-120 w-120 rounded-full bg-[#a25858]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#d79088]"
          >
            About Elevro
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-[2.7rem] font-medium leading-tight tracking-[-0.04em] text-white/90 md:text-6xl "
          >
            Engineering confidence for products that cannot afford uncertainty.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-3xl text-base font-normal leading-8 text-cream/68 md:text-lg"
          >
            Elevro was built from a simple belief: great products deserve more
            than testing at the end. They deserve quality, automation,
            intelligence, and operational confidence from the very beginning.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9d4038]"
            >
              Talk to Elevro <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            type: "spring",
            stiffness: 90,
            damping: 14,
          }}
          className="surface-panel rounded-4xl border border-white/10 p-6 shadow-soft md:p-8"
        >
          <div className="grid gap-4">
            {[
              ["AI-led", "Product engineering and quality systems"],
              ["Automation-first", "Scalable validation from day one"],
              ["Cloud-ready", "DevOps, CloudOps and release confidence"],
              ["Product-focused", "Built for teams that need reliability"],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xl font-medium text-white/90">{title}</p>
                <p className="mt-2 text-sm leading-6 text-cream/60">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="soft-section px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <ScrollTitle
          eyebrow="Company Story"
          title="We help teams move fast without losing reliability."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="space-y-6 text-base leading-8 text-cream/68 md:text-lg"
        >
          <motion.p variants={fadeUp}>
            We are an AI-led product engineering and quality engineering company
            helping teams build, validate, automate, release, and scale modern
            digital products with confidence.
          </motion.p>

          <motion.p variants={fadeUp}>
            Our work brings together quality architects, DevOps engineers, cloud
            specialists, automation experts, and AI engineers to solve one of
            the most important challenges in product delivery: how to move fast
            without losing reliability.
          </motion.p>

          <motion.p variants={fadeUp}>
            Elevro’s foundation comes from years of hands-on experience in
            complex product environments: embedded systems, IoT platforms,
            mobile applications, cloud systems, enterprise web products,
            firmware validation, CI/CD pipelines, hardware-in-the-loop
            automation, and end-to-end product quality.
          </motion.p>

          <motion.p variants={fadeUp}>
            We have seen how product teams struggle when quality is treated as a
            phase, automation is added too late, or releases depend on manual
            confidence. Elevro exists to change that.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function WhyStartedSection() {
  return (
    <section className="soft-section-alt relative overflow-hidden px-4 py-24 md:px-8">
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="surface-panel rounded-4xl border border-white/10 p-8 shadow-soft md:p-12"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#d79088]"
          >
            Why We Started Elevro
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-medium tracking-[-0.03em] text-white/90 md:text-5xl"
          >
            Elevro is personal.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-8 text-cream/68 md:text-lg"
          >
            It comes from the experience of working deep inside real engineering
            programs where every release mattered, every defect had a cost, and
            every delay affected customers, teams, and business outcomes.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-8 text-cream/68 md:text-lg"
          >
            After years of designing automation frameworks, building CI/CD
            pipelines, validating IoT and embedded products, supporting
            pre-sales PoCs, leading engineering teams, and working directly with
            customers on go/no-go decisions, one thing became clear: companies
            do not just need more testers or more tools.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-8 text-cream/68 md:text-lg"
          >
            They need a partner who understands product risk, engineering
            pressure, delivery timelines, and the responsibility of shipping
            with confidence.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center rounded-4xl border border-white/10 bg-white/5 p-8 shadow-soft md:p-10"
        >
          <Sparkles className="h-10 w-10 text-[#d79088]" />

          <h3 className="mt-8 text-3xl font-medium text-white/90">
            We do not just write scripts. We design systems.
          </h3>

          <div className="mt-8 space-y-4">
            {[
              "We do not just report defects. We help teams prevent them.",
              "We do not just automate tasks. We create delivery confidence.",
              "We bring structure, intelligence, and ownership into product quality.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl bg-white/5 p-4 text-cream/70"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d79088]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section className="soft-section px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollTitle
          eyebrow="What We Do"
          title="Five connected areas for modern product teams."
          text="Elevro helps product and technology teams build, validate, automate, release, and scale with confidence."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-6 shadow-soft"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/20 blur-2xl transition group-hover:bg-secondary/35" />

                <div className="relative">
                  <span className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-secondary/30 text-white">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="text-lg font-medium leading-tight text-white/90">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-cream/62">
                    {service.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="soft-section-alt px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollTitle
          eyebrow="Our Approach"
          title="Quality should be designed, automated, measured, and continuously improved."
          text="We start with business workflows, product risks, release bottlenecks, and engineering constraints. Then we design automation frameworks, CI/CD pipelines, test strategies, AI-assisted validation systems, and dashboards."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {outcomes.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft"
            >
              <CheckCircle2 className="mb-5 h-6 w-6 text-[#d79088]" />
              <p className="font-medium text-white/85">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="soft-section px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollTitle
          eyebrow="Our Values"
          title="The principles behind how we work."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {values.map((value, index) => {
            return index === 0 ? (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`rounded-4xl border border-white/10 p-7 shadow-soft ${
                  index === 0
                    ? "bg-secondary/30 md:col-span-2 xl:col-span-2"
                    : "bg-white/5"
                }`}
              >
                <HeartHandshake className="mb-8 h-7 w-7 text-[#d79088]" />

                <h3 className="text-2xl font-medium text-white/90">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-cream/62">{value.text}</p>
              </motion.div>
            ) : (
              <Card index={index} key={index}>
                <HeartHandshake className="mb-8 h-7 w-7 text-[#d79088]" />

                <h3 className="text-2xl font-medium text-white/90">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-cream/62">{value.text}</p>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="soft-section-alt px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="surface-panel rounded-4xl border border-white/10 p-8 shadow-soft md:p-12"
        >
          <Users className="h-10 w-10 text-[#d79088]" />

          <h2 className="mt-8 text-3xl font-medium tracking-[-0.03em] text-white/90 md:text-5xl">
            We are engineers first.
          </h2>

          <p className="mt-6 text-base leading-8 text-cream/68 md:text-lg">
            Our team understands automation frameworks, product validation,
            CI/CD, embedded systems, cloud platforms, mobile applications, AI
            testing, API validation, performance, observability, and release
            operations.
          </p>

          <p className="mt-6 text-base leading-8 text-cream/68 md:text-lg">
            But more importantly, we understand the pressure behind delivery.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5"
        >
          {[
            {
              icon: ShieldCheck,
              title: "Quality Architects",
              text: "Design scalable validation systems and release confidence frameworks.",
            },
            {
              icon: CloudCog,
              title: "DevOps and Cloud Engineers",
              text: "Build reliable pipelines, cloud foundations, and operational visibility.",
            },
            {
              icon: Layers3,
              title: "Product Enablers",
              text: "Modernize how teams build, release, automate, and scale products.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-4xl border border-white/10 bg-white/5 p-7 shadow-soft"
              >
                <Icon className="h-7 w-7 text-[#d79088]" />
                <h3 className="mt-5 text-2xl font-medium text-white/90">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-cream/62">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="soft-section px-4 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 54, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-secondary p-8 shadow-soft md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />
        <div className="relative z-10  max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-white/60">
            Our Promise
          </p>

          <h2 className="text-3xl font-medium tracking-[-0.03em] leading-tight text-white md:text-6xl">
            We help you build reliable products faster.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/75 md:text-lg">
            Not by adding noise. Not by adding unnecessary process. But by
            creating intelligent systems that validate, automate, monitor, and
            improve your product delivery lifecycle.
          </p>

          <p className="mt-6 text-xl font-medium text-white/90">
            Elevro exists for teams that want more than delivery. We help teams
            deliver with confidence.
          </p>

          <motion.div variants={fadeUp} className="inline-block">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ScrollTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#d79088]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] text-white/90 md:text-5xl">
        {title}
      </h2>

      {text ? (
        <p className="mt-5 text-base font-normal leading-8 text-cream/62 md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}
