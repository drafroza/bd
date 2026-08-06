import { Mail, MapPin, Heart, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Dr. Afroza</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              MBBS, FCPS Part-I (Obstetrics & Gynaecology). Dedicated medical professional with a commitment to evidence-based clinical practice, empathy, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="opacity-90 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" /> Home
                </a>
              </li>
              <li>
                <a href="/about" className="opacity-90 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" /> About
                </a>
              </li>
              <li>
                <a href="/resume" className="opacity-90 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" /> Resume
                </a>
              </li>
              <li>
                <a href="/gallery" className="opacity-90 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" /> Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-90 hover:text-accent transition-colors duration-300 inline-flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle size={14} className="text-accent" />
                </div>
                <a
                  href="https://t.me/Dr_Afroza_Akter_Nishy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:text-accent transition-colors duration-300"
                >
                  Telegram: @Dr_Afroza_Akter_Nishy
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={14} className="text-accent" />
                </div>
                <a href="mailto:drafroza99@gmail.com" className="opacity-90 hover:text-accent transition-colors duration-300">
                  drafroza99@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span className="opacity-90">
                  Jhalakathi Sadar, Jhalakathi, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/15 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-90 gap-4">
          <p className="text-center md:text-left">
            © {currentYear} Dr. Afroza. All rights reserved. | BMDC Reg. No: 142636
          </p>
          <div className="flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> for healthcare excellence
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* Telegram Button */}
        <a
          href="https://t.me/Dr_Afroza_Akter_Nishy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#229ed9] hover:bg-[#1a8bc2] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          title="Chat on Telegram"
        >
          <MessageCircle size={28} />
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-primary shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          title="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
}
