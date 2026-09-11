import { FormEvent, useState } from 'react';
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Loader2, LogIn, ShieldCheck, MailCheck } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [, navigate] = useLocation();
  const { signIn, requestPasswordReset, configured, loading, session } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  if (!loading && session) {
    navigate('/private');
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setNotice('');
    setSubmitting(true);
    const result = resetMode
      ? await requestPasswordReset(email.trim())
      : await signIn(email.trim(), password);
    setSubmitting(false);
    if (result.error) setError(result.error);
    else if (resetMode) setNotice('If this email belongs to an authorized account, a password setup link has been sent. Check your inbox.');
    else navigate('/private');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-md">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-primary/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6"><LockKeyhole size={28} /></div>
            <h1 className="text-3xl font-bold text-primary mb-2">{resetMode ? 'Set Password' : 'Secure Login'}</h1>
            <p className="text-muted-foreground text-sm mb-8">{resetMode ? 'We will email a secure password setup link to your authorized account.' : 'This private area is only available to authorized users.'}</p>

            {!configured ? (
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">Secure login is not connected yet. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to the deployment environment.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2"><label htmlFor="login-email" className="text-sm font-semibold text-primary">Email address</label><input id="login-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10" /></div>
                {!resetMode && <div className="space-y-2"><label htmlFor="login-password" className="text-sm font-semibold text-primary">Password</label><div className="relative"><input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required className="w-full px-4 py-3 pr-12 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>}
                {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
                {notice && <p role="status" className="text-sm text-green-700 flex gap-2"><MailCheck size={16} /> {notice}</p>}
                <button type="submit" disabled={submitting} className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70">{submitting ? <Loader2 size={18} className="animate-spin" /> : resetMode ? <MailCheck size={18} /> : <LogIn size={18} />}{submitting ? 'Please wait...' : resetMode ? 'Send setup link' : 'Login'}</button>
                <button type="button" onClick={() => { setResetMode((mode) => !mode); setError(''); setNotice(''); }} className="w-full text-sm text-primary hover:text-accent transition-colors">{resetMode ? 'Back to Login' : 'Forgot password? Set a new one'}</button>
              </form>
            )}

            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck size={16} className="text-accent" /> Password is handled by Supabase Auth, not stored in this website.</div>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:text-accent"><ArrowLeft size={16} /> Back to Contact</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
