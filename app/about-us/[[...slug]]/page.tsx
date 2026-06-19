import { PageShell, prettifySlug } from "@/components/PageShell";

export default async function AboutPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const title = prettifySlug(slug);
  return (
    <PageShell
      eyebrow="About Us"
      title={title === "Overview" ? "Company Overview" : title}
      description="Use this page to communicate company story, culture, hiring, delivery values and strategic partnerships."
    />
  );
}
