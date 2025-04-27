# Template for mono repo project structure with tests and docs included

my-feature-app-monorepo/
├── apps/                     # Contains the runnable applications (the deployables)
│   ├── mobile/               # React Native frontend application
│   │   ├── android/
│   │   ├── ios/
│   │   ├── src/
│   │   │   ├── features/     # <<< Organized by Feature >>>
│   │   │   │   ├── auth/
│   │   │   │   │   ├── components/     # + Unit Tests
│   │   │   │   │   ├── screens/        # + Unit Tests
│   │   │   │   │   ├── hooks/          # + Unit Tests
│   │   │   │   │   ├── state/
│   │   │   │   │   └── docs/           # <<< Feature-specific Docs >>>
│   │   │   │   │       ├── auth-prd.md
│   │   │   │   │       └── auth-tasks.md
│   │   │   │   └── ... (other features)
│   │   │   ├── core/         # Core app elements + Unit Tests
│   │   │   ├── config/
│   │   │   ├── assets/
│   │   │   └── App.tsx
│   │   ├── tests/            # App-specific integration tests
│   │   │   └── integration/
│   │   ├── app.json
│   │   ├── index.js
│   │   └── package.json
│   │
│   ├── web/                  # React/Vue/Angular web frontend application
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── features/     # <<< Organized by Feature >>>
│   │   │   │   ├── auth/
│   │   │   │   │   ├── components/     # + Unit Tests
│   │   │   │   │   ├── pages/          # + Unit Tests
│   │   │   │   │   ├── hooks/
│   │   │   │   │   ├── state/
│   │   │   │   │   └── features.md     # <<< Feature-specific Docs (alternative placement) >>>
│   │   │   │   └── ... (other features)
│   │   │   ├── core/         # Core app elements + Unit Tests
│   │   │   ├── config/
│   │   │   ├── assets/
│   │   │   └── main.tsx
│   │   ├── tests/            # App-specific integration tests
│   │   │   └── integration/
│   │   └── package.json
│   │
│   └── server/               # Node.js/Express backend application
│       ├── src/
│       │   ├── features/     # <<< Organized by Feature >>>
│       │   │   ├── auth/
│       │   │   │   ├── auth.controller.ts  # + Unit Tests
│       │   │   │   ├── auth.service.ts     # + Unit Tests
│       │   │   │   ├── auth.routes.ts
│       │   │   │   ├── auth.dto.ts
│       │   │   │   └── README.md         # <<< Feature-specific Docs (overview) >>>
│       │   │   └── ... (other features)
│       │   ├── core/         # Core backend setup + Unit Tests
│       │   ├── config/
│       │   └── server.ts
│       ├── tests/            # App-specific integration tests
│       │   └── integration/
│       └── package.json
│
├── packages/                 # Shared code/libraries used across apps/other packages
│   ├── shared-types/         # + Unit Tests
│   ├── validation/           # + Unit Tests
│   └── ... (other shared packages)
│
├── tests/                    # <<< Top-level End-to-End (E2E) tests >>>
│   └── e2e/
│       ├── cypress/          # Or Playwright, Detox etc.
│       ├── fixtures/
│       └── config/
│
├── docs/                     # <<< Project-level Documentation >>>
│   ├── architecture.md       # Overall system architecture decisions
│   ├── prd.md                # Overall Product Requirements Document
│   ├── features.md           # High-level overview of all features
│   ├── tasks.md              # High-level project tasks/roadmap
│   └── adr/                  # Architecture Decision Records
│       └── 001-use-monorepo.md
│
├── tools/
│   └── scripts/
│
├── .env.example
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── package.json              # Root package.json
├── tsconfig.base.json
├── tsconfig.json
├── nx.json                   # Or lerna.json, turbo.json, etc.
└── README.md                 # Root README (Setup, Commands, Overview)