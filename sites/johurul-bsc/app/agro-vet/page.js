import DivisionBand from "@/components/DivisionBand";
import OtherUnitsLinks from "@/components/OtherUnitsLinks";
import ContactCTA from "@/components/ContactCTA";
import UnitPhoto from "@/components/UnitPhoto";

export const metadata = {
  title: "Agro Valley Agro-Vet | Feed & Veterinary Supply",
  description: "Agro Valley Agro-Vet — মাছ ও পোল্ট্রি ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন ও মিনারেল প্রিমিক্সের খুচরা ও পাইকারি ডিলারশিপ।",
};

export default function AgroVetPage() {
  return (
    <main>
      <DivisionBand id="agro-vet" eyebrow="Division 03 — Feed & Veterinary Supply" title="Agro Valley Agro-Vet" englishName="Feed & veterinary supply" description="মাছ ও পোল্ট্রি ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন, মিনারেল প্রিমিক্স ও সাপ্লিমেন্টের খুচরা এবং পাইকারি ডিলারশিপ — নিজস্ব খামারের চাহিদা মেটানোর পাশাপাশি বাহ্যিক খামার ও ব্যবসায়ীদের সরবরাহ করা হয়।" points={["পোনা থেকে পূর্ণবয়স্ক মাছের জন্য বিভিন্ন গ্রেডের ফিড","লেয়ার ও ব্রয়লার উপযোগী পোল্ট্রি ফিড","মাছ ও পোল্ট্রির প্রয়োজনীয় ঔষধ ও ভ্যাকসিন","ভিটামিন, মিনারেল প্রিমিক্স ও অন্যান্য সাপ্লিমেন্ট","খুচরা ও পাইকারি — উভয় পর্যায়ে বিক্রয়"]} illustration={<UnitPhoto src="/images/agro-valley-shop.jpg" alt="Agro Valley Agro-Vet — দুর্গাপুর, রাজশাহীর শোরুম" priority />} />
      <section className="py-24 md:py-32 border-t border-ink/5 bg-surface">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 reveal">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">সরবরাহ পরিধি</p>
              <h2 className="font-display font-bold text-3xl leading-snug">অভ্যন্তরীণ ও বাহ্যিক সরবরাহ।</h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-8 reveal reveal-delay-2">
              {[{title:"অভ্যন্তরীণ সরবরাহ",desc:"নিজস্ব Aqua ও Poultry খামারের জন্য নিয়মিত ফিড ও ঔষধ সরবরাহ।"},{title:"ডিলারশিপ",desc:"বাহ্যিক খামারি ও ব্যবসায়ীদের জন্য খুচরা ও পাইকারি সরবরাহ।"},{title:"মানসম্মত পণ্য",desc:"প্রয়োজনীয় ভ্যাকসিন, ভিটামিন ও মিনারেল প্রিমিক্স সরবরাহ।"},{title:"পরামর্শ সহায়তা",desc:"ফিড ও ঔষধ ব্যবহার সংক্রান্ত সাধারণ পরামর্শ প্রদান।"}].map((item,i)=> (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-ink/8 shadow-card hover:shadow-card-hover transition-all duration-300 card-lift">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand-dark text-lg">{i===0?"🏠":i===1?"🤝":i===2?"✨":"💡"}</div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <OtherUnitsLinks current="agro-vet" />
      <ContactCTA />
    </main>
  );
}