import Image from "next/image";
export default function UnitPhoto({ src, alt, priority }) {
  return (
    <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-medium ring-1 ring-ink/5 group">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 420px, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105" priority={priority} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xs shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">📷</div>
    </div>
  );
}