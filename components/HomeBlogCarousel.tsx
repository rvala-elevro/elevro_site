"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";

export type HomepageBlog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

const SCROLL_SPEED = 48; // CSS pixels per second

export default function HomeBlogCarousel({
  blogs,
  enabled = true,
}: {
  blogs: HomepageBlog[];
  enabled?: boolean;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const duplicateRef = useRef<HTMLDivElement>(null);
  const resumeAfterRef = useRef(0);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [touching, setTouching] = useState(false);
  const isInView = useInView(viewportRef, { amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();
  const count = blogs.length;

  useEffect(() => {
    const viewport = viewportRef.current;
    const first = firstCardRef.current;
    const duplicate = duplicateRef.current;
    if (
      !viewport ||
      !first ||
      !duplicate ||
      count < 2 ||
      !enabled ||
      !isInView ||
      hovered ||
      focusWithin ||
      touching ||
      prefersReducedMotion
    ) {
      return;
    }

    let frame = 0;
    let previousTime: number | null = null;
    let position = viewport.scrollLeft;
    let lastScroll = viewport.scrollLeft;

    // The duplicate sequence is exactly one complete cycle away, including
    // the gap between the last card and the first card in the next cycle.
    // Re-measure on resize so the loop remains seamless at every breakpoint.
    let loopWidth = 0;
    const measureLoop = () => {
      loopWidth = duplicate.getClientRects().length
        ? duplicate.offsetLeft - first.offsetLeft
        : 0;
      position = viewport.scrollLeft;
      lastScroll = position;
      previousTime = null;
    };
    measureLoop();
    const observer = new ResizeObserver(measureLoop);
    observer.observe(viewport);
    observer.observe(first);
    observer.observe(duplicate);

    const tick = (now: number) => {
      const elapsed = previousTime === null ? 0 : Math.min(now - previousTime, 50);
      previousTime = now;

      if (document.hidden || now < resumeAfterRef.current || loopWidth <= 0) {
        position = viewport.scrollLeft;
        lastScroll = position;
      } else {
        // Preserve fractional progress and recognize native touch scrolling.
        if (viewport.scrollLeft !== lastScroll) {
          position = viewport.scrollLeft;
        }
        position = (position + (elapsed * SCROLL_SPEED) / 1000) % loopWidth;
        viewport.scrollLeft = position;
        lastScroll = viewport.scrollLeft;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [count, enabled, isInView, hovered, focusWithin, touching, prefersReducedMotion]);

  if (!count) return null;

  // On smaller catalogs, only duplicate where cards overflow the viewport.
  // All original links remain keyboard accessible; duplicate links support
  // pointer/touch navigation but are excluded from sequential keyboard focus.
  const duplicateVisibility =
    count === 1
      ? "hidden"
      : count === 2
        ? "flex md:hidden"
        : count === 3
          ? "flex lg:hidden"
          : "flex";

  const cardWidth =
    "w-full shrink-0 md:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Engineering blog articles"
      className="mt-12"
    >
      <div
        ref={viewportRef}
        className="overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocusWithin(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setFocusWithin(false);
          }
        }}
        onTouchStart={() => setTouching(true)}
        onTouchEnd={() => {
          resumeAfterRef.current = performance.now() + 900;
          setTouching(false);
        }}
        onTouchCancel={() => setTouching(false)}
      >
        <div className="relative flex w-full items-stretch gap-6">
          {blogs.map((blog, index) => (
            <div
              ref={index === 0 ? firstCardRef : undefined}
              key={blog.slug}
              className={`${cardWidth} flex`}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
          {count > 1 &&
            blogs.map((blog, index) => (
              <div
                ref={index === 0 ? duplicateRef : undefined}
                key={`duplicate-${blog.slug}`}
                className={`${cardWidth} ${duplicateVisibility} motion-reduce:hidden`}
                aria-hidden="true"
              >
                <BlogCard blog={blog} duplicate />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({
  blog,
  duplicate = false,
}: {
  blog: HomepageBlog;
  duplicate?: boolean;
}) {
  return (
    <Link
      href={`/resources/blogs/${blog.slug}`}
      tabIndex={duplicate ? -1 : undefined}
      aria-label={`Read more: ${blog.title}`}
      className="group relative flex min-h-[18rem] w-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5.5 p-6 shadow-soft transition duration-300 hover:border-white/25 hover:bg-white/[0.075] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#d79088] motion-reduce:transition-none"
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
        <span className="mt-auto pt-6 text-sm font-semibold text-[#d79088] transition group-hover:text-white">
          Read More
        </span>
      </div>
    </Link>
  );
}
