// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import {
  FeatureGrid,
  PageCTA,
  PageHero,
  SectionTitle,
} from "@/components/PageBlocks";
import { services } from "@/lib/elevro-data";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | Elevro` : "Service | Elevro",
    description: service?.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main>
      <PageHero eyebrow="Service" title={service.title} text={service.hero} />

      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capabilities"
            title="What Elevro delivers in this service."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_2fr] lg:items-start">
            {/* Delivery Stack Card */}
            <div className="rounded-4xl border border-white/10 bg-[#17091e] p-8 shadow-card lg:sticky lg:top-28">
              <span className="grid h-20 w-20 place-items-center rounded-3xl bg-secondary/30">
                <Icon className="h-9 w-9" />
              </span>

              <h2 className="mt-8 text-3xl font-black">Delivery Stack</h2>

              <div className="mt-6 grid gap-3">
                {service.stack.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-cream/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Capability Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {service.capabilities.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[300px] flex-col rounded-4xl border border-white/10 bg-white/5 p-8 shadow-soft"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-secondary text-secondary">
                    ✓
                  </span>

                  <h3 className="mt-10 text-2xl font-black">{item.title}</h3>

                  <p className="mt-5 leading-8 text-cream/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#180B1F] px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Outcomes"
              title="Business and engineering impact."
            />

            <div className="mt-10 grid gap-4">
              {service.outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-primary/70 p-5 text-lg font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Technologies"
              title="Tools and platforms used."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5.5 px-5 py-3 text-sm font-bold text-cream/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </main>
  );
}
