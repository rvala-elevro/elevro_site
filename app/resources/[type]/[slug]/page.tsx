// app/resources/[type]/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  ShieldCheck,
} from "lucide-react";

import {
  getResourceDetail,
  resourceDetails,
  type ResourceSection,
  type RichText,
} from "@/lib/resource-details";

type PageProps = {
  params: Promise<{
    type: string;
    slug: string;
  }>;
};

const siteUrl = "https://www.elevro.com";

/* -------------------------------------------------------------------------- */
/* STATIC PARAMS                                                              */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return resourceDetails.map((resource) => ({
    type: resource.type,
    slug: resource.slug,
  }));
}

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { type, slug } = await params;

  const resource = getResourceDetail(type, slug);

  if (!resource) {
    return {
      title: "Resource | Elevro",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/resources/${type}/${slug}`;

  return {
    title: resource.metaTitle,
    description: resource.metaDescription,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      type: "article",
      title: resource.metaTitle,
      description: resource.metaDescription,
      url: `${siteUrl}${canonicalPath}`,
      siteName: "Elevro",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: resource.metaTitle,
      description: resource.metaDescription,
      images: ["/og-image.png"],
    },
  };
}
function ResourceStructuredData({
  resource,
}: {
  resource: {
    title: string;
    excerpt: string;
    slug: string;
    type: string;
    publishedAt: string;
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
}) {
  const articleUrl = `https://www.elevro.com/resources/${resource.type}/${resource.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.excerpt,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    publisher: {
      "@type": "Organization",
      name: "Elevro",
      url: "https://www.elevro.com",
    },
  };

  const faqSchema =
    resource.faqs?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: resource.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  );
}
/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */
function RichContent({ content }: { content: RichText }) {
  if (typeof content === "string") {
    return <>{content}</>;
  }

  return (
    <>
      {content.map((part, index) => {
        if (part.href) {
          return (
            <Link
              key={`${part.text}-${index}`}
              href={part.href}
              className="font-medium text-[#d79088] underline decoration-[#d79088]/30 underline-offset-4 transition hover:text-white hover:decoration-white/40"
            >
              {part.text}
            </Link>
          );
        }

        return <span key={`${part.text}-${index}`}>{part.text}</span>;
      })}
    </>
  );
}
export default async function ResourceDetailPage({ params }: PageProps) {
  const { type, slug } = await params;

  const resource = getResourceDetail(type, slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <ResourceStructuredData resource={resource} />
      <article>
        <ResourceHero resource={resource} />

        <section className="soft-section px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_280px]">
            {/* Article */}
            <div className="min-w-0">
              {resource.sections.map((section, index) => (
                <RenderSection
                  key={`${section.type}-${index}`}
                  section={section}
                  index={index}
                />
              ))}
            </div>

            {/* Sidebar */}
            <ResourceSidebar
              category={resource.category}
              title={resource.title}
              type={resource.type}
            />
          </div>
        </section>
      </article>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function ResourceHero({
  resource,
}: {
  resource: {
    type: string;
    category: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    readTime: string;
    heroImage?: string
  };
}) {
  return (
    <section className="hero-soft-bg relative overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[130px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#6f4b83]/25 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Link
          href={`/resources/${resource.type}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-cream/55 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {formatResourceType(resource.type)}
        </Link>

        <p className="mt-12 text-xs font-medium uppercase tracking-[0.2em] text-[#d79088]">
          {resource.category}
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
          {resource.title}
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-cream/65 md:text-xl">
          {resource.excerpt}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream/45">
          <span>{resource.publishedAt}</span>

          <span aria-hidden="true">•</span>

          <span>{resource.readTime}</span>

          <span aria-hidden="true">•</span>

          <span>Elevro Insight</span>
        </div>
        {resource.heroImage && (
          <div className="surface-panel mt-12 overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-soft md:p-3">
            <div className="relative aspect-[2/1] overflow-hidden rounded-[1.6rem]">
              <Image
                src={resource.heroImage}
                alt={resource.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION RENDERER                                                           */
/* -------------------------------------------------------------------------- */

function RenderSection({
  section,
  index,
}: {
  section: ResourceSection;
  index: number;
}) {
  switch (section.type) {
    case "text":
      return (
        <ArticleSection number={index + 1} title={section.title}>
          <div className="space-y-5">
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                <RichContent content={paragraph} />
              </p>
            ))}
          </div>
        </ArticleSection>
      );

    case "callout":
      return (
        <div className="my-10 overflow-hidden rounded-[2rem] border border-[#d79088]/20 bg-[#8b332c]/12">
          <div className="border-l-4 border-[#d79088] p-7 md:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
              {section.label}
            </p>

            <p className="mt-4 text-lg leading-8 text-white/75">
              <RichContent content={section.text} />
            </p>
          </div>
        </div>
      );

    case "bullets":
      return (
        <ArticleSection number={index + 1} title={section.title}>
          <ul className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-3">
                <CheckCircle2 className="mt-1.5 h-4 w-4 shrink-0 text-[#d79088]" />

                <span>
                  <RichContent content={item} />
                </span>
              </li>
            ))}
          </ul>
        </ArticleSection>
      );

    case "steps":
      return (
        <ArticleSection number={index + 1} title={section.title}>
          <div className="grid gap-4">
            {section.items.map((item, stepIndex) => (
              <div
                key={stepIndex}
                className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 md:p-6"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#8b332c]/30 text-sm font-medium text-[#d79088]">
                  {stepIndex + 1}
                </span>

                <p className="pt-1 text-cream/65">
                  <RichContent content={item} />
                </p>
              </div>
            ))}
          </div>
        </ArticleSection>
      );

    case "status":
      return (
        <ArticleSection number={index + 1} title={section.title}>
          <StatusGrid items={section.items} />
        </ArticleSection>
      );
    case "image":
      return (
        <figure className="my-12">
          <div className="surface-panel overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-soft md:p-3">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[1.6rem] bg-[#17091e]">
              <Image
                src={section.src}
                alt={section.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
              />
            </div>
          </div>

          {section.caption && (
            <figcaption className="mt-4 text-center text-sm italic leading-6 text-cream/45">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/* STANDARD ARTICLE SECTION                                                   */
/* -------------------------------------------------------------------------- */

function ArticleSection({
  number,
  title,
  children,
}: {
  number: number;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/8 py-12 first:border-t-0 first:pt-0">
      {title && (
        <div className="flex gap-5">
          <span className="mt-1 shrink-0 text-sm font-medium text-[#d79088]">
            {String(number).padStart(2, "0")}
          </span>

          <h2 className="text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
            {title}
          </h2>
        </div>
      )}

      <div
        className={
          title
            ? "mt-7 text-base leading-8 text-cream/65 md:pl-10"
            : "text-base leading-8 text-cream/65"
        }
      >
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PASS / REVIEW / STOP                                                       */
/* -------------------------------------------------------------------------- */

function StatusGrid({
  items,
}: {
  items: {
    title: string;
    text: string;
  }[];
}) {
  const icons = [CheckCircle2, CircleAlert, ShieldCheck];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index] ?? CheckCircle2;

        return (
          <div
            key={item.title}
            className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#8b332c]/25 text-[#d79088]">
              <Icon className="h-5 w-5" />
            </span>

            <h3 className="mt-5 text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-cream/55">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SIDEBAR                                                                    */
/* -------------------------------------------------------------------------- */

function ResourceSidebar({
  category,
  title,
  type,
}: {
  category: string;
  title: string;
  type: string;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <div className="surface-panel rounded-[2rem] border border-white/10 p-6 shadow-soft">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
            Elevro Insight
          </p>

          <h3 className="mt-4 text-lg font-medium leading-7 text-white/90">
            {title}
          </h3>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-cream/35">
              Topic
            </p>

            <p className="mt-2 text-sm leading-6 text-cream/60">{category}</p>
          </div>

          <Link
            href={`/resources/${type}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d79088] transition hover:text-white"
          >
            View all {formatResourceType(type)}
          </Link>
        </div>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

function formatResourceType(type: string) {
  if (type === "case-studies") {
    return "Case Studies";
  }

  if (type === "whitepapers") {
    return "Whitepapers";
  }

  return "Blogs";
}
