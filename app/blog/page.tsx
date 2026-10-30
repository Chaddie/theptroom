import type { Metadata } from "next";
import Link from "next/link";
import { allPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on personal training, strength, and weight loss from Karl Morris and Jake Spottiswood at The PT Room.",
};

export default function BlogPage() {
  return (
    <article className="wrap page-hero">
      <p className="eyebrow">Journal</p>
      <h1>From the studio.</h1>
      <div className="prose">
        <p>
          Twenty-seven posts from the WordPress site, last updated in September
          2021. Each page keeps the title, date, author, and a short stretch of
          the original. Jake Spottiswood wrote two of them. He is not listed as
          a coach.
        </p>
      </div>
      <ul className="journal-list">
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <span className="meta">
                {formatDate(post.date)} · {post.author}
              </span>
              <strong>{post.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
