import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "আমাদের গল্প" },
  { href: "/aqua", label: "Agro Valley Aqua" },
  { href: "/poultry", label: "Agro Valley Poultry" },
  { href: "/agro-vet", label: "Agro Valley Agro-Vet" },
  { href: "/catalog", label: "পণ্য ক্যাটালগ" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="max-w-wrap mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <Link href="/" className="brand-lockup footer-brand">
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
              <span className="brand-name">Agro Valley</span>
              <span className="brand-suffix">Co.</span>
            </Link>
            <p className="footer-statement">একটি সমন্বিত কৃষি প্রতিষ্ঠান—পুকুর, খামার এবং সরবরাহের মধ্যে আরও ভালো একটি সম্পর্ক তৈরি করছি।</p>
            <div className="flex flex-col items-start gap-2">
              <a href="/visiting-card/agro-valley-group-front.jpg" className="footer-download" download>ভিজিটিং কার্ড ডাউনলোড <span>↗</span></a>
              <a href="/visiting-card/trade-license.jpg" className="footer-download" download>ট্রেড লাইসেন্স ডাউনলোড <span>↗</span></a>
            </div>
          </div>
          <div>
            <div className="footer-label">Explore</div>
            <div className="footer-links">
              {FOOTER_LINKS.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </div>
          </div>
          <div>
            <div className="footer-label">Say hello</div>
            <div className="footer-links">
              <a href="mailto:johurul.bsc@gmail.com">johurul.bsc@gmail.com</a>
              <a href="https://drafroza.vercel.app/" target="_blank" rel="noopener noreferrer" className="family-site-link">Family: Dr. Afroza Akter ↗</a>
              <a href="tel:+8801307085154">+৮৮০১৩০৭-০৮৫১৫৪</a>
              <a href="https://www.google.com/maps/@24.3983037,88.730349,16z" target="_blank" rel="noopener noreferrer">রাজশাহী, বাংলাদেশ ↗</a>
              <div className="footer-social-links">
                <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="social-link social-link-whatsapp">WhatsApp ↗</a>
                <a href="https://t.me/johurul_bd" target="_blank" rel="noopener noreferrer" className="social-link social-link-telegram">Telegram ↗</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} M/S Agro Valley Co.</span>
          <span>Quality · Care · Supply</span>
          <span>Made for the everyday good.</span>
        </div>
      </div>
    </footer>
  );
}
