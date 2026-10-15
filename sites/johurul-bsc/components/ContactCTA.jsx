import Link from "next/link";
export default function ContactCTA() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden grain">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-light/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      <div className="max-w-wrap mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-light mb-4">Let&apos;s Work Together</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">আপনার ব্যবসার জন্য নির্ভরযোগ্য সঙ্গী।</h2>
            <p className="text-white/60 text-base leading-relaxed max-w-lg">মাছ, ডিম, ফিড অথবা ঔষধ সংক্রান্ত পাইকারি ও খুচরা অনুসন্ধানের জন্য যোগাযোগ করুন।</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-brand text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all duration-300 shadow-glow hover:shadow-medium hover:-translate-y-0.5 btn-shine">যোগাযোগ করুন</Link>
            <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}