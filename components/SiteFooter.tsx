import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="accent-rule" />
          <strong>{site.name}</strong>
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
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <p className="eyebrow">Visit</p>
          <nav aria-label="Footer">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
            <div>
              <Link href="/privacy">Privacy</Link>
            </div>
          </nav>
          <p>
            <a href={site.social.facebook}>Facebook</a>
            {" · "}
            <a href={site.social.instagram}>Instagram</a>
            {" · "}
            <a href={site.social.youtube}>YouTube</a>
          </p>
        </div>
      </div>
      <p className="fine">
        © {new Date().getFullYear()} The PT Room. Personal training with{" "}
        {site.trainer}, St Helens. Consultation is free. Session times are
        booked, not listed.
      </p>
    </footer>
  );
}
