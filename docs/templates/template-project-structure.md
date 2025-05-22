# Template: Opinionated Project Structure (Nx Monorepo Example)

This template illustrates an opinionated project structure based on an Nx monorepo, incorporating principles like hexagonal architecture, domain-driven design for the backend, and feature-sliced organization for frontends. It aligns with the concepts discussed in `template-testing-strategy.md` and `template-tech-stack.md`.

Use this as a reference or starting point if your project adopts a similar architecture. The actual, project-specific structure should be documented in `docs/technical/project-structure.md`.

---

## Folder & Project Layout (Nx Example)

```text
repo-root/
├─ apps/
│  ├─ web-portal/            # Next.js host (SSR + shell)
│  ├─ mobile-app/            # Expo React Native
│  ├─ mf-<feature>-remote/   # Micro‑frontend remotes (Module Federation)
│  ├─ api-server/            # 🚀 Node (Express/Nest) gateway – complex SSR & webhooks
│  └─ functions/             # 🚀 Firebase Cloud Functions – short‑lived tasks
├─ libs/
│  ├─ core/
│  │   ├─ domain/            # Entities, value objects, aggregates
│  │   ├─ application/       # Use‑cases, ports (interfaces)
│  │   └─ infrastructure/    # Adapters (REST, Firebase, RN modules)
│  ├─ ui/                    # Headless components & design tokens
│  ├─ state/                 # Zustand stores
│  ├─ testing/               # Test helpers, mocks, fixtures
│  └─ scripts/               # Nx generators & tooling
├── packages/                 # Shared code/libraries (alternative to libs or for more loosely coupled modules)
│   ├── shared-types/
│   │   └── ...
│   └── validation/
│       └── ...
├── tests/                    # Top-level End-to-End (E2E) tests
│   └── e2e/
│       ├── playwright/       # Example E2E tool for web
│       └── detox/            # Example E2E tool for mobile
└── docs/                     # Project-level Documentation (as copied by ai-cursor-rules)
    ├── strategy/             # Strategic planning and vision (populated by project team)
    │   ├── business-model.md
    │   ├── segment.md
    │   └── kpis.md
    ├── discovery/            # Product discovery and requirements (populated by project team)
    │   ├── prd.md
    │   ├── domains.md
    │   ├── features.md
    │   └── stories.md
    ├── execution/            # Project execution and tracking (populated by project team)
    │   ├── status.md
    │   ├── tasks.md
    │   └── ownership.md
    ├── technical/            # Technical documentation (project-specific, fill from templates)
    │   ├── project-environment.md  # Describes this project's env & CI/CD
    │   ├── project-structure.md    # Describes this project's structure & patterns (THIS IS THE TARGET DOC)
    │   ├── testing-strategy.md     # Describes this project's testing approach
    │   ├── tech-stack.md           # Describes this project's tech stack & ADR log
    │   └── adr/                    # Architectural Decision Records for this project
    │       └── ADR-001-example.md
    └── templates/              # Standard templates provided by ai-cursor-rules (these files)
        ├── template-project-environment.md
        ├── template-project-structure.md # (This file itself)
        ├── template-testing-strategy.md
        └── template-tech-stack.md
```

> **Why a dedicated server component?** (Example Rationale)
> Complex compliance endpoints, long‑running jobs and SSR might belong in a standalone Node service or Firebase Functions so they can scale, share domain ports and be tested in isolation. This decision should be documented in an ADR for the specific project.

---

This structure is an example. The specifics of how `libs/` are organized (e.g., by domain, by feature, by layer) or how `apps/` are structured internally will depend on the project's scale and team conventions. Always document your project's *actual* chosen structure in `docs/technical/project-structure.md`.
