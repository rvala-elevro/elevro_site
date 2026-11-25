"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";

export type HomepageBlog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

const ROTATION_INTERVAL_MS = 6000;

export default function HomeBlogCarousel({
  blogs,
  enabled = true,
}: {
  blogs: HomepageBlog[];
  enabled?: boolean;
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, { amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();
  const count = blogs.length;

  useEffect(() => {
    if (
      count < 2 ||
      !enabled ||
      !isInView ||
      hovered ||
      focusWithin ||
      prefersReducedMotion
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setDirection(1);
      setStartIndex((current) => (current + 1) % count);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [
    count,
    enabled,
    isInView,
    hovered,
    focusWithin,
    prefersReducedMotion,
  ]);

  if (!count) return null;

  const activeIndex = startIndex % count;
  const orderedBlogs = blogs.map(
    (_, offset) => blogs[(activeIndex + offset) % count],
  );

  function move(step: number) {
    setDirection(step);
    setStartIndex((current) => (current + step + count) % count);
  }

  function select(index: number) {
    setDirection(index < activeIndex ? -1 : 1);
    setStartIndex(index);
  }

  const controlClass =
    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream transition hover:border-white/35 hover:bg-secondary/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d79088]";

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Engineering blog articles"
      className="mt-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocusWithin(false);
        }
      }}
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/resources/blogs"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-[#d79088]/60 hover:bg-secondary/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d79088]"
        >
          View all blogs <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        {count > 1 && (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className={controlClass}
              aria-label="Previous blog"
              onClick={() => move(-1)}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={controlClass}
              aria-label="Next blog"
              onClick={() => move(1)}
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <motion.div
        key={activeIndex}
        initial={
          prefersReducedMotion || activeIndex === 0
            ? false
            : { opacity: 0.65, x: direction * 14 }
        }
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: "easeOut" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {orderedBlogs.map((blog, offset) => {
          // One card on phones, two on tablets, three on desktop.
          // Keep the catalog in the rendered markup without making offscreen
          // articles focusable or visible to assistive technology.
          const visibility =
            offset === 0
              ? "flex"
              : offset === 1
                ? "hidden md:flex"
                : offset === 2
                  ? "hidden lg:flex"
                  : "hidden";

          return (
            <article
              key={blog.slug}
              className={`${visibility} group relative min-h-[18rem] flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5.5 p-6 shadow-soft transition duration-300 hover:border-white/25 hover:bg-white/[0.075] motion-reduce:transition-none`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-secondary/25 blur-2xl transition group-hover:bg-secondary/45"
              />
              <div className="relative flex flex-1 flex-col items-start">
                <div className="flex w-full flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/25 px-4 py-2 text-sm font-bold text-white">
                    <FileText className="h-4 w-4" aria-hidden="true" /> Blog
                  </span>
                  <span className="text-xs text-cream/55">{blog.readTime}</span>
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-[#d79088]">
                  {blog.category}
                </p>
                <h3 className="mt-2 text-xl font-medium leading-tight text-white/90 xl:text-2xl">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cream/65">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/resources/blogs/${blog.slug}`}
                  aria-label={`Read more: ${blog.title}`}
                  className="mt-auto inline-flex items-center gap-2 rounded-sm pt-6 text-sm font-semibold text-[#d79088] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d79088]"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </motion.div>

      {count > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {blogs.map((blog, index) => (
              <button
                key={blog.slug}
                type="button"
                aria-label={`Show ${blog.title} first`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => select(index)}
                className="flex h-9 min-w-9 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d79088]"
              >
                <span
                  aria-hidden="true"
                  className={`h-2.5 rounded-full transition-all motion-reduce:transition-none ${index === activeIndex ? "w-7 bg-[#d79088]" : "w-2.5 bg-white/30 hover:bg-white/60"}`}
                />
              </button>
            ))}
          </div>
          <span
            className="text-xs tabular-nums text-cream/50"
            aria-live={focusWithin ? "polite" : "off"}
            aria-label={`Starting blog ${activeIndex + 1} of ${count}`}
          >
            {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
