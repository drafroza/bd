import { useState } from 'react';
import { AlertCircle, CheckCircle2, ExternalLink, Heart, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const phoneNumber = '+8801353187063';
const phoneHref = 'tel:+8801353187063';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const data = {
      service_id: 'Dr. Afroza',
      template_id: 'template_bepn5rr',
      user_id: 'yFmI7r18v10dPWi2H',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Dr. Afroza',
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error((await response.text()) || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 5000);
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main>
        <section className="border-b border-black bg-white pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.38fr] lg:gap-16">
              <div className="relative max-w-4xl">
                <span className="mb-8 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">
                  <span className="h-3 w-3 bg-[#e30613]" aria-hidden="true" /> 05 / Contact
                </span>
                <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.08em] text-[#111111] md:text-8xl">A direct line to thoughtful care.</h1>
              </div>
              <div className="flex items-end lg:justify-end">
                <p className="max-w-xs border-l-2 border-[#e30613] pl-5 text-sm leading-7 text-[#4b4b4b]">
                  For professional enquiries, feedback, or a conversation about women&apos;s healthcare, please use the channels below.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-[#f4f4f4] py-14 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
              <div>
                <p className="mb-8 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">Contact information</p>
                <h2 className="max-w-md text-4xl font-black leading-[0.98] tracking-[-0.065em] text-[#111111] md:text-6xl">Keep the conversation simple.</h2>
                <p className="mt-8 max-w-md text-base leading-7 text-[#4b4b4b]">
                  I am dedicated to maintaining professional communication with clarity, empathy, and respect for confidentiality.
                </p>

                <div className="mt-12 grid gap-0 border-t border-black">
                  <a
                    href={phoneHref}
                    className="group flex items-center justify-between gap-5 border-b border-black py-6 text-[#111111] transition-colors duration-200 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e30613]"
                    aria-label={`Call ${phoneNumber}`}
                  >
                    <span className="inline-flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center bg-[#e30613] text-white"><Phone size={17} aria-hidden="true" /></span>
                      <span>
                        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#e30613]">Telephone</span>
                        <span className="mt-1 block text-lg font-bold tabular-nums">{phoneNumber}</span>
                      </span>
                    </span>
                    <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="mailto:drafroza99@gmail.com"
                    className="group flex items-center justify-between gap-5 border-b border-black py-6 text-[#111111] transition-colors duration-200 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e30613]"
                  >
                    <span className="inline-flex items-center gap-4"><Mail size={18} className="text-[#e30613]" aria-hidden="true" /> <span className="text-sm font-semibold">drafroza99@gmail.com</span></span>
                    <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </a>
                  <div className="flex items-start gap-4 border-b border-black py-6 text-sm leading-6 text-[#4b4b4b]"><MapPin size={18} className="mt-1 shrink-0 text-[#e30613]" aria-hidden="true" /><span>Jhalakathi Sadar, Jhalakathi, Bangladesh</span></div>
                </div>

                <div className="mt-10 border-l-2 border-[#e30613] pl-5 text-sm leading-7 text-[#4b4b4b]">
                  <p className="font-bold text-[#111111]">Prefer Telegram?</p>
                  <a href="https://t.me/Dr_Afroza_Akter_Nishy" target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 underline decoration-[#e30613] underline-offset-4 hover:text-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]">Open Telegram Chat <ExternalLink size={14} aria-hidden="true" /></a>
                </div>
              </div>

              <div className="relative border border-black bg-white p-7 md:p-10">
                <span className="absolute right-0 top-0 h-5 w-5 bg-[#e30613]" aria-hidden="true" />
                <div className="mb-10 flex items-start justify-between gap-6 border-b border-black pb-6">
                  <div><p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">Response form</p><h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[#111111] md:text-4xl">Send feedback.</h2></div>
                  <Send size={22} className="mt-1 text-[#e30613]" aria-hidden="true" />
                </div>

                {status === 'success' && <div className="mb-6 flex items-center gap-3 border border-green-700 bg-green-50 p-4 text-green-800"><CheckCircle2 size={18} className="shrink-0" /><p className="text-sm font-semibold">Message sent successfully. I will get back to you soon.</p></div>}
                {status === 'error' && <div className="mb-6 flex items-center gap-3 border border-red-700 bg-red-50 p-4 text-red-800"><AlertCircle size={18} className="shrink-0" /><p className="text-sm font-semibold">{errorMessage}</p></div>}

                <form onSubmit={handleSubmit} className="grid gap-6">
                  <label className="grid gap-2 text-sm font-bold text-[#111111]" htmlFor="name">Your name<input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required disabled={status === 'loading'} className="border-b border-black bg-transparent px-0 py-3 font-normal outline-none transition-colors placeholder:text-[#929292] focus:border-[#e30613] disabled:opacity-50" /></label>
                  <label className="grid gap-2 text-sm font-bold text-[#111111]" htmlFor="email">Your email<input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required disabled={status === 'loading'} className="border-b border-black bg-transparent px-0 py-3 font-normal outline-none transition-colors placeholder:text-[#929292] focus:border-[#e30613] disabled:opacity-50" /></label>
                  <label className="grid gap-2 text-sm font-bold text-[#111111]" htmlFor="subject">Subject<input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" required disabled={status === 'loading'} className="border-b border-black bg-transparent px-0 py-3 font-normal outline-none transition-colors placeholder:text-[#929292] focus:border-[#e30613] disabled:opacity-50" /></label>
                  <label className="grid gap-2 text-sm font-bold text-[#111111]" htmlFor="message">Your message<textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." required disabled={status === 'loading'} rows={4} className="resize-none border-b border-black bg-transparent px-0 py-3 font-normal outline-none transition-colors placeholder:text-[#929292] focus:border-[#e30613] disabled:opacity-50" /></label>
                  <button type="submit" disabled={status === 'loading'} className="mt-2 inline-flex min-h-14 items-center justify-center gap-3 bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613] disabled:cursor-not-allowed disabled:opacity-60">{status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Send message <Send size={17} aria-hidden="true" /></>}</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black bg-white py-14 md:py-20">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-[0.7fr_1fr] md:gap-16">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]">Professional commitment</p>
            <p className="max-w-3xl text-2xl font-bold leading-tight tracking-[-0.045em] text-[#111111] md:text-4xl">“Committed to maintaining the highest standards of medical ethics and professional conduct. Every patient inquiry is handled with confidentiality and care.”</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
