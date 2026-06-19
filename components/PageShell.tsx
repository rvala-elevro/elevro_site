import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export function PageShell({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) {
  return (
    <main className="min-h-screen bg-primary text-cream">
      <section className="relative overflow-hidden px-4 py-24 md:px-8">
        <div className="absolute inset-0 bg-radialNoise opacity-80" />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-cream/70 transition hover:bg-white/10 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-8 shadow-card backdrop-blur-xl md:p-14">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/25 px-4 py-2 text-sm font-bold text-white">
              <Sparkles className="h-4 w-4" /> {eyebrow}
            </span>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/70">{description}</p>
            <Link href="/contact-us" className="mt-9 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 font-black text-white shadow-glow transition hover:scale-105">
              Talk to Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function prettifySlug(slug?: string | string[]) {
  if (!slug) return "Overview";
  const value = Array.isArray(slug) ? slug.join(" ") : slug;
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
