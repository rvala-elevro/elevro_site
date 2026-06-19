import { PageShell, prettifySlug } from "@/components/PageShell";

export default async function ServicePage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const title = prettifySlug(slug);
  return (
    <PageShell
      eyebrow="Services"
      title={title === "Overview" ? "Services" : title}
      description="This route is ready for a dedicated service page. Add detailed capabilities, process, technology stack, case studies and a conversion CTA here."
    />
  );
}
