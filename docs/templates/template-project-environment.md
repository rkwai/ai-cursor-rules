# Template: Project Environment & CI/CD

This document covers the setup for the development environment, including useful commands and the CI/CD pipeline configuration.

---

## Onboarding Cheat Sheet (Development Commands)

These commands are typically run using `pnpm` (or your chosen package manager) in an Nx monorepo context.

| Command                          | Purpose                         |
| -------------------------------- | ------------------------------- |
| `pnpm nx run <app>:serve`        | Start web or mobile dev server  |
| `pnpm test`                      | Vitest watch mode               |
| `pnpm e2e:web`                   | Playwright run                  |
| `pnpm e2e:mobile`                | Detox default simulator         |
| `pnpm affected:test --base=main` | Run tests only for changed libs |

---

## CI/CD Pipeline (Example: GitHub Actions)

This is an example configuration for a GitHub Actions workflow that lints, tests, and builds affected projects within an Nx monorepo, leveraging Nx's remote caching.

```yaml
name: ci

on: [push, pull_request]

jobs:
  test:
    strategy:
      matrix:
        platform: [ubuntu-latest, macos-latest]
    runs-on: ${{ matrix.platform }}
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install
      - run: nx affected --target=lint,test,build --parallel
      - run: nx run-many -t e2e --all  # Playwright + Detox
```

> **Tip:** Nx's remote cache re‑uses previous CI artefacts, cutting re‑run times dramatically ([nx.dev](https://nx.dev/concepts/how-caching-works?utm_source=chatgpt.com)).

---

## Further Reading (Environment & CI/CD)

*   Nx docs on caching & affected builds ([nx.dev](https://nx.dev/concepts/how-caching-works?utm_source=chatgpt.com))
*   Nx CI with GitHub Actions ([nx.dev](https://nx.dev/ci/intro/tutorials/github-actions?utm_source=chatgpt.com)) 