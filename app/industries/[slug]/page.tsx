// app/industries/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2, Layers3 } from "lucide-react";
import { PageCTA, PageHero, SectionTitle } from "@/components/PageBlocks";
import Card from "@/components/Card";
import { industries } from "@/lib/elevro-data";

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  return {
    title: industry ? `${industry.title} | Elevro` : "Industry | Elevro",
    description: industry?.value,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) notFound();

  const Icon = industry.icon;

  return (
    <main>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        text={industry.value}
      />

      <section className="soft-section px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industry Context"
            title="Where Elevro helps."
            text={industry.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_2fr] lg:items-start">
            <div className="rounded-4xl border border-white/10 bg-[#17091e] p-8 shadow-card lg:sticky lg:top-28">
              <span className="grid h-20 w-20 place-items-center rounded-3xl bg-secondary/30">
                <Icon className="h-9 w-9" />
              </span>

              <h2 className="mt-8 text-3xl font-medium">Where Elevro Helps</h2>

              <div className="mt-6 grid gap-3">
                {industry.whereElevroHelps.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-cream/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {industry.capabilities.map((item, index) => (
                <Card index={index} key={item}>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-secondary text-secondary">
                    ✓
                  </span>

                  <h3 className="mt-10 text-2xl font-medium">{item}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="soft-section-alt px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Relevant Experience"
              title="Portfolio reflection."
              text="A compact view of Elevro’s related experience in this industry."
            />
          </div>

          <div className="surface-panel rounded-4xl border border-white/10 p-8 shadow-soft md:p-10">
            <Layers3 className="h-9 w-9 text-[#d79088]" />

            <h3 className="mt-8 text-3xl font-medium tracking-[-0.03em] text-white/90">
              Experience Summary
            </h3>

            <p className="mt-6 text-lg leading-9 text-cream/68">
              {industry.relevantExperience}
            </p>
          </div>
        </div>
      </section>

      <section className="soft-section px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Recommended Structure"
            title="How Elevro approaches this industry."
            text="Each engagement is structured around the industry risk, workflow complexity, automation needs, and product release goals."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Understand product risk",
              "Map critical workflows",
              "Build automation coverage",
              "Report release confidence",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <CheckCircle2 className="mb-6 h-6 w-6 text-[#d79088]" />
                <p className="text-lg font-medium text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
