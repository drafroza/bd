import { ArrowUp, Heart, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Resume', href: '#/resume' },
  { label: 'Gallery', href: '#/gallery' },
  { label: 'Contact', href: '#/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="container py-14 md:py-20">
        <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-20">
          <div>
            <div className="mb-7 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e30613] text-lg font-black tracking-[-0.08em]">DA</span>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e30613]">Professional profile</p>
                <h2 className="mt-1 text-2xl font-black tracking-[-0.05em] text-white">Dr. Afroza</h2>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/65">
              MBBS, FCPS Part-I (Obstetrics &amp; Gynaecology). Dedicated to evidence-based clinical practice, empathy, and continuous learning.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e30613]">Explore</p>
            <nav className="grid gap-3" aria-label="Footer navigation">
              {footerLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-3 text-sm text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
                >
                  <span className="font-mono text-xs text-[#e30613]">0{index + 1}</span>
                  <span className="h-px w-0 bg-[#e30613] transition-all duration-200 group-hover:w-4" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e30613]">Contact</p>
            <div className="grid gap-4 text-sm">
              <a
                href="tel:+8801353187063"
                className="group inline-flex items-center gap-3 text-base font-bold tabular-nums text-white transition-colors duration-200 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
                aria-label="Call +8801353187063"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-white/25 text-[#e30613] transition-colors duration-200 group-hover:border-[#e30613]">
                  <Phone size={15} aria-hidden="true" />
                </span>
                +8801353187063
              </a>
              <a
                href="mailto:drafroza99@gmail.com"
                className="inline-flex items-center gap-3 text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
              >
                <Mail size={15} className="text-[#e30613]" aria-hidden="true" />
                drafroza99@gmail.com
              </a>
              <div className="inline-flex items-start gap-3 text-white/70">
                <MapPin size={15} className="mt-1 shrink-0 text-[#e30613]" aria-hidden="true" />
                <span>Jhalakathi Sadar, Jhalakathi, Bangladesh</span>
              </div>
              <a
                href="https://t.me/Dr_Afroza_Akter_Nishy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"
              >
                <MessageCircle size={15} className="text-[#e30613]" aria-hidden="true" />
                Telegram: @Dr_Afroza_Akter_Nishy
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/20" />
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Dr. Afroza. All rights reserved. | BMDC Reg. No: 142636</p>
          <p className="inline-flex items-center gap-2">Made with <Heart size={12} className="fill-[#e30613] text-[#e30613]" aria-hidden="true" /> for healthcare excellence</p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://t.me/Dr_Afroza_Akter_Nishy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#229ed9] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e30613]"
          title="Chat on Telegram"
          aria-label="Chat on Telegram"
        >
          <MessageCircle size={22} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e30613] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e30613]"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
