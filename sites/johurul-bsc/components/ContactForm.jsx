"use client";
import { useState } from "react";
const INITIAL = { name: "", phone: "", interest: "Aqua — মাছ ক্রয়/বিক্রয়", message: "", website: "" };
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [focused, setFocused] = useState(null);
  const update = (f, v) => setForm((c) => ({ ...c, [f]: v }));
  const buildMsg = () => `নাম: ${form.name}\nফোন: ${form.phone}\nআগ্রহের বিষয়: ${form.interest}\n\nবার্তা:\n${form.message}`;
  const inputCls = (f) => `w-full bg-white border rounded-xl px-4 py-3.5 text-sm placeholder:text-ink/40 transition-all duration-300 outline-none ${focused === f ? "border-brand/50 ring-4 ring-brand/10 shadow-soft" : "border-ink/10 hover:border-ink/20"}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "বার্তা যাচাই করা হচ্ছে…" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "বার্তা পাঠানো যায়নি।");
      const subject = encodeURIComponent(`M/S Agro Valley Co. – অনুসন্ধান: ${form.interest}`);
      const body = encodeURIComponent(buildMsg());
      setStatus({ type: "success", message: "তথ্য যাচাই হয়েছে। আপনার ইমেইল অ্যাপ খোলা হচ্ছে…" });
      setForm(INITIAL);
      window.location.href = `mailto:johurul.bsc@gmail.com?subject=${subject}&body=${body}`;
    } catch (err) {
      setStatus({ type: "error", message: err.message || "দয়া করে ফোন বা WhatsApp-এ যোগাযোগ করুন।" });
    }
  }

  function handleWA() {
    window.open(`https://wa.me/8801307085154?text=${encodeURIComponent(buildMsg())}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="sr-only" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2"><label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-widest text-ink/50 font-medium">আপনার নাম</label><input id="contact-name" name="name" required maxLength={80} value={form.name} onChange={(e) => update("name", e.target.value)} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} className={inputCls("name")} placeholder="আপনার নাম লিখুন" /></div>
        <div className="space-y-2"><label htmlFor="contact-phone" className="font-mono text-[11px] uppercase tracking-widest text-ink/50 font-medium">ফোন নম্বর</label><input id="contact-phone" name="phone" required type="tel" maxLength={25} value={form.phone} onChange={(e) => update("phone", e.target.value)} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} className={inputCls("phone")} placeholder="01XXXXXXXXX" /></div>
      </div>
      <div className="space-y-2"><label htmlFor="contact-interest" className="font-mono text-[11px] uppercase tracking-widest text-ink/50 font-medium">আগ্রহের বিষয়</label><select id="contact-interest" name="interest" value={form.interest} onChange={(e) => update("interest", e.target.value)} className={`${inputCls("interest")} appearance-none cursor-pointer bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")] bg-[right_1rem_center] bg-no-repeat pr-10`}><option>Aqua — মাছ ক্রয়/বিক্রয়</option><option>Poultry — ডিম সরবরাহ</option><option>Agro-Vet — ফিড ও ঔষধ</option><option>অন্যান্য</option></select></div>
      <div className="space-y-2"><label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-widest text-ink/50 font-medium">আপনার বার্তা</label><textarea id="contact-message" name="message" required maxLength={2000} rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className={`${inputCls("message")} resize-none`} placeholder="আপনার প্রয়োজনের বিস্তারিত লিখুন..." /></div>
      {status.type !== "idle" && <div className={`status-badge ${status.type === "error" ? "status-error" : status.type === "success" ? "status-success" : "status-loading"}`}><span className={`w-1.5 h-1.5 rounded-full ${status.type === "error" ? "bg-red-500" : status.type === "success" ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />{status.message}</div>}
      <div className="flex flex-wrap gap-3 pt-2">
        <button disabled={status.type === "loading"} type="submit" className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-brand-dark disabled:opacity-60 transition-all duration-300 shadow-soft hover:shadow-medium hover:-translate-y-0.5 btn-shine">{status.type === "loading" ? "যাচাই হচ্ছে…" : "ইমেইল পাঠান"}</button>
        <button type="button" onClick={handleWA} className="inline-flex items-center gap-2 border border-brand/30 text-brand-dark bg-brand/5 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-brand/10 hover:border-brand/50 transition-all duration-300"><span>💬</span> WhatsApp-এ পাঠান</button>
      </div>
    </form>
  );
}