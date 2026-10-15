import CycleDiagram from "@/components/CycleDiagram";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "পরিচিতি | M/S Agro Valley Co.",
  description: "M/S Agro Valley Co. সম্পর্কে জানুন — একটি সমন্বিত কৃষি প্রতিষ্ঠান, যেখানে মাছ চাষ, ডিম উৎপাদন এবং ফিড-ঔষধ সরবরাহ একই ব্যবস্থাপনার অধীনে পরিচালিত হয়।",
};

const STAGES = [
  { label: "Aqua", note: "Fish production" },
  { label: "Poultry", note: "Egg production" },
  { label: "Agro-Vet", note: "Feed & veterinary supply" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 hero-mesh">
        <div className="max-w-wrap mx-auto px-6">
          <div className="reveal">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4 flex items-center gap-3"><span className="w-8 h-px bg-brand-dark" />About Us</p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">একটি প্রতিষ্ঠান, তিনটি স্তম্ভ, একটি লক্ষ্য।</h1>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 reveal">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">পরিচিতি</p>
              <h2 className="font-display font-bold text-3xl leading-snug">উৎপাদন থেকে সরবরাহ — একই হাতে।</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-ink/70 leading-relaxed reveal reveal-delay-2">
              <p className="text-lg">M/S Agro Valley Co. একটি সমন্বিত (integrated) কৃষি প্রতিষ্ঠান, যা উৎপাদন থেকে সরবরাহ — পুরো শৃঙ্খলটি নিজেদের নিয়ন্ত্রণে পরিচালনা করে। প্রতিষ্ঠানটি তিনটি পরিপূরক ইউনিটে বিভক্ত — <strong className="text-ink">Aqua</strong> (মাছ চাষ), <strong className="text-ink">Poultry</strong> (ডিম উৎপাদন) এবং <strong className="text-ink">Agro-Vet</strong> (ফিড ও ঔষধ সরবরাহ)।</p>
              <p>প্রতিটি ইউনিট একে অপরের সাথে সংযুক্ত: নিজস্ব ফিড ও ঔষধ দিয়ে খামার পরিচালনা করা হয়, আর উৎপাদিত মাছ ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে সরবরাহ করা হয়। এই সমন্বিত মডেল উৎপাদন, মান নিয়ন্ত্রণ এবং সরবরাহ ব্যবস্থাপনাকে একই চক্রে যুক্ত করে।</p>
              <p>প্রতিষ্ঠানের প্রতিটি সিদ্ধান্তে আমরা তিনটি বিষয়কে গুরুত্ব দিই — মান, যত্ন এবং নির্ভরযোগ্য সরবরাহ। এই তিনটি নীতির উপর ভিত্তি করেই M/S Agro Valley Co.-এর প্রতিটি ইউনিট পরিচালিত হয়।</p>
              <div className="pt-4 border-t border-ink/10">
                <p className="font-mono text-sm text-ink/40">Proprietor: Md. Johurul Haque · স্বত্বাধিকারী: মোঃ জহুরুল হক</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-24 md:py-32 border-y border-ink/5">
        <div className="max-w-wrap mx-auto px-6 text-center">
          <div className="reveal">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4 flex items-center justify-center gap-3"><span className="w-8 h-px bg-brand/40" />Integrated Operating Model<span className="w-8 h-px bg-brand/40" /></p>
            <h2 className="font-display font-bold text-3xl md:text-4xl max-w-xl mx-auto mb-6">তিনটি ইউনিট একে অপরকে সহায়তা করে</h2>
            <p className="text-ink/50 max-w-lg mx-auto mb-16">Agro-Vet ইউনিটের ফিড ও ভেটেরিনারি পণ্য Aqua এবং Poultry ইউনিটের নিজস্ব খামারে ব্যবহৃত হয়।</p>
          </div>
          <div className="reveal reveal-delay-2"><CycleDiagram /></div>
          <div className="mt-16 grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto text-left reveal reveal-delay-3">
            {STAGES.map((s,i)=> (
              <div key={s.label} className="bg-white rounded-2xl border border-ink/8 p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <p className="font-mono text-[11px] text-brand-dark mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-[10px]">{i+1}</span>Stage</p>
                <p className="font-display font-bold text-lg">{s.label}</p>
                <p className="text-xs text-ink/40 mt-1">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-lg mx-auto text-sm text-ink/50 leading-relaxed reveal reveal-delay-4">এরপর উৎপাদিত মাছ ও ডিম দেশের বিভিন্ন বাজারে সরবরাহ করা হয় — ফলাফল: সমন্বিত উৎপাদন ও সরবরাহ।</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 reveal">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">অবস্থান</p>
              <h2 className="font-display font-bold text-3xl leading-snug">রাজশাহী থেকে দেশব্যাপী।</h2>
            </div>
            <div className="md:col-span-8 reveal reveal-delay-2">
              <p className="text-ink/70 leading-relaxed text-lg mb-6">আমাদের কার্যক্রম পরিচালিত হয় রাজশাহীর দুর্গাপুর থেকে, এবং উৎপাদিত মাছ ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে সরবরাহ করা হয়।</p>
              <a href="https://www.google.com/maps/@24.3983037,88.730349,16z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-semibold text-brand-dark bg-brand/5 px-6 py-3 rounded-full hover:bg-brand/10 transition-colors group">
                <span className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-xs">📍</span>
                ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী — মানচিত্রে দেখুন
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
