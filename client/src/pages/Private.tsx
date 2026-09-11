import { LockKeyhole, LogOut, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

export default function Private() {
  const [, navigate] = useLocation();
  const { session, loading, signOut } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center text-primary">Loading secure area...</div>;
  if (!session) {
    navigate('/login');
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-primary/10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6"><LockKeyhole size={28} /></div>
                <h1 className="text-3xl font-bold text-primary mb-2">Private Area</h1>
                <p className="text-muted-foreground">You are securely signed in as {session.user.email}.</p>
              </div>
              <button onClick={handleSignOut} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/10 text-primary hover:bg-secondary/40"><LogOut size={16} /> Logout</button>
            </div>
            <div className="mt-10 p-5 rounded-xl bg-secondary/20 border border-primary/10 flex gap-3"><ShieldCheck className="text-accent shrink-0" size={22} /><p className="text-sm text-foreground/80">This page is rendered only after Supabase confirms a valid authenticated session. Keep any future private records behind Supabase Row Level Security policies as well.</p></div>
            <Link href="/reset-password" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90">Change password</Link>
            <Link href="/private-contact" className="mt-6 ml-3 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary/10 text-primary text-sm font-semibold hover:bg-secondary/40">Private contact</Link>
            <Link href="/contact" className="mt-8 inline-block text-sm text-primary hover:text-accent">Return to Contact</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
