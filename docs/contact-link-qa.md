# Contact Link QA

The exact phone number `+8801353187063` and telephone URL `tel:+8801353187063` were reviewed in the live preview after the International Typographic Style update.

| View | Route | Header | Contact content | Footer | Result |
|---|---|---|---|---|---|
| Desktop browser | `/#/` | Visible link with accessible label `Call +8801353187063` | Not applicable | Visible link with the same accessible label | Passed |
| Desktop browser | `/#/contact` | Visible link with accessible label `Call +8801353187063` | Visible `Telephone` link with the exact number and URL | Visible link with the same accessible label | Passed |
| Mobile preview | `/` at 390px width | Compact phone link visible beside the menu control | Not applicable | Visible phone link in the footer | Passed |
| Mobile preview | `/#/contact` at 390px width | Compact phone link visible beside the menu control | Visible telephone link in the Contact section | Visible phone link in the footer | Passed |

The browser accessibility tree exposed the header and footer links as anchors with the accessible label `Call +8801353187063`. On the Contact route, the browser also exposed the dedicated telephone row as an anchor with the same label. The links use visible focus outlines and the mobile navigation control exposes `aria-expanded` and `aria-controls` state.

The responsive visual review showed the phone link remains available in the mobile header without opening the navigation menu, while the Contact page and footer retain their own telephone links. No WhatsApp-specific interface or link was introduced.

A real headless Chromium session was run at `390x844` for both hash routes. The rendered home route contained four `href="tel:+8801353187063"` anchors and four matching `aria-label="Call +8801353187063"` labels: one in the mobile header, one in the footer, and the corresponding rendered shared-layout instances. The rendered Contact route contained five telephone anchors and five matching labels, including the dedicated Contact-section telephone row plus the shared header/footer links. Screenshots captured during this run are `/home/ubuntu/mobile-home.png` and `/home/ubuntu/mobile-contact.png`.

Validation commands completed successfully in the active web workspace and the Git-backed source tree:

```text
pnpm test
pnpm check
pnpm build
```

The Git-backed source tree produced four passing contact-link tests, a passing TypeScript check, and a successful Vite production build. The build emitted only the existing bundle-size advisory for chunks over 500 kB.
