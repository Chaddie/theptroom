import type { Metadata } from "next";
import { site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients say about training with Karl Morris at The PT Room in St Helens.",
};

export default function TestimonialsPage() {
  return (
    <article className="wrap page-hero">
      <p className="eyebrow">Testimonials</p>
      <h1>Don’t take our word for it.</h1>
      <div className="prose">
        <p>
          Written notes from the studio, kept in the clients’ own words.
          Programme names are the ones they trained on.
        </p>
      </div>
      <div className="quote-grid" style={{ margin: "2rem 0" }}>
        {testimonials.map((item) => (
          <blockquote key={item.name}>
            {item.quote.split(/(?<=\.)\s+/).map((sentence) => (
              <p key={sentence}>{sentence}</p>
            ))}
            <cite>{item.name}</cite>
            <div className="meta">{item.programme}</div>
          </blockquote>
        ))}
      </div>
      <h2>Films</h2>
      <div className="prose">
        <p>
          The current site embeds these from Facebook. They are linked here so
          the page stays fast, and so they still play if you are logged in.
        </p>
        <ul className="films">
          {site.films.map((url, index) => (
            <li key={url}>
              <a href={url}>Studio film {index + 1} on Facebook</a>
            </li>
          ))}
          <li>
            <a href={site.social.youtube}>Studio film on YouTube</a>
          </li>
        </ul>
      </div>
    </article>
  );
}
