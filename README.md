# How to Use AI Cursor Rules CLI

This guide explains how to use the `ai-cursor-rules` CLI tool to manage and deploy your standardized Cursor AI rule configurations across projects.

## 1. Project Structure

Ensure your project containing the rules adheres to the following structure:

```
my-cursor-rules/
├── rules/
│   ├── general.mdc
│   ├── react.mdc
│   ├── web.mdc
│   ├── testing.mdc
│   ├── git.mdc
│   ├── security.mdc
│   └── ai_behavior.mdc
├── cli.js          # Your CLI script
└── package.json    # Node.js package definition
```

## 2. Linking for Local Development (Optional but Recommended)

Before publishing, test your CLI locally:

1.  Navigate to your package directory (`ai-cursor-rules/`) in your terminal.
2.  Run the following command:
    ```bash
    npm link
    ```

This creates a global symbolic link to your package, allowing you to run the `ai-cursor-rules` command anywhere on your system as if it were installed globally.

## 3. Testing

Test the CLI in a different project directory:

1.  Navigate to a separate test project directory (or create a temporary one).
2.  Run your command:
    ```bash
    ai-cursor-rules
    ```

This command should create a `.cursor/rules/` directory (if one doesn't already exist) within that test project and copy all your `.mdc` rule files into it.

## 4. Publishing to NPM (Optional)

To share your package on NPM (publicly or privately):

1.  **Ensure you have an NPM account** and are logged in via the CLI (`npm login`).
2.  **Verify your package name** in `package.json` is unique on NPM.
3.  **Commit your changes** to version control.
4.  Run the publish command:
    ```bash
    npm publish
    ```
    *(Note: Add `--access public` if publishing a scoped package like `@your-npm-username/ai-cursor-rules` publicly for the first time).*

## 5. Installing and Using After Publishing

Once published (or linked locally), users can install the CLI globally:

```bash
npm install -g ai-cursor-rules
```

Then, run it within any project directory to apply the rules:

```bash
ai-cursor-rules
```

This provides a convenient way to quickly set up any project with your standardized Cursor AI rules.