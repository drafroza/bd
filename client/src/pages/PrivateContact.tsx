import { ArrowLeft, Phone, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

export default function PrivateContact() {
  const [, navigate] = useLocation();
  const { session, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center text-primary">Loading secure area...</div>;
  if (!session) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-primary/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6"><Phone size={28} /></div>
            <h1 className="text-3xl font-bold text-primary mb-2">Private Contact</h1>
            <p className="text-muted-foreground text-sm mb-8">Your contact information is available only after secure login.</p>
            <div className="bg-secondary/20 p-6 rounded-xl border border-primary/10">
              <p className="text-sm font-semibold text-primary mb-3">Contact number</p>
              <a href="tel:+8801353187063" aria-label="Call +8801353187063" className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"><Phone size={18} /> +8801353187063</a>
            </div>
            <div className="mt-8 flex gap-2 text-xs text-muted-foreground"><ShieldCheck size={16} className="text-accent shrink-0" /> This page is protected by the authenticated session.</div>
            <Link href="/private" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:text-accent"><ArrowLeft size={16} /> Back to Private Area</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
