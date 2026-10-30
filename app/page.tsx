import Image from "next/image";
import Link from "next/link";
import { allPosts, formatDate } from "@/lib/posts";
import { gallery, services, site, testimonials } from "@/lib/site";

export default function HomePage() {
  const latest = allPosts.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">St Helens town centre</p>
          <h1>Personal training, in private.</h1>
          <p className="lede">
            Led by {site.trainer}, The PT Room is a fully equipped studio for
            one-to-one training and small groups. Expert coaching, a plan, and
            the session delivered with you.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              Book a free consultation
            </Link>
            <Link className="button ghost" href="/training">
              See the training
            </Link>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src={gallery[0].src}
            alt={gallery[0].alt}
            width={gallery[0].width}
            height={gallery[0].height}
            priority
            sizes="(min-width: 760px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Expect more</p>
          <h2>A personal trainer in St Helens.</h2>
          <div className="prose">
            <p>
              The PT Room is St Helens’ best kept secret: boutique fitness in a
              private room. Kettlebell coaching, barbell work, and a trainer
              who stays with you. Opened in 2018. No membership. Nobody else
              on the floor while you train.
            </p>
            <p>
              The aim is simple. Fitter, leaner, and stronger, one step at a
              time. Consultation is free.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap-wide">
          <div className="section-head">
            <h2>Training</h2>
            <Link href="/training">All of it</Link>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service" key={service.name}>
                <span className="index">0{index + 1}</span>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)" }}>
        <div className="wrap-wide split">
          <Image
            src="/images/coach.jpg"
            alt="Karl Morris in the studio beside the painted PT Room mark"
            width={1600}
            height={900}
            sizes="(min-width: 760px) 50vw, 100vw"
          />
          <div>
            <p className="eyebrow">{site.trainer}</p>
            <h2>Whatever you are aiming for.</h2>
            <p>
              Programme design and coaching in a room that is yours for the
              session. Clients lift, sweat, and get better at the things they
              came in to learn — squat, deadlift, conditioning, or simply
              turning up.
            </p>
            <p>
              <Link href="/about">About Karl and the studio</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-wide">
          <div className="section-head">
            <h2>Clients</h2>
            <Link href="/testimonials">Full testimonials</Link>
          </div>
          <div className="quote-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name}>
                <p>“{item.pull}”</p>
                <cite>{item.name}</cite>
                <div className="meta">{item.programme}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>From the journal</h2>
            <Link href="/blog">All posts</Link>
          </div>
          <ul className="journal-list">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className="meta">{formatDate(post.date)}</span>
                  <strong>{post.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
