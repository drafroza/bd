"use client";
export default function DivisionBand({ id, eyebrow, title, englishName, description, points, reverse, dark, illustration }) {
  const bg = dark ? "bg-ink text-white" : "bg-white text-ink";
  const eyebrowColor = dark ? "text-brand-light" : "text-brand-dark";
  const dotColor = dark ? "bg-brand-light" : "bg-brand";
  return (
    <section id={id} className={`${bg} relative overflow-hidden scroll-mt-20`}>
      {!dark && <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle at 80% 50%, #16A34A 0%, transparent 70%)" }} />}
      <div className="max-w-wrap mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className={`flex justify-center ${reverse ? "md:order-2" : ""}`}>
          <div className="reveal">{illustration}</div>
        </div>
        <div className={`${reverse ? "md:order-1" : ""} space-y-6`}>
          <div className="reveal reveal-delay-1">
            <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${eyebrowColor}`}>{eyebrow}</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.15]">{title}</h2>
            <p className={`font-mono text-sm mt-2 ${dark ? "text-white/40" : "text-ink/40"}`}>{englishName}</p>
          </div>
          <p className={`leading-relaxed text-base ${dark ? "text-white/75" : "text-ink/70"} reveal reveal-delay-2`}>{description}</p>
          <ul className="space-y-4">
            {points.map((pt, i) => (
              <li key={i} className={`flex items-start gap-4 reveal`} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <span className={`mt-1.5 shrink-0 w-2 h-2 rounded-full ${dotColor} ring-4 ${dark ? "ring-white/10" : "ring-brand/10"}`} />
                <span className={`text-sm leading-relaxed ${dark ? "text-white/75" : "text-ink/70"}`}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}