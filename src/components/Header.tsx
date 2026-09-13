"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, telHref } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image src="/images/logo.svg" alt="" width={52} height={52} priority />
          <span className="leading-none">
            <span className="font-script block text-[28px] text-ink">Chiniot</span>
            <span className="mt-1 block text-[9px] tracking-[0.28em] text-gold uppercase">
              Fresh Food Catering
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`text-[11px] tracking-[0.22em] uppercase ${
                    isActive(pathname, item.href) ? "text-gold" : "text-ink/90 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
                {menuOpen && (
                  <div className="absolute top-full left-0 pt-3">
                    <ul className="min-w-56 border border-gold/30 bg-bg-2 py-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-[11px] tracking-[0.12em] text-ink/90 uppercase hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.22em] uppercase ${
                  isActive(pathname, item.href) ? "text-gold" : "text-ink/90 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a href={telHref} className="font-display text-lg text-ink">
            {site.phones[0].tel}
          </a>
          <Link
            href="/contact"
            className="bg-gold px-5 py-2.5 text-[11px] tracking-[0.2em] text-bg uppercase"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <a
            href={telHref}
            className="grid h-10 w-10 place-items-center border border-gold/50 text-gold"
            aria-label="Call"
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-ink"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <span className={`h-px w-full bg-ink transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-bg xl:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <Link href="/" className="font-script text-2xl">
              Chiniot
            </Link>
            <button type="button" className="text-ink" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pb-16" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-gold/15 py-3">
                <Link href={item.href} className="text-sm tracking-[0.18em] uppercase">
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <ul className="mt-2 space-y-2 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="text-sm text-muted">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 2-2 2C9 19.5 4.5 15 4.5 5.5c0-1 1-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
