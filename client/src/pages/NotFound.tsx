import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-6">
      <div className="w-full max-w-xl border border-black bg-white p-8 md:p-12">
        <div className="mb-10 flex items-start justify-between border-b border-black pb-8"><span className="flex h-12 w-12 items-center justify-center bg-[#e30613] text-lg font-black text-white">DA</span><AlertCircle className="h-8 w-8 text-[#e30613]" aria-hidden="true" /></div>
        <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">Error / 404</p>
        <h1 className="text-6xl font-black leading-none tracking-[-0.08em] text-[#111111] md:text-8xl">Page not found.</h1>
        <p className="mt-6 max-w-md text-base leading-7 text-[#4b4b4b]">Sorry, the page you are looking for does not exist. It may have been moved or deleted.</p>
        <Button type="button" onClick={() => setLocation("/")} className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-none bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"><Home className="h-4 w-4" aria-hidden="true" />Go home</Button>
      </div>
    </div>
  );
}
