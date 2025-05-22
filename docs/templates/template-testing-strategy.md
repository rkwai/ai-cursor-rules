# Template: Testing Strategy

## Executive Summary

This playbook codifies a **hexagonal, test‑first architecture** for a React + Next.js web portal, an Expo React Native mobile app, and a Node/Firebase server—**all living in one Nx monorepo**. It prescribes a strict folder layout, favoured tools (Vitest, Playwright, Detox, Firebase Emulator), rigorous CI gates and ADR documentation. Follow it end‑to‑end and you will achieve ⩾ 80 % coverage, confident continuous releases and fast, cache‑driven builds.

---

## Guiding Principles

| Pillar                                        | Rationale                                                                                                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Hexagonal architecture (Ports & Adapters)** | Keeps domain logic framework‑agnostic and trivially unit‑testable ([dev.to](https://dev.to/dyarleniber/hexagonal-architecture-and-clean-architecture-with-examples-48oi?utm_source=chatgpt.com)) |
| **Module‑Federated micro‑frontends**          | Each feature ships independently yet re‑uses shared libs through Nx ([nx.dev](https://nx.dev/concepts/module-federation/micro-frontend-architecture?utm_source=chatgpt.com))                     |
| **Nx task‑graph caching**                     | Re‑executes only affected targets, slashing CI times ([nx.dev](https://nx.dev/concepts/how-caching-works?utm_source=chatgpt.com))                                                                |
| **E2E‑first testing pyramid**                 | Playwright / Detox guard user journeys; integration tests protect adapters; unit tests verify pure domain code                                                                                   |
| **80 % coverage gate**                        | GitHub Actions blocks PRs below threshold ([nx.dev](https://nx.dev/ci/intro/tutorials/github-actions?utm_source=chatgpt.com))                                                                    |
| **ADR trail (MADR)**                          | All architectural shifts recorded for posterity ([adr.github.io](https://adr.github.io/madr/?utm_source=chatgpt.com))                                                                            |

---

## Testing Pyramid & Approach

```
╭──────────────╮
│ 1‑3 E2E      │  ➜ critical user flows (Playwright / Detox)
├──────────────┤
│ ~5 Integration│  ➜ adapter ↔ domain contracts
├──────────────┤
│ 5‑10 Unit     │  ➜ pure domain functions
╰──────────────╯
```

*Write the Playwright or Detox spec ****before**** coding the feature; stub external calls with MSW or emulator.*

## Coverage & Quality Gates

*   `nx affected --target=test --parallel` on every PR; fails if statements < 80 % ([nx.dev](https://nx.dev/ci/intro/tutorials/github-actions?utm_source=chatgpt.com)).
*   ESLint forbids `any`, side‑effect imports, direct adapter access in UI.
*   Permit snapshot tests only for small UI primitives; follow Jest best practice ([jestjs.io](https://jestjs.io/docs/snapshot-testing?utm_source=chatgpt.com)).

---

## Implementation Blueprints (Testing Examples)

### Playwright Happy‑Path (Web E2E)

```ts
import { test, expect } from "@playwright/test";

test('checkout happy path', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /add to cart/i }).click();
  await page.getByRole('button', { name: /checkout/i }).click();
  await expect(page).toHaveURL(/\/order\/\d+/);
});
```

### Detox Flow (Mobile E2E)

```ts
describe('Login flow', () => {
  beforeAll(async () => await device.launchApp());
  it('signs in with Google', async () => {
    await element(by.id('login-google')).tap();
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
```

---

## Strict Rules for Testing & Quality

*   Snapshots ≤ 50 KB or banned.
*   Every bug fix starts with a failing test.

---

## Refactoring Legacy Code (Testing Considerations)

*   Wrap existing REST calls with adapters, write high‑level E2E tests to freeze behaviour, then migrate slice‑by‑slice into `libs/core`.
*   Incrementally enable strict TypeScript flags (`strictNullChecks`, `noImplicitAny`).
*   Replace Jest with Vitest for faster feedback ([dev.to](https://dev.to/thejaredwilcurt/vitest-vs-jest-benchmarks-on-a-5-year-old-real-work-spa-4mf1?utm_source=chatgpt.com)).

---

## Further Reading (Testing)

*   Next.js Playwright tutorial ([nextjs.org](https://nextjs.org/docs/pages/guides/testing/playwright?utm_source=chatgpt.com))
*   Vitest + RTL article ([medium.com](https://medium.com/%40andrewjeremy12345/the-secret-sauce-to-lightning-fast-react-tests-vitest-react-testing-library-e96be5c04b92?utm_source=chatgpt.com))
*   Firebase Emulator Suite ([firebase.google.com](https://firebase.google.com/docs/emulator-suite?utm_source=chatgpt.com))
*   Detox primer ([thoughtbot.com](https://thoughtbot.com/blog/set-up-detox-for-end-to-end-testing-in-your-react-native-app?utm_source=chatgpt.com)) 