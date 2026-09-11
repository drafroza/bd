import { FormEvent, useState } from 'react';
import { ArrowLeft, Eye, EyeOff, KeyRound, Loader2, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

export default function ResetPassword() {
  const [, navigate] = useLocation();
  const { configured, session, loading, updatePassword } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');
    if (password.length < 12) {
      setError('Use a password with at least 12 characters.');
      return;
    }
    if (password !== confirmation) {
      setError('Passwords do not match.');
      return;
    }
    setSubmitting(true);
    const result = await updatePassword(password);
    setSubmitting(false);
    if (result.error) setError(result.error);
    else {
      setMessage('Password updated successfully. Your private area is ready.');
      setPassword('');
      setConfirmation('');
      setTimeout(() => navigate('/private'), 1200);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container max-w-md">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-primary/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6"><KeyRound size={28} /></div>
            <h1 className="text-3xl font-bold text-primary mb-2">Set New Password</h1>
            <p className="text-muted-foreground text-sm mb-8">Choose a strong password for your private area.</p>

            {!configured ? (
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">Secure login is not configured yet.</div>
            ) : loading ? (
              <div className="text-sm text-muted-foreground">Checking secure recovery session...</div>
            ) : !session ? (
              <div className="space-y-4"><p className="text-sm text-red-600">This password setup link is missing or has expired. Request a new link from the Login page.</p><Link href="/login" className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent"><ArrowLeft size={16} /> Back to Login</Link></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2"><label htmlFor="new-password" className="text-sm font-semibold text-primary">New password</label><div className="relative"><input id="new-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={12} value={password} onChange={(event) => setPassword(event.target.value)} required className="w-full px-4 py-3 pr-12 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div><p className="text-xs text-muted-foreground">At least 12 characters; use a unique passphrase.</p></div>
                <div className="space-y-2"><label htmlFor="confirm-password" className="text-sm font-semibold text-primary">Confirm password</label><input id="confirm-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={12} value={confirmation} onChange={(event) => setConfirmation(event.target.value)} required className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10" /></div>
                {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
                {message && <p role="status" className="text-sm text-green-700">{message}</p>}
                <button type="submit" disabled={submitting} className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70">{submitting ? <Loader2 size={18} className="animate-spin" /> : <KeyRound size={18} />}{submitting ? 'Saving...' : 'Set password'}</button>
              </form>
            )}
            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck size={16} className="text-accent" /> Password is handled by Supabase Auth, not stored in this website.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
