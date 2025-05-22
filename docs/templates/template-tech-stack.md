# Template: Tech Stack & Configuration

This document outlines the recommended libraries, tools, and configurations for web, mobile, and backend development, with a focus on testing and CI/CD.

---

## Library Stack & Configuration

| Layer                 | Web                                                                                                                                                                                                                                          | Mobile                                                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Unit / Component**  | **Vitest + React Testing Library** – lightning‑fast, Jest‑compatible ([medium.com](https://medium.com/%40andrewjeremy12345/the-secret-sauce-to-lightning-fast-react-tests-vitest-react-testing-library-e96be5c04b92?utm_source=chatgpt.com)) | **Vitest + React Native Testing Library**                                                                                                                                                           | |
| **Integration**       | Vitest + Firebase Emulator Suite ([firebase.google.com](https://firebase.google.com/docs/emulator-suite?utm_source=chatgpt.com))                                                                                                             | Same, plus mocks for camera/IAP/photos                                                                                                                                                              |
| **E2E**               | **Playwright** – official Next.js guide supports SSR, multi‑browser ([nextjs.org](https://nextjs.org/docs/pages/guides/testing/playwright?utm_source=chatgpt.com))                                                                           | **Detox** – battle‑tested on iOS simulators & Android emulators ([thoughtbot.com](https://thoughtbot.com/blog/set-up-detox-for-end-to-end-testing-in-your-react-native-app?utm_source=chatgpt.com)) |
| **State store**       | Zustand testing helpers ([zustand.docs.pmnd.rs](https://zustand.docs.pmnd.rs/guides/testing?utm_source=chatgpt.com))                                                                                                                         | idem                                                                                                                                                                                                |
| **Linting**           | ESLint + `plugin:jest/recommended` ([npmjs.com](https://www.npmjs.com/package/eslint-plugin-jest?utm_source=chatgpt.com))                                                                                                                    |                                                                                                                                                                                                     |
| **Firebase workflow** | Nx‑Firebase plugin for generators & deploy ([github.com](https://github.com/simondotm/nx-firebase?utm_source=chatgpt.com))                                                                                                                   |                                                                                                                                                                                                     |
| **CI**                | GitHub Actions matrix runners with Nx remote cache ([nx.dev](https://nx.dev/ci/intro/tutorials/github-actions?utm_source=chatgpt.com))                                                                                                       |                                                                                                                                                                                                     |

---

## Decision Log

*This section should be updated with a summary and link to a new ADR in `docs/technical/adr/` for every significant architectural or technology stack decision.*

| Date       | Decision Summary                                  | ADR Link                                      |
|------------|---------------------------------------------------|-----------------------------------------------|
| YYYY-MM-DD | Example: Adopt Nx for monorepo management         | [ADR-001](adr/ADR-001-example-nx.md)          |
|            |                                                   |                                               |

---

## Further Reading (Tech Stack)

*   Nx docs on caching & affected builds ([nx.dev](https://nx.dev/concepts/how-caching-works?utm_source=chatgpt.com))
*   Next.js Playwright tutorial ([nextjs.org](https://nextjs.org/docs/pages/guides/testing/playwright?utm_source=chatgpt.com))
*   Vitest + RTL article ([medium.com](https://medium.com/%40andrewjeremy12345/the-secret-sauce-to-lightning-fast-react-tests-vitest-react-testing-library-e96be5c04b92?utm_source=chatgpt.com))
*   Firebase Emulator Suite ([firebase.google.com](https://firebase.google.com/docs/emulator-suite?utm_source=chatgpt.com))
*   Detox primer ([thoughtbot.com](https://thoughtbot.com/blog/set-up-detox-for-end-to-end-testing-in-your-react-native-app?utm_source=chatgpt.com)) 