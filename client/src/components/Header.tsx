import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Design: Elegant Healthcare Luxury
 * Header with navigation, logo, and mobile menu
 * Deep blue background with golden accents
 */
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
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              alt="Dr. Afroza Logo"
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Dr. Afroza
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled
              ? 'text-foreground bg-gray-100'
              : 'text-white bg-white/10'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-foreground font-medium hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
