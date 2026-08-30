import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const readClientFile = (relativePath: string) =>
  readFileSync(join(process.cwd(), relativePath), 'utf8');

describe('site contact details', () => {
  it('keeps the exact telephone link in the shared header and footer', () => {
    const header = readClientFile('client/src/components/Header.tsx');
    const footer = readClientFile('client/src/components/Footer.tsx');

    expect(header).toContain('href="tel:+8801353187063"');
    expect(header).toContain('+8801353187063');
    expect(footer).toContain('href="tel:+8801353187063"');
    expect(footer).toContain('+8801353187063');
  });

  it('keeps the exact telephone link on the Contact page', () => {
    const contact = readClientFile('client/src/pages/Contact.tsx');

    expect(contact).toContain("const phoneHref = 'tel:+8801353187063';");
    expect(contact).toContain("const phoneNumber = '+8801353187063';");
    expect(contact).toContain('href={phoneHref}');
  });

  it('does not introduce WhatsApp-specific UI', () => {
    const sharedAndContact = [
      'client/src/components/Header.tsx',
      'client/src/components/Footer.tsx',
      'client/src/pages/Contact.tsx',
    ]
      .map(readClientFile)
      .join('\n')
      .toLowerCase();

    expect(sharedAndContact).not.toContain('whatsapp');
  });

  it('exposes keyboard and screen-reader affordances for the contact links', () => {
    const header = readClientFile('client/src/components/Header.tsx');
    const footer = readClientFile('client/src/components/Footer.tsx');
    const contact = readClientFile('client/src/pages/Contact.tsx');

    expect(header).toContain('aria-label="Call +8801353187063"');
    expect(header).toContain('aria-expanded={isOpen}');
    expect(header).toContain('focus-visible:outline');
    expect(footer).toContain('aria-label="Call +8801353187063"');
    expect(footer).toContain('focus-visible:outline');
    expect(contact).toContain('aria-label={`Call ${phoneNumber}`}');
    expect(contact).toContain('focus-visible:outline');
  });
});
