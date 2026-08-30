import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const clientRoot = dirname(fileURLToPath(import.meta.url));
const readClientFile = (relativePath: string) =>
  readFileSync(join(clientRoot, relativePath), 'utf8');

describe('Contact-only phone update', () => {
  it('keeps the restored Header and Footer free of phone UI', () => {
    const header = readClientFile('src/components/Header.tsx');
    const footer = readClientFile('src/components/Footer.tsx');

    expect(header).not.toContain('tel:+8801353187063');
    expect(header).not.toContain('+8801353187063');
    expect(footer).not.toContain('tel:+8801353187063');
    expect(footer).not.toContain('+8801353187063');
  });

  it('keeps exactly one accessible telephone link on the restored Contact page', () => {
    const contact = readClientFile('src/pages/Contact.tsx');

    expect(contact.match(/href="tel:\+8801353187063"/g)).toHaveLength(1);
    expect(contact).toContain('+8801353187063');
    expect(contact).toContain('aria-label="Call +8801353187063"');
  });

  it('does not introduce WhatsApp-specific UI', () => {
    const siteFiles = [
      'src/components/Header.tsx',
      'src/components/Footer.tsx',
      'src/pages/Contact.tsx',
    ]
      .map(readClientFile)
      .join('\n')
      .toLowerCase();

    expect(siteFiles).not.toContain('whatsapp');
  });
});
