import { PageShell, prettifySlug } from "@/components/PageShell";

export default async function ResourcesPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const title = prettifySlug(slug);
  return (
    <PageShell
      eyebrow="Resources"
      title={title === "Overview" ? "Resources" : title}
      description="Use this route for blogs, whitepapers, case studies and long-form thought leadership around AI, automation, cloud and quality engineering."
    />
  );
}
