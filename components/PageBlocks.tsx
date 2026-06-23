// components/PageBlocks.tsx

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
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
    <section className="noise relative overflow-hidden px-4 pb-20 pt-40 md:px-8">
      <div className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-secondary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-130 w-130 rounded-full bg-white/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-secondary">
          {eyebrow}
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          {title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-cream/68 md:text-xl">
          {text}
        </p>

        {stats ? (
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/5.5 p-5 shadow-card"
              >
                <p className="text-3xl font-black">{value}</p>
                <p className="mt-2 text-sm text-cream/[0.55]">{label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
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
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-secondary">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight md:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-lg leading-8 text-cream/62">{text}</p>
      ) : null}
    </div>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-4xl border border-white/10 bg-white/5.5 p-6 shadow-card"
        >
          <CheckCircle2 className="mb-6 h-7 w-7 text-secondary" />
          <h3 className="text-2xl font-black">{item.title}</h3>
          <p className="mt-4 leading-7 text-cream/62">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function PageCTA() {
  return (
    <section className="px-4 pb-24 md:px-8">
      <div className="noise relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-secondary p-8 shadow-glow md:p-14">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 font-bold uppercase tracking-[0.32em] text-white/65">
            Let’s Build
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Ready to turn engineering complexity into intelligent automation?
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Discuss your AI, quality, cloud, IoT, or product enablement roadmap
            with Elevro.
          </p>

          <motion.div
            className="mt-8 inline-block"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact-us" passHref legacyBehavior>
              <motion.a
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-linear-to-r from-white via-cream to-white px-8 py-4.5 font-black text-[#8b332c] shadow-xl backdrop-blur-sm"
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
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
