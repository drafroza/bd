import { useState, useRef } from 'react';
import { Mail, MapPin, MessageCircle, Send, Heart, ExternalLink, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    // EmailJS Configuration
    const SERVICE_ID = 'Dr. Afroza';
    const TEMPLATE_ID = 'template_bepn5rr';
    const PUBLIC_KEY = 'yFmI7r18v10dPWi2H';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((err) => {
        setIsSending(false);
        setError('ইমেইল পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            MBBS, FCPS Part-I | BMDC Reg. No: 142636 | Jhalakathi Sadar, Jhalakathi, Bangladesh
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">

            {/* Left Column: Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-foreground mb-8 leading-relaxed">
                  I am dedicated to providing high-quality healthcare and maintaining professional communication. 
                  Feel free to reach out through any of the following channels.
                </p>
              </div>

              {/* Telegram Card */}
              <div className="bg-secondary/30 p-8 rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#229ed9]/10 flex items-center justify-center text-[#229ed9] group-hover:bg-[#229ed9] group-hover:text-white transition-all duration-300">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Telegram</h3>
                </div>
                <p className="text-foreground/80 mb-6">
                  For the fastest response, please message me on Telegram. I typically reply within 1 hour during business hours.
                </p>
                <a 
                  href="https://t.me/Dr_Afroza_Akter_Nishy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#229ed9] text-white font-bold rounded-lg hover:bg-[#1a8bc2] transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Open Telegram Chat <ExternalLink size={16} />
                </a>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  ⚡ Average response time: 1 hour
                </p>
              </div>

              {/* Email & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all">
                  <Mail className="text-accent mb-4" size={24} />
                  <h4 className="font-bold text-primary mb-2">Email</h4>
                  <a href="mailto:drafroza99@gmail.com" className="text-foreground hover:text-accent transition-colors break-all text-sm">
                    drafroza99@gmail.com
                  </a>
                </div>
                <div className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm hover:shadow-md transition-all">
                  <MapPin className="text-accent mb-4" size={24} />
                  <h4 className="font-bold text-primary mb-2">Location</h4>
                  <p className="text-foreground text-sm">
                    Jhalakathi Sadar, Jhalakathi, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Feedback Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-primary/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
              <h2 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                <Send size={20} className="text-accent" /> Send Feedback
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                Share your thoughts, suggestions, or professional inquiries. Your feedback is valuable.
              </p>

              {isSent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                  <CheckCircle size={20} />
                  <span>আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-primary">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-primary">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Commitment Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto px-4">
            <Heart className="text-accent mx-auto mb-6 fill-accent" size={32} />
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Commitment</h2>
            <p className="text-lg text-foreground/80 italic leading-relaxed">
              "Committed to maintaining the highest standards of medical ethics and professional conduct as per BMDC guidelines. Every patient inquiry is handled with the utmost confidentiality and care."
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <div className="text-center pb-2 opacity-20">
        <p className="text-[8px] text-muted-foreground uppercase tracking-widest">Build Version : ghpwt6dpkxi5x3mpvv2l4n73nyhk2z3n</p>
      </div>
    </div>
  );
}
