import DivisionBand from "@/components/DivisionBand";
import OtherUnitsLinks from "@/components/OtherUnitsLinks";
import ContactCTA from "@/components/ContactCTA";
import UnitPhoto from "@/components/UnitPhoto";

export const metadata = {
  title: "Agro Valley Poultry | Fresh Egg Production",
  description: "Agro Valley Poultry — বড় পরিসরে লেয়ার মুরগি পালন এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে নিয়মিত তাজা ডিম সরবরাহ।",
};

export default function PoultryPage() {
  return (
    <main>
      <DivisionBand id="poultry" eyebrow="Division 02 — Fresh Egg Production" title="Agro Valley Poultry" englishName="Fresh egg production" description="আধুনিক স্বাস্থ্যব্যবস্থাপনার মাধ্যমে বড় পরিসরে লেয়ার মুরগি পালন করা হয়, যা থেকে নিয়মিত তাজা ডিম উৎপাদিত হয় এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে সরবরাহ করা হয়।" points={["বড় পরিসরে লেয়ার মুরগি পালন","নিয়মিত তাজা ডিম উৎপাদন ও সরবরাহ","আড়ত, দোকান ও পরিবেশক পর্যায়ে পাইকারি ডিম সরবরাহ","মানসম্মত স্বাস্থ্যব্যবস্থাপনায় উৎপাদিত ডিম","নিজস্ব ফিড ও ব্যবস্থাপনা সহায়তায় খামার পরিচালনা"]} illustration={<UnitPhoto src="/images/poultry-farm.jpg" alt="Agro Valley Poultry — লেয়ার মুরগির খামার" priority />} reverse />
      <section className="py-24 md:py-32 border-t border-ink/5 bg-surface">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 reveal">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">ব্যবস্থাপনা</p>
              <h2 className="font-display font-bold text-3xl leading-snug">স্বাস্থ্য ও মান নিয়ন্ত্রণ।</h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-8 reveal reveal-delay-2">
              {[{title:"নিয়মিত পরিচর্যা",desc:"নিজস্ব Agro-Vet ইউনিটের ফিড, ভিটামিন ও ভ্যাকসিন দিয়ে খামার পরিচালিত হয়।"},{title:"মানসম্মত সংগ্রহ",desc:"প্রতিদিন উৎপাদিত ডিম মান যাচাই করে সংগ্রহ করা হয়।"},{title:"সরবরাহ নেটওয়ার্ক",desc:"আড়ত, দোকান ও পরিবেশকদের কাছে নিয়মিত সরবরাহ ব্যবস্থা।"},{title:"চাহিদা অনুযায়ী সরবরাহ",desc:"পাইকারি ক্রেতাদের পরিমাণ অনুযায়ী সরবরাহ সমন্বয় করা হয়।"}].map((item,i)=> (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-ink/8 shadow-card hover:shadow-card-hover transition-all duration-300 card-lift">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand-dark text-lg">{i===0?"💉":i===1?"✅":i===2?"🚚":"📦"}</div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OtherUnitsLinks current="poultry" />
      <ContactCTA />
    </main>
  );
}