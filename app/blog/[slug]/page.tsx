import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, formatDate, getPost } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Journal" };
  return {
    title: post.title,
    description: post.excerpt || post.summary,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const paragraphs = post.summary.split(/\n+/).filter(Boolean);

  return (
    <article className="wrap page-hero prose">
      <p className="eyebrow">Journal</p>
      <h1>{post.title}</h1>
      <p className="meta">
        {formatDate(post.date)} · {post.author}
      </p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p className="meta">
        Shortened from the original article on theptroom.co.uk. The full
        archive can be expanded when new writing is ready.
      </p>
      <p>
        <Link href="/blog">Back to the journal</Link>
      </p>
    </article>
  );
}
