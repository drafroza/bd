import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "যোগাযোগ | M/S Agro Valley Co.",
  description: "M/S Agro Valley Co.-এর সাথে যোগাযোগ করুন — ফোন, WhatsApp, ইমেইল অথবা ফর্মের মাধ্যমে। ঠিকানা: ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী।",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 hero-mesh">
        <div className="max-w-wrap mx-auto px-6">
          <div className="reveal">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4 flex items-center gap-3"><span className="w-8 h-px bg-brand-dark" />Get in touch</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">আপনার ব্যবসার জন্য নির্ভরযোগ্য সঙ্গী।</h1>
            <p className="mt-6 max-w-xl text-lg text-ink/60 leading-relaxed">মাছ, ডিম, ফিড অথবা ঔষধ সংক্রান্ত পাইকারি ও খুচরা অনুসন্ধানের জন্য নিচের ফর্মটি পূরণ করুন অথবা সরাসরি যোগাযোগ করুন।</p>
          </div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-8 reveal">
              <div className="space-y-8">
                <div className="group">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-3 font-medium">ফোন / WhatsApp</p>
                  <a href="tel:+8801307085154" className="block text-xl font-semibold text-ink hover:text-brand transition-colors">+৮৮০ ১৩০৭-০৮৫১৫৪</a>
                  <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-brand-dark bg-brand/5 px-4 py-2 rounded-full hover:bg-brand/10 transition-colors"><span>💬</span> WhatsApp-এ বার্তা পাঠান →</a>
                </div>
                <div className="pt-6 border-t border-ink/10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-3 font-medium">ইমেইল</p>
                  <a href="mailto:johurul.bsc@gmail.com" className="block text-lg font-semibold text-ink hover:text-brand transition-colors">johurul.bsc@gmail.com</a>
                </div>
                <div className="pt-6 border-t border-ink/10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-3 font-medium">ঠিকানা</p>
                  <p className="text-lg font-semibold text-ink leading-relaxed">ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী</p>
                  <p className="text-sm text-ink/40 leading-relaxed">Jhaluka, Amgachi Hat-6240, Durgapur, Rajshahi</p>
                  <a href="https://www.google.com/maps/@24.3983037,88.730349,16z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-brand-dark hover:text-brand transition-colors">Google Maps-এ দেখুন →</a>
                </div>
                <div className="pt-6 border-t border-ink/10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 mb-3 font-medium">প্রোপ্রাইটর</p>
                  <p className="text-lg font-semibold text-ink">Proprietor: Md. Johurul Haque</p>
                  <p className="text-sm text-ink/50">স্বত্বাধিকারী: মোঃ জহুরুল হক</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a href="tel:+8801307085154" className="flex items-center justify-center gap-2 bg-brand text-white py-3 rounded-xl text-sm font-semibold hover:bg-brand-dark transition-all shadow-soft hover:shadow-medium"><span>📞</span> কল করুন</a>
                <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-ink/15 bg-white py-3 rounded-xl text-sm font-semibold hover:border-brand/40 hover:text-brand-dark transition-all"><span>💬</span> WhatsApp</a>
              </div>
            </div>
            <div className="lg:col-span-7 reveal reveal-delay-2">
              <div className="bg-white rounded-3xl border border-ink/8 shadow-card p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="font-display font-bold text-2xl mb-2">বার্তা পাঠান</h3>
                  <p className="text-sm text-ink/50">নিচের ফর্মটি পূরণ করলে আমরা যত তাড়াতাড়ি সম্ভব যোগাযোগ করব।</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
