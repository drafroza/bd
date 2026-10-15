export function PondIllustration() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-[280px]" aria-hidden="true">
      <rect x="10" y="10" width="300" height="300" rx="24" fill="#16A34A" opacity="0.06" />
      {[70, 110, 150, 190, 230].map((r, i) => <circle key={r} cx="160" cy="180" r={r} fill="none" stroke="#116B35" strokeOpacity={0.35 - i * 0.05} strokeWidth="2" />)}
      {[[110,150],[190,140],[150,210],[205,195]].map(([cx,cy],i) => <path key={i} d={`M${cx-14},${cy} Q${cx},${cy-10} ${cx+14},${cy} Q${cx},${cy+10} ${cx-14},${cy}`} fill="#16A34A" opacity="0.9" />)}
      <path d="M40,260 Q160,240 280,260" stroke="#4ADE80" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
export function PoultryIllustration() {
  const rows=3, cols=4, cellSize=56, gap=12;
  return (
    <svg viewBox={`0 0 ${cols*cellSize+(cols-1)*gap+20} ${rows*cellSize+(rows-1)*gap+20}`} className="w-full max-w-[280px]" aria-hidden="true">
      {Array.from({length:rows}).map((_,r)=>Array.from({length:cols}).map((_,c)=>{
        const x=10+c*(cellSize+gap), y=10+r*(cellSize+gap);
        return <g key={`${r}-${c}`}><rect x={x} y={y} width={cellSize} height={cellSize} rx="12" fill="#FFFFFF" opacity="0.08" /><ellipse cx={x+cellSize/2} cy={y+cellSize/2+2} rx={cellSize/2-14} ry={cellSize/2-8} fill="#4ADE80" opacity={(r+c)%3===0?0.4:0.95} /></g>;
      }))}
    </svg>
  );
}
export function FeedIllustration() {
  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-[280px]" aria-hidden="true">
      {[40,130,220].map((x,i)=><g key={x}><path d={`M${x},60 L${x+60},60 L${x+68},220 Q${x+30},240 ${x-8},220 Z`} fill="#116B35" opacity={i===1?0.9:0.45} /><rect x={x+8} y={90} width="44" height="26" rx="4" fill="#FFFFFF" opacity="0.9" /><line x1={x} y1="60" x2={x+60} y2="60" stroke="#0F1F17" strokeWidth="4" strokeLinecap="round" /></g>)}
      <path d="M20,255 Q160,270 300,255" stroke="#16A34A" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}