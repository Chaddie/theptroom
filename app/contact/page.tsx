import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation at The PT Room, 60 North John Street, St Helens, WA10 2JT. Call 01744 734529 or email info@theptroom.co.uk.",
};

export default function ContactPage() {
  return (
    <article className="wrap page-hero">
      <p className="eyebrow">Contact</p>
      <h1>Take the first step.</h1>
      <div className="contact-layout">
        <div className="prose">
          <p>
            Call today and book a consultation. We’ll talk about your goals,
            answer questions, and tailor a training plan. The consultation is
            free.
          </p>
          <h2>Get in touch</h2>
          <address className="address">
            {site.address.line1}
            <br />
            {site.address.street}
            <br />
            {site.address.city}
            <br />
            {site.address.postcode}
          </address>
          <p>
            Phone: <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            <br />
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            Session times are agreed when you book. There is no published
            weekly timetable.
          </p>
          <p>
            <a href={site.social.facebook}>Facebook</a>
            {" · "}
            <a href={site.social.instagram}>Instagram</a>
          </p>
        </div>
        <ContactForm />
      </div>
    </article>
  );
}
