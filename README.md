# How to Use AI Cursor Rules CLI

This guide explains how to use the `ai-cursor-rules` CLI tool to manage and deploy your standardized Cursor AI rule configurations and associated documentation across projects. These rules cover a wide range of topics including **technical best practices, project execution, product discovery, strategic alignment, and quality control**.

## 1. Project Structure

Ensure your package containing the rules and docs adheres to the following structure:

```
my-cursor-rules/
├── rules/            # Directory for your .mdc rule files
│   ├── technical-general.mdc
│   ├── technical-react.mdc
│   ├── technical-git.mdc
│   ├── execution-planning.mdc
│   ├── discovery-prd.mdc
│   ├── strategy-kpis.mdc
│   ├── quality-control.mdc
│   └── ... (many other rule files covering different areas)
├── docs/             # Directory for documentation files copied to target projects
│   ├── strategy/         # Strategic framework documents (project-specific)
│   ├── discovery/        # Product discovery and definition guides (project-specific)
│   ├── execution/        # Agile execution and team process docs (project-specific)
│   ├── technical/        # Technical guidelines (project-specific, to be filled using templates)
│   │   ├── project-structure.md    # (placeholder for project's specific structure)
│   │   ├── tech-stack.md           # (placeholder for project's specific tech stack & ADR log)
│   │   ├── testing-strategy.md     # (placeholder for project's specific testing strategy)
│   │   ├── project-environment.md  # (placeholder for project's specific environment setup)
│   │   └── adr/                    # (for project's Architectural Decision Records)
│   ├── templates/        # Opinionated templates to guide technical documentation:
│   │   ├── template-project-structure.md
│   │   ├── template-tech-stack.md
│   │   ├── template-testing-strategy.md
│   │   └── template-project-environment.md
│   └── usage.md          # Example: How to use/interpret the provided docs & rules
├── cli.js            # Your CLI script
└── package.json      # Node.js package definition
```

## 2. Linking for Local Development (Optional but Recommended)

Before publishing, test your CLI locally:

1.  Navigate to your package directory (`ai-cursor-rules/`) in your terminal.
2.  Run the following command:
    ```bash
    pnpm install
    pnpm link --global
    ```

This creates a global symbolic link to your package, allowing you to run the `ai-cursor-rules` command anywhere on your system as if it were installed globally.

## 3. Testing

Test the CLI in a different project directory:

1.  Navigate to a separate test project directory (or create a temporary one).
2.  Run your command:
    ```bash
    ai-cursor-rules
    ```

This command should:
*   Create a `.cursor/rules/` directory (if one doesn't already exist) within that test project and copy all your `.mdc` rule files into it.
*   Create a `docs/` directory (if one doesn't already exist) in the root of the test project and copy your documentation files into it.

## 4. Publishing to NPM (Optional)

To share your package on NPM (publicly or privately):

1.  **Ensure you have an NPM account** and are logged in via the CLI (`npm login`).
2.  **Verify your package name** in `package.json` is unique on NPM.
3.  **Commit your changes** to version control.
4.  Run the publish command:
    ```bash
    pnpm publish
    ```
    *(Note: Add `--access public` if publishing a scoped package like `@your-npm-username/ai-cursor-rules` publicly for the first time).*

## 5. Installing and Using After Publishing

Once published (or linked locally), users can install the CLI globally:

```bash
pnpm add -g ai-cursor-rules
```

Then, run it within any project directory to apply the rules and copy the documentation:

```bash
ai-cursor-rules
```

This provides a convenient way to quickly set up any project with your comprehensive suite of standardized Cursor AI rules and their accompanying documentation.

## Guiding Philosophy

This repository and the practices it represents are built on a philosophy centered around creating high-performing, sustainable teams that deliver exceptional value. We believe this is achieved through:

People First Culture: Recognizing that teams are composed of individuals with lives, passions, and the desire for growth. We prioritize building trust through consistent action, showing care, fostering psychological safety, and understanding that leadership's primary role is to support and grow team members. Culture is shaped by deliberate leadership actions, not just words.

Clarity and Alignment: Driving execution through extreme clarity on Purpose (Why), Strategy (How), and Roadmap (What). This involves leveraging frameworks like OKRs, KPIs, and North Star Metrics, ensuring shared understanding through effective communication, and conducting purposeful meetings (like Roadmap/Backlog Grooming, Sprint Planning, Kick-offs) with defined outcomes and essential participants.

Empowerment within Guardrails: Practicing "Inversion of Control" or Servant Leadership. We provide clear vision, strategic direction, and goals, then empower teams closest to the work to determine the best way to execute. Autonomy thrives when coupled with clear boundaries and objectives.

Structured & Efficient Execution: Implementing disciplined processes that remove friction and protect team focus. This includes well-defined workflows (Discovery > Execution), systematic approaches (like Work-centric Design, Bug Triage), effective coordination, leveraging tooling as a support for process, and embracing continuous improvement through action-oriented Retrospectives at both team and leadership levels.

Holistic Product Development: Fostering a strong, collaborative triad between Product (owning the Value/Capabilities), Design (owning the Usability/Experience), and Engineering (owning the Feasibility/Quality). Success requires understanding the user deeply, defining problems rigorously before jumping to solutions, and ensuring work delivers tangible impact.

Ultimately, this approach aims to create an environment where talented individuals, aligned on purpose and supported by effective processes, can unlock their potential and consistently deliver outstanding results. It's an ongoing journey of refinement and learning.
