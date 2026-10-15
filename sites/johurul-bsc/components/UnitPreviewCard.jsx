import Link from "next/link";
export default function UnitPreviewCard({ href, eyebrow, title, englishName, description, illustration, cta }) {
  return (
    <Link href={href} className="group block rounded-2xl border border-ink/8 bg-white shadow-card hover:shadow-card-hover transition-all duration-500 p-8 relative overflow-hidden card-lift">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex justify-center mb-6 transform group-hover:scale-105 transition-transform duration-500">{illustration}</div>
        <div className="space-y-2">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand-dark bg-brand/5 inline-block px-3 py-1 rounded-full">{eyebrow}</p>
          <h3 className="font-display font-bold text-2xl group-hover:text-brand-dark transition-colors duration-300">{title}</h3>
          <p className="font-mono text-xs text-ink/40">{englishName}</p>
        </div>
        <p className="text-sm text-ink/60 leading-relaxed mt-4 mb-6">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark group-hover:gap-3 transition-all duration-300">
          {cta || "বিস্তারিত দেখুন"}
          <span className="transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}