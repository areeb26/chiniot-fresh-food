import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-script text-4xl text-gold">Chiniot</p>
          <p className="mt-2 text-[11px] tracking-[0.22em] text-muted uppercase">
            {site.tagline}
          </p>
          <p className="mt-6 font-display text-2xl">{site.principal}</p>
          <p className="text-sm text-muted">({site.principalNote})</p>
        </div>
        <div>
          <h2 className="text-[11px] tracking-[0.22em] text-gold uppercase">Say Hello</h2>
          <a href={`mailto:${site.email}`} className="mt-4 block text-ink hover:text-gold">
            {site.email}
          </a>
          {site.phones.map((p) => (
            <a key={p.tel} href={`tel:+${p.e164}`} className="mt-2 block text-ink hover:text-gold">
              {p.name} · {p.tel}
            </a>
          ))}
        </div>
        <div>
          <h2 className="text-[11px] tracking-[0.22em] text-gold uppercase">Address</h2>
          <p className="mt-4 max-w-xs text-ink">{site.address}</p>
        </div>
        <div>
          <h2 className="text-[11px] tracking-[0.22em] text-gold uppercase">Visit</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/menu" className="hover:text-gold">
                Menus
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Book a date
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold">
                The kitchen
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15 px-5 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}, DHA Phase 2 Ext. Karachi.
      </div>
    </footer>
  );
}
