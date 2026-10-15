import Link from "next/link";
const ALL_UNITS = [
  { id: "aqua", href: "/aqua", label: "Agro Valley Aqua", note: "মাছ চাষ ও পাইকারি সরবরাহ", icon: "🐟" },
  { id: "poultry", href: "/poultry", label: "Agro Valley Poultry", note: "ডিম উৎপাদন ও সরবরাহ", icon: "🥚" },
  { id: "agro-vet", href: "/agro-vet", label: "Agro Valley Agro-Vet", note: "ফিড ও ঔষধ ডিলারশিপ", icon: "💊" },
];
export default function OtherUnitsLinks({ current }) {
  const others = ALL_UNITS.filter((u) => u.id !== current);
  return (
    <section className="bg-gradient-soft py-20 md:py-24 border-y border-ink/5">
      <div className="max-w-wrap mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-8 flex items-center gap-3"><span className="w-8 h-px bg-ink/20" />আমাদের অন্যান্য ইউনিট</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((u) => (
            <Link key={u.id} href={u.href} className="group flex items-center justify-between rounded-2xl bg-white border border-ink/8 hover:border-brand/30 px-7 py-6 transition-all duration-300 shadow-card hover:shadow-card-hover card-lift">
              <div className="flex items-start gap-4">
                <span className="text-2xl">{u.icon}</span>
                <div>
                  <p className="font-display font-semibold text-lg group-hover:text-brand-dark transition-colors">{u.label}</p>
                  <p className="text-sm text-ink/50">{u.note}</p>
                </div>
              </div>
              <span className="text-brand-dark group-hover:translate-x-2 transition-transform duration-300 text-xl" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}