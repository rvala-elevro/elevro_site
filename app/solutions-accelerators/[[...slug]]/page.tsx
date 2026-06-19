import { PageShell, prettifySlug } from "@/components/PageShell";

export default async function SolutionsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const title = prettifySlug(slug);
  return (
    <PageShell
      eyebrow="Solutions & Accelerators"
      title={title === "Overview" ? "Solutions & Accelerators" : title}
      description="This page can explain the accelerator problem, target users, implementation workflow, screenshots, ROI metrics and deployment model."
    />
  );
}
