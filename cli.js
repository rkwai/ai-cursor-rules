#!/usr/bin/env node

// Import necessary modules
import fs from 'fs-extra'; // Use fs-extra for easier directory/file handling
import path from 'path'; // For resolving paths
import { fileURLToPath } from 'url'; // To get the directory name in ES modules

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Source Directories (within the package) ---
const sourceRulesDir = path.resolve(__dirname, 'rules');
const sourceDocsDir = path.resolve(__dirname, 'docs'); // Added docs source

// --- Target Directories (in the user's project) ---
const targetBaseDir = path.resolve(process.cwd(), '.cursor');
const targetRulesDir = path.join(targetBaseDir, 'rules'); // Changed to use join
const targetDocsDir = path.resolve(process.cwd(), 'docs'); // Corrected: points to project root/docs

/**
 * Copies the rule and documentation files from the package source
 * to the target project directory (.cursor/rules and ./docs).
 */
async function syncAssets() { 
  try {
    // --- Ensure Base Target Dirs Exist ---
    console.log(`Ensuring rules target directory exists: ${targetRulesDir}`);
    await fs.ensureDir(targetRulesDir); 
    // Don't ensure targetDocsDir here, fs.copy will create it.
    
    // --- Copy Rules ---
    const sourceRulesExists = await fs.pathExists(sourceRulesDir);
    if (!sourceRulesExists) {
      // Make this a warning instead of error? Depends on if rules are optional
      console.warn(`Warning: Source rules directory not found at ${sourceRulesDir}. Skipping rules copy.`);
    } else {
      console.log(`Copying rules from ${sourceRulesDir} to ${targetRulesDir}...`);
      await fs.copy(sourceRulesDir, targetRulesDir, { overwrite: true });
      console.log(`Successfully copied Cursor rules to: ${targetRulesDir}`);
    }

    // --- Copy Docs ---
    const sourceDocsExists = await fs.pathExists(sourceDocsDir);
    if (!sourceDocsExists) {
      console.warn(`Warning: Source docs directory not found at ${sourceDocsDir}. Skipping docs copy.`);
    } else {
      console.log(`Copying documentation from ${sourceDocsDir} to ${targetDocsDir}...`);
      // No need for ensureDir for docs if copying the folder itself
      await fs.copy(sourceDocsDir, targetDocsDir, { overwrite: true }); 
      console.log(`Successfully copied documentation to: ${targetDocsDir}`);
    }

    console.log("\nInitialization complete.");
    console.log(`Rules are in: ${targetRulesDir}`);
    console.log(`Docs are in: ${targetDocsDir}`);

  } catch (err) {
    console.error("Error initializing Cursor assets:", err);
    process.exit(1); // Exit with an error code
  }
}

// --- CLI Execution ---
console.log("Initializing Cursor rules and documentation...");
syncAssets(); // Corrected function call
