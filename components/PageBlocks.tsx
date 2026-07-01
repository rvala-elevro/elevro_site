// components/PageBlocks.tsx

"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerParent, smoothEase } from "@/lib/animation-variants";

export function PageHero({
  eyebrow,
  title,
  text,
  stats,
}: {
  eyebrow: string;
  title: string;
  text: string;
  stats?: string[][];
}) {
  return (
    <motion.section
      className="hero-soft-bg relative min-h-[76vh] overflow-hidden px-4 py-28 md:px-8 md:py-36"
      initial="hidden"
      animate="visible"
      variants={staggerParent}
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#6f4b83]/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-[#a25858]/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          variants={fadeUp}
          transition={{ duration: 1.1, ease: smoothEase }}
          className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#d79088]"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 1.1, ease: smoothEase }}
          className="max-w-5xl text-[2.7rem] font-medium leading-[1.05] tracking-[-0.04em] text-white/90 md:text-6xl xl:text-7xl"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 1.1, ease: smoothEase }}
          className="mt-7 max-w-3xl text-base font-normal leading-8 text-cream/68 md:text-lg"
        >
          {text}
        </motion.p>

        {stats ? (
          <motion.div
            variants={staggerParent}
            className="mt-10 grid gap-4 md:grid-cols-4"
          >
            {stats.map(([value, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.75, ease: smoothEase }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="surface-panel rounded-3xl border border-white/10 p-5 shadow-soft"
              >
                <p className="text-3xl font-medium text-white/90">{value}</p>
                <p className="mt-2 text-sm font-normal leading-6 text-cream/55">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function SectionTitle({
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
      transition={{ duration: 1.1, ease: smoothEase }}
      className="max-w-3xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#d79088]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-medium tracking-[-0.03em] text-white/90 md:text-5xl">
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

export function FeatureGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="grid gap-5 md:grid-cols-2"
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          // transition={{ duration: 0.8, ease: smoothEase }}
          whileHover={{ y: -8, scale: 1.015 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-soft"
        >
          <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/20 blur-2xl transition group-hover:bg-secondary/35" />

          <div className="relative z-10">
            <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-secondary/30">
              <CheckCircle2 className="h-6 w-6 text-white/90" />
            </span>

            <h3 className="text-2xl font-medium tracking-[-0.02em] text-white/90">
              {item.title}
            </h3>

            <p className="mt-4 text-base font-normal leading-7 text-cream/62">
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function PageCTA() {
  return (
    <section className="soft-section px-4 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 54, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.1, ease: smoothEase }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-secondary p-8 shadow-soft md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-24 left-20 h-80 w-80 rounded-full bg-[#6f4b83]/25 blur-[110px]" />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-white/60"
          >
            Let’s Build
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-medium tracking-[-0.03em] leading-tight text-white md:text-6xl"
          >
            Ready to turn engineering complexity into intelligent automation?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base font-normal leading-8 text-white/75 md:text-lg"
          >
            Discuss your AI, quality, cloud, IoT, or product enablement roadmap
            with Elevro.
          </motion.p>

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
        </motion.div>
      </motion.div>
    </section>
  );
}
