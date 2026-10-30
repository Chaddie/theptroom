import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the contact form on The PT Room website works. No account, and no submission stored on the server.",
};

export default function PrivacyPage() {
  return (
    <article className="wrap page-hero prose">
      <p className="eyebrow">Privacy</p>
      <h1>What this site keeps.</h1>
      <p>
        theptroom.co.uk did not publish a privacy policy. This page only
        describes the new site.
      </p>
      <p>
        The contact form does not send your message to a server. It opens your
        own email app, addressed to {site.email}, with the name, email, and
        message you typed. If you would rather not use the form, call{" "}
        {site.phoneDisplay}.
      </p>
      <p>
        There is no account and no mailing list. Studio photography on the
        site is from The PT Room’s own sessions.
      </p>
    </article>
  );
}
