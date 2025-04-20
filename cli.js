#!/usr/bin/env node

// Import necessary modules
import fs from 'fs-extra'; // Use fs-extra for easier directory/file handling
import path from 'path'; // For resolving paths
import { fileURLToPath } from 'url'; // To get the directory name in ES modules

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the source directory (where rules are stored in the package)
// Assumes 'rules' directory is at the same level as cli.js
const sourceRulesDir = path.resolve(__dirname, 'rules');

// Define the target directory (where rules should be copied in the user's project)
const targetRulesDir = path.resolve(process.cwd(), '.cursor/rules');

/**
 * Copies the rule files from the package source to the target project directory.
 */
async function copyRules() {
  try {
    // Check if the source directory exists within the package
    const sourceExists = await fs.pathExists(sourceRulesDir);
    if (!sourceExists) {
      console.error(`Error: Source rules directory not found at ${sourceRulesDir}`);
      console.error("This might indicate an issue with the package installation.");
      process.exit(1); // Exit with an error code
    }

    // Ensure the target directory exists, creating it if necessary
    await fs.ensureDir(targetRulesDir);

    // Copy the contents of the source directory to the target directory
    // The 'overwrite: true' option will replace existing files with the same name
    await fs.copy(sourceRulesDir, targetRulesDir, { overwrite: true });

    console.log(`Successfully copied Cursor rules to: ${targetRulesDir}`);
    console.log("You can now customize the rules in that directory as needed.");

  } catch (err) {
    console.error("Error initializing Cursor rules:", err);
    process.exit(1); // Exit with an error code
  }
}

// --- CLI Execution ---
// You could add argument parsing here (e.g., using yargs) for more commands,
// but for a simple init tool, just running the copy function is sufficient.
console.log("Initializing Cursor rules...");
copyRules(); // Run the main function
