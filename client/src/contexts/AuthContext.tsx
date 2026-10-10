import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

type AuthContextValue = {
  session: Session | null;
  loading: boolean;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  requestPasswordReset: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) {
        setSession(data.session);
        setLoading(false);
      }
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession);
      setLoading(false);
      // Supabase returns recovery tokens in the URL fragment. This app also uses
      // the fragment for hash routing, so navigate only after the SDK consumes them.
      if (event === 'PASSWORD_RECOVERY') {
        window.location.hash = '#/reset-password';
      }
    });

    return () => {
      mounted = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    session,
    loading,
    configured: isSupabaseConfigured,
    signIn: async (email, password) => {
      if (!supabase) {
        return { error: 'Secure login is not configured yet. Add the Supabase environment variables.' };
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error?.message ?? null };
    },
    requestPasswordReset: async (email) => {
      if (!supabase) {
        return { error: 'Secure login is not configured yet. Add the Supabase environment variables.' };
      }
      // Keep the callback at the origin root: Supabase places auth tokens in the
      // fragment, which would otherwise collide with the app's hash-based route.
      const redirectTo = `${window.location.origin}/`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
      return { error: error?.message ?? null };
    },
    updatePassword: async (password) => {
      if (!supabase) {
        return { error: 'Secure login is not configured yet. Add the Supabase environment variables.' };
      }
      const { error } = await supabase.auth.updateUser({ password });
      return { error: error?.message ?? null };
    },
    signOut: async () => {
      if (supabase) await supabase.auth.signOut();
    },
  }), [loading, session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
