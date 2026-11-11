import { useEffect, useState } from 'react';
import { Link } from 'wouter';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/images/homepage-logo.jpg"
            alt="Dr. Afroza Logo"
            className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 ring-2 ring-white/50"
          />
          <span className={`text-lg md:text-xl font-bold transition-colors duration-300 hidden sm:inline ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            Dr. Afroza
          </span>
        </Link>

        {/* Compact navigation stays visible on mobile to match the approved design. */}
        <nav className="flex min-w-0 items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="contents">
              <Link
                href={item.href}
                className={`rounded-lg px-1.5 py-2 text-[10px] font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-primary/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
