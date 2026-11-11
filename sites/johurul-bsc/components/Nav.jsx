"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের গল্প" },
  { href: "/aqua", label: "Aqua" },
  { href: "/poultry", label: "Poultry" },
  { href: "/agro-vet", label: "Agro-Vet" },
  { href: "/catalog", label: "ক্যাটালগ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="brand-lockup" aria-label="M/S Agro Valley Co. home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-name">Agro Valley</span>
          <span className="brand-suffix">Co.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`nav-link ${active ? "nav-link-active" : ""}`}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+8809697745154" className="nav-phone" aria-label="Call +880 9697-745154">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="nav-phone-icon"><path d="M6.6 3.5 9 3l2 4.8-2.1 1.6a15.7 15.7 0 0 0 5.7 5.7l1.6-2.1 4.8 2-.5 2.4a2 2 0 0 1-2.1 1.6C10.7 18.4 5.6 13.3 5 5.6a2 2 0 0 1 1.6-2.1Z" /></svg>
            <span>+880 9697-745154</span>
          </a>
          <Link href="/contact" className="nav-cta">কথা বলুন <span aria-hidden="true">↗</span></Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a href="tel:+8809697745154" className="nav-phone nav-phone-mobile" aria-label="Call +880 9697-745154">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="nav-phone-icon"><path d="M6.6 3.5 9 3l2 4.8-2.1 1.6a15.7 15.7 0 0 0 5.7 5.7l1.6-2.1 4.8 2-.5 2.4a2 2 0 0 1-2.1 1.6C10.7 18.4 5.6 13.3 5 5.6a2 2 0 0 1 1.6-2.1Z" /></svg>
            <span className="sr-only">+880 9697-745154</span>
          </a>
          <button
            type="button"
            aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="menu-toggle"
          >
            <span className={open ? "menu-line menu-line-top-open" : "menu-line"} />
            <span className={open ? "menu-line menu-line-mid-open" : "menu-line"} />
            <span className={open ? "menu-line menu-line-bottom-open" : "menu-line"} />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav lg:hidden ${open ? "mobile-nav-open" : ""}`}>
        <div className="space-y-1 border-t border-ink/10 px-6 py-6">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`mobile-nav-link ${pathname === link.href ? "mobile-nav-link-active" : ""}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`mobile-nav-link ${pathname === "/contact" ? "mobile-nav-link-active" : ""}`}>যোগাযোগ</Link>
        </div>
      </div>
    </header>
  );
}
