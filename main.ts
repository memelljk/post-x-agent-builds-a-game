// Entry point for this make.fun post-x bounty submission (Node 22, standard library only).
//
// The whole job of this program is deliberately tiny: take POST.json from the
// repository root — the file that names the X post carrying our video — and
// place a copy of it in the output directory, where the grader looks for it.
//
// Directory overrides, so the same file works inside the grading container
// and on a laptop:
//   MAKEFUN_BOT_DIR     where POST.json is read from   (default: /bot)
//   MAKEFUN_OUTPUT_DIR  where the copy is written to   (default: /output)
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//   cmp POST.json out/POST.json   <- must be byte-identical

import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Say where we are working from, so a grader log shows at a glance whether
// the container defaults or the local overrides were in play.
console.log(`main.ts: reading from ${botDir}, writing to ${outputDir}`);

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

// Fail loudly and early: a missing POST.json means there is no post to hand
// in, and silently producing an empty output would only waste a submission.
if (!existsSync(source)) {
  console.error(`error: POST.json not found in ${botDir} (looked for ${source})`);
  console.error("hint: run from the repository root, or set MAKEFUN_BOT_DIR to the folder holding POST.json");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`error: could not copy ${source} -> ${target}: ${err.message}`);
  process.exit(1);
}

console.log(`POST.json copied: ${source} -> ${target}`);
