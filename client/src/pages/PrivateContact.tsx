import { useMemo, useState } from 'react';
import { ArrowLeft, Phone, Search, ShieldCheck, UserRound } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const contacts = [{ name: 'Johurul Haque', phone: '+8801353187063' }];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function levenshtein(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const current = row[j];
      row[j] = a[i - 1] === b[j - 1]
        ? previous
        : Math.min(previous + 1, row[j - 1] + 1, current + 1);
      previous = current;
    }
  }
  return row[b.length];
}

function isCloseNameMatch(query: string, name: string) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return true;
  const normalizedName = normalize(name);
  if (normalizedName.includes(normalizedQuery)) return true;
  return normalizedName.split(/(?=[A-Z])/i).some((part) => {
    const distance = levenshtein(normalizedQuery, part);
    return distance <= Math.max(2, Math.floor(part.length * 0.35));
  }) || levenshtein(normalizedQuery, normalizedName) <= Math.max(2, Math.floor(normalizedName.length * 0.25));
}

export default function PrivateContact() {
  const [, navigate] = useLocation();
  const { session, loading } = useAuth();
  const [query, setQuery] = useState('');

  const visibleContacts = useMemo(() => contacts.filter((contact) => isCloseNameMatch(query, contact.name)), [query]);

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
            <p className="text-muted-foreground text-sm mb-8">Search by name to find your protected contact details.</p>
            <div className="relative mb-6"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, e.g. Johurul Haque" aria-label="Search contacts by name" className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-secondary/10" /></div>
            <div className="space-y-4">
              {visibleContacts.length > 0 ? visibleContacts.map((contact) => (
                <div key={contact.phone} className="bg-secondary/20 p-6 rounded-xl border border-primary/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent"><UserRound size={20} /></div><div><p className="text-sm text-muted-foreground">Name</p><p className="font-bold text-primary">{contact.name}</p></div></div>
                  <a href={`tel:${contact.phone}`} aria-label={`Call ${contact.name} ${contact.phone}`} className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"><Phone size={18} /> {contact.phone}</a>
                </div>
              )) : <p className="text-sm text-muted-foreground p-4 bg-secondary/20 rounded-lg">No close name match found.</p>}
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
