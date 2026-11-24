// Ridiculous at First Glance, Real by the Second — entry program.
//
// Writes one sentence (at most 200 characters) pitching a bizarre startup
// idea that sounds like a joke until the business logic lands, to
// $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// Node 22, standard library only, deterministic: the same sentence every
// run, no network, no secrets, no sleep required — unlike our customers.
//
// The pitch itself: a night bus that drives insomniacs in slow circles
// until they fall asleep. $40 a nap. Cheaper than a hotel, quieter than
// home. The bus was parked all night anyway.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "We run a night bus that drives insomniacs in slow circles until they fall asleep, $40 a nap \u2014 cheaper than a hotel and quieter than home.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
