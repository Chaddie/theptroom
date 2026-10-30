import type { MetadataRoute } from "next";
import { allPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/training",
    "/about",
    "/testimonials",
    "/gallery",
    "/blog",
    "/contact",
    "/privacy",
  ];

  return [
    ...paths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...allPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
