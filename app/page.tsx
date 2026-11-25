import HomePage from "./home-client";
import { resourceGroups } from "@/lib/elevro-data";
import { resourceDetails } from "@/lib/resource-details";

export default function Page() {
  // Match the published blog catalog's order, then include any new blog
  // details that have not yet been added to the catalog.
  const order = new Map(
    resourceGroups.blogs.map((blog, index) => [blog.title, index]),
  );

  const blogs = resourceDetails
    .filter((resource) => resource.type === "blogs")
    .sort(
      (a, b) =>
        (order.get(a.title) ?? Number.MAX_SAFE_INTEGER) -
        (order.get(b.title) ?? Number.MAX_SAFE_INTEGER),
    )
    .map(({ slug, title, excerpt, category, readTime }) => ({
      slug,
      title,
      excerpt,
      category,
      readTime,
    }));

  // Keep full article bodies on the server; only pass card summaries.
  return <HomePage blogs={blogs} />;
}
