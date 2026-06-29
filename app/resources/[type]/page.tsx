// app/resources/[type]/page.tsx

import { notFound } from "next/navigation";
import { PageHero, SectionTitle } from "@/components/PageBlocks";
import { resourceGroups } from "@/lib/elevro-data";
import Card from "@/components/Card";

const labels = {
  blogs: "Blogs",
  whitepapers: "Whitepapers",
  "case-studies": "Case Studies",
};

type ResourceType = keyof typeof resourceGroups;

export function generateStaticParams() {
  return Object.keys(resourceGroups).map((type) => ({
    type,
  }));
}

export default async function ResourceTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const items = resourceGroups[type as ResourceType];

  if (!items) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title={labels[type as ResourceType]}
        text="Explore Elevro’s thinking and delivery experience across AI, quality engineering, CloudOps, DevOps, connected products, IoT, protocols and automation."
      />

      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={labels[type as ResourceType]}
            title="Curated technical resources."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <Card index={index} key={index}>
                  <article>
                    <span className="grid h-16 w-16 place-items-center rounded-3xl bg-secondary/30">
                      <Icon className="h-7 w-7" />
                    </span>

                    <h2 className="mt-8 text-2xl font-medium  leading-tight">
                      {item.title}
                    </h2>

                    <p className="mt-4 leading-7 text-cream/65">
                      {item.summary}
                    </p>
                  </article>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
