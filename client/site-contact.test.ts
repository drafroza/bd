import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const clientRoot = dirname(fileURLToPath(import.meta.url));
const readClientFile = (relativePath: string) =>
  readFileSync(join(clientRoot, relativePath), 'utf8');

describe('Public contact and auth removal', () => {
  it('uses the requested phone number on the Contact page and floating call button', () => {
    const contact = readClientFile('src/pages/Contact.tsx');
    const footer = readClientFile('src/components/Footer.tsx');

    expect(contact.match(/href="tel:\+8801307085154"/g)).toHaveLength(1);
    expect(contact).toContain('+8801307085154');
    expect(contact).toContain('aria-label="Call +8801307085154"');
    expect(footer).toContain('href="tel:+8801307085154"');
    expect(footer).toContain('title="Call +8801307085154"');
    expect(contact).not.toContain('+8801353187063');
    expect(footer).not.toContain('+8801353187063');
  });

  it('provides floating Telegram, phone, and email actions using the existing public email', () => {
    const footer = readClientFile('src/components/Footer.tsx');

    expect(footer).toContain('https://t.me/Dr_Afroza_Akter_Nishy');
    expect(footer).toContain('href="tel:+8801307085154"');
    expect(footer).toContain('href="mailto:drafroza99@gmail.com"');
    expect(footer).toContain('aria-label="Email drafroza99@gmail.com"');
  });

  it('keeps Login and private routes out of the public navigation and router', () => {
    const footer = readClientFile('src/components/Footer.tsx');
    const contact = readClientFile('src/pages/Contact.tsx');
    const app = readClientFile('src/App.tsx');

    expect(footer).not.toContain('#/login');
    expect(contact).not.toContain('/login');
    expect(app).not.toContain('/login');
    expect(app).not.toContain('/private');
    expect(app).not.toContain('/reset-password');
    expect(app).not.toContain('AuthProvider');
  });

  it('removes the Supabase client dependency and auth implementation files', () => {
    const rootPackage = JSON.parse(readFileSync(join(clientRoot, '../package.json'), 'utf8'));

    expect(rootPackage.dependencies).not.toHaveProperty('@supabase/supabase-js');
    expect(existsSync(join(clientRoot, 'src/contexts/AuthContext.tsx'))).toBe(false);
    expect(existsSync(join(clientRoot, 'src/lib/supabase.ts'))).toBe(false);
    expect(existsSync(join(clientRoot, 'src/pages/Login.tsx'))).toBe(false);
    expect(existsSync(join(clientRoot, 'src/pages/Private.tsx'))).toBe(false);
    expect(existsSync(join(clientRoot, 'src/pages/ResetPassword.tsx'))).toBe(false);
    expect(existsSync(join(clientRoot, 'src/pages/PrivateContact.tsx'))).toBe(false);
  });

  it('does not include the obsolete build-version banner on the Contact page', () => {
    expect(readClientFile('src/pages/Contact.tsx')).not.toContain('Build Version');
  });
});
