import Link from "next/link";

export default function NotFound() {
  return (
    <article className="wrap page-hero prose">
      <p className="eyebrow">404</p>
      <h1>That page is not here.</h1>
      <p>
        Try the training, the journal, or the contact page.
      </p>
      <p>
        <Link href="/">Back home</Link>
      </p>
    </article>
  );
}
