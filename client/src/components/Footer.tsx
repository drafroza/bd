import { Mail, Phone, MapPin, Heart } from 'lucide-react';

/**
 * Design: Elegant Healthcare Luxury
 * Footer with contact information, social links, and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="opacity-90 hover:text-accent transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="opacity-90 hover:text-accent transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/resume" className="opacity-90 hover:text-accent transition-colors duration-300">
                  Resume
                </a>
              </li>
              <li>
                <a href="/gallery" className="opacity-90 hover:text-accent transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-90 hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="https://wa.me/dr.afroza.bd" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-accent transition-colors duration-300">
                  WhatsApp: wa.me/dr.afroza.bd
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:drafroza99@gmail.com" className="opacity-90 hover:text-accent transition-colors duration-300">
                  drafroza99@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <span className="opacity-90">
                  Jhalakathi Sadar, Jhalakathi, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-90">
          <p>
            © {currentYear} Dr. Afroza. All rights reserved. | BMDC Reg. No: 142636
          </p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-accent" /> for healthcare excellence
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/dr.afroza.bd"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.925-2.757 2.236-3.514 3.65-.757 1.413-1.155 2.998-1.155 4.581 0 1.583.398 3.169 1.155 4.581.757 1.414 1.978 2.725 3.514 3.65a9.87 9.87 0 005.031 1.378h.004c1.582 0 3.168-.398 4.581-1.155 1.414-.757 2.725-1.978 3.65-3.514.926-1.536 1.378-3.122 1.378-5.031 0-1.583-.398-3.169-1.155-4.581-.757-1.414-1.978-2.725-3.514-3.65a9.87 9.87 0 00-5.031-1.378" />
          </svg>
        </a>

        {/* WhatsApp Call Button */}
        <a
          href="https://wa.me/dr.afroza.bd"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
          title="WhatsApp Call"
        >
          <Phone size={24} />
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-primary shadow-lg transition-all duration-300 hover:scale-110"
          title="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
