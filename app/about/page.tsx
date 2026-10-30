import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { principles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "St Helens personal trainer Karl Morris. Strength and conditioning, behaviour change, and a private studio at 60 North John Street.",
};

export default function AboutPage() {
  return (
    <article>
      <div className="wrap page-hero">
        <p className="eyebrow">About us</p>
        <h1>{site.trainer}</h1>
        <div className="prose">
          <p>
            St Helens personal trainer Karl Morris focuses on his clients’
            goals with gusto. His passion is strength and conditioning. He
            works through gym-based sessions and extra-gym behavioural change.
          </p>
          <p>The studio opened in 2018.</p>
        </div>
      </div>
      <div className="wrap principles" style={{ marginBottom: "2.5rem" }}>
        {principles.map((item) => (
          <section className="principle" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
          </section>
        ))}
      </div>
      <div className="wrap-wide split">
        <Image
          src="/images/studio.jpg"
          alt="The red-brick studio building on North John Street, St Helens"
          width={480}
          height={720}
          sizes="(min-width: 760px) 40vw, 100vw"
        />
        <div className="prose">
          <h2>The studio</h2>
          <p>
            A private training studio in the heart of St Helens, with parking
            outside. The room is for your use only during a session, so you
            train the way you want to train, without compromise.
          </p>
          <address className="address">
            {site.address.line1}
            <br />
            {site.address.street}
            <br />
            {site.address.city} {site.address.postcode}
          </address>
          <p>
            <Link className="button on-paper" href="/contact">
              Book your consultation
            </Link>
          </p>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: "3rem" }}>
        <Image
          src="/images/stag.jpg"
          alt="The PT Room stag mark"
          width={600}
          height={600}
        />
      </div>
    </article>
  );
}
