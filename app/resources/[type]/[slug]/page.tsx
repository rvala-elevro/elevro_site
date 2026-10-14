// app/resources/[type]/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  ShieldCheck,
  Power,
  Wifi,
  Radio,
  Cpu,
  RotateCcw,
  GitBranch,
  Play,
  Database,
  FileCheck2,
  Rocket,
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
    keywords: resource.keywords,
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

  const faqSchema = resource.faqs?.length
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
function TalkToElevro() {
  return (
    <section className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#8b332c]/20 p-7 shadow-soft md:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-[90px]" />

      <div className="relative z-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
          Talk to Elevro
        </p>

        <h2 className="mt-4 max-w-2xl text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
          Turn engineering complexity into a clearer path to release.
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-cream/65">
          Have a product quality, automation, AI, embedded, cloud or release
          engineering challenge? Talk to Elevro about how we can help.
        </p>

        <Link
          href="/contact-us"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#9d4038]"
        >
          Talk to Elevro
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
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

              {resource.type === "blogs" && <TalkToElevro />}
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
    heroImage?: string;
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

function RepeatableLabDiagram() {
  const controls = [
    {
      icon: Power,
      title: "Power + I/O",
      text: "Cycle power, drive inputs and reset devices.",
    },
    {
      icon: Wifi,
      title: "Network Control",
      text: "Control AP loss, signal conditions and reconnects.",
    },
    {
      icon: Radio,
      title: "Protocol Tools",
      text: "Capture BLE, Wi-Fi, UART, CAN and bus evidence.",
    },
  ];

  const failures = [
    "Power cycle",
    "Network loss",
    "Device restart",
    "Delayed response",
    "Packet loss",
    "Bus errors",
  ];

  return (
    <figure className="my-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-soft md:p-8">
        {/* soft Elevro glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 left-16 h-72 w-72 rounded-full bg-[#6f4b83]/15 blur-[100px]" />

        <div className="relative z-10">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
              Controlled Validation Lab
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
              Make faults repeatable in the lab
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-cream/55">
              Control network, power and peripheral conditions while preserving
              evidence from every test run.
            </p>
          </div>

          {/* top controls */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {controls.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-white/10 bg-[#2d1738]/65 p-5 backdrop-blur-xl"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#8b332c]/25 text-[#d79088]">
                  <Icon className="h-5 w-5" />
                </span>

                <h4 className="mt-4 font-medium text-white/90">{title}</h4>

                <p className="mt-2 text-sm leading-6 text-cream/50">{text}</p>
              </div>
            ))}
          </div>

          {/* DUT */}
          <div className="relative my-8">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-[#d79088]/0 via-[#d79088]/30 to-[#d79088]/0 md:block" />

            <div className="relative mx-auto max-w-md rounded-[2rem] border border-[#d79088]/25 bg-linear-to-br from-[#3d234a]/90 to-[#24122d]/90 p-7 text-center shadow-[0_20px_70px_rgba(20,8,26,0.35)]">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[#d79088]">
                <Cpu className="h-6 w-6" />
              </span>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.17em] text-[#d79088]">
                Device Under Test
              </p>

              <h4 className="mt-2 text-xl font-medium text-white">
                Connected Product
              </h4>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["BLE", "Wi-Fi", "UART", "I2C", "SPI", "CAN", "Modbus"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cream/55"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* automation / evidence */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <Play className="h-5 w-5 text-[#d79088]" />

                <h4 className="font-medium text-white/90">Test Automation</h4>
              </div>

              <div className="mt-4 space-y-3 text-sm text-cream/55">
                {[
                  "Initialize lab devices",
                  "Execute scenarios",
                  "Inject controlled faults",
                  "Capture traces and logs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d79088]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-[#d79088]" />

                <h4 className="font-medium text-white/90">Evidence</h4>
              </div>

              <div className="mt-4 space-y-3 text-sm text-cream/55">
                {[
                  "Protocol traces",
                  "Device logs",
                  "Build + configuration",
                  "Final product state",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d79088]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* fault injection */}
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#17091e]/55 p-5">
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-[#d79088]" />

              <p className="text-sm font-medium text-white/85">
                Fault Injection Scenarios
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {failures.map((failure) => (
                <span
                  key={failure}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs text-cream/55"
                >
                  {failure}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-sm italic leading-6 text-cream/40">
        Figure 6. Controlled network, power and I/O conditions make failures
        reproducible.
      </figcaption>
    </figure>
  );
}
function ReleaseDecisionDiagram() {
  const steps = [
    {
      number: "01",
      icon: GitBranch,
      title: "Code Change",
      text: "Identify affected product behaviour.",
    },
    {
      number: "02",
      icon: FileCheck2,
      title: "Select Tests",
      text: "Choose protocol and product-level validation.",
    },
    {
      number: "03",
      icon: Play,
      title: "Run in Lab",
      text: "Execute on devices, simulators and controlled faults.",
    },
    {
      number: "04",
      icon: Database,
      title: "Collect Proof",
      text: "Preserve traces, logs, results and configuration.",
    },
    {
      number: "05",
      icon: ShieldCheck,
      title: "Release Gate",
      text: "Pass, review or stop based on evidence.",
    },
  ];

  return (
    <figure className="my-14">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-soft md:p-8">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#6f4b83]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-secondary/15 blur-[90px]" />

        <div className="relative z-10">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d79088]">
              Evidence to Release
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
              Connect protocol evidence to release decisions
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-cream/55">
              Every selected protocol and product test contributes traceable
              evidence to the final release decision.
            </p>
          </div>

          {/* desktop flow */}
          <div className="mt-9 hidden items-stretch gap-3 lg:grid lg:grid-cols-5">
            {steps.map(({ number, icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="relative rounded-[1.6rem] border border-white/10 bg-[#2d1738]/60 p-5 backdrop-blur-xl"
              >
                {index !== steps.length - 1 && (
                  <div className="absolute -right-[14px] top-1/2 z-10 -translate-y-1/2 text-[#d79088]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.14em] text-[#d79088]">
                    {number}
                  </span>

                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#8b332c]/25 text-[#d79088]">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <h4 className="mt-6 font-medium text-white/90">{title}</h4>

                <p className="mt-2 text-sm leading-6 text-cream/50">{text}</p>
              </div>
            ))}
          </div>

          {/* mobile / tablet */}
          <div className="mt-8 grid gap-3 lg:hidden">
            {steps.map(({ number, icon: Icon, title, text }, index) => (
              <div key={title}>
                <div className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-[#2d1738]/60 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#8b332c]/25 text-[#d79088]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-[11px] font-medium tracking-[0.14em] text-[#d79088]">
                      {number}
                    </p>

                    <h4 className="mt-1 font-medium text-white/90">{title}</h4>

                    <p className="mt-1 text-sm leading-6 text-cream/50">
                      {text}
                    </p>
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="flex h-7 items-center justify-center">
                    <ArrowRight className="h-4 w-4 rotate-90 text-[#d79088]/60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Gate status */}
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.3rem] border border-emerald-400/15 bg-emerald-400/[0.06] p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />

                <span className="text-sm font-medium text-white/80">Pass</span>
              </div>

              <p className="mt-2 text-xs leading-5 text-cream/45">
                Evidence meets release policy.
              </p>
            </div>

            <div className="rounded-[1.3rem] border border-[#d79088]/20 bg-[#d79088]/[0.06] p-4">
              <div className="flex items-center gap-3">
                <CircleAlert className="h-4 w-4 text-[#d79088]" />

                <span className="text-sm font-medium text-white/80">
                  Review
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-cream/45">
                Risk or missing evidence needs attention.
              </p>
            </div>

            <div className="rounded-[1.3rem] border border-red-400/15 bg-red-400/[0.05] p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-red-300" />

                <span className="text-sm font-medium text-white/80">Stop</span>
              </div>

              <p className="mt-2 text-xs leading-5 text-cream/45">
                Critical release condition failed.
              </p>
            </div>
          </div>

          {/* Final release */}
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[1.6rem] border border-[#d79088]/20 bg-linear-to-r from-[#8b332c]/20 via-white/[0.045] to-[#6f4b83]/15 p-5 sm:flex-row sm:items-center md:p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#8b332c]/30 text-[#d79088]">
                <Rocket className="h-5 w-5" />
              </span>

              <div>
                <p className="font-medium text-white/90">
                  Release-ready evidence
                </p>

                <p className="mt-1 text-sm text-cream/50">
                  Traceable build, known risk and auditable decision.
                </p>
              </div>
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-[#d79088]">
              Release confidence
            </span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-center text-sm italic leading-6 text-cream/40">
        Figure 7. Selected protocol and product tests feed evidence into the
        release decision.
      </figcaption>
    </figure>
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
    case "faq":
      return (
        <ArticleSection number={index + 1} title={section.title}>
          <div className="space-y-3">
            {section.items.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-medium text-white/85 md:px-6">
                  <span>{faq.question}</span>

                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-[#d79088] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/8 px-5 py-5 text-sm leading-7 text-cream/60 md:px-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </ArticleSection>
      );
    case "repeatable-lab":
      return <RepeatableLabDiagram />;

    case "release-decision":
      return <ReleaseDecisionDiagram />;
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
  title?: RichText;
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
            <RichContent content={title} />
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
