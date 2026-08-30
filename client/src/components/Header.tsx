import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Resume', href: '#/resume' },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Contact', href: '#/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-[0_5px_0_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="container flex min-h-[76px] items-center justify-between gap-6">
        <a href="#/" className="group flex min-w-0 items-center gap-3" aria-label="Dr. Afroza home">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e30613] transition-transform duration-200 group-hover:rotate-3">
            <span className="text-lg font-black tracking-[-0.08em] text-white">DA</span>
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#e30613]">Medical profile</span>
            <span className="block truncate text-lg font-black tracking-[-0.04em] text-[#111111]">Dr. Afroza</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-3 py-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#111111] transition-colors duration-200 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e30613]"
            >
              <span className="mr-2 text-[#e30613]">0{index + 1}</span>
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[#e30613] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="h-8 w-px bg-black/20" aria-hidden="true" />
          <a
            href="tel:+8801353187063"
            className="inline-flex items-center gap-2 text-sm font-bold tabular-nums text-[#111111] transition-colors duration-200 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
            aria-label="Call +8801353187063"
          >
            <Phone size={16} strokeWidth={2.4} aria-hidden="true" />
            <span>+8801353187063</span>
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+8801353187063"
            className="inline-flex items-center gap-1.5 text-xs font-bold tabular-nums text-[#111111] transition-colors duration-200 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
            aria-label="Call +8801353187063"
          >
            <Phone size={14} aria-hidden="true" />
            <span>+8801353187063</span>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-black/20 text-[#111111] transition-colors duration-200 hover:border-[#e30613] hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e30613] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`border-t border-black/15 bg-white lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        aria-label="Mobile navigation"
      >
        <div className="container grid gap-0 py-2">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-12 items-center gap-3 border-b border-black/10 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] transition-colors duration-200 last:border-b-0 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e30613]"
            >
              <span className="text-[#e30613]">0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            href="tel:+8801353187063"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center gap-3 border-t border-black/20 pt-2 text-sm font-bold tabular-nums text-[#111111] hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e30613]"
            aria-label="Call +8801353187063"
          >
            <Phone size={16} aria-hidden="true" />
            +8801353187063
          </a>
        </div>
      </nav>
    </header>
  );
}
