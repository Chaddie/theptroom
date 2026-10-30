"use client";

import { site } from "@/lib/site";
import { FormEvent } from "react";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("first") ?? "").trim();
    const last = String(data.get("last") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Name: ${first} ${last}`, `Email: ${email}`, "", message].join(
      "\n",
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Consultation enquiry",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="pair">
        <label>
          First name
          <input name="first" autoComplete="given-name" required />
        </label>
        <label>
          Last name
          <input name="last" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Comment or message
        <textarea name="message" required />
      </label>
      <button className="button on-paper" type="submit">
        Email the studio
      </button>
      <p className="form-note">
        This opens your email app to {site.email}. Nothing is stored on the
        website. Or call {site.phoneDisplay}.
      </p>
    </form>
  );
}
