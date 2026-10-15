export default function CycleDiagram() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square">
      <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full" fill="none" aria-hidden="true">
        <defs>
          <marker id="arrow-dark" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#116B35" /></marker>
          <marker id="arrow-brand" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#16A34A" /></marker>
          <marker id="arrow-light" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#4ADE80" /></marker>
          <marker id="arrow-ink" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0F1F17" /></marker>
        </defs>
        <path d="M270,95 Q150,150 100,285" stroke="#116B35" strokeWidth="2.5" markerEnd="url(#arrow-dark)" className="draw-path" />
        <path d="M330,95 Q450,150 500,285" stroke="#116B35" strokeWidth="2.5" markerEnd="url(#arrow-dark)" className="draw-path d2" />
        <path d="M100,325 Q150,460 270,510" stroke="#16A34A" strokeWidth="2.5" markerEnd="url(#arrow-brand)" className="draw-path d3" />
        <path d="M500,325 Q450,460 330,510" stroke="#4ADE80" strokeWidth="2.5" markerEnd="url(#arrow-light)" className="draw-path d4" />
        <path d="M305,555 Q580,300 305,45" stroke="#0F1F17" strokeWidth="2" strokeDasharray="6 7" markerEnd="url(#arrow-ink)" opacity="0.4" className="draw-path d5" />
      </svg>
      <div className="absolute left-1/2 top-[6%] -translate-x-1/2 text-center reveal"><div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-dark text-white flex items-center justify-center font-mono text-[11px] mx-auto shadow-medium ring-4 ring-brand-dark/20">FEED</div><p className="mt-3 font-display font-semibold text-sm md:text-base text-ink">ফিড ও ঔষধ</p></div>
      <div className="absolute left-[2%] top-1/2 -translate-y-1/2 text-center reveal reveal-delay-2"><div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand text-white flex items-center justify-center font-mono text-[11px] mx-auto shadow-medium ring-4 ring-brand/20">AQUA</div><p className="mt-3 font-display font-semibold text-sm md:text-base text-ink">পুকুর</p></div>
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 text-center reveal reveal-delay-2"><div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-light text-ink flex items-center justify-center font-mono text-[11px] mx-auto shadow-medium ring-4 ring-brand-light/30">EGGS</div><p className="mt-3 font-display font-semibold text-sm md:text-base text-ink">পোল্ট্রি</p></div>
      <div className="absolute left-1/2 bottom-[4%] -translate-x-1/2 text-center reveal reveal-delay-3"><div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-ink text-white flex items-center justify-center font-mono text-[10px] mx-auto shadow-medium ring-4 ring-ink/20 text-center leading-tight px-1">DHAKA</div><p className="mt-3 font-display font-semibold text-sm md:text-base text-ink">বাজার</p></div>
    </div>
  );
}