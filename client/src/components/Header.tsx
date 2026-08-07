import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#/' },
    { label: 'About', href: '#/about' },
    { label: 'Resume', href: '#/resume' },
    { label: 'Gallery', href: '#/gallery' },
    { label: 'Contact', href: '#/contact' },
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
        <Link href="#/">
          <a className="flex items-center gap-2.5 group">
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
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-primary hover:bg-primary/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}>
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled
              ? 'text-foreground bg-gray-100 hover:bg-gray-200'
              : 'text-white bg-white/15 hover:bg-white/25'
          }`}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${isScrolled ? 'bg-white shadow-lg' : 'bg-primary/95 backdrop-blur-md'}`}
      >
        <div className="container py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`font-medium transition-colors duration-300 py-3 px-4 rounded-lg ${
                  isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-primary/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
