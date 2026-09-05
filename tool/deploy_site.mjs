// Stages ONLY the files needed for the Cloudflare Pages deployment into `_site/`.
// Run via the Pages build command: `node tool/deploy_site.mjs`
// The Cloudflare Pages "build output directory" should be set to `_site`.
//
// Deploy set:
//   - index.html                (docs page; fetches README.md at runtime)
//   - benchmark.html            (benchmark page; fetches benchmark JSON)
//   - README.md                 (loaded by index.html)
//   - graphics/                 (logo.svg, merge.png, icon.png, etc.)
//   - benchmark/baseline/*.json (baseline data for benchmark.html)
import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "_site");

// Start from a clean slate so stale files never get deployed.
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "benchmark", "baseline"), { recursive: true });

// Top-level pages.
for (const file of ["index.html", "benchmark.html", "README.md"]) {
    cpSync(join(root, file), join(out, file));
}

// Graphics: the project mark, README images, and favicon.
cpSync(join(root, "graphics"), join(out, "graphics"), { recursive: true });

// Benchmark baselines (all *.json under benchmark/baseline/).
const baselineDir = join(root, "benchmark", "baseline");
for (const file of readdirSync(baselineDir)) {
    if (file.endsWith(".json")) {
        cpSync(join(baselineDir, file), join(out, "benchmark", "baseline", file));
    }
}

console.log(`Staged site into ${out}`);
console.log("Contents:");
for (const entry of readdirSync(out, { recursive: true }).sort()) {
    console.log("  " + entry);
}
