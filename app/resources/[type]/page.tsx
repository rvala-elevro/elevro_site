import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, SectionTitle } from "@/components/PageBlocks";
import { resourceGroups } from "@/lib/elevro-data";
import Card from "@/components/Card";
import Link from "next/link";
import { resourceDetails } from "@/lib/resource-details";
import { ArrowRight } from "lucide-react";

const labels = {
  blogs: "Blogs",
  whitepapers: "Whitepapers",
  "case-studies": "Case Studies",
} as const;

const resourceSeo = {
  blogs: {
    title: "Engineering Insights & Blogs | Elevro",
    description:
      "Explore Elevro insights on product engineering, quality engineering, AI, embedded systems, DevOps, cloud engineering and intelligent automation.",
  },

  whitepapers: {
    title: "Engineering Whitepapers | Elevro",
    description:
      "Explore Elevro whitepapers covering product engineering, quality engineering, AI, automation, cloud, DevOps and connected products.",
  },

  "case-studies": {
    title: "Engineering Case Studies | Elevro",
    description:
      "Explore Elevro case studies across product engineering, quality automation, embedded systems, IoT, cloud engineering and DevOps.",
  },
} as const;

type ResourceType = keyof typeof resourceGroups;

export function generateStaticParams() {
  return Object.keys(resourceGroups).map((type) => ({
    type,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;

  if (!(type in resourceGroups)) {
    return {};
  }

  const resourceType = type as ResourceType;
  const seo = resourceSeo[resourceType];

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: `/resources/${type}`,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://www.elevro.com/resources/${type}`,
      siteName: "Elevro",
      type: "website",
      images: ["/og-image.png"],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-image.png"],
    },
  };
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

              const detail = resourceDetails.find(
                (resource) =>
                  resource.type === type && resource.title === item.title,
              );

              const content = (
                <article className="flex h-full flex-col">
                  <span className="grid h-16 w-16 place-items-center rounded-3xl bg-secondary/30">
                    <Icon className="h-7 w-7" />
                  </span>

                  <h2 className="mt-8 text-2xl font-medium leading-tight text-white/90">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-cream/65">{item.summary}</p>

                  {detail && (
                    <div className="mt-auto pt-8">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#d79088] transition group-hover:text-white">
                        {type === "blogs"
                          ? "Read Insight"
                          : type === "whitepapers"
                            ? "View Whitepaper"
                            : "View Case Study"}

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  )}
                </article>
              );

              return (
                <Card index={index} key={`${item.title}-${index}`}>
                  {detail ? (
                    <Link
                      href={`/resources/${type}/${detail.slug}`}
                      className="group block h-full"
                      aria-label={`Read ${item.title}`}
                    >
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
