"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="logo" onClick={() => setOpen(false)}>
        <img
          src="/images/logo-wordmark.png"
          alt="The PT Room"
          width={1560}
          height={770}
        />
      </Link>
      <nav className="nav-desktop" aria-label="Primary">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="call" href={`tel:${site.phoneTel}`}>
        {site.phoneDisplay}
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="mobile-nav"
        className={open ? "nav-mobile is-open" : "nav-mobile"}
        aria-label="Mobile"
        hidden={!open}
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={`tel:${site.phoneTel}`} onClick={() => setOpen(false)}>
          Call {site.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
