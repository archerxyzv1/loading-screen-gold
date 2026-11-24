// Loading Screen Gold: A Tip in 200 Characters (Node 22, standard library only): it writes
// exactly one tip, a loading-screen tip for stressed developers and AI coding agents, sharp and funny enough to land mid-build, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TIP =
  'Tip: the AI wrote 200 lines in 4 seconds. You will spend 4 hours reading them. That is the deal now.';

if (TIP.length < 1 || TIP.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${TIP.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TIP, 'utf-8');
