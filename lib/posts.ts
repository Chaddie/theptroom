import posts from "@/content/posts.json";

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  summary: string;
};

export const allPosts: Post[] = posts;

export function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
