import Link from "next/link";

export const metadata = {
  title: "পণ্য ক্যাটালগ | M/S Agro Valley Co.",
  description: "M/S Agro Valley Co.-এর মাছ, ডিম, ফিড, ঔষধ ও ভেটেরিনারি সাপ্লাইয়ের পণ্য ক্যাটালগ।",
};

const catalog = [
  { number: "01", category: "Aqua", title: "মাছ ও অ্যাকুয়া সাপ্লাই", english: "Fish & Aquaculture Supply", summary: "বাণিজ্যিক মাছ চাষ, চাহিদামাফিক সরবরাহ এবং মাছের জন্য প্রয়োজনীয় ফিড ও পরিচর্যা সহায়তা।", products: ["রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ", "পোনা থেকে পূর্ণবয়স্ক মাছের জন্য বিভিন্ন গ্রেডের ফিড", "পাইকারি মাছ সরবরাহ — ঢাকা ও দেশের বিভিন্ন অঞ্চলে", "খুচরা ক্রেতা ও আড়তদারদের জন্য চাহিদামাফিক সরবরাহ"], accent: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "🐟" },
  { number: "02", category: "Poultry", title: "তাজা ডিম ও পোল্ট্রি সাপ্লাই", english: "Fresh Eggs & Poultry Supply", summary: "বড় পরিসরে লেয়ার মুরগি পালন, নিয়মিত তাজা ডিম উৎপাদন এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে সরবরাহ।", products: ["নিয়মিত তাজা ডিম উৎপাদন ও সরবরাহ", "আড়ত, দোকান ও পরিবেশকের জন্য পাইকারি ডিম", "লেয়ার মুরগির জন্য সমন্বিত খামার ব্যবস্থাপনা", "লেয়ার ও ব্রয়লার উপযোগী পোল্ট্রি ফিড"], accent: "bg-lime-50 text-lime-700 border-lime-200", icon: "🥚" },
  { number: "03", category: "Agro-Vet", title: "ফিড, ঔষধ ও ভেটেরিনারি পণ্য", english: "Feed & Veterinary Products", summary: "মাছ ও পোল্ট্রির জন্য প্রয়োজনীয় ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন, মিনারেল ও সাপ্লিমেন্ট।", products: ["মাছের ফিড — পোনা থেকে পূর্ণবয়স্ক মাছের জন্য", "লেয়ার ও ব্রয়লার পোল্ট্রি ফিড", "মাছ ও পোল্ট্রির প্রয়োজনীয় ঔষধ ও ভ্যাকসিন", "ভিটামিন, মিনারেল প্রিমিক্স ও অন্যান্য সাপ্লিমেন্ট", "খুচরা, পাইকারি এবং বাহ্যিক ডিলারশিপ সরবরাহ"], accent: "bg-green-50 text-green-700 border-green-200", icon: "💊" },
];

function inquiryUrl(category) {
  return `https://wa.me/8801307085154?text=${encodeURIComponent(`আসসালামু আলাইকুম, M/S Agro Valley Co.-এর ${category} সম্পর্কে জানতে চাই।`)}`;
}

export default function CatalogPage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32 hero-mesh">
        <div className="max-w-wrap mx-auto px-6 relative z-10">
          <div className="reveal">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4 flex items-center gap-3"><span className="w-8 h-px bg-brand-dark" />Product Catalog · M/S Agro Valley Co.</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl">আপনার প্রয়োজনের জন্য <span className="text-brand">সঠিক সমাধান।</span></h1>
            <p className="mt-6 max-w-2xl text-lg text-ink/60 leading-relaxed">মাছ, ডিম, ফিড, ঔষধ ও ভেটেরিনারি সাপ্লাই—M/S Agro Valley Co.-এর সমন্বিত পণ্য ও সেবা এক জায়গায় দেখুন।</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+8801307085154" className="bg-brand text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all shadow-soft hover:shadow-medium hover:-translate-y-0.5 btn-shine">📞 ফোনে যোগাযোগ করুন</a>
              <Link href="/contact" className="border border-ink/15 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-semibold hover:border-brand/40 hover:text-brand-dark transition-all">অনুসন্ধান পাঠান</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-24 md:py-32 border-y border-ink/5">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {catalog.map((item, i) => (
              <article key={item.category} className={`flex flex-col rounded-3xl bg-white border border-ink/8 p-8 shadow-card hover:shadow-card-hover transition-all duration-500 card-lift reveal`} style={{transitionDelay:`${i*150}ms`}}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider border ${item.accent} flex items-center gap-2`}><span>{item.icon}</span> {item.category}</span>
                  <span className="font-mono text-sm text-brand/40 font-bold">{item.number}</span>
                </div>
                <h2 className="font-display font-bold text-2xl leading-tight">{item.title}</h2>
                <p className="mt-2 text-sm font-medium text-brand-dark/70">{item.english}</p>
                <p className="mt-5 text-sm leading-relaxed text-ink/60">{item.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-ink/8 pt-6 text-sm leading-relaxed text-ink/70 flex-grow">
                  {item.products.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{p}</li>)}
                </ul>
                <a href={inquiryUrl(item.category)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-all shadow-soft hover:shadow-medium btn-shine">WhatsApp-এ জানতে চাই <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center reveal">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-brand-dark mb-4 flex items-center gap-3"><span className="w-8 h-px bg-brand/40" />Wholesale & Retail</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">পাইকারি বা খুচরা—আপনার প্রয়োজন অনুযায়ী সরবরাহ।</h2>
            </div>
            <div className="text-ink/60 leading-relaxed">
              <p className="text-lg">পণ্য, পরিমাণ, সরবরাহের স্থান এবং সময় জানালে আমরা আপনার অনুসন্ধান অনুযায়ী তথ্য দিতে পারি। মূল্য ও স্টক পরিবর্তনশীল হওয়ায় নিশ্চিত তথ্যের জন্য সরাসরি ফোন বা WhatsApp-এ যোগাযোগ করুন।</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark bg-brand/5 px-5 py-3 rounded-full hover:bg-brand/10 transition-colors">+৮৮০ ১৩০৭-০৮৫১৫৪ →</a>
                <a href="mailto:johurul.bsc@gmail.com" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark bg-brand/5 px-5 py-3 rounded-full hover:bg-brand/10 transition-colors">johurul.bsc@gmail.com →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}